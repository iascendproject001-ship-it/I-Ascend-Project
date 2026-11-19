"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { articles, iadps, learners, learnerProfiles, siteSettings, socialPosts, staffUsers } from "@/db/schema";
import { ensureSeeded } from "@/db/seed";
import {
  STAFF_COOKIE,
  STAFF_SESSION_HOURS,
  clearLoginAttempts,
  countActiveStaff,
  createStaffSession,
  destroyStaffSession,
  getStaffUser,
  hashPassword,
  isLoginBlocked,
  recordLoginFailure,
  requireAdmin,
  verifyPassword,
} from "@/lib/staff-auth";

const STAFF_COOKIE_OPTIONS = {
  httpOnly: true,
  sameSite: "lax" as const,
  path: "/",
  secure: process.env.NODE_ENV === "production",
  maxAge: STAFF_SESSION_HOURS * 3_600,
};

function text(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function staffLogin(formData: FormData) {
  await ensureSeeded();
  const email = text(formData, "email").toLowerCase();
  const password = typeof formData.get("password") === "string" ? (formData.get("password") as string) : "";

  if (isLoginBlocked(email)) {
    redirect(
      "/staff/login?error=" +
        encodeURIComponent("Too many failed attempts for this email. Wait 10 minutes and try again."),
    );
  }

  const [user] = await db.select().from(staffUsers).where(eq(staffUsers.email, email)).limit(1);
  const valid = user && user.isActive === 1 && (await verifyPassword(password, user.passwordHash));

  if (!valid) {
    recordLoginFailure(email);
    redirect("/staff/login?error=" + encodeURIComponent("Incorrect email or password, or the account is disabled."));
  }
  clearLoginAttempts(email);

  const { token } = await createStaffSession(user.id);
  const store = await cookies();
  store.set(STAFF_COOKIE, token, STAFF_COOKIE_OPTIONS);
  redirect("/staff");
}

export async function staffLogout() {
  const store = await cookies();
  const token = store.get(STAFF_COOKIE)?.value;
  if (token) await destroyStaffSession(token);
  store.delete(STAFF_COOKIE);
  redirect("/staff/login");
}

export async function setupFirstAdmin(formData: FormData) {
  await ensureSeeded();
  if ((await countActiveStaff()) > 0) redirect("/staff/login");

  const name = text(formData, "name");
  const email = text(formData, "email").toLowerCase();
  const password = typeof formData.get("password") === "string" ? (formData.get("password") as string) : "";
  const confirm = typeof formData.get("confirm") === "string" ? (formData.get("confirm") as string) : "";

  if (name.length < 2) redirect("/staff/setup?error=" + encodeURIComponent("Enter your full name."));
  if (!email.includes("@")) redirect("/staff/setup?error=" + encodeURIComponent("Enter a valid email address."));
  if (password.length < 8) {
    redirect("/staff/setup?error=" + encodeURIComponent("Use a password of at least 8 characters."));
  }
  if (password !== confirm) redirect("/staff/setup?error=" + encodeURIComponent("The two passwords do not match."));

  const [existing] = await db.select({ id: staffUsers.id }).from(staffUsers).where(eq(staffUsers.email, email)).limit(1);
  if (existing) redirect("/staff/setup?error=" + encodeURIComponent("That email is already registered."));

  const [created] = await db
    .insert(staffUsers)
    .values({ name, email, passwordHash: await hashPassword(password), role: "admin", isActive: 1 })
    .returning({ id: staffUsers.id });

  const { token } = await createStaffSession(created.id);
  const store = await cookies();
  store.set(STAFF_COOKIE, token, STAFF_COOKIE_OPTIONS);
  redirect("/staff/settings?notice=" + encodeURIComponent("Administrator created. Complete the programme settings below."));
}

export async function createStaffMember(formData: FormData) {
  await requireAdmin();
  const name = text(formData, "name");
  const email = text(formData, "email").toLowerCase();
  const password = typeof formData.get("password") === "string" ? (formData.get("password") as string) : "";
  const role = text(formData, "role") === "admin" ? "admin" : "staff";

  if (name.length < 2 || !email.includes("@")) {
    redirect("/staff/admins?error=" + encodeURIComponent("Provide a name and a valid email address."));
  }
  if (password.length < 8) {
    redirect("/staff/admins?error=" + encodeURIComponent("Use a password of at least 8 characters."));
  }
  const [existing] = await db.select({ id: staffUsers.id }).from(staffUsers).where(eq(staffUsers.email, email)).limit(1);
  if (existing) redirect("/staff/admins?error=" + encodeURIComponent("That email is already registered."));

  await db.insert(staffUsers).values({ name, email, passwordHash: await hashPassword(password), role, isActive: 1 });
  revalidatePath("/staff/admins");
  redirect("/staff/admins?notice=" + encodeURIComponent(`${name} added as ${role}.`));
}

const EDITABLE_SETTINGS = [
  "cohort_name",
  "applications_open",
  "application_deadline",
  "support_phone",
  "support_whatsapp",
  "support_email",
  "safeguarding_name",
  "safeguarding_phone",
  "safeguarding_email",
  "privacy_notice",
  "facebook_url",
  "instagram_url",
] as const;

export async function saveSiteSettings(formData: FormData) {
  await requireAdmin();
  const me = await getStaffUser();

  const values: Record<string, string> = {};
  for (const key of EDITABLE_SETTINGS) {
    if (key === "applications_open") {
      values[key] = formData.get("applications_open") === "on" ? "true" : "false";
    } else {
      values[key] = text(formData, key);
    }
  }

  if (!values["cohort_name"]) {
    redirect("/staff/settings?error=" + encodeURIComponent("The cohort needs a name, e.g. 2027 Cycle A — Pilot Cohort."));
  }
  if (values["application_deadline"] && Number.isNaN(new Date(values["application_deadline"]).getTime())) {
    redirect("/staff/settings?error=" + encodeURIComponent("The deadline date is not valid. Use the calendar picker."));
  }

  for (const [key, value] of Object.entries(values)) {
    await db
      .insert(siteSettings)
      .values({ key, value })
      .onConflictDoUpdate({ target: siteSettings.key, set: { value, updatedAt: new Date() } });
  }

  for (const path of ["/", "/start", "/flyer", "/privacy", "/dashboard", "/staff", "/staff/settings"]) {
    revalidatePath(path);
  }
  void me;
  redirect("/staff/settings?saved=1");
}

export async function addIadpReview(formData: FormData) {
  const staff = await getStaffUser();
  if (!staff) redirect("/staff/login");

  const iadpId = Number(formData.get("iadpId"));
  const learnerId = Number(formData.get("learnerId"));
  const note = text(formData, "note");
  if (!iadpId || !note) redirect(learnerId ? `/staff/applications/${learnerId}` : "/staff/applications");

  const [row] = await db.select().from(iadps).where(eq(iadps.id, iadpId)).limit(1);
  if (!row) redirect("/staff/applications");

  const reviews = [
    ...row.reviews,
    {
      date: new Date().toISOString().slice(0, 10),
      author: `${staff.name} (${staff.role})`,
      note,
    },
  ];
  await db.update(iadps).set({ reviews }).where(eq(iadps.id, iadpId));
  revalidatePath(`/staff/applications/${row.learnerId}`);
  redirect(`/staff/applications/${row.learnerId}`);
}

function fieldText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function slugify(title: string) {
  const slug = title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
  return slug || `article-${Date.now()}`;
}

async function uniqueArticleSlug(base: string, excludeId?: number) {
  let slug = base;
  let n = 2;
  for (;;) {
    const [row] = await db.select({ id: articles.id }).from(articles).where(eq(articles.slug, slug)).limit(1);
    if (!row || row.id === excludeId) return slug;
    slug = `${base}-${n++}`;
  }
}

export async function saveArticle(formData: FormData) {
  await requireAdmin();
  const id = Number(formData.get("id") || 0);
  const title = fieldText(formData, "title");
  if (title.length < 3) {
    redirect("/staff/articles?error=" + encodeURIComponent("Give the article a title of at least 3 characters."));
  }
  const slug = await uniqueArticleSlug(fieldText(formData, "slug") || slugify(title), id || undefined);
  const status = fieldText(formData, "status") === "published" ? "published" : "draft";
  const values = {
    slug,
    title,
    excerpt: fieldText(formData, "excerpt"),
    body: fieldText(formData, "body"),
    coverUrl: fieldText(formData, "coverUrl"),
    authorName: fieldText(formData, "authorName") || "I Ascend Project",
    sourceLabel: fieldText(formData, "sourceLabel"),
    sourceUrl: fieldText(formData, "sourceUrl"),
    status,
    updatedAt: new Date(),
  };
  if (id > 0) {
    const [prev] = await db
      .select({ publishedAt: articles.publishedAt })
      .from(articles)
      .where(eq(articles.id, id))
      .limit(1);
    await db
      .update(articles)
      .set({ ...values, publishedAt: status === "published" ? (prev?.publishedAt ?? new Date()) : null })
      .where(eq(articles.id, id));
  } else {
    await db.insert(articles).values({
      ...values,
      publishedAt: status === "published" ? new Date() : null,
    });
  }
  for (const path of ["/", "/stories", "/staff/articles"]) revalidatePath(path);
  redirect("/staff/articles?saved=1");
}

export async function deleteArticle(formData: FormData) {
  await requireAdmin();
  const id = Number(formData.get("id") || 0);
  if (id > 0) await db.delete(articles).where(eq(articles.id, id));
  for (const path of ["/", "/stories", "/staff/articles"]) revalidatePath(path);
  redirect("/staff/articles?deleted=1");
}

export async function saveSocialPost(formData: FormData) {
  await requireAdmin();
  const caption = fieldText(formData, "caption");
  const url = fieldText(formData, "url");
  if (!caption || !url) {
    redirect("/staff/social?error=" + encodeURIComponent("A caption and the post link are both required."));
  }
  const platform = fieldText(formData, "platform") === "instagram" ? "instagram" : "facebook";
  await db.insert(socialPosts).values({
    platform,
    caption,
    url,
    postedOn: fieldText(formData, "postedOn"),
    visible: formData.get("visible") === "on" ? 1 : 0,
    sortOrder: Number(formData.get("sortOrder") || 0),
  });
  for (const path of ["/", "/staff/social"]) revalidatePath(path);
  redirect("/staff/social?saved=1");
}

export async function deleteSocialPost(formData: FormData) {
  await requireAdmin();
  const id = Number(formData.get("id") || 0);
  if (id > 0) await db.delete(socialPosts).where(eq(socialPosts.id, id));
  for (const path of ["/", "/staff/social"]) revalidatePath(path);
  redirect("/staff/social?deleted=1");
}

export async function updateApplicant(formData: FormData) {
  await requireAdmin();
  const learnerId = Number(formData.get("learnerId") || 0);
  if (!learnerId) redirect("/staff/applications");
  const [learner] = await db.select().from(learners).where(eq(learners.id, learnerId)).limit(1);
  if (!learner) redirect("/staff/applications");

  const num = (key: string, fallback: number) => {
    const v = Number(formData.get(key));
    return Number.isFinite(v) ? v : fallback;
  };
  await db
    .update(learners)
    .set({
      name: fieldText(formData, "name") || learner.name,
      targetScore: Math.min(400, Math.max(0, num("targetScore", learner.targetScore))),
      examYear: num("examYear", learner.examYear),
      targetCourse: fieldText(formData, "targetCourse") || learner.targetCourse,
      targetInstitution: fieldText(formData, "targetInstitution") || learner.targetInstitution,
      state: fieldText(formData, "state"),
      studyWindow: fieldText(formData, "studyWindow") || learner.studyWindow,
    })
    .where(eq(learners.id, learnerId));

  const [profile] = await db
    .select()
    .from(learnerProfiles)
    .where(eq(learnerProfiles.learnerId, learnerId))
    .limit(1);
  if (profile) {
    const pathway = fieldText(formData, "pathway");
    await db
      .update(learnerProfiles)
      .set({
        phone: fieldText(formData, "phone"),
        location: fieldText(formData, "location"),
        schoolName: fieldText(formData, "schoolName"),
        olevelStatus: fieldText(formData, "olevelStatus"),
        utmeStatus: fieldText(formData, "utmeStatus"),
        studyHours: fieldText(formData, "studyHours"),
        deviceAccess: fieldText(formData, "deviceAccess"),
        pathway: ["A+", "A", "B", "C", "R", "E"].includes(pathway) ? pathway : profile.pathway,
        pathwayReason: fieldText(formData, "pathwayReason") || profile.pathwayReason,
        updatedAt: new Date(),
      })
      .where(eq(learnerProfiles.learnerId, learnerId));
  }

  for (const path of [`/staff/applications/${learnerId}`, "/staff/applications", "/dashboard"]) {
    revalidatePath(path);
  }
  redirect(`/staff/applications/${learnerId}?saved=1`);
}
