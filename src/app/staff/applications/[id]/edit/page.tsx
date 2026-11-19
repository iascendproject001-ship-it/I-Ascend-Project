import Link from "next/link";
import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { learnerProfiles, learners } from "@/db/schema";
import { requireAdmin } from "@/lib/staff-auth";
import { updateApplicant } from "@/lib/staff-actions";
import { Badge } from "@/components/ui";

export const dynamic = "force-dynamic";
export const metadata = { title: "Edit applicant record" };

const inputClass =
  "mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm text-ink";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
        {label}
      </span>
      {children}
    </label>
  );
}

function SelectField({
  label,
  name,
  value,
  options,
}: {
  label: string;
  name: string;
  value: string;
  options: string[];
}) {
  return (
    <Field label={label}>
      <select name={name} defaultValue={value} className={inputClass}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option || "—"}
          </option>
        ))}
      </select>
    </Field>
  );
}

const STUDY_WINDOWS = ["Mornings", "Afternoons", "Evenings & weekends", "Late nights", "Flexible / varies"];
const OLEVEL_OPTIONS = [
  "Yes — five credits secured",
  "Partly — fewer than five credits",
  "Not yet — awaiting results",
  "No, I need to resit",
  "",
];
const UTME_OPTIONS = ["First attempt", "Repeat candidate", "Not sure yet", ""];
const STUDY_HOURS = ["Under 5 hours", "5–10 hours", "11 hours or more", "I do not know yet", ""];
const DEVICES = [
  "Yes — laptop or tablet",
  "Yes — smartphone",
  "Shared device at home",
  "No device — I borrow or use a centre",
  "",
];
const PATHWAYS = ["A+", "A", "B", "C", "R", "E"];

export default async function EditApplicantPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  await requireAdmin();
  const { id: raw } = await params;
  const id = Number(raw);
  if (!Number.isFinite(id)) notFound();

  const [learner] = await db.select().from(learners).where(eq(learners.id, id)).limit(1);
  if (!learner) notFound();
  const [profile] = await db
    .select()
    .from(learnerProfiles)
    .where(eq(learnerProfiles.learnerId, id))
    .limit(1);
  const { error } = await searchParams;

  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <div>
        <Link
          href={`/staff/applications/${id}`}
          className="text-xs font-semibold text-navy hover:underline"
        >
          ← Back to applicant
        </Link>
        <Badge tone="gold" className="mt-3">
          Administrator adjustment
        </Badge>
        <h1 className="mt-2 font-display text-3xl text-navy-deep">Edit {learner.name}&apos;s record.</h1>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          Correct details, update goals, or override the pathway with a written reason. Changes apply
          immediately to the learner&apos;s dashboard, plan and mentor brief.
        </p>
      </div>

      {error && (
        <p className="rounded-xl bg-[#fdecec] px-4 py-3 text-sm font-medium text-[#a12b2b]">{error}</p>
      )}

      <form action={updateApplicant} className="space-y-5">
        <input type="hidden" name="learnerId" value={learner.id} />

        <section className="card space-y-4 p-5">
          <h2 className="font-display text-xl text-navy-deep">Identity & goal</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name">
              <input name="name" defaultValue={learner.name} required className={inputClass} />
            </Field>
            <Field label="State">
              <input name="state" defaultValue={learner.state} className={inputClass} />
            </Field>
            <Field label="Target course">
              <input name="targetCourse" defaultValue={learner.targetCourse} className={inputClass} />
            </Field>
            <Field label="Target institution">
              <input
                name="targetInstitution"
                defaultValue={learner.targetInstitution}
                className={inputClass}
              />
            </Field>
            <Field label="Target UTME score">
              <input
                name="targetScore"
                type="number"
                min={0}
                max={400}
                defaultValue={learner.targetScore}
                className={inputClass}
              />
            </Field>
            <Field label="Exam year">
              <input
                name="examYear"
                type="number"
                min={2020}
                max={2035}
                defaultValue={learner.examYear}
                className={inputClass}
              />
            </Field>
            <div className="sm:col-span-2">
              <SelectField
                label="Best study window"
                name="studyWindow"
                value={learner.studyWindow}
                options={STUDY_WINDOWS}
              />
            </div>
          </div>
        </section>

        {profile ? (
          <section className="card space-y-4 p-5">
            <h2 className="font-display text-xl text-navy-deep">Participant profile</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Phone / WhatsApp">
                <input name="phone" defaultValue={profile.phone} className={inputClass} />
              </Field>
              <Field label="Town / city">
                <input name="location" defaultValue={profile.location} className={inputClass} />
              </Field>
              <Field label="Secondary school">
                <input name="schoolName" defaultValue={profile.schoolName} className={inputClass} />
              </Field>
              <SelectField
                label="O'level status"
                name="olevelStatus"
                value={profile.olevelStatus}
                options={OLEVEL_OPTIONS}
              />
              <SelectField
                label="UTME status"
                name="utmeStatus"
                value={profile.utmeStatus}
                options={UTME_OPTIONS}
              />
              <SelectField
                label="Weekly study time"
                name="studyHours"
                value={profile.studyHours}
                options={STUDY_HOURS}
              />
              <div className="sm:col-span-2">
                <SelectField
                  label="Device access"
                  name="deviceAccess"
                  value={profile.deviceAccess}
                  options={DEVICES}
                />
              </div>
              <SelectField
                label="Pathway (override with care)"
                name="pathway"
                value={profile.pathway}
                options={PATHWAYS}
              />
              <Field label="Pathway reason">
                <textarea
                  name="pathwayReason"
                  rows={2}
                  defaultValue={profile.pathwayReason}
                  className={inputClass}
                />
              </Field>
            </div>
          </section>
        ) : (
          <p className="rounded-xl border border-gold/40 bg-gold-soft/60 p-4 text-sm text-[#6b4a0d]">
            No participant profile on record — ask the learner to complete /onboarding. Goal fields above
            can still be adjusted.
          </p>
        )}

        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-[0.7rem] text-ink-soft">
            Signed as an administrator adjustment. The learner sees updated goals immediately.
          </p>
          <button
            type="submit"
            className="rounded-full bg-navy px-6 py-3 text-xs font-semibold text-cream transition hover:bg-navy-deep"
          >
            Save adjustments
          </button>
        </div>
      </form>
    </div>
  );
}
