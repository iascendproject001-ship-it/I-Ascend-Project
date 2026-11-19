import Link from "next/link";
import { getCurrentLearner } from "@/lib/session";
import { getAdmissionsData } from "@/lib/data";
import { ArrowIcon, Badge, EmptyState } from "@/components/ui";

export const dynamic = "force-dynamic";
export const metadata = { title: "Course & institution finder" };

export default async function AdmissionsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; state?: string; ownership?: string; cutoff?: string }>;
}) {
  const params = await searchParams;
  const q = params.q?.trim() ?? "";
  const state = params.state ?? "";
  const ownership = params.ownership ?? "";
  const cutoff = Number(params.cutoff ?? 0) || undefined;

  const [learner, data] = await Promise.all([
    getCurrentLearner(),
    getAdmissionsData({ q, state, ownership, maxCutoff: cutoff }),
  ]);

  const programmeRows = data.programmes;
  const goal = learner?.targetCourse?.toLowerCase() ?? "";

  return (
    <div className="space-y-6">
      <header className="relative overflow-hidden rounded-2xl bg-navy p-6 text-cream">
        <div className="grain pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative max-w-3xl">
          <Badge tone="cream">Admissions intelligence</Badge>
          <h1 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
            Know the requirement before you choose.
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-cream/70">
            The JAMB minimum is not the same as a competitive cut-off. Search {data.totalProgrammes}{" "}
            programmes across {data.institutions.length} institutions, check the exact UTME subject
            combination, and plan a stretch, match and safety option.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-[0.68rem] text-cream/60">
            <span className="rounded-full border border-white/15 px-2.5 py-1">
              Cut-offs are indicative, not official
            </span>
            <span className="rounded-full border border-white/15 px-2.5 py-1">
              Always confirm in the current JAMB brochure
            </span>
          </div>
        </div>
      </header>

      {learner && learner.targetCourse && (
        <div className="rounded-2xl border border-gold/40 bg-gold-soft/60 p-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
          <div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gold-deep">
              Your declared goal
            </p>
            <p className="mt-1 font-display text-lg text-navy-deep">
              {learner.targetCourse}
              {learner.targetInstitution ? ` · ${learner.targetInstitution}` : ""}
            </p>
            <p className="mt-1 text-xs text-[#6b4a0d]">
              Target UTME {learner.targetScore}. Compare that against the competitive cut-offs below.
            </p>
          </div>
          <Link
            href="/profile"
            className="mt-3 inline-block shrink-0 rounded-full bg-navy px-4 py-2.5 text-xs font-semibold text-cream sm:mt-0"
          >
            Update my goal
          </Link>
        </div>
      )}

      <form className="card grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_auto]" method="get">
        <label className="block">
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
            Course or programme
          </span>
          <input
            name="q"
            defaultValue={q}
            placeholder="e.g. Medicine, Law, Accounting"
            className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm placeholder:text-ink-soft/50"
          />
        </label>
        <label className="block">
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">State</span>
          <select
            name="state"
            defaultValue={state}
            className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm"
          >
            <option value="">All states</option>
            {data.states.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
            Ownership
          </span>
          <select
            name="ownership"
            defaultValue={ownership}
            className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm"
          >
            <option value="">Any</option>
            <option value="Federal">Federal</option>
            <option value="State">State</option>
            <option value="Private">Private</option>
          </select>
        </label>
        <label className="block">
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
            My likely score
          </span>
          <select
            name="cutoff"
            defaultValue={cutoff ? String(cutoff) : ""}
            className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm"
          >
            <option value="">Any</option>
            {[200, 220, 240, 260, 280, 300].map((value) => (
              <option key={value} value={value}>
                Realistic at {value}+
              </option>
            ))}
          </select>
        </label>
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full rounded-lg bg-navy px-4 py-2.5 text-xs font-semibold text-cream transition hover:bg-navy-deep"
          >
            Apply filters
          </button>
        </div>
      </form>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm text-ink-soft">
          <strong className="text-navy-deep">{programmeRows.length}</strong> programmes match your filters —
          sorted by competitive cut-off.
        </p>
        {(q || state || ownership || cutoff) && (
          <Link href="/admissions" className="text-xs font-semibold text-navy hover:underline">
            Clear all filters
          </Link>
        )}
      </div>

      {programmeRows.length === 0 ? (
        <EmptyState
          icon="🔍"
          title="No programme matched that search"
          description="Try a broader course name, remove the state filter, or raise your score estimate. Many programmes accept a related course as a fallback."
          action={
            <Link href="/admissions" className="rounded-full bg-navy px-5 py-3 text-xs font-semibold text-cream">
              Reset filters
            </Link>
          }
        />
      ) : (
        <div className="grid gap-3 lg:grid-cols-2">
          {programmeRows.map((programme) => {
            const isGoal = goal.length > 2 && programme.name.toLowerCase().includes(goal);
            return (
              <article
                key={programme.id}
                className={`rounded-2xl border bg-white p-5 ${
                  isGoal ? "border-gold/60 shadow-sm" : "border-line"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink-soft/70">
                      {programme.institutionShort || programme.institutionName} · {programme.state} ·{" "}
                      {programme.ownership}
                    </p>
                    <h2 className="mt-1 font-display text-xl leading-snug text-navy-deep">{programme.name}</h2>
                    <p className="text-xs text-ink-soft">
                      {programme.faculty} · {programme.durationYears} years
                    </p>
                  </div>
                  {isGoal && <Badge tone="gold">Your goal</Badge>}
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="rounded-xl border border-line bg-cream/60 p-2.5">
                    <p className="text-[0.58rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
                      JAMB minimum
                    </p>
                    <p className="mt-1 font-display text-lg text-navy-deep">{programme.jambCutoff}</p>
                  </div>
                  <div className="rounded-xl border border-gold/40 bg-gold-soft/60 p-2.5">
                    <p className="text-[0.58rem] font-bold uppercase tracking-[0.1em] text-gold-deep">
                      Competitive aim
                    </p>
                    <p className="mt-1 font-display text-lg text-navy-deep">{programme.competitiveCutoff}</p>
                  </div>
                </div>

                <div className="mt-3">
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
                    UTME combination
                  </p>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {programme.subjectCombo.map((subjectName) => (
                      <span
                        key={subjectName}
                        className="rounded-md bg-navy/6 px-2 py-1 text-[0.65rem] font-medium text-navy"
                      >
                        {subjectName}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mt-3 text-[0.72rem] leading-relaxed text-ink-soft">
                  <strong className="text-navy-deep">O&apos;level: </strong>
                  {programme.olevel}
                </p>
                {programme.notes && (
                  <p className="mt-2 rounded-lg bg-parchment/70 p-2.5 text-[0.72rem] leading-relaxed text-ink-soft">
                    {programme.notes}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      )}

      <section className="card p-5">
        <h2 className="font-display text-xl text-navy-deep">How to build your application strategy</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {[
            {
              label: "Stretch",
              body: "One ambitious choice — the course and school you truly want. Prepare as though only this one exists.",
            },
            {
              label: "Match",
              body: "One programme where your mock score sits comfortably above the competitive cut-off.",
            },
            {
              label: "Safety",
              body: "One less subscribed programme or institution that still leads to a career you respect.",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-line bg-cream/60 p-4">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gold-deep">
                {item.label}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
        <Link
          href="/mentor/new"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-xs font-semibold text-cream"
        >
          Review my choices with a mentor
          <ArrowIcon className="h-3.5 w-3.5" />
        </Link>
      </section>
    </div>
  );
}
