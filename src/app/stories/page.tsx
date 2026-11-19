import Link from "next/link";
import type { Metadata } from "next";
import { MarketingFooter, MarketingHeader } from "@/components/marketing";
import { ArrowIcon, Badge } from "@/components/ui";
import { getPublishedArticles } from "@/lib/content";
import { readingMinutes } from "@/components/markdown";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Stories & articles",
  description: "Study guides, admission news and community celebrations from the I Ascend Project.",
};

function formatDate(date: Date | null) {
  if (!date) return "";
  return new Intl.DateTimeFormat("en-NG", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(date),
  );
}

export default async function StoriesPage() {
  const stories = await getPublishedArticles(50);

  return (
    <div className="min-h-screen bg-cream">
      <MarketingHeader />

      <main className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 lg:py-14">
        <Badge tone="gold">Stories & articles</Badge>
        <h1 className="mt-3 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight text-navy-deep sm:text-5xl">
          News, guides and celebrations.
        </h1>
        <p className="mt-3 max-w-2xl text-[1.02rem] leading-relaxed text-ink-soft">
          Study guides that go deeper than a lesson, admission news worth acting on, and learners worth
          celebrating — also shared on our Facebook and Instagram pages.
        </p>

        {stories.length === 0 ? (
          <div className="card mt-8 p-8 text-center">
            <p className="font-display text-xl text-navy-deep">First stories are on the way.</p>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
              Meanwhile, explore the curriculum or follow I Ascend Project on Facebook and Instagram.
            </p>
            <Link
              href="/learn"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-xs font-semibold text-cream"
            >
              Browse lessons <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <Link
                key={story.id}
                href={`/stories/${story.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                {story.coverUrl && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={story.coverUrl} alt="" className="h-40 w-full object-cover" />
                )}
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-gold-deep">
                    {formatDate(story.publishedAt)} · {readingMinutes(story.body)} min read
                  </p>
                  <h2 className="mt-2 font-display text-xl leading-snug text-navy-deep">{story.title}</h2>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-soft">
                    {story.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-navy">
                    Read story <ArrowIcon className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>

      <MarketingFooter />
    </div>
  );
}
