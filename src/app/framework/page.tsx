import Link from "next/link";
import type { Metadata } from "next";
import { MarketingFooter, MarketingHeader } from "@/components/marketing";
import { ArrowIcon, Badge, SectionHeading } from "@/components/ui";
import { PrintButton } from "@/components/framework/framework-ui";
import { StatusChip } from "@/components/framework/framework-nav";
import {
  frameworkChapters,
  frameworkGroups,
  frameworkMeta,
  frameworkStats,
} from "@/content/framework";
import { statusLabels, type FrameworkStatus } from "@/content/framework/types";

export const metadata: Metadata = {
  title: "Master Programme Framework",
  description:
    "The comprehensive, implementation-ready framework for the I Ascend Project: academic delivery, diagnostics, mentorship, safeguarding, MEAL, risk, finance, partnerships and scale.",
};

const principles = [
  "Diagnosis before teaching — no plan without a baseline.",
  "Practice at exam standard, not at comfort standard.",
  "Mentorship with boundaries, documentation and supervision.",
  "Guidance verified against current official sources, never guessed.",
  "Measure learning gains, not attendance alone.",
  "Safeguarding and data protection are preconditions, not add-ons.",
];

export default function FrameworkHubPage() {
  return (
    <div className="min-h-screen bg-cream">
      <MarketingHeader />

      <main>
        <section className="relative overflow-hidden border-b border-line bg-navy-deep text-cream">
          <div className="grain pointer-events-none absolute inset-0 opacity-25" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
          <div className="relative mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="cream">Master framework · v{frameworkMeta.version}</Badge>
              <Badge tone="gold">{frameworkMeta.status}</Badge>
              <Badge tone="cream">{frameworkMeta.context}</Badge>
            </div>
            <h1 className="mt-4 max-w-4xl font-display text-3xl leading-[1.06] tracking-tight sm:text-4xl lg:text-5xl">
              {frameworkMeta.title}
            </h1>
            <p className="mt-4 max-w-3xl text-[1.02rem] leading-relaxed text-cream/75">
              {frameworkMeta.purpose} The framework is paired with a live learning platform, so every
              component can be run, measured and improved rather than merely described.
            </p>
            <p className="mt-3 font-display text-lg text-gold">{frameworkMeta.tagline}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              <Link
                href="/framework/executive-summary"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-xs font-semibold text-navy-deep transition hover:bg-[#f2b954]"
              >
                Read the framework
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
              <PrintButton label="Print the full document" />
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-xs font-semibold text-cream transition hover:border-white/60"
              >
                Programme overview
              </Link>
              <Link
                href="/launch"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-xs font-semibold text-cream transition hover:border-white/60"
              >
                Launch readiness plan
              </Link>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: "Chapters", value: frameworkStats.chapters },
                { label: "Working appendices", value: frameworkStats.appendices },
                { label: "Matrices & tables", value: frameworkStats.tables },
                { label: "Named outputs", value: frameworkStats.outputs },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-3.5">
                  <dd className="font-display text-2xl leading-none">{item.value}</dd>
                  <dt className="mt-1.5 text-[0.6rem] uppercase tracking-[0.12em] text-cream/55">{item.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:py-14">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="card p-5 sm:p-6">
              <h2 className="font-display text-2xl text-navy-deep">How to use this document</h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                The framework is written for four readers: the Board (chapters 01–05, 11, 16), the delivery
                team (06–10, 12, 19), safeguarding and compliance (13, 15, 18) and partners or funders (14,
                17, 20). Working appendices A–H are ready to be used in the first intake without further
                adaptation.
              </p>
              <div className="mt-4 space-y-2">
                {principles.map((item, index) => (
                  <div key={item} className="flex gap-2.5 text-sm text-ink-soft">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-soft text-[0.6rem] font-bold text-gold-deep">
                      {index + 1}
                    </span>
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl border border-gold/40 bg-gold-soft/60 p-3.5 text-xs leading-relaxed text-[#6b4a0d]">
                <strong>Adoption status.</strong> Confirmed items describe what already exists. Recommended
                items require a management or Board decision. Items marked Validate must be checked against
                current official Nigerian sources, legal advice or signed partner agreements before use.
              </div>
            </div>

            <div className="space-y-3">
              {(Object.keys(statusLabels) as FrameworkStatus[]).map((status) => {
                const count = frameworkChapters.filter((chapter) => chapter.status === status).length;
                return (
                  <div key={status} className="card flex items-start justify-between gap-3 p-4">
                    <div>
                      <StatusChip status={status} />
                      <p className="mt-2 text-xs leading-relaxed text-ink-soft">
                        {statusLabels[status].description}
                      </p>
                    </div>
                    <span className="font-display text-2xl text-navy-deep">{count}</span>
                  </div>
                );
              })}
              <div className="rounded-2xl border border-line bg-white p-4">
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-ink-soft">
                  Document control
                </p>
                <dl className="mt-2 space-y-1.5 text-xs text-ink-soft">
                  <div className="flex justify-between gap-3">
                    <dt>Version</dt>
                    <dd className="font-semibold text-navy-deep">{frameworkMeta.version}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt>Owner</dt>
                    <dd className="text-right font-semibold text-navy-deep">{frameworkMeta.owner}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt>Review</dt>
                    <dd className="text-right font-semibold text-navy-deep">Annually and on policy change</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-white">
          <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
            <SectionHeading
              eyebrow="Contents"
              title="Twenty chapters, eight working appendices"
              description="Read sequentially for adoption, or jump directly to the component you are implementing."
            />

            <div className="mt-8 space-y-8">
              {frameworkGroups.map((group) => (
                <div key={group.name}>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="font-display text-xl text-navy-deep">{group.name}</h3>
                    <p className="text-xs text-ink-soft">{group.description}</p>
                  </div>
                  <div className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                    {group.slugs.map((slug) => {
                      const chapter = frameworkChapters.find((item) => item.slug === slug);
                      if (!chapter) return null;
                      return (
                        <Link
                          key={slug}
                          href={`/framework/${slug}`}
                          className="group flex h-full flex-col rounded-xl border border-line bg-cream/50 p-3.5 transition hover:-translate-y-0.5 hover:border-navy/25 hover:bg-white hover:shadow-md"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gold-deep">
                              {chapter.number}
                            </span>
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                chapter.status === "confirmed"
                                  ? "bg-emerald"
                                  : chapter.status === "recommended"
                                    ? "bg-navy"
                                    : "bg-gold"
                              }`}
                              title={statusLabels[chapter.status].label}
                            />
                          </div>
                          <p className="mt-1 text-sm font-semibold leading-snug text-navy-deep">
                            {chapter.title}
                          </p>
                          <p className="mt-1 flex-1 text-xs leading-relaxed text-ink-soft">{chapter.short}</p>
                          <span className="mt-2 inline-flex items-center gap-1 text-[0.68rem] font-semibold text-navy opacity-0 transition group-hover:opacity-100">
                            Open chapter <ArrowIcon className="h-3 w-3" />
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
          <div className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
            <div className="rounded-2xl bg-navy p-6 text-cream">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gold">
                Already operational
              </p>
              <h2 className="mt-2 font-display text-2xl leading-snug">
                The framework is wired to a working learning platform.
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                Learner profiles, 22 subject curricula, timed CBTs with explanations, mentorship threads, an
                admissions finder and a resource library are live. Appendix G maps each capability to this
                framework and sets the build order for baseline scoring, IADP workflow, attendance, mentor
                records and the MEAL dashboard.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href="/framework/appendix-g-platform"
                  className="rounded-full bg-gold px-4 py-2.5 text-xs font-semibold text-navy-deep"
                >
                  See the platform map
                </Link>
                <Link
                  href="/start"
                  className="rounded-full border border-white/25 px-4 py-2.5 text-xs font-semibold text-cream"
                >
                  Open the live programme
                </Link>
              </div>
            </div>
            <div className="card p-6">
              <h2 className="font-display text-xl text-navy-deep">Reviewed before publication</h2>
              <ul className="mt-3 space-y-2.5 text-sm text-ink-soft">
                <li>• Current JAMB syllabus, brochure and calendar for every academic cycle.</li>
                <li>• Nigerian legal advice on safeguarding and data protection.</li>
                <li>• Signed partner agreements before any partnership is announced.</li>
                <li>• Board approval of the budget, risk register and results framework.</li>
              </ul>
              <p className="mt-4 rounded-lg bg-parchment/70 p-3 text-xs leading-relaxed text-ink-soft">
                No partnerships, accreditations, statistics or admission outcomes are claimed in this document
                beyond what the programme can currently evidence.
              </p>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
