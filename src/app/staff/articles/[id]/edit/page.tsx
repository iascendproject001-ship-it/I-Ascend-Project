import Link from "next/link";
import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { articles } from "@/db/schema";
import { requireAdmin } from "@/lib/staff-auth";
import { saveArticle } from "@/lib/staff-actions";
import { Badge } from "@/components/ui";

export const dynamic = "force-dynamic";
export const metadata = { title: "Edit article" };

const inputClass =
  "mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm text-ink placeholder:text-ink-soft/50";

export default async function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id: raw } = await params;
  const id = Number(raw);
  if (!Number.isFinite(id)) notFound();
  const [row] = await db.select().from(articles).where(eq(articles.id, id)).limit(1);
  if (!row) notFound();

  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <div>
        <Link href="/staff/articles" className="text-xs font-semibold text-navy hover:underline">
          ← Back to articles
        </Link>
        <Badge tone="gold" className="mt-3">
          Editing · {row.status}
        </Badge>
        <h1 className="mt-2 line-clamp-2 font-display text-3xl text-navy-deep">{row.title}</h1>
      </div>

      <form action={saveArticle} className="card space-y-4 p-5 sm:p-6">
        <input type="hidden" name="id" value={row.id} />
        <label className="block">
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">Title</span>
          <input name="title" required minLength={3} defaultValue={row.title} className={inputClass} />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
              Web address
            </span>
            <input name="slug" defaultValue={row.slug} className={inputClass} />
          </label>
          <label className="block">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
              Author name
            </span>
            <input name="authorName" defaultValue={row.authorName} className={inputClass} />
          </label>
        </div>
        <label className="block">
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
            Short summary
          </span>
          <textarea name="excerpt" rows={2} defaultValue={row.excerpt} className={inputClass} />
        </label>
        <label className="block">
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
            Article body
          </span>
          <textarea name="body" rows={14} required defaultValue={row.body} className={`${inputClass} leading-relaxed`} />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
              Cover image address
            </span>
            <input name="coverUrl" defaultValue={row.coverUrl} className={inputClass} />
          </label>
          <label className="block">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">Status</span>
            <select name="status" defaultValue={row.status} className={inputClass}>
              <option value="draft">Draft (staff only)</option>
              <option value="published">Published (public)</option>
            </select>
          </label>
          <label className="block">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
              Originally posted on
            </span>
            <select name="sourceLabel" defaultValue={row.sourceLabel} className={inputClass}>
              <option value="">Not from social media</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
            </select>
          </label>
          <label className="block">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
              Original post address
            </span>
            <input name="sourceUrl" defaultValue={row.sourceUrl} className={inputClass} />
          </label>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
          <Link
            href={row.status === "published" ? `/stories/${row.slug}` : "/staff/articles"}
            className="text-xs font-semibold text-navy hover:underline"
          >
            {row.status === "published" ? "View public page →" : "Drafts are visible to staff only"}
          </Link>
          <button
            type="submit"
            className="rounded-full bg-navy px-6 py-3 text-xs font-semibold text-cream transition hover:bg-navy-deep"
          >
            Save changes
          </button>
        </div>
      </form>
    </div>
  );
}
