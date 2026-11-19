import { db } from "@/db";
import { count, eq } from "drizzle-orm";
import { sql } from "drizzle-orm";
import {
  subjects,
  lessons,
  questions,
  institutions,
  programmes,
  resources,
  learners,
  learnerProfiles,
  siteSettings,
  lessonProgress,
  practiceSessions,
  practiceAnswers,
  mentorThreads,
  mentorReplies,
} from "./schema";
import { seedSubjects } from "./seed-subjects";
import { seedQuestions } from "./seed-questions";
import { extraLessons, extraSubjectQuestions, extraSubjects } from "./seed-curriculum-2";
import { bankTopupSciences } from "./seed-questions-4";
import { bankTopupHumanities } from "./seed-questions-5";
import { extraLessons3 } from "./seed-curriculum-3";
import { extraLessons4 } from "./seed-curriculum-4";
import { bankMoreSciences2 } from "./seed-questions-8";
import { bankMoreHumanities2 } from "./seed-questions-9";
import { extraLessons5 } from "./seed-curriculum-5";
import { extraLessons6 } from "./seed-curriculum-6";
import { bankWave5Sciences } from "./seed-questions-10";
import { bankWave5Humanities } from "./seed-questions-11";
import { extraLessons7 } from "./seed-curriculum-7";
import { extraLessons8 } from "./seed-curriculum-8";
import { extraLessons9 } from "./seed-curriculum-9";
import { extraInstitutions2 } from "./seed-admissions-3";
import { bankWave6Sciences } from "./seed-questions-12";
import { bankWave6Humanities } from "./seed-questions-13";
import { extraInstitutions } from "./seed-admissions-2";
import { bankMoreSciences } from "./seed-questions-6";
import { bankMoreHumanities } from "./seed-questions-7";
import { bankSciences } from "./seed-questions-2";
import { bankHumanities } from "./seed-questions-3";
import { bankWave7Sciences } from "./seed-questions-14";
import { bankWave7Humanities } from "./seed-questions-15";
import { seedInstitutions, seedResources } from "./seed-admissions";
import { deriveProfileInsights, emptyProfile, type ProfileInput } from "@/lib/profile";

let seedPromise: Promise<void> | null = null;

async function runSeed() {
  const existing = await db.select({ value: count() }).from(subjects);
  if ((existing[0]?.value ?? 0) > 0) return;

  await db.transaction(async (tx) => {
    // Guard against concurrent cold-start requests seeding twice.
    await tx.execute(sql`select pg_advisory_xact_lock(918273645)`);
    const check = await tx.select({ id: subjects.id }).from(subjects).limit(1);
    if (check.length > 0) return;

    const subjectIdBySlug = new Map<string, number>();
    const lessonIds: { subjectSlug: string; id: number }[] = [];

    // Combined curriculum: core subjects + new JAMB subjects + expanded banks.
    const allSubjects = [...seedSubjects, ...extraSubjects];
    const combinedQuestions: Record<string, { topic: string; prompt: string; options: string[]; correctIndex: number; explanation: string; difficulty: "easy" | "medium" | "hard" }[]> = {};
    for (const bank of [seedQuestions, extraSubjectQuestions, bankSciences, bankHumanities]) {
      for (const [slug, list] of Object.entries(bank)) {
        combinedQuestions[slug] = [...(combinedQuestions[slug] ?? []), ...list];
      }
    }

    for (const subject of allSubjects) {
      const [inserted] = await tx
        .insert(subjects)
        .values({
          slug: subject.slug,
          name: subject.name,
          category: subject.category,
          tagline: subject.tagline,
          description: subject.description,
          icon: subject.icon,
          accent: subject.accent,
          sortOrder: subject.sortOrder,
        })
        .returning({ id: subjects.id });

      subjectIdBySlug.set(subject.slug, inserted.id);

      for (const [index, lesson] of subject.lessons.entries()) {
        const [insertedLesson] = await tx
          .insert(lessons)
          .values({
            subjectId: inserted.id,
            slug: lesson.slug,
            title: lesson.title,
            summary: lesson.summary,
            durationMinutes: lesson.durationMinutes,
            level: lesson.level,
            examWeight: lesson.examWeight,
            sections: lesson.sections,
            keyPoints: lesson.keyPoints,
            sortOrder: index + 1,
          })
          .returning({ id: lessons.id });
        lessonIds.push({ subjectSlug: subject.slug, id: insertedLesson.id });
      }

      const questionSet = combinedQuestions[subject.slug] ?? [];
      if (questionSet.length > 0) {
        await tx.insert(questions).values(
          questionSet.map((question) => ({
            subjectId: inserted.id,
            topic: question.topic,
            prompt: question.prompt,
            options: question.options,
            correctIndex: question.correctIndex,
            explanation: question.explanation,
            difficulty: question.difficulty,
            examYear: "UTME style",
          })),
        );
      }
    }

    // Additional topic lessons for existing subjects (appended after core lessons).
    for (const { subjectSlug, lesson } of extraLessons) {
      const subjectId = subjectIdBySlug.get(subjectSlug);
      if (!subjectId) continue;
      const [insertedLesson] = await tx
        .insert(lessons)
        .values({
          subjectId,
          slug: lesson.slug,
          title: lesson.title,
          summary: lesson.summary,
          durationMinutes: lesson.durationMinutes,
          level: lesson.level,
          examWeight: lesson.examWeight,
          sections: lesson.sections,
          keyPoints: lesson.keyPoints,
          sortOrder: 100 + lessonIds.filter((l) => l.subjectSlug === subjectSlug).length,
        })
        .returning({ id: lessons.id });
      lessonIds.push({ subjectSlug, id: insertedLesson.id });
    }

    // Admissions data
    for (const institution of seedInstitutions) {
      const [inserted] = await tx
        .insert(institutions)
        .values({
          slug: institution.slug,
          name: institution.name,
          shortName: institution.shortName,
          state: institution.state,
          ownership: institution.ownership,
          type: institution.type,
          summary: institution.summary,
        })
        .returning({ id: institutions.id });

      if (institution.programmes.length > 0) {
        await tx.insert(programmes).values(
          institution.programmes.map((programme) => ({
            institutionId: inserted.id,
            ...programme,
          })),
        );
      }
    }

    for (const resource of seedResources) {
      await tx.insert(resources).values({
        subjectId: resource.subjectSlug ? subjectIdBySlug.get(resource.subjectSlug) ?? null : null,
        title: resource.title,
        type: resource.type,
        provider: resource.provider,
        description: resource.description,
        url: resource.url,
        isFree: resource.isFree,
        sortOrder: resource.sortOrder,
      });
    }

    // A demo learner so the dashboard is useful from the first visit.
    // Idempotent: the learner row is preserved across curriculum reseeds.
    const insertedDemo = await tx
      .insert(learners)
      .values({
        name: "Aisha Bello",
        email: "demo@iascend.ng",
        targetScore: 320,
        examYear: 2027,
        targetCourse: "Medicine and Surgery",
        targetInstitution: "University of Lagos",
        state: "Kano",
        studyWindow: "Evenings & weekends",
      })
      .onConflictDoNothing()
      .returning({ id: learners.id });
    let demo = insertedDemo[0];
    if (!demo) {
      const [existingDemo] = await tx
        .select({ id: learners.id })
        .from(learners)
        .where(eq(learners.email, "demo@iascend.ng"))
        .limit(1);
      if (!existingDemo) throw new Error("Demo learner missing after seed insert.");
      demo = existingDemo;
    }

    const completed: string[] = ["english-language", "mathematics", "biology", "chemistry"];
    const progressRows = lessonIds
      .filter((lesson, index) => completed.includes(lesson.subjectSlug) && index % 2 === 0)
      .slice(0, 6)
      .map((lesson, index) => ({
        learnerId: demo.id,
        lessonId: lesson.id,
        completedAt: new Date(Date.now() - (index + 1) * 86_400_000),
      }));
    if (progressRows.length > 0) {
      await tx.insert(lessonProgress).values(progressRows).onConflictDoNothing();
    }

    const physicsId = subjectIdBySlug.get("physics");
    const mathId = subjectIdBySlug.get("mathematics");
    const englishId = subjectIdBySlug.get("english-language");

    if (physicsId) {
      const physicsQuestions = await tx
        .select({ id: questions.id, correctIndex: questions.correctIndex })
        .from(questions)
        .where(eq(questions.subjectId, physicsId))
        .limit(8);

      const correctCount = 6;
      const [physicsSession] = await tx
        .insert(practiceSessions)
        .values({
          learnerId: demo.id,
          subjectIds: [physicsId],
          label: "Physics drill",
          mode: "practice",
          questionCount: physicsQuestions.length,
          durationSeconds: 600,
          status: "completed",
          correctCount,
          scorePercent: Math.round((correctCount / physicsQuestions.length) * 100),
          projectedScore: 300,
          startedAt: new Date(Date.now() - 2 * 86_400_000),
          submittedAt: new Date(Date.now() - 2 * 86_400_000 + 480_000),
        })
        .returning({ id: practiceSessions.id });

      if (physicsQuestions.length > 0) {
        await tx.insert(practiceAnswers).values(
          physicsQuestions.map((question, index) => ({
            sessionId: physicsSession.id,
            questionId: question.id,
            selectedIndex:
              index < correctCount
                ? question.correctIndex
                : (question.correctIndex + 1) % 4,
            isCorrect: index < correctCount ? 1 : 0,
          })),
        );
      }
    }

    const history = [
      { label: "English + Maths mock", subjectIds: [englishId, mathId], correct: 16, total: 20, days: 9, projected: 268 },
      { label: "Biology checkpoint", subjectIds: [subjectIdBySlug.get("biology")], correct: 7, total: 9, days: 5, projected: 276 },
      { label: "Full science mock", subjectIds: [englishId, mathId, physicsId, subjectIdBySlug.get("chemistry")], correct: 24, total: 30, days: 1, projected: 294 },
    ];

    for (const item of history) {
      const cleanIds = item.subjectIds.filter((id): id is number => typeof id === "number");
      await tx.insert(practiceSessions).values({
        learnerId: demo.id,
        subjectIds: cleanIds,
        label: item.label,
        mode: "exam",
        questionCount: item.total,
        durationSeconds: item.total * 60,
        status: "completed",
        correctCount: item.correct,
        scorePercent: Math.round((item.correct / item.total) * 100),
        projectedScore: item.projected,
        startedAt: new Date(Date.now() - item.days * 86_400_000),
        submittedAt: new Date(Date.now() - item.days * 86_400_000 + 1_500_000),
      });
    }

    const [thread1] = await tx
      .insert(mentorThreads)
      .values({
        learnerId: demo.id,
        subjectId: englishId ?? null,
        category: "Academics",
        title: "My English comprehension scores are stuck at 55%",
        body:
          "I read the passage twice but still choose the wrong option for inference questions. I have three months to my UTME. What exactly should I change in the way I practise?",
        status: "answered",
        createdAt: new Date(Date.now() - 6 * 86_400_000),
      })
      .returning({ id: mentorThreads.id });

    await tx.insert(mentorReplies).values([
      {
        threadId: thread1.id,
        authorName: "Mr. Emeka Obi",
        authorRole: "I Ascend English tutor",
        body:
          "Stop re-reading the whole passage. Read the questions first, mark the instruction words, then label each paragraph in three words as you read once. Every answer must be traceable to a line — if you cannot point at it, the option is a distractor. Do two passages a day, timed at 6 minutes each, and log the type of question you missed. Bring that log to our Saturday session.",
        createdAt: new Date(Date.now() - 5 * 86_400_000),
      },
    ]);

    const [thread2] = await tx
      .insert(mentorThreads)
      .values({
        learnerId: demo.id,
        category: "Admissions",
        title: "Can I still study Medicine with a 260 in UTME?",
        body:
          "My family cannot afford a private university. I scored 260 in my mock and I am targeting UNILAG Medicine. Is there any route for me, or should I change my course?",
        status: "open",
        createdAt: new Date(Date.now() - 1 * 86_400_000),
      })
      .returning({ id: mentorThreads.id });

    await tx.insert(mentorReplies).values([
      {
        threadId: thread2.id,
        authorName: "Ms. Halima Yusuf",
        authorRole: "I Ascend admissions mentor",
        body:
          "260 is a strong starting point, not a verdict. Three things to do this week: (1) push your weak subject to 70% in the next two CBT checkpoints; (2) keep UNILAG as a stretch but add two federal universities with Medicine thresholds around 250–270; (3) confirm every O'level credit is in one sitting. We will review your CAPS strategy together after your next mock.",
        createdAt: new Date(Date.now() - 20 * 3_600_000),
      },
    ]);
  });
}

/**
 * Demo learner profile so the mentorship brief is visible from the first visit.
 * Idempotent and independent of the content seed so it also applies to existing databases.
 */
async function ensureDemoProfile() {
  const [demo] = await db
    .select({ id: learners.id })
    .from(learners)
    .where(eq(learners.email, "demo@iascend.ng"))
    .limit(1);
  if (!demo) return;

  const [existing] = await db
    .select({ id: learnerProfiles.id, age: learnerProfiles.age })
    .from(learnerProfiles)
    .where(eq(learnerProfiles.learnerId, demo.id))
    .limit(1);
  if (existing) {
    if (!existing.age || existing.age < 10) {
      await db.update(learnerProfiles).set({ age: 19 }).where(eq(learnerProfiles.learnerId, demo.id));
    }
    return;
  }

  const profile: ProfileInput = {
    ...emptyProfile,
    phone: "08030000000",
    gender: "Female",
    age: 19,
    dateOfBirth: "2007-04-12",
    location: "Kano",
    state: "Kano",
    referralSource: "School or teacher",
    schoolName: "Government Girls Secondary School, Kano",
    schoolType: "Public (government) school",
    graduationYear: "2026",
    olevelStatus: "Yes — five credits secured",
    olevelSitting: "One sitting",
    olevelResults: [
      { subject: "English Language", grade: "B3" },
      { subject: "Mathematics", grade: "B2" },
      { subject: "Biology", grade: "B2" },
      { subject: "Chemistry", grade: "C4" },
      { subject: "Physics", grade: "C5" },
    ],
    firstGeneration: "Yes",
    utmeStatus: "First attempt",
    subjects: ["English Language", "Mathematics", "Biology", "Chemistry"],
    confidence: {
      "English Language": 4,
      Mathematics: 4,
      Biology: 3,
      Chemistry: 3,
    },
    targetCourse: "Medicine and Surgery",
    targetInstitution: "University of Lagos",
    altCourse: "Nursing Science",
    altInstitution: "Ahmadu Bello University",
    studyHours: "11 hours or more",
    studyWindow: "Evenings & weekends",
    studyConsistency: "I study a few times a week",
    studyChallenges: ["I cannot afford materials"],
    deviceAccess: "Yes — smartphone",
    internetAccess: "Intermittent",
    powerAccess: "Sometimes",
    quietSpace: "Sometimes",
    motivation: "I want to become a doctor and prove that a girl from a public school in Kano can do it.",
    biggestFear: "The Chemistry calculations and the crowded comprehension passages.",
    mentorshipGoals: "Study consistently, stop avoiding Chemistry calculations and build a realistic admission plan.",
    guardianName: "Hauwa Bello",
    guardianPhone: "08030000001",
    guardianRelation: "Parent",
    preferredLanguage: "English with Hausa support",
    mentorPreference: "Female mentor",
    meetingMode: "Mix of modes",
    guardianConsent: true,
    consentData: true,
    consentCode: true,
  };

  const insights = deriveProfileInsights(profile);
  await db
    .insert(learnerProfiles)
    .values({
      learnerId: demo.id,
      ...profile,
      guardianConsent: 1,
      consentData: 1,
      consentCode: 1,
      pathway: insights.pathway,
      pathwayReason: insights.pathwayReason,
      riskFlags: insights.riskFlags,
      strengths: insights.strengths,
      mentorFocus: insights.mentorFocus,
      mentorBrief: insights.mentorBrief,
      completeness: insights.completeness,
    })
    .onConflictDoNothing();
}

/**
 * Programme settings so the public site renders sensibly before staff
 * complete setup in /staff/settings. Never overwritten once set.
 */
async function ensureSiteSettings() {
  const defaults: { key: string; value: string }[] = [
    { key: "cohort_name", value: "2027 Cycle A — Pilot Cohort" },
    { key: "applications_open", value: "true" },
    { key: "application_deadline", value: "" },
    { key: "support_phone", value: "" },
    { key: "support_whatsapp", value: "" },
    { key: "support_email", value: "" },
    { key: "safeguarding_name", value: "" },
    { key: "safeguarding_phone", value: "" },
    { key: "safeguarding_email", value: "" },
    { key: "facebook_url", value: "https://www.facebook.com/share/19X4cMKiaE/" },
    { key: "instagram_url", value: "https://www.instagram.com/i_ascend_project" },
  ];
  for (const row of defaults) {
    await db.insert(siteSettings).values(row).onConflictDoNothing();
  }
}

/**
 * Second-wave practice bank. Runs once (marker-guarded) on existing
 * databases so new questions arrive without wiping learner data.
 */
async function ensureQuestionTopup() {
  const TOPUP_MARKER = "If 15% of a number is 45, find the number.";
  const [marker] = await db
    .select({ id: questions.id })
    .from(questions)
    .where(eq(questions.prompt, TOPUP_MARKER))
    .limit(1);
  if (marker) return;

  await db.transaction(async (tx) => {
    await tx.execute(sql`select pg_advisory_xact_lock(918273646)`);
    const [again] = await tx
      .select({ id: questions.id })
      .from(questions)
      .where(eq(questions.prompt, TOPUP_MARKER))
      .limit(1);
    if (again) return;

    const subjectRows = await tx.select({ id: subjects.id, slug: subjects.slug }).from(subjects);
    const idBySlug = new Map(subjectRows.map((row) => [row.slug, row.id] as const));
    for (const bank of [bankTopupSciences, bankTopupHumanities]) {
      for (const [slug, list] of Object.entries(bank)) {
        const subjectId = idBySlug.get(slug);
        if (!subjectId || list.length === 0) continue;
        await tx.insert(questions).values(
          list.map((question) => ({
            subjectId,
            topic: question.topic,
            prompt: question.prompt,
            options: question.options,
            correctIndex: question.correctIndex,
            explanation: question.explanation,
            difficulty: question.difficulty,
            examYear: "UTME style",
          })),
        );
      }
    }
  });
}

/**
 * Third-wave practice bank (foundations, definitions, rapid-fire recall).
 * Marker-guarded like the second wave; safe on live databases.
 */
async function ensureQuestionTopup2() {
  const TOPUP_MARKER_2 = "Find the value of 5! (5 factorial).";
  const [marker] = await db
    .select({ id: questions.id })
    .from(questions)
    .where(eq(questions.prompt, TOPUP_MARKER_2))
    .limit(1);
  if (marker) return;

  await db.transaction(async (tx) => {
    await tx.execute(sql`select pg_advisory_xact_lock(918273647)`);
    const [again] = await tx
      .select({ id: questions.id })
      .from(questions)
      .where(eq(questions.prompt, TOPUP_MARKER_2))
      .limit(1);
    if (again) return;

    const subjectRows = await tx.select({ id: subjects.id, slug: subjects.slug }).from(subjects);
    const idBySlug = new Map(subjectRows.map((row) => [row.slug, row.id] as const));
    for (const bank of [bankMoreSciences, bankMoreHumanities]) {
      for (const [slug, list] of Object.entries(bank)) {
        const subjectId = idBySlug.get(slug);
        if (!subjectId || list.length === 0) continue;
        await tx.insert(questions).values(
          list.map((question) => ({
            subjectId,
            topic: question.topic,
            prompt: question.prompt,
            options: question.options,
            correctIndex: question.correctIndex,
            explanation: question.explanation,
            difficulty: question.difficulty,
            examYear: "UTME style",
          })),
        );
      }
    }
  });
}

/**
 * Fourth-wave lessons (marker-guarded; safe on live databases).
 */
async function ensureLessonTopup2() {
  const LESSON_MARKER = "structure-voice-speech-tags";
  const [marker] = await db
    .select({ id: lessons.id })
    .from(lessons)
    .where(eq(lessons.slug, LESSON_MARKER))
    .limit(1);
  if (marker) return;

  await db.transaction(async (tx) => {
    await tx.execute(sql`select pg_advisory_xact_lock(918273648)`);
    const [again] = await tx
      .select({ id: lessons.id })
      .from(lessons)
      .where(eq(lessons.slug, LESSON_MARKER))
      .limit(1);
    if (again) return;

    let order = 200;
    for (const { subjectSlug, lesson } of [...extraLessons3, ...extraLessons4]) {
      const [subject] = await tx
        .select({ id: subjects.id })
        .from(subjects)
        .where(eq(subjects.slug, subjectSlug))
        .limit(1);
      if (!subject) continue;
      await tx.insert(lessons).values({
        subjectId: subject.id,
        slug: lesson.slug,
        title: lesson.title,
        summary: lesson.summary,
        durationMinutes: lesson.durationMinutes,
        level: lesson.level,
        examWeight: lesson.examWeight,
        sections: lesson.sections,
        keyPoints: lesson.keyPoints,
        sortOrder: order,
      });
      order += 1;
    }
  });
}

/**
 * Fourth-wave practice bank (marker-guarded; safe on live databases).
 */
async function ensureQuestionTopup3() {
  const TOPUP_MARKER_3 = "The chemical formula of water is:";
  const [marker] = await db
    .select({ id: questions.id })
    .from(questions)
    .where(eq(questions.prompt, TOPUP_MARKER_3))
    .limit(1);
  if (marker) return;

  await db.transaction(async (tx) => {
    await tx.execute(sql`select pg_advisory_xact_lock(918273649)`);
    const [again] = await tx
      .select({ id: questions.id })
      .from(questions)
      .where(eq(questions.prompt, TOPUP_MARKER_3))
      .limit(1);
    if (again) return;

    const subjectRows = await tx.select({ id: subjects.id, slug: subjects.slug }).from(subjects);
    const idBySlug = new Map(subjectRows.map((row) => [row.slug, row.id] as const));
    for (const bank of [bankMoreSciences2, bankMoreHumanities2]) {
      for (const [slug, list] of Object.entries(bank)) {
        const subjectId = idBySlug.get(slug);
        if (!subjectId || list.length === 0) continue;
        await tx.insert(questions).values(
          list.map((question) => ({
            subjectId,
            topic: question.topic,
            prompt: question.prompt,
            options: question.options,
            correctIndex: question.correctIndex,
            explanation: question.explanation,
            difficulty: question.difficulty,
            examYear: "UTME style",
          })),
        );
      }
    }
  });
}

/**
 * Fifth-wave lessons (marker-guarded; safe on live databases).
 */
async function ensureLessonTopup3() {
  const LESSON_MARKER = "idioms-and-registers";
  const [marker] = await db
    .select({ id: lessons.id })
    .from(lessons)
    .where(eq(lessons.slug, LESSON_MARKER))
    .limit(1);
  if (marker) return;

  await db.transaction(async (tx) => {
    await tx.execute(sql`select pg_advisory_xact_lock(918273650)`);
    const [again] = await tx
      .select({ id: lessons.id })
      .from(lessons)
      .where(eq(lessons.slug, LESSON_MARKER))
      .limit(1);
    if (again) return;

    let order = 300;
    for (const { subjectSlug, lesson } of [...extraLessons5, ...extraLessons6]) {
      const [subject] = await tx
        .select({ id: subjects.id })
        .from(subjects)
        .where(eq(subjects.slug, subjectSlug))
        .limit(1);
      if (!subject) continue;
      await tx.insert(lessons).values({
        subjectId: subject.id,
        slug: lesson.slug,
        title: lesson.title,
        summary: lesson.summary,
        durationMinutes: lesson.durationMinutes,
        level: lesson.level,
        examWeight: lesson.examWeight,
        sections: lesson.sections,
        keyPoints: lesson.keyPoints,
        sortOrder: order,
      });
      order += 1;
    }
  });
}

/**
 * Fifth-wave practice bank (marker-guarded; safe on live databases).
 */
async function ensureQuestionTopup4() {
  const TOPUP_MARKER_4 = "Two bells toll together at 6:00 a.m., one every 12 minutes and the other every 18 minutes. When do they next toll together?";
  const [marker] = await db
    .select({ id: questions.id })
    .from(questions)
    .where(eq(questions.prompt, TOPUP_MARKER_4))
    .limit(1);
  if (marker) return;

  await db.transaction(async (tx) => {
    await tx.execute(sql`select pg_advisory_xact_lock(918273651)`);
    const [again] = await tx
      .select({ id: questions.id })
      .from(questions)
      .where(eq(questions.prompt, TOPUP_MARKER_4))
      .limit(1);
    if (again) return;

    const subjectRows = await tx.select({ id: subjects.id, slug: subjects.slug }).from(subjects);
    const idBySlug = new Map(subjectRows.map((row) => [row.slug, row.id] as const));
    for (const bank of [bankWave5Sciences, bankWave5Humanities]) {
      for (const [slug, list] of Object.entries(bank)) {
        const subjectId = idBySlug.get(slug);
        if (!subjectId || list.length === 0) continue;
        await tx.insert(questions).values(
          list.map((question) => ({
            subjectId,
            topic: question.topic,
            prompt: question.prompt,
            options: question.options,
            correctIndex: question.correctIndex,
            explanation: question.explanation,
            difficulty: question.difficulty,
            examYear: "UTME style",
          })),
        );
      }
    }
  });
}

/**
 * A first published story so the Stories section is alive from day one.
 * Staff can edit or delete it; the marker guard means it never reappears.
 */
async function ensureWelcomeArticle() {
  const SLUG = "welcome-to-i-ascend-stories";
  const slug = SLUG;
  const title = "Stories are live: news, guidance and celebrations";
  const excerpt =
    "Study guides, admission news and community celebrations — published here and shared on our social pages.";
  const body = `## Every learner has a story. So does this project.

Welcome to I Ascend Stories — news, study guides and celebrations from the community. If it helps one more candidate dream, prepare and achieve, it belongs here.

## What you will find here

- **Study guides** that go deeper than any single lesson.
- **Admission news** — deadlines, CAPS steps and screening guidance.
- **Celebrations** — learners who earned their admission letters.

## Follow the journey

Follow **I Ascend Project** on Facebook and Instagram, where every story is also shared.`;
  const author = "I Ascend Project";
  await db.execute(sql`
    insert into articles (slug, title, excerpt, body, author_name, status, published_at)
    select ${slug}, ${title}, ${excerpt}, ${body}, ${author}, ${"published"}, now()
    where not exists (select 1 from articles where slug = ${slug})
  `);
}

/**
 * Sixth-wave lessons (marker-guarded; safe on live databases).
 */
async function ensureLessonTopup5() {
  const LESSON_MARKER = "synonyms-antonyms-substitutes";
  const [marker] = await db
    .select({ id: lessons.id })
    .from(lessons)
    .where(eq(lessons.slug, LESSON_MARKER))
    .limit(1);
  if (marker) return;

  await db.transaction(async (tx) => {
    await tx.execute(sql`select pg_advisory_xact_lock(918273654)`);
    const [again] = await tx
      .select({ id: lessons.id })
      .from(lessons)
      .where(eq(lessons.slug, LESSON_MARKER))
      .limit(1);
    if (again) return;

    let order = 400;
    for (const { subjectSlug, lesson } of extraLessons7) {
      const [subject] = await tx
        .select({ id: subjects.id })
        .from(subjects)
        .where(eq(subjects.slug, subjectSlug))
        .limit(1);
      if (!subject) continue;
      await tx.insert(lessons).values({
        subjectId: subject.id,
        slug: lesson.slug,
        title: lesson.title,
        summary: lesson.summary,
        durationMinutes: lesson.durationMinutes,
        level: lesson.level,
        examWeight: lesson.examWeight,
        sections: lesson.sections,
        keyPoints: lesson.keyPoints,
        sortOrder: order,
      });
      order += 1;
    }
  });
}

/**
 * Sixth-wave practice bank (marker-guarded; safe on live databases).
 */
async function ensureQuestionTopup6() {
  const TOPUP_MARKER_6 = "If y varies directly as x\u00b2 and y = 18 when x = 3, find y when x = 5.";
  const [marker] = await db
    .select({ id: questions.id })
    .from(questions)
    .where(eq(questions.prompt, TOPUP_MARKER_6))
    .limit(1);
  if (marker) return;

  await db.transaction(async (tx) => {
    await tx.execute(sql`select pg_advisory_xact_lock(918273655)`);
    const [again] = await tx
      .select({ id: questions.id })
      .from(questions)
      .where(eq(questions.prompt, TOPUP_MARKER_6))
      .limit(1);
    if (again) return;

    const subjectRows = await tx.select({ id: subjects.id, slug: subjects.slug }).from(subjects);
    const idBySlug = new Map(subjectRows.map((row) => [row.slug, row.id] as const));
    for (const bank of [bankWave6Sciences, bankWave6Humanities]) {
      for (const [slug, list] of Object.entries(bank)) {
        const subjectId = idBySlug.get(slug);
        if (!subjectId || list.length === 0) continue;
        await tx.insert(questions).values(
          list.map((question) => ({
            subjectId,
            topic: question.topic,
            prompt: question.prompt,
            options: question.options,
            correctIndex: question.correctIndex,
            explanation: question.explanation,
            difficulty: question.difficulty,
            examYear: "UTME style",
          })),
        );
      }
    }
  });
}

/**
 * Second-wave institutions (marker-guarded; safe on live databases).
 */
async function ensureInstitutionTopup() {
  const MARKER = "ahmadu-bello-university";
  const [marker] = await db
    .select({ id: institutions.id })
    .from(institutions)
    .where(eq(institutions.slug, MARKER))
    .limit(1);
  if (marker) return;

  await db.transaction(async (tx) => {
    await tx.execute(sql`select pg_advisory_xact_lock(918273656)`);
    const [again] = await tx
      .select({ id: institutions.id })
      .from(institutions)
      .where(eq(institutions.slug, MARKER))
      .limit(1);
    if (again) return;

    for (const institution of extraInstitutions) {
      const [inserted] = await tx
        .insert(institutions)
        .values({
          slug: institution.slug,
          name: institution.name,
          shortName: institution.shortName,
          state: institution.state,
          ownership: institution.ownership,
          type: institution.type,
          summary: institution.summary,
        })
        .returning({ id: institutions.id });
      if (institution.programmes.length > 0) {
        await tx.insert(programmes).values(
          institution.programmes.map((programme) => ({
            institutionId: inserted.id,
            ...programme,
          })),
        );
      }
    }
  });
}

/**
 * Seventh-wave lessons (marker-guarded; safe on live databases).
 */
async function ensureLessonTopup6() {
  const LESSON_MARKER = "word-problems-masterclass";
  const [marker] = await db
    .select({ id: lessons.id })
    .from(lessons)
    .where(eq(lessons.slug, LESSON_MARKER))
    .limit(1);
  if (marker) return;

  await db.transaction(async (tx) => {
    await tx.execute(sql`select pg_advisory_xact_lock(918273657)`);
    const [again] = await tx
      .select({ id: lessons.id })
      .from(lessons)
      .where(eq(lessons.slug, LESSON_MARKER))
      .limit(1);
    if (again) return;

    let order = 600;
    for (const { subjectSlug, lesson } of [...extraLessons8, ...extraLessons9]) {
      const [subject] = await tx
        .select({ id: subjects.id })
        .from(subjects)
        .where(eq(subjects.slug, subjectSlug))
        .limit(1);
      if (!subject) continue;
      await tx.insert(lessons).values({
        subjectId: subject.id,
        slug: lesson.slug,
        title: lesson.title,
        summary: lesson.summary,
        durationMinutes: lesson.durationMinutes,
        level: lesson.level,
        examWeight: lesson.examWeight,
        sections: lesson.sections,
        keyPoints: lesson.keyPoints,
        sortOrder: order,
      });
      order += 1;
    }
  });
}

/**
 * Third-wave institutions (marker-guarded; safe on live databases).
 */
async function ensureInstitutionTopup2() {
  const MARKER = "federal-university-of-petroleum-resources";
  const [marker] = await db
    .select({ id: institutions.id })
    .from(institutions)
    .where(eq(institutions.slug, MARKER))
    .limit(1);
  if (marker) return;

  await db.transaction(async (tx) => {
    await tx.execute(sql`select pg_advisory_xact_lock(918273658)`);
    const [again] = await tx
      .select({ id: institutions.id })
      .from(institutions)
      .where(eq(institutions.slug, MARKER))
      .limit(1);
    if (again) return;

    for (const institution of extraInstitutions2) {
      const [inserted] = await tx
        .insert(institutions)
        .values({
          slug: institution.slug,
          name: institution.name,
          shortName: institution.shortName,
          state: institution.state,
          ownership: institution.ownership,
          type: institution.type,
          summary: institution.summary,
        })
        .returning({ id: institutions.id });
      if (institution.programmes.length > 0) {
        await tx.insert(programmes).values(
          institution.programmes.map((programme) => ({
            institutionId: inserted.id,
            ...programme,
          })),
        );
      }
    }
  });
}

/**
 * One-time reconciliation: inserts any bank question or lesson that is
 * missing from the database (covers content whose wave-topup was skipped
 * before its marker existed). Guarded by a version sentinel so it runs once.
 */
async function ensureContentReconciliation() {
  const [done] = await db
    .select({ key: siteSettings.key })
    .from(siteSettings)
    .where(eq(siteSettings.key, "content_recon_v1"))
    .limit(1);
  if (done) return;

  const banks = [
    seedQuestions,
    extraSubjectQuestions,
    bankSciences,
    bankHumanities,
    bankTopupSciences,
    bankTopupHumanities,
    bankMoreSciences,
    bankMoreHumanities,
    bankMoreSciences2,
    bankMoreHumanities2,
    bankWave5Sciences,
    bankWave5Humanities,
    bankWave6Sciences,
    bankWave6Humanities,
    bankWave7Sciences,
    bankWave7Humanities,
  ];
  const existingPrompts = new Set(
    (await db.select({ prompt: questions.prompt }).from(questions)).map((r) => r.prompt),
  );
  const subjectRows = await db.select({ id: subjects.id, slug: subjects.slug }).from(subjects);
  const idBySlug = new Map(subjectRows.map((row) => [row.slug, row.id] as const));

  let insertedQuestions = 0;
  for (const bank of banks) {
    for (const [slug, list] of Object.entries(bank)) {
      const subjectId = idBySlug.get(slug);
      if (!subjectId) continue;
      const missing = list.filter((q) => !existingPrompts.has(q.prompt));
      if (missing.length === 0) continue;
      await db.insert(questions).values(
        missing.map((question) => ({
          subjectId,
          topic: question.topic,
          prompt: question.prompt,
          options: question.options,
          correctIndex: question.correctIndex,
          explanation: question.explanation,
          difficulty: question.difficulty,
          examYear: "UTME style",
        })),
      );
      for (const q of missing) existingPrompts.add(q.prompt);
      insertedQuestions += missing.length;
    }
  }

  const lessonArrays = [
    extraLessons,
    extraLessons3,
    extraLessons4,
    extraLessons5,
    extraLessons6,
    extraLessons7,
    extraLessons8,
    extraLessons9,
  ];
  const existingLessons = new Set(
    (
      await db
        .select({ subjectId: lessons.subjectId, slug: lessons.slug })
        .from(lessons)
    ).map((r) => `${r.subjectId}:${r.slug}`),
  );
  let insertedLessons = 0;
  let order = 900;
  for (const arr of lessonArrays) {
    for (const { subjectSlug, lesson } of arr) {
      const subjectId = idBySlug.get(subjectSlug);
      if (!subjectId) continue;
      if (existingLessons.has(`${subjectId}:${lesson.slug}`)) continue;
      await db.insert(lessons).values({
        subjectId,
        slug: lesson.slug,
        title: lesson.title,
        summary: lesson.summary,
        durationMinutes: lesson.durationMinutes,
        level: lesson.level,
        examWeight: lesson.examWeight,
        sections: lesson.sections,
        keyPoints: lesson.keyPoints,
        sortOrder: order,
      });
      existingLessons.add(`${subjectId}:${lesson.slug}`);
      insertedLessons += 1;
      order += 1;
    }
  }

  await db
    .insert(siteSettings)
    .values({ key: "content_recon_v1", value: `q:${insertedQuestions},l:${insertedLessons}` })
    .onConflictDoNothing();
}

export function ensureSeeded() {
  if (!seedPromise) {
    seedPromise = (async () => {
      await runSeed();
      // Demo content is for evaluation only. Production sets DISABLE_DEMO_SEED=true.
      if (process.env.DISABLE_DEMO_SEED !== "true") {
        await ensureDemoProfile();
      }
      await ensureSiteSettings();
      await ensureQuestionTopup();
      await ensureQuestionTopup2();
      await ensureLessonTopup2();
      await ensureQuestionTopup3();
      await ensureLessonTopup3();
      await ensureQuestionTopup4();
      await ensureWelcomeArticle();
      await ensureLessonTopup5();
      await ensureQuestionTopup6();
      await ensureInstitutionTopup();
      await ensureLessonTopup6();
      await ensureInstitutionTopup2();
      await ensureContentReconciliation();
    })().catch((error) => {
      seedPromise = null;
      throw error;
    });
  }
  return seedPromise;
}
