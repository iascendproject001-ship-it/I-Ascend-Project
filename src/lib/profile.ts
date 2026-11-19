/**
 * Participant profiling model and deterministic mentorship insights.
 * Pure functions so the same logic runs in the onboarding wizard (live preview)
 * and on the server (stored insight record).
 */

export type OLevelResult = { subject: string; grade: string };
export type UtmeAttempt = { year: string; score: string; outcome: string; course: string };

export type ProfileInput = {
  phone: string;
  altContact: string;
  gender: string;
  /** Individual age in completed years. Never a band or range. */
  age: number;
  dateOfBirth: string;
  location: string;
  state: string;
  referralSource: string;
  schoolName: string;
  schoolType: string;
  graduationYear: string;
  olevelStatus: string;
  olevelSitting: string;
  olevelResults: OLevelResult[];
  firstGeneration: string;
  utmeStatus: string;
  attempts: UtmeAttempt[];
  subjects: string[];
  confidence: Record<string, number>;
  targetCourse: string;
  targetInstitution: string;
  altCourse: string;
  altInstitution: string;
  studyHours: string;
  studyWindow: string;
  studyConsistency: string;
  studyChallenges: string[];
  deviceAccess: string;
  internetAccess: string;
  powerAccess: string;
  quietSpace: string;
  learningSupport: string[];
  accommodations: string;
  motivation: string;
  biggestFear: string;
  mentorshipGoals: string;
  preferredLanguage: string;
  mentorPreference: string;
  meetingMode: string;
  guardianName: string;
  guardianPhone: string;
  guardianRelation: string;
  guardianConsent: boolean;
  consentData: boolean;
  consentCode: boolean;
};

export type ProfileInsights = {
  pathway: "A+" | "A" | "B" | "C" | "R" | "E";
  pathwayLabel: string;
  pathwayReason: string;
  riskFlags: string[];
  strengths: string[];
  mentorFocus: string[];
  mentorBrief: string;
  completeness: number;
  confidenceAverage: number;
  weakSubjects: string[];
  strongSubjects: string[];
};

export const pathwayDescriptions: Record<ProfileInsights["pathway"], { label: string; intensity: string }> = {
  "A+": {
    label: "A+ · Stretch pathway",
    intensity: "Extension clinics, competition-level accuracy and timed pressure.",
  },
  A: {
    label: "A · Proficient pathway",
    intensity: "Core teaching with a strong emphasis on technique and speed.",
  },
  B: {
    label: "B · Developing pathway",
    intensity: "Core teaching plus targeted small-group remediation.",
  },
  C: {
    label: "C · Foundational pathway",
    intensity: "Prerequisite rebuilding before extension topics; closer mentoring.",
  },
  R: {
    label: "R · Repeat-candidate pathway",
    intensity: "Diagnosis of the previous attempt, then targeted remediation and strategy correction.",
  },
  E: {
    label: "E · Access pathway",
    intensity: "Adapted delivery and formats with the same academic standard.",
  },
};

export const emptyProfile: ProfileInput = {
  phone: "",
  altContact: "",
  gender: "",
  age: 0,
  dateOfBirth: "",
  location: "",
  state: "",
  referralSource: "",
  schoolName: "",
  schoolType: "",
  graduationYear: "",
  olevelStatus: "",
  olevelSitting: "One sitting",
  olevelResults: [
    { subject: "English Language", grade: "" },
    { subject: "Mathematics", grade: "" },
    { subject: "", grade: "" },
    { subject: "", grade: "" },
    { subject: "", grade: "" },
  ],
  firstGeneration: "",
  utmeStatus: "",
  attempts: [],
  subjects: ["English Language"],
  confidence: { "English Language": 3 },
  targetCourse: "",
  targetInstitution: "",
  altCourse: "",
  altInstitution: "",
  studyHours: "",
  studyWindow: "",
  studyConsistency: "",
  studyChallenges: [],
  deviceAccess: "",
  internetAccess: "",
  powerAccess: "",
  quietSpace: "",
  learningSupport: [],
  accommodations: "",
  motivation: "",
  biggestFear: "",
  mentorshipGoals: "",
  preferredLanguage: "English",
  mentorPreference: "No preference",
  meetingMode: "In person",
  guardianName: "",
  guardianPhone: "",
  guardianRelation: "",
  guardianConsent: false,
  consentData: false,
  consentCode: false,
};

function filled(value: string | undefined | null) {
  return typeof value === "string" && value.trim().length > 0;
}

export function ageFromDateOfBirth(dateOfBirth: string, today = new Date()) {
  if (!dateOfBirth) return 0;
  const birth = new Date(dateOfBirth);
  if (Number.isNaN(birth.getTime())) return 0;
  const years = today.getFullYear() - birth.getFullYear();
  const hadBirthday =
    today.getMonth() > birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());
  return Math.max(0, years - (hadBirthday ? 0 : 1));
}

/** Age is captured per year in the form; date of birth is only a fallback check. */
export function resolveAge(profile: Pick<ProfileInput, "age" | "dateOfBirth">) {
  if (Number.isFinite(profile.age) && profile.age >= 10) return profile.age;
  return ageFromDateOfBirth(profile.dateOfBirth);
}

export function isMinor(profile: Pick<ProfileInput, "age" | "dateOfBirth">) {
  const age = resolveAge(profile);
  return age > 0 && age < 18;
}

export function deriveProfileInsights(profile: ProfileInput): ProfileInsights {
  const confidenceValues = profile.subjects.map((subject) => profile.confidence[subject] ?? 3);
  const confidenceAverage =
    confidenceValues.length > 0
      ? confidenceValues.reduce((sum, value) => sum + value, 0) / confidenceValues.length
      : 0;

  const weakSubjects = profile.subjects.filter((subject) => (profile.confidence[subject] ?? 3) <= 2);
  const strongSubjects = profile.subjects.filter((subject) => (profile.confidence[subject] ?? 3) >= 4);

  const repeat = profile.utmeStatus === "Repeat candidate";
  const needsAccessSupport =
    profile.learningSupport.some((item) =>
      [
        "Visual impairment",
        "Hearing impairment",
        "Learning difficulty",
        "Physical disability",
        "Long-term health condition",
      ].includes(item),
    ) ||
    profile.deviceAccess === "No device — I borrow or use a centre" ||
    profile.internetAccess === "None or rarely";
  const foundational =
    confidenceAverage <= 2.4 ||
    weakSubjects.length >= 3 ||
    profile.studyConsistency === "I study occasionally" ||
    profile.studyConsistency === "I do not have a routine yet";

  let pathway: ProfileInsights["pathway"] = "A";
  let pathwayReason = "";

  if (needsAccessSupport) {
    pathway = "E";
    pathwayReason =
      "Access needs were declared, so delivery is adapted (formats, timing, devices) while holding the same academic standard.";
  } else if (repeat) {
    pathway = "R";
    pathwayReason =
      "You have sat UTME before, so preparation starts with a diagnosis of the previous attempt rather than from the beginning.";
  } else if (foundational) {
    pathway = "C";
    pathwayReason =
      "Confidence and study routine indicate foundational gaps that must be closed before extension topics.";
  } else if (confidenceAverage >= 4.2 && weakSubjects.length === 0) {
    pathway = "A+";
    pathwayReason =
      "Strong self-reported command across all four subjects, so the priority is accuracy and speed at competitive standard.";
  } else if (confidenceAverage >= 3.5) {
    pathway = "A";
    pathwayReason =
      "A solid base with room to sharpen technique; teaching focuses on timing, elimination and error analysis.";
  } else {
    pathway = "B";
    pathwayReason =
      "Moderate gaps across some subjects; targeted small-group remediation runs alongside core teaching.";
  }

  const riskFlags: string[] = [];
  if (profile.deviceAccess === "No device — I borrow or use a centre") {
    riskFlags.push("No personal device — schedule shared-device CBT sessions.");
  }
  if (profile.internetAccess === "None or rarely") {
    riskFlags.push("Limited connectivity — provide printed packs and offline lesson routes.");
  }
  if (profile.powerAccess === "Unreliable / seldom") {
    riskFlags.push("Unreliable power — prioritise printable study materials.");
  }
  if (profile.quietSpace === "No" || profile.quietSpace === "Sometimes") {
    riskFlags.push("Study environment is not consistently quiet — agree a study place and time.");
  }
  if (weakSubjects.length > 0) {
    riskFlags.push(`Low confidence in ${weakSubjects.join(", ")} — baseline and early remediation required.`);
  }
  if (repeat && profile.attempts.length > 0) {
    const latest = profile.attempts[0];
    riskFlags.push(
      `Previous UTME attempt${latest?.year ? ` (${latest.year})` : ""}${
        latest?.score ? ` with a score of ${latest.score}` : ""
      } — diagnose cause of shortfall before repeating the same strategy.`,
    );
  }
  if (profile.olevelStatus === "Not yet — awaiting results" || profile.olevelStatus === "No, I need to resit") {
    riskFlags.push("O'level credits are not yet secure — verify requirements and plan a resit if needed.");
  }
  if (profile.studyChallenges.includes("I have caring or work responsibilities")) {
    riskFlags.push("Competing responsibilities — build a realistic timetable and protect study blocks.");
  }
  if (profile.studyChallenges.includes("I cannot afford materials")) {
    riskFlags.push("Financial barrier to materials — route to the lending pool and free resources.");
  }
  if (profile.biggestFear.trim().length > 0) {
    riskFlags.push("Examination anxiety disclosed — include psychosocial readiness support.");
  }
  if (profile.firstGeneration === "Yes") {
    riskFlags.push("First-generation applicant — provide extra admissions-process guidance to the household.");
  }
  if (isMinor(profile) && !profile.guardianConsent) {
    riskFlags.push("Participant is under 18 — guardian consent is required before mentoring begins.");
  }
  if (profile.targetCourse.trim().length > 0 && profile.targetInstitution.trim().length === 0) {
    riskFlags.push("Course named without an institution — verify the subject combination and requirements.");
  }

  const strengths: string[] = [];
  if (strongSubjects.length > 0) strengths.push(`Confident in ${strongSubjects.join(", ")}.`);
  if (profile.studyHours === "11 hours or more") strengths.push("Already commits strong weekly study time.");
  if (profile.studyConsistency === "I study most days") strengths.push("Has an established daily study habit.");
  if (profile.quietSpace === "Yes") strengths.push("Has a quiet place to study.");
  if (profile.deviceAccess === "Yes — smartphone" || profile.deviceAccess === "Yes — laptop or tablet") {
    strengths.push("Can access the CBT platform independently.");
  }
  if (profile.olevelStatus === "Yes — five credits secured") strengths.push("O'level credits are already secured.");
  if (profile.guardianConsent) strengths.push("Guardian support and consent are in place.");
  if (profile.targetCourse.trim().length > 0) strengths.push("Has a named target course to aim at.");
  if (profile.motivation.trim().length > 0) strengths.push("Articulates a personal motivation for the goal.");

  const mentorFocus: string[] = [];
  if (weakSubjects.length > 0) {
    mentorFocus.push(`Start mentoring with ${weakSubjects[0]}: agree two practice tasks and check them next session.`);
  }
  mentorFocus.push(
    confidenceAverage >= 4
      ? "Push accuracy under timed conditions; review why any question was missed, not just the answer."
      : "Set a weekly retrieval schedule for the four subjects and review the study log honestly.",
  );
  if (profile.studyChallenges.length > 0) {
    mentorFocus.push(`Remove the stated barrier: "${profile.studyChallenges[0]}". Agree one workable action.`);
  }
  if (repeat) {
    mentorFocus.push("Review the previous attempt: what was the score, combination and institution strategy?");
  }
  if (isMinor(profile)) {
    mentorFocus.push("Keep guardian contact current and hold mentoring in supervised or group settings.");
  }
  mentorFocus.push("Confirm the target combination and institution requirements against the current JAMB brochure.");

  const subjectList = profile.subjects.join(", ") || "subjects not yet selected";
  const mentorBrief = [
    `${profile.targetCourse || "Course not named"}${profile.targetInstitution ? ` at ${profile.targetInstitution}` : ""}`.trim(),
    `UTME subjects: ${subjectList}.`,
    `Self-reported confidence averages ${confidenceAverage.toFixed(1)}/5${
      weakSubjects.length > 0 ? `, with ${weakSubjects.join(" and ")} flagged as weak` : ""
    }.`,
    `Recommended pathway: ${pathway} (${pathwayDescriptions[pathway].label}).`,
    resolveAge(profile) > 0 ? `Age: ${resolveAge(profile)} years (recorded individually).` : "",
    profile.utmeStatus ? `UTME status: ${profile.utmeStatus}.` : "",
    profile.olevelStatus ? `O'level status: ${profile.olevelStatus}.` : "",
    profile.studyHours ? `Available study time: ${profile.studyHours} per week.` : "",
    profile.studyChallenges.length > 0
      ? `Barriers disclosed: ${profile.studyChallenges.join("; ")}.`
      : "",
    profile.biggestFear ? `Self-declared worry: "${profile.biggestFear}".` : "",
    profile.learningSupport.length > 0
      ? `Support needs: ${profile.learningSupport.join("; ")}${profile.accommodations ? ` — ${profile.accommodations}` : ""}.`
      : "",
    `Mentoring preference: ${profile.mentorPreference}, ${profile.meetingMode.toLowerCase()}, in ${profile.preferredLanguage}.`,
  ]
    .filter(Boolean)
    .join(" ");

  const completenessFields = [
    profile.age >= 10 ? "ok" : "",
    profile.phone,
    profile.location,
    profile.gender,
    profile.schoolName,
    profile.olevelStatus,
    profile.utmeStatus,
    profile.subjects.length >= 4 ? "ok" : "",
    profile.targetCourse,
    profile.targetInstitution,
    profile.studyHours,
    profile.studyConsistency,
    profile.deviceAccess,
    profile.motivation,
    profile.mentorshipGoals,
    profile.consentData ? "ok" : "",
    profile.consentCode ? "ok" : "",
  ];
  const completeness = Math.round(
    (completenessFields.filter((value) => filled(value)).length / completenessFields.length) * 100,
  );

  return {
    pathway,
    pathwayLabel: pathwayDescriptions[pathway].label,
    pathwayReason,
    riskFlags,
    strengths,
    mentorFocus: mentorFocus.slice(0, 5),
    mentorBrief,
    completeness,
    confidenceAverage,
    weakSubjects,
    strongSubjects,
  };
}

export function validateProfileStep(step: number, profile: ProfileInput): string[] {
  const errors: string[] = [];
  if (step === 0) {
    if (!Number.isFinite(profile.age) || profile.age < 10 || profile.age > 100) {
      errors.push("Enter your age as a whole number between 10 and 100 — one year, not a range.");
    }
    if (profile.gender !== "Female" && profile.gender !== "Male") {
      errors.push("Select your gender: Male or Female.");
    }
    if (!filled(profile.phone)) errors.push("A phone or WhatsApp number is required so we can reach you.");
    if (!filled(profile.location)) errors.push("Tell us your town or city.");
    if (!filled(profile.targetCourse)) errors.push("Name at least one target course.");
    if (!filled(profile.targetInstitution)) errors.push("Name at least one target institution.");
  }
  if (step === 1) {
    if (!filled(profile.schoolName)) errors.push("Tell us the school you attended or attend.");
    if (!filled(profile.olevelStatus)) errors.push("Select your O'level status.");
    const named = profile.olevelResults.filter((result) => filled(result.subject) && filled(result.grade));
    if (named.length < 5 && profile.olevelStatus === "Yes — five credits secured") {
      errors.push("List the five O'level credits you hold, with grades.");
    }
  }
  if (step === 2) {
    if (!filled(profile.utmeStatus)) errors.push("Tell us whether this is your first UTME attempt.");
    if (!profile.subjects.includes("English Language")) errors.push("English Language is compulsory.");
    if (profile.subjects.length !== 4) errors.push("Select exactly four UTME subjects, including English Language.");
    if (profile.utmeStatus === "Repeat candidate" && profile.attempts.length === 0) {
      errors.push("Add at least one previous UTME attempt (year and score if known).");
    }
  }
  if (step === 3) {
    if (!filled(profile.studyHours)) errors.push("Select the study time you can realistically commit.");
    if (!filled(profile.studyConsistency)) errors.push("Describe your current study consistency.");
    if (!filled(profile.deviceAccess)) errors.push("Tell us what device you can use.");
    if (!filled(profile.internetAccess)) errors.push("Tell us about your internet access.");
  }
  if (step === 5) {
    if (!profile.consentData) errors.push("Consent to data processing is required to enrol.");
    if (!profile.consentCode) errors.push("You must accept the learner code of conduct.");
    if (isMinor(profile) && !profile.guardianConsent) {
      errors.push("A guardian must provide consent for a participant under 18.");
    }
  }
  return errors;
}

export const gradeOptions = ["A1", "B2", "B3", "C4", "C5", "C6", "D7", "E8", "F9", "Pending"];
export const confidenceLabels = ["Very weak", "Weak", "Unsure", "Good", "Very strong"];
