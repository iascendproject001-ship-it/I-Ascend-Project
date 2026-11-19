import Link from "next/link";
import { desc, eq, sql } from "drizzle-orm";
import { db } from "@/db";
import {
  learnerProfiles,
  learners,
  mentorThreads,
  practiceSessions,
  registrations,
} from "@/db/schema";
import { requireStaff } from "@/lib/staff-auth";
import { deadlineState, getSettings } from "@/lib/settings";
import { ArrowIcon, Badge, StatTile } from "@/components/ui";

export const dynamic = "force-dynamic";
export const metadata = { title: "Staff overview" };

export default async function StaffDashboardPage() {
  const user = await requireStaff();
  const settings = await getSettings();

  const [learnerCount] = await db.select({ value: sql<number>`count(*)::int` }).from(learners);
  const [profileCount] = await db.select({ value: sql<number>`count(*)::int` }).from(learnerProfiles);
  const [sessionCount] = await db.select({ value: sql<number>`count(*)::int` }).from(practiceSessions);
  const [threadCount] = await db
    .select({ value: sql<number>`count(*)::int` })
    .from(mentorThreads)
    .where(eq(mentorThreads.status, "open"));
  const [interestCount] = await db.select({ value: sql<number>`count(*)::int` }).from(registrations);
  const recentLearners = await db
    .select({ id: learners.id, name: learners.name, email: learners.email, createdAt: learners.createdAt })
    .from(learners)
    .orderBy(desc(learners.id))
    .limit(5);

  const deadline = deadlineState(settings.applicationDeadline);
  const firstName = user.name.split(" ")[0];
  const contactsMissing =
    !settings.supportPhone && !settings.supportEmail && !settings.safeguardingPhone;

  return (
    <div className="space-y-6">
      <div>
        <Badge tone="gold">Staff workspace</Badge>
        <h1 className="mt-3 font-display text-3xl leading-tight text-navy-deep sm:text-4xl">
          Good day, {firstName}.
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
          {settings.cohortName} · Applications are{" "}
          <strong className={settings.applicationsOpen && !deadline.isPast ? "text-emerald" : "text-[#a12b2b]"}>
            {settings.applicationsOpen && !deadline.isPast ? "open" : "closed"}
          </strong>
          {deadline.hasDeadline && !deadline.isPast && ` · close ${deadline.label} (${deadline.daysLeft} days left)`}
          {deadline.isPast && ` · deadline passed on ${deadline.label}`}.
        </p>
      </div>

      {contactsMissing && user.role === "admin" && (
        <div className="rounded-2xl border border-gold/40 bg-gold-soft/60 p-4 text-sm leading-relaxed text-[#6b4a0d]">
          <strong>Setup incomplete:</strong> no support or safeguarding contact is published yet.{" "}
          <Link href="/staff/settings" className="font-semibold text-navy underline">
            Complete programme settings
          </Link>{" "}
          so applicants can reach a human.
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-5">
        <StatTile value={learnerCount?.value ?? 0} label="Learners" hint="Registered profiles" />
        <StatTile value={profileCount?.value ?? 0} label="Full profiles" hint="Completed participant forms" />
        <StatTile value={sessionCount?.value ?? 0} label="CBT sessions" hint="Practice & mocks" />
        <StatTile value={threadCount?.value ?? 0} label="Open threads" hint="Awaiting a mentor" />
        <StatTile value={interestCount?.value ?? 0} label="Outreach interests" hint="Partners & volunteers" />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="card p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl text-navy-deep">Latest applications</h2>
            <Link href="/staff/applications" className="inline-flex items-center gap-1 text-xs font-semibold text-navy hover:underline">
              Full register <ArrowIcon className="h-3 w-3" />
            </Link>
          </div>
          <ul className="mt-3 divide-y divide-line">
            {recentLearners.map((learner) => (
              <li key={learner.id} className="py-2.5">
                <Link href={`/staff/applications/${learner.id}`} className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-navy-deep">{learner.name}</p>
                    <p className="truncate text-[0.7rem] text-ink-soft">{learner.email}</p>
                  </div>
                  <span className="shrink-0 text-[0.68rem] text-ink-soft">
                    {new Intl.DateTimeFormat("en-NG", { day: "numeric", month: "short" }).format(
                      new Date(learner.createdAt),
                    )}
                  </span>
                </Link>
              </li>
            ))}
            {recentLearners.length === 0 && (
              <li className="py-4 text-sm text-ink-soft">No applications yet. Share the /apply link.</li>
            )}
          </ul>
        </section>

        <section className="card p-5">
          <h2 className="font-display text-xl text-navy-deep">Daily operations</h2>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {[
              { href: "/staff/applications", title: "Review applications", body: "Profiles, pathways, flags, mentor briefs." },
              { href: "/mentor", title: "Answer mentor threads", body: `${threadCount?.value ?? 0} open conversations.` },
              { href: "/staff/settings", title: "Cohort & deadline", body: settings.cohortName },
              { href: "/flyer", title: "Print the flyer", body: "QR-coded application sheet." },
            ].map((item) => (
              <Link
                key={item.href + item.title}
                href={item.href}
                className="group rounded-xl border border-line bg-cream/60 p-3.5 transition hover:border-navy/30 hover:bg-white"
              >
                <p className="text-sm font-semibold text-navy-deep">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">{item.body}</p>
              </Link>
            ))}
          </div>
          <div className="mt-4 rounded-xl bg-navy p-4 text-cream">
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-gold">Today&apos;s discipline</p>
            <p className="mt-1.5 text-xs leading-relaxed text-cream/80">
              Acknowledge every new application within 2 working days. Match mentors within 10 working days.
              Review error logs, not just scores.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
