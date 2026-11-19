import Link from "next/link";
import type { Metadata } from "next";
import { MarketingFooter, MarketingHeader } from "@/components/marketing";
import { ArrowIcon, Badge } from "@/components/ui";
import { FrameworkBlocks } from "@/components/framework/blocks";
import { PrintButton } from "@/components/framework/framework-ui";
import type { Block } from "@/content/framework/types";

export const metadata: Metadata = {
  title: "Production deployment runbook",
  description:
    "Step-by-step runbook for moving the I Ascend Project platform from preview to production: domain, hosting, database, backups, monitoring and go-live rehearsal.",
};

const stack: Block = {
  kind: "table",
  caption: "Choose a production stack (examples, not endorsements — any equivalent works)",
  columns: ["Layer", "Example options", "What to look for"],
  rows: [
    ["Hosting", "Vercel, Render, or any Node.js host", "Next.js support, environment variables, deploy previews, error logs"],
    ["Database", "Neon, Supabase, or any managed PostgreSQL", "Automated backups with point-in-time recovery, a region near your users, connection pooling"],
    ["Domain & DNS", "Any registrar", "DNS control, free TLS certificates, ability to set apex and subdomain records"],
    ["Email", "Any mailbox or workspace product", "A permanent official address, e.g. hello or admissions at your domain"],
    ["Messaging", "WhatsApp Business", "A dedicated programme number, separate from any personal line"],
    ["Uptime monitoring", "Any uptime checker", "1–5 minute checks against /api/health with SMS/email alerts"],
  ],
};

const steps: Block = {
  kind: "steps",
  items: [
    {
      title: "Buy and configure the domain",
      detail:
        "Register the programme domain (for example iascendproject.org). You will point it at the hosting provider in step 7 — no website content changes are needed.",
    },
    {
      title: "Provision managed PostgreSQL",
      detail:
        "Create a production database in the nearest available region. Save the connection string as DATABASE_URL. Confirm automated backups and point-in-time recovery are switched on before any applicant data arrives.",
    },
    {
      title: "Deploy the application",
      detail:
        "Connect the code repository to the host. Build command: npm run build. Set environment variables: DATABASE_URL (secret) and NEXT_PUBLIC_SITE_URL (the canonical https address, e.g. https://iascendproject.org). Deploy.",
    },
    {
      title: "Apply the database schema",
      detail:
        "From a machine with the production DATABASE_URL, run: npx drizzle-kit push. Verify the tables exist (subjects, lessons, questions, learners, learner_profiles, practice_sessions, mentor_threads, institutions, programmes, resources, registrations).",
    },
    {
      title: "Confirm seeding and health",
      detail:
        "Open the production site once — the curriculum seeds automatically on first visit. Check /api/health returns ok, and confirm the subject count (22 subjects, 32 lessons, 136 questions) matches the expected dataset.",
    },
    {
      title: "Label the demo account",
      detail:
        "The seeded demo learner (demo@iascend.ng) exists to demonstrate the dashboard. Either keep it clearly labelled as a demonstration, or remove it from production and keep demonstrations on the preview environment.",
    },
    {
      title: "Attach the domain and HTTPS",
      detail:
        "Point DNS at the host, wait for the TLS certificate, and set NEXT_PUBLIC_SITE_URL to the final address. The flyer QR code and all shared links follow this value automatically — reprint nothing.",
    },
    {
      title: "Switch on monitoring",
      detail:
        "Uptime check on /api/health every 1–5 minutes with alerts to a named responder. Review application error logs daily for the first two weeks.",
    },
    {
      title: "Test backup and restore",
      detail:
        "Run one restore test into a separate database before launch and record the result. Schedule a weekly encrypted offline export of essential records (applicants, IADPs, registers) in addition to the provider's automated backups.",
    },
    {
      title: "Publish official contact channels",
      detail:
        "Activate the WhatsApp Business number, official email and the complaints route. Update any contact placeholders in footers and flyers with the real channels.",
    },
    {
      title: "Rehearse the full journey",
      detail:
        "Submit a test application, complete a CBT, open a mentor thread, print the flyer, and review the dashboard as a learner. Fix anything broken, then freeze non-urgent changes until after intake.",
    },
    {
      title: "Cut over and announce",
      detail:
        "Share the permanent /apply link with partner schools. Keep the old preview address for one week with a note pointing to the new domain, then retire it.",
    },
  ],
};

const env: Block = {
  kind: "table",
  caption: "Environment variables (production)",
  columns: ["Variable", "Example", "Handling"],
  rows: [
    ["DATABASE_URL", "postgresql://user:password@host:5432/iascend", "Secret. Server-side only — never commit it, never prefix with NEXT_PUBLIC_. Rotate if ever exposed."],
    ["NEXT_PUBLIC_SITE_URL", "https://iascendproject.org", "Public. Canonical address used for the flyer QR code and shared links. Update it when the domain attaches."],
    ["DISABLE_DEMO_SEED", "true (production) / unset (preview)", "Public flag. When true, the demonstration learner, mock scores and demo button are never created or shown — real applicant data stays clean."],
  ],
};

const commands: Block = {
  kind: "table",
  caption: "Command runbook",
  columns: ["Purpose", "Command", "Expected result"],
  rows: [
    ["Install dependencies", "npm ci", "Clean install, no errors"],
    ["Apply database schema", "npx drizzle-kit push", "“Changes applied”"],
    ["Production build", "npm run build", "All routes compiled; no type errors"],
    ["Health check", "curl https://YOUR-DOMAIN/api/health", '{"ok":true}'],
    ["Verify dataset", "select (select count(*) from subjects), (select count(*) from lessons), (select count(*) from questions);", "22 | 32 | 136"],
  ],
};

const safety: Block = {
  kind: "table",
  caption: "Safety, rollback and the first 48 hours",
  columns: ["Item", "Standard"],
  rows: [
    ["Least privilege", "The application's database user can read and write programme tables only — no superuser, no access to other databases."],
    ["Secrets", "Connection strings live in the host's environment settings. Nobody emails them; nobody pastes them into documents."],
    ["Rollback", "Every deploy keeps the previous working build one click away. If a deploy breaks applications, roll back first and diagnose second."],
    ["Change freeze", "No non-urgent changes from one week before intake until the first mock is complete."],
    ["First 48 hours", "Review every new application daily; match mentors within the 10-day SLA; check error logs each morning; log every incident, however small."],
    ["Applicant communication", "Every applicant receives acknowledgement within 2 working days, even if only to say when a decision will come."],
  ],
};

const bootstrap: Block = {
  kind: "table",
  caption: "First-run checklist after deploy — opening the workspace",
  columns: ["Order", "Task", "Where / how"],
  rows: [
    ["1", "Create the administrator", "Open /staff/setup in the browser. It works exactly once, while no administrator exists. Use a strong password and a work email you control."],
    ["2", "Record the confirmed cohort, deadline and contacts", "Sign in and open /staff/settings: cohort name, application deadline, open/closed switch, support contacts, safeguarding contacts, privacy notice. Saving publishes immediately."],
    ["3", "Store the server secrets", "DATABASE_URL and NEXT_PUBLIC_SITE_URL live in the host's environment-variable settings — never in code, chat or documents. See .env.example in the repository."],
    ["4", "Submit a test application", "Complete /apply end to end and confirm the learner, profile and mentor brief appear in /staff/applications."],
    ["5", "Add further staff", "Administrators add colleagues at /staff/admins: role staff (review only) or admin (full control)."],
    ["6", "Share the permanent link", "Distribute /apply and the printed /flyer. The QR code follows the production domain automatically."],
  ],
};

const deployBlocks: Block[] = [
  {
    kind: "lead",
    text: "The platform is already built and verified. Moving it to production is a configuration task, not a development task: a domain, a host, a managed database, two environment variables, one schema command, and a rehearsal. A competent developer completes it in a day or two.",
  },
  stack,
  steps,
  env,
  commands,
  safety,
  bootstrap,
  {
    kind: "callout",
    tone: "warning",
    title: "Data protection note",
    text: "Choose a database region with adequate data-protection standards, restrict admin access to named staff, and align retention and breach procedures with the safeguarding and data-protection framework before the first real application arrives.",
  },
];

export default function DeployPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="no-print">
        <MarketingHeader />
      </div>

      <main>
        <section className="relative overflow-hidden border-b border-line bg-navy-deep text-cream">
          <div className="grain pointer-events-none absolute inset-0 opacity-25" />
          <div className="relative mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="cream">Operations runbook</Badge>
              <Badge tone="gold">For the technical team</Badge>
            </div>
            <h1 className="mt-4 max-w-3xl font-display text-3xl leading-[1.06] tracking-tight sm:text-4xl">
              From preview to production, step by step.
            </h1>
            <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-cream/75">
              Everything needed to give the I Ascend Project a permanent home: stack choices, environment
              variables, commands, safety rules and the go-live rehearsal.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Link
                href="/launch"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-xs font-semibold text-navy-deep transition hover:bg-[#f2b954]"
              >
                Back to launch plan
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/flyer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-xs font-semibold text-cream transition hover:border-white/60"
              >
                Application flyer
              </Link>
              <PrintButton label="Print the runbook" />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8">
          <FrameworkBlocks blocks={deployBlocks} />
        </section>
      </main>

      <div className="no-print">
        <MarketingFooter />
      </div>
    </div>
  );
}
