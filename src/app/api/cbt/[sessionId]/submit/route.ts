import { and, eq } from "drizzle-orm";
import { db } from "@/db";
import { iadps, learnerProfiles, practiceAnswers, practiceSessions, questions, subjects } from "@/db/schema";
import { getCurrentLearner } from "@/lib/session";
import { projectedScore } from "@/lib/data";
import { bandFor, buildActions, buildTargets, pathwayFromBaseline } from "@/lib/baseline";

export const dynamic = "force-dynamic";

type SubmitBody = {
  answers?: { questionId?: unknown; selectedIndex?: unknown }[];
};

export async function POST(
  request: Request,
  { params }: { params: Promise<{ sessionId: string }> },
) {
  const learner = await getCurrentLearner();
  if (!learner) return Response.json({ error: "Unauthenticated" }, { status: 401 });

  const { sessionId: sessionIdRaw } = await params;
  const sessionId = Number(sessionIdRaw);
  if (!Number.isFinite(sessionId)) return Response.json({ error: "Invalid session" }, { status: 400 });

  const [session] = await db
    .select()
    .from(practiceSessions)
    .where(and(eq(practiceSessions.id, sessionId), eq(practiceSessions.learnerId, learner.id)))
    .limit(1);

  if (!session) return Response.json({ error: "Session not found" }, { status: 404 });
  if (session.status === "completed") {
    return Response.json({ ok: true, redirect: `/cbt/${sessionId}/result` });
  }

  let body: SubmitBody = {};
  try {
    body = (await request.json()) as SubmitBody;
  } catch {
    body = {};
  }

  const submitted = new Map<number, number | null>();
  for (const answer of body.answers ?? []) {
    const questionId = Number(answer.questionId);
    if (!Number.isFinite(questionId)) continue;
    const rawSelected = answer.selectedIndex;
    const selected =
      rawSelected === null || rawSelected === undefined ? null : Number(rawSelected);
    submitted.set(questionId, Number.isFinite(selected as number) ? (selected as number) : null);
  }

  const gradingRows = await db
    .select({
      answerId: practiceAnswers.id,
      questionId: practiceAnswers.questionId,
      correctIndex: questions.correctIndex,
      savedSelected: practiceAnswers.selectedIndex,
      topic: questions.topic,
      subjectName: subjects.name,
    })
    .from(practiceAnswers)
    .innerJoin(questions, eq(questions.id, practiceAnswers.questionId))
    .innerJoin(subjects, eq(subjects.id, questions.subjectId))
    .where(eq(practiceAnswers.sessionId, sessionId));

  let correctCount = 0;
  const graded: { subjectName: string; topic: string; isCorrect: boolean }[] = [];
  for (const row of gradingRows) {
    const selected = submitted.has(row.questionId)
      ? (submitted.get(row.questionId) ?? null)
      : row.savedSelected;
    const isCorrect = selected !== null && selected === row.correctIndex ? 1 : 0;
    correctCount += isCorrect;
    graded.push({ subjectName: row.subjectName, topic: row.topic, isCorrect: isCorrect === 1 });
    await db
      .update(practiceAnswers)
      .set({ selectedIndex: selected, isCorrect })
      .where(eq(practiceAnswers.id, row.answerId));
  }

  const total = gradingRows.length || session.questionCount;
  const scorePercent = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  await db
    .update(practiceSessions)
    .set({
      status: "completed",
      correctCount,
      scorePercent,
      projectedScore: projectedScore(scorePercent),
      submittedAt: new Date(),
    })
    .where(eq(practiceSessions.id, sessionId));

  let redirectPath = `/cbt/${sessionId}/result`;

  if (session.mode === "baseline" && graded.length > 0) {
    const bySubject = new Map<
      string,
      { correct: number; total: number; topics: Map<string, { missed: number; asked: number }> }
    >();
    for (const g of graded) {
      let entry = bySubject.get(g.subjectName);
      if (!entry) {
        entry = { correct: 0, total: 0, topics: new Map() };
        bySubject.set(g.subjectName, entry);
      }
      entry.total += 1;
      if (g.isCorrect) entry.correct += 1;
      const t = entry.topics.get(g.topic) ?? { missed: 0, asked: 0 };
      t.asked += 1;
      if (!g.isCorrect) t.missed += 1;
      entry.topics.set(g.topic, t);
    }

    const scores: Record<string, { correct: number; total: number; percent: number; band: string }> = {};
    let allCorrect = 0;
    let allTotal = 0;
    for (const [name, s] of bySubject) {
      const percent = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
      scores[name] = { correct: s.correct, total: s.total, percent, band: bandFor(percent).band };
      allCorrect += s.correct;
      allTotal += s.total;
    }
    const overall = allTotal > 0 ? Math.round((allCorrect / allTotal) * 100) : 0;

    const gaps = [...bySubject.entries()]
      .flatMap(([subject, s]) =>
        [...s.topics.entries()].map(([topic, t]) => ({
          subject,
          topic,
          missed: t.missed,
          asked: t.asked,
        })),
      )
      .filter((g) => g.missed > 0)
      .sort((a, b) => b.missed - a.missed || b.asked - a.asked)
      .slice(0, 12);

    const weak = Object.entries(scores)
      .filter(([, s]) => s.percent < 60)
      .map(([name]) => name);

    const [profile] = await db
      .select()
      .from(learnerProfiles)
      .where(eq(learnerProfiles.learnerId, learner.id))
      .limit(1);
    const access =
      profile !== undefined &&
      (profile.learningSupport.some((item) =>
        [
          "Visual impairment",
          "Hearing impairment",
          "Learning difficulty",
          "Physical disability",
          "Long-term health condition",
        ].includes(item),
      ) ||
        profile.deviceAccess === "No device — I borrow or use a centre" ||
        profile.internetAccess === "None or rarely");
    const repeat = profile?.utmeStatus === "Repeat candidate";
    const { pathway, reason } = pathwayFromBaseline(overall, { access, repeat });

    await db
      .update(iadps)
      .set({ status: "superseded" })
      .where(and(eq(iadps.learnerId, learner.id), eq(iadps.status, "active")));
    await db.insert(iadps).values({
      learnerId: learner.id,
      sessionId,
      subjects: Object.keys(scores),
      scores,
      overallPercent: overall,
      pathway,
      gaps,
      targets: buildTargets(scores, overall),
      actions: buildActions(weak, overall),
      reviews: [],
      status: "active",
    });
    if (profile) {
      await db
        .update(learnerProfiles)
        .set({ pathway, pathwayReason: reason, updatedAt: new Date() })
        .where(eq(learnerProfiles.learnerId, learner.id));
    }
    redirectPath = `/baseline/${sessionId}`;
  }

  return Response.json({ ok: true, redirect: redirectPath, scorePercent, correctCount });
}
