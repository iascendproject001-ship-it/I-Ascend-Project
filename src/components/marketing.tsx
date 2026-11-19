import Link from "next/link";
import { Logo } from "@/components/ui";
import { SocialLinks } from "@/components/social-links";

const navLinks = [
  { href: "/about", label: "Programme" },
  { href: "/framework", label: "Framework" },
  { href: "/learn", label: "Learn" },
  { href: "/cbt", label: "CBT" },
  { href: "/mentor", label: "Mentorship" },
  { href: "/admissions", label: "Admissions" },
  { href: "/resources", label: "Library" },
];

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" aria-label="I Ascend Project home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.82rem] font-medium text-ink-soft transition hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href="/start"
            className="rounded-full px-3.5 py-2 text-xs font-semibold text-navy transition hover:text-navy-deep"
          >
            Sign in
          </Link>
          <Link
            href="/start"
            className="rounded-full bg-navy px-4 py-2.5 text-xs font-semibold text-cream shadow-[0_8px_20px_rgba(16,41,75,0.2)] transition hover:bg-navy-deep"
          >
            Begin your ascent
          </Link>
        </div>

        <details className="group relative sm:hidden">
          <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-lg border border-line bg-white text-navy [&::-webkit-details-marker]:hidden">
            <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M3 6h14M3 10h14M3 14h14" strokeLinecap="round" />
            </svg>
            <span className="sr-only">Open menu</span>
          </summary>
          <div className="absolute right-0 top-11 w-56 rounded-xl border border-line bg-white p-2 shadow-xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-ink-soft hover:bg-parchment"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/start"
              className="mt-1 block rounded-lg bg-navy px-3 py-2 text-center text-sm font-semibold text-cream"
            >
              Begin your ascent
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}

export function MarketingFooter() {
  return (
    <footer className="border-t border-line bg-parchment/60 px-5 py-12 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
            An interventional education programme closing the guidance, mentorship and resource gap that
            keeps capable young Nigerians out of tertiary institutions.
          </p>
          <p className="mt-4 font-display text-sm italic text-navy-deep">
            Rescuing the Future; Rebuilding the Future …
          </p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold-deep">
            Talent is everywhere. Guidance should be too.
          </p>
          <SocialLinks />
        </div>

        <FooterColumn
          title="Programme"
          links={[
            { href: "/stories", label: "Stories & articles" },
            { href: "/about", label: "About & impact" },
            { href: "/framework", label: "Master framework" },
            { href: "/learn", label: "All JAMB subjects" },
            { href: "/cbt", label: "CBT practice" },
            { href: "/mentor", label: "Ask a mentor" },
            { href: "/admissions", label: "Course finder" },
          ]}
        />
        <FooterColumn
          title="Resources"
          links={[
            { href: "/resources", label: "Textbook library" },
            { href: "/resources", label: "Formula sheets" },
            { href: "/admissions", label: "Cut-off guidance" },
            { href: "/learn/english-language", label: "English mastery" },
          ]}
        />
        <FooterColumn
          title="Get started"
          links={[
            { href: "/start", label: "Create free profile" },
            { href: "/privacy", label: "Privacy notice" },
            { href: "/flyer", label: "Application flyer & QR" },
            { href: "/deploy", label: "Deployment runbook" },
            { href: "/register", label: "Join the outreach" },
            { href: "/launch", label: "Launch readiness" },
            { href: "/dashboard", label: "My dashboard" },
            { href: "/api/health", label: "System status" },
          ]}
        />
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-6xl flex-col gap-2 border-t border-line pt-6 text-xs text-ink-soft/80 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} I Ascend Project. Built for first-generation applicants.</p>
        <p>Cut-off marks are indicative. Always confirm with JAMB and your institution.</p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-navy-deep">{title}</p>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={`${link.href}-${link.label}`}>
            <Link href={link.href} className="text-sm text-ink-soft transition hover:text-navy">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
