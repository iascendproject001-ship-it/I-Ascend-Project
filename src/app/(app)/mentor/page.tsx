import Link from "next/link";
import { requireLearner } from "@/lib/session";
import { getThreads } from "@/lib/data";
import { ArrowIcon, Badge, EmptyState } from "@/components/ui";

export const dynamic = "force-dynamic";
export const metadata = { title: "Mentorship" };

const categoryTone: Record<string, "navy" | "gold" | "emerald" | "plum" | "slate"> = {
  Academics: "navy",
  Admissions: "gold",
  "Study plan": "emerald",
  "Mindset & motivation": "plum",
  "Financial support": "slate",
};

export default async function MentorPage() {
  const learner = await requireLearner();
  const threads = await getThreads(learner.id);

  return (
    <div className="space-y-6">
      <header className="relative overflow-hidden rounded-2xl border border-line bg-white p-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <Badge tone="gold">Mentorship desk</Badge>
            <h1 className="mt-3 font-display text-3xl leading-tight text-navy-deep sm:text-4xl">
              Nobody should prepare for this alone.
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Bring a subject you fear, a course you are unsure of, a cut-off that confuses you, or the fact
              that you have no money for textbooks. A volunteer tutor or admissions mentor will answer with
              something you can act on this week.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                href="/mentor/new"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-xs font-semibold text-cream transition hover:bg-navy-deep"
              >
                Ask a new question
                <ArrowIcon className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-5 py-3 text-xs font-semibold text-navy transition hover:border-navy/50"
              >
                Check a cut-off first
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { value: "24h", label: "Reply target" },
              { value: "1:1", label: "Attention" },
              { value: "Free", label: "Always" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-line bg-cream/70 p-3 text-center">
                <p className="font-display text-xl text-navy-deep">{item.value}</p>
                <p className="mt-1 text-[0.58rem] uppercase tracking-[0.1em] text-ink-soft">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
        <section>
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl text-navy-deep">Your conversations</h2>
            <span className="text-xs text-ink-soft">{threads.length} total</span>
          </div>

          {threads.length === 0 ? (
            <div className="mt-3">
              <EmptyState
                icon="💬"
                title="No conversation yet"
                description="Your first question can be as small as 'I do not understand logarithms' or as big as 'Can I afford university?' Ask it."
                action={
                  <Link
                    href="/mentor/new"
                    className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-xs font-semibold text-cream"
                  >
                    Write my first question
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </Link>
                }
              />
            </div>
          ) : (
            <ul className="mt-3 space-y-3">
              {threads.map((thread) => (
                <li key={thread.id}>
                  <Link
                    href={`/mentor/${thread.id}`}
                    className="group block rounded-2xl border border-line bg-white p-4 transition hover:border-navy/25 hover:shadow-md"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge tone={categoryTone[thread.category] ?? "slate"}>{thread.category}</Badge>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[0.58rem] font-bold uppercase tracking-wide ${
                          thread.status === "answered"
                            ? "bg-emerald-soft text-emerald"
                            : "bg-gold-soft text-gold-deep"
                        }`}
                      >
                        {thread.status === "answered" ? "Mentor replied" : "Awaiting mentor"}
                      </span>
                      <span className="text-[0.65rem] text-ink-soft">
                        {new Intl.DateTimeFormat("en-NG", { day: "numeric", month: "short" }).format(
                          new Date(thread.createdAt),
                        )}
                      </span>
                    </div>
                    <p className="mt-2 font-semibold text-navy-deep group-hover:text-navy">{thread.title}</p>
                    <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-ink-soft">{thread.body}</p>
                    <div className="mt-3 flex items-center justify-between border-t border-line pt-3 text-[0.68rem] text-ink-soft">
                      <span>
                        {thread.replyCount} {thread.replyCount === 1 ? "reply" : "replies"}
                      </span>
                      <span className="inline-flex items-center gap-1 font-semibold text-navy">
                        Open conversation
                        <ArrowIcon className="h-3 w-3 transition group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <aside className="space-y-4">
          <div className="card p-5">
            <h3 className="font-display text-lg text-navy-deep">What mentors help with</h3>
            <ul className="mt-3 space-y-2.5 text-sm text-ink-soft">
              {[
                "Topics you were never taught in school",
                "Choosing or changing your UTME subject combination",
                "Reading your mock scores honestly",
                "Building a realistic study timetable around chores or work",
                "Understanding CAPS and admission offers",
                "Finding scholarships, bursaries and free study materials",
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-0.5 text-gold">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-navy p-5 text-cream">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gold">How to ask well</p>
            <ol className="mt-3 space-y-2 text-xs leading-relaxed text-cream/75">
              <li>1. Say what you have already tried.</li>
              <li>2. Quote the exact question or line that confuses you.</li>
              <li>3. Tell us your target course and timeline.</li>
            </ol>
            <p className="mt-3 border-t border-white/10 pt-3 text-[0.68rem] text-cream/50">
              Messages are read by volunteer tutors and admissions mentors of the I Ascend Project.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
