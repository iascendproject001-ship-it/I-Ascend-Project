import { eq, inArray, sql } from "drizzle-orm";
import { db } from "@/db";
import { practiceAnswers, practiceSessions, questions, subjects } from "@/db/schema";
import { getCurrentLearner } from "@/lib/session";

export const dynamic = "force-dynamic";

type CreateBody = {
  subjectIds?: unknown;
  count?: unknown;
  minutes?: unknown;
  mode?: unknown;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, Math.round(value)));
}

export async function POST(request: Request) {
  const learner = await getCurrentLearner();
  if (!learner) {
    return Response.json({ error: "Create a free profile first." }, { status: 401 });
  }

  let body: CreateBody;
  try {
    body = (await request.json()) as CreateBody;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const requestedIds = Array.isArray(body.subjectIds)
    ? body.subjectIds.map((id) => Number(id)).filter((id) => Number.isFinite(id))
    : [];
  const count = clamp(Number(body.count) || 20, 5, 60);
  const minutes = clamp(Number(body.minutes) || count, 3, 180);
  const mode = body.mode === "exam" ? "exam" : body.mode === "baseline" ? "baseline" : "practice";

  const availableSubjects = await db
    .select({ id: subjects.id, name: subjects.name })
    .from(subjects);
  const subjectIds = requestedIds.filter((id) =>
    availableSubjects.some((subject) => subject.id === id),
  );

  if (subjectIds.length === 0) {
    return Response.json({ error: "Select at least one subject." }, { status: 400 });
  }

  const perSubject = Math.floor(count / subjectIds.length);
  const remainder = count % subjectIds.length;
  const picked: {
    id: number;
    subjectId: number;
    prompt: string;
    options: string[];
    correctIndex: number;
    explanation: string;
    topic: string;
  }[] = [];

  for (let index = 0; index < subjectIds.length; index += 1) {
    const limit = perSubject + (index < remainder ? 1 : 0);
    if (limit <= 0) continue;
    const rows = await db
      .select()
      .from(questions)
      .where(eq(questions.subjectId, subjectIds[index]))
      .orderBy(sql`random()`)
      .limit(limit);
    picked.push(...rows);
  }

  if (picked.length === 0) {
    return Response.json({ error: "No questions available for that selection." }, { status: 400 });
  }

  const shuffled = picked
    .map((question) => ({ question, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ question }) => question);

  const label =
    mode === "baseline"
      ? "Baseline assessment"
      : mode === "exam"
      ? "Full CBT mock"
      : subjectIds.length === 1
        ? `${availableSubjects.find((subject) => subject.id === subjectIds[0])?.name ?? "Subject"} drill`
        : "Mixed-subject drill";

  const [session] = await db
    .insert(practiceSessions)
    .values({
      learnerId: learner.id,
      subjectIds,
      label,
      mode,
      questionCount: shuffled.length,
      durationSeconds: minutes * 60,
      status: "active",
    })
    .returning({ id: practiceSessions.id });

  await db.insert(practiceAnswers).values(
    shuffled.map((question) => ({
      sessionId: session.id,
      questionId: question.id,
      selectedIndex: null,
      isCorrect: 0,
    })),
  );

  return Response.json({ id: session.id });
}

export async function GET() {
  const learner = await getCurrentLearner();
  if (!learner) return Response.json({ error: "Unauthenticated" }, { status: 401 });
  const sessions = await db
    .select({ id: practiceSessions.id, status: practiceSessions.status })
    .from(practiceSessions)
    .where(eq(practiceSessions.learnerId, learner.id));
  return Response.json({ sessions });
}

export async function DELETE(request: Request) {
  const learner = await getCurrentLearner();
  if (!learner) return Response.json({ error: "Unauthenticated" }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const id = Number(searchParams.get("id"));
  if (!Number.isFinite(id)) return Response.json({ error: "Invalid id" }, { status: 400 });

  const [session] = await db
    .select({ id: practiceSessions.id, learnerId: practiceSessions.learnerId })
    .from(practiceSessions)
    .where(eq(practiceSessions.id, id))
    .limit(1);

  if (!session || session.learnerId !== learner.id) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  await db.delete(practiceAnswers).where(inArray(practiceAnswers.sessionId, [id]));
  await db.delete(practiceSessions).where(eq(practiceSessions.id, id));
  return Response.json({ ok: true });
}
