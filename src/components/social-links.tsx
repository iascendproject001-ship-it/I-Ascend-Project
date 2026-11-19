import { getSettings } from "@/lib/settings";

export function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 20v-6.9h2.3l.4-2.8h-2.7V8.5c0-.8.3-1.4 1.5-1.4h1.3V4.6c-.3 0-1.1-.1-2-.1-2 0-3.3 1.2-3.3 3.4v2.4H8.6v2.8H11V20h2.5z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="14" height="14" rx="4" />
      <circle cx="10" cy="10" r="3.2" />
      <circle cx="13.8" cy="6.2" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * Sitewide social links, driven by staff programme settings.
 * Renders nothing until the URLs are recorded — and never throws,
 * so static pages still build if the database is unreachable.
 */
export async function SocialLinks() {
  let facebook = "";
  let instagram = "";
  try {
    const settings = await getSettings();
    facebook = settings.facebookUrl.trim();
    instagram = settings.instagramUrl.trim();
  } catch {
    facebook = "";
    instagram = "";
  }
  if (!facebook && !instagram) return null;

  return (
    <div className="mt-4 flex items-center gap-2">
      <span className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink-soft">
        Follow us
      </span>
      {facebook && (
        <a
          href={facebook}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="I Ascend Project on Facebook"
          className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white text-navy transition hover:border-navy/40 hover:bg-navy hover:text-cream"
        >
          <FacebookIcon />
        </a>
      )}
      {instagram && (
        <a
          href={instagram}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="I Ascend Project on Instagram"
          className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white text-navy transition hover:border-navy/40 hover:bg-navy hover:text-cream"
        >
          <InstagramIcon />
        </a>
      )}
    </div>
  );
}
