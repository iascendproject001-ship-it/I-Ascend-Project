import Link from "next/link";
import { notFound } from "next/navigation";
import { getCurrentLearner } from "@/lib/session";
import {
  getResources,
  getSubjectBySlug,
  getSubjectLessonProgress,
  getSubjectLessons,
} from "@/lib/data";
import { ArrowIcon, Badge, ProgressBar } from "@/components/ui";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ subject: string }> }) {
  const { subject } = await params;
  const record = await getSubjectBySlug(subject);
  return { title: record ? `${record.name} lessons` : "Subject" };
}

export default async function SubjectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject: subjectSlug } = await params;
  const subject = await getSubjectBySlug(subjectSlug);
  if (!subject) notFound();

  const learner = await getCurrentLearner();
  const [lessons, resources] = await Promise.all([
    getSubjectLessons(subject.id),
    getResources(),
  ]);
  const completed = learner ? await getSubjectLessonProgress(learner.id, subject.id) : new Set<number>();
  const subjectResources = resources.filter((resource) => resource.subjectSlug === subject.slug);
  const percent = lessons.length ? Math.round((completed.size / lessons.length) * 100) : 0;
  const nextLesson = lessons.find((lesson) => !completed.has(lesson.id)) ?? lessons[0];

  return (
    <div className="space-y-6">
      <nav className="flex items-center gap-2 text-xs text-ink-soft">
        <Link href="/learn" className="font-semibold text-navy hover:underline">
          Subjects
        </Link>
        <span aria-hidden>/</span>
        <span>{subject.name}</span>
      </nav>

      <header
        className="relative overflow-hidden rounded-2xl border border-line bg-white p-6"
        style={{ borderTopColor: subject.accent, borderTopWidth: 4 }}
      >
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div className="flex items-start gap-4">
            <span
              className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-2xl"
              style={{ backgroundColor: `${subject.accent}14`, color: subject.accent }}
            >
              {subject.icon}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="slate">{subject.category}</Badge>
                <Badge tone="gold">{lessons.length} lessons</Badge>
              </div>
              <h1 className="mt-2 font-display text-3xl leading-tight text-navy-deep">{subject.name}</h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">{subject.description}</p>
            </div>
          </div>
          {nextLesson && (
            <Link
              href={`/learn/${subject.slug}/${nextLesson.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-xs font-semibold text-cream transition hover:bg-navy-deep"
            >
              {completed.size > 0 ? "Continue" : "Start first lesson"}
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>

        {learner && (
          <div className="mt-5 rounded-xl border border-line bg-cream/70 p-4">
            <div className="flex items-center justify-between text-xs font-semibold text-ink-soft">
              <span>Your progress in {subject.name}</span>
              <span>
                {completed.size} of {lessons.length} lessons
              </span>
            </div>
            <div className="mt-2">
              <ProgressBar value={percent} tone={percent >= 50 ? "emerald" : "gold"} />
            </div>
          </div>
        )}
      </header>

      <div className="grid gap-5 lg:grid-cols-[1.65fr_1fr]">
        <section>
          <h2 className="font-display text-xl text-navy-deep">Lessons</h2>
          <ol className="mt-3 space-y-3">
            {lessons.map((lesson, index) => {
              const done = completed.has(lesson.id);
              return (
                <li key={lesson.id}>
                  <Link
                    href={`/learn/${subject.slug}/${lesson.slug}`}
                    className="group flex items-start gap-4 rounded-2xl border border-line bg-white p-4 transition hover:border-navy/25 hover:shadow-md"
                  >
                    <span
                      className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-sm font-bold ${
                        done ? "bg-emerald text-white" : "bg-parchment text-navy"
                      }`}
                    >
                      {done ? "✓" : String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-semibold text-navy-deep">{lesson.title}</p>
                        <Badge tone={lesson.examWeight.includes("Very") ? "gold" : "slate"}>
                          {lesson.examWeight}
                        </Badge>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{lesson.summary}</p>
                      <p className="mt-2 text-[0.68rem] font-medium uppercase tracking-wide text-ink-soft/80">
                        {lesson.durationMinutes} min read · {lesson.sections.length} sections
                      </p>
                    </div>
                    <ArrowIcon className="mt-2 h-4 w-4 shrink-0 text-navy/40 transition group-hover:translate-x-0.5" />
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>

        <aside className="space-y-4">
          <div className="card p-5">
            <h3 className="font-display text-lg text-navy-deep">How to study this subject</h3>
            <ol className="mt-3 space-y-2.5 text-sm text-ink-soft">
              {[
                "Read the lesson once without writing. Focus on understanding.",
                "Close the page and write the key points from memory.",
                "Attempt the subject drill in the CBT simulator, timed.",
                "Log every wrong answer and revisit that lesson in 48 hours.",
              ].map((step, index) => (
                <li key={step} className="flex gap-2.5">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-navy/8 text-[0.62rem] font-bold text-navy">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
            <Link
              href="/cbt"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-4 py-2.5 text-xs font-semibold text-cream"
            >
              Take a {subject.name} drill
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>

          {subjectResources.length > 0 && (
            <div className="card p-5">
              <h3 className="font-display text-lg text-navy-deep">High-yield resources</h3>
              <ul className="mt-3 space-y-3">
                {subjectResources.map((resource) => (
                  <li key={resource.id} className="rounded-xl border border-line bg-cream/60 p-3">
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-gold-deep">
                      {resource.type}
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-snug text-navy-deep">
                      {resource.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-ink-soft">{resource.description}</p>
                  </li>
                ))}
              </ul>
              <Link href="/resources" className="mt-3 inline-block text-xs font-semibold text-navy hover:underline">
                Open the full library →
              </Link>
            </div>
          )}

          <div className="rounded-2xl border border-line bg-gold-soft/60 p-5">
            <p className="font-display text-lg text-navy-deep">Stuck on a topic?</p>
            <p className="mt-1 text-sm leading-relaxed text-[#6b4a0d]">
              Send it to a mentor with the exact line you do not understand. You will get an explanation, not
              a summary.
            </p>
            <Link
              href="/mentor/new"
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-navy"
            >
              Ask a mentor
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
