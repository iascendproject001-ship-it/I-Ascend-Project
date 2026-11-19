import Link from "next/link";
import { requireLearner } from "@/lib/session";
import { getDashboard, getLatestIadp, getLearnerProfile, getTopicMastery, projectedScore, readinessBand } from "@/lib/data";
import { deadlineState, getSettings } from "@/lib/settings";
import { ArrowIcon, Badge, ProgressBar, StatTile } from "@/components/ui";

export const dynamic = "force-dynamic";
export const metadata = { title: "Dashboard" };

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-NG", { day: "numeric", month: "short" }).format(new Date(date));
}

export default async function DashboardPage() {
  const learner = await requireLearner();
  const [dashboard, profile, settings, iadp, mastery] = await Promise.all([
    getDashboard(learner.id),
    getLearnerProfile(learner.id),
    getSettings(),
    getLatestIadp(learner.id),
    getTopicMastery(learner.id),
  ]);

  const readiness = dashboard.averageScore;
  const band = readinessBand(readiness);
  const projected = projectedScore(readiness);
  const lessonPercent = dashboard.totalLessons
    ? Math.round((dashboard.completedLessons / dashboard.totalLessons) * 100)
    : 0;
  const targetGap = Math.max(0, learner.targetScore - projected);
  const firstName = learner.name.split(" ")[0];
  const deadline = deadlineState(settings.applicationDeadline);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Badge tone="gold">UTME {learner.examYear} · {learner.studyWindow}</Badge>
          <h1 className="mt-3 font-display text-3xl leading-tight text-navy-deep sm:text-4xl">
            Welcome back, {firstName}.
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
            {learner.targetCourse
              ? `You are preparing for ${learner.targetCourse}${
                  learner.targetInstitution ? ` at ${learner.targetInstitution}` : ""
                }. Target score: ${learner.targetScore}.`
              : "Set your target course and institution in your profile so we can shape your plan."}
          </p>
          {iadp ? (
            <Link
              href="/plan"
              className="mt-2 inline-block rounded-full border border-emerald/25 bg-emerald-soft/60 px-3 py-1 text-[0.7rem] font-semibold text-emerald"
            >
              Baseline {iadp.overallPercent}% · Pathway {iadp.pathway} · View my learning plan →
            </Link>
          ) : (
            <Link
              href="/baseline"
              className="mt-2 inline-block rounded-full border border-gold/40 bg-gold-soft/60 px-3 py-1 text-[0.7rem] font-semibold text-[#6b4a0d]"
            >
              Take your baseline assessment to unlock your personal learning plan →
            </Link>
          )}
          {deadline.hasDeadline && !deadline.isPast && (
            <p className="mt-2 inline-block rounded-full border border-gold/40 bg-gold-soft/60 px-3 py-1 text-[0.7rem] font-semibold text-[#6b4a0d]">
              {settings.cohortName} applications close {deadline.label} ({deadline.daysLeft} days left).
            </p>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/cbt"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-xs font-semibold text-cream transition hover:bg-navy-deep"
          >
            Start a CBT
            <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/learn"
            className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-5 py-3 text-xs font-semibold text-navy transition hover:border-navy/50"
          >
            Continue learning
          </Link>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.55fr_1fr]">
        <section className="relative overflow-hidden rounded-2xl bg-navy p-6 text-cream">
          <div className="grain pointer-events-none absolute inset-0 opacity-25" />
          <div className="relative">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gold">
                  Projected UTME score
                </p>
                <p className="mt-2 font-display text-5xl leading-none">
                  {projected}
                  <span className="ml-1 text-lg text-cream/50">/ 400</span>
                </p>
                <p className="mt-2 text-xs text-cream/65">
                  Based on {dashboard.history.filter((item) => item.status === "completed").length} completed
                  CBTs · {dashboard.averageScore}% average
                </p>
              </div>
              <Badge tone="cream">{band.label}</Badge>
            </div>

            <div className="mt-5">
              <div className="flex items-center justify-between text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-cream/60">
                <span>Readiness</span>
                <span>
                  {readiness}% of target {learner.targetScore}
                </span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/15">
                <div
                  className="h-2 rounded-full bg-gold"
                  style={{ width: `${Math.min(100, Math.round((projected / learner.targetScore) * 100))}%` }}
                />
              </div>
            </div>

            <div className="mt-5 grid gap-2 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="text-[0.6rem] uppercase tracking-[0.12em] text-cream/50">Gap to target</p>
                <p className="mt-1 font-display text-xl">{targetGap} marks</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="text-[0.6rem] uppercase tracking-[0.12em] text-cream/50">Lessons done</p>
                <p className="mt-1 font-display text-xl">
                  {dashboard.completedLessons}
                  <span className="text-sm text-cream/50">/{dashboard.totalLessons}</span>
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <p className="text-[0.6rem] uppercase tracking-[0.12em] text-cream/50">Questions ready</p>
                <p className="mt-1 font-display text-xl">{dashboard.questionsAvailable}</p>
              </div>
            </div>

            {dashboard.nextLesson && (
              <Link
                href={`/learn/${dashboard.nextLesson.subjectSlug}/${dashboard.nextLesson.slug}`}
                className="group mt-5 flex items-center justify-between gap-3 rounded-xl border border-gold/30 bg-gold/10 px-4 py-3 transition hover:bg-gold/15"
              >
                <div className="min-w-0">
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-gold">
                    Continue here next
                  </p>
                  <p className="mt-1 truncate text-sm font-semibold text-cream">
                    {dashboard.nextLesson.icon} {dashboard.nextLesson.title}
                  </p>
                </div>
                <ArrowIcon className="h-4 w-4 shrink-0 text-gold transition group-hover:translate-x-0.5" />
              </Link>
            )}
          </div>
        </section>

        <section className="card p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl text-navy-deep">This week&apos;s plan</h2>
            <Badge tone="emerald">Built for you</Badge>
          </div>
          <p className="mt-1 text-xs text-ink-soft">
            Three actions that move your score. Tick them off, then repeat.
          </p>
          <ol className="mt-4 space-y-3">
            {[
              {
                title: "Complete two lessons in your weakest subject",
                detail: dashboard.weakest[0]
                  ? `${dashboard.weakest[0].name} · ${dashboard.weakest[0].completedCount}/${dashboard.weakest[0].lessonCount} done`
                  : "Pick a subject to begin",
                href: dashboard.weakest[0] ? `/learn/${dashboard.weakest[0].slug}` : "/learn",
              },
              {
                title: "Sit one timed CBT checkpoint",
                detail: "40 questions · mixed subjects · 40 minutes",
                href: "/cbt",
              },
              {
                title: "Review every wrong answer with its explanation",
                detail: "Understanding why beats memorising what",
                href: "/cbt",
              },
            ].map((item, index) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="flex items-start gap-3 rounded-xl border border-line bg-cream/60 p-3 transition hover:border-navy/25"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-navy text-[0.65rem] font-bold text-gold">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy-deep">{item.title}</p>
                    <p className="mt-0.5 text-xs text-ink-soft">{item.detail}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
          <div className="mt-4 rounded-xl bg-gold-soft/70 p-3 text-xs leading-relaxed text-[#6b4a0d]">
            <strong>Mentor tip:</strong> a 300+ score is 10% inspiration and 90% checking your errors. Keep an
            error log from every CBT.
          </div>
        </section>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatTile value={`${dashboard.averageScore}%`} label="CBT average" hint="Across completed tests" />
        <StatTile value={`${lessonPercent}%`} label="Curriculum covered" hint={`${dashboard.completedLessons} lessons`} />
        <StatTile value={learner.targetScore} label="Target score" hint="Your declared goal" />
        <StatTile value={dashboard.history[0]?.projectedScore ?? 0} label="Latest projection" hint="Most recent CBT" />
      </div>

      {profile ? (
        <section className="rounded-2xl border border-line bg-white p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gold-deep">
                Your mentor brief
              </p>
              <h2 className="mt-1 font-display text-xl leading-snug text-navy-deep">
                Pathway {profile.pathway} · {profile.completeness}% profile complete
              </h2>
            </div>
            <Link
              href="/onboarding"
              className="inline-flex items-center gap-1.5 rounded-full border border-navy/20 bg-white px-3.5 py-2 text-[0.7rem] font-semibold text-navy transition hover:border-navy/50"
            >
              Update my profile
              <ArrowIcon className="h-3 w-3" />
            </Link>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{profile.mentorBrief}</p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div className="rounded-xl border border-line bg-cream/60 p-3.5">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-navy">
                Mentor focus for you
              </p>
              <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-ink-soft">
                {profile.mentorFocus.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-0.5 text-gold-deep">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-gold/30 bg-gold-soft/50 p-3.5">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-gold-deep">
                Support flags ({profile.riskFlags.length})
              </p>
              {profile.riskFlags.length === 0 ? (
                <p className="mt-2 text-xs leading-relaxed text-[#6b4a0d]">
                  Nothing flagged. Keep your profile current so we can notice changes early.
                </p>
              ) : (
                <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-[#6b4a0d]">
                  {profile.riskFlags.slice(0, 4).map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {profile.completeness < 100 && (
                <Link
                  href="/onboarding"
                  className="mt-2 inline-block text-[0.7rem] font-semibold text-navy hover:underline"
                >
                  Complete the missing {100 - profile.completeness}% →
                </Link>
              )}
            </div>
          </div>
        </section>
      ) : (
        <section className="flex flex-col gap-3 rounded-2xl border border-gold/40 bg-gold-soft/60 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gold-deep">
              Personalise your mentorship
            </p>
            <p className="mt-1 font-display text-xl text-navy-deep">Complete your participant profile</p>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-[#6b4a0d]">
              Tell us about your O&apos;level status, subjects, study conditions and the support you need. We will
              generate your pathway, support flags and a mentor brief.
            </p>
          </div>
          <Link
            href="/onboarding"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy px-5 py-3 text-xs font-semibold text-cream"
          >
            Start the profile
            <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
        </section>
      )}

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="card p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl text-navy-deep">Subject progress</h2>
            <Link href="/learn" className="text-xs font-semibold text-navy hover:underline">
              All subjects
            </Link>
          </div>
          <div className="mt-4 space-y-3">
            {dashboard.subjects.slice(0, 6).map((subject) => {
              const percent = subject.lessonCount
                ? Math.round((subject.completedCount / subject.lessonCount) * 100)
                : 0;
              return (
                <Link key={subject.id} href={`/learn/${subject.slug}`} className="block group">
                  <div className="flex items-center justify-between gap-2 text-sm">
                    <span className="flex items-center gap-2 font-medium text-navy-deep">
                      <span>{subject.icon}</span>
                      {subject.name}
                    </span>
                    <span className="text-xs text-ink-soft">
                      {subject.completedCount}/{subject.lessonCount}
                    </span>
                  </div>
                  <div className="mt-1.5">
                    <ProgressBar
                      value={percent}
                      tone={percent >= 50 ? "emerald" : "navy"}
                      height="h-1.5"
                      label={`${subject.name} progress`}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="card p-5 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl text-navy-deep">Topics needing work</h2>
            <Link href="/cbt" className="text-xs font-semibold text-navy hover:underline">
              Drill them
            </Link>
          </div>
          {mastery.length === 0 ? (
            <p className="mt-2 text-sm text-ink-soft">
              Sit CBTs to reveal your weakest topics here (3+ attempts per topic). Push every topic past
              70% across all four subjects and you are exam-ready.
            </p>
          ) : (
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {mastery.map((row) => (
                <li key={`${row.subjectSlug}-${row.topic}`}>
                  <Link
                    href={`/learn/${row.subjectSlug}`}
                    className="block rounded-xl border border-line bg-cream/60 p-3 transition hover:border-navy/25"
                  >
                    <div className="flex items-center justify-between gap-2 text-sm">
                      <span className="font-medium text-navy-deep">
                        {row.subjectName} · {row.topic}
                      </span>
                      <span className="shrink-0 text-xs text-ink-soft">
                        {row.correct}/{row.total} · {row.percent}%
                      </span>
                    </div>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-parchment">
                      <div
                        className="h-1.5 rounded-full bg-gold"
                        style={{ width: `${Math.min(100, row.percent)}%` }}
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
        <section className="card p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl text-navy-deep">Recent CBT attempts</h2>
            <Link href="/cbt" className="text-xs font-semibold text-navy hover:underline">
              Practice again
            </Link>
          </div>
          {dashboard.history.length === 0 ? (
            <p className="mt-4 rounded-xl border border-dashed border-line p-4 text-sm text-ink-soft">
              No CBT yet. Your first timed drill is the fastest way to see where you really stand.
            </p>
          ) : (
            <ul className="mt-3 divide-y divide-line">
              {dashboard.history.map((session) => (
                <li key={session.id} className="py-3">
                  <Link href={`/cbt/${session.id}/result`} className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-navy-deep">{session.label}</p>
                      <p className="text-xs text-ink-soft">
                        {formatDate(session.startedAt)} · {session.questionCount} questions ·{" "}
                        {session.status === "completed" ? "completed" : "in progress"}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${
                        session.scorePercent >= 70
                          ? "bg-emerald-soft text-emerald"
                          : session.scorePercent >= 50
                            ? "bg-gold-soft text-gold-deep"
                            : "bg-parchment text-ink-soft"
                      }`}
                    >
                      {session.status === "completed" ? `${session.scorePercent}%` : "Resume"}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <section className="card p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl text-navy-deep">Mentor conversations</h2>
            <Link href="/mentor/new" className="text-xs font-semibold text-navy hover:underline">
              Ask a question
            </Link>
          </div>
          {dashboard.threads.length === 0 ? (
            <p className="mt-4 text-sm text-ink-soft">
              You have no open conversations. Confused about a subject, a course or a cut-off? Ask.
            </p>
          ) : (
            <ul className="mt-3 space-y-2">
              {dashboard.threads.map((thread) => (
                <li key={thread.id}>
                  <Link
                    href={`/mentor/${thread.id}`}
                    className="flex items-center justify-between gap-3 rounded-xl border border-line bg-cream/60 p-3 transition hover:border-navy/25"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-navy-deep">{thread.title}</p>
                      <p className="text-xs text-ink-soft">
                        {thread.category} · {thread.status}
                      </p>
                    </div>
                    <ArrowIcon className="h-4 w-4 shrink-0 text-navy/50" />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="rounded-2xl border border-line bg-gold-soft/60 p-5">
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-gold-deep">
            Remember why
          </p>
          <p className="mt-2 font-display text-xl leading-snug text-navy-deep">
            &ldquo;You are not asking for favour. You are preparing for opportunity.&rdquo;
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#6b4a0d]">
            Every lesson you finish is a sentence written into a future letter of admission. Keep showing up
            on the days that feel ordinary.
          </p>
          <Link
            href="/profile"
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-navy"
          >
            Review my admission goal
            <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
        </section>
      </div>
    </div>
  );
}
