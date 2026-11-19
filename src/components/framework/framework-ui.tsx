"use client";

import { useState } from "react";

export function PrintButton({ label = "Print or save as PDF" }: { label?: string }) {
  const [clicked, setClicked] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        setClicked(true);
        window.print();
      }}
      className="no-print inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-4 py-2.5 text-xs font-semibold text-navy transition hover:border-navy/50"
    >
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-4 w-4"
        aria-hidden="true"
      >
        <path d="M6 7V3h8v4M6 14H4V8h12v6h-2M6 12h8v5H6v-5z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {clicked ? "Preparing document…" : label}
    </button>
  );
}
