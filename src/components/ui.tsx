import type { ReactNode } from "react";

export function TorchMark({ className = "h-9 w-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 64" className={className} aria-hidden="true" role="presentation">
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 7V1" />
        <path d="M27.4 7.5l1.9-5.7" />
        <path d="M20.6 7.5l-1.9-5.7" />
        <path d="M30.5 9.1l3.5-4.9" />
        <path d="M17.5 9.1l-3.5-4.9" />
        <path d="M32.9 11.5l4.9-3.5" />
        <path d="M15.1 11.5l-4.9-3.5" />
        <path d="M34.5 14.6l5.7-1.9" />
        <path d="M13.5 14.6l-5.7-1.9" />
        <path d="M13 31h22l-2.6 5.4a2 2 0 0 1-1.8 1.1H17.4a2 2 0 0 1-1.8-1.1L13 31Z" />
        <path d="M11 31h26" />
        <path d="M24 37.5V50" />
        <path d="M20.5 41h7M20.5 45.5h7" />
        <path d="M19 50h10l2.5 6h-15L19 50Z" />
      </g>
      <path
        d="M24 9c2.8 4.6 5.6 7.4 5.6 12a5.6 6.4 0 1 1-11.2 0C18.4 16.4 21.2 13.6 24 9Z"
        fill="#E9A83A"
      />
      <path
        d="M24 16.5c1.5 2.3 2.5 3.6 2.5 5.3a2.5 2.8 0 1 1-5 0c0-1.7 1-3 2.5-5.3Z"
        fill="#FFF7E6"
      />
    </svg>
  );
}

export function Logo({ compact = false, tone = "dark" }: { compact?: boolean; tone?: "dark" | "light" }) {
  const textColor = tone === "light" ? "text-cream" : "text-navy-deep";
  return (
    <div className="flex items-center gap-2" role="img" aria-label="I Ascend Project — Rescuing the Future; Rebuilding the Future">
      <span className={tone === "light" ? "text-cream" : "text-navy-deep"}>
        <TorchMark className="h-9 w-7" />
      </span>
      {!compact && (
        <span className="leading-none">
          <span className={`block font-display text-[1.45rem] font-bold tracking-tight ${textColor}`}>
            Ascend
          </span>
          <span className="mt-0.5 block font-display text-[1.05rem] font-semibold tracking-tight text-gold-deep">
            Project
          </span>
        </span>
      )}
    </div>
  );
}

export function Badge({
  children,
  tone = "navy",
  className = "",
}: {
  children: ReactNode;
  tone?: "navy" | "gold" | "emerald" | "slate" | "plum" | "cream";
  className?: string;
}) {
  const tones: Record<string, string> = {
    navy: "bg-navy/8 text-navy border-navy/15",
    gold: "bg-gold-soft text-gold-deep border-gold/40",
    emerald: "bg-emerald-soft text-emerald border-emerald/20",
    slate: "bg-parchment text-ink-soft border-line",
    plum: "bg-plum/8 text-plum border-plum/20",
    cream: "bg-white/10 text-cream border-white/20",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.09em] ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function ProgressBar({
  value,
  tone = "navy",
  height = "h-2",
  label,
}: {
  value: number;
  tone?: "navy" | "gold" | "emerald";
  height?: string;
  label?: string;
}) {
  const colors: Record<string, string> = {
    navy: "bg-navy",
    gold: "bg-gold",
    emerald: "bg-emerald",
  };
  const width = Math.min(100, Math.max(0, value));
  return (
    <div
      className={`w-full overflow-hidden rounded-full bg-parchment ${height}`}
      role="progressbar"
      aria-valuenow={width}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label ?? "Progress"}
    >
      <div className={`${height} rounded-full ${colors[tone]}`} style={{ width: `${width}%` }} />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-[0.7rem] font-bold uppercase tracking-[0.2em] ${
            tone === "light" ? "text-gold" : "text-gold-deep"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl leading-[1.1] tracking-tight sm:text-4xl ${
          tone === "light" ? "text-cream" : "text-navy-deep"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[0.98rem] leading-relaxed ${
            tone === "light" ? "text-cream/70" : "text-ink-soft"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function StatTile({
  value,
  label,
  hint,
  tone = "light",
}: {
  value: ReactNode;
  label: string;
  hint?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={`rounded-2xl border p-4 ${
        tone === "light" ? "border-line bg-white" : "border-white/10 bg-white/5"
      }`}
    >
      <p
        className={`font-display text-2xl leading-none tracking-tight ${
          tone === "light" ? "text-navy-deep" : "text-cream"
        }`}
      >
        {value}
      </p>
      <p
        className={`mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] ${
          tone === "light" ? "text-ink-soft" : "text-cream/60"
        }`}
      >
        {label}
      </p>
      {hint && (
        <p className={`mt-1 text-xs ${tone === "light" ? "text-ink-soft/80" : "text-cream/50"}`}>{hint}</p>
      )}
    </div>
  );
}

export function EmptyState({
  title,
  description,
  action,
  icon = "✦",
}: {
  title: string;
  description: string;
  action?: ReactNode;
  icon?: string;
}) {
  return (
    <div className="card flex flex-col items-center px-6 py-12 text-center">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-gold-soft text-xl">{icon}</span>
      <h3 className="mt-4 font-display text-xl text-navy-deep">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">{description}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
