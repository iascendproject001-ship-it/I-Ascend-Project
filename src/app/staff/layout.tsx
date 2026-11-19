import Link from "next/link";
import type { ReactNode } from "react";
import { TorchMark } from "@/components/ui";
import { staffLogout } from "@/lib/staff-actions";
import { getStaffUser } from "@/lib/staff-auth";

export const dynamic = "force-dynamic";

const nav = [
  { href: "/staff", label: "Overview", exact: true },
  { href: "/staff/applications", label: "Applications", exact: false },
  { href: "/staff/articles", label: "Articles", exact: false, admin: true },
  { href: "/staff/social", label: "Social posts", exact: false, admin: true },
  { href: "/staff/settings", label: "Programme settings", exact: false, admin: true },
  { href: "/staff/admins", label: "Administrators", exact: false, admin: true },
];

export default async function StaffLayout({ children }: { children: ReactNode }) {
  const user = await getStaffUser();

  return (
    <div className="min-h-screen bg-cream lg:flex">
      <aside className="sticky top-0 hidden h-screen w-[248px] shrink-0 flex-col bg-navy-deep px-4 py-6 text-cream lg:flex">
        <Link href="/staff" className="flex items-center gap-2 px-1">
          <TorchMark className="h-9 w-7" />
          <span className="leading-none">
            <span className="block font-display text-lg font-bold tracking-tight">Ascend</span>
            <span className="mt-0.5 block text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-gold">
              Staff workspace
            </span>
          </span>
        </Link>

        {user ? (
          <>
            <nav className="mt-7 flex-1 space-y-1" aria-label="Staff">
              {nav
                .filter((item) => !item.admin || user.role === "admin")
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-cream/75 transition hover:bg-white/10 hover:text-cream"
                  >
                    {item.label}
                  </Link>
                ))}
              <Link
                href="/"
                target="_blank"
                className="block rounded-xl px-3 py-2.5 text-sm font-medium text-cream/50 transition hover:bg-white/10 hover:text-cream"
              >
                View public site ↗
              </Link>
            </nav>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5">
              <p className="truncate text-sm font-semibold">{user.name}</p>
              <p className="truncate text-[0.7rem] text-cream/60">
                {user.email} · {user.role}
              </p>
              <form action={staffLogout} className="mt-3">
                <button
                  type="submit"
                  className="w-full rounded-lg border border-white/15 px-2 py-1.5 text-[0.72rem] font-semibold text-cream/80 transition hover:border-white/40 hover:text-cream"
                >
                  Sign out
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-cream/70">
            Staff area. Sign in with your administrator account, or run first-time setup if none exists yet.
          </div>
        )}
      </aside>

      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-30 border-b border-line bg-cream/95 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
            <div className="flex items-center gap-2 lg:hidden">
              <span className="text-navy-deep">
                <TorchMark className="h-7 w-5" />
              </span>
              <p className="text-sm font-bold text-navy-deep">
                Staff <span className="font-medium text-ink-soft">workspace</span>
              </p>
            </div>
            {user ? (
              <nav className="flex gap-1 overflow-x-auto text-xs font-semibold lg:hidden" aria-label="Staff">
                {nav
                  .filter((item) => !item.admin || user.role === "admin")
                  .map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="shrink-0 rounded-full border border-line bg-white px-3 py-1.5 text-navy-deep"
                    >
                      {item.label}
                    </Link>
                  ))}
              </nav>
            ) : (
              <p className="text-xs text-ink-soft">Restricted area — authorised staff only.</p>
            )}
            <div className="hidden items-center gap-2 lg:flex">
              {user ? (
                <span className="rounded-full bg-navy px-3 py-1.5 text-[0.7rem] font-semibold text-gold">
                  {user.role === "admin" ? "Administrator" : "Staff"} · {user.name.split(" ")[0]}
                </span>
              ) : (
                <Link href="/staff/login" className="rounded-full bg-navy px-3.5 py-2 text-xs font-semibold text-cream">
                  Staff sign in
                </Link>
              )}
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">{children}</main>

        <footer className="border-t border-line px-4 py-5 text-center text-[0.7rem] text-ink-soft/80">
          I Ascend Project · Staff workspace. All access is logged. Handle learner data under the safeguarding
          and data-protection standard.
        </footer>
      </div>
    </div>
  );
}
