import { and, eq } from "drizzle-orm";
import { db } from "@/db";
import { practiceAnswers, practiceSessions } from "@/db/schema";
import { getCurrentLearner } from "@/lib/session";

export const dynamic = "force-dynamic";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ sessionId: string }> },
) {
  const learner = await getCurrentLearner();
  if (!learner) return Response.json({ error: "Unauthenticated" }, { status: 401 });

  const { sessionId: sessionIdRaw } = await params;
  const sessionId = Number(sessionIdRaw);
  if (!Number.isFinite(sessionId)) return Response.json({ error: "Invalid session" }, { status: 400 });

  const [session] = await db
    .select({ id: practiceSessions.id, status: practiceSessions.status })
    .from(practiceSessions)
    .where(and(eq(practiceSessions.id, sessionId), eq(practiceSessions.learnerId, learner.id)))
    .limit(1);

  if (!session) return Response.json({ error: "Session not found" }, { status: 404 });
  if (session.status !== "active") return Response.json({ ok: true });

  let payload: { questionId?: unknown; selectedIndex?: unknown } = {};
  try {
    payload = (await request.json()) as { questionId?: unknown; selectedIndex?: unknown };
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const questionId = Number(payload.questionId);
  const selected =
    payload.selectedIndex === null || payload.selectedIndex === undefined
      ? null
      : Number(payload.selectedIndex);

  if (!Number.isFinite(questionId)) {
    return Response.json({ error: "Invalid question" }, { status: 400 });
  }

  await db
    .update(practiceAnswers)
    .set({ selectedIndex: Number.isFinite(selected as number) ? (selected as number) : null })
    .where(
      and(eq(practiceAnswers.sessionId, sessionId), eq(practiceAnswers.questionId, questionId)),
    );

  return Response.json({ ok: true });
}
