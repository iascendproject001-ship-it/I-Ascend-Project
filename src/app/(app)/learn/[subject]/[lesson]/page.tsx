import Link from "next/link";
import { notFound } from "next/navigation";
import { getCurrentLearner } from "@/lib/session";
import { getLessonDetail, getSubjectLessons, isLessonComplete } from "@/lib/data";
import { markLessonComplete } from "@/lib/actions";
import { ArrowIcon, Badge, ProgressBar } from "@/components/ui";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subject: string; lesson: string }>;
}) {
  const { subject, lesson } = await params;
  const detail = await getLessonDetail(subject, lesson);
  return { title: detail ? detail.lesson.title : "Lesson" };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ subject: string; lesson: string }>;
}) {
  const { subject: subjectSlug, lesson: lessonSlug } = await params;
  const detail = await getLessonDetail(subjectSlug, lessonSlug);
  if (!detail) notFound();

  const learner = await getCurrentLearner();
  const [subjectLessons, done] = await Promise.all([
    getSubjectLessons(detail.subject.id),
    learner ? isLessonComplete(learner.id, detail.lesson.id) : Promise.resolve(false),
  ]);

  const { subject, lesson, previous, next, position, totalInSubject } = detail;
  const nextPath = next ? `/learn/${subject.slug}/${next.slug}` : `/learn/${subject.slug}`;

  return (
    <article className="space-y-6">
      <nav className="flex flex-wrap items-center gap-2 text-xs text-ink-soft">
        <Link href="/learn" className="hover:text-navy">
          Subjects
        </Link>
        <span aria-hidden>/</span>
        <Link href={`/learn/${subject.slug}`} className="font-semibold text-navy hover:underline">
          {subject.name}
        </Link>
        <span aria-hidden>/</span>
        <span>Lesson {position}</span>
      </nav>

      <header>
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="slate">
            {subject.icon} {subject.name}
          </Badge>
          <Badge tone="gold">{lesson.examWeight}</Badge>
          <Badge tone="emerald">{lesson.durationMinutes} min</Badge>
          {done && <Badge tone="emerald">✓ Completed</Badge>}
        </div>
        <h1 className="mt-3 max-w-3xl font-display text-3xl leading-[1.12] text-navy-deep sm:text-4xl">
          {lesson.title}
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-soft">{lesson.summary}</p>
        <div className="mt-4 flex max-w-md items-center gap-3">
          <ProgressBar
            value={Math.round((position / totalInSubject) * 100)}
            tone="gold"
            height="h-1.5"
            label="Subject lesson progress"
          />
          <span className="shrink-0 text-[0.68rem] font-semibold text-ink-soft">
            {position}/{totalInSubject}
          </span>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.75fr_1fr]">
        <div className="space-y-4">
          {lesson.sections.map((section, index) => (
            <section key={`${section.heading}-${index}`} className="card p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-navy text-[0.7rem] font-bold text-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-xl leading-snug text-navy-deep">{section.heading}</h2>
              </div>
              <div className="lesson-body mt-3 text-[0.93rem] leading-relaxed text-ink">
                <p>{section.body}</p>
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2.5 text-[0.9rem] text-ink-soft">
                        <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {section.example && (
                  <div className="mt-4 rounded-xl border border-emerald/20 bg-emerald-soft/50 p-4">
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-emerald">
                      Worked example
                    </p>
                    <p className="mt-1.5 text-sm font-medium text-navy-deep">{section.example.prompt}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink">{section.example.solution}</p>
                  </div>
                )}
              </div>
            </section>
          ))}

          <section className="rounded-2xl border border-gold/40 bg-gold-soft/60 p-5">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gold-deep">
              The five things to remember
            </p>
            <ul className="mt-3 space-y-2">
              {lesson.keyPoints.map((point) => (
                <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-[#5f430e]">
                  <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-gold/30 text-[0.55rem] text-[#5f430e]">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <div className="card flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-lg text-navy-deep">
                {done ? "Lesson complete. Keep the streak." : "Finished reading?"}
              </p>
              <p className="mt-1 text-xs text-ink-soft">
                Mark it complete, then test recall with a timed drill on {subject.name}.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {learner && !done && (
                <form action={markLessonComplete}>
                  <input type="hidden" name="lessonId" value={lesson.id} />
                  <input type="hidden" name="nextPath" value={nextPath} />
                  <button
                    type="submit"
                    className="rounded-full bg-emerald px-5 py-3 text-xs font-semibold text-white transition hover:bg-emerald/90"
                  >
                    Mark complete &amp; continue
                  </button>
                </form>
              )}
              {learner && done && (
                <Link
                  href={nextPath}
                  className="rounded-full bg-navy px-5 py-3 text-xs font-semibold text-cream transition hover:bg-navy-deep"
                >
                  Next lesson
                </Link>
              )}
              {!learner && (
                <Link
                  href="/start"
                  className="rounded-full bg-navy px-5 py-3 text-xs font-semibold text-cream transition hover:bg-navy-deep"
                >
                  Create profile to save progress
                </Link>
              )}
              <Link
                href="/cbt"
                className="rounded-full border border-navy/20 bg-white px-5 py-3 text-xs font-semibold text-navy transition hover:border-navy/50"
              >
                Practise this subject
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            {previous ? (
              <Link
                href={`/learn/${subject.slug}/${previous.slug}`}
                className="group flex items-center gap-2 text-xs font-semibold text-ink-soft hover:text-navy"
              >
                <ArrowIcon className="h-3.5 w-3.5 rotate-180" />
                Previous lesson
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                href={`/learn/${subject.slug}/${next.slug}`}
                className="group flex items-center gap-2 text-right text-xs font-semibold text-navy"
              >
                Next: {next.title}
                <ArrowIcon className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </Link>
            )}
          </div>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="card p-5">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ink-soft/70">
              In this subject
            </p>
            <ol className="mt-3 space-y-1.5">
              {subjectLessons.map((item, index) => {
                const active = item.id === lesson.id;
                return (
                  <li key={item.id}>
                    <Link
                      href={`/learn/${subject.slug}/${item.slug}`}
                      className={`flex items-start gap-2.5 rounded-lg px-2.5 py-2 text-xs transition ${
                        active
                          ? "bg-navy text-cream"
                          : "text-ink-soft hover:bg-parchment hover:text-navy"
                      }`}
                    >
                      <span
                        className={`mt-px grid h-4 w-4 shrink-0 place-items-center rounded-full text-[0.55rem] font-bold ${
                          active ? "bg-gold text-navy-deep" : "bg-parchment text-navy"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span className="leading-snug">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="rounded-2xl bg-navy p-5 text-cream">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-gold">
              Mentor challenge
            </p>
            <p className="mt-2 font-display text-lg leading-snug">
              Explain this lesson out loud in 90 seconds without looking.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-cream/65">
              If you cannot, you have read it — not learned it. Return to the section that felt slippery.
            </p>
            <Link
              href="/mentor/new"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-gold"
            >
              Ask a mentor about it
              <ArrowIcon className="h-3.5 w-3.5" />
            </Link>
          </div>
        </aside>
      </div>
    </article>
  );
}
