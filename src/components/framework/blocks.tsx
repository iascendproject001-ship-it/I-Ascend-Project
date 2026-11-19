import type { Block } from "@/content/framework/types";

const calloutStyles: Record<string, string> = {
  info: "border-navy/20 bg-navy/[0.04]",
  warning: "border-gold/50 bg-gold-soft/70",
  success: "border-emerald/25 bg-emerald-soft/60",
  risk: "border-[#b3453a]/30 bg-[#fdecec]",
};

const calloutLabel: Record<string, string> = {
  info: "text-navy",
  warning: "text-gold-deep",
  success: "text-emerald",
  risk: "text-[#a12b2b]",
};

export function FrameworkBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, index) => (
        <BlockRenderer key={index} block={block} />
      ))}
    </div>
  );
}

function BlockRenderer({ block }: { block: Block }) {
  if (block.kind === "lead") {
    return (
      <p className="border-l-2 border-gold pl-4 font-display text-lg leading-relaxed text-navy-deep sm:text-xl">
        {block.text}
      </p>
    );
  }

  if (block.kind === "p") {
    return <p className="text-[0.94rem] leading-relaxed text-ink-soft">{block.text}</p>;
  }

  if (block.kind === "list") {
    const Tag = block.ordered ? "ol" : "ul";
    return (
      <Tag className="space-y-2.5">
        {block.items.map((item, index) => (
          <li key={index} className="flex gap-3 text-[0.92rem] leading-relaxed text-ink-soft">
            <span
              className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[0.6rem] font-bold ${
                block.ordered ? "bg-navy text-gold" : "bg-gold-soft text-gold-deep"
              }`}
            >
              {block.ordered ? index + 1 : "•"}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </Tag>
    );
  }

  if (block.kind === "callout") {
    const tone = block.tone ?? "info";
    return (
      <aside className={`rounded-2xl border p-4 sm:p-5 ${calloutStyles[tone]}`}>
        <p className={`text-[0.62rem] font-bold uppercase tracking-[0.16em] ${calloutLabel[tone]}`}>
          {block.title}
        </p>
        <p className="mt-2 text-[0.9rem] leading-relaxed text-ink">{block.text}</p>
      </aside>
    );
  }

  if (block.kind === "steps") {
    return (
      <ol className="space-y-2.5">
        {block.items.map((item, index) => (
          <li key={item.title} className="flex gap-3 rounded-xl border border-line bg-white p-3.5">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-navy text-[0.68rem] font-bold text-gold">
              {index + 1}
            </span>
            <div>
              <p className="text-sm font-semibold text-navy-deep">{item.title}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-ink-soft">{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    );
  }

  if (block.kind === "cards") {
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        {block.items.map((item) => (
          <article key={item.title} className="rounded-2xl border border-line bg-white p-4">
            {item.meta && (
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.14em] text-gold-deep">{item.meta}</p>
            )}
            <p className="mt-1 font-display text-lg leading-snug text-navy-deep">{item.title}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{item.body}</p>
          </article>
        ))}
      </div>
    );
  }

  if (block.kind === "kv") {
    return (
      <dl className="grid gap-2 sm:grid-cols-2">
        {block.items.map((item) => (
          <div key={item.label} className="rounded-xl border border-line bg-white p-3.5">
            <dt className="text-[0.6rem] font-bold uppercase tracking-[0.12em] text-ink-soft/80">
              {item.label}
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-navy-deep">{item.value}</dd>
          </div>
        ))}
      </dl>
    );
  }

  if (block.kind === "flow") {
    return (
      <div className="flex flex-wrap items-center gap-1.5 rounded-2xl border border-line bg-white p-3.5">
        {block.items.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-1.5">
            <span className="rounded-lg bg-navy/6 px-2.5 py-1.5 text-[0.68rem] font-semibold text-navy">
              {item}
            </span>
            {index < block.items.length - 1 && <span className="text-gold-deep">→</span>}
          </span>
        ))}
      </div>
    );
  }

  // table
  return (
    <figure className="overflow-hidden rounded-2xl border border-line bg-white">
      {block.caption && (
        <figcaption className="border-b border-line bg-parchment/50 px-4 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-navy">
          {block.caption}
        </figcaption>
      )}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left text-[0.8rem]">
          <thead>
            <tr className="bg-cream/70">
              {block.columns.map((column) => (
                <th
                  key={column}
                  scope="col"
                  className="border-b border-line px-3 py-2.5 text-[0.62rem] font-bold uppercase tracking-[0.08em] text-ink-soft"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 1 ? "bg-cream/40" : ""}>
                {block.columns.map((_, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="border-b border-line/70 px-3 py-2.5 align-top leading-relaxed text-ink-soft"
                  >
                    {row[cellIndex] ?? ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {block.note && (
        <p className="border-t border-line bg-gold-soft/40 px-4 py-2.5 text-[0.72rem] leading-relaxed text-[#6b4a0d]">
          {block.note}
        </p>
      )}
    </figure>
  );
}
