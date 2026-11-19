import Link from "next/link";
import { requireLearner } from "@/lib/session";
import { getLatestIadp, getLearnerProfile } from "@/lib/data";
import { ArrowIcon, Badge, ProgressBar } from "@/components/ui";

export const dynamic = "force-dynamic";
export const metadata = { title: "My learning plan" };

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-NG", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(date),
  );
}

export default async function PlanPage() {
  const learner = await requireLearner();
  const [iadp, profile] = await Promise.all([
    getLatestIadp(learner.id),
    getLearnerProfile(learner.id),
  ]);

  if (!iadp) {
    return (
      <div className="mx-auto max-w-2xl space-y-4 text-center">
        <Badge tone="gold">Individual Academic Development Plan</Badge>
        <h1 className="font-display text-3xl leading-tight text-navy-deep sm:text-4xl">
          Your plan is built from your baseline.
        </h1>
        <p className="mx-auto max-w-lg text-sm leading-relaxed text-ink-soft">
          Sit the diagnostic in your four UTME subjects and we will generate your bands, topic gaps,
          targets, actions and confirmed pathway — instantly, and reviewed with your mentor every few weeks.
        </p>
        <Link
          href="/baseline"
          className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-cream transition hover:bg-navy-deep"
        >
          Take my baseline assessment <ArrowIcon />
        </Link>
      </div>
    );
  }

  const entries = Object.entries(iadp.scores);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="gold">My learning plan</Badge>
            <Badge tone="navy">Pathway {iadp.pathway}</Badge>
            <Badge tone="emerald">Active since {formatDate(iadp.createdAt)}</Badge>
          </div>
          <h1 className="mt-3 font-display text-3xl leading-tight text-navy-deep sm:text-4xl">
            {learner.name.split(" ")[0]}&apos;s plan: {iadp.overallPercent}% and climbing.
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Built from your baseline of {formatDate(iadp.createdAt)}
            {profile ? ` and your participant profile (${profile.completeness}% complete)` : ""}. Every mock
            updates this plan — nothing here is frozen.
          </p>
        </div>
        <Link
          href="/baseline"
          className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-4 py-2.5 text-xs font-semibold text-navy transition hover:border-navy/50"
        >
          Retake baseline
        </Link>
      </div>

      <section className="card p-5">
        <h2 className="font-display text-xl text-navy-deep">Subject standing</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {entries.map(([name, score]) => (
            <div key={name} className="rounded-xl border border-line bg-cream/60 p-3.5">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-semibold text-navy-deep">{name}</p>
                <span className="rounded-full bg-navy/8 px-2 py-0.5 text-[0.65rem] font-bold text-navy">
                  {score.band}
                </span>
              </div>
              <p className="mt-1 font-display text-2xl text-navy-deep">
                {score.percent}
                <span className="text-sm text-ink-soft">% · {score.correct}/{score.total}</span>
              </p>
              <div className="mt-2">
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

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="card p-5">
          <h2 className="font-display text-xl text-navy-deep">Targets for the next 4 weeks</h2>
          <div className="mt-3 overflow-hidden rounded-xl border border-line">
            <table className="w-full text-left text-xs">
              <thead className="bg-parchment/70 text-[0.6rem] uppercase tracking-[0.08em] text-ink-soft">
                <tr>
                  <th className="px-3 py-2 font-bold">Area</th>
                  <th className="px-3 py-2 font-bold">Aim</th>
                  <th className="px-3 py-2 font-bold">By</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {iadp.targets.map((target) => (
                  <tr key={target.area}>
                    <td className="px-3 py-2.5 font-semibold text-navy-deep">
                      {target.area}
                      <span className="block font-normal text-ink-soft">{target.current}</span>
                    </td>
                    <td className="px-3 py-2.5 text-ink">{target.target}</td>
                    <td className="px-3 py-2.5 text-ink-soft">{target.byWhen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="space-y-4">
          <section className="card p-5">
            <h2 className="font-display text-xl text-navy-deep">Weekly actions</h2>
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

          <section className="rounded-2xl border border-line bg-gold-soft/60 p-5">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gold-deep">
              Review rhythm
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-[#6b4a0d]">
              Your mentor reviews this plan with you every 3–4 weeks using fresh mock data. Bring your error
              log and your study log to every review.
            </p>
            {iadp.reviews.length > 0 ? (
              <ul className="mt-3 space-y-2">
                {iadp.reviews.map((review, index) => (
                  <li key={index} className="rounded-lg bg-white/70 p-2.5 text-xs leading-relaxed text-ink">
                    <strong>{review.author}</strong> · {review.date}
                    <span className="block text-ink-soft">{review.note}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-xs text-[#6b4a0d]">No reviews recorded yet — your first review is due after your first mock.</p>
            )}
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                href="/cbt"
                className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-[0.7rem] font-semibold text-cream"
              >
                Sit a mock <ArrowIcon className="h-3 w-3" />
              </Link>
              <Link
                href="/mentor/new"
                className="inline-flex items-center gap-1.5 rounded-full border border-navy/25 bg-white px-4 py-2 text-[0.7rem] font-semibold text-navy"
              >
                Ask my mentor
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
