import type { SeedQuestion } from "./seed-questions";

/** Ninth-wave bank: humanities, commercial, languages and new subjects. */
export const bankWave8Humanities: Record<string, SeedQuestion[]> = {
  "english-language": [
    {
      topic: "Returns",
      prompt: "Goods returned to suppliers are recorded in the:",
      options: ["purchases day book", "returns outwards book", "sales book", "cash book"],
      correctIndex: 1,
      explanation: "Returns outwards handles purchase returns.",
      difficulty: "medium",
    },

  ],
};
