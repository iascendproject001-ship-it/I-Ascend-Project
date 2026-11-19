import {
  pgTable,
  serial,
  text,
  integer,
  timestamp,
  jsonb,
  uniqueIndex,
  index,
} from "drizzle-orm/pg-core";

/* ------------------------------------------------------------------ */
/* Content: subjects, lessons, questions                              */
/* ------------------------------------------------------------------ */

export type LessonSection = {
  heading: string;
  body: string;
  bullets?: string[];
  example?: { prompt: string; solution: string };
};

export const subjects = pgTable("subjects", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  category: text("category").notNull().default("general"),
  tagline: text("tagline").notNull().default(""),
  description: text("description").notNull().default(""),
  icon: text("icon").notNull().default("📘"),
  accent: text("accent").notNull().default("#1B3A6B"),
  sortOrder: integer("sort_order").notNull().default(0),
});

export const lessons = pgTable(
  "lessons",
  {
    id: serial("id").primaryKey(),
    subjectId: integer("subject_id")
      .notNull()
      .references(() => subjects.id, { onDelete: "cascade" }),
    slug: text("slug").notNull(),
    title: text("title").notNull(),
    summary: text("summary").notNull().default(""),
    durationMinutes: integer("duration_minutes").notNull().default(20),
    level: text("level").notNull().default("Core"),
    examWeight: text("exam_weight").notNull().default("High yield"),
    sections: jsonb("sections").$type<LessonSection[]>().notNull().default([]),
    keyPoints: jsonb("key_points").$type<string[]>().notNull().default([]),
    sortOrder: integer("sort_order").notNull().default(0),
  },
  (table) => [uniqueIndex("lessons_subject_slug_idx").on(table.subjectId, table.slug)],
);

export const questions = pgTable(
  "questions",
  {
    id: serial("id").primaryKey(),
    subjectId: integer("subject_id")
      .notNull()
      .references(() => subjects.id, { onDelete: "cascade" }),
    topic: text("topic").notNull().default("General"),
    prompt: text("prompt").notNull(),
    options: jsonb("options").$type<string[]>().notNull(),
    correctIndex: integer("correct_index").notNull(),
    explanation: text("explanation").notNull().default(""),
    difficulty: text("difficulty").notNull().default("medium"),
    examYear: text("exam_year").notNull().default("UTME style"),
  },
  (table) => [index("questions_subject_idx").on(table.subjectId)],
);

/* ------------------------------------------------------------------ */
/* Learners and progress                                              */
/* ------------------------------------------------------------------ */

export const learners = pgTable("learners", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  targetScore: integer("target_score").notNull().default(320),
  examYear: integer("exam_year").notNull().default(2027),
  targetCourse: text("target_course").notNull().default(""),
  targetInstitution: text("target_institution").notNull().default(""),
  state: text("state").notNull().default(""),
  studyWindow: text("study_window").notNull().default("Evenings & weekends"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const lessonProgress = pgTable(
  "lesson_progress",
  {
    id: serial("id").primaryKey(),
    learnerId: integer("learner_id")
      .notNull()
      .references(() => learners.id, { onDelete: "cascade" }),
    lessonId: integer("lesson_id")
      .notNull()
      .references(() => lessons.id, { onDelete: "cascade" }),
    completedAt: timestamp("completed_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [uniqueIndex("lesson_progress_unique_idx").on(table.learnerId, table.lessonId)],
);

export const practiceSessions = pgTable(
  "practice_sessions",
  {
    id: serial("id").primaryKey(),
    learnerId: integer("learner_id")
      .notNull()
      .references(() => learners.id, { onDelete: "cascade" }),
    subjectIds: jsonb("subject_ids").$type<number[]>().notNull(),
    label: text("label").notNull().default("CBT practice"),
    mode: text("mode").notNull().default("practice"),
    questionCount: integer("question_count").notNull().default(10),
    durationSeconds: integer("duration_seconds").notNull().default(600),
    status: text("status").notNull().default("active"),
    correctCount: integer("correct_count").notNull().default(0),
    scorePercent: integer("score_percent").notNull().default(0),
    projectedScore: integer("projected_score").notNull().default(0),
    startedAt: timestamp("started_at", { withTimezone: true }).notNull().defaultNow(),
    submittedAt: timestamp("submitted_at", { withTimezone: true }),
  },
  (table) => [index("practice_sessions_learner_idx").on(table.learnerId)],
);

export const practiceAnswers = pgTable(
  "practice_answers",
  {
    id: serial("id").primaryKey(),
    sessionId: integer("session_id")
      .notNull()
      .references(() => practiceSessions.id, { onDelete: "cascade" }),
    questionId: integer("question_id")
      .notNull()
      .references(() => questions.id, { onDelete: "cascade" }),
    selectedIndex: integer("selected_index"),
    isCorrect: integer("is_correct").notNull().default(0),
  },
  (table) => [index("practice_answers_session_idx").on(table.sessionId)],
);

/* ------------------------------------------------------------------ */
/* Mentorship                                                         */
/* ------------------------------------------------------------------ */

export const mentorThreads = pgTable("mentor_threads", {
  id: serial("id").primaryKey(),
  learnerId: integer("learner_id")
    .notNull()
    .references(() => learners.id, { onDelete: "cascade" }),
  subjectId: integer("subject_id").references(() => subjects.id, { onDelete: "set null" }),
  category: text("category").notNull().default("Academics"),
  title: text("title").notNull(),
  body: text("body").notNull(),
  status: text("status").notNull().default("open"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const mentorReplies = pgTable(
  "mentor_replies",
  {
    id: serial("id").primaryKey(),
    threadId: integer("thread_id")
      .notNull()
      .references(() => mentorThreads.id, { onDelete: "cascade" }),
    authorName: text("author_name").notNull(),
    authorRole: text("author_role").notNull().default("I Ascend Mentor"),
    body: text("body").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [index("mentor_replies_thread_idx").on(table.threadId)],
);

/* ------------------------------------------------------------------ */
/* Admissions data                                                    */
/* ------------------------------------------------------------------ */

export const institutions = pgTable("institutions", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  shortName: text("short_name").notNull().default(""),
  state: text("state").notNull(),
  ownership: text("ownership").notNull().default("Federal"),
  type: text("type").notNull().default("University"),
  summary: text("summary").notNull().default(""),
});

export const programmes = pgTable(
  "programmes",
  {
    id: serial("id").primaryKey(),
    institutionId: integer("institution_id")
      .notNull()
      .references(() => institutions.id, { onDelete: "cascade" }),
    name: text("name").notNull(),
    faculty: text("faculty").notNull().default(""),
    jambCutoff: integer("jamb_cutoff").notNull().default(180),
    competitiveCutoff: integer("competitive_cutoff").notNull().default(240),
    durationYears: integer("duration_years").notNull().default(4),
    subjectCombo: jsonb("subject_combo").$type<string[]>().notNull().default([]),
    olevel: text("olevel").notNull().default("Five O'level credits including English and Mathematics."),
    notes: text("notes").notNull().default(""),
  },
  (table) => [index("programmes_institution_idx").on(table.institutionId)],
);

/* ------------------------------------------------------------------ */
/* High-yield resource library                                        */
/* ------------------------------------------------------------------ */

export const resources = pgTable("resources", {
  id: serial("id").primaryKey(),
  subjectId: integer("subject_id").references(() => subjects.id, { onDelete: "set null" }),
  title: text("title").notNull(),
  type: text("type").notNull().default("Textbook"),
  provider: text("provider").notNull().default(""),
  description: text("description").notNull().default(""),
  url: text("url").notNull().default(""),
  isFree: integer("is_free").notNull().default(1),
  sortOrder: integer("sort_order").notNull().default(0),
});

/* ------------------------------------------------------------------ */
/* Outreach registrations (programme interest)                        */
/* ------------------------------------------------------------------ */

export const registrations = pgTable("registrations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull().default(""),
  state: text("state").notNull().default(""),
  school: text("school").notNull().default(""),
  track: text("track").notNull().default("UTME preparation"),
  message: text("message").notNull().default(""),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

/* ------------------------------------------------------------------ */
/* Participant profiling (registration)                               */
/* ------------------------------------------------------------------ */

export const learnerProfiles = pgTable(
  "learner_profiles",
  {
    id: serial("id").primaryKey(),
    learnerId: integer("learner_id")
      .notNull()
      .references(() => learners.id, { onDelete: "cascade" }),
    phone: text("phone").notNull().default(""),
    altContact: text("alt_contact").notNull().default(""),
    gender: text("gender").notNull().default(""),
    age: integer("age").notNull().default(0),
    dateOfBirth: text("date_of_birth").notNull().default(""),
    location: text("location").notNull().default(""),
    state: text("state").notNull().default(""),
    referralSource: text("referral_source").notNull().default(""),
    schoolName: text("school_name").notNull().default(""),
    schoolType: text("school_type").notNull().default(""),
    graduationYear: text("graduation_year").notNull().default(""),
    olevelStatus: text("olevel_status").notNull().default(""),
    olevelSitting: text("olevel_sitting").notNull().default(""),
    olevelResults: jsonb("olevel_results")
      .$type<{ subject: string; grade: string }[]>()
      .notNull()
      .default([]),
    firstGeneration: text("first_generation").notNull().default(""),
    utmeStatus: text("utme_status").notNull().default(""),
    attempts: jsonb("attempts")
      .$type<{ year: string; score: string; outcome: string; course: string }[]>()
      .notNull()
      .default([]),
    subjects: jsonb("subjects").$type<string[]>().notNull().default([]),
    confidence: jsonb("confidence").$type<Record<string, number>>().notNull().default({}),
    targetCourse: text("target_course").notNull().default(""),
    targetInstitution: text("target_institution").notNull().default(""),
    altCourse: text("alt_course").notNull().default(""),
    altInstitution: text("alt_institution").notNull().default(""),
    studyHours: text("study_hours").notNull().default(""),
    studyWindow: text("study_window").notNull().default(""),
    studyConsistency: text("study_consistency").notNull().default(""),
    studyChallenges: jsonb("study_challenges").$type<string[]>().notNull().default([]),
    deviceAccess: text("device_access").notNull().default(""),
    internetAccess: text("internet_access").notNull().default(""),
    powerAccess: text("power_access").notNull().default(""),
    quietSpace: text("quiet_space").notNull().default(""),
    learningSupport: jsonb("learning_support").$type<string[]>().notNull().default([]),
    accommodations: text("accommodations").notNull().default(""),
    motivation: text("motivation").notNull().default(""),
    biggestFear: text("biggest_fear").notNull().default(""),
    mentorshipGoals: text("mentorship_goals").notNull().default(""),
    preferredLanguage: text("preferred_language").notNull().default("English"),
    mentorPreference: text("mentor_preference").notNull().default("No preference"),
    meetingMode: text("meeting_mode").notNull().default("In person"),
    guardianName: text("guardian_name").notNull().default(""),
    guardianPhone: text("guardian_phone").notNull().default(""),
    guardianRelation: text("guardian_relation").notNull().default(""),
    guardianConsent: integer("guardian_consent").notNull().default(0),
    consentData: integer("consent_data").notNull().default(0),
    consentCode: integer("consent_code").notNull().default(0),
    pathway: text("pathway").notNull().default("A"),
    pathwayReason: text("pathway_reason").notNull().default(""),
    riskFlags: jsonb("risk_flags").$type<string[]>().notNull().default([]),
    strengths: jsonb("strengths").$type<string[]>().notNull().default([]),
    mentorFocus: jsonb("mentor_focus").$type<string[]>().notNull().default([]),
    mentorBrief: text("mentor_brief").notNull().default(""),
    completeness: integer("completeness").notNull().default(0),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [uniqueIndex("learner_profiles_learner_unique").on(table.learnerId)],
);

export type LearnerProfile = typeof learnerProfiles.$inferSelect;

/* ------------------------------------------------------------------ */
/* Staff workspace and programme settings                             */
/* ------------------------------------------------------------------ */

export const staffUsers = pgTable("staff_users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  role: text("role").notNull().default("staff"),
  isActive: integer("is_active").notNull().default(1),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const staffSessions = pgTable("staff_sessions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => staffUsers.id, { onDelete: "cascade" }),
  tokenHash: text("token_hash").notNull().unique(),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const siteSettings = pgTable("site_settings", {
  key: text("key").primaryKey(),
  value: text("value").notNull().default(""),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull().default(""),
  body: text("body").notNull().default(""),
  coverUrl: text("cover_url").notNull().default(""),
  authorName: text("author_name").notNull().default("I Ascend Project"),
  sourceLabel: text("source_label").notNull().default(""),
  sourceUrl: text("source_url").notNull().default(""),
  status: text("status").notNull().default("draft"),
  publishedAt: timestamp("published_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const socialPosts = pgTable("social_posts", {
  id: serial("id").primaryKey(),
  platform: text("platform").notNull().default("facebook"),
  caption: text("caption").notNull(),
  url: text("url").notNull(),
  postedOn: text("posted_on").notNull().default(""),
  visible: integer("visible").notNull().default(1),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type StaffUser = typeof staffUsers.$inferSelect;
export type Article = typeof articles.$inferSelect;
export type SocialPost = typeof socialPosts.$inferSelect;

/* ------------------------------------------------------------------ */
/* Individual Academic Development Plans (from baseline diagnostics)  */
/* ------------------------------------------------------------------ */

export const iadps = pgTable("iadps", {
  id: serial("id").primaryKey(),
  learnerId: integer("learner_id")
    .notNull()
    .references(() => learners.id, { onDelete: "cascade" }),
  sessionId: integer("session_id").references(() => practiceSessions.id, { onDelete: "set null" }),
  subjects: jsonb("subjects").$type<string[]>().notNull().default([]),
  scores: jsonb("scores")
    .$type<Record<string, { correct: number; total: number; percent: number; band: string }>>()
    .notNull()
    .default({}),
  overallPercent: integer("overall_percent").notNull().default(0),
  pathway: text("pathway").notNull().default("A"),
  gaps: jsonb("gaps")
    .$type<{ subject: string; topic: string; missed: number; asked: number }[]>()
    .notNull()
    .default([]),
  targets: jsonb("targets")
    .$type<{ area: string; current: string; target: string; byWhen: string }[]>()
    .notNull()
    .default([]),
  actions: jsonb("actions").$type<string[]>().notNull().default([]),
  reviews: jsonb("reviews")
    .$type<{ date: string; author: string; note: string }[]>()
    .notNull()
    .default([]),
  status: text("status").notNull().default("active"),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type Iadp = typeof iadps.$inferSelect;

export type Subject = typeof subjects.$inferSelect;
export type Lesson = typeof lessons.$inferSelect;
export type Question = typeof questions.$inferSelect;
export type Learner = typeof learners.$inferSelect;
export type PracticeSession = typeof practiceSessions.$inferSelect;
export type MentorThread = typeof mentorThreads.$inferSelect;
export type Institution = typeof institutions.$inferSelect;
export type Programme = typeof programmes.$inferSelect;
export type Resource = typeof resources.$inferSelect;
