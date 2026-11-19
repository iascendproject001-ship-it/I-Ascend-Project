import Link from "next/link";
import { ArrowIcon } from "@/components/ui";
import { frameworkChapters, frameworkGroups } from "@/content/framework";
import { statusLabels, type FrameworkStatus } from "@/content/framework/types";

const statusStyles: Record<FrameworkStatus, string> = {
  confirmed: "border-emerald/25 bg-emerald-soft text-emerald",
  recommended: "border-navy/20 bg-navy/6 text-navy",
  validate: "border-gold/40 bg-gold-soft text-gold-deep",
};

export function StatusChip({ status }: { status: FrameworkStatus }) {
  const meta = statusLabels[status];
  return (
    <span
      className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.1em] ${statusStyles[status]}`}
      title={meta.description}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {meta.label}
    </span>
  );
}

export function FrameworkToc({ activeSlug }: { activeSlug?: string }) {
  return (
    <nav aria-label="Framework contents" className="space-y-4">
      {frameworkGroups.map((group) => (
        <div key={group.name}>
          <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-gold-deep">{group.name}</p>
          <ul className="mt-2 space-y-1">
            {group.slugs.map((slug) => {
              const chapter = frameworkChapters.find((item) => item.slug === slug);
              if (!chapter) return null;
              const active = slug === activeSlug;
              return (
                <li key={slug}>
                  <Link
                    href={`/framework/${slug}`}
                    className={`flex items-start gap-2 rounded-lg px-2 py-1.5 text-[0.78rem] leading-snug transition ${
                      active ? "bg-navy font-semibold text-cream" : "text-ink-soft hover:bg-parchment hover:text-navy"
                    }`}
                  >
                    <span
                      className={`mt-px min-w-4 text-[0.62rem] font-bold ${
                        active ? "text-gold" : "text-ink-soft/60"
                      }`}
                    >
                      {chapter.number}
                    </span>
                    <span>{chapter.title.replace(/^Appendix [A-G] — /, "")}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export function FrameworkMobileToc({ activeSlug }: { activeSlug?: string }) {
  return (
    <details className="no-print rounded-xl border border-line bg-white p-3 lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-navy-deep">
        Jump to a chapter
        <span className="text-xs text-ink-soft">Open</span>
      </summary>
      <div className="mt-3">
        <FrameworkToc activeSlug={activeSlug} />
      </div>
    </details>
  );
}

export function FrameworkChapterNav({
  previous,
  next,
}: {
  previous: { slug: string; title: string; number: string } | null;
  next: { slug: string; title: string; number: string } | null;
}) {
  return (
    <div className="no-print mt-10 grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
      {previous ? (
        <Link
          href={`/framework/${previous.slug}`}
          className="rounded-xl border border-line bg-white p-3.5 transition hover:border-navy/30"
        >
          <p className="text-[0.6rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
            ← Previous · {previous.number}
          </p>
          <p className="mt-1 text-sm font-semibold leading-snug text-navy-deep">{previous.title}</p>
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link
          href={`/framework/${next.slug}`}
          className="rounded-xl border border-line bg-white p-3.5 text-right transition hover:border-navy/30 sm:col-start-2"
        >
          <p className="text-[0.6rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
            Next · {next.number} →
          </p>
          <p className="mt-1 text-sm font-semibold leading-snug text-navy-deep">{next.title}</p>
        </Link>
      )}
    </div>
  );
}

export function ScrollTopLink() {
  return (
    <Link
      href="#top"
      className="no-print mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-ink-soft hover:text-navy"
    >
      Back to top
      <ArrowIcon className="h-3.5 w-3.5 rotate-[-90deg]" />
    </Link>
  );
}
