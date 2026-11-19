import Link from "next/link";
import type { Metadata } from "next";
import { MarketingFooter, MarketingHeader } from "@/components/marketing";
import { Badge } from "@/components/ui";
import { getSettings } from "@/lib/settings";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Privacy notice",
  description: "How the I Ascend Project collects, uses, stores and protects participant information.",
};

export default async function PrivacyPage() {
  const settings = await getSettings();
  const paragraphs = settings.privacyNotice
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  const hasSupport = settings.supportPhone || settings.supportEmail || settings.supportWhatsapp;
  const hasSafeguarding =
    settings.safeguardingName || settings.safeguardingPhone || settings.safeguardingEmail;

  return (
    <div className="min-h-screen bg-cream">
      <MarketingHeader />

      <main className="mx-auto w-full max-w-3xl px-5 py-10 sm:px-8 lg:py-14">
        <Badge tone="gold">Participant privacy</Badge>
        <h1 className="mt-3 font-display text-4xl leading-tight tracking-tight text-navy-deep">
          Privacy notice
        </h1>
        <p className="mt-2 text-sm text-ink-soft">
          {settings.cohortName} · This notice is linked from the application form and governs all
          participant information.
        </p>

        <div className="card mt-6 space-y-4 p-5 sm:p-7">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-[0.94rem] leading-relaxed text-ink">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="card p-5">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gold-deep">
              Programme support
            </p>
            {hasSupport ? (
              <ul className="mt-2 space-y-1.5 text-sm text-ink">
                {settings.supportPhone && <li>Phone: {settings.supportPhone}</li>}
                {settings.supportWhatsapp && <li>WhatsApp: {settings.supportWhatsapp}</li>}
                {settings.supportEmail && <li>Email: {settings.supportEmail}</li>}
              </ul>
            ) : (
              <p className="mt-2 text-sm text-ink-soft">
                Support contacts are published here at launch. Meanwhile, ask your school or community
                coordinator.
              </p>
            )}
          </div>
          <div className="card p-5">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-gold-deep">
              Safeguarding contact
            </p>
            {hasSafeguarding ? (
              <ul className="mt-2 space-y-1.5 text-sm text-ink">
                {settings.safeguardingName && <li>Focal point: {settings.safeguardingName}</li>}
                {settings.safeguardingPhone && <li>Phone: {settings.safeguardingPhone}</li>}
                {settings.safeguardingEmail && <li>Email: {settings.safeguardingEmail}</li>}
              </ul>
            ) : (
              <p className="mt-2 text-sm text-ink-soft">
                The safeguarding contact is published here at launch. In an emergency, contact local
                emergency services first.
              </p>
            )}
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-ink-soft">
          <Link href="/start" className="font-semibold text-navy hover:underline">
            Continue to the application →
          </Link>
        </p>
      </main>

      <MarketingFooter />
    </div>
  );
}
