import type { FrameworkChapter, FrameworkGroup } from "./types";
import { chaptersA } from "./chapters-a";
import { chaptersB } from "./chapters-b";
import { chaptersC } from "./chapters-c";
import { chaptersD } from "./chapters-d";

export * from "./types";

export const frameworkMeta = {
  title: "Master Framework for the I Ascend Project Educational Intervention Programme",
  shortTitle: "Master Programme Framework",
  tagline: "Dream, Prepare and Achieve.",
  version: "1.0",
  status: "Adoption draft for Board approval",
  context: "Nigeria",
  owner: "Office of the Programme Director",
  reviewerNote:
    "Chapters marked Validate require current official data, legal review or confirmed partner arrangements before external use.",
  purpose:
    "A comprehensive, evidence-informed and implementation-ready framework covering design, delivery, safeguarding, measurement, finance, partnerships and scale.",
};

export const frameworkChapters: FrameworkChapter[] = [
  ...chaptersA,
  ...chaptersB,
  ...chaptersC,
  ...chaptersD,
];

export const frameworkGroups: FrameworkGroup[] = [
  {
    name: "Foundation",
    description: "Why the intervention exists and what it commits to.",
    slugs: ["executive-summary", "background", "vision-mission-values", "goal-objectives", "beneficiaries-eligibility"],
  },
  {
    name: "Programme design",
    description: "The integrated delivery model, academic system and individual planning.",
    slugs: ["programme-architecture", "academic-delivery", "baseline-iadp", "differentiated-mentorship"],
  },
  {
    name: "Implementation and governance",
    description: "Timelines, people, resources, protection and public trust.",
    slugs: ["implementation-timeline", "governance", "resources-technology", "safeguarding-data"],
  },
  {
    name: "Performance and sustainability",
    description: "Evidence, risk, money, partners, communication, records and scale.",
    slugs: ["meal", "risk-management", "financial-management", "partnerships", "communication-accountability", "documentation-tools", "sustainability-scalability"],
  },
  {
    name: "Working appendices",
    description: "Templates and registers for immediate operational use.",
    slugs: ["appendix-a-iadp", "appendix-b-baseline", "appendix-c-lesson-mock-sop", "appendix-d-mentorship", "appendix-e-incident-consent", "appendix-f-sources", "appendix-g-platform", "appendix-h-profiling"],
  },
];

export function getFrameworkChapter(slug: string) {
  const index = frameworkChapters.findIndex((chapter) => chapter.slug === slug);
  if (index === -1) return null;
  return {
    chapter: frameworkChapters[index],
    previous: index > 0 ? frameworkChapters[index - 1] : null,
    next: index < frameworkChapters.length - 1 ? frameworkChapters[index + 1] : null,
    position: index + 1,
  };
}

export function getAdjacentChapters(slug: string) {
  const index = frameworkChapters.findIndex((chapter) => chapter.slug === slug);
  return {
    previous: index > 0 ? frameworkChapters[index - 1] : null,
    next: index >= 0 && index < frameworkChapters.length - 1 ? frameworkChapters[index + 1] : null,
  };
}

const tableCount = frameworkChapters.reduce(
  (total, chapter) => total + chapter.blocks.filter((block) => block.kind === "table").length,
  0,
);

const outputCount = frameworkChapters.reduce((total, chapter) => total + chapter.outputs.length, 0);

export const frameworkStats = {
  chapters: frameworkChapters.filter((chapter) => !chapter.slug.startsWith("appendix-")).length,
  appendices: frameworkChapters.filter((chapter) => chapter.slug.startsWith("appendix-")).length,
  tables: tableCount,
  outputs: outputCount,
  confirmed: frameworkChapters.filter((chapter) => chapter.status === "confirmed").length,
  validate: frameworkChapters.filter((chapter) => chapter.status === "validate").length,
};
