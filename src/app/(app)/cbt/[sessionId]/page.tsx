import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { requireLearner } from "@/lib/session";
import { getSessionForLearner } from "@/lib/data";
import { ExamClient, type ExamQuestion } from "@/components/cbt/exam-client";
import { Badge } from "@/components/ui";

export const dynamic = "force-dynamic";
export const metadata = { title: "CBT in progress" };

export default async function CbtSessionPage({
  params,
}: {
  params: Promise<{ sessionId: string }>;
}) {
  const { sessionId: rawId } = await params;
  const sessionId = Number(rawId);
  if (!Number.isFinite(sessionId)) notFound();

  const learner = await requireLearner();
  const data = await getSessionForLearner(sessionId, learner.id);
  if (!data) notFound();
  if (data.session.status === "completed") redirect(`/cbt/${sessionId}/result`);

  const questions: ExamQuestion[] = data.answers.map((answer) => ({
    id: answer.questionId,
    prompt: answer.prompt,
    options: answer.options,
    topic: answer.topic,
    subjectName: answer.subjectName,
    subjectIcon: answer.subjectIcon,
  }));

  const initialAnswers: Record<number, number | null> = {};
  for (const answer of data.answers) {
    initialAnswers[answer.questionId] = answer.selectedIndex;
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <Badge tone="gold">CBT in progress</Badge>
          <p className="mt-2 text-xs text-ink-soft">
            Do not refresh unnecessarily. Answers save as you select them.
          </p>
        </div>
        <Link href="/cbt" className="text-xs font-semibold text-navy hover:underline">
          Exit to CBT desk
        </Link>
      </div>

      <ExamClient
        sessionId={data.session.id}
        questions={questions}
        initialAnswers={initialAnswers}
        durationSeconds={data.session.durationSeconds}
        startedAt={new Date(data.session.startedAt).toISOString()}
        label={data.session.label}
        mode={data.session.mode}
      />
    </div>
  );
}
