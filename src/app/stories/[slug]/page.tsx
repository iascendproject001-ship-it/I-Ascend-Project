import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketingFooter, MarketingHeader } from "@/components/marketing";
import { ArrowIcon, Badge } from "@/components/ui";
import { getArticleBySlug, getPublishedArticles } from "@/lib/content";
import { Markdown, readingMinutes } from "@/components/markdown";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = await getArticleBySlug(slug);
  if (!story) return { title: "Story" };
  return { title: story.title, description: story.excerpt };
}

function formatDate(date: Date | null) {
  if (!date) return "";
  return new Intl.DateTimeFormat("en-NG", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(date),
  );
}

export default async function StoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = await getArticleBySlug(slug);
  if (!story) notFound();

  const related = (await getPublishedArticles(4)).filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-cream">
      <MarketingHeader />

      <main className="mx-auto w-full max-w-3xl px-5 py-10 sm:px-8">
        <Link href="/stories" className="text-xs font-semibold text-navy hover:underline">
          ← All stories
        </Link>

        <article className="mt-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="gold">Story</Badge>
            <span className="text-xs text-ink-soft">
              {formatDate(story.publishedAt)} · {readingMinutes(story.body)} min read · By{" "}
              {story.authorName}
            </span>
          </div>
          <h1 className="mt-3 font-display text-3xl leading-[1.1] tracking-tight text-navy-deep sm:text-4xl">
            {story.title}
          </h1>
          {story.excerpt && (
            <p className="mt-3 border-l-2 border-gold pl-4 font-display text-lg leading-relaxed text-navy-deep/80">
              {story.excerpt}
            </p>
          )}

          {story.coverUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={story.coverUrl}
              alt=""
              className="mt-6 w-full rounded-2xl border border-line object-cover"
            />
          )}

          <div className="card mt-6 p-5 sm:p-7">
            <Markdown text={story.body} />
          </div>

          {story.sourceUrl && (
            <div className="mt-5 rounded-2xl border border-navy/15 bg-navy/[0.04] p-4 text-sm text-ink-soft sm:flex sm:items-center sm:justify-between sm:gap-4">
              <p>
                Originally shared{story.sourceLabel ? ` on ${story.sourceLabel}` : " on social media"} —
                join the conversation there.
              </p>
              <a
                href={story.sourceUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-2 inline-flex shrink-0 items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-cream sm:mt-0"
              >
                View original post <ArrowIcon className="h-3 w-3" />
              </a>
            </div>
          )}
        </article>

        {related.length > 0 && (
          <section className="mt-10">
            <h2 className="font-display text-2xl text-navy-deep">More stories</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/stories/${item.slug}`}
                  className="rounded-2xl border border-line bg-white p-4 transition hover:border-navy/25 hover:shadow-md"
                >
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-gold-deep">
                    {formatDate(item.publishedAt)}
                  </p>
                  <p className="mt-1.5 font-display text-base leading-snug text-navy-deep">{item.title}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <MarketingFooter />
    </div>
  );
}
