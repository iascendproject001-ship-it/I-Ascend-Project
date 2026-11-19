import Link from "next/link";
import { MarketingFooter, MarketingHeader } from "@/components/marketing";
import { ArrowIcon, Badge, ProgressBar, SectionHeading, StatTile } from "@/components/ui";
import { getPublicStats, getSubjectCards } from "@/lib/data";
import { HomeStories } from "@/components/home-stories";

export const dynamic = "force-dynamic";

const pillars = [
  {
    number: "01",
    title: "Learn every JAMB subject",
    body: "Structured, high-yield lessons across the full UTME curriculum — written plainly, with worked examples and the shortcuts examiners expect.",
    href: "/learn",
    cta: "Open the curriculum",
  },
  {
    number: "02",
    title: "Practise under real CBT pressure",
    body: "Timed computer-based tests with question navigation, flagging and instant scoring. Review every answer with a worked explanation.",
    href: "/cbt",
    cta: "Sit a practice test",
  },
  {
    number: "03",
    title: "Talk to a mentor who has done it",
    body: "Bring the subject you fear, the course you are unsure of, or the admission letter you are afraid to chase. Mentors answer with a plan.",
    href: "/mentor",
    cta: "Ask a mentor",
  },
  {
    number: "04",
    title: "Choose school and course wisely",
    body: "Compare indicative cut-off marks, O'level requirements and UTME subject combinations before you submit — not after you are rejected.",
    href: "/admissions",
    cta: "Find your course",
  },
];

const gaps = [
  {
    icon: "🧭",
    title: "No one to ask",
    body: "First-generation applicants often choose a course without ever speaking to someone who has sat the exam or studied the course.",
  },
  {
    icon: "📕",
    title: "No high-yield books",
    body: "The right textbook and past questions can change a score by 60 marks. Many candidates have never owned one.",
  },
  {
    icon: "🔀",
    title: "The wrong combination",
    body: "A single wrong UTME subject choice can disqualify an otherwise excellent candidate from the course of their dreams.",
  },
];

export default async function HomePage() {
  const [stats, subjects] = await Promise.all([getPublicStats(), getSubjectCards()]);
  const featured = subjects.slice(0, 8);

  return (
    <div className="min-h-screen bg-cream">
      <MarketingHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 top-64 h-80 w-80 rounded-full bg-emerald/10 blur-3xl" />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-14 pt-12 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-20 lg:pt-16">
          <div className="animate-ascend">
            <Badge tone="gold">Interventional education · JAMB UTME</Badge>
            <h1 className="mt-5 font-display text-[2.6rem] leading-[1.04] tracking-tight text-navy-deep sm:text-5xl lg:text-[3.55rem]">
              Your background sets the starting line.
              <span className="block text-navy/55 italic">Not your ceiling.</span>
            </h1>
            <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-ink-soft">
              The I Ascend Project is an educational intervention for young people who are capable,
              ambitious and under-guided. We teach the full JAMB syllabus, drill you with computer-based
              tests, and place a mentor beside you until admission is secured.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/start"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-cream shadow-[0_12px_28px_rgba(16,41,75,0.24)] transition hover:bg-navy-deep"
              >
                Begin your ascent — it&apos;s free
                <ArrowIcon />
              </Link>
              <Link
                href="/cbt"
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-6 py-3.5 text-sm font-semibold text-navy transition hover:border-navy/50"
              >
                Try a practice CBT
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-soft">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> No cost to learners
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {stats.subjects} UTME subjects
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-navy" /> {stats.questions}+ explained questions
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-navy-deep shadow-[0_30px_60px_-25px_rgba(8,26,51,0.5)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.pexels.com/photos/5965553/pexels-photo-5965553.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                alt="A student studying with a laptop and notebook"
                className="h-[420px] w-full object-cover sm:h-[480px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-gold">
                  Cohort progress
                </p>
                <p className="mt-1 font-display text-xl text-cream">
                  From 212 to 300+ in one preparation cycle.
                </p>
                <div className="mt-3 flex items-center gap-3 text-[0.68rem] text-cream/70">
                  <ProgressBar value={78} tone="gold" height="h-1.5" label="Cohort readiness" />
                  <span className="shrink-0">78%</span>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 top-6 w-[10.5rem] rounded-2xl border border-line bg-white/95 p-3 shadow-xl backdrop-blur sm:-left-8">
              <div className="flex items-center justify-between">
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-ink-soft">
                  Mock CBT
                </p>
                <span className="rounded-full bg-emerald-soft px-1.5 py-0.5 text-[0.55rem] font-bold text-emerald">
                  LIVE
                </span>
              </div>
              <p className="mt-1.5 font-display text-2xl leading-none text-navy-deep">32/40</p>
              <p className="text-[0.65rem] text-ink-soft">Biology · 18 min left</p>
              <div className="mt-2">
                <ProgressBar value={80} tone="emerald" height="h-1" />
              </div>
            </div>

            <div className="absolute -bottom-6 -right-2 w-[11rem] rounded-2xl border border-line bg-white/95 p-3 shadow-xl backdrop-blur sm:-right-6">
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-gold-soft text-sm">🎯</span>
                <div>
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-ink-soft">
                    Admission goal
                  </p>
                  <p className="text-xs font-semibold text-navy-deep">Medicine & Surgery</p>
                </div>
              </div>
              <p className="mt-2 text-[0.65rem] leading-relaxed text-ink-soft">
                Target 320 · UNILAG
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-line bg-white">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-6 px-5 py-7 sm:px-8 lg:grid-cols-4">
          <StatTile value={stats.subjects} label="JAMB subjects" hint="Full UTME coverage" />
          <StatTile value={stats.lessons} label="Guided lessons" hint="High-yield notes & worked examples" />
          <StatTile value={`${stats.questions}`} label="Explained questions" hint="Every answer reviewed" />
          <StatTile value={stats.institutions} label="Institutions mapped" hint={`${stats.programmes} programmes compared`} />
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Why we exist"
              title="The gap was never intelligence. It was guidance."
              description="Too many capable students lose one, two, or three years after secondary school — not because they cannot learn, but because nobody told them what to do, in what order, with which books, and by when."
            />
            <div className="mt-8 space-y-3">
              {gaps.map((gap) => (
                <div key={gap.title} className="flex gap-4 rounded-2xl border border-line bg-white p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-parchment text-lg">
                    {gap.icon}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy-deep">{gap.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{gap.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[1.5rem] border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.pexels.com/photos/10744384/pexels-photo-10744384.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="Students studying together at a library table"
                className="h-64 w-full object-cover sm:h-72"
              />
            </div>
            <div className="relative z-10 -mt-10 ml-4 mr-4 rounded-2xl border border-line bg-navy-deep p-6 text-cream shadow-2xl sm:ml-8 sm:mr-0">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-gold">
                A note from the founder
              </p>
              <p className="mt-3 font-display text-lg leading-relaxed text-cream/90">
                &ldquo;I know what it is to be ready and still be locked out — to sit at home after
                secondary school while others resume, because nobody explained the process. I Ascend
                exists so that a lack of guidance is never again the reason a bright young person stays
                home.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-sm font-bold text-navy-deep">
                  IA
                </span>
                <div>
                  <p className="text-xs font-semibold">The Founder</p>
                  <p className="text-[0.7rem] text-cream/60">I Ascend Project</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-y border-line bg-parchment/50">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <SectionHeading
            eyebrow="The intervention"
            title="Four supports, delivered together"
            description="Guidance alone is not enough. Books alone are not enough. I Ascend combines teaching, testing, mentorship and admissions intelligence into one preparation cycle."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <Link
                key={pillar.number}
                href={pillar.href}
                className="group relative rounded-2xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-navy/25 hover:shadow-lg"
              >
                <span className="font-display text-sm text-gold-deep">{pillar.number}</span>
                <h3 className="mt-2 font-display text-xl text-navy-deep">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{pillar.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-navy">
                  {pillar.cta}
                  <ArrowIcon className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="The curriculum"
            title="Every subject. Taught properly."
            description="Compulsory papers first, then the sciences, commercial and arts subjects that unlock your chosen course. Each lesson ends with the exact points to revise."
          />
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-4 py-2.5 text-xs font-semibold text-navy transition hover:border-navy/50"
          >
            All {stats.subjects} subjects
            <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((subject) => (
            <Link
              key={subject.id}
              href={`/learn/${subject.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:border-navy/25 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-xl text-xl"
                    style={{ backgroundColor: `${subject.accent}14`, color: subject.accent }}
                  >
                    {subject.icon}
                  </span>
                  <Badge tone="slate">{subject.category}</Badge>
                </div>
                <h3 className="mt-4 font-display text-lg leading-tight text-navy-deep">{subject.name}</h3>
                <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-ink-soft">
                  {subject.tagline}
                </p>
              </div>
              <div className="mt-4 flex items-center gap-3 border-t border-line pt-3 text-[0.68rem] font-medium text-ink-soft">
                <span>{subject.lessonCount} lessons</span>
                <span className="h-1 w-1 rounded-full bg-line" />
                <span>{subject.questionCount} questions</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CBT showcase */}
      <section className="bg-navy-deep py-16 text-cream lg:py-24">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="CBT, simulated honestly"
              title={<span className="text-cream">The exam is on a screen. Practise on a screen.</span>}
              description="JAMB has been computer-based for years, yet many candidates meet the interface for the first time on exam day. Our simulator trains the format, the clock and the nerves."
              tone="light"
            />
            <ul className="mt-7 space-y-3 text-sm text-cream/75">
              {[
                "Four-subject mocks or focused single-subject drills",
                "Live countdown with question palette and flagging",
                "Instant score plus projected UTME equivalent",
                "Every question explained — including why distractors are wrong",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/15 text-[0.6rem] text-gold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/cbt"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-navy-deep transition hover:bg-[#f2b954]"
            >
              Start a timed CBT
              <ArrowIcon />
            </Link>
          </div>

          <div className="rounded-[1.5rem] border border-white/12 bg-white/[0.04] p-4 shadow-2xl backdrop-blur">
            <div className="rounded-xl bg-white p-5 text-ink">
              <div className="flex items-center justify-between border-b border-line pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald" />
                  <p className="text-xs font-semibold text-navy-deep">Physics · Question 12 of 40</p>
                </div>
                <span className="rounded-md bg-navy px-2 py-1 font-mono text-[0.7rem] font-semibold text-gold">
                  27:41
                </span>
              </div>
              <p className="mt-4 text-sm font-medium leading-relaxed text-navy-deep">
                A stone is thrown horizontally from a cliff 20 m high. Taking g = 10 m/s², how long does it
                take to reach the ground?
              </p>
              <div className="mt-4 space-y-2">
                {[
                  { letter: "A", text: "1 s", active: false },
                  { letter: "B", text: "2 s", active: true },
                  { letter: "C", text: "4 s", active: false },
                  { letter: "D", text: "10 s", active: false },
                ].map((option) => (
                  <div
                    key={option.letter}
                    className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 text-sm ${
                      option.active
                        ? "border-emerald bg-emerald-soft font-semibold text-emerald"
                        : "border-line text-ink-soft"
                    }`}
                  >
                    <span
                      className={`grid h-6 w-6 place-items-center rounded-md text-[0.7rem] font-bold ${
                        option.active ? "bg-emerald text-white" : "bg-parchment text-ink-soft"
                      }`}
                    >
                      {option.letter}
                    </span>
                    {option.text}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-line pt-3">
                <div className="flex gap-1">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <span
                      key={index}
                      className={`h-2 w-2 rounded-full ${
                        index < 4 ? "bg-emerald" : index === 4 ? "bg-gold" : "bg-parchment"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[0.68rem] font-semibold text-navy">Next question →</span>
              </div>
            </div>
            <p className="mt-3 text-center text-[0.68rem] text-cream/50">
              Vertical motion decides the time. Horizontal speed is a distractor.
            </p>
          </div>
        </div>
      </section>

      {/* Admissions */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="order-2 lg:order-1">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "UTME combination", value: "English, Biology, Chemistry, Physics", tone: "navy" },
                { label: "Indicative competitive cut-off", value: "300 / 400", tone: "gold" },
                { label: "O'level requirement", value: "5 credits in one sitting", tone: "emerald" },
                { label: "Likely route if you score 240", value: "Change of course + 2 safer schools", tone: "plum" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-line bg-white p-4">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-ink-soft">
                    {item.label}
                  </p>
                  <p className="mt-2 font-display text-lg leading-snug text-navy-deep">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 overflow-hidden rounded-2xl border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.pexels.com/photos/8197501/pexels-photo-8197501.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="A confident student using a laptop in class"
                className="h-48 w-full object-cover object-top"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Admissions intelligence"
              title="Decide with facts, not rumour"
              description="Every year, candidates with strong scores miss out because they applied to one over-subscribed programme with no fallback. We map institutions and programmes so your choices are deliberate."
            />
            <ul className="mt-6 space-y-3">
              {[
                "Search programmes by course name, state and ownership",
                "See the UTME subject combination before you register",
                "Understand the difference between JAMB minimum and competitive cut-offs",
                "Plan a realistic stretch, match and safety set of institutions",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-soft text-[0.6rem] text-emerald">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/admissions"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-cream transition hover:bg-navy-deep"
            >
              Explore institutions and cut-offs
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Mindset */}
      <section className="border-y border-line bg-gold-soft/60">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Mindset intervention"
            title="Three sentences we help you retire."
            align="center"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                old: "“University is for people with money.”",
                new: "Public universities charge modest fees, and scholarships, bursaries and work-study exist. We help you find and apply for them.",
              },
              {
                old: "“I am not brilliant enough for Medicine.”",
                new: "A 300+ score is built from a syllabus, not from talent. We break the syllabus into weekly, checkable work.",
              },
              {
                old: "“If I fail this year, my life is over.”",
                new: "One exam does not define a life. We plan for admission, and we plan for a strong second attempt if needed.",
              },
            ].map((item) => (
              <div key={item.old} className="rounded-2xl border border-line bg-white p-6">
                <p className="font-display text-lg leading-snug text-ink-soft line-through decoration-plum/40 decoration-2">
                  {item.old}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink">{item.new}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
        <SectionHeading
          eyebrow="From the cohort"
          title="Candidates who stopped guessing"
          description="Composite reflections shared by learners in the I Ascend preparation circle."
        />
        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {[
            {
              quote:
                "I had never used a computer before my first CBT here. By the real exam, the interface felt like my own phone. I scored 287 and got my admission.",
              name: "Blessing A.",
              detail: "Biology Education · 2025 cohort",
            },
            {
              quote:
                "My mentor asked me one question nobody had asked: which subject combination does your course actually require? I had the wrong one. We fixed it in time.",
              name: "Tunde O.",
              detail: "Accounting · 2026 cohort",
            },
            {
              quote:
                "The explanations after each mock changed everything. I stopped memorising answers and started understanding why the other options were wrong.",
              name: "Hauwa M.",
              detail: "Nursing · 2026 cohort",
            },
          ].map((item) => (
            <figure key={item.name} className="flex flex-col rounded-2xl border border-line bg-white p-6">
              <span className="font-display text-3xl leading-none text-gold">“</span>
              <blockquote className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                {item.quote}
              </blockquote>
              <figcaption className="mt-5 border-t border-line pt-4">
                <p className="text-sm font-semibold text-navy-deep">{item.name}</p>
                <p className="text-xs text-ink-soft">{item.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <HomeStories />

      {/* Master framework */}
      <section className="border-y border-line bg-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Programme framework"
                title="An intervention with a system behind it."
                description="I Ascend is governed by a master framework: twenty chapters and eight working appendices covering academic delivery, diagnostics, individual plans, mentorship, safeguarding, MEAL, risk, finance, partnerships and scale. It is public because credibility should be inspectable."
              />
              <div className="mt-6 flex flex-wrap gap-2">
                <Link
                  href="/framework"
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-xs font-semibold text-cream transition hover:bg-navy-deep"
                >
                  Read the master framework
                  <ArrowIcon className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/framework/executive-summary"
                  className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-5 py-3 text-xs font-semibold text-navy transition hover:border-navy/50"
                >
                  Start with the summary
                </Link>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  title: "Design & governance",
                  body: "Theory of change, SMART objectives, eligibility, pathways, committee decision rights.",
                },
                {
                  title: "Academic delivery",
                  body: "Syllabus mapping, lesson anatomy, combination verification, baseline and IADP workflow.",
                },
                {
                  title: "Safeguarding & MEAL",
                  body: "Zero-tolerance protection, data protection controls, indicators and reporting rhythm.",
                },
                {
                  title: "Risk, money & scale",
                  body: "Risk register, budget templates, internal controls, partnership due diligence and scale gates.",
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  href="/framework"
                  className="rounded-2xl border border-line bg-cream/60 p-4 transition hover:-translate-y-0.5 hover:border-navy/25 hover:shadow-md"
                >
                  <p className="text-sm font-semibold text-navy-deep">{item.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-ink-soft">{item.body}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-16 sm:px-8">
        <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] bg-navy px-6 py-12 sm:px-12 lg:py-16">
          <div className="grain pointer-events-none absolute inset-0 opacity-30" />
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-gold">
                Your next 12 weeks
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl leading-tight text-cream sm:text-4xl">
                A score above 300 begins with one decision today.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/70">
                Create your free learner profile, set your target course and institution, and we will
                build the study path around it — lessons, CBT checkpoints and a mentor.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/start"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-navy-deep transition hover:bg-[#f2b954]"
              >
                Create my free profile
                <ArrowIcon />
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-cream transition hover:border-white/60"
              >
                Join the outreach programme
              </Link>
              <p className="text-center text-[0.68rem] text-cream/50">
                Free for learners · Volunteers and mentors welcome
              </p>
            </div>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
