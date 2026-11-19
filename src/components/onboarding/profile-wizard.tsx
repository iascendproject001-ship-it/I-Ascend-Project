"use client";

import { useMemo, useState } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { saveProfile } from "@/lib/actions";
import {
  confidenceLabels,
  deriveProfileInsights,
  emptyProfile,
  gradeOptions,
  isMinor,
  pathwayDescriptions,
  validateProfileStep,
  type ProfileInput,
} from "@/lib/profile";
import { ArrowIcon, ProgressBar } from "@/components/ui";

type SubjectOption = { id: number; name: string; category: string; icon: string };

type WizardProps = {
  mode: "create" | "edit";
  subjectOptions: SubjectOption[];
  initialProfile: ProfileInput;
  basics: { name: string; email: string; targetScore: number; examYear: number };
  initialError?: string;
};

const steps = [
  { title: "You & your goal", hint: "Who you are, and what you are aiming for." },
  { title: "Education & O'level", hint: "Your school history and results status." },
  { title: "UTME subjects", hint: "Your four subjects, and honest confidence." },
  { title: "Study life & access", hint: "Time, habits, devices and connectivity." },
  { title: "Support & motivation", hint: "What you need, and what drives you." },
  { title: "Mentoring & consent", hint: "How we match you, and your agreement." },
];

const states = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT Abuja", "Gombe",
  "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto",
  "Taraba", "Yobe", "Zamfara",
];

const inputClass =
  "mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm text-ink placeholder:text-ink-soft/50";

const studyChallenges = [
  "I have caring or work responsibilities",
  "I cannot afford materials",
  "I have no quiet place to study",
  "I do not know how to study effectively",
  "I lose focus easily",
  "My school did not teach some topics",
  "Friends or family do not support the goal",
];

const supportOptions = [
  "Visual impairment",
  "Hearing impairment",
  "Learning difficulty",
  "Physical disability",
  "Long-term health condition",
  "Examination anxiety",
  "Need extra time",
  "None of these",
];

export function ProfileWizard({
  mode,
  subjectOptions,
  initialProfile,
  basics,
  initialError,
}: WizardProps) {
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState<ProfileInput>(initialProfile ?? emptyProfile);
  const [formBasics, setFormBasics] = useState(basics);
  const [errors, setErrors] = useState<string[]>(initialError ? [initialError] : []);
  const insights = useMemo(() => deriveProfileInsights(profile), [profile]);
  const minor = isMinor(profile);

  function update<K extends keyof ProfileInput>(key: K, value: ProfileInput[K]) {
    setProfile((current) => ({ ...current, [key]: value }));
  }

  function toggleList(key: "studyChallenges" | "learningSupport", value: string) {
    setProfile((current) => {
      const list = current[key];
      const next = list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
      return { ...current, [key]: next };
    });
  }

  function toggleSubject(name: string) {
    setProfile((current) => {
      if (name === "English Language") return current;
      const selected = current.subjects.includes(name);
      if (!selected && current.subjects.length >= 4) return current;
      const subjects = selected
        ? current.subjects.filter((item) => item !== name)
        : [...current.subjects, name];
      const confidence = { ...current.confidence };
      if (!selected && confidence[name] === undefined) confidence[name] = 3;
      return { ...current, subjects, confidence };
    });
  }

  function goNext() {
    const found = validateProfileStep(step, profile);
    const basicsError =
      mode === "create" && step === 0 && (formBasics.name.trim().length < 2 || !formBasics.email.includes("@"))
        ? ["Your name and a valid email address are required."]
        : [];
    const all = [...basicsError, ...found];
    setErrors(all);
    if (all.length === 0) {
      setStep((current) => Math.min(steps.length - 1, current + 1));
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function goBack() {
    setErrors([]);
    setStep((current) => Math.max(0, current - 1));
  }

  return (
    <form action={saveProfile} noValidate className="space-y-4">
      <input type="hidden" name="name" value={formBasics.name} />
      <input type="hidden" name="email" value={formBasics.email} />
      <input type="hidden" name="targetScore" value={formBasics.targetScore} />
      <input type="hidden" name="examYear" value={formBasics.examYear} />
      <input type="hidden" name="subjects" value={JSON.stringify(profile.subjects)} />
      <input type="hidden" name="confidence" value={JSON.stringify(profile.confidence)} />
      <input type="hidden" name="olevelResults" value={JSON.stringify(profile.olevelResults)} />
      <input type="hidden" name="attempts" value={JSON.stringify(profile.attempts)} />
      <input type="hidden" name="studyChallenges" value={JSON.stringify(profile.studyChallenges)} />
      <input type="hidden" name="learningSupport" value={JSON.stringify(profile.learningSupport)} />

      <div className="grid gap-4 lg:grid-cols-[1fr_286px]">
        <div className="space-y-4">
          <div className="rounded-2xl border border-line bg-white p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gold-deep">
                Step {step + 1} of {steps.length} · {steps[step].title}
              </p>
              <span className="text-[0.68rem] text-ink-soft">{insights.completeness}% complete</span>
            </div>
            <div className="mt-2">
              <ProgressBar value={((step + 1) / steps.length) * 100} tone="gold" height="h-1.5" label="Registration progress" />
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {steps.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => {
                    if (index <= step) {
                      setStep(index);
                      setErrors([]);
                    }
                  }}
                  className={`rounded-full px-2.5 py-1 text-[0.62rem] font-semibold transition ${
                    index === step
                      ? "bg-navy text-cream"
                      : index < step
                        ? "bg-emerald-soft text-emerald"
                        : "bg-parchment text-ink-soft"
                  }`}
                  aria-current={index === step ? "step" : undefined}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-ink-soft">{steps[step].hint}</p>
          </div>

          {errors.length > 0 && (
            <div className="rounded-xl border border-[#e7b4b4] bg-[#fdecec] p-3.5">
              {errors.map((error) => (
                <p key={error} className="text-xs font-medium leading-relaxed text-[#a12b2b]">
                  {error}
                </p>
              ))}
            </div>
          )}

          <div className="rounded-2xl border border-line bg-white p-4 sm:p-5">
            {/* Step 1: identity and goal */}
            <div className={step === 0 ? "space-y-4" : "hidden"}>
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Full name">
                  <input
                    value={formBasics.name}
                    onChange={(event) => setFormBasics((current) => ({ ...current, name: event.target.value }))}
                    className={inputClass}
                    placeholder="e.g. Aisha Bello"
                  />
                </Field>
                <Field label="Email address" hint={mode === "edit" ? "Contact the programme to change your sign-in email." : undefined}>
                  <input
                    type="email"
                    value={formBasics.email}
                    readOnly={mode === "edit"}
                    onChange={(event) => setFormBasics((current) => ({ ...current, email: event.target.value }))}
                    className={mode === "edit" ? `${inputClass} bg-parchment/60` : inputClass}
                    placeholder="you@example.com"
                  />
                </Field>
                <Field label="Phone / WhatsApp">
                  <input
                    name="phone"
                    value={profile.phone}
                    onChange={(event) => update("phone", event.target.value)}
                    className={inputClass}
                    placeholder="080..."
                  />
                </Field>
                <Field label="Alternative contact (optional)">
                  <input
                    name="altContact"
                    value={profile.altContact}
                    onChange={(event) => update("altContact", event.target.value)}
                    className={inputClass}
                    placeholder="Another number or a guardian's"
                  />
                </Field>
                <Field label="Gender">
                  <select
                    name="gender"
                    value={profile.gender}
                    onChange={(event) => update("gender", event.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select</option>
                    <option>Female</option>
                    <option>Male</option>
                  </select>
                </Field>
                <Field label="Age (years) *" hint="Compulsory. Enter your exact age as a whole number — one year, not an age range or band.">
                  <input
                    type="number"
                    name="age"
                    min={10}
                    max={100}
                    step={1}
                    inputMode="numeric"
                    value={profile.age > 0 ? profile.age : ""}
                    onChange={(event) => update("age", Number(event.target.value) || 0)}
                    className={inputClass}
                    placeholder="e.g. 19"
                  />
                </Field>
                <Field
                  label="Date of birth (optional)"
                  hint="Only used to confirm your age and safeguarding requirements."
                >
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={profile.dateOfBirth}
                    onChange={(event) => update("dateOfBirth", event.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field label="Town / city">
                  <input
                    name="location"
                    value={profile.location}
                    onChange={(event) => update("location", event.target.value)}
                    className={inputClass}
                    placeholder="e.g. Kano"
                  />
                </Field>
                <Field label="State">
                  <select
                    name="state"
                    value={profile.state}
                    onChange={(event) => update("state", event.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select state</option>
                    {states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              {mode === "create" && (
                <Field label="How did you hear about I Ascend?">
                  <select
                    name="referralSource"
                    value={profile.referralSource}
                    onChange={(event) => update("referralSource", event.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select one</option>
                    <option>School or teacher</option>
                    <option>Friend or family member</option>
                    <option>Social media</option>
                    <option>Community or faith organisation</option>
                    <option>I Ascend beneficiary or alumnus</option>
                    <option>Other</option>
                  </select>
                </Field>
              )}

              <div className="rounded-xl border border-line bg-cream/60 p-3.5">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gold-deep">
                  Your target
                </p>
                <div className="mt-2 grid gap-3 sm:grid-cols-2">
                  <Field label="Target course (first choice)">
                    <input
                      name="targetCourse"
                      value={profile.targetCourse}
                      onChange={(event) => update("targetCourse", event.target.value)}
                      className={inputClass}
                      placeholder="e.g. Medicine and Surgery"
                    />
                  </Field>
                  <Field label="Target institution (first choice)">
                    <input
                      name="targetInstitution"
                      value={profile.targetInstitution}
                      onChange={(event) => update("targetInstitution", event.target.value)}
                      className={inputClass}
                      placeholder="e.g. University of Lagos"
                    />
                  </Field>
                  <Field label="Alternative course (optional)">
                    <input
                      name="altCourse"
                      value={profile.altCourse}
                      onChange={(event) => update("altCourse", event.target.value)}
                      className={inputClass}
                      placeholder="A realistic fallback"
                    />
                  </Field>
                  <Field label="Alternative institution (optional)">
                    <input
                      name="altInstitution"
                      value={profile.altInstitution}
                      onChange={(event) => update("altInstitution", event.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Target UTME score">
                    <input
                      type="number"
                      min={180}
                      max={400}
                      value={formBasics.targetScore}
                      onChange={(event) =>
                        setFormBasics((current) => ({ ...current, targetScore: Number(event.target.value) || 300 }))
                      }
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Exam year">
                    <select
                      value={formBasics.examYear}
                      onChange={(event) =>
                        setFormBasics((current) => ({ ...current, examYear: Number(event.target.value) }))
                      }
                      className={inputClass}
                    >
                      {[2026, 2027, 2028, 2029].map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
                <p className="mt-2 text-[0.68rem] leading-relaxed text-ink-soft">
                  A target is a planning stretch, not a promise. We will verify your combination against the current
                  JAMB brochure before registration.
                </p>
              </div>
            </div>

            {/* Step 2: education and O'level */}
            <div className={step === 1 ? "space-y-4" : "hidden"}>
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Secondary school attended">
                  <input
                    name="schoolName"
                    value={profile.schoolName}
                    onChange={(event) => update("schoolName", event.target.value)}
                    className={inputClass}
                    placeholder="School name and town"
                  />
                </Field>
                <Field label="School type">
                  <select
                    name="schoolType"
                    value={profile.schoolType}
                    onChange={(event) => update("schoolType", event.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select one</option>
                    <option>Public (government) school</option>
                    <option>Private school</option>
                    <option>Mission / faith school</option>
                    <option>Community or rural school</option>
                    <option>Mixed / other</option>
                  </select>
                </Field>
                <Field label="Year completed secondary school">
                  <input
                    name="graduationYear"
                    value={profile.graduationYear}
                    onChange={(event) => update("graduationYear", event.target.value)}
                    className={inputClass}
                    placeholder="e.g. 2026"
                    inputMode="numeric"
                  />
                </Field>
                <Field label="O'level status">
                  <select
                    name="olevelStatus"
                    value={profile.olevelStatus}
                    onChange={(event) => update("olevelStatus", event.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select one</option>
                    <option>Yes — five credits secured</option>
                    <option>Partly — fewer than five credits</option>
                    <option>Not yet — awaiting results</option>
                    <option>No, I need to resit</option>
                  </select>
                </Field>
                <Field label="Sittings">
                  <select
                    name="olevelSitting"
                    value={profile.olevelSitting}
                    onChange={(event) => update("olevelSitting", event.target.value)}
                    className={inputClass}
                  >
                    <option>One sitting</option>
                    <option>Two sittings</option>
                    <option>More than two sittings</option>
                    <option>Not applicable</option>
                  </select>
                </Field>
                <Field label="Are you the first in your family to pursue university?">
                  <select
                    name="firstGeneration"
                    value={profile.firstGeneration}
                    onChange={(event) => update("firstGeneration", event.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select one</option>
                    <option>Yes</option>
                    <option>No</option>
                    <option>Not sure</option>
                  </select>
                </Field>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink-soft">
                    O&apos;level subjects and grades
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      update("olevelResults", [...profile.olevelResults, { subject: "", grade: "" }])
                    }
                    className="text-[0.68rem] font-semibold text-navy hover:underline"
                  >
                    + Add subject
                  </button>
                </div>
                <div className="mt-2 space-y-2">
                  {profile.olevelResults.map((result, index) => (
                    <div key={index} className="grid grid-cols-[1fr_110px] gap-2">
                      <input
                        value={result.subject}
                        onChange={(event) => {
                          const next = [...profile.olevelResults];
                          next[index] = { ...next[index], subject: event.target.value };
                          update("olevelResults", next);
                        }}
                        className={inputClass}
                        placeholder={index === 0 ? "English Language" : index === 1 ? "Mathematics" : "Subject"}
                      />
                      <select
                        value={result.grade}
                        onChange={(event) => {
                          const next = [...profile.olevelResults];
                          next[index] = { ...next[index], grade: event.target.value };
                          update("olevelResults", next);
                        }}
                        className={inputClass}
                      >
                        <option value="">Grade</option>
                        {gradeOptions.map((grade) => (
                          <option key={grade} value={grade}>
                            {grade}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
                </div>
                <p className="mt-2 text-[0.68rem] leading-relaxed text-ink-soft">
                  Enter the grades you hold or are expecting. We use this to check eligibility; we never invent results
                  on your behalf.
                </p>
              </div>
            </div>

            {/* Step 3: UTME subjects and confidence */}
            <div className={step === 2 ? "space-y-4" : "hidden"}>
              <Field label="Is this your first UTME?">
                <select
                  name="utmeStatus"
                  value={profile.utmeStatus}
                  onChange={(event) => update("utmeStatus", event.target.value)}
                  className={inputClass}
                >
                  <option value="">Select one</option>
                  <option>First attempt</option>
                  <option>Repeat candidate</option>
                  <option>Not sure yet</option>
                </select>
              </Field>

              {profile.utmeStatus === "Repeat candidate" && (
                <div className="rounded-xl border border-line bg-cream/60 p-3.5">
                  <div className="flex items-center justify-between">
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink-soft">
                      Previous attempts
                    </p>
                    <button
                      type="button"
                      onClick={() =>
                        update("attempts", [
                          ...profile.attempts,
                          { year: "", score: "", outcome: "", course: "" },
                        ])
                      }
                      className="text-[0.68rem] font-semibold text-navy hover:underline"
                    >
                      + Add attempt
                    </button>
                  </div>
                  {profile.attempts.length === 0 && (
                    <p className="mt-2 text-xs text-ink-soft">
                      Add your most recent attempt. Honest information helps us avoid repeating the same strategy.
                    </p>
                  )}
                  <div className="mt-2 space-y-2">
                    {profile.attempts.map((attempt, index) => (
                      <div key={index} className="grid gap-2 sm:grid-cols-4">
                        <input
                          value={attempt.year}
                          onChange={(event) => {
                            const next = [...profile.attempts];
                            next[index] = { ...next[index], year: event.target.value };
                            update("attempts", next);
                          }}
                          className={inputClass}
                          placeholder="Year"
                          inputMode="numeric"
                        />
                        <input
                          value={attempt.score}
                          onChange={(event) => {
                            const next = [...profile.attempts];
                            next[index] = { ...next[index], score: event.target.value };
                            update("attempts", next);
                          }}
                          className={inputClass}
                          placeholder="Score"
                          inputMode="numeric"
                        />
                        <input
                          value={attempt.course}
                          onChange={(event) => {
                            const next = [...profile.attempts];
                            next[index] = { ...next[index], course: event.target.value };
                            update("attempts", next);
                          }}
                          className={inputClass}
                          placeholder="Course applied for"
                        />
                        <select
                          value={attempt.outcome}
                          onChange={(event) => {
                            const next = [...profile.attempts];
                            next[index] = { ...next[index], outcome: event.target.value };
                            update("attempts", next);
                          }}
                          className={inputClass}
                        >
                          <option value="">Outcome</option>
                          <option>No admission</option>
                          <option>Admitted — did not take it</option>
                          <option>Admitted — changed course</option>
                          <option>Did not sit the exam</option>
                        </select>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink-soft">
                    Your four UTME subjects
                  </p>
                  <span className={`text-[0.68rem] font-semibold ${profile.subjects.length === 4 ? "text-emerald" : "text-gold-deep"}`}>
                    {profile.subjects.length}/4 selected
                  </span>
                </div>
                <p className="mt-1 text-[0.68rem] text-ink-soft">
                  English Language is compulsory. Choose the other three to match your target course — we will verify
                  them against the current JAMB brochure.
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {subjectOptions.map((subject) => {
                    const selected = profile.subjects.includes(subject.name);
                    return (
                      <button
                        key={subject.id}
                        type="button"
                        onClick={() => toggleSubject(subject.name)}
                        aria-pressed={selected}
                        className={`rounded-full border px-2.5 py-1.5 text-[0.7rem] font-medium transition ${
                          selected
                            ? "border-navy bg-navy text-cream"
                            : "border-line bg-white text-ink-soft hover:border-navy/30"
                        } ${profile.subjects.length >= 4 && !selected ? "opacity-50" : ""}`}
                      >
                        {subject.icon} {subject.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-xl border border-line bg-cream/60 p-3.5">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gold-deep">
                  How confident are you in each subject?
                </p>
                <p className="mt-1 text-[0.68rem] text-ink-soft">
                  Be honest — this drives your pathway and the first topics your mentor targets.
                </p>
                <div className="mt-3 space-y-3">
                  {profile.subjects.map((subject) => (
                    <div key={subject}>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-navy-deep">{subject}</span>
                        <span className="text-ink-soft">
                          {confidenceLabels[(profile.confidence[subject] ?? 3) - 1]}
                        </span>
                      </div>
                      <div className="mt-1.5 grid grid-cols-5 gap-1">
                        {[1, 2, 3, 4, 5].map((value) => (
                          <button
                            key={value}
                            type="button"
                            onClick={() =>
                              update("confidence", { ...profile.confidence, [subject]: value })
                            }
                            className={`rounded-md border py-1.5 text-[0.68rem] font-semibold transition ${
                              (profile.confidence[subject] ?? 3) === value
                                ? "border-navy bg-navy text-cream"
                                : "border-line bg-white text-ink-soft"
                            }`}
                          >
                            {value}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  {profile.subjects.length === 0 && (
                    <p className="text-xs text-ink-soft">Select a subject to rate your confidence.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Step 4: study life */}
            <div className={step === 3 ? "space-y-4" : "hidden"}>
              <div className="grid gap-3 sm:grid-cols-2">
                <Field label="Weekly study time you can commit">
                  <select
                    name="studyHours"
                    value={profile.studyHours}
                    onChange={(event) => update("studyHours", event.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select one</option>
                    <option>Under 5 hours</option>
                    <option>5–10 hours</option>
                    <option>11 hours or more</option>
                    <option>I do not know yet</option>
                  </select>
                </Field>
                <Field label="Best study window">
                  <select
                    name="studyWindow"
                    value={profile.studyWindow}
                    onChange={(event) => update("studyWindow", event.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select one</option>
                    <option>Mornings</option>
                    <option>Afternoons</option>
                    <option>Evenings & weekends</option>
                    <option>Late nights</option>
                    <option>Flexible / varies</option>
                  </select>
                </Field>
                <Field label="Current study consistency">
                  <select
                    name="studyConsistency"
                    value={profile.studyConsistency}
                    onChange={(event) => update("studyConsistency", event.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select one</option>
                    <option>I study most days</option>
                    <option>I study a few times a week</option>
                    <option>I study occasionally</option>
                    <option>I do not have a routine yet</option>
                  </select>
                </Field>
                <Field label="Quiet place to study">
                  <select
                    name="quietSpace"
                    value={profile.quietSpace}
                    onChange={(event) => update("quietSpace", event.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select one</option>
                    <option>Yes</option>
                    <option>Sometimes</option>
                    <option>No</option>
                  </select>
                </Field>
                <Field label="Device you can use for CBT practice">
                  <select
                    name="deviceAccess"
                    value={profile.deviceAccess}
                    onChange={(event) => update("deviceAccess", event.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select one</option>
                    <option>Yes — laptop or tablet</option>
                    <option>Yes — smartphone</option>
                    <option>Shared device at home</option>
                    <option>No device — I borrow or use a centre</option>
                  </select>
                </Field>
                <Field label="Internet access">
                  <select
                    name="internetAccess"
                    value={profile.internetAccess}
                    onChange={(event) => update("internetAccess", event.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select one</option>
                    <option>Reliable</option>
                    <option>Intermittent</option>
                    <option>None or rarely</option>
                  </select>
                </Field>
                <Field label="Power supply">
                  <select
                    name="powerAccess"
                    value={profile.powerAccess}
                    onChange={(event) => update("powerAccess", event.target.value)}
                    className={inputClass}
                  >
                    <option value="">Select one</option>
                    <option>Reliable</option>
                    <option>Sometimes</option>
                    <option>Unreliable / seldom</option>
                  </select>
                </Field>
              </div>

              <div>
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink-soft">
                  What makes studying hard right now?
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {studyChallenges.map((challenge) => {
                    const active = profile.studyChallenges.includes(challenge);
                    return (
                      <button
                        key={challenge}
                        type="button"
                        onClick={() => toggleList("studyChallenges", challenge)}
                        aria-pressed={active}
                        className={`rounded-full border px-2.5 py-1.5 text-[0.7rem] transition ${
                          active
                            ? "border-gold bg-gold-soft font-semibold text-gold-deep"
                            : "border-line bg-white text-ink-soft hover:border-navy/30"
                        }`}
                      >
                        {challenge}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 5: support and motivation */}
            <div className={step === 4 ? "space-y-4" : "hidden"}>
              <div>
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink-soft">
                  Support needs (select any that apply)
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {supportOptions.map((option) => {
                    const active = profile.learningSupport.includes(option);
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => toggleList("learningSupport", option)}
                        aria-pressed={active}
                        className={`rounded-full border px-2.5 py-1.5 text-[0.7rem] transition ${
                          active
                            ? "border-emerald bg-emerald-soft font-semibold text-emerald"
                            : "border-line bg-white text-ink-soft hover:border-navy/30"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>

              <Field label="Accommodations or adjustments that would help">
                <textarea
                  name="accommodations"
                  value={profile.accommodations}
                  onChange={(event) => update("accommodations", event.target.value)}
                  rows={2}
                  className={inputClass}
                  placeholder="e.g. large print, extra time in practice, ground-floor venue, sign-language support"
                />
              </Field>

              <Field label="Why does this goal matter to you?">
                <textarea
                  name="motivation"
                  value={profile.motivation}
                  onChange={(event) => update("motivation", event.target.value)}
                  rows={3}
                  className={inputClass}
                  placeholder="Tell your mentor what you are working towards, and why."
                />
              </Field>

              <Field label="What worries you most about UTME or admission?">
                <textarea
                  name="biggestFear"
                  value={profile.biggestFear}
                  onChange={(event) => update("biggestFear", event.target.value)}
                  rows={2}
                  className={inputClass}
                  placeholder="Be honest. This helps us prepare you properly, not scare you."
                />
              </Field>

              <Field label="What do you want mentoring to help you change?">
                <textarea
                  name="mentorshipGoals"
                  value={profile.mentorshipGoals}
                  onChange={(event) => update("mentorshipGoals", event.target.value)}
                  rows={2}
                  className={inputClass}
                  placeholder="e.g. study consistently, stop avoiding Mathematics, decide on a realistic course"
                />
              </Field>
            </div>

            {/* Step 6: mentoring preference, guardian, consent */}
            <div className={step === 5 ? "space-y-4" : "hidden"}>
              <div className="grid gap-3 sm:grid-cols-3">
                <Field label="Preferred language">
                  <select
                    name="preferredLanguage"
                    value={profile.preferredLanguage}
                    onChange={(event) => update("preferredLanguage", event.target.value)}
                    className={inputClass}
                  >
                    <option>English</option>
                    <option>English with Yoruba support</option>
                    <option>English with Igbo support</option>
                    <option>English with Hausa support</option>
                    <option>English with Pidgin support</option>
                  </select>
                </Field>
                <Field label="Mentor preference">
                  <select
                    name="mentorPreference"
                    value={profile.mentorPreference}
                    onChange={(event) => update("mentorPreference", event.target.value)}
                    className={inputClass}
                  >
                    <option>No preference</option>
                    <option>Female mentor</option>
                    <option>Male mentor</option>
                    <option>Mentor from my state or region</option>
                    <option>Mentor studying my target course</option>
                  </select>
                </Field>
                <Field label="Preferred meeting mode">
                  <select
                    name="meetingMode"
                    value={profile.meetingMode}
                    onChange={(event) => update("meetingMode", event.target.value)}
                    className={inputClass}
                  >
                    <option>In person</option>
                    <option>Phone call</option>
                    <option>WhatsApp messages</option>
                    <option>Online meeting</option>
                    <option>Mix of modes</option>
                  </select>
                </Field>
              </div>

              <div className={`rounded-xl border p-3.5 ${minor ? "border-gold bg-gold-soft/50" : "border-line bg-cream/60"}`}>
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink-soft">
                  Guardian details {minor ? "(required — you are under 18)" : "(optional)"}
                </p>
                <div className="mt-2 grid gap-3 sm:grid-cols-3">
                  <Field label="Guardian name">
                    <input
                      name="guardianName"
                      value={profile.guardianName}
                      onChange={(event) => update("guardianName", event.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Guardian phone">
                    <input
                      name="guardianPhone"
                      value={profile.guardianPhone}
                      onChange={(event) => update("guardianPhone", event.target.value)}
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Relationship">
                    <select
                      name="guardianRelation"
                      value={profile.guardianRelation}
                      onChange={(event) => update("guardianRelation", event.target.value)}
                      className={inputClass}
                    >
                      <option value="">Select one</option>
                      <option>Parent</option>
                      <option>Guardian</option>
                      <option>Sibling</option>
                      <option>Other relative</option>
                    </select>
                  </Field>
                </div>
                <label className="mt-3 flex items-start gap-2.5 text-xs leading-relaxed text-ink">
                  <input
                    type="checkbox"
                    name="guardianConsent"
                    checked={profile.guardianConsent}
                    onChange={(event) => update("guardianConsent", event.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-line"
                  />
                  My guardian knows I am enrolling and consents to my participation, mentoring and progress updates.
                </label>
              </div>

              <div className="space-y-2.5 rounded-xl border border-line bg-white p-3.5">
                <label className="flex items-start gap-2.5 text-xs leading-relaxed text-ink">
                  <input
                    type="checkbox"
                    name="consentData"
                    checked={profile.consentData}
                    onChange={(event) => update("consentData", event.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-line"
                  />
                  I consent to I Ascend collecting and using the information above to plan my preparation, match me
                  with a mentor and report anonymised programme results. I understand I can ask to see or correct my
                  data.
                </label>
                <label className="flex items-start gap-2.5 text-xs leading-relaxed text-ink">
                  <input
                    type="checkbox"
                    name="consentCode"
                    checked={profile.consentCode}
                    onChange={(event) => update("consentCode", event.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-line"
                  />
                  I accept the learner code of conduct: honest practice, respectful conduct, no examination
                  malpractice, and I will tell a mentor if I am struggling or unsafe.
                </label>
                <p className="text-[0.65rem] leading-relaxed text-ink-soft">
                  Read the{" "}
                  <Link href="/framework/safeguarding-data" className="font-semibold text-navy hover:underline">
                    safeguarding and data protection standard
                  </Link>{" "}
                  that governs this information.
                </p>
              </div>

              <div className="rounded-xl bg-navy p-4 text-cream">
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-gold">
                  Your provisional plan
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-gold px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-wide text-navy-deep">
                    Pathway {insights.pathway}
                  </span>
                  <span className="text-[0.72rem] text-cream/75">{pathwayDescriptions[insights.pathway].label}</span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-cream/75">{insights.pathwayReason}</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
                    <p className="text-[0.58rem] uppercase tracking-[0.1em] text-cream/50">Priority actions</p>
                    <ul className="mt-1.5 space-y-1 text-[0.68rem] leading-snug text-cream/80">
                      {insights.mentorFocus.slice(0, 3).map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
                    <p className="text-[0.58rem] uppercase tracking-[0.1em] text-cream/50">Flagged for support</p>
                    <ul className="mt-1.5 space-y-1 text-[0.68rem] leading-snug text-cream/80">
                      {insights.riskFlags.length === 0 ? (
                        <li>• Nothing flagged yet — keep the answers honest.</li>
                      ) : (
                        insights.riskFlags.slice(0, 3).map((item) => <li key={item}>• {item}</li>)
                      )}
                    </ul>
                  </div>
                </div>
                <p className="mt-2 text-[0.62rem] text-cream/50">
                  Provisional until baseline assessment and combination verification. No score or admission is
                  guaranteed.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2">
            <button
              type="button"
              onClick={goBack}
              disabled={step === 0}
              className="rounded-full border border-line bg-white px-4 py-2.5 text-xs font-semibold text-ink-soft disabled:opacity-40"
            >
              ← Back
            </button>
            <div className="flex items-center gap-2">
              <span className="text-[0.68rem] text-ink-soft">
                {step + 1} / {steps.length}
              </span>
              {step < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={goNext}
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-xs font-semibold text-cream transition hover:bg-navy-deep"
                >
                  Continue
                  <ArrowIcon className="h-3.5 w-3.5" />
                </button>
              ) : (
                <SubmitButton mode={mode} />
              )}
            </div>
          </div>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-3">
            <div className="rounded-2xl border border-line bg-white p-4">
              <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-ink-soft">
                Live mentorship profile
              </p>
              <p className="mt-1 font-display text-2xl text-navy-deep">{insights.completeness}%</p>
              <div className="mt-1.5">
                <ProgressBar value={insights.completeness} tone="emerald" height="h-1.5" label="Profile completeness" />
              </div>
              <div className="mt-3 space-y-2 text-[0.7rem]">
                <div>
                  <p className="font-semibold text-navy-deep">Pathway</p>
                  <p className="text-ink-soft">{pathwayDescriptions[insights.pathway].label}</p>
                </div>
                <div>
                  <p className="font-semibold text-navy-deep">Your subjects</p>
                  <p className="text-ink-soft">{profile.subjects.join(", ") || "None selected"}</p>
                </div>
                <div>
                  <p className="font-semibold text-navy-deep">Flags</p>
                  <p className="text-ink-soft">{insights.riskFlags.length} support flag(s)</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-line bg-gold-soft/60 p-4 text-[0.7rem] leading-relaxed text-[#6b4a0d]">
              Everything here is used to plan your preparation and match a mentor. It is not used to judge you. Answer
              honestly and you will get support that fits your real life.
            </div>
            <div className="rounded-2xl border border-line bg-white p-4 text-[0.68rem] leading-relaxed text-ink-soft">
              Your data is handled under our{" "}
              <Link href="/privacy" className="font-semibold text-navy hover:underline">
                privacy notice
              </Link>{" "}
              and the{" "}
              <Link href="/framework/safeguarding-data" className="font-semibold text-navy hover:underline">
                safeguarding and data protection standard
              </Link>
              . Minors require guardian consent.
            </div>
          </div>
        </aside>
      </div>
    </form>
  );
}

function SubmitButton({ mode }: { mode: "create" | "edit" }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center gap-2 rounded-full bg-emerald px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-emerald/90 disabled:opacity-60"
    >
      {pending ? "Saving your profile…" : mode === "create" ? "Create my profile" : "Save my profile"}
      {!pending && <ArrowIcon className="h-3.5 w-3.5" />}
    </button>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-[0.65rem] leading-relaxed text-ink-soft/80">{hint}</span>}
    </label>
  );
}
