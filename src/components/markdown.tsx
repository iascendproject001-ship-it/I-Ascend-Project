import type { ReactNode } from "react";

/**
 * Minimal markdown renderer for staff-published articles.
 * Supports headings (#, ##, ###), bullet/numbered lists, quotes,
 * **bold**, *italic* and [label](url) links. No dependencies.
 */
export function Markdown({ text }: { text: string }) {
  const blocks = text
    .replace(/\r\n?/g, "\n")
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter(Boolean);
  return (
    <div className="space-y-4">
      {blocks.map((block, index) => (
        <MarkdownBlock key={index} block={block} />
      ))}
    </div>
  );
}

export function readingMinutes(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const external = link[2].startsWith("http");
      return (
        <a
          key={index}
          href={link[2]}
          className="font-semibold text-navy underline"
          {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
        >
          {link[1]}
        </a>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

function MarkdownBlock({ block }: { block: string }) {
  if (block.startsWith("### ")) {
    return (
      <h4 className="font-display text-lg text-navy-deep">{renderInline(block.slice(4))}</h4>
    );
  }
  if (block.startsWith("## ")) {
    return (
      <h3 className="font-display text-xl text-navy-deep">{renderInline(block.slice(3))}</h3>
    );
  }
  if (block.startsWith("# ")) {
    return (
      <h2 className="font-display text-2xl text-navy-deep">{renderInline(block.slice(2))}</h2>
    );
  }
  if (block.startsWith("> ")) {
    return (
      <blockquote className="rounded-r-xl border-l-2 border-gold bg-gold-soft/50 px-4 py-3 text-[0.9rem] italic leading-relaxed text-ink">
        {renderInline(block.replace(/^> /gm, ""))}
      </blockquote>
    );
  }
  const lines = block
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  if (lines.length > 0 && lines.every((line) => /^[-*•]\s+/.test(line))) {
    return (
      <ul className="space-y-2">
        {lines.map((line, index) => (
          <li key={index} className="flex gap-2.5 text-[0.9rem] leading-relaxed text-ink-soft">
            <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            <span>{renderInline(line.replace(/^[-*•]\s+/, ""))}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (lines.length > 1 && lines.every((line) => /^\d+\.\s+/.test(line))) {
    return (
      <ol className="space-y-2">
        {lines.map((line, index) => (
          <li key={index} className="flex gap-2.5 text-[0.9rem] leading-relaxed text-ink-soft">
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-navy/8 text-[0.6rem] font-bold text-navy">
              {index + 1}
            </span>
            <span>{renderInline(line.replace(/^\d+\.\s+/, ""))}</span>
          </li>
        ))}
      </ol>
    );
  }
  return <p className="text-[0.94rem] leading-relaxed text-ink-soft">{renderInline(block)}</p>;
}
