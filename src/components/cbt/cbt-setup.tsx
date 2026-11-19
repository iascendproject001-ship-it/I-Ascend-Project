"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowIcon } from "@/components/ui";

type SetupSubject = {
  id: number;
  name: string;
  category: string;
  icon: string;
  questionCount: number;
};

const presets = [
  { id: "drill", label: "Quick drill", detail: "10 questions · 10 min", count: 10, minutes: 10, mode: "practice" },
  { id: "checkpoint", label: "Checkpoint", detail: "20 questions · 20 min", count: 20, minutes: 20, mode: "practice" },
  { id: "mock", label: "Full UTME mock", detail: "40 questions · 40 min", count: 40, minutes: 40, mode: "exam" },
];

export function CbtSetup({ subjects }: { subjects: SetupSubject[] }) {
  const router = useRouter();
  const [selected, setSelected] = useState<number[]>([]);
  const [presetId, setPresetId] = useState("drill");
  const [count, setCount] = useState(10);
  const [minutes, setMinutes] = useState(10);
  const [mode, setMode] = useState<"practice" | "exam">("practice");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const available = useMemo(
    () =>
      subjects
        .filter((subject) => selected.includes(subject.id))
        .reduce((sum, subject) => sum + subject.questionCount, 0),
    [selected, subjects],
  );

  const byCategory = useMemo(() => {
    const groups = new Map<string, SetupSubject[]>();
    for (const subject of subjects) {
      groups.set(subject.category, [...(groups.get(subject.category) ?? []), subject]);
    }
    return [...groups.entries()];
  }, [subjects]);

  function toggleSubject(id: number) {
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  function applyPreset(id: string) {
    const preset = presets.find((item) => item.id === id);
    if (!preset) return;
    setPresetId(id);
    setCount(preset.count);
    setMinutes(preset.minutes);
    setMode(preset.mode as "practice" | "exam");
  }

  async function start() {
    setError(null);
    if (selected.length === 0) {
      setError("Choose at least one subject to build your test.");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/cbt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subjectIds: selected, count, minutes, mode }),
      });
      const data = (await response.json()) as { id?: number; error?: string };
      if (!response.ok || !data.id) {
        setError(data.error ?? "Could not start the test. Please try again.");
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
    <div className="space-y-5">
      <section className="card p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-display text-xl text-navy-deep">1. Pick your subjects</h2>
            <p className="mt-1 text-xs text-ink-soft">
              Select the papers you want to sit. Mix all four UTME subjects for a realistic mock.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setSelected([])}
              className="rounded-full border border-line bg-white px-3 py-1.5 text-[0.7rem] font-semibold text-ink-soft hover:border-navy/30"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={() =>
                setSelected(subjects.filter((subject) => subject.category === "Compulsory").map((s) => s.id))
              }
              className="rounded-full border border-line bg-white px-3 py-1.5 text-[0.7rem] font-semibold text-navy hover:border-navy/30"
            >
              English + Maths
            </button>
          </div>
        </div>

        <div className="mt-4 space-y-4">
          {byCategory.map(([category, items]) => (
            <div key={category}>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink-soft/70">
                {category}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {items.map((subject) => {
                  const active = selected.includes(subject.id);
                  return (
                    <button
                      key={subject.id}
                      type="button"
                      onClick={() => toggleSubject(subject.id)}
                      aria-pressed={active}
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium transition ${
                        active
                          ? "border-navy bg-navy text-cream"
                          : "border-line bg-white text-ink-soft hover:border-navy/30"
                      }`}
                    >
                      <span>{subject.icon}</span>
                      {subject.name}
                      <span className={active ? "text-cream/60" : "text-ink-soft/60"}>
                        {subject.questionCount}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[0.7rem] text-ink-soft">
          {selected.length === 0
            ? "No subject selected yet."
            : `${selected.length} subject${selected.length > 1 ? "s" : ""} selected · ${available} questions available.`}
        </p>
      </section>

      <section className="card p-5">
        <h2 className="font-display text-xl text-navy-deep">2. Choose your format</h2>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {presets.map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={() => applyPreset(preset.id)}
              className={`rounded-xl border p-3 text-left transition ${
                presetId === preset.id
                  ? "border-navy bg-navy/5"
                  : "border-line bg-white hover:border-navy/30"
              }`}
            >
              <p className="text-sm font-semibold text-navy-deep">{preset.label}</p>
              <p className="mt-0.5 text-[0.7rem] text-ink-soft">{preset.detail}</p>
            </button>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <label className="block">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
              Questions
            </span>
            <select
              value={count}
              onChange={(event) => setCount(Number(event.target.value))}
              className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm text-navy-deep"
            >
              {[10, 20, 30, 40, 60].map((option) => (
                <option key={option} value={option}>
                  {option} questions
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
              Time limit
            </span>
            <select
              value={minutes}
              onChange={(event) => setMinutes(Number(event.target.value))}
              className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm text-navy-deep"
            >
              {[10, 15, 20, 30, 40, 60, 90].map((option) => (
                <option key={option} value={option}>
                  {option} minutes
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.1em] text-ink-soft">
              Mode
            </span>
            <select
              value={mode}
              onChange={(event) => setMode(event.target.value as "practice" | "exam")}
              className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm text-navy-deep"
            >
              <option value="practice">Practice (explanations after)</option>
              <option value="exam">Exam condition (no pause)</option>
            </select>
          </label>
        </div>

        {count > available && available > 0 && (
          <p className="mt-3 rounded-lg bg-gold-soft px-3 py-2 text-xs text-[#6b4a0d]">
            Selected subjects only have {available} questions — your test will use them all.
          </p>
        )}

        {error && (
          <p className="mt-3 rounded-lg bg-[#fdecec] px-3 py-2 text-xs font-medium text-[#a12b2b]">
            {error}
          </p>
        )}

        <button
          type="button"
          onClick={start}
          disabled={loading}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3.5 text-sm font-semibold text-cream transition hover:bg-navy-deep disabled:opacity-60 sm:w-auto"
        >
          {loading ? "Building your test…" : "Start the test"}
          {!loading && <ArrowIcon />}
        </button>
      </section>
    </div>
  );
}
