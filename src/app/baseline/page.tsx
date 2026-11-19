import Link from "next/link";
import { requireLearner } from "@/lib/session";
import { getBaselineSessions, getLatestIadp, getLearnerProfile, getSubjects } from "@/lib/data";
import { BaselineStart, type BaselineOption } from "@/components/baseline/baseline-start";
import { ArrowIcon, Badge } from "@/components/ui";

export const dynamic = "force-dynamic";
export const metadata = { title: "Baseline assessment" };

const DEFAULT_SUBJECTS = ["English Language", "Mathematics", "Biology", "Chemistry"];

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-NG", { day: "numeric", month: "short", year: "numeric" }).format(
    new Date(date),
  );
}

export default async function BaselinePage() {
  const learner = await requireLearner();
  const [profile, subjects, baselines, iadp] = await Promise.all([
    getLearnerProfile(learner.id),
    getSubjects(),
    getBaselineSessions(learner.id),
    getLatestIadp(learner.id),
  ]);

  const names = profile && profile.subjects.length > 0 ? profile.subjects : DEFAULT_SUBJECTS;
  const options: BaselineOption[] = names
    .map((name) => {
      const match = subjects.find((subject) => subject.name === name);
      return { id: match?.id ?? 0, name, available: match?.questionCount ?? 0 };
    })
    .filter((option) => option.id > 0);

  return (
    <div className="space-y-6">
      <header>
        <Badge tone="gold">Diagnosis before teaching</Badge>
        <h1 className="mt-3 font-display text-3xl leading-tight text-navy-deep sm:text-4xl">
          Your baseline assessment.
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
          This diagnostic measures where you truly stand in your four UTME subjects. On submission it
          auto-generates your Individual Academic Development Plan — per-subject bands, topic gaps, targets
          and your confirmed pathway. It is not an entrance exam; it is the instrument that makes your
          preparation personal.
        </p>
      </header>

      {iadp && (
        <div className="flex flex-col gap-2 rounded-2xl border border-emerald/25 bg-emerald-soft/50 p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-emerald">
            <strong>Current plan active:</strong> baseline {iadp.overallPercent}% · Pathway {iadp.pathway} ·{" "}
            {formatDate(iadp.createdAt)}. Retaking replaces it.
          </p>
          <Link
            href="/plan"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald px-4 py-2 text-xs font-semibold text-white"
          >
            View my learning plan <ArrowIcon className="h-3 w-3" />
          </Link>
        </div>
      )}

      <div className="grid gap-2 sm:grid-cols-3">
        {[
          { n: "1", title: "Sit the diagnostic", body: "Answer without help, under the stated time." },
          { n: "2", title: "Receive your IADP", body: "Bands, gaps, targets and pathway — instantly." },
          { n: "3", title: "Work the plan", body: "Lessons, CBTs and mentor reviews follow it." },
        ].map((step) => (
          <div key={step.n} className="flex gap-3 rounded-2xl border border-line bg-white p-4">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-navy text-[0.7rem] font-bold text-gold">
              {step.n}
            </span>
            <div>
              <p className="text-sm font-semibold text-navy-deep">{step.title}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-ink-soft">{step.body}</p>
            </div>
          </div>
        ))}
      </div>

      {options.length > 0 ? (
        <BaselineStart options={options} />
      ) : (
        <div className="card p-5 text-sm text-ink-soft">
          No subjects found on your profile.{" "}
          <Link href="/onboarding" className="font-semibold text-navy hover:underline">
            Complete your participant profile
          </Link>{" "}
          first so the diagnostic covers your four UTME subjects.
        </div>
      )}

      {baselines.length > 0 && (
        <section className="card p-5">
          <h2 className="font-display text-xl text-navy-deep">Previous diagnostics</h2>
          <ul className="mt-3 divide-y divide-line">
            {baselines.map((session) => (
              <li key={session.id} className="py-2.5">
                <Link href={`/baseline/${session.id}`} className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-navy-deep">{session.label}</p>
                    <p className="text-[0.7rem] text-ink-soft">
                      {formatDate(session.startedAt)} · {session.status}
                    </p>
                  </div>
                  <span className="rounded-full bg-parchment px-2.5 py-1 text-xs font-bold text-navy-deep">
                    {session.status === "completed" ? `${session.scorePercent}%` : "Resume"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
