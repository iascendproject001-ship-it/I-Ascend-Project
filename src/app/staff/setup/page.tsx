import Link from "next/link";
import { redirect } from "next/navigation";
import { TorchMark } from "@/components/ui";
import { setupFirstAdmin } from "@/lib/staff-actions";
import { countActiveStaff, getStaffUser } from "@/lib/staff-auth";

export const dynamic = "force-dynamic";
export const metadata = { title: "First-time setup" };

export default async function StaffSetupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const user = await getStaffUser();
  if (user) redirect("/staff");
  if ((await countActiveStaff()) > 0) redirect("/staff/login");
  const { error } = await searchParams;

  return (
    <div className="mx-auto max-w-lg">
      <div className="card p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-navy text-cream">
            <TorchMark className="h-8 w-6" />
          </span>
          <div>
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-gold-deep">
              One-time setup
            </p>
            <h1 className="font-display text-2xl text-navy-deep">Create the administrator</h1>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          This page works exactly once — while no administrator exists. The account you create here has full
          control: programme settings, staff accounts and applicant data. Use a strong password and a work
          email you control.
        </p>

        {error && (
          <p className="mt-4 rounded-lg bg-[#fdecec] px-3 py-2 text-xs font-medium text-[#a12b2b]">{error}</p>
        )}

        <form action={setupFirstAdmin} className="mt-5 space-y-3.5">
          <label className="block">
            <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
              Full name
            </span>
            <input
              name="name"
              required
              placeholder="e.g. Programme Director"
              className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm placeholder:text-ink-soft/50"
            />
          </label>
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
          <div className="grid gap-3.5 sm:grid-cols-2">
            <label className="block">
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
                Password (min. 8 characters)
              </span>
              <input
                name="password"
                type="password"
                required
                minLength={8}
                autoComplete="new-password"
                className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm"
              />
            </label>
            <label className="block">
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
                Confirm password
              </span>
              <input
                name="confirm"
                type="password"
                required
                autoComplete="new-password"
                className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm"
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-emerald px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald/90"
          >
            Create administrator & open settings
          </button>
          <p className="text-center text-[0.68rem] leading-relaxed text-ink-soft">
            After this, you will be asked to record the confirmed cohort, application deadline, support and
            safeguarding contacts, and the privacy notice.
          </p>
        </form>
      </div>

      <p className="mt-4 text-center text-xs text-ink-soft">
        <Link href="/" className="font-semibold text-navy hover:underline">
          ← Back to public site
        </Link>
      </p>
    </div>
  );
}
