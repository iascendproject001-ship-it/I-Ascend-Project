import { and, asc, desc, eq, ilike, inArray, sql } from "drizzle-orm";
import { db } from "@/db";
import {
  institutions,
  iadps,
  learnerProfiles,
  lessonProgress,
  lessons,
  mentorReplies,
  mentorThreads,
  practiceAnswers,
  practiceSessions,
  programmes,
  questions,
  resources,
  subjects,
  type Lesson,
  type MentorThread,
  type Question,
  type Subject,
} from "@/db/schema";
import { ensureSeeded } from "@/db/seed";

export type SubjectWithMeta = Subject & {
  lessonCount: number;
  questionCount: number;
  totalMinutes: number;
  completedCount: number;
};

export type SubjectCard = {
  id: number;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  icon: string;
  accent: string;
  lessonCount: number;
  questionCount: number;
};

export function projectedScore(percent: number) {
  // Four UTME subjects, 100 marks each. A 70% average across four papers ≈ 280.
  return Math.round(Math.min(400, Math.max(0, percent * 4)));
}

export function readinessBand(percent: number) {
  if (percent >= 75) return { label: "On track for 300+", tone: "emerald" as const };
  if (percent >= 60) return { label: "Building — target 250+", tone: "gold" as const };
  if (percent >= 40) return { label: "Foundation stage", tone: "amber" as const };
  return { label: "Start with the fundamentals", tone: "slate" as const };
}

export async function getLearnerProfile(learnerId: number) {
  await ensureSeeded();
  const [profile] = await db
    .select()
    .from(learnerProfiles)
    .where(eq(learnerProfiles.learnerId, learnerId))
    .limit(1);
  return profile ?? null;
}

export async function getSubjects(learnerId?: number): Promise<SubjectWithMeta[]> {
  await ensureSeeded();
  const subjectRows = await db.select().from(subjects).orderBy(asc(subjects.sortOrder));
  const lessonRows = await db
    .select({
      subjectId: lessons.subjectId,
      durationMinutes: lessons.durationMinutes,
    })
    .from(lessons);
  const questionRows = await db
    .select({ subjectId: questions.subjectId, value: sql<number>`count(*)::int` })
    .from(questions)
    .groupBy(questions.subjectId);

  const completed = learnerId
    ? await db
        .select({ subjectId: lessons.subjectId })
        .from(lessonProgress)
        .innerJoin(lessons, eq(lessons.id, lessonProgress.lessonId))
        .where(eq(lessonProgress.learnerId, learnerId))
    : [];

  return subjectRows.map((subject) => {
    const subjectLessons = lessonRows.filter((lesson) => lesson.subjectId === subject.id);
    return {
      ...subject,
      lessonCount: subjectLessons.length,
      totalMinutes: subjectLessons.reduce((sum, lesson) => sum + lesson.durationMinutes, 0),
      questionCount: questionRows.find((row) => row.subjectId === subject.id)?.value ?? 0,
      completedCount: completed.filter((row) => row.subjectId === subject.id).length,
    };
  });
}

export async function getSubjectCards(): Promise<SubjectCard[]> {
  const rows = await getSubjects();
  return rows.map((row) => ({
    id: row.id,
    slug: row.slug,
    name: row.name,
    category: row.category,
    tagline: row.tagline,
    icon: row.icon,
    accent: row.accent,
    lessonCount: row.lessonCount,
    questionCount: row.questionCount,
  }));
}

export async function getSubjectBySlug(slug: string) {
  await ensureSeeded();
  const [subject] = await db.select().from(subjects).where(eq(subjects.slug, slug)).limit(1);
  return subject ?? null;
}

export async function getSubjectLessons(subjectId: number) {
  return db
    .select()
    .from(lessons)
    .where(eq(lessons.subjectId, subjectId))
    .orderBy(asc(lessons.sortOrder));
}

export async function getSubjectLessonProgress(learnerId: number, subjectId: number) {
  const rows = await db
    .select({ lessonId: lessonProgress.lessonId })
    .from(lessonProgress)
    .innerJoin(lessons, eq(lessons.id, lessonProgress.lessonId))
    .where(and(eq(lessonProgress.learnerId, learnerId), eq(lessons.subjectId, subjectId)));
  return new Set(rows.map((row) => row.lessonId));
}

export async function getLessonDetail(subjectSlug: string, lessonSlug: string) {
  await ensureSeeded();
  const subject = await getSubjectBySlug(subjectSlug);
  if (!subject) return null;
  const subjectLessons = await getSubjectLessons(subject.id);
  const index = subjectLessons.findIndex((lesson) => lesson.slug === lessonSlug);
  if (index === -1) return null;
  return {
    subject,
    lesson: subjectLessons[index],
    previous: index > 0 ? subjectLessons[index - 1] : null,
    next: index < subjectLessons.length - 1 ? subjectLessons[index + 1] : null,
    totalInSubject: subjectLessons.length,
    position: index + 1,
  };
}

export async function isLessonComplete(learnerId: number, lessonId: number) {
  const [row] = await db
    .select({ id: lessonProgress.id })
    .from(lessonProgress)
    .where(and(eq(lessonProgress.learnerId, learnerId), eq(lessonProgress.lessonId, lessonId)))
    .limit(1);
  return Boolean(row);
}

export type SessionSummary = {
  id: number;
  label: string;
  mode: string;
  questionCount: number;
  correctCount: number;
  scorePercent: number;
  projectedScore: number;
  status: string;
  startedAt: Date;
  submittedAt: Date | null;
  subjectIds: number[];
};

export async function getPracticeHistory(learnerId: number, limit = 12) {
  await ensureSeeded();
  const rows = await db
    .select()
    .from(practiceSessions)
    .where(eq(practiceSessions.learnerId, learnerId))
    .orderBy(desc(practiceSessions.startedAt))
    .limit(limit);
  return rows.map((row) => ({
    id: row.id,
    label: row.label,
    mode: row.mode,
    questionCount: row.questionCount,
    correctCount: row.correctCount,
    scorePercent: row.scorePercent,
    projectedScore: row.projectedScore,
    status: row.status,
    startedAt: row.startedAt,
    submittedAt: row.submittedAt,
    subjectIds: row.subjectIds,
  })) satisfies SessionSummary[];
}

export async function getSubjectNames() {
  const rows = await db.select({ id: subjects.id, name: subjects.name }).from(subjects);
  return new Map(rows.map((row) => [row.id, row.name]));
}

export async function getDashboard(learnerId: number) {
  await ensureSeeded();
  const [subjectRows, history, progressRows, recentThreads] = await Promise.all([
    getSubjects(learnerId),
    getPracticeHistory(learnerId, 6),
    db
      .select({ lessonId: lessonProgress.lessonId, completedAt: lessonProgress.completedAt })
      .from(lessonProgress)
      .where(eq(lessonProgress.learnerId, learnerId))
      .orderBy(desc(lessonProgress.completedAt))
      .limit(6),
    db
      .select()
      .from(mentorThreads)
      .where(eq(mentorThreads.learnerId, learnerId))
      .orderBy(desc(mentorThreads.createdAt))
      .limit(3),
  ]);

  const completedIds = new Set(progressRows.map((row) => row.lessonId));
  const recentLessons = await db
    .select({
      id: lessons.id,
      title: lessons.title,
      slug: lessons.slug,
      summary: lessons.summary,
      durationMinutes: lessons.durationMinutes,
      subjectName: subjects.name,
      subjectSlug: subjects.slug,
      accent: subjects.accent,
      icon: subjects.icon,
    })
    .from(lessons)
    .innerJoin(subjects, eq(subjects.id, lessons.subjectId))
    .orderBy(asc(subjects.sortOrder), asc(lessons.sortOrder))
    .limit(16);

  const completedSessions = history.filter((session) => session.status === "completed");
  const averageScore =
    completedSessions.length > 0
      ? Math.round(
          completedSessions.reduce((sum, session) => sum + session.scorePercent, 0) /
            completedSessions.length,
        )
      : 0;
  const totalLessons = subjectRows.reduce((sum, subject) => sum + subject.lessonCount, 0);
  const completedLessons = subjectRows.reduce((sum, subject) => sum + subject.completedCount, 0);
  const weakest = [...subjectRows].sort((a, b) => a.completedCount - b.completedCount).slice(0, 2);

  const nextLesson =
    recentLessons.find((lesson) => !completedIds.has(lesson.id)) ?? recentLessons[0] ?? null;

  return {
    subjects: subjectRows,
    history,
    averageScore,
    totalLessons,
    completedLessons,
    nextLesson,
    weakest,
    threads: recentThreads,
    questionsAvailable: subjectRows.reduce((sum, subject) => sum + subject.questionCount, 0),
  };
}

export type AdmissionsFilters = {
  q?: string;
  state?: string;
  ownership?: string;
  maxCutoff?: number;
};

export async function getAdmissionsData(filters: AdmissionsFilters = {}) {
  await ensureSeeded();
  const institutionRows = await db
    .select()
    .from(institutions)
    .orderBy(asc(institutions.name));

  const conditions = [];
  if (filters.q) conditions.push(ilike(programmes.name, `%${filters.q}%`));
  if (filters.maxCutoff) conditions.push(sql`${programmes.competitiveCutoff} <= ${filters.maxCutoff}`);

  const programmeRows = await db
    .select({
      id: programmes.id,
      name: programmes.name,
      faculty: programmes.faculty,
      jambCutoff: programmes.jambCutoff,
      competitiveCutoff: programmes.competitiveCutoff,
      durationYears: programmes.durationYears,
      subjectCombo: programmes.subjectCombo,
      olevel: programmes.olevel,
      notes: programmes.notes,
      institutionName: institutions.name,
      institutionShort: institutions.shortName,
      institutionSlug: institutions.slug,
      state: institutions.state,
      ownership: institutions.ownership,
      type: institutions.type,
    })
    .from(programmes)
    .innerJoin(institutions, eq(institutions.id, programmes.institutionId))
    .where(conditions.length > 0 ? and(...conditions) : undefined)
    .orderBy(asc(programmes.competitiveCutoff));

  const filtered = programmeRows.filter((row) => {
    if (filters.state && row.state !== filters.state) return false;
    if (filters.ownership && row.ownership !== filters.ownership) return false;
    return true;
  });

  return {
    institutions: institutionRows,
    programmes: filtered,
    states: [...new Set(institutionRows.map((row) => row.state))].sort(),
    totalProgrammes: programmeRows.length,
  };
}

export async function getResources() {
  await ensureSeeded();
  return db
    .select({
      id: resources.id,
      title: resources.title,
      type: resources.type,
      provider: resources.provider,
      description: resources.description,
      url: resources.url,
      isFree: resources.isFree,
      subjectName: subjects.name,
      subjectSlug: subjects.slug,
      icon: subjects.icon,
    })
    .from(resources)
    .leftJoin(subjects, eq(subjects.id, resources.subjectId))
    .orderBy(asc(resources.sortOrder));
}

export async function getThreads(learnerId: number) {
  await ensureSeeded();
  const threads = await db
    .select()
    .from(mentorThreads)
    .where(eq(mentorThreads.learnerId, learnerId))
    .orderBy(desc(mentorThreads.createdAt));
  const replies = threads.length
    ? await db
        .select({ threadId: mentorReplies.threadId, id: mentorReplies.id })
        .from(mentorReplies)
        .where(
          inArray(
            mentorReplies.threadId,
            threads.map((thread) => thread.id),
          ),
        )
    : [];
  return threads.map((thread) => ({
    ...thread,
    replyCount: replies.filter((reply) => reply.threadId === thread.id).length,
  }));
}

export async function getThreadDetail(learnerId: number, threadId: number) {
  await ensureSeeded();
  const [thread] = await db
    .select()
    .from(mentorThreads)
    .where(and(eq(mentorThreads.id, threadId), eq(mentorThreads.learnerId, learnerId)))
    .limit(1);
  if (!thread) return null;
  const replies = await db
    .select()
    .from(mentorReplies)
    .where(eq(mentorReplies.threadId, threadId))
    .orderBy(asc(mentorReplies.createdAt));
  return { thread, replies };
}

export type SessionQuestion = Omit<Question, "correctIndex" | "explanation">;

export async function getSessionForLearner(sessionId: number, learnerId: number) {
  await ensureSeeded();
  const [session] = await db
    .select()
    .from(practiceSessions)
    .where(and(eq(practiceSessions.id, sessionId), eq(practiceSessions.learnerId, learnerId)))
    .limit(1);
  if (!session) return null;

  const answers = await db
    .select({
      answerId: practiceAnswers.id,
      questionId: practiceAnswers.questionId,
      selectedIndex: practiceAnswers.selectedIndex,
      isCorrect: practiceAnswers.isCorrect,
      prompt: questions.prompt,
      options: questions.options,
      topic: questions.topic,
      correctIndex: questions.correctIndex,
      explanation: questions.explanation,
      subjectName: subjects.name,
      subjectSlug: subjects.slug,
      subjectIcon: subjects.icon,
      accent: subjects.accent,
    })
    .from(practiceAnswers)
    .innerJoin(questions, eq(questions.id, practiceAnswers.questionId))
    .innerJoin(subjects, eq(subjects.id, questions.subjectId))
    .where(eq(practiceAnswers.sessionId, sessionId))
    .orderBy(asc(practiceAnswers.id));

  return { session, answers };
}

export async function getLatestIadp(learnerId: number) {
  await ensureSeeded();
  const [row] = await db
    .select()
    .from(iadps)
    .where(and(eq(iadps.learnerId, learnerId), eq(iadps.status, "active")))
    .orderBy(desc(iadps.createdAt))
    .limit(1);
  return row ?? null;
}

export async function getIadpForSession(sessionId: number, learnerId: number) {
  await ensureSeeded();
  const [row] = await db
    .select()
    .from(iadps)
    .where(and(eq(iadps.sessionId, sessionId), eq(iadps.learnerId, learnerId)))
    .limit(1);
  return row ?? null;
}

export async function getBaselineSessions(learnerId: number) {
  await ensureSeeded();
  return db
    .select()
    .from(practiceSessions)
    .where(and(eq(practiceSessions.learnerId, learnerId), eq(practiceSessions.mode, "baseline")))
    .orderBy(desc(practiceSessions.startedAt))
    .limit(10);
}

export async function getTopicMastery(learnerId: number, limit = 8) {
  await ensureSeeded();
  const rows = await db
    .select({
      subjectName: subjects.name,
      subjectSlug: subjects.slug,
      topic: questions.topic,
      correct: sql<number>`sum(${practiceAnswers.isCorrect})::int`,
      total: sql<number>`count(*)::int`,
    })
    .from(practiceAnswers)
    .innerJoin(practiceSessions, eq(practiceSessions.id, practiceAnswers.sessionId))
    .innerJoin(questions, eq(questions.id, practiceAnswers.questionId))
    .innerJoin(subjects, eq(subjects.id, questions.subjectId))
    .where(and(eq(practiceSessions.learnerId, learnerId), eq(practiceSessions.status, "completed")))
    .groupBy(subjects.name, subjects.slug, questions.topic)
    .having(sql`count(*) >= 3`)
    .orderBy(sql`sum(${practiceAnswers.isCorrect})::float / nullif(count(*), 0) asc`)
    .limit(limit);
  return rows.map((row) => ({
    ...row,
    percent: row.total > 0 ? Math.round((row.correct / row.total) * 100) : 0,
  }));
}

export type ProgressOverview = Awaited<ReturnType<typeof getDashboard>>;

export async function getLessonById(lessonId: number): Promise<Lesson | null> {
  const [lesson] = await db.select().from(lessons).where(eq(lessons.id, lessonId)).limit(1);
  return lesson ?? null;
}

export async function getPublicStats() {
  await ensureSeeded();
  const [subjectCount] = await db.select({ value: sql<number>`count(*)::int` }).from(subjects);
  const [lessonCount] = await db.select({ value: sql<number>`count(*)::int` }).from(lessons);
  const [questionCount] = await db.select({ value: sql<number>`count(*)::int` }).from(questions);
  const [programmeCount] = await db.select({ value: sql<number>`count(*)::int` }).from(programmes);
  const [institutionCount] = await db.select({ value: sql<number>`count(*)::int` }).from(institutions);
  return {
    subjects: subjectCount?.value ?? 0,
    lessons: lessonCount?.value ?? 0,
    questions: questionCount?.value ?? 0,
    programmes: programmeCount?.value ?? 0,
    institutions: institutionCount?.value ?? 0,
  };
}

export type ThreadWithCount = MentorThread & { replyCount: number };
