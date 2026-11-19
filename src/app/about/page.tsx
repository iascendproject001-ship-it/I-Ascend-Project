import Link from "next/link";
import { MarketingFooter, MarketingHeader } from "@/components/marketing";
import { ArrowIcon, Badge, SectionHeading, StatTile } from "@/components/ui";
import { getPublicStats } from "@/lib/data";

export const dynamic = "force-dynamic";
export const metadata = { title: "About the programme" };

export default async function AboutPage() {
  const stats = await getPublicStats();

  return (
    <div className="min-h-screen bg-cream">
      <MarketingHeader />

      <main>
        <section className="mx-auto w-full max-w-6xl px-5 pb-12 pt-12 sm:px-8 lg:pb-16 lg:pt-16">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <Badge tone="gold">The intervention</Badge>
              <h1 className="mt-4 font-display text-4xl leading-[1.04] tracking-tight text-navy-deep sm:text-5xl">
                A bridge for the students the system forgot to guide.
              </h1>
              <p className="mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-ink-soft">
                The I Ascend Project exists because preventable delays are still ending educational journeys
                in Nigeria. Candidates with the ability to score 300+ lose years to missing mentorship, wrong
                subject combinations, no access to high-yield textbooks, and a quiet belief that university
                was never meant for people like them.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Link
                  href="/start"
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-xs font-semibold text-cream transition hover:bg-navy-deep"
                >
                  Begin the programme
                  <ArrowIcon className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-5 py-3 text-xs font-semibold text-navy transition hover:border-navy/50"
                >
                  Partner or volunteer
                </Link>
                <Link
                  href="/framework"
                  className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-5 py-3 text-xs font-semibold text-navy transition hover:border-navy/50"
                >
                  Read the master framework
                  <ArrowIcon className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-line bg-white p-6">
              <img
                src="/brand/i-ascend-logo.svg"
                alt="Official logo of the I Ascend Project — a torch under the stars with the motto Rescuing the Future; Rebuilding the Future"
                className="w-full rounded-xl"
              />
              <p className="mt-5 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gold-deep">
                Founder&apos;s note
              </p>
              <p className="mt-3 font-display text-lg leading-relaxed text-navy-deep">
                &ldquo;My own journey into tertiary education was delayed — not by a lack of ambition, but by a
                lack of information. Nobody told me which combination my course required. Nobody handed me the
                right textbook. I applied, waited and learned too late what I should have known at the start.
                I built I Ascend so no young person has to pay that price for guidance nobody gave them.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3 border-t border-line pt-4">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-sm font-bold text-gold">
                  IA
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-deep">The Founder</p>
                  <p className="text-xs text-ink-soft">I Ascend Project · Interventional education</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-line bg-white">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-4 px-5 py-7 sm:px-8 lg:grid-cols-4">
            <StatTile value={stats.subjects} label="JAMB subjects covered" hint="Including languages and vocational papers" />
            <StatTile value={stats.lessons} label="Guided lessons" hint="High-yield, exam-aligned" />
            <StatTile value={stats.questions} label="Explained CBT questions" hint="Every answer reviewed" />
            <StatTile value={stats.programmes} label="Admission programmes mapped" hint={`${stats.institutions} institutions`} />
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Theory of change"
            title="If we remove these four barriers, admission follows preparation."
            description="Our intervention is deliberately practical. Each component answers one barrier that keeps capable candidates out of tertiary institutions."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                barrier: "Barrier: no guidance",
                response: "A named mentor, weekly checkpoints and a written plan.",
                detail:
                  "Every learner gets a mentor thread, a target course and institution, and a three-step weekly plan on the dashboard.",
              },
              {
                barrier: "Barrier: weak preparation",
                response: "Syllabus-first lessons and timed CBTs.",
                detail:
                  "Lessons follow the JAMB syllabus and end with the exact points to revise. CBTs simulate the real interface, clock and pressure.",
              },
              {
                barrier: "Barrier: no resources",
                response: "A curated, low-cost resource route.",
                detail:
                  "We name the three books that matter per subject, provide free guides, and operate a lending pool for candidates who cannot buy them.",
              },
              {
                barrier: "Barrier: no belief",
                response: "Evidence, examples and honest encouragement.",
                detail:
                  "Learners see candidates from similar backgrounds secure admission. Mentors challenge the belief that university is for the wealthy.",
              },
            ].map((item) => (
              <article key={item.barrier} className="rounded-2xl border border-line bg-white p-5">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-plum">{item.barrier}</p>
                <h3 className="mt-1.5 font-display text-xl leading-snug text-navy-deep">{item.response}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-line bg-parchment/50">
          <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <SectionHeading
                  eyebrow="Commitments"
                  title="What we promise, and what we do not."
                />
              </div>
              <div className="grid gap-3">
                {[
                  {
                    label: "We promise",
                    body: "Free subject teaching, CBT practice, mentoring and admissions guidance for learners who need it most — and honesty about every cut-off, deadline and risk.",
                  },
                  {
                    label: "We promise",
                    body: "A mentor who answers, a plan that fits your study window, and materials chosen for the exam rather than for prestige.",
                  },
                  {
                    label: "We do not promise",
                    body: "Admission. No programme can guarantee that. We promise preparation, guidance and a fair shot — the rest depends on your work, your choices and the institutions.",
                  },
                  {
                    label: "We do not promise",
                    body: "That one exam defines you. If admission does not come this cycle, we help you plan a stronger next attempt or a credible alternative pathway.",
                  },
                ].map((item, index) => (
                  <div key={index} className="rounded-2xl border border-line bg-white p-4">
                    <p
                      className={`text-[0.62rem] font-bold uppercase tracking-[0.14em] ${
                        item.label === "We promise" ? "text-emerald" : "text-gold-deep"
                      }`}
                    >
                      {item.label}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
          <div className="rounded-[1.75rem] bg-navy px-6 py-10 text-cream sm:px-10">
            <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-center">
              <div>
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-gold">
                  Who we are building for
                </p>
                <h2 className="mt-2 font-display text-3xl leading-tight sm:text-4xl">
                  First-generation applicants. Rural candidates. Students whose families cannot fund extra
                  coaching.
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-cream/70">
                  If that is you, the programme is free and it starts now. If you know someone like that, send
                  them this page. That single act is how the intervention scales.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Link
                  href="/start"
                  className="rounded-full bg-gold px-5 py-3 text-center text-xs font-semibold text-navy-deep"
                >
                  Create a free profile
                </Link>
                <Link
                  href="/register"
                  className="rounded-full border border-white/25 px-5 py-3 text-center text-xs font-semibold text-cream"
                >
                  Volunteer as a mentor
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
