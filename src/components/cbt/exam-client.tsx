"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export type ExamQuestion = {
  id: number;
  prompt: string;
  options: string[];
  topic: string;
  subjectName: string;
  subjectIcon: string;
};

const letters = ["A", "B", "C", "D", "E"];

export function ExamClient({
  sessionId,
  questions,
  initialAnswers,
  durationSeconds,
  startedAt,
  label,
  mode,
}: {
  sessionId: number;
  questions: ExamQuestion[];
  initialAnswers: Record<number, number | null>;
  durationSeconds: number;
  startedAt: string;
  label: string;
  mode: string;
}) {
  const router = useRouter();
  const [answers, setAnswers] = useState<Record<number, number | null>>(initialAnswers);
  const [flags, setFlags] = useState<number[]>([]);
  const [index, setIndex] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPalette, setShowPalette] = useState(false);

  const deadline = useMemo(
    () => new Date(startedAt).getTime() + durationSeconds * 1000,
    [startedAt, durationSeconds],
  );
  const [remaining, setRemaining] = useState(() =>
    Math.max(0, Math.round((deadline - Date.now()) / 1000)),
  );
  const submittedRef = useRef(false);
  const submitRef = useRef<(auto?: boolean) => void>(() => {});

  const current = questions[index];
  const answeredCount = questions.filter((question) => answers[question.id] !== null && answers[question.id] !== undefined).length;

  async function submit(auto = false) {
    if (submittedRef.current) return;
    if (!auto) {
      const unanswered = questions.length - answeredCount;
      const message =
        unanswered > 0
          ? `You still have ${unanswered} unanswered question${unanswered > 1 ? "s" : ""}. Submit anyway?`
          : "Submit your test now?";
      if (!window.confirm(message)) return;
    }
    submittedRef.current = true;
    setSubmitting(true);
    setError(null);
    try {
      const response = await fetch(`/api/cbt/${sessionId}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answers: questions.map((question) => ({
            questionId: question.id,
            selectedIndex: answers[question.id] ?? null,
          })),
        }),
      });
      const data = (await response.json()) as { redirect?: string; error?: string };
      if (response.ok && data.redirect) {
        router.push(data.redirect);
        router.refresh();
        return;
      }
      submittedRef.current = false;
      setSubmitting(false);
      setError(data.error ?? "Submission failed. Try again.");
    } catch {
      submittedRef.current = false;
      setSubmitting(false);
      setError("Network problem. Your answers are saved — try submitting again.");
    }
  }

  submitRef.current = submit;

  useEffect(() => {
    const timer = setInterval(() => {
      const left = Math.max(0, Math.round((deadline - Date.now()) / 1000));
      setRemaining(left);
      if (left <= 0) {
        clearInterval(timer);
        submitRef.current(true);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [deadline]);

  function select(optionIndex: number) {
    if (!current || submitting) return;
    setAnswers((previous) => ({ ...previous, [current.id]: optionIndex }));
    void fetch(`/api/cbt/${sessionId}/answer`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ questionId: current.id, selectedIndex: optionIndex }),
    }).catch(() => undefined);
  }

  function clearAnswer() {
    if (!current) return;
    setAnswers((previous) => ({ ...previous, [current.id]: null }));
    void fetch(`/api/cbt/${sessionId}/answer`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ questionId: current.id, selectedIndex: null }),
    }).catch(() => undefined);
  }

  function toggleFlag() {
    if (!current) return;
    setFlags((previous) =>
      previous.includes(current.id)
        ? previous.filter((id) => id !== current.id)
        : [...previous, current.id],
    );
  }

  if (!current) {
    return <p className="text-sm text-ink-soft">No questions in this session.</p>;
  }

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  const lowTime = remaining <= 300;
  const selectedOption = answers[current.id];
  const flagged = flags.includes(current.id);

  return (
    <div className="space-y-4">
      <div className="sticky top-[4.6rem] z-20 rounded-2xl border border-line bg-white/95 p-3 shadow-sm backdrop-blur lg:top-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-navy-deep">{label}</p>
            <p className="text-[0.68rem] text-ink-soft">
              {mode === "exam" ? "Exam condition" : mode === "baseline" ? "Baseline assessment" : "Practice mode"} · Question {index + 1} of{" "}
              {questions.length} · {answeredCount} answered
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`rounded-lg px-3 py-2 font-mono text-sm font-bold tabular-nums ${
                lowTime ? "bg-[#fdecec] text-[#a12b2b]" : "bg-navy text-gold"
              }`}
              aria-live="polite"
            >
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </span>
            <button
              type="button"
              onClick={() => setShowPalette((value) => !value)}
              className="rounded-lg border border-line px-3 py-2 text-xs font-semibold text-navy lg:hidden"
            >
              Palette
            </button>
            <button
              type="button"
              onClick={() => void submit(false)}
              disabled={submitting}
              className="rounded-lg bg-emerald px-4 py-2 text-xs font-semibold text-white transition hover:bg-emerald/90 disabled:opacity-60"
            >
              {submitting ? "Submitting…" : "Submit"}
            </button>
          </div>
        </div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-parchment">
          <div
            className="h-1 rounded-full bg-navy"
            style={{ width: `${(answeredCount / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_270px]">
        <section className="card p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-navy/8 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-navy">
                {current.subjectIcon} {current.subjectName}
              </span>
              <span className="rounded-full bg-parchment px-2.5 py-1 text-[0.65rem] font-medium text-ink-soft">
                {current.topic}
              </span>
            </div>
            <button
              type="button"
              onClick={toggleFlag}
              className={`rounded-full border px-2.5 py-1 text-[0.65rem] font-semibold transition ${
                flagged
                  ? "border-gold bg-gold-soft text-gold-deep"
                  : "border-line text-ink-soft hover:border-navy/30"
              }`}
            >
              {flagged ? "⚑ Flagged" : "⚐ Flag for review"}
            </button>
          </div>

          <p className="mt-4 text-[1.02rem] font-medium leading-relaxed text-navy-deep">{current.prompt}</p>

          <div className="mt-5 space-y-2.5">
            {current.options.map((option, optionIndex) => {
              const active = selectedOption === optionIndex;
              return (
                <button
                  key={`${current.id}-${optionIndex}`}
                  type="button"
                  onClick={() => select(optionIndex)}
                  className={`flex w-full items-center gap-3 rounded-xl border px-3.5 py-3 text-left text-sm transition ${
                    active
                      ? "border-emerald bg-emerald-soft font-semibold text-emerald"
                      : "border-line bg-cream/50 text-ink hover:border-navy/30 hover:bg-white"
                  }`}
                >
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg text-[0.7rem] font-bold ${
                      active ? "bg-emerald text-white" : "bg-white text-navy"
                    }`}
                  >
                    {letters[optionIndex]}
                  </span>
                  <span className="flex-1">{option}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-4">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setIndex((value) => Math.max(0, value - 1))}
                disabled={index === 0}
                className="rounded-lg border border-line bg-white px-3 py-2 text-xs font-semibold text-ink-soft disabled:opacity-40"
              >
                ← Previous
              </button>
              <button
                type="button"
                onClick={clearAnswer}
                className="rounded-lg border border-line bg-white px-3 py-2 text-xs font-semibold text-ink-soft"
              >
                Clear
              </button>
            </div>
            <button
              type="button"
              onClick={() => setIndex((value) => Math.min(questions.length - 1, value + 1))}
              disabled={index === questions.length - 1}
              className="rounded-lg bg-navy px-4 py-2 text-xs font-semibold text-cream disabled:opacity-40"
            >
              Next question →
            </button>
          </div>

          {error && (
            <p className="mt-3 rounded-lg bg-[#fdecec] px-3 py-2 text-xs font-medium text-[#a12b2b]">{error}</p>
          )}
        </section>

        <aside className={`${showPalette ? "block" : "hidden"} lg:block`}>
          <div className="card p-4 lg:sticky lg:top-[9.5rem]">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink-soft/70">
              Question palette
            </p>
            <div className="mt-3 grid grid-cols-6 gap-1.5 lg:grid-cols-5">
              {questions.map((question, questionIndex) => {
                const answered = answers[question.id] !== null && answers[question.id] !== undefined;
                const isCurrent = questionIndex === index;
                const isFlagged = flags.includes(question.id);
                const base = isCurrent
                  ? "border-navy bg-navy text-cream"
                  : isFlagged
                    ? "border-gold bg-gold-soft text-gold-deep"
                    : answered
                      ? "border-emerald/30 bg-emerald-soft text-emerald"
                      : "border-line bg-white text-ink-soft";
                return (
                  <button
                    key={question.id}
                    type="button"
                    onClick={() => {
                      setIndex(questionIndex);
                      setShowPalette(false);
                    }}
                    className={`h-8 rounded-md border text-[0.7rem] font-semibold transition ${base}`}
                    aria-label={`Question ${questionIndex + 1}${answered ? " answered" : ""}`}
                  >
                    {questionIndex + 1}
                  </button>
                );
              })}
            </div>
            <ul className="mt-3 space-y-1.5 text-[0.65rem] text-ink-soft">
              <li className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded bg-emerald-soft ring-1 ring-emerald/30" /> Answered
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded bg-gold-soft ring-1 ring-gold" /> Flagged for review
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded bg-white ring-1 ring-line" /> Unanswered
              </li>
            </ul>

            <button
              type="button"
              onClick={() => void submit(false)}
              disabled={submitting}
              className="mt-4 w-full rounded-xl bg-emerald px-4 py-3 text-xs font-semibold text-white transition hover:bg-emerald/90 disabled:opacity-60"
            >
              {submitting ? "Submitting…" : "Submit my test"}
            </button>
            <p className="mt-2 text-center text-[0.62rem] text-ink-soft">
              There is no negative marking in UTME. Never leave a question blank.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
