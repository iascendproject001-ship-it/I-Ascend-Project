"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowIcon } from "@/components/ui";

export type BaselineOption = { id: number; name: string; available: number };

export function BaselineStart({ options }: { options: BaselineOption[] }) {
  const router = useRouter();
  const [selected, setSelected] = useState<number[]>(options.map((option) => option.id));
  const [perCount, setPerCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const total = selected.length * perCount;
  const minutes = Math.min(120, Math.max(20, Math.round(total * 1.5)));

  function toggle(id: number) {
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  async function start() {
    setError(null);
    if (selected.length === 0) {
      setError("Select at least one subject for the diagnostic.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/cbt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subjectIds: selected, count: total, minutes, mode: "baseline" }),
      });
      const data = (await response.json()) as { id?: number; error?: string };
      if (!response.ok || !data.id) {
        setError(data.error ?? "Could not start the diagnostic. Try again.");
        setLoading(false);
        return;
      }
      router.push(`/cbt/${data.id}`);
    } catch {
      setError("Network problem. Check your connection and try again.");
      setLoading(false);
    }
  }

  return (
    <div className="card space-y-4 p-5">
      <div>
        <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink-soft">
          Subjects in this diagnostic
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {options.map((option) => {
            const active = selected.includes(option.id);
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => toggle(option.id)}
                aria-pressed={active}
                className={`rounded-full border px-3 py-2 text-xs font-medium transition ${
                  active
                    ? "border-navy bg-navy text-cream"
                    : "border-line bg-white text-ink-soft hover:border-navy/30"
                }`}
              >
                {option.name}
                <span className={active ? "ml-1 text-cream/60" : "ml-1 text-ink-soft/60"}>
                  {option.available} in bank
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
            Questions per subject
          </span>
          <select
            value={perCount}
            onChange={(event) => setPerCount(Number(event.target.value))}
            className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm text-navy-deep"
          >
            {[5, 10, 15].map((n) => (
              <option key={n} value={n}>
                {n} per subject
              </option>
            ))}
          </select>
        </label>
        <div className="rounded-lg border border-line bg-cream/60 px-3 py-2.5">
          <p className="text-[0.62rem] font-bold uppercase tracking-[0.1em] text-ink-soft">Your sitting</p>
          <p className="mt-1 text-sm font-semibold text-navy-deep">
            Up to {total} questions · {minutes} minutes
          </p>
        </div>
      </div>

      <p className="text-[0.7rem] leading-relaxed text-ink-soft">
        Answer honestly without help — a true baseline produces a true plan. Where the bank holds fewer
        questions than requested, the diagnostic uses everything available and says so in your report.
      </p>

      {error && (
        <p className="rounded-lg bg-[#fdecec] px-3 py-2 text-xs font-medium text-[#a12b2b]">{error}</p>
      )}

      <button
        type="button"
        onClick={start}
        disabled={loading || selected.length === 0}
        className="inline-flex items-center gap-2 rounded-xl bg-navy px-5 py-3.5 text-sm font-semibold text-cream transition hover:bg-navy-deep disabled:opacity-60"
      >
        {loading ? "Preparing your diagnostic…" : "Start my baseline assessment"}
        {!loading && <ArrowIcon />}
      </button>
    </div>
  );
}
