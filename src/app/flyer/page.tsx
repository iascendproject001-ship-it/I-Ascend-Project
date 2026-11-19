import Link from "next/link";
import type { Metadata } from "next";
import { headers } from "next/headers";
import QRCode from "qrcode";
import { MarketingFooter, MarketingHeader } from "@/components/marketing";
import { TorchMark } from "@/components/ui";
import { PrintButton } from "@/components/framework/framework-ui";
import { deadlineState, getSettings } from "@/lib/settings";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Application flyer",
  description:
    "Printable one-page flyer for the I Ascend Project application: QR code, eligibility, steps and contacts.",
};

/** The apply URL is derived from the serving host, so the QR code stays
 *  correct when the app moves from preview to a production domain. */
async function getApplyUrl() {
  const h = await headers();
  const host =
    h.get("x-forwarded-host")?.split(",")[0]?.trim() || h.get("host") || "localhost:3000";
  const proto =
    h.get("x-forwarded-proto")?.split(",")[0]?.trim() ||
    (host.startsWith("localhost") || host.startsWith("127.") ? "http" : "https");
  const base = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || `${proto}://${host}`;
  return `${base}/apply`;
}

const steps = [
  {
    n: "1",
    title: "Apply in about 10 minutes",
    body: "Scan the code or visit the link. Six short sections about you, your results, your subjects and your study conditions. A phone number is enough — no laptop required.",
  },
  {
    n: "2",
    title: "Get your pathway and mentor",
    body: "We study your answers, assign your learning pathway, flag the support you need, and match you with a trained mentor — usually within 10 working days.",
  },
  {
    n: "3",
    title: "Learn, practise, secure admission",
    body: "Syllabus lessons, timed computer-based tests, mentor check-ins and honest guidance on courses, combinations and institutions.",
  },
];

const eligibility = [
  "Preparing for UTME — first attempt or repeat candidate.",
  "Any age. There is no upper age limit.",
  "Five O'level credits, or genuinely on track to obtain them.",
  "Reachable by phone, WhatsApp or email.",
  "Under 18? A parent or guardian consents at the final step.",
];

const benefits = [
  { icon: "📖", title: "Full JAMB syllabus", body: "22 subjects with worked examples." },
  { icon: "🖥️", title: "Real CBT practice", body: "Timed tests with explanations." },
  { icon: "🧭", title: "A personal mentor", body: "Guidance, study plan, check-ins." },
  { icon: "🎓", title: "Admission guidance", body: "Courses, combinations, CAPS." },
];

export default async function FlyerPage() {
  const applyUrl = await getApplyUrl();
  const settings = await getSettings();
  const deadline = deadlineState(settings.applicationDeadline);
  const supportContact = [
    settings.supportPhone ? `Call ${settings.supportPhone}` : "",
    settings.supportWhatsapp ? `WhatsApp ${settings.supportWhatsapp}` : "",
    settings.supportEmail ? `Email ${settings.supportEmail}` : "",
  ].filter(Boolean);
  const displayUrl = applyUrl.replace(/^https?:\/\//, "");
  const qr = await QRCode.toDataURL(applyUrl, {
    width: 720,
    margin: 1,
    color: { dark: "#0A1F44", light: "#FFFFFF" },
  });

  return (
    <div className="min-h-screen bg-cream">
      <div className="no-print">
        <MarketingHeader />
      </div>

      <main className="mx-auto w-full max-w-3xl px-4 py-8">
        <div className="no-print mb-4 flex flex-wrap items-center justify-between gap-2">
          <Link href="/launch" className="text-xs font-semibold text-navy hover:underline">
            ← Back to launch plan
          </Link>
          <PrintButton label="Print this flyer" />
        </div>

        <article className="overflow-hidden rounded-2xl border border-line bg-white shadow-xl print:rounded-none print:border-0 print:shadow-none">
          {/* Masthead */}
          <div className="bg-navy-deep px-6 py-6 text-cream print:bg-white print:pb-2 print:text-navy-deep">
            <div className="flex items-center gap-3">
              <span className="text-cream print:text-navy-deep">
                <TorchMark className="h-14 w-11" />
              </span>
              <div>
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.24em] text-gold">
                  I Ascend Project
                </p>
                <p className="mt-1 font-display text-lg italic leading-snug">
                  Rescuing the Future; Rebuilding the Future …
                </p>
              </div>
            </div>
            <h1 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
              Your UTME admission is not left to chance.
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-cream/75 print:text-ink-soft">
              Free preparation, mentoring and admission guidance for capable students — including
              first-generation applicants, repeat candidates and adult learners.
            </p>
          </div>

          {/* QR + apply */}
          <div className="grid gap-5 border-b border-line px-6 py-6 sm:grid-cols-[220px_1fr] sm:items-center">
            <div className="mx-auto w-full max-w-[220px] text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={qr}
                alt={`QR code linking to the I Ascend Project application at ${displayUrl}`}
                className="w-full rounded-xl border border-line"
              />
              <p className="mt-2 break-all font-mono text-[0.68rem] font-semibold text-navy">
                {displayUrl}
              </p>
            </div>
            <div>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gold-deep">
                Apply now — it is free · {settings.cohortName}
              </p>
              {deadline.hasDeadline && !deadline.isPast && (
                <p className="mt-2 text-xs font-semibold text-navy-deep">
                  Applications close {deadline.label} ({deadline.daysLeft} days left).
                </p>
              )}
              {deadline.isPast && (
                <p className="mt-2 text-xs font-semibold text-[#a12b2b]">
                  The listed deadline ({deadline.label}) has passed — contact us about the next intake.
                </p>
              )}
              <ol className="mt-3 space-y-3">
                {steps.map((step) => (
                  <li key={step.n} className="flex gap-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-navy text-xs font-bold text-gold">
                      {step.n}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-navy-deep">{step.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-soft">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Eligibility + benefits */}
          <div className="grid gap-6 px-6 py-6 sm:grid-cols-2">
            <div>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gold-deep">
                Who can apply
              </p>
              <ul className="mt-2.5 space-y-1.5">
                {eligibility.map((item) => (
                  <li key={item} className="flex gap-2 text-xs leading-relaxed text-ink">
                    <span className="mt-0.5 text-emerald">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gold-deep">
                What you receive
              </p>
              <ul className="mt-2.5 grid grid-cols-2 gap-2">
                {benefits.map((benefit) => (
                  <li key={benefit.title} className="rounded-xl border border-line bg-cream/60 p-2.5">
                    <p className="text-base leading-none">{benefit.icon}</p>
                    <p className="mt-1.5 text-[0.7rem] font-semibold text-navy-deep">{benefit.title}</p>
                    <p className="text-[0.65rem] leading-snug text-ink-soft">{benefit.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Promises */}
          <div className="grid gap-2 border-t border-line bg-parchment/50 px-6 py-4 text-[0.7rem] leading-relaxed sm:grid-cols-2">
            <p className="text-ink">
              <strong className="text-emerald">We promise:</strong> free teaching, practice, mentoring
              and honest guidance. No score or admission is guaranteed.
            </p>
            <p className="text-ink">
              <strong className="text-[#a12b2b]">Never pay anyone</strong> to apply to I Ascend.
              Application is free at every stage — report anyone asking for money in our name. Follow I Ascend
              Project on Facebook and Instagram for updates.
            </p>
          </div>

          {supportContact.length > 0 && (
            <p className="border-t border-line px-6 pt-4 text-center text-xs font-medium text-navy-deep">
              Questions? {supportContact.join(" · ")}
            </p>
          )}

          {/* Write-in contacts */}
          <div className="grid gap-4 border-t border-line px-6 py-5 sm:grid-cols-3">
            {["Coordinator name & phone", "Information session", "Venue & date"].map((label) => (
              <div key={label}>
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-ink-soft">{label}</p>
                <p className="mt-4 border-b border-dashed border-ink-soft/50 text-xs text-ink-soft">
                  &nbsp;
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 bg-navy-deep px-6 py-3 text-cream print:bg-white print:text-navy-deep">
            <p className="font-display text-sm italic">Dream, Prepare and Achieve.</p>
            <p className="font-mono text-[0.65rem]">{displayUrl}</p>
          </div>
        </article>

        <p className="no-print mt-4 text-center text-[0.7rem] leading-relaxed text-ink-soft">
          Print this page or save it as a PDF for schools, noticeboards and community groups. The QR code
          always points at the current address of the application.
        </p>
      </main>

      <div className="no-print">
        <MarketingFooter />
      </div>
    </div>
  );
}
