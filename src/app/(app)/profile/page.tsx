import Link from "next/link";
import { requireLearner } from "@/lib/session";
import { getDashboard, getLearnerProfile, projectedScore } from "@/lib/data";
import { signOut, updateProfile } from "@/lib/actions";
import { ArrowIcon, Badge, ProgressBar } from "@/components/ui";

export const dynamic = "force-dynamic";
export const metadata = { title: "My profile" };

const nigerianStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT Abuja", "Gombe",
  "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto",
  "Taraba", "Yobe", "Zamfara",
];

const studyWindows = [
  "Mornings",
  "Afternoons",
  "Evenings & weekends",
  "Late nights",
  "Flexible / varies",
];

export default async function ProfilePage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string }>;
}) {
  const { saved } = await searchParams;
  const learner = await requireLearner();
  const [dashboard, profile] = await Promise.all([getDashboard(learner.id), getLearnerProfile(learner.id)]);
  const lessonPercent = dashboard.totalLessons
    ? Math.round((dashboard.completedLessons / dashboard.totalLessons) * 100)
    : 0;

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Badge tone="gold">Learner profile</Badge>
          <h1 className="mt-3 font-display text-3xl leading-tight text-navy-deep sm:text-4xl">
            Your goal, in writing.
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
            A goal you can name is a goal you can plan for. Keep this current — it shapes the subjects we
            prioritise and the institutions we show you.
          </p>
        </div>
        <form action={signOut}>
          <button
            type="submit"
            className="rounded-full border border-line bg-white px-4 py-2.5 text-xs font-semibold text-ink-soft transition hover:border-navy/30 hover:text-navy"
          >
            Sign out
          </button>
        </form>
      </header>

      {saved === "1" && (
        <p className="rounded-xl border border-emerald/20 bg-emerald-soft px-4 py-3 text-sm font-medium text-emerald">
          Your profile is saved. Your dashboard has been updated.
        </p>
      )}

      <section className="rounded-2xl border border-line bg-white p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gold-deep">
              Participant profile & mentorship brief
            </p>
            <h2 className="mt-1 font-display text-xl text-navy-deep">
              {profile
                ? `Pathway ${profile.pathway} · ${profile.completeness}% complete`
                : "Not yet completed"}
            </h2>
          </div>
          <Link
            href="/onboarding"
            className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2.5 text-xs font-semibold text-cream"
          >
            {profile ? "Update my answers" : "Complete my profile"}
            <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
        </div>

        {profile ? (
          <>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{profile.mentorBrief}</p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-xl border border-line bg-cream/60 p-3">
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.1em] text-ink-soft">Mentor focus</p>
                <ul className="mt-1.5 space-y-1 text-[0.7rem] leading-relaxed text-ink-soft">
                  {profile.mentorFocus.slice(0, 3).map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-gold/30 bg-gold-soft/50 p-3">
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.1em] text-gold-deep">
                  Support flags ({profile.riskFlags.length})
                </p>
                <ul className="mt-1.5 space-y-1 text-[0.7rem] leading-relaxed text-[#6b4a0d]">
                  {profile.riskFlags.length === 0 ? (
                    <li>None recorded.</li>
                  ) : (
                    profile.riskFlags.slice(0, 3).map((item) => <li key={item}>• {item}</li>)
                  )}
                </ul>
              </div>
              <div className="rounded-xl border border-line bg-cream/60 p-3">
                <p className="text-[0.58rem] font-bold uppercase tracking-[0.1em] text-ink-soft">Recorded details</p>
                <ul className="mt-1.5 space-y-1 text-[0.7rem] leading-relaxed text-ink-soft">
                  <li>Subjects: {profile.subjects.join(", ") || "—"}</li>
                  <li>UTME status: {profile.utmeStatus || "—"}</li>
                  <li>Study time: {profile.studyHours || "—"}</li>
                  <li>Mentor match: {profile.mentorPreference}</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-[0.68rem] leading-relaxed text-ink-soft">
              Provisional until baseline assessment and combination verification. Guardian consent:{" "}
              {profile.guardianConsent ? "recorded" : "not recorded"}. Data consent:{" "}
              {profile.consentData ? "given" : "not given"}.
            </p>
          </>
        ) : (
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Complete the participant profile to help us understand your O&apos;level status, subjects, study conditions
            and support needs. It takes about 8–10 minutes and directly shapes your pathway and mentor match.
          </p>
        )}
      </section>

      <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
        <form action={updateProfile} className="card space-y-4 p-5 sm:p-6">
          <h2 className="font-display text-xl text-navy-deep">Admission goal</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
                Full name
              </span>
              <input
                name="name"
                defaultValue={learner.name}
                required
                className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm"
              />
            </label>
            <label className="block">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
                Email (sign-in ID)
              </span>
              <input
                value={learner.email}
                readOnly
                className="mt-1.5 w-full rounded-lg border border-line bg-parchment/60 px-3 py-2.5 text-sm text-ink-soft"
              />
            </label>
            <label className="block">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
                Target course
              </span>
              <input
                name="targetCourse"
                defaultValue={learner.targetCourse}
                placeholder="e.g. Medicine and Surgery"
                className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm"
              />
            </label>
            <label className="block">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
                Target institution
              </span>
              <input
                name="targetInstitution"
                defaultValue={learner.targetInstitution}
                placeholder="e.g. University of Lagos"
                className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm"
              />
            </label>
            <label className="block">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
                Target UTME score
              </span>
              <input
                name="targetScore"
                type="number"
                min={180}
                max={400}
                defaultValue={learner.targetScore}
                className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm"
              />
            </label>
            <label className="block">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
                Exam year
              </span>
              <select
                name="examYear"
                defaultValue={learner.examYear}
                className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm"
              >
                {[2026, 2027, 2028, 2029].map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
                State
              </span>
              <select
                name="state"
                defaultValue={learner.state}
                className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm"
              >
                <option value="">Prefer not to say</option>
                {nigerianStates.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
                Best study window
              </span>
              <select
                name="studyWindow"
                defaultValue={learner.studyWindow}
                className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm"
              >
                {studyWindows.map((window) => (
                  <option key={window} value={window}>
                    {window}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
            <p className="text-[0.7rem] text-ink-soft">
              Member since{" "}
              {new Intl.DateTimeFormat("en-NG", { month: "long", year: "numeric" }).format(
                new Date(learner.createdAt),
              )}
            </p>
            <button
              type="submit"
              className="rounded-full bg-navy px-6 py-3 text-xs font-semibold text-cream transition hover:bg-navy-deep"
            >
              Save my goal
            </button>
          </div>
        </form>

        <aside className="space-y-4">
          <div className="rounded-2xl bg-navy p-5 text-cream">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gold">Snapshot</p>
            <p className="mt-2 font-display text-2xl">
              {learner.targetScore}
              <span className="text-base text-cream/50"> / 400 target</span>
            </p>
            <div className="mt-3">
              <div className="flex justify-between text-[0.65rem] uppercase tracking-[0.1em] text-cream/60">
                <span>Projected now</span>
                <span>{projectedScore(dashboard.averageScore)}</span>
              </div>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/15">
                <div
                  className="h-1.5 rounded-full bg-gold"
                  style={{
                    width: `${Math.min(100, Math.round((projectedScore(dashboard.averageScore) / learner.targetScore) * 100))}%`,
                  }}
                />
              </div>
            </div>
            <dl className="mt-4 space-y-2 text-xs text-cream/75">
              <div className="flex justify-between border-t border-white/10 pt-2">
                <dt>Lessons completed</dt>
                <dd className="font-semibold text-cream">{dashboard.completedLessons}</dd>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-2">
                <dt>CBT attempts</dt>
                <dd className="font-semibold text-cream">{dashboard.history.length}</dd>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-2">
                <dt>Average score</dt>
                <dd className="font-semibold text-cream">{dashboard.averageScore}%</dd>
              </div>
            </dl>
          </div>

          <div className="card p-5">
            <h3 className="font-display text-lg text-navy-deep">Curriculum coverage</h3>
            <div className="mt-3 space-y-2">
              {dashboard.subjects.slice(0, 5).map((subject) => {
                const percent = subject.lessonCount
                  ? Math.round((subject.completedCount / subject.lessonCount) * 100)
                  : 0;
                return (
                  <div key={subject.id}>
                    <div className="flex justify-between text-xs">
                      <span className="font-medium text-navy-deep">
                        {subject.icon} {subject.name}
                      </span>
                      <span className="text-ink-soft">{percent}%</span>
                    </div>
                    <div className="mt-1">
                      <ProgressBar value={percent} height="h-1" tone={percent >= 50 ? "emerald" : "navy"} />
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-3 text-[0.68rem] text-ink-soft">
              Overall coverage: {lessonPercent}% of {dashboard.totalLessons} lessons.
            </p>
            <Link href="/learn" className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-navy">
              Continue the curriculum
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="rounded-2xl border border-line bg-gold-soft/60 p-5 text-xs leading-relaxed text-[#6b4a0d]">
            <p className="font-display text-base text-navy-deep">Your data, your business</p>
            <p className="mt-1.5">
              We use your goal and progress only to personalise lessons, tests and mentorship. We never sell
              learner information.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
