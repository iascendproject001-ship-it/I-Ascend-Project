import { cache } from "react";
import { db } from "@/db";
import { siteSettings } from "@/db/schema";
import { ensureSeeded } from "@/db/seed";

export type SiteSettings = {
  cohortName: string;
  applicationsOpen: boolean;
  applicationDeadline: string;
  supportPhone: string;
  supportWhatsapp: string;
  supportEmail: string;
  safeguardingName: string;
  safeguardingPhone: string;
  safeguardingEmail: string;
  facebookUrl: string;
  instagramUrl: string;
  privacyNotice: string;
};

export const SETTING_DEFAULTS: Record<keyof SiteSettings, string> = {
  cohortName: "2027 Cycle A — Pilot Cohort",
  applicationsOpen: "true",
  applicationDeadline: "",
  supportPhone: "",
  supportWhatsapp: "",
  supportEmail: "",
  safeguardingName: "",
  safeguardingPhone: "",
  safeguardingEmail: "",
  facebookUrl: "",
  instagramUrl: "",
  privacyNotice: "",
};

export const DEFAULT_PRIVACY_NOTICE = `The I Ascend Project collects the information on the application form — your identity and contact details, education history, UTME subjects and confidence, study conditions, support needs and mentoring preferences — for one purpose only: to plan your preparation, match you with a mentor, and report anonymised programme results.

The lawful basis for processing is your consent, and where you are under 18, the consent of your parent or guardian. You may withdraw consent at any time by contacting the programme; withdrawal does not affect support already delivered.

Your full profile is visible only to your assigned mentor, the academic lead and authorised programme staff. We never sell learner information and never share it for marketing. Aggregate, anonymised statistics may be published in programme reports; small numbers are suppressed so no individual can be identified.

Records are kept for the programme cycle plus three years for academic records and consent, then deleted or anonymised, in line with the programme's retention schedule and the Nigeria Data Protection Act. You may ask to see, correct or erase your personal data at any time by contacting the programme office — we will respond within the time required by law.

Photographs, names and personal stories are used publicly only with separate, specific, revocable consent. Safeguarding records are stored separately with restricted access.

If you have a concern about your data, contact the programme office. If it is not resolved, you may contact the Nigeria Data Protection Commission.`;

const KEY_MAP: Record<string, keyof SiteSettings> = {
  cohort_name: "cohortName",
  applications_open: "applicationsOpen",
  application_deadline: "applicationDeadline",
  support_phone: "supportPhone",
  support_whatsapp: "supportWhatsapp",
  support_email: "supportEmail",
  safeguarding_name: "safeguardingName",
  safeguarding_phone: "safeguardingPhone",
  safeguarding_email: "safeguardingEmail",
  facebook_url: "facebookUrl",
  instagram_url: "instagramUrl",
  privacy_notice: "privacyNotice",
};

export const getSettings = cache(async (): Promise<SiteSettings> => {
  await ensureSeeded();
  const rows = await db.select().from(siteSettings);
  const merged: Record<string, string> = {};
  for (const row of rows) merged[row.key] = row.value;

  const pick = (key: string, fallback: string) =>
    typeof merged[key] === "string" && merged[key].length > 0 ? merged[key] : fallback;

  return {
    cohortName: pick("cohort_name", SETTING_DEFAULTS.cohortName),
    applicationsOpen: pick("applications_open", "true") === "true",
    applicationDeadline: merged["application_deadline"] ?? "",
    supportPhone: merged["support_phone"] ?? "",
    supportWhatsapp: merged["support_whatsapp"] ?? "",
    supportEmail: merged["support_email"] ?? "",
    safeguardingName: merged["safeguarding_name"] ?? "",
    safeguardingPhone: merged["safeguarding_phone"] ?? "",
    safeguardingEmail: merged["safeguarding_email"] ?? "",
    facebookUrl: merged["facebook_url"] ?? "",
    instagramUrl: merged["instagram_url"] ?? "",
    privacyNotice: pick("privacy_notice", DEFAULT_PRIVACY_NOTICE),
  };
});

export function settingEntries(settings: SiteSettings): { key: string; value: string }[] {
  const reverse = Object.fromEntries(Object.entries(KEY_MAP).map(([dbKey, appKey]) => [appKey, dbKey]));
  return (Object.keys(reverse) as (keyof SiteSettings)[]).map((appKey) => ({
    key: reverse[appKey],
    value:
      appKey === "applicationsOpen"
        ? String(settings[appKey])
        : (settings[appKey] as string),
  }));
}

export function deadlineState(deadline: string, now = new Date()) {
  if (!deadline) return { hasDeadline: false, isPast: false, daysLeft: 0, label: "" };
  const date = new Date(`${deadline}T23:59:59`);
  if (Number.isNaN(date.getTime())) return { hasDeadline: false, isPast: false, daysLeft: 0, label: "" };
  const daysLeft = Math.ceil((date.getTime() - now.getTime()) / 86_400_000);
  const label = new Intl.DateTimeFormat("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
  return { hasDeadline: true, isPast: daysLeft < 0, daysLeft: Math.max(0, daysLeft), label };
}
