import type { LessonSection } from "./schema";

export type SeedLesson = {
  slug: string;
  title: string;
  summary: string;
  durationMinutes: number;
  level: string;
  examWeight: string;
  sections: LessonSection[];
  keyPoints: string[];
};

export type SeedSubject = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  icon: string;
  accent: string;
  sortOrder: number;
  lessons: SeedLesson[];
};

export const seedSubjects: SeedSubject[] = [
  {
    slug: "english-language",
    name: "English Language",
    category: "Compulsory",
    tagline: "Comprehension, lexis and structure — the 40% of your UTME that most candidates leave to chance.",
    description:
      "Every UTME candidate sits English Language. I Ascend teaches the paper as a skill, not a memory test: how examiners build comprehension questions, the lexis and structure patterns that repeat, and the oral forms candidates lose marks on.",
    icon: "📖",
    accent: "#1B4D8F",
    sortOrder: 1,
    lessons: [
      {
        slug: "comprehension-strategy",
        title: "Comprehension: reading for the answer, not the story",
        summary:
          "A repeatable 4-step method for the comprehension passage so you stop losing marks to 'almost right' options.",
        durationMinutes: 25,
        level: "Core",
        examWeight: "Very high yield",
        sections: [
          {
            heading: "Step 1 — Read the questions before the passage",
            body:
              "JAMB comprehension questions almost always follow the order of the passage. Spend 45 seconds reading the questions first. You are not memorising them; you are priming your brain to notice where each answer lives.",
            bullets: [
              "Underline the keyword in each question (a name, a date, a cause word like 'because').",
              "Mark 'EXCEPT' and 'NOT' questions with a circle — these are the most misread instruction in the paper.",
              "Note any question that asks for the writer's tone or attitude. Those answers come from adjectives and adverbs, not facts.",
            ],
          },
          {
            heading: "Step 2 — Track the passage in chunks",
            body:
              "Read one paragraph at a time and silently label it in three or four words: 'problem stated', 'two examples', 'writer's conclusion'. This index is what lets you return to the text in seconds instead of re-reading the whole passage.",
            example: {
              prompt:
                "A passage opens: 'For decades, rural schools have been treated as an afterthought in budget planning. The result is predictable: fewer laboratories, unqualified teachers and an examination system that rewards those already advantaged.'",
              solution:
                "Paragraph label: 'problem = neglect of rural schools'. If a question asks why rural candidates score lower, the answer is built from 'fewer laboratories, unqualified teachers' — not your general knowledge of education.",
            },
          },
          {
            heading: "Step 3 — Answer strictly from the passage",
            body:
              "The most common lost mark in UTME English is choosing a statement that is true in real life but not stated in the passage. The instruction 'according to the passage' is a boundary, not a suggestion. If you cannot point to the line, do not choose it.",
            bullets: [
              "Eliminate options that use extreme words: always, never, all, completely — unless the passage does too.",
              "Watch for options that reverse cause and effect.",
              "For inference questions, choose the smallest possible step beyond the text.",
            ],
          },
          {
            heading: "Step 4 — Manage the clock",
            body:
              "English Language is 60 questions in 60 minutes alongside three other subjects in the real exam. Allocate no more than 50 seconds per comprehension question. If two options survive after 40 seconds, mark one, flag the question in the CBT and move on.",
            bullets: [
              "Never leave a bubble empty. There is no negative marking in UTME.",
              "Use the review screen at the end for flagged items only.",
            ],
          },
        ],
        keyPoints: [
          "Read the questions before the passage and underline instruction words.",
          "Label each paragraph in 3–4 words to build a mental index.",
          "Answers must be traceable to a line in the passage.",
          "Cap comprehension questions at 50 seconds each; flag and return.",
        ],
      },
      {
        slug: "lexis-and-structure",
        title: "Lexis & structure: the patterns that repeat every year",
        summary:
          "Concord, tenses, prepositions and synonyms — the question types JAMB recycles with new sentences.",
        durationMinutes: 30,
        level: "Core",
        examWeight: "Very high yield",
        sections: [
          {
            heading: "Subject–verb concord (agreement)",
            body:
              "Find the real subject before you decide on the verb. Phrases between the subject and verb are noise. In JAMB, the trick is almost always an interrupting prepositional phrase.",
            bullets: [
              "Each, every, either, neither, nobody, everybody → singular verb: 'Each of the students was given a form.'",
              "Two subjects joined by 'and' → plural, unless they describe one idea: 'Bread and butter is his breakfast.'",
              "'A number of' → plural; 'the number of' → singular.",
              "Collective nouns (committee, team, government) → singular when acting as one unit.",
            ],
            example: {
              prompt:
                "Choose the option that best completes the sentence: 'The quality of the candidates' scripts ____ a major concern for the board.'",
              solution:
                "Subject is 'quality' (singular), not 'scripts'. Correct verb: 'is'. The phrase 'of the candidates' scripts' is an interrupting phrase.",
            },
          },
          {
            heading: "Tense and aspect",
            body:
              "Look for a time marker before you choose a tense. 'Since', 'for' and 'recently' point to a perfect tense; 'yesterday' and 'last year' force the simple past. Never mix a past time marker with a present perfect verb.",
            bullets: [
              "Present perfect: has/have + past participle, for an action that started in the past and continues or matters now.",
              "Past perfect: had + past participle, for the earlier of two past actions.",
              "After 'if' in a real future condition, use the present tense: 'If he studies, he will pass.'",
            ],
            example: {
              prompt: "Choose the correct option: 'By the time she arrived, the lecture ____ already ____.'",
              solution: "'had ... begun' — the lecture started before she arrived, so the earlier past action takes the past perfect.",
            },
          },
          {
            heading: "Prepositions and idioms",
            body:
              "There is no logic to fix prepositions by reasoning — they are learned in company. Build a personal list of the 60 most frequent combinations and revise them weekly.",
            bullets: [
              "congratulate someone ON, insist ON, consist OF, depend ON, comply WITH, apologise TO someone FOR something.",
              "Prevent someone FROM, prohibit someone FROM, capable OF, accustomed TO, addicted TO.",
              "In the land of the blind, the one-eyed man is king — idioms are asked as meaning, not translation.",
            ],
          },
          {
            heading: "Synonyms and antonyms",
            body:
              "Do not choose a synonym that only works in a different context. Test the candidate word inside the original sentence, then check the connotation (positive, negative, neutral).",
            example: {
              prompt: "Choose the option nearest in meaning to the underlined word: 'The chairman gave a terse reply.'",
              solution:
                "'Terse' means brief and to the point, sometimes abrupt. Among 'lengthy', 'curt', 'confusing', 'polite', the answer is 'curt'. 'Lengthy' is the antonym trap.",
            },
          },
        ],
        keyPoints: [
          "Locate the true subject — ignore interrupting phrases.",
          "Time markers decide tense; avoid present perfect with finished-past markers.",
          "Learn prepositions as combinations, not isolated words.",
          "Test synonyms in context and check connotation.",
        ],
      },
      {
        slug: "oral-forms-and-stress",
        title: "Oral English: vowel sounds, stress and intonation",
        summary:
          "The 10–15 marks candidates treat as luck, turned into rules of thumb you can actually revise.",
        durationMinutes: 20,
        level: "Core",
        examWeight: "High yield",
        sections: [
          {
            heading: "The sound system in plain terms",
            body:
              "English has 12 pure vowels and 8 diphthongs. JAMB tests whether you can hear and classify sounds, not whether you can recite the phonemic chart. Learn one anchor word per sound and compare new words to it.",
            bullets: [
              "/iː/ as in 'seat' vs /ɪ/ as in 'sit' — the classic length contrast.",
              "/uː/ as in 'fool' vs /ʊ/ as in 'full'.",
              "/æ/ as in 'cat' vs /ɑː/ as in 'cart'.",
              "Diphthongs glide: /eɪ/ 'say', /aɪ/ 'buy', /ɔɪ/ 'boy', /aʊ/ 'now', /əʊ/ 'go', /ɪə/ 'here'.",
            ],
          },
          {
            heading: "Word stress rules that hold",
            body:
              "Stress placement changes meaning and word class. Exam questions often contrast noun/verb pairs such as RE-cord (noun) and re-CORD (verb).",
            bullets: [
              "Most two-syllable nouns are stressed on the first syllable; most two-syllable verbs on the second.",
              "Words ending in -tion, -sion, -ic, -ical, -ity are stressed on the syllable immediately before the ending.",
              "Words ending in -ee, -eer, -ese, -ique are usually stressed on the final syllable.",
              "Prefixes are normally not stressed: im-POR-tant, de-VE-lop.",
            ],
          },
          {
            heading: "Intonation and meaning",
            body:
              "Falling intonation signals a completed statement or a wh-question ('Where are you going?'). Rising intonation signals a yes/no question, doubt, or a list that is not finished ('Would you like rice, beans, or yam?' with rising on rice and beans, falling on yam).",
            example: {
              prompt: "Which word is stressed differently from the others: education, economic, photograph, photography?",
              solution:
                "'Photograph' is stressed on the first syllable (PHO-to-graph). The others carry stress on the syllable before -tion/-ic/-graphy. So 'photograph' is the odd one out.",
            },
          },
        ],
        keyPoints: [
          "Learn one anchor word for each vowel sound.",
          "For -tion, -sion, -ic, -ity, stress the syllable just before the ending.",
          "Two-syllable noun/verb stress pairs change word class.",
          "Yes/no questions rise; wh-questions and statements fall.",
        ],
      },
    ],
  },
  {
    slug: "mathematics",
    name: "Mathematics",
    category: "Compulsory",
    tagline: "From number bases to calculus — taught as patterns with speed methods for the CBT clock.",
    description:
      "Mathematics carries equal weight in every UTME combination and is the subject most feared by candidates from under-resourced schools. Here every topic begins with the concept, then the exact shortcut that saves minutes in a computer-based test.",
    icon: "➗",
    accent: "#0E6E5A",
    sortOrder: 2,
    lessons: [
      {
        slug: "indices-logarithms-surds",
        title: "Indices, logarithms and surds",
        summary: "The laws that unlock simplification questions and the logarithms that turn multiplication into addition.",
        durationMinutes: 32,
        level: "Core",
        examWeight: "Very high yield",
        sections: [
          {
            heading: "The laws of indices",
            body:
              "Every simplification question is an application of six laws. Write them once by hand and you will rarely lose another mark here.",
            bullets: [
              "a^m × a^n = a^(m+n); a^m ÷ a^n = a^(m−n)",
              "(a^m)^n = a^(mn); (ab)^n = a^n b^n",
              "a^0 = 1 (a ≠ 0); a^(−n) = 1/a^n",
              "a^(1/n) = ⁿ√a; a^(m/n) = ⁿ√(a^m)",
            ],
            example: {
              prompt: "Simplify (2^5 × 2^−3) ÷ (2^4 × 2^−6).",
              solution:
                "Numerator: 2^(5−3) = 2^2. Denominator: 2^(4−6) = 2^−2. Then 2^2 ÷ 2^−2 = 2^(2−(−2)) = 2^4 = 16.",
            },
          },
          {
            heading: "Logarithms: the inverse question",
            body:
              "A logarithm answers 'what exponent do I need?'. Converting between forms is the fastest route to most UTME log questions.",
            bullets: [
              "log_a N = x means a^x = N, so log_2 8 = 3.",
              "log(MN) = log M + log N; log(M/N) = log M − log N; log M^n = n log M.",
              "log_a a = 1 and log_a 1 = 0.",
              "Change of base: log_a b = log_c b ÷ log_c a.",
              "log_a b × log_b a = 1.",
            ],
            example: {
              prompt: "Evaluate log₁₀ 40 + log₁₀ 25 − log₁₀ 10.",
              solution:
                "Combine: log₁₀(40 × 25 ÷ 10) = log₁₀ 100 = 2.",
            },
          },
          {
            heading: "Surds: rationalise before you panic",
            body:
              "A surd is an irrational root. The exam wants the denominator free of roots, using the conjugate when the denominator has two terms.",
            bullets: [
              "√(ab) = √a × √b and √(a/b) = √a ÷ √b.",
              "To rationalise 1/(a + √b), multiply top and bottom by (a − √b).",
              "√a × √a = a, so squares on the denominator collapse.",
            ],
            example: {
              prompt: "Rationalise 3/(2 + √5).",
              solution:
                "Multiply by (2 − √5)/(2 − √5): numerator 3(2 − √5); denominator 4 − 5 = −1. Result = −3(2 − √5) = 3√5 − 6.",
            },
          },
        ],
        keyPoints: [
          "Master the six index laws — every simplification depends on them.",
          "Convert logs to exponent form before manipulating.",
          "log(MN) = log M + log N turns products into sums.",
          "Multiply by the conjugate to clear two-term surd denominators.",
        ],
      },
      {
        slug: "algebra-quadratics",
        title: "Algebra: quadratics, simultaneous equations and inequalities",
        summary: "Factorisation, the formula, sum and product of roots, and elimination under time pressure.",
        durationMinutes: 35,
        level: "Core",
        examWeight: "Very high yield",
        sections: [
          {
            heading: "Three ways to solve a quadratic",
            body:
              "Choose the fastest valid method: factorise if the discriminant is a perfect square, use the formula otherwise. Completing the square is rarely faster than the formula in a CBT.",
            bullets: [
              "Standard form: ax² + bx + c = 0.",
              "Quadratic formula: x = [−b ± √(b² − 4ac)] / 2a.",
              "Discriminant b² − 4ac: >0 two real roots, =0 repeated root, <0 no real roots.",
              "If α and β are roots, α + β = −b/a and αβ = c/a. The equation is x² − (sum)x + (product) = 0.",
            ],
            example: {
              prompt: "If α and β are the roots of 2x² − 7x + 3 = 0, find α² + β².",
              solution:
                "α + β = 7/2, αβ = 3/2. α² + β² = (α + β)² − 2αβ = 49/4 − 3 = 37/4.",
            },
          },
          {
            heading: "Simultaneous equations",
            body:
              "Use elimination when coefficients are close, substitution when one equation is already solved for a variable. Always substitute back to check both original equations.",
            bullets: [
              "Word problems: define variables in one line before writing equations.",
              "For three unknowns, eliminate one variable across two pairs first.",
              "Keep signs aligned in columns — most errors are sign slips, not method errors.",
            ],
          },
          {
            heading: "Inequalities and their number lines",
            body:
              "Solving is like equations except multiplying or dividing by a negative flips the inequality sign. Represent the solution as an interval and check one value.",
            example: {
              prompt: "Solve 3 − 2x < 11 and express the answer as an inequality.",
              solution:
                "−2x < 8 → divide by −2 and flip: x > −4.",
            },
          },
        ],
        keyPoints: [
          "Use the discriminant to decide whether to factorise or apply the formula.",
          "Sum and product of roots avoids solving the equation.",
          "Elimination for close coefficients, substitution for an isolated variable.",
          "Dividing an inequality by a negative flips the sign.",
        ],
      },
      {
        slug: "mensuration-and-trigonometry",
        title: "Mensuration & trigonometry that actually appears",
        summary: "Areas, volumes, SOHCAHTOA, sine/cosine rules and the bearing questions JAMB loves.",
        durationMinutes: 30,
        level: "Core",
        examWeight: "High yield",
        sections: [
          {
            heading: "Mensuration formula sheet",
            body:
              "Memorise these in families rather than individually. Take π = 22/7 unless the options are in decimals.",
            bullets: [
              "Cylinder: volume πr²h, curved surface 2πrh, total 2πr(r + h).",
              "Cone: volume ⅓πr²h, curved surface πrl with slant height l = √(r² + h²).",
              "Sphere: volume 4/3πr³, surface area 4πr².",
              "Triangle area: ½bh or ½ab sin C; trapezium ½(a + b)h.",
            ],
            example: {
              prompt: "A cone has base radius 7 cm and height 24 cm. Find its curved surface area (π = 22/7).",
              solution: "l = √(49 + 576) = 25. Curved surface = πrl = (22/7)(7)(25) = 550 cm².",
            },
          },
          {
            heading: "Right-angled trigonometry",
            body:
              "SOHCAHTOA solves any right triangle. Learn the exact values for 30°, 45° and 60° — they appear every year.",
            bullets: [
              "sin 30° = ½, cos 30° = √3/2, tan 30° = 1/√3",
              "sin 45° = cos 45° = 1/√2, tan 45° = 1",
              "sin 60° = √3/2, cos 60° = ½, tan 60° = √3",
              "sin²θ + cos²θ = 1 for every θ",
            ],
          },
          {
            heading: "Sine rule, cosine rule and bearings",
            body:
              "Use the sine rule when you know a matching side-angle pair; use the cosine rule when you know two sides and the included angle, or all three sides.",
            bullets: [
              "a/sin A = b/sin B = c/sin C",
              "a² = b² + c² − 2bc cos A",
              "Bearings are measured clockwise from North, written as three digits: 045°, 180°.",
              "Back bearing = forward bearing ± 180°.",
            ],
          },
        ],
        keyPoints: [
          "Learn mensuration in families, not as isolated formulas.",
          "Exact trig values for 30°, 45°, 60° save calculator time.",
          "Sine rule needs a matching pair; cosine rule handles included angles.",
          "Bearings are clockwise from North in three-digit form.",
        ],
      },
    ],
  },
  {
    slug: "physics",
    name: "Physics",
    category: "Science",
    tagline: "Concept first, formula second, unit check last — the discipline that beats memorisation.",
    description:
      "Physics rewards candidates who can reason with units. These lessons reconstruct mechanics and electricity around a single habit: translate every question into quantities, units and one relationship.",
    icon: "🧲",
    accent: "#6C3FD1",
    sortOrder: 3,
    lessons: [
      {
        slug: "motion-and-forces",
        title: "Motion, Newton's laws and projectiles",
        summary: "Equations of motion, inertia, momentum and the vertical projectile that appears every year.",
        durationMinutes: 30,
        level: "Core",
        examWeight: "Very high yield",
        sections: [
          {
            heading: "The equations of uniformly accelerated motion",
            body:
              "Use these four equations only when acceleration is constant. List your knowns, mark the unknown, then pick the equation that contains exactly those four quantities.",
            bullets: [
              "v = u + at",
              "s = ut + ½at²",
              "v² = u² + 2as",
              "s = ½(u + v)t",
              "Symbols: u initial velocity, v final velocity, a acceleration, s displacement, t time.",
            ],
            example: {
              prompt: "A car accelerates uniformly from rest to 20 m/s in 5 s. Find its acceleration and distance travelled.",
              solution:
                "a = (v − u)/t = (20 − 0)/5 = 4 m/s². Distance = ½(u + v)t = ½(0 + 20)(5) = 50 m.",
            },
          },
          {
            heading: "Newton's laws in exam language",
            body:
              "'A body continues in uniform motion unless acted on by a resultant force' is the first law. It only sounds abstract until you connect each law to a familiar situation.",
            bullets: [
              "1st law: inertia — passengers lurch forward when a bus brakes.",
              "2nd law: F = ma; weight W = mg uses g ≈ 10 m/s² in UTME unless stated.",
              "3rd law: action and reaction are equal, opposite, and act on different bodies.",
              "Momentum p = mv; impulse Ft = change in momentum.",
            ],
          },
          {
            heading: "Projectiles: treat axes separately",
            body:
              "Horizontal velocity is constant (no acceleration); vertical motion has a = g. At maximum height, vertical velocity is zero while horizontal velocity is unchanged.",
            bullets: [
              "Time of flight = 2u sin θ / g for level ground.",
              "Maximum height = u² sin²θ / 2g.",
              "Range = u² sin 2θ / g, maximum at θ = 45°.",
            ],
            example: {
              prompt: "A stone is thrown horizontally at 15 m/s from a 20 m cliff. How long before it lands (g = 10 m/s²)?",
              solution:
                "Vertical: s = ½gt² → 20 = 5t² → t = 2 s. Horizontal speed is irrelevant to time of flight.",
            },
          },
        ],
        keyPoints: [
          "Use the four motion equations only for constant acceleration.",
          "F = ma with g = 10 m/s²; distinguish mass from weight.",
          "Momentum and impulse connect force to change in motion.",
          "Horizontal and vertical projectile motion are independent.",
        ],
      },
      {
        slug: "electricity-and-circuits",
        title: "Current electricity, circuits and electrical energy",
        summary: "Ohm's law, series and parallel networks, electrical power and the cost-of-energy question.",
        durationMinutes: 28,
        level: "Core",
        examWeight: "High yield",
        sections: [
          {
            heading: "Charge, current and potential difference",
            body:
              "Current is rate of flow of charge (I = Q/t). Potential difference is energy per unit charge (V = W/Q). Resistance is the opposition to flow, measured in ohms.",
            bullets: [
              "Ohm's law: V = IR, true only at constant temperature.",
              "Resistivity: R = ρL/A, so doubling length doubles resistance.",
              "EMF is the total energy supplied per coulomb; terminal voltage is less because of internal resistance.",
            ],
            example: {
              prompt: "A wire of resistance 12 Ω carries 0.5 A for 2 minutes. Calculate the energy dissipated.",
              solution: "Energy = I²Rt = (0.5)²(12)(120) = 360 J.",
            },
          },
          {
            heading: "Series and parallel networks",
            body:
              "In series, current is common and voltages add. In parallel, voltage is common and currents add. Total resistance in parallel is always smaller than the smallest branch.",
            bullets: [
              "Series: R = R₁ + R₂ + R₃",
              "Parallel: 1/R = 1/R₁ + 1/R₂ + 1/R₃; for two resistors, R = R₁R₂/(R₁ + R₂)",
              "Voltage divider: V₁ = V × R₁/(R₁ + R₂)",
            ],
            example: {
              prompt: "Two resistors, 6 Ω and 3 Ω, are in parallel across a 12 V supply. Find the total current.",
              solution:
                "R = (6×3)/(6+3) = 2 Ω. I = V/R = 12/2 = 6 A. Check: branch currents are 2 A and 4 A, which sum to 6 A.",
            },
          },
          {
            heading: "Power and the energy bill",
            body:
              "Electrical power is P = VI = I²R = V²/R. Energy in kilowatt-hours is the quantity electricity companies actually bill. A typical UTME question gives appliance power and asks for the cost of use over a period.",
            bullets: [
              "Convert watts to kilowatts before multiplying by hours.",
              "Cost = power (kW) × time (h) × price per kWh.",
              "A 2000 W iron used 30 minutes daily uses 1 kWh per day.",
            ],
          },
        ],
        keyPoints: [
          "V = IR applies at constant temperature.",
          "Series: currents equal. Parallel: voltages equal.",
          "Parallel total resistance is below the smallest branch.",
          "Energy = I²Rt and billing uses kWh.",
        ],
      },
    ],
  },
  {
    slug: "chemistry",
    name: "Chemistry",
    category: "Science",
    tagline: "The mole as a currency, reactions as patterns — the chemistry that stops being abstract.",
    description:
      "Chemistry in UTME is 80% stoichiometry, periodicity and organic functional groups. I Ascend drills the mole as a single unit of exchange, then builds organic chemistry around just four functional groups.",
    icon: "⚗️",
    accent: "#B23A48",
    sortOrder: 4,
    lessons: [
      {
        slug: "mole-concept-stoichiometry",
        title: "The mole: every calculation in one framework",
        summary: "Mole–mass, mole–volume, molarity and limiting reagent problems solved with one map.",
        durationMinutes: 32,
        level: "Core",
        examWeight: "Very high yield",
        sections: [
          {
            heading: "One central number: 6.02 × 10²³",
            body:
              "The mole is a counting unit. Almost every calculation converts to moles, applies a ratio from the balanced equation, then converts back to the requested unit.",
            bullets: [
              "n = mass ÷ molar mass",
              "n = volume at STP ÷ 22.4 dm³ (or 22,400 cm³)",
              "n = concentration (mol/dm³) × volume (dm³)",
              "1 mole of any gas contains 6.02 × 10²³ particles and occupies 22.4 dm³ at STP.",
            ],
            example: {
              prompt: "Calculate the mass of calcium carbonate that will react completely with 100 cm³ of 0.5 mol/dm³ HCl. (CaCO₃ = 100)",
              solution:
                "CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. Moles HCl = 0.5 × 0.1 = 0.05 mol. Ratio 1:2 → CaCO₃ = 0.025 mol. Mass = 0.025 × 100 = 2.5 g.",
            },
          },
          {
            heading: "Molar volume and gas laws",
            body:
              "At the same temperature and pressure, equal volumes of gases contain equal numbers of particles (Avogadro). This turns gas volume ratios directly into mole ratios.",
            bullets: [
              "Ideal gas equation: PV = nRT with R = 0.082 atm dm³/mol K or 8.314 J/mol K.",
              "Boyle: PV = constant at fixed temperature.",
              "Charles: V/T = constant at fixed pressure.",
              "Always convert °C to K by adding 273.",
            ],
          },
          {
            heading: "Limiting reagents and percentage yield",
            body:
              "Divide moles of each reactant by its coefficient in the balanced equation. The smallest value identifies the limiting reagent; it alone determines the products.",
            example: {
              prompt: "8 g of hydrogen reacts with 32 g of oxygen. Which is in excess, and what mass of water forms? (H₂ = 2, O₂ = 32)",
              solution:
                "2H₂ + O₂ → 2H₂O. H₂ = 4 mol, O₂ = 1 mol. Required ratio 2:1 needs 2 mol H₂ per 1 mol O₂, so hydrogen is in excess (4 vs 2 needed); oxygen is limiting. Water = 2 × 18 = 36 g.",
            },
          },
        ],
        keyPoints: [
          "Convert everything to moles before applying a ratio.",
          "22.4 dm³ = 1 mole of gas at STP.",
          "Molarity × volume gives moles in solution.",
          "Limiting reagent: smallest moles ÷ coefficient.",
        ],
      },
      {
        slug: "organic-functional-groups",
        title: "Organic chemistry by functional group",
        summary: "Alkanes, alkenes, alcohols, acids — reactions, tests and naming in one comparison table.",
        durationMinutes: 30,
        level: "Core",
        examWeight: "High yield",
        sections: [
          {
            heading: "Four families you must be able to name",
            body:
              "Most organic questions ask you to identify a functional group, name a product, or choose a test. Learn each family with its formula, characteristic reaction and test.",
            bullets: [
              "Alkane (CₙH₂ₙ₊₂): substituted by chlorine in UV light; burns; does not decolourise bromine water.",
              "Alkene (CₙH₂ₙ): addition; decolourises bromine water from orange to colourless; undergoes polymerisation.",
              "Alkanol (alcohol): contains —OH; oxidised to alkanal then alkanoic acid; reacts with sodium to release hydrogen.",
              "Alkanoic acid: contains —COOH; reacts with carbonates to release CO₂; with alcohols forms an ester (fruity smell).",
            ],
          },
          {
            heading: "Isomerism and naming",
            body:
              "Name by finding the longest continuous carbon chain, then numbering from the end that gives the lowest locant to the functional group. Structural isomers share a molecular formula but differ in arrangement.",
            bullets: [
              "C₄H₁₀ has two isomers: n-butane and methylpropane.",
              "Position isomerism: butan-1-ol and butan-2-ol.",
              "Functional group isomerism: C₃H₆O can be propanal or propanone.",
            ],
            example: {
              prompt: "Name CH₃CH₂CH₂OH and state the product formed when it is oxidised with acidified KMnO₄.",
              solution:
                "Propan-1-ol. Primary alcohols oxidise to an alkanal (propanal) and, with excess oxidising agent, to propanoic acid.",
            },
          },
          {
            heading: "Tests and separation",
            body:
              "The CBT expects you to choose a reagent that distinguishes two substances. Learn pairs, not isolated tests.",
            bullets: [
              "Alkene vs alkane: bromine water decolourises with alkene.",
              "Alkanoic acid vs alcohol: sodium hydrogencarbonate gives CO₂ with the acid.",
              "Unsaturated vs saturated: acidified KMnO₄ turns purple to colourless.",
              "Separating an acid from an alcohol: distillation after conversion to a salt.",
            ],
          },
        ],
        keyPoints: [
          "Identify family by functional group, then predict reaction type.",
          "Bromine water distinguishes alkene from alkane.",
          "Oxidation: primary alcohol → aldehyde → acid.",
          "Name from the longest chain with the lowest functional-group locant.",
        ],
      },
    ],
  },
  {
    slug: "biology",
    name: "Biology",
    category: "Science",
    tagline: "Cell to ecosystem, with diagrams and definitions examiners reward word-for-word.",
    description:
      "Biology asks for precise labels and precise terms. Lessons combine the diagram vocabulary examiners expect with the genetics and ecology reasoning that carry the most marks.",
    icon: "🧬",
    accent: "#2E7D32",
    sortOrder: 5,
    lessons: [
      {
        slug: "cell-biology-and-transport",
        title: "Cell structure, transport and enzymes",
        summary: "Organelles and their functions, diffusion/osmosis/active transport, plus enzyme conditions.",
        durationMinutes: 28,
        level: "Core",
        examWeight: "Very high yield",
        sections: [
          {
            heading: "Organelles and functions",
            body:
              "Learn organelle–function pairs because the CBT typically gives the function and asks for the organelle. Plant and animal cells differ in three structures you must be able to state.",
            bullets: [
              "Mitochondrion: site of aerobic respiration and ATP production.",
              "Ribosome: protein synthesis. Rough endoplasmic reticulum: protein transport.",
              "Chloroplast: contains chlorophyll, site of photosynthesis (plants only).",
              "Plant-only: cellulose cell wall, large permanent vacuole, chloroplasts.",
              "Animal-only: centrioles, lysosomes with hydrolytic enzymes.",
            ],
          },
          {
            heading: "Movement across membranes",
            body:
              "Diffusion moves particles down a concentration gradient without energy. Osmosis is diffusion of water across a semi-permeable membrane from high to low water potential. Active transport moves substances against the gradient and requires ATP.",
            example: {
              prompt: "A plant cell placed in a concentrated sugar solution becomes flaccid. Explain why.",
              solution:
                "The external solution has a lower water potential than the cell sap, so water leaves the vacuole by osmosis and the protoplast shrinks away from the cell wall (plasmolysis).",
            },
          },
          {
            heading: "Enzymes as biological catalysts",
            body:
              "Enzymes are proteins that lower activation energy. Each has an active site complementary to its substrate — the lock-and-key and induced-fit models.",
            bullets: [
              "Optimum temperature in humans ≈ 37 °C; denaturation above this is irreversible.",
              "Extreme pH alters ionic bonds in the active site and denatures the enzyme.",
              "Enzyme concentration increases rate until substrate becomes limiting.",
              "Heavy metals and high temperature are inhibitors/denaturants.",
            ],
          },
        ],
        keyPoints: [
          "Mitochondrion = respiration; ribosome = protein synthesis; chloroplast = photosynthesis.",
          "Osmosis is water movement across a semi-permeable membrane.",
          "Active transport uses ATP and works against the gradient.",
          "Enzymes are specific proteins denatured by heat and extreme pH.",
        ],
      },
      {
        slug: "genetics-and-inheritance",
        title: "Genetics: monohybrid crosses and blood groups",
        summary: "Alleles, dominance, Punnett squares, test crosses and sex-linked inheritance without confusion.",
        durationMinutes: 30,
        level: "Core",
        examWeight: "Very high yield",
        sections: [
          {
            heading: "Vocabulary that earns marks",
            body:
              "Use these words exactly. Many candidates understand genetics but lose the definition mark.",
            bullets: [
              "Gene: a segment of DNA coding for a trait. Allele: alternative form of a gene.",
              "Genotype: genetic makeup (Tt). Phenotype: observable trait (tall).",
              "Homozygous: identical alleles. Heterozygous: different alleles.",
              "Dominant allele masks its partner; recessive is expressed only when homozygous.",
            ],
          },
          {
            heading: "Monohybrid cross method",
            body:
              "Write parental genotypes, identify gametes, arrange them in a Punnett square, then state genotypic and phenotypic ratios separately.",
            example: {
              prompt: "Cross a heterozygous tall pea (Tt) with a short pea (tt). Give the phenotypic ratio.",
              solution:
                "Gametes: Tt gives T and t; tt gives t only. Offspring: Tt, Tt, tt, tt. Phenotypic ratio = 2 tall : 2 short = 1:1.",
            },
          },
          {
            heading: "Blood groups and sex linkage",
            body:
              "Human ABO blood groups show multiple alleles (Iᴬ, Iᴮ, i) and codominance between Iᴬ and Iᴮ. Colour blindness and haemophilia are X-linked recessive traits far more common in males.",
            bullets: [
              "IᴬIᴬ or Iᴬi = A; IᴮIᴮ or Iᴮi = B; IᴬIᴮ = AB; ii = O.",
              "An O mother × AB father can produce A or B children, never AB or O.",
              "X-linked recessive: carrier daughters, affected sons; an affected father cannot pass it to sons.",
            ],
          },
        ],
        keyPoints: [
          "Distinguish genotype from phenotype, homozygous from heterozygous.",
          "Punnett square: gametes, offspring, then ratios.",
          "ABO blood group alleles Iᴬ, Iᴮ, i with codominance.",
          "X-linked recessive traits affect more males than females.",
        ],
      },
    ],
  },
  {
    slug: "economics",
    name: "Economics",
    category: "Commercial",
    tagline: "Demand, money and government policy — with the graphs described in words.",
    description:
      "Economics is the highest-scoring arts/commercial subject for candidates who understand incentives. These lessons translate graphs into language so the CBT's text-only options become easy.",
    icon: "📈",
    accent: "#0B7285",
    sortOrder: 6,
    lessons: [
      {
        slug: "demand-supply-elasticity",
        title: "Demand, supply and elasticity",
        summary: "Laws of demand and supply, equilibrium shifts, and the elasticity formulas examiners test.",
        durationMinutes: 30,
        level: "Core",
        examWeight: "Very high yield",
        sections: [
          {
            heading: "The two laws and their exceptions",
            body:
              "Demand is the quantity consumers will buy at a given price in a given period. The law of demand says quantity demanded falls as price rises, other things equal. Supply rises with price.",
            bullets: [
              "Exceptions to demand: Giffen goods, expectations of future price rises, goods of ostentation.",
              "Movement along a curve = price change. Shift of a curve = any other determinant (income, taste, population, expectations).",
              "Equilibrium: quantity demanded equals quantity supplied; above it a surplus forms, below it a shortage.",
            ],
          },
          {
            heading: "Elasticity and total revenue",
            body:
              "Price elasticity of demand measures responsiveness: % change in quantity ÷ % change in price. It tells a firm whether raising price raises or lowers revenue.",
            bullets: [
              "Elastic (|PED| > 1): price rise reduces revenue. Typical of luxury goods with substitutes.",
              "Inelastic (|PED| < 1): price rise increases revenue. Typical of salt, fuel, the only clinic in a village.",
              "Necessities are inelastic; luxuries are elastic. Demand is more elastic in the long run.",
              "Cross elasticity positive = substitutes; negative = complements. Income elasticity negative = inferior good.",
            ],
            example: {
              prompt: "A 10% fall in price causes demand to rise 25%. Calculate PED and advise the firm.",
              solution:
                "PED = 25/10 = 2.5 (elastic). Because demand is elastic, a price cut raises total revenue; the firm should keep price low.",
            },
          },
          {
            heading: "Price controls",
            body:
              "A maximum price (ceiling) set below equilibrium creates a shortage and black markets; a minimum price (floor) set above equilibrium creates surplus stocks — the classic minimum wage and agricultural price support cases.",
          },
        ],
        keyPoints: [
          "Price changes cause movement along the curve; other factors shift it.",
          "PED = %ΔQ ÷ %ΔP; elastic demand means price cuts raise revenue.",
          "Cross elasticity positive = substitutes, negative = complements.",
          "Ceilings cause shortages; floors cause surpluses.",
        ],
      },
      {
        slug: "money-banking-and-inflation",
        title: "Money, banking and inflation",
        summary: "Functions of money, credit creation, central bank tools and how inflation is measured.",
        durationMinutes: 28,
        level: "Core",
        examWeight: "High yield",
        sections: [
          {
            heading: "What money does",
            body:
              "Money must be generally acceptable, portable, durable, divisible, scarce and homogeneous. Its functions are a medium of exchange, a measure of value, a store of value and a standard for deferred payment.",
            bullets: [
              "Barter fails because of the double coincidence of wants and lack of a common measure.",
              "Legal tender is money a creditor must accept in settlement of a debt.",
            ],
          },
          {
            heading: "Banking and credit creation",
            body:
              "Commercial banks create credit by lending out a fraction of deposits. The credit multiplier = 1 / reserve ratio.",
            example: {
              prompt: "If the cash reserve ratio is 20%, calculate the credit multiplier and the total deposits created from an initial deposit of ₦50,000.",
              solution:
                "Multiplier = 1/0.2 = 5. Total deposits = 5 × ₦50,000 = ₦250,000.",
            },
            bullets: [
              "Central bank tools: open market operations, bank rate, cash reserve ratio, special deposits, moral suasion.",
              "Open market operations: selling securities reduces money supply.",
            ],
          },
          {
            heading: "Inflation: causes and measurement",
            body:
              "Inflation is a persistent rise in the general price level measured by the consumer price index. Demand-pull inflation comes from excess aggregate demand; cost-push from rising input costs.",
            bullets: [
              "Types by rate: creeping, walking, running, galloping, hyperinflation.",
              "Effects: creditors and fixed-income earners lose; debtors and producers of real assets gain.",
              "Policy responses: contractionary monetary policy, higher taxes, reduced government spending, productivity improvement.",
            ],
          },
        ],
        keyPoints: [
          "Know the four functions of money and why barter fails.",
          "Credit multiplier = 1 / reserve ratio.",
          "Selling securities in open market operations reduces money supply.",
          "Inflation is measured with a price index and hurts fixed-income earners.",
        ],
      },
    ],
  },
  {
    slug: "government",
    name: "Government",
    category: "Arts & Social Science",
    tagline: "Constitutions, federalism and elections — definitions plus Nigerian evidence.",
    description:
      "Government questions reward precise constitutional terms and Nigerian examples. I Ascend pairs every concept with a specific Nigerian or comparative case so answers become memorable.",
    icon: "🏛️",
    accent: "#8B5E00",
    sortOrder: 7,
    lessons: [
      {
        slug: "constitutions-and-federalism",
        title: "Constitutions, separation of powers and federalism",
        summary: "Types of constitution, checks and balances, and how Nigerian federalism actually works.",
        durationMinutes: 28,
        level: "Core",
        examWeight: "High yield",
        sections: [
          {
            heading: "Types of constitution",
            body:
              "A constitution sets out the powers of government and the rights of citizens. Classify it by how it was made and how easily it is amended.",
            bullets: [
              "Written vs unwritten (the UK relies heavily on conventions).",
              "Rigid vs flexible: Nigeria's constitution is rigid — amendment requires special majorities and state approvals.",
              "Unitary vs federal vs confederal: where sovereign power ultimately sits.",
              "Features of a good constitution: clarity, supremacy, protection of rights, separation of powers, flexibility within order.",
            ],
          },
          {
            heading: "Separation of powers and checks",
            body:
              "Montesquieu's doctrine divides powers among legislature (make laws), executive (implement) and judiciary (interpret). Each branch checks the others so no single arm becomes dominant.",
            bullets: [
              "Legislature checks executive through confirmation, oversight, budget approval and impeachment.",
              "Executive checks legislature through assent, veto and prerogative powers.",
              "Judiciary checks both through judicial review of unconstitutional acts.",
              "The Nigerian Constitution, 1999 (as amended), is supreme; any inconsistent law is void to that extent.",
            ],
          },
          {
            heading: "Nigerian federalism",
            body:
              "Nigeria has three tiers — federal, state, local government — recognised by the Constitution. Powers are divided into exclusive, concurrent and residual lists.",
            bullets: [
              "Exclusive list: defence, foreign affairs, currency, citizenship, police (federal).",
              "Concurrent list: education, health, agriculture — both federal and state can legislate, but federal law prevails on inconsistency.",
              "Residual list: matters not listed; states handle them, e.g. chieftaincy, local markets.",
              "The 1999 Constitution was amended to grant local governments financial autonomy, yet fiscal centralisation remains a major criticism.",
            ],
          },
        ],
        keyPoints: [
          "Written/unwritten and rigid/flexible describe different dimensions.",
          "Separation of powers comes with checks and balances.",
          "Nigeria's constitution is supreme and rigid.",
          "Exclusive, concurrent and residual lists divide powers in a federation.",
        ],
      },
      {
        slug: "electoral-systems-and-voting",
        title: "Elections, electoral systems and political parties",
        summary: "First-past-the-post versus proportional representation, INEC's role and free-and-fair conditions.",
        durationMinutes: 25,
        level: "Core",
        examWeight: "High yield",
        sections: [
          {
            heading: "Functions of elections",
            body:
              "Elections choose representatives, confer legitimacy, enable peaceful change of government, hold leaders accountable and educate citizens.",
            bullets: [
              "Direct election: voters choose candidates themselves. Indirect: an electoral college or legislature chooses.",
              "By-election fills a single vacant seat; a general election fills the legislature and executive.",
              "A plebiscite is a direct vote on an issue of national importance (not a vote to remove a leader — that is a recall).",
            ],
          },
          {
            heading: "The two big systems",
            body:
              "First-past-the-post (plurality) gives a seat to the candidate with the most votes, even without a majority. Proportional representation allocates seats in proportion to votes received.",
            bullets: [
              "FPTP: simple, clear constituency link, but can produce minority winners and 'wasted' votes.",
              "PR: fairer party representation, coalition governments likely, weaker constituency link.",
              "Nigeria uses a modified plurality for the presidency, requiring a majority plus 25% in at least two-thirds of states.",
            ],
            example: {
              prompt: "Explain why a candidate with 30% of votes can win a plurality election.",
              solution:
                "Under first-past-the-post only the highest number of votes is required, not a majority. With three candidates scoring 40%, 32% and 28%, the 40% candidate wins even though 60% of voters chose someone else. This is why plurality systems can produce a government with limited popular support.",
            },
          },
          {
            heading: "Free and fair elections in Nigeria",
            body:
              "INEC is the independent electoral commission. Genuine elections require an accurate register, secret ballot, impartial administration, prompt results, accessible polling units and independent courts.",
            bullets: [
              "Electoral malpractice includes rigging, vote buying, ballot snatching, multiple voting, intimidation.",
              "A political party is an organised group seeking to win and exercise governmental power; a pressure group seeks to influence, not govern.",
              "Types of party systems: one-party, two-party, multi-party; Nigeria operates a multi-party system.",
            ],
          },
        ],
        keyPoints: [
          "Know the functions of elections and types of election.",
          "FPTP can produce a winner without a majority; PR is more proportional.",
          "Nigeria's presidential victory requires majority plus geographic spread.",
          "Pressure groups influence, parties seek to govern.",
        ],
      },
    ],
  },
  {
    slug: "literature-in-english",
    name: "Literature in English",
    category: "Arts & Social Science",
    tagline: "Devices, drama and set text analysis — answer structures that earn analysis marks.",
    description:
      "Literature rewards candidates who name devices and explain effects, not those who retell the story. Lessons teach the analysis sentence, the dramatic terms and the African text vocabulary.",
    icon: "📚",
    accent: "#7A1F5C",
    sortOrder: 8,
    lessons: [
      {
        slug: "poetry-and-literary-devices",
        title: "Poetry: form, devices and how to write the answer",
        summary: "A device toolkit plus a three-sentence structure that covers analysis questions in seconds.",
        durationMinutes: 25,
        level: "Core",
        examWeight: "Very high yield",
        sections: [
          {
            heading: "The device toolkit",
            body:
              "Do not list devices without purpose. Each device creates an effect: comparison, emphasis, sound, humour, or ambiguity.",
            bullets: [
              "Simile (like/as) and metaphor (direct comparison) create images.",
              "Personification gives human qualities to non-human things.",
              "Alliteration (initial consonants) and assonance (vowel repetition) create rhythm.",
              "Onomatopoeia imitates sound; hyperbole exaggerates; litotes understates.",
              "Irony says the opposite of what is meant; satire exposes folly through ridicule.",
            ],
          },
          {
            heading: "Form and structure",
            body:
              "Name the form, then say what it does. A sonnet's 14 lines, a ballad's narrative swing, or free verse's conversational movement all matter to interpretation.",
            bullets: [
              "Stanza, enjambment, caesura, refrain, rhyme scheme (e.g. abab), rhythm and metre.",
              "Apostrophe addresses an absent person or an abstraction.",
              "The volta is the turn in thought in a sonnet.",
            ],
            example: {
              prompt: "How would you answer: 'Discuss the poet's use of imagery in the poem'?",
              solution:
                "Sentence 1: name two images and the sense they appeal to. Sentence 2: explain the comparison. Sentence 3: state the effect on mood or theme. E.g. 'The poet compares the market to a breathing beast, using auditory and visual imagery to make the crowd feel alive and dangerous, which builds a mood of unease.'",
            },
          },
          {
            heading: "Reading African poetry",
            body:
              "Common themes: colonial aftermath, identity, migration, corruption, resilience, praise and communal values. Connect device to theme rather than summarising lines.",
          },
        ],
        keyPoints: [
          "Every device needs an effect, not just a label.",
          "Form (sonnet, ballad, free verse) contributes to meaning.",
          "Answer in three moves: device, evidence, effect.",
          "Link imagery to theme in African poetry questions.",
        ],
      },
      {
        slug: "drama-and-prose",
        title: "Drama and prose: character, conflict and dramatic technique",
        summary: "Soliloquy, aside, tragic hero, narrative perspective — plus the character-answer template.",
        durationMinutes: 27,
        level: "Core",
        examWeight: "High yield",
        sections: [
          {
            heading: "Drama's tools",
            body:
              "Drama is written for performance. The conventions tell you what an audience sees and hears; exam questions ask how these create tension or reveal character.",
            bullets: [
              "Stage directions: movement, lighting, tone instructions from the playwright.",
              "Soliloquy: a lone character speaking thoughts aloud; reveals inner conflict.",
              "Aside: a remark heard by the audience but not by other characters.",
              "Dramatic irony: audience knows what a character does not.",
              "Tragic hero: high status, fatal flaw (hamartia), reversal, recognition, downfall; comic relief releases tension.",
            ],
          },
          {
            heading: "Prose's tools",
            body:
              "Prose questions typically ask about narrative technique, characterisation and setting. Name the narrator before analysing tone.",
            bullets: [
              "First person (I) = intimate but limited. Third person omniscient = all-knowing. Second person = direct address.",
              "Setting can be physical, temporal and social; it shapes conflict.",
              "Characterisation is direct (told) or indirect (shown through action and dialogue).",
              "Themes are ideas; motifs are repeated images or objects that carry them.",
            ],
          },
          {
            heading: "The character answer template",
            body:
              "State the trait, cite an action or line, then explain what the trait contributes to theme. Three sentences, full analysis.",
            example: {
              prompt: "Discuss the theme of ambition in a set play you have studied.",
              solution:
                "Identify two characters whose ambition drives action; cite one decision each. Explain the consequence of that ambition (downfall, communal loss). Conclude with what the playwright suggests about unchecked ambition, using a dramatic technique such as dramatic irony or soliloquy as evidence.",
            },
          },
        ],
        keyPoints: [
          "Match dramatic term to its function: soliloquy reveals inner conflict.",
          "Dramatic irony depends on the audience knowing more.",
          "Narrative perspective shapes reliability and intimacy.",
          "Trait → evidence → thematic contribution.",
        ],
      },
    ],
  },
  {
    slug: "agricultural-science",
    name: "Agricultural Science",
    category: "Science",
    tagline: "Soils, crops and livestock taught with Nigerian farming practice.",
    description:
      "Agricultural Science is often treated as a fallback, but it is a route into agriculture, veterinary science and agribusiness. Lessons use Nigerian field realities so the definitions stick.",
    icon: "🌱",
    accent: "#33691E",
    sortOrder: 9,
    lessons: [
      {
        slug: "soil-science-and-crop-production",
        title: "Soil, land preparation and crop husbandry",
        summary: "Soil types and profiles, pH, erosion control, tillage and the crop production cycle.",
        durationMinutes: 24,
        level: "Core",
        examWeight: "High yield",
        sections: [
          {
            heading: "Soil: the medium of production",
            body:
              "Soil is a mixture of mineral particles, organic matter, water, air and living organisms. Its texture depends on the proportion of sand, silt and clay.",
            bullets: [
              "Sandy soil: large particles, fast drainage, low water-holding capacity, low fertility.",
              "Clay soil: small particles, high water retention, poor aeration, prone to waterlogging.",
              "Loam: balanced mixture — best for most crops.",
              "Soil profile horizons: A (topsoil, humus), B (subsoil, leached minerals), C (weathered rock), D (bedrock).",
              "pH below 7 acidic, above 7 alkaline; liming raises pH, gypsum helps sodic soils.",
            ],
          },
          {
            heading: "Erosion and its control",
            body:
              "Erosion is the removal of topsoil by water or wind. Erosion control methods must match the cause and the slope.",
            bullets: [
              "Cultural: cover cropping, mulching, crop rotation, contour ploughing, terracing.",
              "Mechanical: bunds, check dams, drainage channels, windbreaks.",
              "Biological: afforestation and alley cropping with leguminous trees.",
            ],
          },
          {
            heading: "Crop production cycle",
            body:
              "Land clearing → ploughing → harrowing → ridging → planting → nursery practice → weeding → fertiliser application → pest control → harvesting → storage.",
            bullets: [
              "NPK supplies nitrogen (vegetative growth), phosphorus (roots and flowering) and potassium (fruits, disease resistance).",
              "Nursery: raised beds, shade and watering; transplant at 3–4 weeks for many vegetables.",
              "Pests: insects (aphids, stem borers), fungi (blight, rust), nematodes; control by cultural, biological and chemical means.",
            ],
          },
        ],
        keyPoints: [
          "Loam is the best all-purpose soil texture.",
          "Horizon A = topsoil and humus; C = weathered rock.",
          "Liming raises acidic soils toward neutral pH.",
          "NPK roles: N for leaves, P for roots, K for fruits and resistance.",
        ],
      },
    ],
  },
  {
    slug: "geography",
    name: "Geography",
    category: "Arts & Social Science",
    tagline: "Map work, climate and Nigerian trade — with exam-proof definitions.",
    description:
      "Geography rewards precision with scale, grid references and climate vocabulary. Lessons cover the physical, human and map-work questions that dominate the paper.",
    icon: "🗺️",
    accent: "#00695C",
    sortOrder: 10,
    lessons: [
      {
        slug: "map-work-and-climate",
        title: "Map work, rivers and climate controls",
        summary: "Scale, grid references, relief sketching and the climate facts that carry marks.",
        durationMinutes: 26,
        level: "Core",
        examWeight: "High yield",
        sections: [
          {
            heading: "Map reading essentials",
            body:
              "Read the scale first. Always convert measured map distance to ground distance before describing anything.",
            bullets: [
              "Representative fraction 1:50,000 means 1 cm on the map = 50,000 cm (0.5 km) on the ground.",
              "Six-figure grid references: eastings before northings.",
              "Contours close together = steep slope; far apart = gentle slope.",
              "A map showing natural features is topographical; a thematic map shows a single variable.",
            ],
            example: {
              prompt: "On a 1:50,000 map a road measures 6 cm. Find its real length in kilometres.",
              solution: "6 cm × 50,000 = 300,000 cm = 3 km.",
            },
          },
          {
            heading: "Climate: elements and controls",
            body:
              "Climate is average weather over 30+ years. Its elements are temperature, rainfall, pressure, wind, humidity and sunshine; distance from the sea, altitude, latitude, ocean currents and prevailing winds control it.",
            bullets: [
              "Latitude: temperature decreases toward the poles because the sun's rays strike at a lower angle.",
              "Altitude: temperature falls about 6.5 °C per 1,000 m.",
              "Nigeria has two seasons governed by the ITCZ: moist south-westerlies and dry north-easterly harmattan.",
              "The south has high rainfall (~2,000 mm); the north is drier with a shorter rainy season.",
            ],
          },
          {
            heading: "Rivers and landforms",
            body:
              "A river's three courses — upper, middle, lower — produce distinct landforms: V-shaped valleys and waterfalls; meanders and floodplains; deltas and levees.",
            bullets: [
              "Erosion processes: hydraulic action, abrasion, solution, attrition.",
              "Features of deposition: meanders, ox-bow lakes, levees, deltas, alluvial fans.",
              "Human uses of rivers: transport, irrigation, fishing, hydropower, domestic supply.",
            ],
          },
        ],
        keyPoints: [
          "Convert map distances to ground distances before answering.",
          "Grid references use eastings (horizontal) before northings.",
          "Altitude and latitude are the strongest climate controls.",
          "River features depend on the course and the dominant process.",
        ],
      },
    ],
  },
  {
    slug: "christian-religious-studies",
    name: "Christian Religious Studies",
    category: "Arts & Social Science",
    tagline: "Themes, persons and moral applications — accurate references, not guesswork.",
    description:
      "CRS rewards candidates who know the narrative and can apply it. Lessons summarise the recurring themes and give the moral-application pattern for essay questions.",
    icon: "✝️",
    accent: "#3949AB",
    sortOrder: 11,
    lessons: [
      {
        slug: "creation-fall-and-themes",
        title: "Creation, the fall and moral application",
        summary: "The big themes of the syllabus and how to convert a story into an answer about conduct.",
        durationMinutes: 22,
        level: "Core",
        examWeight: "High yield",
        sections: [
          {
            heading: "Themes that repeat",
            body:
              "The syllabus is organised around creation, covenant, leadership, law, prophecy, love, faith, discipleship and salvation. Identify the theme before naming the characters.",
            bullets: [
              "Creation and the fall (Genesis 1–3): human responsibility, disobedience, consequence.",
              "Covenant: Noah (rainbow), Abraham (faith and descendants), Moses (law at Sinai).",
              "Leadership: Joseph's forgiveness, Moses' humility, David's repentance, Solomon's wisdom.",
              "Prophets: Amos on justice, Hosea on faithful love, Isaiah on the coming messiah.",
            ],
          },
          {
            heading: "Answering an application question",
            body:
              "A good CRS answer names the person, summarises the event in two lines, states the lesson, then applies it to a modern Nigerian context such as corruption, examination malpractice or community leadership.",
            example: {
              prompt: "State two lessons from the story of the fall of man for young people today.",
              solution:
                "Disobedience has consequences — temptation is often attractive and close at hand, so examine pressure from friends before acting. Also, blame-shifting does not remove responsibility: God held each person accountable individually, which speaks to integrity and accepting correction.",
            },
          },
          {
            heading: "Faith and works in the epistles",
            body:
              "Paul's letters emphasise justification by faith, unity in the body of Christ and love as the fulfilment of the law. James insists faith without works is dead. Learn the pair and the complement, not a contradiction.",
          },
        ],
        keyPoints: [
          "Identify the theme before naming characters.",
          "Covenants: Noah, Abraham, Moses — know the sign of each.",
          "Use the event → lesson → modern application structure.",
          "Faith and works are complementary in the epistles.",
        ],
      },
    ],
  },
  {
    slug: "commerce",
    name: "Commerce",
    category: "Commercial",
    tagline: "Trade, business units and documents — the commercial paper with the fastest mark-to-effort ratio.",
    description:
      "Commerce rewards organised recall: business units, aids to trade and commercial documents. These lessons group the content so one revision session covers an entire section.",
    icon: "🏷️",
    accent: "#6A1B9A",
    sortOrder: 12,
    lessons: [
      {
        slug: "business-units-and-aids-to-trade",
        title: "Business units, trade and commercial documents",
        summary: "Sole trader to public company, plus insurance, advertising and the documents of a sale.",
        durationMinutes: 24,
        level: "Core",
        examWeight: "High yield",
        sections: [
          {
            heading: "Forms of business organisation",
            body:
              "Compare business units on ownership, liability, control, capital and continuity — that is how the question will be framed.",
            bullets: [
              "Sole proprietorship: one owner, unlimited liability, easy to start, limited capital.",
              "Partnership: 2–20 persons, deed of partnership, shared profits, unlimited liability except limited partners.",
              "Private limited company (Ltd): 2–50 members, limited liability, shares not publicly traded.",
              "Public limited company (Plc): shares quoted on the exchange, wider capital, stricter disclosure.",
              "Cooperative society: owned and controlled by members, profits shared as dividends by patronage.",
            ],
          },
          {
            heading: "Aids to trade",
            body:
              "Aids to trade are the services that make buying and selling possible: banking, insurance, transportation, warehousing, communication, advertising and tourism.",
            bullets: [
              "Insurance pools risk: the insurer indemnifies the insured for a premium.",
              "Types of insurance: life, fire, marine, motor, fidelity guarantee.",
              "Warehousing creates time utility — goods stored until needed.",
              "Advertising informs and persuades; it widens the market.",
            ],
          },
          {
            heading: "Documents of trade, in order",
            body:
              "Follow a single sale and the documents follow in sequence. CBT questions often ask 'which document comes next?'",
            bullets: [
              "Enquiry → quotation (seller's price offer) → order → invoice → delivery note → credit note (returned goods) → debit note (undercharge) → statement of account → receipt.",
              "A pro-forma invoice requests payment before delivery; it is not a demand for payment.",
              "Bill of lading: the carrier's receipt and document of title in overseas trade.",
            ],
          },
        ],
        keyPoints: [
          "Compare business units on liability, capital, control and continuity.",
          "Aids to trade enable exchange; insurance transfers risk.",
          "Credit note for goods returned, debit note for undercharges.",
          "Sequence the trade documents from enquiry to receipt.",
        ],
      },
    ],
  },
  {
    slug: "financial-accounting",
    name: "Financial Accounting",
    category: "Commercial",
    tagline: "Double entry, trial balance and final accounts — logic that scores every year.",
    description:
      "Accounting is the most logical commercial subject once you accept that every transaction has two sides. Lessons build the ledger, trial balance and final accounts in sequence.",
    icon: "🧾",
    accent: "#264653",
    sortOrder: 13,
    lessons: [
      {
        slug: "double-entry-and-trial-balance",
        title: "Double entry, the ledger and the trial balance",
        summary: "Debit and credit rules, posting transactions and using the trial balance to catch errors.",
        durationMinutes: 26,
        level: "Core",
        examWeight: "Very high yield",
        sections: [
          {
            heading: "The accounting equation",
            body:
              "Assets = Capital + Liabilities. Every transaction keeps this equation balanced — that is the entire logic of double entry.",
            bullets: [
              "Debit the receiver, credit the giver (personal accounts).",
              "Assets and expenses increase on the debit side; income, capital and liabilities increase on the credit side.",
              "Purchases relate to goods bought for resale; sales are goods sold in the ordinary course of business.",
            ],
            example: {
              prompt: "Record: 'Bought goods on credit from Ada for ₦40,000'.",
              solution:
                "Purchases (expense) increases → debit Purchases ₦40,000. Ada is a creditor (liability) increasing → credit Ada's account ₦40,000.",
            },
          },
          {
            heading: "Books of original entry",
            body:
              "Transactions are first recorded in the book that matches the transaction, then posted to the ledger.",
            bullets: [
              "Sales day book — credit sales. Purchases day book — credit purchases.",
              "Returns inwards (sales returns) and returns outwards (purchases returns) books.",
              "Cash book: cash and bank columns, acting as both book of original entry and ledger.",
              "Journal proper: opening entries, corrections, non-regular transactions.",
            ],
          },
          {
            heading: "Trial balance, errors and suspense",
            body:
              "A trial balance lists debit and credit balances; equality proves arithmetic only, not accuracy.",
            bullets: [
              "Errors that do NOT affect the trial balance: omission, commission, principle, original entry, compensating errors, complete reversal.",
              "Errors that DO affect it: single entry, wrong addition, unbalanced posting — cleared through a suspense account.",
              "Correction of errors is journalised, not erased.",
            ],
          },
        ],
        keyPoints: [
          "Assets = Capital + Liabilities underpins all double entry.",
          "Debit asset/expense increases; credit income/liability increases.",
          "Cash book doubles as book of original entry and ledger.",
          "Six errors leave a trial balance still agreeing.",
        ],
      },
    ],
  },
  {
    slug: "further-mathematics",
    name: "Further Mathematics",
    category: "Science",
    tagline: "Matrices, sequences and calculus for candidates targeting engineering and the sciences.",
    description:
      "Further Mathematics is optional but decisive for competitive engineering, mathematics and physical science admissions. These lessons cover the topics that separate a pass from a distinction.",
    icon: "🧮",
    accent: "#1E6F8F",
    sortOrder: 14,
    lessons: [
      {
        slug: "matrices-and-sequences",
        title: "Matrices, determinants and sequences",
        summary: "2×2 and 3×3 determinants, inverse matrices, and arithmetic/geometric progressions.",
        durationMinutes: 28,
        level: "Advanced",
        examWeight: "High yield",
        sections: [
          {
            heading: "Matrix operations and determinants",
            body:
              "A matrix is a rectangular array of numbers. Addition requires equal order; multiplication requires the number of columns of the first to equal the rows of the second.",
            bullets: [
              "For A = [[a, b], [c, d]], det A = ad − bc.",
              "A matrix has an inverse only if its determinant is non-zero (non-singular).",
              "A⁻¹ = (1/det A) × [[d, −b], [−c, a]].",
              "A inverse satisfies AA⁻¹ = A⁻¹A = I, the identity matrix.",
            ],
            example: {
              prompt: "Find the inverse of A = [[4, 3], [2, 1]].",
              solution: "det A = 4(1) − 3(2) = −2. A⁻¹ = (−1/2)[[1, −3], [−2, 4]] = [[−0.5, 1.5], [1, −2]].",
            },
          },
          {
            heading: "Sequences and series",
            body:
              "An arithmetic progression has a constant difference; a geometric progression has a constant ratio. Know both nth-term and sum formulas.",
            bullets: [
              "AP: Tₙ = a + (n − 1)d; Sₙ = n/2[2a + (n − 1)d].",
              "GP: Tₙ = ar^(n−1); Sₙ = a(1 − rⁿ)/(1 − r) for r ≠ 1.",
              "Sum to infinity exists only when |r| < 1: S∞ = a/(1 − r).",
            ],
            example: {
              prompt: "The 3rd term of an AP is 10 and the 7th is 22. Find the first term and common difference.",
              solution:
                "a + 2d = 10 and a + 6d = 22. Subtract: 4d = 12, so d = 3. Then a = 10 − 6 = 4. The first term is 4.",
            },
          },
        ],
        keyPoints: [
          "det[[a,b],[c,d]] = ad − bc.",
          "A⁻¹ exists only when the determinant is non-zero.",
          "AP uses difference, GP uses ratio.",
          "S∞ = a/(1 − r) only when |r| < 1.",
        ],
      },
    ],
  },
  {
    slug: "computer-studies",
    name: "Computer Studies",
    category: "Science",
    tagline: "Hardware, software, number systems and the data processing cycle.",
    description:
      "Computer Studies is now accepted for many science and social science programmes, and essential for computing courses. These lessons cover the definitions, number systems and concepts that dominate the paper.",
    icon: "💻",
    accent: "#1565C0",
    sortOrder: 15,
    lessons: [
      {
        slug: "computer-fundamentals",
        title: "Computer fundamentals and number systems",
        summary: "Hardware and software, input/output devices, and binary/denary conversion.",
        durationMinutes: 24,
        level: "Core",
        examWeight: "High yield",
        sections: [
          {
            heading: "Hardware, software and the CPU",
            body:
              "Hardware is the physical equipment; software is the set of instructions. The central processing unit has a control unit (directs), an arithmetic logic unit (calculates and compares) and registers (fast temporary storage).",
            bullets: [
              "Input devices: keyboard, mouse, scanner, microphone, joystick.",
              "Output devices: monitor, printer, speaker, projector.",
              "Memory: RAM is volatile working memory; ROM is permanent firmware; cache is fastest/nearest the CPU.",
              "Secondary storage (hard disk, SSD, flash) is non-volatile and holds data long-term.",
            ],
          },
          {
            heading: "Number systems and conversion",
            body:
              "Computers use binary (base 2). Convert denary to binary by repeated division by 2 and reading remainders upward; convert binary to denary by assigning place values 1, 2, 4, 8, 16…",
            bullets: [
              "Binary digits: 0 and 1. Octal uses base 8, hexadecimal base 16.",
              "1 byte = 8 bits; 1 kilobyte conventionally 1,024 bytes.",
              "ASCII encodes characters as numbers for the computer.",
            ],
            example: {
              prompt: "Convert 25 (denary) to binary.",
              solution:
                "25 ÷ 2 = 12 rem 1; 12 ÷ 2 = 6 rem 0; 6 ÷ 2 = 3 rem 0; 3 ÷ 2 = 1 rem 1; 1 ÷ 2 = 0 rem 1. Reading remainders upward: 11001₂.",
            },
          },
        ],
        keyPoints: [
          "CPU = control unit + ALU + registers.",
          "RAM is volatile; ROM and secondary storage are not.",
          "1 byte = 8 bits.",
          "Binary place values are powers of 2.",
        ],
      },
    ],
  },
  {
    slug: "history",
    name: "History",
    category: "Arts & Social Science",
    tagline: "Nigeria from amalgamation to republic, plus regional and global turning points.",
    description:
      "History rewards chronological confidence. Lessons organise Nigerian and world history around dates and consequences, giving you a revision skeleton rather than isolated facts.",
    icon: "🏺",
    accent: "#795548",
    sortOrder: 16,
    lessons: [
      {
        slug: "nigeria-colonial-to-republic",
        title: "Nigeria: amalgamation to the republic",
        summary: "1914 amalgamation, nationalism, independence and the republican constitution.",
        durationMinutes: 24,
        level: "Core",
        examWeight: "High yield",
        sections: [
          {
            heading: "Colonial consolidation",
            body:
              "The Berlin Conference (1884–1885) established rules for European partition of Africa. Britain governed Nigeria as separate protectorates until the 1914 amalgamation by Lord Lugard joined the Northern and Southern Protectorates.",
            bullets: [
              "Indirect rule was practised most successfully in the North, through emirs.",
              "The Aba Women's Riot (1929) protested taxation and the warrant chief system.",
              "The elective principle was introduced by the Clifford Constitution (1922).",
              "The Richards, Macpherson, Lyttleton and Independence constitutions each widened representation.",
            ],
          },
          {
            heading: "Nationalism and independence",
            body:
              "Newspapers, trade unions, the Pan-African movement and returning elites fed nationalist activity. The NCNC, Action Group and Northern People's Congress became the dominant parties.",
            bullets: [
              "Nigeria became independent on 1 October 1960 with Tafawa Balewa as Prime Minister.",
              "The 1963 republican constitution made the Head of State an indigenous figure; Nnamdi Azikiwe became the first President.",
              "The 1963 Mid-West Region was created by plebiscite.",
              "Military rule began with the January 1966 coup.",
            ],
          },
        ],
        keyPoints: [
          "Amalgamation of Nigeria: 1914.",
          "Clifford Constitution 1922 introduced the elective principle.",
          "Independence: 1 October 1960.",
          "Nigeria became a republic in 1963 with Azikiwe as President.",
        ],
      },
    ],
  },
  {
    slug: "home-economics",
    name: "Home Economics",
    category: "Vocational",
    tagline: "Food and nutrition, clothing, home management and family living.",
    description:
      "Home Economics combines science with daily living. Lessons cover the nutritional, textile and management knowledge that the CBT asks for, with practical Nigerian examples.",
    icon: "🍲",
    accent: "#AD1457",
    sortOrder: 17,
    lessons: [
      {
        slug: "food-nutrition-and-home-management",
        title: "Food, nutrition and home management",
        summary: "Nutrients, deficiency diseases, food preservation and the management of family resources.",
        durationMinutes: 22,
        level: "Core",
        examWeight: "High yield",
        sections: [
          {
            heading: "The six classes of nutrients",
            body:
              "Food performs three functions: body-building (growth and repair), energy-giving, and protective/regulatory. Learn each nutrient with a Nigerian food source and a deficiency disease.",
            bullets: [
              "Carbohydrates and fats: energy. Excess is stored as adipose tissue.",
              "Proteins: growth and repair; deficiency leads to kwashiorkor (protein) or marasmus (protein-energy).",
              "Vitamin C from citrus: deficiency causes scurvy.",
              "Vitamin A from carrot and palm oil: deficiency causes night blindness.",
              "Vitamin D with sunlight: deficiency causes rickets in children.",
              "Iron from liver and green leafy vegetables: deficiency causes anaemia.",
            ],
          },
          {
            heading: "Food preservation and hygiene",
            body:
              "Preservation slows spoilage by controlling micro-organisms, moisture and enzymes. Methods include drying, salting, smoking, canning, freezing, fermentation and irradiation.",
            bullets: [
              "Drying removes moisture needed by micro-organisms.",
              "Salting and sugaring reduce water activity by osmosis.",
              "Canning uses heat to sterilise and a sealed container to exclude air.",
              "Refrigeration slows (not stops) microbial growth.",
            ],
          },
          {
            heading: "Managing family resources",
            body:
              "A budget plans income against expenditure. Good home management uses the managerial process: planning, organising, implementing and evaluating to meet family goals with limited resources.",
            bullets: [
              "Distinguish fixed expenditure (rent, school fees) from flexible expenditure (entertainment).",
              "Labour-saving devices and time plans reduce drudgery.",
              "Decision-making considers values, goals and available resources.",
            ],
          },
        ],
        keyPoints: [
          "Protein deficiency causes kwashiorkor; protein-energy deficiency causes marasmus.",
          "Vitamin C deficiency causes scurvy.",
          "Drying, salting and canning control microbial growth.",
          "Managerial process: plan, organise, implement, evaluate.",
        ],
      },
    ],
  },
  {
    slug: "fine-art",
    name: "Fine Art",
    category: "Vocational",
    tagline: "Elements, principles, Nigerian art traditions and appreciation.",
    description:
      "Fine Art includes theory, history and appreciation. These lessons cover the vocabulary of design and the Nigerian art traditions examiners ask about, useful even for candidates who are not practical artists.",
    icon: "🎨",
    accent: "#C2185B",
    sortOrder: 18,
    lessons: [
      {
        slug: "elements-and-nigerian-art-traditions",
        title: "Elements of design and Nigerian art traditions",
        summary: "Line, colour, form, texture, balance and the Nok, Ife and Benin traditions.",
        durationMinutes: 22,
        level: "Core",
        examWeight: "High yield",
        sections: [
          {
            heading: "Elements and principles",
            body:
              "Elements are the ingredients; principles are how they are arranged. Most CBT questions ask you to identify the element or principle used in a described composition.",
            bullets: [
              "Elements: line, shape, form, colour, tone, texture, space.",
              "Principles: balance, rhythm, repetition, contrast, emphasis, proportion, unity, harmony.",
              "Primary colours: red, yellow, blue. Secondary: orange, green, violet.",
              "Complementary colours sit opposite on the colour wheel and create high contrast.",
              "Warm colours advance; cool colours recede.",
            ],
          },
          {
            heading: "Nigerian art traditions",
            body:
              "Nigerian art history questions usually test the culture, material and object associated with each tradition.",
            bullets: [
              "Nok: terracotta figurines, tin mining site in Kaduna area, c. 500 BC–AD 200.",
              "Ife: naturalistic bronze and terracotta heads, considered highly realistic.",
              "Benin: bronze castings and ivory work associated with the Oba's court.",
              "Igbo-Ukwu: intricate bronze/copper alloy objects dated around the 9th–10th century.",
              "Contemporary Nigerian art includes the Osogbo school and its use of local materials.",
            ],
          },
        ],
        keyPoints: [
          "Elements are ingredients; principles are arrangement.",
          "Complementary colours are opposite on the wheel.",
          "Nok = terracotta; Benin = bronze court art.",
          "Ife heads are known for naturalism.",
        ],
      },
    ],
  },
  {
    slug: "french",
    name: "French",
    category: "Languages",
    tagline: "Greetings, articles, verbs and comprehension for the French UTME paper.",
    description:
      "French is one of the most sat optional language papers. Lessons focus on the grammar and vocabulary patterns repeated in objective questions and short passages.",
    icon: "🇫🇷",
    accent: "#283593",
    sortOrder: 19,
    lessons: [
      {
        slug: "french-basics-and-grammar",
        title: "Salutations, articles and present-tense verbs",
        summary: "Greetings, definite and indefinite articles, gender and the key irregular verbs.",
        durationMinutes: 22,
        level: "Core",
        examWeight: "High yield",
        sections: [
          {
            heading: "Greetings and introductions",
            body:
              "Learn phrases as complete units. French greetings change with the time of day and with formality (tu vs vous).",
            bullets: [
              "Bonjour (good morning/afternoon), Bonsoir (good evening), Bonne nuit (good night).",
              "Comment vous appelez-vous ? / Comment tu t'appelles ? — What is your name?",
              "Je m'appelle… (My name is…), Enchanté(e).",
              "Au revoir (goodbye), Merci (thank you), S'il vous plaît (please).",
            ],
          },
          {
            heading: "Articles, gender and number",
            body:
              "Every French noun has a gender. Definite articles are le (masculine), la (feminine), l' (before a vowel) and les (plural). Indefinite articles are un, une and des.",
            bullets: [
              "Le livre (the book, masculine), la table (the table, feminine), l'école (the school).",
              "Plural nouns usually add -s; adjectives agree in gender and number.",
              "Negation: ne … pas around the verb — Je ne parle pas français.",
            ],
          },
          {
            heading: "Present tense of key verbs",
            body:
              "Regular -er verbs drop -er and add -e, -es, -e, -ons, -ez, -ent. The most important irregulars should be memorised.",
            bullets: [
              "parler: je parle, tu parles, il/elle parle, nous parlons, vous parlez, ils parlent.",
              "être (to be): je suis, tu es, il est, nous sommes, vous êtes, ils sont.",
              "avoir (to have): j'ai, tu as, il a, nous avons, vous avez, ils ont.",
              "aller (to go): je vais, tu vas, il va, nous allons, vous allez, ils vont.",
            ],
          },
        ],
        keyPoints: [
          "Definite articles: le, la, l', les.",
          "Negation is ne … pas.",
          "Regular -er verb endings: -e, -es, -e, -ons, -ez, -ent.",
          "Memorise être, avoir, aller irregulars.",
        ],
      },
    ],
  },
  {
    slug: "yoruba",
    name: "Yoruba",
    category: "Languages",
    tagline: "Àmi ohùn, ìkíni àti àṣà Yorùbá — tones, greetings and culture.",
    description:
      "The Yoruba paper tests tone marks, grammar, comprehension and culture. Lessons concentrate on the tone system and the vocabulary that carries the most marks.",
    icon: "🪘",
    accent: "#00695C",
    sortOrder: 20,
    lessons: [
      {
        slug: "yoruba-tones-and-greetings",
        title: "Àmi ohùn, ìkíni àti ọ̀rọ̀ Yorùbá",
        summary: "The three tones, greeting forms, family vocabulary and the role of proverbs.",
        durationMinutes: 20,
        level: "Core",
        examWeight: "High yield",
        sections: [
          {
            heading: "Àmi ohùn (tonal marks)",
            body:
              "Yoruba is a tonal language. The tone mark changes meaning, so omitting it can change the word entirely. There are three tones: high (do), mid (re) and low (mi).",
            bullets: [
              "High tone: ó (acute accent). Mid tone: o (no mark). Low tone: ò (grave accent).",
              "Bàbá (father) with low-high tones differs from baba without correct marks.",
              "Ọkọ̀ (vehicle) vs ọkọ (husband) vs ọ̀kọ̀ (spear) — the tones carry the meaning.",
              "Syllabic nasal ń and the digraphs ọ and ẹ must be written correctly.",
            ],
          },
          {
            heading: "Ìkíni (greetings)",
            body:
              "Greetings depend on the time of day and situation. Being able to match the greeting to its context is a frequent objective question.",
            bullets: [
              "Ẹ káàárọ̀ — good morning (respectful, to an elder).",
              "Ẹ káàsán — good afternoon. Ẹ káalẹ́ — good evening.",
              "Ẹ kú iṣẹ́ — well done at work. Ẹ kú oríire — congratulations.",
              "Ṣé àlàáfíà ni? — Is there peace? (How are you?)",
            ],
          },
          {
            heading: "Àṣà àti òwe (culture and proverbs)",
            body:
              "Culture questions cover naming ceremonies, marriage, chieftaincy, traditional religion and oral literature. Proverbs (òwe) are the core of Yoruba oral wisdom and are often asked as 'what does this proverb teach?'",
            bullets: [
              "Ìwúre: prayers and blessings at ceremonies.",
              "Oríkì: praise poetry that identifies lineage and achievement.",
              "Bàtá, dùndún and gángan are talking drums.",
              "Òwe means proverb; àlọ́ means folktale.",
            ],
          },
        ],
        keyPoints: [
          "Three tones: high, mid, low — tone changes meaning.",
          "Ẹ káàárọ̀ = good morning.",
          "Ọkọ/ọkọ̀/ọ̀kọ̀ differ by tone.",
          "Òwe = proverb, àlọ́ = folktale.",
        ],
      },
    ],
  },
  {
    slug: "igbo",
    name: "Igbo",
    category: "Languages",
    tagline: "Greetings, tones, family vocabulary and Igbo cultural practices.",
    description:
      "Igbo tests tone, grammar, comprehension and culture. These lessons build the everyday vocabulary and cultural knowledge that objective questions draw on.",
    icon: "🥁",
    accent: "#4527A0",
    sortOrder: 21,
    lessons: [
      {
        slug: "igbo-greetings-and-culture",
        title: "Ekele, asụsụ na ọdịnala Igbo",
        summary: "Greetings, family words, tone awareness and key cultural practices.",
        durationMinutes: 20,
        level: "Core",
        examWeight: "High yield",
        sections: [
          {
            heading: "Ekele (greetings)",
            body:
              "Greeting is important in Igbo culture and usually includes an inquiry about the family or the day's work.",
            bullets: [
              "Kedu ka ị mere? — How are you? (singular). Kedu ka unu mere? — plural.",
              "Ị bọọla chi — good morning. Ndeewo — a respectful greeting.",
              "Nnọọ — welcome. Daalụ — thank you.",
              "Ka ọ dị — goodbye / take care.",
            ],
          },
          {
            heading: "Ezinaụlọ (family vocabulary)",
            body:
              "Family and community words appear frequently in objective questions and comprehension passages.",
            bullets: [
              "Nna — father. Nne — mother. Ụmụaka — children. Nwanne — sibling.",
              "Dị — husband, nwunye — wife. Nna ochie — grandfather.",
              "Ụlọ — house/home. Ụlọ akwụkwọ — school.",
              "Obi — the main house/heart of the compound; also courage.",
            ],
          },
          {
            heading: "Ọdịnala (culture)",
            body:
              "Cultural questions test the meaning of ceremonies, titles and forms of expression. Associate each term with its purpose.",
            bullets: [
              "Igbo has two basic tones (high and low), with downstep; tone marks change meaning.",
              "Ogbon'oye title is a chieftaincy title in some Igbo communities.",
              "Iwa akwa is a garment-wearing ceremony marking achievement.",
              "Ọfọ is a symbol of truth, justice and ancestral authority.",
              "Ilu means proverb — the vehicle of Igbo wisdom.",
            ],
          },
        ],
        keyPoints: [
          "Kedu ka ị mere? means how are you?",
          "Nna = father, nne = mother.",
          "Igbo has high and low tones with downstep.",
          "Ọfọ symbolises truth and justice.",
        ],
      },
    ],
  },
  {
    slug: "arabic",
    name: "Arabic",
    category: "Languages",
    tagline: "The alphabet, greetings, the definite article and basic grammar.",
    description:
      "Arabic is offered as an optional UTME language. Lessons cover the writing system, greetings and the grammar patterns asked in objective questions.",
    icon: "🕌",
    accent: "#00695C",
    sortOrder: 22,
    lessons: [
      {
        slug: "arabic-greetings-and-grammar",
        title: "The Arabic alphabet, greetings and the definite article",
        summary: "28 letters, common greetings, sun and moon letters, and noun gender.",
        durationMinutes: 20,
        level: "Core",
        examWeight: "High yield",
        sections: [
          {
            heading: "The alphabet and writing direction",
            body:
              "Arabic has 28 letters and is written and read from right to left. Letters change shape depending on whether they occur at the beginning, middle or end of a word.",
            bullets: [
              "Short vowels (ḥarakāt) are written as marks above or below letters.",
              "The hamza and the letter ʿayn need careful attention.",
              "Numbers are written left to right even inside Arabic text.",
              "Arabic has no capital letters.",
            ],
          },
          {
            heading: "Greetings and everyday phrases",
            body:
              "Formal greetings in Arabic carry religious and social meaning. Learn the standard response to each.",
            bullets: [
              "As-salāmu ʿalaykum — peace be upon you; response: wa ʿalaykumu s-salām.",
              "Ṣabāḥ al-khayr — good morning; response: ṣabāḥ an-nūr.",
              "Masāʾ al-khayr — good evening.",
              "Shukran — thank you; ʿafwan — you're welcome.",
            ],
          },
          {
            heading: "The definite article and noun gender",
            body:
              "The definite article is al- (ال), attached as a prefix. Nouns are masculine or feminine; most feminine nouns end in tāʾ marbūṭa (ة).",
            bullets: [
              "kitāb — a book; al-kitāb — the book.",
              "Sun letters assimilate the l; moon letters do not.",
              "Feminine nouns take feminine adjective agreement.",
              "Adjectives follow the noun they describe (naʿt and manʿūt).",
            ],
          },
        ],
        keyPoints: [
          "Arabic has 28 letters and is read right to left.",
          "al- is the definite article, prefixed to the noun.",
          "As-salāmu ʿalaykum is the standard greeting.",
          "Most feminine nouns end in tāʾ marbūṭa.",
        ],
      },
    ],
  },
];
