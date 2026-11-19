import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { requireLearner } from "@/lib/session";
import { getSessionForLearner, readinessBand } from "@/lib/data";
import { ArrowIcon, Badge, ProgressBar, StatTile } from "@/components/ui";

export const dynamic = "force-dynamic";
export const metadata = { title: "CBT result" };

const letters = ["A", "B", "C", "D", "E"];

export default async function CbtResultPage({
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
  if (data.session.status !== "completed") redirect(`/cbt/${sessionId}`);

  const { session, answers } = data;
  const unanswered = answers.filter((answer) => answer.selectedIndex === null).length;
  const percent = session.scorePercent;
  const band = readinessBand(percent);

  const bySubject = new Map<string, { correct: number; total: number; slug: string; icon: string }>();
  for (const answer of answers) {
    const entry = bySubject.get(answer.subjectName) ?? {
      correct: 0,
      total: 0,
      slug: answer.subjectSlug,
      icon: answer.subjectIcon,
    };
    entry.total += 1;
    if (answer.isCorrect) entry.correct += 1;
    bySubject.set(answer.subjectName, entry);
  }

  const weakestSubject = [...bySubject.entries()].sort(
    (a, b) => a[1].correct / a[1].total - b[1].correct / b[1].total,
  )[0];

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-2xl bg-navy p-6 text-cream">
        <div className="grain pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative grid gap-6 lg:grid-cols-[1fr_auto]">
          <div>
            <Badge tone="cream">CBT result · {session.label}</Badge>
            <h1 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
              {percent >= 75
                ? "That is admission-standard work."
                : percent >= 60
                  ? "Solid. Now close the gaps."
                  : percent >= 40
                    ? "A foundation is forming."
                    : "Start here. This is your baseline."}
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-cream/70">
              You scored {session.correctCount} of {answers.length} · {percent}% · projected UTME equivalent{" "}
              <strong className="text-gold">{session.projectedScore}/400</strong>. {band.label}.
              {unanswered > 0 && ` ${unanswered} question${unanswered > 1 ? "s were" : " was"} left blank.`}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href="/cbt"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-xs font-semibold text-navy-deep transition hover:bg-[#f2b954]"
              >
                Take another test
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
              {weakestSubject && (
                <Link
                  href={`/learn/${weakestSubject[1].slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-xs font-semibold text-cream transition hover:border-white/60"
                >
                  Revise {weakestSubject[0]}
                </Link>
              )}
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div
              className="grid h-32 w-32 shrink-0 place-items-center rounded-full"
              style={{
                background: `conic-gradient(#E9A83A ${percent * 3.6}deg, rgba(255,255,255,0.12) 0deg)`,
              }}
            >
              <div className="grid h-24 w-24 place-items-center rounded-full bg-navy-deep text-center">
                <div>
                  <p className="font-display text-3xl leading-none">{percent}%</p>
                  <p className="mt-1 text-[0.58rem] uppercase tracking-[0.12em] text-cream/50">score</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatTile value={`${session.correctCount}/${answers.length}`} label="Correct" hint="Questions answered right" />
        <StatTile value={`${answers.length - session.correctCount}`} label="To review" hint="Read each explanation" />
        <StatTile value={session.projectedScore} label="Projected UTME" hint="Score × 4 papers" />
        <StatTile value={bySubject.size} label="Subjects sat" hint={session.mode === "exam" ? "Exam condition" : "Practice mode"} />
      </div>

      <section className="card p-5">
        <h2 className="font-display text-xl text-navy-deep">Subject breakdown</h2>
        <div className="mt-4 space-y-3">
          {[...bySubject.entries()].map(([name, stats]) => {
            const subjectPercent = Math.round((stats.correct / stats.total) * 100);
            return (
              <div key={name}>
                <div className="flex items-center justify-between gap-2 text-sm">
                  <Link href={`/learn/${stats.slug}`} className="font-medium text-navy-deep hover:underline">
                    {stats.icon} {name}
                  </Link>
                  <span className="text-xs text-ink-soft">
                    {stats.correct}/{stats.total} · {subjectPercent}%
                  </span>
                </div>
                <div className="mt-1.5">
                  <ProgressBar
                    value={subjectPercent}
                    tone={subjectPercent >= 70 ? "emerald" : subjectPercent >= 50 ? "gold" : "navy"}
                    height="h-1.5"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <div className="flex flex-wrap items-end justify-between gap-2">
          <h2 className="font-display text-xl text-navy-deep">Answer review &amp; explanations</h2>
          <p className="text-xs text-ink-soft">Open each question to see why the answer is correct.</p>
        </div>

        <div className="mt-3 space-y-2.5">
          {answers.map((answer, index) => {
            const selected = answer.selectedIndex;
            const correct = Boolean(answer.isCorrect);
            return (
              <details
                key={answer.answerId}
                className={`group rounded-2xl border bg-white p-4 ${
                  correct ? "border-emerald/25" : "border-[#e7b4b4]"
                }`}
                open={!correct && index < 2}
              >
                <summary className="flex cursor-pointer list-none items-start gap-3">
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg text-[0.68rem] font-bold ${
                      correct ? "bg-emerald text-white" : "bg-[#fdecec] text-[#a12b2b]"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft/70">
                        {answer.subjectName} · {answer.topic}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-wide ${
                          correct
                            ? "bg-emerald-soft text-emerald"
                            : selected === null
                              ? "bg-parchment text-ink-soft"
                              : "bg-[#fdecec] text-[#a12b2b]"
                        }`}
                      >
                        {correct ? "Correct" : selected === null ? "Not answered" : "Incorrect"}
                      </span>
                    </div>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-navy-deep">{answer.prompt}</p>
                  </div>
                  <span className="mt-1 text-xs text-ink-soft transition group-open:rotate-180">▾</span>
                </summary>

                <div className="mt-3 space-y-1.5 pl-10">
                  {answer.options.map((option, optionIndex) => {
                    const isCorrectOption = optionIndex === answer.correctIndex;
                    const isChosen = optionIndex === selected;
                    return (
                      <div
                        key={`${answer.answerId}-${optionIndex}`}
                        className={`flex items-start gap-2.5 rounded-lg border px-3 py-2 text-xs ${
                          isCorrectOption
                            ? "border-emerald/40 bg-emerald-soft/60 font-semibold text-emerald"
                            : isChosen
                              ? "border-[#e7b4b4] bg-[#fdecec] text-[#a12b2b]"
                              : "border-line text-ink-soft"
                        }`}
                      >
                        <span className="font-bold">{letters[optionIndex]}.</span>
                        <span className="flex-1">{option}</span>
                        {isChosen && <span className="text-[0.6rem] uppercase">your answer</span>}
                        {isCorrectOption && <span className="text-[0.6rem] uppercase">correct</span>}
                      </div>
                    );
                  })}
                  <div className="mt-2 rounded-lg border border-line bg-cream/70 p-3 text-xs leading-relaxed text-ink">
                    <span className="font-bold text-navy-deep">Why: </span>
                    {answer.explanation}
                  </div>
                </div>
              </details>
            );
          })}
        </div>
      </section>
    </div>
  );
}
