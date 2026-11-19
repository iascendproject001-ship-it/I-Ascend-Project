import { requireAdmin } from "@/lib/staff-auth";
import { saveSiteSettings } from "@/lib/staff-actions";
import { getSettings } from "@/lib/settings";
import { Badge } from "@/components/ui";

export const dynamic = "force-dynamic";
export const metadata = { title: "Programme settings" };

const inputClass =
  "mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm text-ink placeholder:text-ink-soft/50";

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

export default async function StaffSettingsPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; error?: string; notice?: string }>;
}) {
  await requireAdmin();
  const settings = await getSettings();
  const { saved, error, notice } = await searchParams;

  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <div>
        <Badge tone="gold">Programme settings · administrators only</Badge>
        <h1 className="mt-2 font-display text-3xl text-navy-deep">Cohort, deadline & contacts.</h1>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          Everything here appears live across the public site — the application form, the flyer, the privacy
          page and the learner dashboard. Change carefully; every save is effective immediately.
        </p>
      </div>

      {saved === "1" && (
        <p className="rounded-xl border border-emerald/20 bg-emerald-soft px-4 py-3 text-sm font-medium text-emerald">
          Settings saved and published to the site.
        </p>
      )}
      {notice && (
        <p className="rounded-xl border border-gold/40 bg-gold-soft/60 px-4 py-3 text-sm font-medium text-[#6b4a0d]">
          {notice}
        </p>
      )}
      {error && (
        <p className="rounded-xl bg-[#fdecec] px-4 py-3 text-sm font-medium text-[#a12b2b]">{error}</p>
      )}

      <form action={saveSiteSettings} className="space-y-5">
        <section className="card space-y-4 p-5">
          <h2 className="font-display text-xl text-navy-deep">Confirmed cohort & application window</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Cohort name" hint="Shown on the application form, dashboard and flyer.">
              <input
                name="cohort_name"
                defaultValue={settings.cohortName}
                required
                className={inputClass}
                placeholder="e.g. 2027 Cycle A — Pilot Cohort"
              />
            </Field>
            <Field label="Application deadline" hint="Leave empty if no fixed date is confirmed yet.">
              <input
                name="application_deadline"
                type="date"
                defaultValue={settings.applicationDeadline}
                className={inputClass}
              />
            </Field>
          </div>
          <label className="flex items-start gap-2.5 rounded-xl border border-line bg-cream/60 p-3.5 text-sm text-ink">
            <input
              type="checkbox"
              name="applications_open"
              defaultChecked={settings.applicationsOpen}
              className="mt-0.5 h-4 w-4 rounded border-line"
            />
            <span>
              <strong>Applications are open.</strong> Untick to close applications immediately — the form is
              replaced with a closed notice and the support contact.
            </span>
          </label>
        </section>

        <section className="card space-y-4 p-5">
          <h2 className="font-display text-xl text-navy-deep">Programme support contacts</h2>
          <p className="-mt-2 text-xs text-ink-soft">
            Shown on the application page, privacy page and flyer so applicants can always reach a human.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Support phone">
              <input name="support_phone" defaultValue={settings.supportPhone} className={inputClass} placeholder="080..." />
            </Field>
            <Field label="WhatsApp line">
              <input name="support_whatsapp" defaultValue={settings.supportWhatsapp} className={inputClass} placeholder="080..." />
            </Field>
            <Field label="Support email" hint="Use an official programme address, not a personal inbox.">
              <input name="support_email" type="email" defaultValue={settings.supportEmail} className={inputClass} placeholder="hello@…" />
            </Field>
          </div>
        </section>

        <section className="card space-y-4 p-5">
          <h2 className="font-display text-xl text-navy-deep">Social media</h2>
          <p className="-mt-2 text-xs text-ink-soft">
            Shown as follow buttons in the site footer. Paste the full profile address for each handle.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Facebook page URL">
              <input name="facebook_url" defaultValue={settings.facebookUrl} className={inputClass} placeholder="https://facebook.com/…" />
            </Field>
            <Field label="Instagram profile URL">
              <input name="instagram_url" defaultValue={settings.instagramUrl} className={inputClass} placeholder="https://instagram.com/…" />
            </Field>
          </div>
        </section>

        <section className="card space-y-4 p-5">
          <h2 className="font-display text-xl text-navy-deep">Safeguarding contacts</h2>
          <p className="-mt-2 text-xs text-ink-soft">
            Published on the privacy page and shown to guardians. Must be a monitored line answered within one
            working day; urgent concerns go straight to the statutory services per policy.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <Field label="Focal point name">
              <input name="safeguarding_name" defaultValue={settings.safeguardingName} className={inputClass} />
            </Field>
            <Field label="Safeguarding phone">
              <input name="safeguarding_phone" defaultValue={settings.safeguardingPhone} className={inputClass} placeholder="080..." />
            </Field>
            <Field label="Safeguarding email">
              <input name="safeguarding_email" type="email" defaultValue={settings.safeguardingEmail} className={inputClass} placeholder="safety@…" />
            </Field>
          </div>
        </section>

        <section className="card space-y-4 p-5">
          <h2 className="font-display text-xl text-navy-deep">Privacy notice</h2>
          <p className="-mt-2 text-xs text-ink-soft">
            Published at /privacy and linked from the application consent step. Edit in plain language; keep
            the purposes, rights, retention and regulator route.
          </p>
          <Field label="Privacy notice text">
            <textarea name="privacy_notice" rows={14} defaultValue={settings.privacyNotice} className={`${inputClass} leading-relaxed`} />
          </Field>
        </section>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-[0.7rem] text-ink-soft">
            Saving republishes the application form, flyer, privacy page and dashboard immediately.
          </p>
          <button
            type="submit"
            className="rounded-full bg-navy px-6 py-3 text-xs font-semibold text-cream transition hover:bg-navy-deep"
          >
            Save & publish settings
          </button>
        </div>
      </form>
    </div>
  );
}
