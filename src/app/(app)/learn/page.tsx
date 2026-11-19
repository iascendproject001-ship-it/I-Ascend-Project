import Link from "next/link";
import { getCurrentLearner } from "@/lib/session";
import { getSubjects } from "@/lib/data";
import { ArrowIcon, Badge, ProgressBar } from "@/components/ui";

export const dynamic = "force-dynamic";
export const metadata = { title: "Subjects & lessons" };

const categoryOrder = [
  "Compulsory",
  "Science",
  "Commercial",
  "Arts & Social Science",
  "Languages",
  "Vocational",
];

export default async function LearnPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const learner = await getCurrentLearner();
  const subjects = await getSubjects(learner?.id);

  const categories = [
    "All",
    ...categoryOrder.filter((name) => subjects.some((subject) => subject.category === name)),
  ];
  const activeCategory = category && categories.includes(category) ? category : "All";
  const visible =
    activeCategory === "All" ? subjects : subjects.filter((subject) => subject.category === activeCategory);

  const totalLessons = subjects.reduce((sum, subject) => sum + subject.lessonCount, 0);
  const completed = subjects.reduce((sum, subject) => sum + subject.completedCount, 0);

  return (
    <div className="space-y-6">
      <header className="rounded-2xl border border-line bg-white p-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Badge tone="gold">Full JAMB UTME curriculum</Badge>
            <h1 className="mt-3 font-display text-3xl leading-tight text-navy-deep sm:text-4xl">
              Learn the subject. Then learn the exam.
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
              Every lesson follows the same rhythm: the concept, a worked example, and the exact points to
              revise. Finish a lesson, then take a timed drill on the same subject.
            </p>
          </div>
          <Link
            href="/cbt"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-xs font-semibold text-cream transition hover:bg-navy-deep"
          >
            Test my knowledge
            <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
        </div>

        {learner && (
          <div className="mt-5 rounded-xl border border-line bg-cream/70 p-4">
            <div className="flex items-center justify-between text-xs font-semibold text-ink-soft">
              <span>Your curriculum coverage</span>
              <span>
                {completed} of {totalLessons} lessons
              </span>
            </div>
            <div className="mt-2">
              <ProgressBar
                value={totalLessons ? Math.round((completed / totalLessons) * 100) : 0}
                tone="emerald"
                label="Curriculum coverage"
              />
            </div>
          </div>
        )}
      </header>

      <div className="flex flex-wrap gap-2">
        {categories.map((item) => {
          const href = item === "All" ? "/learn" : `/learn?category=${encodeURIComponent(item)}`;
          const active = item === activeCategory;
          return (
            <Link
              key={item}
              href={href}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                active
                  ? "border-navy bg-navy text-cream"
                  : "border-line bg-white text-ink-soft hover:border-navy/30"
              }`}
            >
              {item}
            </Link>
          );
        })}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((subject) => {
          const percent = subject.lessonCount
            ? Math.round((subject.completedCount / subject.lessonCount) * 100)
            : 0;
          return (
            <Link
              key={subject.id}
              href={`/learn/${subject.slug}`}
              className="group flex flex-col rounded-2xl border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:border-navy/25 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-2">
                <span
                  className="grid h-11 w-11 place-items-center rounded-xl text-xl"
                  style={{ backgroundColor: `${subject.accent}14`, color: subject.accent }}
                >
                  {subject.icon}
                </span>
                <Badge tone="slate">{subject.category}</Badge>
              </div>
              <h2 className="mt-4 font-display text-lg leading-tight text-navy-deep">{subject.name}</h2>
              <p className="mt-1.5 flex-1 text-xs leading-relaxed text-ink-soft">{subject.tagline}</p>

              {learner && (
                <div className="mt-4">
                  <ProgressBar value={percent} tone={percent >= 50 ? "emerald" : "navy"} height="h-1.5" />
                  <p className="mt-1.5 text-[0.68rem] text-ink-soft">
                    {subject.completedCount}/{subject.lessonCount} lessons · {percent}%
                  </p>
                </div>
              )}

              <div className="mt-4 flex items-center justify-between border-t border-line pt-3 text-[0.68rem] font-medium text-ink-soft">
                <span>
                  {subject.lessonCount} lessons · {subject.totalMinutes} min
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-navy">
                  Open
                  <ArrowIcon className="h-3 w-3 transition group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {!learner && (
        <div className="rounded-2xl border border-navy/15 bg-gold-soft/60 p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <p className="font-display text-lg text-navy-deep">Reading as a guest</p>
            <p className="mt-1 text-sm text-ink-soft">
              Create a free profile to save lesson progress, sit CBTs and get a mentor.
            </p>
          </div>
          <Link
            href="/start"
            className="mt-3 inline-flex shrink-0 items-center gap-2 rounded-full bg-navy px-5 py-3 text-xs font-semibold text-cream sm:mt-0"
          >
            Start free
            <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}
