import Link from "next/link";
import { notFound } from "next/navigation";
import { requireLearner } from "@/lib/session";
import { getThreadDetail } from "@/lib/data";
import { addFollowUp } from "@/lib/actions";
import { ArrowIcon, Badge } from "@/components/ui";

export const dynamic = "force-dynamic";
export const metadata = { title: "Mentor conversation" };

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-NG", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

export default async function ThreadPage({ params }: { params: Promise<{ threadId: string }> }) {
  const { threadId: rawId } = await params;
  const threadId = Number(rawId);
  if (!Number.isFinite(threadId)) notFound();

  const learner = await requireLearner();
  const detail = await getThreadDetail(learner.id, threadId);
  if (!detail) notFound();

  const { thread, replies } = detail;

  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <div>
        <Link href="/mentor" className="text-xs font-semibold text-navy hover:underline">
          ← Back to mentorship
        </Link>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <Badge tone="gold">{thread.category}</Badge>
          <span
            className={`rounded-full px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wide ${
              thread.status === "answered" ? "bg-emerald-soft text-emerald" : "bg-gold-soft text-gold-deep"
            }`}
          >
            {thread.status === "answered" ? "Mentor replied" : "Awaiting mentor"}
          </span>
          <span className="text-[0.68rem] text-ink-soft">Opened {formatDate(thread.createdAt)}</span>
        </div>
        <h1 className="mt-2 font-display text-3xl leading-tight text-navy-deep">{thread.title}</h1>
      </div>

      <article className="card p-5">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-navy text-sm font-bold text-gold">
            {learner.name.charAt(0).toUpperCase()}
          </span>
          <div>
            <p className="text-sm font-semibold text-navy-deep">{learner.name}</p>
            <p className="text-[0.68rem] text-ink-soft">Learner · {formatDate(thread.createdAt)}</p>
          </div>
        </div>
        <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-ink">{thread.body}</p>
      </article>

      <div className="space-y-3">
        {replies.map((reply) => {
          const isMentor = reply.authorRole !== "Learner";
          return (
            <article
              key={reply.id}
              className={`rounded-2xl border p-5 ${
                isMentor ? "border-navy/20 bg-white" : "border-line bg-cream/70"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`grid h-9 w-9 place-items-center rounded-full text-sm font-bold ${
                    isMentor ? "bg-gold text-navy-deep" : "bg-navy text-gold"
                  }`}
                >
                  {reply.authorName.charAt(0).toUpperCase()}
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-deep">{reply.authorName}</p>
                  <p className="text-[0.68rem] text-ink-soft">
                    {reply.authorRole} · {formatDate(reply.createdAt)}
                  </p>
                </div>
                {isMentor && (
                  <span className="ml-auto rounded-full bg-emerald-soft px-2 py-0.5 text-[0.55rem] font-bold uppercase tracking-wide text-emerald">
                    Verified mentor
                  </span>
                )}
              </div>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-ink">{reply.body}</p>
            </article>
          );
        })}
        {replies.length === 0 && (
          <p className="rounded-2xl border border-dashed border-line bg-white p-5 text-sm text-ink-soft">
            No reply yet. Add any detail that might help your mentor — a page reference, your working, or your
            score so far.
          </p>
        )}
      </div>

      <form action={addFollowUp} className="card space-y-3 p-5">
        <input type="hidden" name="threadId" value={thread.id} />
        <label className="block">
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
            Add a follow-up
          </span>
          <textarea
            name="body"
            required
            rows={4}
            placeholder="Share your working, what you tried, or a thank-you."
            className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm leading-relaxed placeholder:text-ink-soft/50"
          />
        </label>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-[0.68rem] text-ink-soft">Follow-ups reopen the conversation for a mentor.</p>
          <button
            type="submit"
            className="rounded-full bg-navy px-5 py-2.5 text-xs font-semibold text-cream transition hover:bg-navy-deep"
          >
            Send follow-up
          </button>
        </div>
      </form>

      <div className="rounded-2xl border border-line bg-gold-soft/60 p-5 text-sm text-[#6b4a0d]">
        <p className="font-display text-lg text-navy-deep">While you wait</p>
        <p className="mt-1 leading-relaxed">
          Read the matching lesson, then attempt five questions on the topic. Bring the working to your mentor
          — that conversation will be twice as useful.
        </p>
        <div className="mt-3 flex flex-wrap gap-3 text-xs font-semibold text-navy">
          <Link href="/learn" className="inline-flex items-center gap-1.5 hover:underline">
            Open the curriculum <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
          <Link href="/cbt" className="inline-flex items-center gap-1.5 hover:underline">
            Try a CBT <ArrowIcon className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
