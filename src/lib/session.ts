import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { cache } from "react";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { learners, type Learner } from "@/db/schema";
import { ensureSeeded } from "@/db/seed";

export const LEARNER_COOKIE = "iascend_learner";
export const DEMO_EMAIL = "demo@iascend.ng";

export const getCurrentLearner = cache(async (): Promise<Learner | null> => {
  const store = await cookies();
  const raw = store.get(LEARNER_COOKIE)?.value;
  if (!raw) return null;
  const id = Number(raw);
  if (!Number.isFinite(id)) return null;
  await ensureSeeded();
  const [learner] = await db.select().from(learners).where(eq(learners.id, id)).limit(1);
  return learner ?? null;
});

export async function requireLearner(): Promise<Learner> {
  const learner = await getCurrentLearner();
  if (!learner) redirect("/start");
  return learner;
}
