import { asc, desc } from "drizzle-orm";
import { db } from "@/db";
import { socialPosts } from "@/db/schema";
import { requireAdmin } from "@/lib/staff-auth";
import { deleteSocialPost, saveSocialPost } from "@/lib/staff-actions";
import { Badge } from "@/components/ui";

export const dynamic = "force-dynamic";
export const metadata = { title: "Social highlights" };

const inputClass =
  "mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm text-ink placeholder:text-ink-soft/50";

export default async function StaffSocialPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; deleted?: string; error?: string }>;
}) {
  await requireAdmin();
  const rows = await db
    .select()
    .from(socialPosts)
    .orderBy(asc(socialPosts.sortOrder), desc(socialPosts.id));
  const { saved, deleted, error } = await searchParams;

  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <div>
        <Badge tone="gold">Content studio · administrators only</Badge>
        <h1 className="mt-2 font-display text-3xl text-navy-deep">Social highlights.</h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Link the site to previous posts on your handles: paste the post address, add a one-line caption,
          and it appears on the homepage. Use <em>sort order</em> (0 first) to arrange them. No passwords or
          app connections needed — these are simple links you control.
        </p>
      </div>

      {saved === "1" && (
        <p className="rounded-xl border border-emerald/20 bg-emerald-soft px-4 py-3 text-sm font-medium text-emerald">
          Post link saved — it is live on the homepage.
        </p>
      )}
      {deleted === "1" && (
        <p className="rounded-xl border border-line bg-parchment px-4 py-3 text-sm font-medium text-ink-soft">
          Post link removed.
        </p>
      )}
      {error && (
        <p className="rounded-xl bg-[#fdecec] px-4 py-3 text-sm font-medium text-[#a12b2b]">{error}</p>
      )}

      <form action={saveSocialPost} className="card space-y-4 p-5">
        <h2 className="font-display text-xl text-navy-deep">Add a post link</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
              Platform
            </span>
            <select name="platform" defaultValue="facebook" className={inputClass}>
              <option value="facebook">Facebook</option>
              <option value="instagram">Instagram</option>
            </select>
          </label>
          <label className="block">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
              Date shown (free text)
            </span>
            <input name="postedOn" className={inputClass} placeholder="e.g. 12 Oct 2026" />
          </label>
        </div>
        <label className="block">
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
            Caption shown on the site
          </span>
          <textarea
            name="caption"
            rows={2}
            required
            className={inputClass}
            placeholder="What is this post about?"
          />
        </label>
        <label className="block">
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
            Post address (link)
          </span>
          <input
            name="url"
            required
            className={inputClass}
            placeholder="Paste the Facebook or Instagram post link"
          />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
              Sort order (0 shows first)
            </span>
            <input name="sortOrder" type="number" defaultValue={0} className={inputClass} />
          </label>
          <label className="flex items-center gap-2.5 rounded-lg border border-line bg-cream/60 px-3 py-2.5 text-sm text-ink">
            <input type="checkbox" name="visible" defaultChecked className="h-4 w-4 rounded border-line" />
            Show on homepage
          </label>
        </div>
        <div className="flex justify-end border-t border-line pt-4">
          <button
            type="submit"
            className="rounded-full bg-navy px-6 py-3 text-xs font-semibold text-cream transition hover:bg-navy-deep"
          >
            Add post link
          </button>
        </div>
      </form>

      <div className="overflow-hidden rounded-2xl border border-line bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-parchment/70 text-[0.62rem] uppercase tracking-[0.1em] text-ink-soft">
            <tr>
              <th className="px-4 py-3 font-bold">Post</th>
              <th className="px-4 py-3 font-bold">Shown</th>
              <th className="px-4 py-3 font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {rows.map((row) => (
              <tr key={row.id} className="align-top">
                <td className="px-4 py-3">
                  <p className="text-[0.62rem] font-bold uppercase tracking-wide text-gold-deep">
                    {row.platform} {row.postedOn ? `· ${row.postedOn}` : ""}
                  </p>
                  <p className="mt-0.5 line-clamp-2 text-ink">{row.caption}</p>
                  <a
                    href={row.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="break-all font-mono text-[0.65rem] text-navy hover:underline"
                  >
                    {row.url}
                  </a>
                </td>
                <td className="px-4 py-3 text-xs text-ink-soft">
                  {row.visible === 1 ? "Yes" : "Hidden"}
                </td>
                <td className="px-4 py-3 text-right">
                  <form action={deleteSocialPost}>
                    <input type="hidden" name="id" value={row.id} />
                    <button
                      type="submit"
                      className="rounded-lg border border-[#e7b4b4] bg-white px-3 py-1.5 text-xs font-semibold text-[#a12b2b]"
                    >
                      Remove
                    </button>
                  </form>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-8 text-center text-sm text-ink-soft">
                  No post links yet. Add your best Facebook and Instagram posts above.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
