import Link from "next/link";
import { requireLearner } from "@/lib/session";
import { getSubjects } from "@/lib/data";
import { createThread } from "@/lib/actions";
import { Badge } from "@/components/ui";

export const dynamic = "force-dynamic";
export const metadata = { title: "Ask a mentor" };

const categories = [
  "Academics",
  "Admissions",
  "Study plan",
  "Mindset & motivation",
  "Financial support",
];

export default async function NewThreadPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  await requireLearner();
  const { error } = await searchParams;
  const subjects = await getSubjects();

  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <div>
        <Link href="/mentor" className="text-xs font-semibold text-navy hover:underline">
          ← Back to mentorship
        </Link>
        <Badge tone="gold" className="mt-3">
          New conversation
        </Badge>
        <h1 className="mt-2 font-display text-3xl text-navy-deep">Ask your question clearly.</h1>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          One question per conversation works best. A mentor will reply with an explanation and next steps —
          usually within 24 hours.
        </p>
      </div>

      {error === "details" && (
        <p className="rounded-xl bg-[#fdecec] px-4 py-3 text-sm font-medium text-[#a12b2b]">
          Please give your question a clear title and write at least a sentence of context.
        </p>
      )}

      <form action={createThread} className="card space-y-4 p-5 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
              Category
            </span>
            <select
              name="category"
              className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm"
              defaultValue="Academics"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
              Subject (optional)
            </span>
            <select
              name="subjectId"
              className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm"
              defaultValue="0"
            >
              <option value="0">Not subject-specific</option>
              {subjects.map((subject) => (
                <option key={subject.id} value={subject.id}>
                  {subject.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="block">
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-ink-soft">Title</span>
          <input
            name="title"
            required
            minLength={5}
            maxLength={140}
            placeholder="e.g. I cannot solve questions on limiting reagents"
            className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm placeholder:text-ink-soft/50"
          />
        </label>

        <label className="block">
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
            Your question
          </span>
          <textarea
            name="body"
            required
            minLength={10}
            rows={7}
            placeholder="Tell us what you have tried, what exactly confuses you, and what you are targeting."
            className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm leading-relaxed placeholder:text-ink-soft/50"
          />
        </label>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
          <p className="text-[0.7rem] text-ink-soft">
            Be specific. Vague questions get vague answers — and you deserve better.
          </p>
          <button
            type="submit"
            className="rounded-full bg-navy px-6 py-3 text-xs font-semibold text-cream transition hover:bg-navy-deep"
          >
            Send to a mentor
          </button>
        </div>
      </form>
    </div>
  );
}
