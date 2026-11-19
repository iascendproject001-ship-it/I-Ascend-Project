import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { requireLearner } from "@/lib/session";
import { getIadpForSession, getSessionForLearner } from "@/lib/data";
import { bandFor } from "@/lib/baseline";
import { ArrowIcon, Badge, ProgressBar } from "@/components/ui";

export const dynamic = "force-dynamic";
export const metadata = { title: "Baseline report" };

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-NG", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(date),
  );
}

export default async function BaselineReportPage({
  params,
}: {
  params: Promise<{ sessionId: string }>;
}) {
  const { sessionId: raw } = await params;
  const sessionId = Number(raw);
  if (!Number.isFinite(sessionId)) notFound();

  const learner = await requireLearner();
  const data = await getSessionForLearner(sessionId, learner.id);
  if (!data) notFound();
  if (data.session.mode !== "baseline") redirect(`/cbt/${sessionId}/result`);
  if (data.session.status !== "completed") redirect(`/cbt/${sessionId}`);

  const iadp = await getIadpForSession(sessionId, learner.id);
  if (!iadp) {
    return (
      <div className="mx-auto max-w-2xl space-y-4 text-center">
        <Badge tone="gold">Baseline assessment</Badge>
        <h1 className="font-display text-3xl text-navy-deep">Report unavailable for this sitting.</h1>
        <p className="text-sm leading-relaxed text-ink-soft">
          This diagnostic was completed before automatic plan generation. Your score was{" "}
          {data.session.scorePercent}%. Retake the baseline to receive a full plan.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <Link href="/baseline" className="rounded-full bg-navy px-5 py-3 text-xs font-semibold text-cream">
            Retake the baseline
          </Link>
          <Link
            href={`/cbt/${sessionId}/result`}
            className="rounded-full border border-navy/20 bg-white px-5 py-3 text-xs font-semibold text-navy"
          >
            Review my answers
          </Link>
        </div>
      </div>
    );
  }

  const entries = Object.entries(iadp.scores);

  return (
    <div className="space-y-6">
      <div>
        <Link href="/baseline" className="text-xs font-semibold text-navy hover:underline">
          ← Back to baseline
        </Link>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <Badge tone="gold">Baseline report · {formatDate(iadp.createdAt)}</Badge>
          <Badge tone="navy">Pathway {iadp.pathway}</Badge>
        </div>
        <h1 className="mt-2 font-display text-3xl leading-tight text-navy-deep sm:text-4xl">
          Overall {iadp.overallPercent}% — {bandFor(iadp.overallPercent).label}.
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">{iadp.pathway && ""}{reasonText(iadp.pathway, iadp.overallPercent)}</p>
      </div>

      <section className="card p-5">
        <h2 className="font-display text-xl text-navy-deep">Per-subject bands</h2>
        <div className="mt-4 space-y-3">
          {entries.map(([name, score]) => (
            <div key={name}>
              <div className="flex items-center justify-between gap-2 text-sm">
                <span className="font-medium text-navy-deep">{name}</span>
                <span className="text-xs text-ink-soft">
                  {score.correct}/{score.total} · {score.percent}% · {score.band}
                </span>
              </div>
              <div className="mt-1.5">
                <ProgressBar
                  value={score.percent}
                  tone={score.percent >= 60 ? "emerald" : score.percent >= 40 ? "gold" : "navy"}
                  height="h-1.5"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-5">
        <h2 className="font-display text-xl text-navy-deep">Topic gaps to close first</h2>
        {iadp.gaps.length === 0 ? (
          <p className="mt-2 text-sm text-ink-soft">
            No missed topics recorded — maintain with mixed retrieval practice.
          </p>
        ) : (
          <ul className="mt-3 space-y-2">
            {iadp.gaps.slice(0, 10).map((gap, index) => (
              <li
                key={`${gap.subject}-${gap.topic}-${index}`}
                className="flex items-center justify-between gap-3 rounded-xl border border-line bg-cream/60 px-3.5 py-2.5 text-sm"
              >
                <span>
                  <strong className="text-navy-deep">{gap.subject}</strong>
                  <span className="text-ink-soft"> · {gap.topic}</span>
                </span>
                <span className="shrink-0 text-xs font-semibold text-gold-deep">
                  missed {gap.missed}/{gap.asked}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="card p-5">
          <h2 className="font-display text-xl text-navy-deep">Your targets</h2>
          <ul className="mt-3 space-y-2">
            {iadp.targets.map((target) => (
              <li key={target.area} className="rounded-xl border border-line bg-cream/60 p-3 text-sm">
                <p className="font-semibold text-navy-deep">{target.area}</p>
                <p className="mt-0.5 text-xs text-ink-soft">Now: {target.current}</p>
                <p className="text-xs text-ink-soft">
                  Aim: <strong className="text-emerald">{target.target}</strong> · by {target.byWhen}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section className="card p-5">
          <h2 className="font-display text-xl text-navy-deep">Your actions</h2>
          <ul className="mt-3 space-y-2">
            {iadp.actions.map((action) => (
              <li key={action} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-emerald-soft text-[0.55rem] text-emerald">
                  ✓
                </span>
                {action}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="flex flex-wrap gap-2">
        <Link
          href="/plan"
          className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-xs font-semibold text-cream transition hover:bg-navy-deep"
        >
          Open my learning plan <ArrowIcon className="h-3.5 w-3.5" />
        </Link>
        <Link
          href={`/cbt/${sessionId}/result`}
          className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-5 py-3 text-xs font-semibold text-navy transition hover:border-navy/50"
        >
          Review every answer
        </Link>
        <Link
          href="/mentor/new"
          className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-5 py-3 text-xs font-semibold text-navy transition hover:border-navy/50"
        >
          Discuss with a mentor
        </Link>
      </div>
    </div>
  );
}

function reasonText(pathway: string, overall: number) {
  const map: Record<string, string> = {
    "A+": `At ${overall}% overall, preparation moves to stretch work: accuracy under pressure and a competitive institution strategy.`,
    A: `At ${overall}% overall, the base is solid — teaching now targets timing, elimination and error analysis.`,
    B: `At ${overall}% overall, targeted remediation runs alongside core teaching until every subject passes 60%.`,
    C: `At ${overall}% overall, prerequisites come first — depth before speed, with weekly review.`,
    R: `As a repeat candidate at ${overall}% overall, the plan attacks what the previous attempt left unresolved.`,
    E: `At ${overall}% overall with declared access needs, delivery adapts in format while holding the same standard.`,
  };
  return map[pathway] ?? `Overall ${overall}%. Work the targets below in order.`;
}
