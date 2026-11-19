import Link from "next/link";
import type { Metadata } from "next";
import { MarketingFooter, MarketingHeader } from "@/components/marketing";
import { ArrowIcon, Badge, SectionHeading } from "@/components/ui";
import { FrameworkBlocks } from "@/components/framework/blocks";
import { PrintButton } from "@/components/framework/framework-ui";
import type { Block } from "@/content/framework/types";

export const metadata: Metadata = {
  title: "Launch readiness plan",
  description:
    "A practical, evidence-gated plan for launching the I Ascend Project: compliance and safeguarding gates, a 12-week pilot countdown, platform go-live steps, budget lines, recruitment channels, launch metrics and a first-10-days action list.",
};

const gates: Block = {
  kind: "table",
  caption: "Launch gates — do not pass a gate without the evidence",
  columns: ["Gate", "Evidence required", "Owner", "Status"],
  rows: [
    [
      "G0 · Legal, safeguarding and data",
      "Safeguarding and child-protection policy signed; focal point appointed; consent/assent and privacy notice approved; data inventory and retention schedule agreed; venue risk assessments; insurance cover confirmed; legal review completed",
      "Director + Safeguarding focal point",
      "Required before any learner data",
    ],
    [
      "G1 · Official information",
      "Current JAMB syllabus, brochure, subject combinations and examination calendar downloaded and dated in the source register; admissions dataset refreshed with a visible 'last verified' date; platform disclaimers live",
      "Academic + Guidance Leads",
      "Required before recruitment",
    ],
    [
      "G2 · People and training",
      "Role agreements signed; safeguarding, data protection and academic delivery induction completed; instructors observed once; mentors screened, trained and code signed; supervision scheduled",
      "Director",
      "Required before instruction",
    ],
    [
      "G3 · Platform production",
      "Custom domain and HTTPS; production database with tested restore; secrets managed server-side; error and uptime monitoring; official email/WhatsApp channels; demo data labelled; admin access reviewed",
      "Director + technical support",
      "Mostly built; production setup required",
    ],
    [
      "G4 · Pilot readiness",
      "Cohort recruited against equity targets; baseline instruments and marking scheme ready; IADP workflow ready; registers, feedback and complaint channels live; guardian engagement plan",
      "Programme Officer + Assessment Lead",
      "Required before baseline",
    ],
    [
      "G5 · Public launch",
      "Pilot evidence (attendance, baseline, first mock, feedback); end-of-pilot note; comms assets approved; only confirmed partnerships announced; guarantee boundary in every public asset",
      "Director + Board",
      "Required before scale",
    ],
  ],
};

const timeline: Block = {
  kind: "table",
  caption: "12-week pilot countdown (T = public launch and full cohort start)",
  columns: ["Window", "Focus", "Key actions", "Milestone"],
  rows: [
    ["T−12 to T−10", "Institutional foundations", "Board adopts framework; appoint leads and focal point; legal, safeguarding and data review; open bank and finance controls; agree pilot scope", "G0 signed off"],
    ["T−10 to T−8", "Curriculum and data", "Verify JAMB syllabus, brochure and calendar; refresh admissions dataset; finalise baseline items, marking scheme and IADP template; produce printed packs", "G1 signed off"],
    ["T−8 to T−6", "Team and venue", "Recruit instructors and mentors; screening and induction; venue assessment and agreements; platform domain and production database; monitoring", "G2/G3 signed off"],
    ["T−6 to T−4", "Recruitment", "School and community outreach; application link distributed; info sessions; applications screened against published criteria", "40+ applications"],
    ["T−4 to T−2", "Onboarding and diagnosis", "Offers, consent, orientation, code of conduct; baseline sittings; feedback; IADPs drafted and signed; mentor matching", "30 learners enrolled; 100% IADPs"],
    ["T−2 to T", "Readiness and pilot start", "First lessons, study-log routines, subject tests; launch event / admissions clinic; guardian briefing; press and community communications", "Pilot teaching begins"],
    ["T to T+8", "Pilot delivery", "Teaching cycles, fortnightly tests, full mocks, mentoring circles, psychosocial sessions, careers clinics", "Three full mocks completed"],
    ["T+8 to T+14", "Examination and admission support", "Final readiness checks, exam logistics, results analysis, combination and institution strategy, CAPS and screening support", "Every candidate supported to a documented decision"],
    ["T+14 to T+20", "Evaluation and scale decision", "Endline, learning-gain analysis, feedback, financial and safeguarding reports, public end-of-cycle note, next-cycle plan and scale gates", "Board go/no-go for expansion"],
  ],
};

const readiness: Block = {
  kind: "table",
  caption: "Minimum viable launch checklist",
  columns: ["Area", "Must be true", "Already in place?"],
  rows: [
    ["Governance", "Board or advisory group constituted; decision rights (RACI) adopted; conflict-of-interest declarations", "Framework ready, adoption pending"],
    ["Safeguarding", "Policy, code of conduct, reporting route, focal point, screened adults, guardian consent flow", "Policy drafted in framework; sign-off and screening pending"],
    ["Data protection", "Privacy notice, lawful basis, access control, retention schedule, breach procedure", "Design ready; legal review pending"],
    ["Academic", "Syllabus-mapped scheme of work, lesson plans, baseline, item-reviewed question bank, mock SOP", "22 subjects, 32 lessons, 136 questions live; baseline and item review pending"],
    ["Delivery", "Venue, timetable, instructor cover, printed packs, shared-device CBT plan", "To confirm locally"],
    ["Technology", "Domain, production database, backups and restore test, monitoring, support channel", "Application built and deployed; production setup pending"],
    ["Finance", "Approved budget with documented prices, procurement rules, dual signatories, expenditure tracker", "Templates in framework; numbers to price locally"],
    ["Participant support", "Fee-waiver policy, material lending pool, transport/data support policy (funds permitting)", "To design for pilot"],
    ["Communications", "Application link, eligibility flyer, guardian briefing, complaints channel, claims standards", "Application live; assets to produce"],
    ["MEAL", "Indicator sheet, registers, baseline instruments, reporting calendar", "Framework ready; instruments to finalise"],
  ],
};

const pilot: Block = {
  kind: "cards",
  items: [
    {
      title: "Cohort",
      body: "30–40 learners for the first cohort. Small enough to protect quality and safeguarding; large enough to produce credible learning-gain evidence and generate word of mouth.",
      meta: "Pilot size",
    },
    {
      title: "Delivery footprint",
      body: "One physical centre plus one hybrid/online group, or two community venues under written agreements. Avoid a scattered footprint before supervision capacity exists.",
      meta: "Two sites maximum",
    },
    {
      title: "Teaching team",
      body: "Four subject instructors (English, Mathematics and the two science/commercial subjects most in demand), one coordinator, six to eight screened mentors, one safeguarding focal point.",
      meta: "Staffing",
    },
    {
      title: "Cadence",
      body: "8–12 contact hours weekly, one subject test weekly, one full CBT mock monthly, fortnightly mentoring circles, monthly guardian update.",
      meta: "Weekly rhythm",
    },
    {
      title: "Assessment spine",
      body: "Baseline in four subjects, IADP within two weeks, reviews every three weeks, endline at cycle close. No mock without a feedback clinic within 72 hours.",
      meta: "Diagnosis to endline",
    },
    {
      title: "Selection",
      body: "Score need, commitment and readiness with published criteria; prioritise repeat candidates, first-generation applicants, low-income and rural learners, and candidates with disability. No upper age limit.",
      meta: "Equity",
    },
    {
      title: "Safety",
      body: "Adult boundaries, group channels, safe hours, venue risk assessments, consent for minors, anonymous reporting, referral directory of approved services.",
      meta: "Non-negotiable",
    },
    {
      title: "Exit and feedback",
      body: "Every participant leaves with a verified institution strategy and a written next-step plan, whether admitted or not. Feedback collected from learners, guardians and mentors.",
      meta: "Dignity at exit",
    },
  ],
};

const platform: Block = {
  kind: "table",
  caption: "Platform go-live steps",
  columns: ["Step", "Action", "Detail", "Owner"],
  rows: [
    ["1", "Production domain", "Attach a domain (for example apply.iascendproject.org) with HTTPS; keep the same app so application links stay stable", "Technical support"],
    ["2", "Production database and secrets", "Managed PostgreSQL; DATABASE_URL and any API keys stored as server-side environment variables, never in code", "Technical support"],
    ["3", "Backups and restore", "Automated daily backups plus an offline encrypted export of essential records; run and document one restore test", "Technical support"],
    ["4", "Monitoring", "Uptime check on /api/health, error alerting, and a named person to respond within the day", "Technical support"],
    ["5", "Data hygiene", "Label the demo learner as a demonstration account; no real applicant data in public pages; access review for admin roles", "Operations"],
    ["6", "Official content check", "Re-verify JAMB links, admissions dataset and subject combinations; display 'last verified' dates; update the source register", "Academic Lead"],
    ["7", "Consent and privacy", "Publish the privacy notice and safeguarding page; ensure guardian consent blocks mentoring for minors", "Safeguarding focal point"],
    ["8", "Communication channels", "Official WhatsApp Business number, email address and phone line; complaint and anonymous reporting route publicised", "Operations"],
    ["9", "Low-tech route", "Printed application form, lesson packs and CBT practice sheets for applicants without devices; weekly reconciliation into the platform", "Operations"],
    ["10", "Rehearsal", "Submit a test application, sit a mock CBT, send a mentor thread, print a report; fix anything broken before recruitment", "Director"],
  ],
};

const money: Block = {
  kind: "table",
  caption: "Budget lines to price locally before launch (no figures are assumed here)",
  columns: ["Category", "What to price", "Cost driver", "Priority"],
  rows: [
    ["People", "Director or coordinator time, instructor honoraria, mentor support costs", "Contact hours × weeks", "Essential"],
    ["Venue", "Hire, utilities, accessibility adaptations, cleaning", "Sessions × centres", "Essential"],
    ["Learning materials", "Printed workbooks and lesson packs, past questions, textbooks for lending pool", "Participants × subjects", "Essential"],
    ["Assessment", "Baseline production, marking, mock delivery, item review", "Assessments × participants", "Essential"],
    ["Technology", "Domain, hosting, database, data bundles, one centre hotspot, power backup", "Users and sites", "Essential"],
    ["Participant support", "Transport, data, exam-fee support, meal support where policy allows", "Eligible participants", "High if equity targets matter"],
    ["Safeguarding", "Screening, training, referral and counselling access", "Staff + volunteers", "Essential"],
    ["Administration", "Communication, banking, audit, legal, stationery", "Organisation-wide", "Essential"],
    ["MEAL", "Instruments, data collection, evaluation, reporting", "Cohort", "High"],
    ["Contingency", "Price changes, calendar shifts, replacement costs", "Percentage of budget", "Essential"],
  ],
  note: "Set a per-learner cost target and publish it internally. If funding is short, reduce the number of new sites, never safeguarding, assessment quality or learner support.",
};

const recruitment: Block = {
  kind: "table",
  caption: "Recruitment channels and partner sequence",
  columns: ["Channel", "Ask / offer", "Owner", "Sequence"],
  rows: [
    ["Secondary schools and principals", "Free preparation support for final-year candidates; we report progress; they host an information session", "Director", "Approach 6–8 weeks before intake"],
    ["Community and faith organisations", "Venue partnership and local referral; safeguarding alignment", "Programme Officer", "Parallel with schools"],
    ["Parents and guardians", "Briefing on programme, costs (none to learners), safety and expectations", "Programme Officer", "Before enrolment"],
    ["University students and professionals", "Mentor and tutor volunteering; verified testimonial and reference", "Mentorship Lead", "6 weeks before start"],
    ["State education authorities", "Courtesy notification and alignment with local guidance", "Director", "Before public launch"],
    ["Local media and social channels", "Accurate programme story, application link, guarantee boundary; no learner images without consent", "Director", "Launch week"],
  ],
  note: "Do not announce a partnership, endorsement or accreditation until a written agreement is signed and recorded.",
};

const metrics: Block = {
  kind: "table",
  caption: "Launch-cycle targets (internal benchmarks; review after baseline)",
  columns: ["Indicator", "Target", "Source"],
  rows: [
    ["Applications received", "≥ 40, with ≥ 50% meeting equity criteria", "Application records"],
    ["Enrolled learners", "30–40", "Enrolment register"],
    ["Consent completed before first contact", "100%", "Consent register"],
    ["Baseline sat and IADP signed", "100% within 2 weeks", "Assessment and IADP audit"],
    ["Attendance", "≥ 80%", "Registers"],
    ["Retention through the cycle", "≥ 85%", "Enrolment register"],
    ["Mentor matched within 10 working days", "≥ 95%", "Mentor register"],
    ["Full mocks completed per learner", "≥ 3", "CBT platform"],
    ["Learning gain, baseline to endline", "≥ 15 percentage points median", "Assessments"],
    ["Guardian contact completed", "≥ 90% of households", "Communication log"],
    ["Complaints acknowledged within 5 days", "100%", "Feedback log"],
    ["Serious safeguarding incidents unresolved", "0", "Safeguarding register"],
  ],
};

const risks: Block = {
  kind: "table",
  caption: "Launch risk watchlist",
  columns: ["Risk", "Early warning", "Response"],
  rows: [
    ["Too few suitable applications", "Under 20 applications by T−5", "Activate school and community referrals; extend outreach one week; do not lower safeguarding standards"],
    ["Recruited learners do not enrol", "Acceptance below 70%", "Call every accepted applicant; confirm guardian support and transport; maintain a waitlist"],
    ["Instructors unavailable", "No cover for a subject at T−3", "Confirm two instructors per high-demand subject or a recorded lesson fallback"],
    ["Device and connectivity gaps", "Over 40% report no device", "Reduce reliance on live CBT; schedule shared-device sessions; print packs"],
    ["Funding shortfall", "Budget not covered at T−6", "Reduce new-site count, protect current cohort; defer optional enhancements"],
    ["Unverified admission information", "Missing source date", "Freeze that content until verified; publish correction route"],
    ["Safeguarding concern", "Any disclosure or boundary breach", "Follow the policy immediately; focal point and Director; statutory referral where required"],
    ["Official calendar change", "JAMB announcement", "Reissue the timeline and mocks; communicate within 48 hours"],
  ],
};

const firstDays: Block = {
  kind: "list",
  ordered: true,
  items: [
    "Name the accountable owner for launch and the safeguarding focal point in writing.",
    "Download and date-stamp the current JAMB syllabus, brochure and examination calendar; record them in the source register.",
    "Send the framework and this launch plan to a Nigerian legal practitioner for safeguarding and data-protection review.",
    "Adopt the safeguarding policy, code of conduct, consent and privacy notices at board level.",
    "Refresh the admissions dataset on the platform and display a last-verified date.",
    "Price the pilot budget locally; get two quotes for venue, printing and data; approve it with dual signatories.",
    "Confirm one or two venues with written agreements and complete a safety and accessibility check.",
    "Recruit and screen four instructors and six to eight mentors; schedule safeguarding, data and delivery induction.",
    "Attach the production domain, set environment secrets, run a backup restore test and verify /api/health monitoring.",
    "Recruit the pilot cohort through six to eight school or community partners; publish the application link with eligibility and the guarantee boundary.",
  ],
};

const messaging: Block = {
  kind: "table",
  caption: "What we say — and do not say — at launch",
  columns: ["Say", "Do not say"],
  rows: [
    ["“We teach the JAMB syllabus, assess you properly and mentor you through preparation.”", "“We guarantee a 300+ score or admission.”"],
    ["“Applications are free and open to candidates of any age who meet the eligibility criteria.”", "“Only school leavers or under-25s can apply.”"],
    ["“Indicative cut-offs are guidance; always verify with JAMB and the institution.”", "Any unverified cut-off, admission rate or statistic"],
    ["“We are working with [partner]” — only after a signed agreement", "Named partnerships, endorsements or accreditation that do not exist"],
    ["“Our first cohort results will be published, including what did not work.”", "Selective or invented outcome claims"],
  ],
};

const launchBlocks: Block[] = [
  {
    kind: "lead",
    text: "Launch the smallest version of the programme that can produce credible evidence and protect participants. The platform, the framework and the profiling system are already live; what remains is legal and safeguarding sign-off, official data verification, a trained team, a production deployment and a deliberately small pilot cohort.",
  },
  gates,
  timeline,
  pilot,
  readiness,
  platform,
  money,
  recruitment,
  metrics,
  risks,
  firstDays,
  messaging,
];

export default function LaunchPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="no-print">
        <MarketingHeader />
      </div>

      <main>
        <section className="relative overflow-hidden border-b border-line bg-navy-deep text-cream">
          <div className="grain pointer-events-none absolute inset-0 opacity-25" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold/15 blur-3xl" />
          <div className="relative mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="cream">Launch readiness · v1.0</Badge>
              <Badge tone="gold">Pilot first, then scale</Badge>
            </div>
            <h1 className="mt-4 max-w-4xl font-display text-3xl leading-[1.06] tracking-tight sm:text-4xl lg:text-5xl">
              Launch with evidence, not announcements.
            </h1>
            <p className="mt-4 max-w-3xl text-[1.02rem] leading-relaxed text-cream/75">
              A 12-week path from a working platform to a safe, credible first cohort: six evidence gates, a pilot
              design, production go-live steps, locally priced budget lines, recruitment channels, launch metrics and
              a first-ten-days action list.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <Link
                href="/start"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-xs font-semibold text-navy-deep transition hover:bg-[#f2b954]"
              >
                Share the application link
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/flyer"
                className="inline-flex items-center gap-2 rounded-full bg-cream px-5 py-3 text-xs font-semibold text-navy-deep transition hover:bg-white"
              >
                Application flyer & QR
              </Link>
              <Link
                href="/deploy"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-xs font-semibold text-cream transition hover:border-white/60"
              >
                Deployment runbook
              </Link>
              <Link
                href="/framework"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-xs font-semibold text-cream transition hover:border-white/60"
              >
                Master framework
              </Link>
              <PrintButton label="Print the launch plan" />
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: "Weeks to launch", value: "12" },
                { label: "Evidence gates", value: "6" },
                { label: "Pilot cohort", value: "30–40" },
                { label: "Sites in pilot", value: "1–2" },
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
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Already built",
                body: "Live platform with 22 subjects, 32 lessons, 136 explained CBT questions, timed mock engine, mentor desk, admissions finder, resource library, six-step registration with pathway and mentor brief, and 29 framework pages.",
                tone: "border-emerald/25 bg-emerald-soft/50",
              },
              {
                title: "Required before recruitment",
                body: "Safeguarding and legal sign-off, data-protection review, current JAMB documents dated in the source register, a trained and screened team, and a production domain with tested backups.",
                tone: "border-gold/40 bg-gold-soft/60",
              },
              {
                title: "Required before scale",
                body: "A completed pilot with baseline and endline learning gains, attendance and retention evidence, resolved feedback and incidents, and a board decision against the seven site-readiness gates.",
                tone: "border-navy/20 bg-navy/[0.04]",
              },
            ].map((item) => (
              <div key={item.title} className={`rounded-2xl border p-5 ${item.tone}`}>
                <p className="font-display text-lg text-navy-deep">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-line bg-white">
          <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
            <SectionHeading
              eyebrow="The plan"
              title="Launch readiness in detail"
              description="Use this as the working launch document. It is printer-friendly and aligned with the master framework chapters and appendices."
            />
            <div className="mt-8">
              <FrameworkBlocks blocks={launchBlocks} />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
            <div className="rounded-2xl bg-navy p-6 text-cream">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gold">Recommended first move</p>
              <h2 className="mt-2 font-display text-2xl leading-snug">
                Run one pilot cohort before public launch, and publish what it teaches you.
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-cream/70">
                A pilot of 30–40 learners gives you real baseline data, a tested safeguarding system, evidence for
                funders and a credible story for schools. Public launch then rests on demonstrated delivery rather
                than a promise.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link href="/framework/implementation-timeline" className="rounded-full bg-gold px-4 py-2.5 text-xs font-semibold text-navy-deep">
                  Implementation timeline
                </Link>
                <Link href="/framework/safeguarding-data" className="rounded-full border border-white/25 px-4 py-2.5 text-xs font-semibold text-cream">
                  Safeguarding standard
                </Link>
              </div>
            </div>
            <div className="card p-6">
              <h2 className="font-display text-xl text-navy-deep">Documents to have signed before launch</h2>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                {[
                  "Adopted master framework and this launch plan",
                  "Safeguarding and child-protection policy, code of conduct",
                  "Privacy notice, consent and guardian consent forms",
                  "Role descriptions and volunteer agreements",
                  "Venue agreements and risk assessments",
                  "Approved pilot budget and procurement rules",
                  "Source register with dated official documents",
                  "Complaints and incident-reporting procedure",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-0.5 text-gold-deep">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/framework/documentation-tools"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-navy hover:underline"
              >
                Operational tools chapter
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <div className="no-print">
        <MarketingFooter />
      </div>
    </div>
  );
}
