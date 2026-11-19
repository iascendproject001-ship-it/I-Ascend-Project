"use server";
import { signLearnerId } from "@/lib/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { and, eq } from "drizzle-orm";
import { db } from "@/db";
import {
  learnerProfiles,
  learners,
  lessonProgress,
  mentorReplies,
  mentorThreads,
  registrations,
} from "@/db/schema";
import { ensureSeeded } from "@/db/seed";
import { DEMO_EMAIL, LEARNER_COOKIE, getCurrentLearner } from "@/lib/session";
import {
  deriveProfileInsights,
  validateProfileStep,
  type OLevelResult,
  type ProfileInput,
  type UtmeAttempt,
} from "@/lib/profile";

const COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: "lax" as const,
  path: "/",
  secure: process.env.NODE_ENV === "production",
  maxAge: 60 * 60 * 24 * 365,
};

function text(formData: FormData, key: string, fallback = "") {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : fallback;
}

function number(formData: FormData, key: string, fallback: number) {
  const value = Number(formData.get(key));
  return Number.isFinite(value) ? value : fallback;
}

export async function startProgramme(formData: FormData) {
  await ensureSeeded();
  const name = text(formData, "name");
  const email = text(formData, "email").toLowerCase();

  if (name.length < 2 || !email.includes("@")) {
    redirect("/start?error=details");
  }

  const values = {
    name,
    email,
    targetScore: Math.min(400, Math.max(180, number(formData, "targetScore", 300))),
    examYear: number(formData, "examYear", 2027),
    targetCourse: text(formData, "targetCourse", "Undecided"),
    targetInstitution: text(formData, "targetInstitution", "Undecided"),
    state: text(formData, "state"),
    studyWindow: text(formData, "studyWindow", "Evenings & weekends"),
  };

  const [learner] = await db
    .insert(learners)
    .values(values)
    .onConflictDoUpdate({ target: learners.email, set: values })
    .returning({ id: learners.id });

  const store = await cookies();
  store.set(LEARNER_COOKIE, signLearnerId(learner.id), COOKIE_OPTIONS);
  redirect("/dashboard");
}

export async function demoLogin() {
  if (process.env.DISABLE_DEMO_SEED === "true") redirect("/start");
  await ensureSeeded();
  const [demo] = await db
    .select({ id: learners.id })
    .from(learners)
    .where(eq(learners.email, DEMO_EMAIL))
    .limit(1);

  if (!demo) redirect("/start");

  const store = await cookies();
  store.set(LEARNER_COOKIE, signLearnerId(demo.id), COOKIE_OPTIONS);
  redirect("/dashboard");
}

export async function signOut() {
  const store = await cookies();
  store.delete(LEARNER_COOKIE);
  redirect("/");
}

export async function markLessonComplete(formData: FormData) {
  const learner = await getCurrentLearner();
  if (!learner) redirect("/start");

  const lessonId = number(formData, "lessonId", 0);
  if (lessonId > 0) {
    await db
      .insert(lessonProgress)
      .values({ learnerId: learner.id, lessonId })
      .onConflictDoNothing();
    revalidatePath("/dashboard");
    revalidatePath("/learn");
  }

  const nextPath = text(formData, "nextPath");
  redirect(nextPath || "/dashboard");
}

export async function updateProfile(formData: FormData) {
  const learner = await getCurrentLearner();
  if (!learner) redirect("/start");

  const values = {
    name: text(formData, "name", learner.name),
    targetScore: Math.min(400, Math.max(180, number(formData, "targetScore", learner.targetScore))),
    examYear: number(formData, "examYear", learner.examYear),
    targetCourse: text(formData, "targetCourse", learner.targetCourse),
    targetInstitution: text(formData, "targetInstitution", learner.targetInstitution),
    state: text(formData, "state", learner.state),
    studyWindow: text(formData, "studyWindow", learner.studyWindow),
  };

  await db.update(learners).set(values).where(eq(learners.id, learner.id));
  revalidatePath("/profile");
  revalidatePath("/dashboard");
  redirect("/profile?saved=1");
}

export async function createThread(formData: FormData) {
  const learner = await getCurrentLearner();
  if (!learner) redirect("/start");

  const title = text(formData, "title");
  const body = text(formData, "body");
  if (title.length < 5 || body.length < 10) {
    redirect("/mentor/new?error=details");
  }

  const subjectId = number(formData, "subjectId", 0);
  const [thread] = await db
    .insert(mentorThreads)
    .values({
      learnerId: learner.id,
      subjectId: subjectId > 0 ? subjectId : null,
      category: text(formData, "category", "Academics"),
      title,
      body,
    })
    .returning({ id: mentorThreads.id });

  revalidatePath("/mentor");
  redirect(`/mentor/${thread.id}`);
}

export async function addFollowUp(formData: FormData) {
  const learner = await getCurrentLearner();
  if (!learner) redirect("/start");

  const threadId = number(formData, "threadId", 0);
  const body = text(formData, "body");
  if (!body || threadId <= 0) redirect(`/mentor/${threadId}`);

  const [thread] = await db
    .select({ id: mentorThreads.id })
    .from(mentorThreads)
    .where(and(eq(mentorThreads.id, threadId), eq(mentorThreads.learnerId, learner.id)))
    .limit(1);

  if (!thread) redirect("/mentor");

  await db.insert(mentorReplies).values({
    threadId,
    authorName: learner.name,
    authorRole: "Learner",
    body,
  });
  await db.update(mentorThreads).set({ status: "open" }).where(eq(mentorThreads.id, threadId));
  revalidatePath(`/mentor/${threadId}`);
  redirect(`/mentor/${threadId}`);
}

export async function registerInterest(formData: FormData) {
  await ensureSeeded();
  const name = text(formData, "name");
  const email = text(formData, "email");

  if (name.length < 2 || !email.includes("@")) {
    redirect("/register?error=details");
  }

  await db.insert(registrations).values({
    name,
    email: email.toLowerCase(),
    phone: text(formData, "phone"),
    state: text(formData, "state"),
    school: text(formData, "school"),
    track: text(formData, "track", "UTME preparation"),
    message: text(formData, "message"),
  });

  redirect("/register?done=1");
}

function jsonField<T>(formData: FormData, key: string, fallback: T): T {
  const raw = formData.get(key);
  if (typeof raw !== "string" || raw.length === 0) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export async function saveProfile(formData: FormData) {
  await ensureSeeded();
  const current = await getCurrentLearner();
  const isEdit = Boolean(current);

  const name = text(formData, "name", current?.name ?? "");
  const email = current?.email ?? text(formData, "email").toLowerCase();
  const errorPath = isEdit ? "/onboarding" : "/start";

  if (name.length < 2 || !email.includes("@")) {
    redirect(`${errorPath}?error=${encodeURIComponent("Please provide your name and a valid email address.")}`);
  }

  const profile: ProfileInput = {
    phone: text(formData, "phone"),
    altContact: text(formData, "altContact"),
    gender: text(formData, "gender"),
    age: number(formData, "age", 0),
    dateOfBirth: text(formData, "dateOfBirth"),
    location: text(formData, "location"),
    state: text(formData, "state"),
    referralSource: text(formData, "referralSource"),
    schoolName: text(formData, "schoolName"),
    schoolType: text(formData, "schoolType"),
    graduationYear: text(formData, "graduationYear"),
    olevelStatus: text(formData, "olevelStatus"),
    olevelSitting: text(formData, "olevelSitting"),
    olevelResults: jsonField<OLevelResult[]>(formData, "olevelResults", []),
    firstGeneration: text(formData, "firstGeneration"),
    utmeStatus: text(formData, "utmeStatus"),
    attempts: jsonField<UtmeAttempt[]>(formData, "attempts", []),
    subjects: jsonField<string[]>(formData, "subjects", []),
    confidence: jsonField<Record<string, number>>(formData, "confidence", {}),
    targetCourse: text(formData, "targetCourse"),
    targetInstitution: text(formData, "targetInstitution"),
    altCourse: text(formData, "altCourse"),
    altInstitution: text(formData, "altInstitution"),
    studyHours: text(formData, "studyHours"),
    studyWindow: text(formData, "studyWindow"),
    studyConsistency: text(formData, "studyConsistency"),
    studyChallenges: jsonField<string[]>(formData, "studyChallenges", []),
    deviceAccess: text(formData, "deviceAccess"),
    internetAccess: text(formData, "internetAccess"),
    powerAccess: text(formData, "powerAccess"),
    quietSpace: text(formData, "quietSpace"),
    learningSupport: jsonField<string[]>(formData, "learningSupport", []),
    accommodations: text(formData, "accommodations"),
    motivation: text(formData, "motivation"),
    biggestFear: text(formData, "biggestFear"),
    mentorshipGoals: text(formData, "mentorshipGoals"),
    preferredLanguage: text(formData, "preferredLanguage", "English"),
    mentorPreference: text(formData, "mentorPreference", "No preference"),
    meetingMode: text(formData, "meetingMode", "In person"),
    guardianName: text(formData, "guardianName"),
    guardianPhone: text(formData, "guardianPhone"),
    guardianRelation: text(formData, "guardianRelation"),
    guardianConsent: formData.get("guardianConsent") === "on",
    consentData: formData.get("consentData") === "on",
    consentCode: formData.get("consentCode") === "on",
  };

  const errors = [0, 1, 2, 3, 4, 5].flatMap((step) => validateProfileStep(step, profile));
  if (errors.length > 0) {
    redirect(`${errorPath}?error=${encodeURIComponent(errors[0])}`);
  }

  const insights = deriveProfileInsights(profile);
  const learnerValues = {
    name,
    email,
    targetScore: Math.min(400, Math.max(180, number(formData, "targetScore", current?.targetScore ?? 300))),
    examYear: number(formData, "examYear", current?.examYear ?? 2027),
    targetCourse: profile.targetCourse || current?.targetCourse || "Undecided",
    targetInstitution: profile.targetInstitution || current?.targetInstitution || "Undecided",
    state: profile.state || current?.state || "",
    studyWindow: profile.studyWindow || current?.studyWindow || "Evenings & weekends",
  };

  let learnerId: number;
  if (current) {
    await db.update(learners).set(learnerValues).where(eq(learners.id, current.id));
    learnerId = current.id;
  } else {
    const [created] = await db
      .insert(learners)
      .values(learnerValues)
      .onConflictDoUpdate({ target: learners.email, set: learnerValues })
      .returning({ id: learners.id });
    learnerId = created.id;
  }

  const profileValues = {
    ...profile,
    guardianConsent: profile.guardianConsent ? 1 : 0,
    consentData: profile.consentData ? 1 : 0,
    consentCode: profile.consentCode ? 1 : 0,
    pathway: insights.pathway,
    pathwayReason: insights.pathwayReason,
    riskFlags: insights.riskFlags,
    strengths: insights.strengths,
    mentorFocus: insights.mentorFocus,
    mentorBrief: insights.mentorBrief,
    completeness: insights.completeness,
    updatedAt: new Date(),
  };

  await db
    .insert(learnerProfiles)
    .values({ learnerId, ...profileValues })
    .onConflictDoUpdate({ target: learnerProfiles.learnerId, set: profileValues });

  const store = await cookies();
  store.set(LEARNER_COOKIE, signLearnerId(learnerId), COOKIE_OPTIONS);
  revalidatePath("/dashboard");
  revalidatePath("/profile");
  redirect("/dashboard?profile=saved");
}
