import Link from "next/link";
import { requireLearner } from "@/lib/session";
import { getPracticeHistory, getSubjects, projectedScore, readinessBand } from "@/lib/data";
import { CbtSetup } from "@/components/cbt/cbt-setup";
import { Badge, StatTile } from "@/components/ui";

export const dynamic = "force-dynamic";
export const metadata = { title: "CBT practice" };

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-NG", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

export default async function CbtPage() {
  const learner = await requireLearner();
  const [subjects, history] = await Promise.all([getSubjects(), getPracticeHistory(learner.id, 20)]);

  const completed = history.filter((session) => session.status === "completed");
  const average = completed.length
    ? Math.round(completed.reduce((sum, session) => sum + session.scorePercent, 0) / completed.length)
    : 0;
  const best = completed.reduce((max, session) => Math.max(max, session.scorePercent), 0);
  const band = readinessBand(average);

  return (
    <div className="space-y-6">
      <header className="relative overflow-hidden rounded-2xl bg-navy p-6 text-cream">
        <div className="grain pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative flex flex-wrap items-end justify-between gap-5">
          <div>
            <Badge tone="cream">Computer-based test simulator</Badge>
            <h1 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
              Practise the way you will be examined.
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-cream/70">
              Real timing, real navigation, real pressure. Choose your subjects, sit the paper, then study
              every explanation — including the options that were designed to trap you. Our bank holds
              original UTME-style questions written to the official syllabus and patterned on papers from 1978
              to date — not verbatim past questions.
            </p>
          </div>
          <div className="grid w-full grid-cols-3 gap-2 sm:w-auto">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-[0.58rem] uppercase tracking-[0.1em] text-cream/50">Average</p>
              <p className="mt-1 font-display text-xl">{average}%</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-[0.58rem] uppercase tracking-[0.1em] text-cream/50">Projected</p>
              <p className="mt-1 font-display text-xl">{projectedScore(average)}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3">
              <p className="text-[0.58rem] uppercase tracking-[0.1em] text-cream/50">Best</p>
              <p className="mt-1 font-display text-xl">{best}%</p>
            </div>
          </div>
        </div>
      </header>

      <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        <CbtSetup
          subjects={subjects.map((subject) => ({
            id: subject.id,
            name: subject.name,
            category: subject.category,
            icon: subject.icon,
            questionCount: subject.questionCount,
          }))}
        />

        <aside className="space-y-4">
          <div className="card p-5">
            <h2 className="font-display text-xl text-navy-deep">CBT attempt history</h2>
            <p className="mt-1 text-xs text-ink-soft">Your last {history.length} sessions.</p>
            {history.length === 0 ? (
              <p className="mt-4 rounded-xl border border-dashed border-line p-4 text-sm text-ink-soft">
                No attempt yet. Start with a 10-question quick drill to set a baseline.
              </p>
            ) : (
              <ul className="mt-3 divide-y divide-line">
                {history.slice(0, 8).map((session) => (
                  <li key={session.id} className="py-2.5">
                    <Link
                      href={
                        session.status === "completed"
                          ? `/cbt/${session.id}/result`
                          : `/cbt/${session.id}`
                      }
                      className="flex items-center justify-between gap-3"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-navy-deep">{session.label}</p>
                        <p className="text-[0.68rem] text-ink-soft">
                          {formatDate(session.startedAt)} · {session.correctCount}/{session.questionCount}
                        </p>
                      </div>
                      {session.status === "completed" ? (
                        <span
                          className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${
                            session.scorePercent >= 70
                              ? "bg-emerald-soft text-emerald"
                              : session.scorePercent >= 50
                                ? "bg-gold-soft text-gold-deep"
                                : "bg-parchment text-ink-soft"
                          }`}
                        >
                          {session.scorePercent}%
                        </span>
                      ) : (
                        <span className="shrink-0 rounded-full bg-navy px-2.5 py-1 text-[0.68rem] font-bold text-gold">
                          Resume
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="rounded-2xl border border-line bg-gold-soft/60 p-5">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gold-deep">
              Readiness signal
            </p>
            <p className="mt-2 font-display text-lg text-navy-deep">{band.label}</p>
            <ul className="mt-3 space-y-2 text-xs leading-relaxed text-[#6b4a0d]">
              <li>• Your CBT average is {average}%. Four papers at this rate projects {projectedScore(average)}/400.</li>
              <li>• Aim for 75%+ on every subject drill before the real exam.</li>
              <li>• Review mistakes within 24 hours — that is where the marks return.</li>
            </ul>
          </div>
        </aside>
      </div>

      <section className="grid gap-3 sm:grid-cols-3">
        <StatTile value={subjects.reduce((sum, subject) => sum + subject.questionCount, 0)} label="Questions in bank" hint="Every answer explained" />
        <StatTile value={subjects.length} label="Subjects available" hint="Full JAMB coverage" />
        <StatTile value="0" label="Negative marking" hint="Never leave a blank" />
      </section>

      <section className="card p-5">
        <h2 className="font-display text-xl text-navy-deep">Before you sit the real thing</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Arrive early",
              body: "JAMB centres close access once the session begins. Check your centre a day before.",
            },
            {
              title: "Know the interface",
              body: "Practise skipping, flagging and returning. The palette is your control panel.",
            },
            {
              title: "Budget the clock",
              body: "Allow 50–60 seconds per question. Flag anything that takes longer.",
            },
            {
              title: "No negative marking",
              body: "A guess is better than a blank. Eliminate clearly wrong options first.",
            },
          ].map((tip) => (
            <div key={tip.title} className="rounded-xl border border-line bg-cream/60 p-3.5">
              <p className="text-sm font-semibold text-navy-deep">{tip.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-soft">{tip.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
