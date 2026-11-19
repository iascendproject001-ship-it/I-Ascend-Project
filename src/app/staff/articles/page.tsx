import Link from "next/link";
import { desc } from "drizzle-orm";
import { db } from "@/db";
import { articles } from "@/db/schema";
import { requireAdmin } from "@/lib/staff-auth";
import { deleteArticle } from "@/lib/staff-actions";
import { Badge } from "@/components/ui";

export const dynamic = "force-dynamic";
export const metadata = { title: "Manage articles" };

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-NG", { day: "numeric", month: "short", year: "numeric" }).format(
    new Date(date),
  );
}

export default async function StaffArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; deleted?: string; error?: string }>;
}) {
  await requireAdmin();
  const rows = await db.select().from(articles).orderBy(desc(articles.updatedAt));
  const { saved, deleted, error } = await searchParams;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <Badge tone="gold">Content studio · administrators only</Badge>
          <h1 className="mt-2 font-display text-3xl text-navy-deep">Articles & stories.</h1>
          <p className="mt-1 max-w-2xl text-sm text-ink-soft">
            Paste already-written articles here, publish them to the site, and optionally link each one
            back to its original Facebook or Instagram post.
          </p>
        </div>
        <Link
          href="/staff/articles/new"
          className="rounded-full bg-navy px-5 py-2.5 text-xs font-semibold text-cream transition hover:bg-navy-deep"
        >
          + New article
        </Link>
      </div>

      {saved === "1" && (
        <p className="rounded-xl border border-emerald/20 bg-emerald-soft px-4 py-3 text-sm font-medium text-emerald">
          Article saved and published to the site where applicable.
        </p>
      )}
      {deleted === "1" && (
        <p className="rounded-xl border border-line bg-parchment px-4 py-3 text-sm font-medium text-ink-soft">
          Article deleted.
        </p>
      )}
      {error && (
        <p className="rounded-xl bg-[#fdecec] px-4 py-3 text-sm font-medium text-[#a12b2b]">{error}</p>
      )}

      <div className="overflow-hidden rounded-2xl border border-line bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-parchment/70 text-[0.62rem] uppercase tracking-[0.1em] text-ink-soft">
            <tr>
              <th className="px-4 py-3 font-bold">Title</th>
              <th className="px-4 py-3 font-bold">Status</th>
              <th className="px-4 py-3 font-bold">Updated</th>
              <th className="px-4 py-3 font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((row) => (
              <tr key={row.id} className="align-top">
                <td className="px-4 py-3">
                  <p className="font-semibold text-navy-deep">{row.title}</p>
                  <p className="font-mono text-[0.68rem] text-ink-soft">/stories/{row.slug}</p>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[0.65rem] font-bold ${
                      row.status === "published"
                        ? "bg-emerald-soft text-emerald"
                        : "bg-parchment text-ink-soft"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-xs text-ink-soft">{formatDate(row.updatedAt)}</td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-2">
                    <Link
                      href={`/staff/articles/${row.id}/edit`}
                      className="rounded-lg border border-line bg-white px-3 py-1.5 text-xs font-semibold text-navy hover:border-navy/40"
                    >
                      Edit
                    </Link>
                    <form action={deleteArticle}>
                      <input type="hidden" name="id" value={row.id} />
                      <button
                        type="submit"
                        className="rounded-lg border border-[#e7b4b4] bg-white px-3 py-1.5 text-xs font-semibold text-[#a12b2b]"
                      >
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-sm text-ink-soft">
                  No articles yet. Create the first one — a welcome note or an admission guide.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
