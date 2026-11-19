import Link from "next/link";
import { MarketingFooter, MarketingHeader } from "@/components/marketing";
import { ArrowIcon, Badge } from "@/components/ui";
import { ProfileWizard } from "@/components/onboarding/profile-wizard";
import { demoLogin } from "@/lib/actions";
import { getSubjects } from "@/lib/data";
import { emptyProfile } from "@/lib/profile";
import { deadlineState, getSettings } from "@/lib/settings";
import { getCurrentLearner } from "@/lib/session";

export const dynamic = "force-dynamic";
export const metadata = { title: "Begin your ascent" };

export default async function StartPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const [learner, subjects, settings] = await Promise.all([
    getCurrentLearner(),
    getSubjects(),
    getSettings(),
  ]);
  const demoEnabled = process.env.DISABLE_DEMO_SEED !== "true";
  const deadline = deadlineState(settings.applicationDeadline);
  const applicationsClosed = !settings.applicationsOpen || deadline.isPast;
  const supportContact = [
    settings.supportPhone ? `Call ${settings.supportPhone}` : "",
    settings.supportWhatsapp ? `WhatsApp ${settings.supportWhatsapp}` : "",
    settings.supportEmail ? `Email ${settings.supportEmail}` : "",
  ].filter(Boolean);

  return (
    <div className="min-h-screen bg-cream">
      <MarketingHeader />

      <main className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="gold">Free learner profile</Badge>
              <Badge tone="emerald">No cost, ever</Badge>
              <Badge tone="navy">{settings.cohortName}</Badge>
            </div>
            <h1 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-navy-deep sm:text-5xl">
              Tell us who you are, so we can prepare you properly.
            </h1>
            <p className="mt-3 max-w-2xl text-[1.02rem] leading-relaxed text-ink-soft">
              Six short sections. Your answers shape your learning pathway, the first topics your mentor targets, and
              the study plan we build together. Nothing here is used to judge you — it is used to support you.
            </p>
            {deadline.hasDeadline && !deadline.isPast && settings.applicationsOpen && (
              <p className="mt-3 inline-block rounded-full border border-gold/40 bg-gold-soft/60 px-3.5 py-1.5 text-xs font-semibold text-[#6b4a0d]">
                Applications for {settings.cohortName} close {deadline.label} ({deadline.daysLeft} days left).
              </p>
            )}
            {deadline.hasDeadline && !deadline.isPast && settings.applicationsOpen && (
              <p className="mt-3 inline-block rounded-full border border-gold/40 bg-gold-soft/60 px-3.5 py-1.5 text-xs font-semibold text-[#6b4a0d]">
                Applications for {settings.cohortName} close {deadline.label} ({deadline.daysLeft} days left).
              </p>
            )}
          </div>

          <div className="rounded-2xl border border-line bg-white p-4">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gold-deep">
              Before you start
            </p>
            <ul className="mt-2 space-y-2 text-xs leading-relaxed text-ink-soft">
              <li>• About 8–10 minutes. You can move back and forth between sections.</li>
              <li>• Have your O&apos;level results and any previous UTME score nearby, if you have them.</li>
              <li>• Under 18? A guardian must consent at the final step.</li>
              <li>• No score or admission is guaranteed — preparation is.</li>
            </ul>
            {demoEnabled && (
              <div className="mt-3 border-t border-line pt-3">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink-soft">
                  Just exploring?
                </p>
                <form action={demoLogin} className="mt-1.5">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-navy/20 bg-white px-3 py-2 text-[0.7rem] font-semibold text-navy transition hover:border-navy/50"
                  >
                    Open the demo dashboard
                    <ArrowIcon className="h-3 w-3" />
                  </button>
                </form>
              </div>
            )}
            {learner && (
              <div className="mt-3 rounded-lg border border-emerald/20 bg-emerald-soft/60 p-2.5 text-[0.7rem] text-emerald">
                Signed in as {learner.name}.{" "}
                <Link href="/dashboard" className="font-semibold underline">
                  Go to dashboard
                </Link>{" "}
                or{" "}
                <Link href="/onboarding" className="font-semibold underline">
                  update your profile
                </Link>
                .
              </div>
            )}
          </div>
        </div>

        {applicationsClosed ? (
          <div className="card mx-auto mt-6 max-w-2xl p-6 text-center sm:p-8">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gold-deep">
              {settings.cohortName}
            </p>
            <h2 className="mt-2 font-display text-3xl text-navy-deep">Applications are currently closed.</h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink-soft">
              {deadline.isPast
                ? `The application window closed on ${deadline.label}.`
                : "The application window is paused while we onboard the current cohort."}{" "}
              Leave your interest so we contact you first when the next window opens — or reach us directly.
            </p>
            {supportContact.length > 0 && (
              <p className="mt-3 text-xs font-medium text-navy-deep">{supportContact.join(" · ")}</p>
            )}
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              <Link
                href="/register"
                className="rounded-full bg-navy px-5 py-3 text-xs font-semibold text-cream transition hover:bg-navy-deep"
              >
                Notify me of the next window
              </Link>
              <Link
                href="/learn"
                className="rounded-full border border-navy/20 bg-white px-5 py-3 text-xs font-semibold text-navy transition hover:border-navy/50"
              >
                Explore the lessons meanwhile
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-6">
            <ProfileWizard
            mode="create"
            subjectOptions={subjects.map((subject) => ({
              id: subject.id,
              name: subject.name,
              category: subject.category,
              icon: subject.icon,
            }))}
            initialProfile={emptyProfile}
            basics={{ name: "", email: "", targetScore: 300, examYear: 2027 }}
            initialError={error}
            />
          </div>
        )}

        <p className="mt-4 text-center text-[0.7rem] leading-relaxed text-ink-soft">
          Your information is processed under our{" "}
          <Link href="/privacy" className="font-semibold text-navy hover:underline">
            privacy notice
          </Link>{" "}
          and the{" "}
          <Link href="/framework/safeguarding-data" className="font-semibold text-navy hover:underline">
            safeguarding and data protection standard
          </Link>
          . Already registered with the same email? Your existing profile will be reopened and updated.
        </p>
      </main>

      <MarketingFooter />
    </div>
  );
}
