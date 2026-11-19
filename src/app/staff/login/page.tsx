import Link from "next/link";
import { redirect } from "next/navigation";
import { TorchMark } from "@/components/ui";
import { staffLogin } from "@/lib/staff-actions";
import { countActiveStaff, getStaffUser } from "@/lib/staff-auth";

export const dynamic = "force-dynamic";
export const metadata = { title: "Staff sign in" };

export default async function StaffLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const user = await getStaffUser();
  if (user) redirect("/staff");
  const { error } = await searchParams;
  const hasAdmins = (await countActiveStaff()) > 0;

  return (
    <div className="mx-auto max-w-md">
      <div className="card p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-cream">
            <TorchMark className="h-8 w-6" />
          </span>
          <div>
            <h1 className="font-display text-2xl text-navy-deep">Staff sign in</h1>
            <p className="text-xs text-ink-soft">I Ascend Project · restricted workspace</p>
          </div>
        </div>

        {error && (
          <p className="mt-4 rounded-lg bg-[#fdecec] px-3 py-2 text-xs font-medium text-[#a12b2b]">{error}</p>
        )}

        {!hasAdmins ? (
          <div className="mt-5 rounded-xl border border-gold/40 bg-gold-soft/60 p-4 text-sm leading-relaxed text-[#6b4a0d]">
            <p className="font-semibold text-navy-deep">No administrator exists yet.</p>
            <p className="mt-1">
              This workspace has never been set up. Create the first administrator account to begin.
            </p>
            <Link
              href="/staff/setup"
              className="mt-3 inline-block rounded-full bg-navy px-5 py-2.5 text-xs font-semibold text-cream"
            >
              Run first-time setup
            </Link>
          </div>
        ) : (
          <form action={staffLogin} className="mt-5 space-y-3.5">
            <label className="block">
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
                Work email
              </span>
              <input
                name="email"
                type="email"
                required
                autoComplete="username"
                className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm"
              />
            </label>
            <label className="block">
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
                Password
              </span>
              <input
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-xl bg-navy px-5 py-3 text-sm font-semibold text-cream transition hover:bg-navy-deep"
            >
              Sign in to workspace
            </button>
            <p className="text-center text-[0.68rem] leading-relaxed text-ink-soft">
              Sessions expire after 8 hours. Never share your password. Lost access? Another administrator
              can reset it from the Administrators page.
            </p>
          </form>
        )}
      </div>

      <p className="mt-4 text-center text-xs text-ink-soft">
        <Link href="/" className="font-semibold text-navy hover:underline">
          ← Back to public site
        </Link>
      </p>
    </div>
  );
}
