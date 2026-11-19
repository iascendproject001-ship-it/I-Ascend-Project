export type FrameworkStatus = "confirmed" | "recommended" | "validate";

export type Block =
  | { kind: "lead"; text: string }
  | { kind: "p"; text: string }
  | { kind: "list"; items: string[]; ordered?: boolean }
  | {
      kind: "table";
      columns: string[];
      rows: string[][];
      caption?: string;
      note?: string;
    }
  | {
      kind: "callout";
      title: string;
      text: string;
      tone?: "info" | "warning" | "success" | "risk";
    }
  | { kind: "steps"; items: { title: string; detail: string }[] }
  | { kind: "cards"; items: { title: string; body: string; meta?: string }[] }
  | { kind: "kv"; items: { label: string; value: string }[] }
  | { kind: "flow"; items: string[] };

export type FrameworkChapter = {
  slug: string;
  number: string;
  title: string;
  short: string;
  purpose: string;
  status: FrameworkStatus;
  owner: string;
  summary: string[];
  blocks: Block[];
  outputs: string[];
};

export type FrameworkGroup = {
  name: string;
  description: string;
  slugs: string[];
};

export const statusLabels: Record<FrameworkStatus, { label: string; description: string }> = {
  confirmed: {
    label: "Confirmed",
    description: "Already existing in the programme or the live platform today.",
  },
  recommended: {
    label: "Recommended",
    description: "A proposed design decision requiring management adoption.",
  },
  validate: {
    label: "Validate",
    description: "Depends on current official data, legal advice or partner confirmation before use.",
  },
};
