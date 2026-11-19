import Link from "next/link";
import { requireAdmin } from "@/lib/staff-auth";
import { saveArticle } from "@/lib/staff-actions";
import { Badge } from "@/components/ui";

export const dynamic = "force-dynamic";
export const metadata = { title: "New article" };

const inputClass =
  "mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm text-ink placeholder:text-ink-soft/50";

export default async function NewArticlePage() {
  await requireAdmin();

  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <div>
        <Link href="/staff/articles" className="text-xs font-semibold text-navy hover:underline">
          ← Back to articles
        </Link>
        <Badge tone="gold" className="mt-3">
          New article
        </Badge>
        <h1 className="mt-2 font-display text-3xl text-navy-deep">Publish an article.</h1>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          Paste an already-written article below. Simple formatting is supported: blank lines for
          paragraphs, <code>## Headings</code>, <code>**bold**</code>, <code>- bullet lists</code> and{" "}
          <code>[links](https://…)</code>. To link an old social post, paste its address in the source
          fields and readers will see an “originally shared on” button.
        </p>
      </div>

      <form action={saveArticle} className="card space-y-4 p-5 sm:p-6">
        <label className="block">
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">Title</span>
          <input name="title" required minLength={3} className={inputClass} placeholder="Article headline" />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
              Web address (optional — auto from title)
            </span>
            <input name="slug" className={inputClass} placeholder="my-article-title" />
          </label>
          <label className="block">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
              Author name
            </span>
            <input name="authorName" defaultValue="I Ascend Project" className={inputClass} />
          </label>
        </div>
        <label className="block">
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
            Short summary (shown on cards)
          </span>
          <textarea name="excerpt" rows={2} className={inputClass} placeholder="One or two sentences." />
        </label>
        <label className="block">
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
            Article body
          </span>
          <textarea
            name="body"
            rows={14}
            required
            className={`${inputClass} leading-relaxed`}
            placeholder="Paste the full article here…"
          />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
              Cover image address (optional)
            </span>
            <input name="coverUrl" className={inputClass} placeholder="https://… or /images/…" />
          </label>
          <label className="block">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">Status</span>
            <select name="status" defaultValue="draft" className={inputClass}>
              <option value="draft">Draft (staff only)</option>
              <option value="published">Published (public)</option>
            </select>
          </label>
          <label className="block">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
              Originally posted on (optional)
            </span>
            <select name="sourceLabel" defaultValue="" className={inputClass}>
              <option value="">Not from social media</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
            </select>
          </label>
          <label className="block">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
              Original post address (optional)
            </span>
            <input name="sourceUrl" className={inputClass} placeholder="Paste the Facebook/Instagram post link" />
          </label>
        </div>
        <div className="flex justify-end border-t border-line pt-4">
          <button
            type="submit"
            className="rounded-full bg-navy px-6 py-3 text-xs font-semibold text-cream transition hover:bg-navy-deep"
          >
            Save article
          </button>
        </div>
      </form>
    </div>
  );
}
