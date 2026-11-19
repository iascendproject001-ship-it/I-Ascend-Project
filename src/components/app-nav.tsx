"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, type IconName } from "@/components/icons";

const items: { href: string; label: string; icon: IconName }[] = [
  { href: "/dashboard", label: "Dashboard", icon: "grid" },
  { href: "/learn", label: "Subjects & lessons", icon: "book" },
  { href: "/cbt", label: "CBT practice", icon: "monitor" },
  { href: "/mentor", label: "Mentorship", icon: "chat" },
  { href: "/admissions", label: "Course & school finder", icon: "compass" },
  { href: "/resources", label: "Textbook library", icon: "library" },
  { href: "/plan", label: "My learning plan", icon: "target" },
  { href: "/framework", label: "Programme framework", icon: "spark" },
  { href: "/profile", label: "My profile", icon: "user" },
];

export function AppNav({ variant = "sidebar" }: { variant?: "sidebar" | "mobile" }) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/dashboard" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  if (variant === "mobile") {
    return (
      <nav className="-mx-1 flex gap-1.5 overflow-x-auto pb-1" aria-label="Primary">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition ${
              isActive(item.href)
                ? "border-navy bg-navy text-cream"
                : "border-line bg-white text-ink-soft hover:border-navy/30"
            }`}
          >
            <Icon name={item.icon} className="h-4 w-4" />
            {item.label.split(" ")[0]}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav className="flex flex-col gap-1" aria-label="Primary">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
            isActive(item.href)
              ? "bg-navy text-cream shadow-[0_6px_18px_rgba(16,41,75,0.18)]"
              : "text-ink-soft hover:bg-parchment hover:text-navy-deep"
          }`}
        >
          <Icon
            name={item.icon}
            className={`h-[1.15rem] w-[1.15rem] ${isActive(item.href) ? "text-gold" : "text-navy/60"}`}
          />
          <span className="truncate">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
