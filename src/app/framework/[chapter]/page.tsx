import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketingFooter, MarketingHeader } from "@/components/marketing";
import { ArrowIcon, Badge } from "@/components/ui";
import { PrintButton } from "@/components/framework/framework-ui";
import {
  FrameworkChapterNav,
  FrameworkMobileToc,
  FrameworkToc,
  ScrollTopLink,
  StatusChip,
} from "@/components/framework/framework-nav";
import { FrameworkBlocks } from "@/components/framework/blocks";
import {
  frameworkChapters,
  frameworkMeta,
  getAdjacentChapters,
  getFrameworkChapter,
} from "@/content/framework";

export function generateStaticParams() {
  return frameworkChapters.map((chapter) => ({ chapter: chapter.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ chapter: string }>;
}): Promise<Metadata> {
  const { chapter: slug } = await params;
  const record = getFrameworkChapter(slug);
  if (!record) return { title: "Framework chapter" };
  return {
    title: `${record.chapter.number} · ${record.chapter.title}`,
    description: record.chapter.short,
  };
}

export default async function FrameworkChapterPage({
  params,
}: {
  params: Promise<{ chapter: string }>;
}) {
  const { chapter: slug } = await params;
  const record = getFrameworkChapter(slug);
  if (!record) notFound();

  const { chapter, position } = record;
  const { previous, next } = getAdjacentChapters(slug);
  const isAppendix = slug.startsWith("appendix-");

  return (
    <div id="top" className="min-h-screen bg-cream">
      <div className="no-print">
        <MarketingHeader />
      </div>

      <main className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 lg:py-12">
        <nav className="no-print flex flex-wrap items-center gap-2 text-xs text-ink-soft">
          <Link href="/framework" className="font-semibold text-navy hover:underline">
            Master framework
          </Link>
          <span aria-hidden>/</span>
          <span>{isAppendix ? "Appendices" : "Chapter"} {chapter.number}</span>
          <span aria-hidden>·</span>
          <span>v{frameworkMeta.version}</span>
        </nav>

        <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_248px]">
          <article>
            <header className="rounded-2xl border border-line bg-white p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="gold">
                  {isAppendix ? "Appendix" : "Chapter"} {chapter.number}
                </Badge>
                <StatusChip status={chapter.status} />
                <span className="text-[0.68rem] text-ink-soft">
                  {position} of {frameworkChapters.length} · Owner: {chapter.owner}
                </span>
              </div>
              <h1 className="mt-3 font-display text-3xl leading-[1.12] tracking-tight text-navy-deep sm:text-4xl">
                {chapter.title}
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{chapter.purpose}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <PrintButton label="Print this chapter" />
                <Link
                  href="/framework"
                  className="no-print inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2.5 text-xs font-semibold text-ink-soft transition hover:border-navy/30 hover:text-navy"
                >
                  All chapters
                  <ArrowIcon className="h-3.5 w-3.5" />
                </Link>
              </div>

              <ul className="mt-4 grid gap-1.5 border-t border-line pt-4 sm:grid-cols-3">
                {chapter.summary.map((item) => (
                  <li key={item} className="flex gap-2 text-[0.72rem] leading-snug text-ink-soft">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </header>

            <div className="mt-5">
              <FrameworkMobileToc activeSlug={slug} />
            </div>

            <div className="mt-5">
              <FrameworkBlocks blocks={chapter.blocks} />
            </div>

            <section className="mt-6 rounded-2xl border border-line bg-white p-5">
              <h2 className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gold-deep">
                Outputs of this chapter
              </h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {chapter.outputs.map((output) => (
                  <li
                    key={output}
                    className="flex gap-2 rounded-lg border border-line bg-cream/60 px-3 py-2 text-sm text-ink-soft"
                  >
                    <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-emerald-soft text-[0.55rem] text-emerald">
                      ✓
                    </span>
                    {output}
                  </li>
                ))}
              </ul>
            </section>

            <FrameworkChapterNav previous={previous} next={next} />

            <p className="mt-5 text-[0.7rem] leading-relaxed text-ink-soft">
              {frameworkMeta.reviewerNote} This document is a framework for adoption, not a substitute for
              legal, financial or official examination guidance.
            </p>

            <ScrollTopLink />
          </article>

          <aside className="no-print hidden lg:block">
            <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-line bg-white p-4">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-[0.6rem] font-bold uppercase tracking-[0.14em] text-ink-soft">
                  Contents
                </p>
                <Link href="/framework" className="text-[0.62rem] font-semibold text-navy hover:underline">
                  Overview
                </Link>
              </div>
              <FrameworkToc activeSlug={slug} />
            </div>
          </aside>
        </div>
      </main>

      <div className="no-print">
        <MarketingFooter />
      </div>
    </div>
  );
}
