import { asc } from "drizzle-orm";
import { db } from "@/db";
import { staffUsers } from "@/db/schema";
import { createStaffMember } from "@/lib/staff-actions";
import { requireAdmin } from "@/lib/staff-auth";
import { Badge } from "@/components/ui";

export const dynamic = "force-dynamic";
export const metadata = { title: "Administrators" };

export default async function AdminsPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; notice?: string }>;
}) {
  const me = await requireAdmin();
  const users = await db.select().from(staffUsers).orderBy(asc(staffUsers.id));
  const { error, notice } = await searchParams;

  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <div>
        <Badge tone="gold">Administrators only</Badge>
        <h1 className="mt-2 font-display text-3xl text-navy-deep">Who can enter this workspace.</h1>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          Administrators manage settings and staff. Staff members can review applications and the overview,
          but cannot change settings or add accounts.
        </p>
      </div>

      {notice && (
        <p className="rounded-xl border border-emerald/20 bg-emerald-soft px-4 py-3 text-sm font-medium text-emerald">
          {notice}
        </p>
      )}
      {error && (
        <p className="rounded-xl bg-[#fdecec] px-4 py-3 text-sm font-medium text-[#a12b2b]">{error}</p>
      )}

      <section className="overflow-hidden rounded-2xl border border-line bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-parchment/70 text-[0.62rem] uppercase tracking-[0.1em] text-ink-soft">
            <tr>
              <th className="px-4 py-3 font-bold">Name</th>
              <th className="px-4 py-3 font-bold">Email</th>
              <th className="px-4 py-3 font-bold">Role</th>
              <th className="px-4 py-3 font-bold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-3 font-semibold text-navy-deep">
                  {user.name}
                  {user.id === me.id && (
                    <span className="ml-2 rounded-full bg-gold-soft px-2 py-0.5 text-[0.6rem] font-bold text-gold-deep">
                      YOU
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 text-xs text-ink-soft">{user.email}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[0.65rem] font-bold ${
                      user.role === "admin" ? "bg-navy text-gold" : "bg-parchment text-ink-soft"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-4 py-3 text-xs text-ink-soft">
                  {user.isActive === 1 ? "Active" : "Disabled"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <form action={createStaffMember} className="card space-y-4 p-5">
        <h2 className="font-display text-xl text-navy-deep">Add a staff member</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">Full name</span>
            <input
              name="name"
              required
              className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm"
            />
          </label>
          <label className="block">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">Work email</span>
            <input
              name="email"
              type="email"
              required
              className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm"
            />
          </label>
          <label className="block">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
              Temporary password (min. 8 characters)
            </span>
            <input
              name="password"
              type="password"
              required
              minLength={8}
              className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm"
            />
          </label>
          <label className="block">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">Role</span>
            <select
              name="role"
              defaultValue="staff"
              className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm"
            >
              <option value="staff">Staff — review applications</option>
              <option value="admin">Administrator — full control</option>
            </select>
          </label>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
          <p className="text-[0.7rem] text-ink-soft">
            Share the password securely (in person or by phone, never by broadcast message) and ask them to
            change it after first sign-in.
          </p>
          <button
            type="submit"
            className="rounded-full bg-navy px-6 py-3 text-xs font-semibold text-cream transition hover:bg-navy-deep"
          >
            Add staff member
          </button>
        </div>
      </form>
    </div>
  );
}
