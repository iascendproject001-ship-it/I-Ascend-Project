import Link from "next/link";
import { getPublishedArticles, getVisibleSocialPosts } from "@/lib/content";
import { FacebookIcon, InstagramIcon } from "@/components/social-links";
import { ArrowIcon } from "@/components/ui";
import { readingMinutes } from "@/components/markdown";

function formatDate(date: Date | null) {
  if (!date) return "";
  return new Intl.DateTimeFormat("en-NG", { day: "numeric", month: "short", year: "numeric" }).format(
    new Date(date),
  );
}

export async function HomeStories() {
  const [stories, posts] = await Promise.all([
    getPublishedArticles(3),
    getVisibleSocialPosts(3),
  ]);
  if (stories.length === 0 && posts.length === 0) return null;

  return (
    <section className="border-y border-line bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-gold-deep">
              Stories & updates
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-navy-deep">
              News from the project.
            </h2>
          </div>
          {stories.length > 0 && (
            <Link
              href="/stories"
              className="inline-flex items-center gap-1.5 rounded-full border border-navy/20 bg-white px-4 py-2 text-xs font-semibold text-navy transition hover:border-navy/50"
            >
              All stories <ArrowIcon className="h-3 w-3" />
            </Link>
          )}
        </div>

        {stories.length > 0 && (
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {stories.map((story) => (
              <Link
                key={story.id}
                href={`/stories/${story.slug}`}
                className="group flex flex-col rounded-2xl border border-line bg-cream/60 p-5 transition hover:-translate-y-0.5 hover:border-navy/25 hover:bg-white hover:shadow-md"
              >
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-gold-deep">
                  {formatDate(story.publishedAt)} · {readingMinutes(story.body)} min read
                </p>
                <h3 className="mt-2 font-display text-lg leading-snug text-navy-deep">{story.title}</h3>
                <p className="mt-1.5 line-clamp-2 flex-1 text-xs leading-relaxed text-ink-soft">
                  {story.excerpt}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-[0.7rem] font-semibold text-navy">
                  Read story <ArrowIcon className="h-3 w-3 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        )}

        {posts.length > 0 && (
          <div className="mt-6 rounded-2xl bg-navy-deep p-5 text-cream sm:p-6">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gold">
              From our social pages
            </p>
            <ul className="mt-3 grid gap-2 md:grid-cols-3">
              {posts.map((post) => (
                <li key={post.id}>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex h-full items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3.5 transition hover:border-gold/40"
                  >
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/10 text-gold">
                      {post.platform === "instagram" ? (
                        <InstagramIcon className="h-4 w-4" />
                      ) : (
                        <FacebookIcon className="h-4 w-4" />
                      )}
                    </span>
                    <span>
                      <span className="line-clamp-3 text-xs leading-relaxed text-cream/85">
                        {post.caption}
                      </span>
                      <span className="mt-1.5 block text-[0.62rem] font-semibold uppercase tracking-wide text-cream/50">
                        {post.platform} {post.postedOn ? `· ${post.postedOn}` : ""} →
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
