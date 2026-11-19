import type { LearnerProfile } from "@/db/schema";
import { emptyProfile, type ProfileInput } from "@/lib/profile";

/** Convert a stored profile row into the editable wizard shape. */
export function toProfileInput(row: LearnerProfile | null): ProfileInput {
  if (!row) return emptyProfile;
  return {
    phone: row.phone,
    altContact: row.altContact,
    gender: row.gender,
    age: row.age,
    dateOfBirth: row.dateOfBirth,
    location: row.location,
    state: row.state,
    referralSource: row.referralSource,
    schoolName: row.schoolName,
    schoolType: row.schoolType,
    graduationYear: row.graduationYear,
    olevelStatus: row.olevelStatus,
    olevelSitting: row.olevelSitting || emptyProfile.olevelSitting,
    olevelResults: row.olevelResults.length > 0 ? row.olevelResults : emptyProfile.olevelResults,
    firstGeneration: row.firstGeneration,
    utmeStatus: row.utmeStatus,
    attempts: row.attempts,
    subjects: row.subjects.length > 0 ? row.subjects : emptyProfile.subjects,
    confidence: row.confidence,
    targetCourse: row.targetCourse,
    targetInstitution: row.targetInstitution,
    altCourse: row.altCourse,
    altInstitution: row.altInstitution,
    studyHours: row.studyHours,
    studyWindow: row.studyWindow,
    studyConsistency: row.studyConsistency,
    studyChallenges: row.studyChallenges,
    deviceAccess: row.deviceAccess,
    internetAccess: row.internetAccess,
    powerAccess: row.powerAccess,
    quietSpace: row.quietSpace,
    learningSupport: row.learningSupport,
    accommodations: row.accommodations,
    motivation: row.motivation,
    biggestFear: row.biggestFear,
    mentorshipGoals: row.mentorshipGoals,
    preferredLanguage: row.preferredLanguage,
    mentorPreference: row.mentorPreference,
    meetingMode: row.meetingMode,
    guardianName: row.guardianName,
    guardianPhone: row.guardianPhone,
    guardianRelation: row.guardianRelation,
    guardianConsent: row.guardianConsent === 1,
    consentData: row.consentData === 1,
    consentCode: row.consentCode === 1,
  };
}

export function withGoalDefaults(
  profile: ProfileInput,
  goal: { targetCourse: string; targetInstitution: string; state: string; studyWindow: string },
): ProfileInput {
  return {
    ...profile,
    targetCourse: profile.targetCourse || goal.targetCourse,
    targetInstitution: profile.targetInstitution || goal.targetInstitution,
    state: profile.state || goal.state,
    studyWindow: profile.studyWindow || goal.studyWindow,
  };
}
