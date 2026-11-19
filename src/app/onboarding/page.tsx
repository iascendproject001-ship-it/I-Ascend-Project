import Link from "next/link";
import { requireLearner } from "@/lib/session";
import { getLearnerProfile, getSubjects } from "@/lib/data";
import { toProfileInput, withGoalDefaults } from "@/lib/profile-map";
import { ProfileWizard } from "@/components/onboarding/profile-wizard";
import { AppShell } from "@/components/app-shell";
import { Badge } from "@/components/ui";

export const dynamic = "force-dynamic";
export const metadata = { title: "Update my participant profile" };

export default async function OnboardingEditPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const learner = await requireLearner();
  const { error } = await searchParams;
  const [subjects, profile] = await Promise.all([getSubjects(), getLearnerProfile(learner.id)]);

  const initialProfile = withGoalDefaults(toProfileInput(profile), {
    targetCourse: learner.targetCourse,
    targetInstitution: learner.targetInstitution,
    state: learner.state,
    studyWindow: learner.studyWindow,
  });

  return (
    <AppShell learner={learner}>
      <div className="space-y-5">
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Badge tone="gold">Participant profile</Badge>
            <h1 className="mt-3 font-display text-3xl leading-tight text-navy-deep sm:text-4xl">
              Keep your profile honest and current.
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
              Your answers shape your pathway, your mentor match and the study plan we build with you. Update this
              whenever your situation changes — new results, a change of course, or a new barrier.
            </p>
          </div>
          <Link
            href="/profile"
            className="rounded-full border border-line bg-white px-4 py-2.5 text-xs font-semibold text-ink-soft transition hover:border-navy/30 hover:text-navy"
          >
            Back to my profile
          </Link>
        </header>

        {profile && (
          <div className="rounded-2xl border border-emerald/20 bg-emerald-soft/50 p-4 text-sm text-emerald">
            <strong>Current recorded pathway:</strong> {profile.pathway} · {profile.completeness}% complete ·{" "}
            {profile.riskFlags.length} support flag(s) on record. Last updated{" "}
            {new Intl.DateTimeFormat("en-NG", { day: "numeric", month: "short", year: "numeric" }).format(
              new Date(profile.updatedAt),
            )}
            .
          </div>
        )}

        <ProfileWizard
          mode="edit"
          subjectOptions={subjects.map((subject) => ({
            id: subject.id,
            name: subject.name,
            category: subject.category,
            icon: subject.icon,
          }))}
          initialProfile={initialProfile}
          basics={{
            name: learner.name,
            email: learner.email,
            targetScore: learner.targetScore,
            examYear: learner.examYear,
          }}
          initialError={error}
        />
      </div>
    </AppShell>
  );
}
