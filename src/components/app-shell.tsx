import Link from "next/link";
import type { ReactNode } from "react";
import { AppNav } from "@/components/app-nav";
import { signOut } from "@/lib/actions";
import { Badge, Logo, ProgressBar } from "@/components/ui";
import type { Learner } from "@/db/schema";

export function AppShell({
  learner,
  children,
}: {
  learner: Learner | null;
  children: ReactNode;
}) {
  const initial = learner?.name?.charAt(0)?.toUpperCase() ?? "G";
  const target = learner?.targetScore ?? 300;
  const targetLabel = learner?.targetCourse || "your dream course";

  return (
    <div className="min-h-screen bg-cream lg:flex">
      <aside className="sticky top-0 hidden h-screen w-[264px] shrink-0 flex-col border-r border-line bg-white px-4 py-6 lg:flex">
        <Link href="/" className="px-1">
          <Logo />
        </Link>

        <div className="mt-7 flex-1">
          <p className="mb-2 px-3 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-ink-soft/60">
            Learning space
          </p>
          <AppNav />
        </div>

        <div className="mt-4 rounded-2xl border border-line bg-cream p-3.5">
          {learner ? (
            <>
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-navy text-sm font-bold text-gold">
                  {initial}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-navy-deep">{learner.name}</p>
                  <p className="text-[0.7rem] text-ink-soft">UTME {learner.examYear}</p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between text-[0.68rem] font-semibold uppercase tracking-wide text-ink-soft">
                <span>Target</span>
                <span className="text-navy-deep">{target}</span>
              </div>
              <div className="mt-1.5">
                <ProgressBar value={Math.round((target / 400) * 100)} tone="gold" height="h-1.5" />
              </div>
              <p className="mt-2 line-clamp-1 text-[0.7rem] text-ink-soft">{targetLabel}</p>
              <form action={signOut} className="mt-3">
                <button
                  type="submit"
                  className="w-full rounded-lg border border-line bg-white px-2 py-1.5 text-[0.72rem] font-semibold text-ink-soft transition hover:border-navy/30 hover:text-navy"
                >
                  Sign out
                </button>
              </form>
            </>
          ) : (
            <>
              <p className="text-sm font-semibold text-navy-deep">Learning as a guest</p>
              <p className="mt-1 text-[0.72rem] leading-relaxed text-ink-soft">
                Create a free profile to save progress, take CBTs and reach a mentor.
              </p>
              <Link
                href="/start"
                className="mt-3 block rounded-lg bg-navy px-2 py-2 text-center text-[0.72rem] font-semibold text-cream"
              >
                Start free
              </Link>
            </>
          )}
        </div>
      </aside>

      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-30 border-b border-line bg-cream/95 backdrop-blur lg:px-8">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 lg:px-0">
            <div className="flex items-center gap-3 lg:hidden">
              <Link href="/">
                <Logo compact />
              </Link>
              <div>
                <p className="font-display text-base leading-none text-navy-deep">I Ascend</p>
                <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-gold-deep">
                  Project
                </p>
              </div>
            </div>
            <div className="hidden items-center gap-2 lg:flex">
              <Badge tone="emerald">UTME {learner?.examYear ?? 2027} preparation</Badge>
              <span className="text-xs text-ink-soft">
                {learner ? `Welcome back, ${learner.name.split(" ")[0]}.` : "Explore the programme"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/cbt"
                className="hidden rounded-full border border-navy/15 bg-white px-3.5 py-2 text-xs font-semibold text-navy transition hover:border-navy/40 sm:inline-flex"
              >
                Quick CBT
              </Link>
              {learner ? (
                <Link
                  href="/profile"
                  className="flex items-center gap-2 rounded-full border border-line bg-white py-1 pl-1 pr-3"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-navy text-xs font-bold text-gold">
                    {initial}
                  </span>
                  <span className="max-w-[8rem] truncate text-xs font-semibold text-navy-deep">
                    {learner.name.split(" ")[0]}
                  </span>
                </Link>
              ) : (
                <Link
                  href="/start"
                  className="rounded-full bg-navy px-3.5 py-2 text-xs font-semibold text-cream"
                >
                  Start free
                </Link>
              )}
            </div>
          </div>
          <div className="px-4 pb-2 lg:hidden">
            <AppNav variant="mobile" />
          </div>
        </header>

        <main className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">{children}</main>

        <footer className="border-t border-line px-4 py-6 text-center text-[0.7rem] text-ink-soft/80 lg:px-8">
          I Ascend Project · An educational intervention, not a promise of admission. Cut-off marks are
          indicative; always confirm with JAMB and your institution.
        </footer>
      </div>
    </div>
  );
}
