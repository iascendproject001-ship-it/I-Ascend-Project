import type { ExtraLesson } from "./seed-curriculum-2";

/** Sixth-wave lessons: sciences and mathematics. */
export const extraLessons8: ExtraLesson[] = [
  {
    subjectSlug: "mathematics",
    lesson: {
      slug: "word-problems-masterclass",
      title: "Word problems: age, work, mixture and ratio",
      summary: "Translate English to algebra first — then the mathematics is easy.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "The translation step",
          body:
            "Every word problem is solved twice: once in English (who is who, what changes), once in symbols. Write 'let' statements before any equation.",
          bullets: [
            "Age: 'in x years' adds to present ages on both sides.",
            "Work: rates add reciprocally — 1/a + 1/b = 1/together.",
            "Mixture: track the quantity of the pure substance, not the mixture.",
            "Ratio shares: total ratio parts divide the whole first.",
          ],
          example: {
            prompt: "A father is 4 times his son's age. In 5 years he will be 3 times. Find present ages.",
            solution: "Son x, father 4x. Then 4x + 5 = 3(x + 5) gives x = 10; father 40.",
          },
        },
        {
          heading: "Speed traps in wording",
          body:
            "Examiners hide the operation in verbs: 'exceeds by' (subtract), 'of' (multiply), 'per' (divide), 'consecutive' (n, n+1, n+2).",
          bullets: [
            "Consecutive even numbers differ by 2, not 1.",
            "Two-digit numbers: value = 10t + u; reversed = 10u + t.",
            "Always substitute answers back into the story, not just the equation.",
          ],
        },
      ],
      keyPoints: [
        "Write 'let' statements before equations.",
        "Work rates add as reciprocals.",
        "Track pure substance in mixtures.",
        "Verify in the story, not the algebra.",
      ],
    },
  },
  {
    subjectSlug: "physics",
    lesson: {
      slug: "measurements-errors-accuracy",
      title: "Measurements, errors and dimensional analysis",
      summary: "Vernier, micrometer, significant figures, and checking formulas by units.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Instruments and precision",
          body:
            "Metre rule (1 mm), vernier caliper (0.1/0.05/0.02 mm), micrometer screw gauge (0.01 mm). Reading = main scale + vernier coincidence × least count, minus zero error.",
          bullets: [
            "Zero error adds or subtracts from every reading — correct it first.",
            "Parallax: read perpendicular to the scale.",
            "Significant figures follow the least precise measurement.",
            "Small lengths (wire diameter) demand the micrometer, not the rule.",
          ],
        },
        {
          heading: "Errors and dimensions",
          body:
            "Systematic errors shift all readings (bad zero, wrong calibration); random errors scatter (reaction time, estimation). Percentage error propagates worst through multiplication and powers.",
          bullets: [
            "Dimensional check: both sides of v² = u² + 2as carry L²T⁻².",
            "Density [ML⁻³], force [MLT⁻²], energy [ML²T⁻²] — derive, don't memorise.",
            "An equation failing dimensions is certainly wrong.",
            "Repeat and average to tame random error.",
          ],
          example: {
            prompt: "A vernier reads 2.3 cm main scale with 4th division matching (least count 0.01 cm). Find the reading.",
            solution: "2.3 + 4 × 0.01 = 2.34 cm.",
          },
        },
      ],
      keyPoints: [
        "Correct zero error before reading.",
        "Least count decides the instrument.",
        "Dimensions validate every formula.",
        "Systematic shifts; random scatters.",
      ],
    },
  },
  {
    subjectSlug: "chemistry",
    lesson: {
      slug: "thermochemistry-hess",
      title: "Thermochemistry and Hess's law",
      summary: "Exothermic vs endothermic, enthalpy diagrams and cycle arithmetic.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Heat in, heat out",
          body:
            "Exothermic reactions release heat (ΔH negative: combustion, neutralisation, respiration); endothermic absorb it (ΔH positive: photosynthesis, thermal decomposition).",
          bullets: [
            "Standard enthalpy of formation: one mole from elements.",
            "Combustion of fuels and foods powers society and bodies.",
            "Bond breaking absorbs; bond making releases — net decides sign.",
            "Calorimetry: q = mcΔθ measures reaction heat.",
          ],
        },
        {
          heading: "Hess cycles",
          body:
            "Enthalpy change depends only on start and finish. Draw the cycle, then add and subtract known steps to find the unknown.",
          bullets: [
            "Reverse an equation flips the sign of ΔH.",
            "Multiply an equation multiplies its ΔH.",
            "Formation data builds combustion and reaction enthalpies.",
            "Common trap: forgetting state symbols change values.",
          ],
          example: {
            prompt: "Given C + O₂ → CO₂ (ΔH = −394) and CO + ½O₂ → CO₂ (ΔH = −283), find 2C + O₂ → 2CO.",
            solution: "Double the first, subtract twice the second: −788 + 566 = −222 kJ.",
          },
        },
      ],
      keyPoints: [
        "Exothermic ΔH negative; endothermic positive.",
        "Breaking absorbs, making releases.",
        "Reverse flips sign; scale scales ΔH.",
        "q = mcΔθ in calorimetry.",
      ],
    },
  },
  {
    subjectSlug: "biology",
    lesson: {
      slug: "sense-organs-defects",
      title: "Sense organs: eye, ear, skin and their defects",
      summary: "How receptors work and the common defects examiners ask about.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "The eye and its corrections",
          body:
            "Cornea and lens focus light on the retina; rods see dim light, cones see colour; the optic nerve carries the image. Accommodation changes lens shape via ciliary muscles.",
          bullets: [
            "Myopia (short sight): eyeball too long — concave lens diverges rays.",
            "Hypermetropia (long sight): eyeball too short — convex lens converges.",
            "Cataract clouds the lens; glaucoma raises eye pressure.",
            "Pupil reflex adjusts light faster than any camera.",
          ],
        },
        {
          heading: "Ear, skin, nose and tongue",
          body:
            "Outer ear funnels sound; ossicles amplify to the cochlea's hair cells. Skin senses touch, pressure, pain and temperature; taste buds map sweet, salt, sour, bitter (plus umami).",
          bullets: [
            "Semicircular canals sense balance and rotation.",
            "Eustachian tube equalises middle-ear pressure.",
            "Smell adapts fast — notice how odours fade.",
            "Receptor density decides sensitivity (fingertips beat backs).",
          ],
        },
      ],
      keyPoints: [
        "Myopia concave; hypermetropia convex.",
        "Rods dim, cones colour.",
        "Ossicles amplify to the cochlea.",
        "Canals balance; Eustachian equalises.",
      ],
    },
  },
  {
    subjectSlug: "agricultural-science",
    lesson: {
      slug: "animal-health-treatment",
      title: "Animal health: symptoms, treatment and prevention",
      summary: "Recognise the big diseases, act fast, and prevent more than you cure.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Reading a sick animal",
          body:
            "Dull eyes, rough coat, isolation, loss of appetite, abnormal dung, coughing, lameness and fever (above ~39 °C in cattle) all signal trouble. Record symptoms before treating.",
          bullets: [
            "Newcastle (poultry): twisted necks, green droppings — vaccinate.",
            "Foot-and-mouth: blisters on mouth/feet of cloven animals — quarantine.",
            "Anthrax: sudden death with unclotted blood — bury deep, never open.",
            "Mastitis swells udders; dewormers clear internal parasites on schedule.",
          ],
        },
        {
          heading: "Prevention beats cure",
          body:
            "Clean water, dry bedding, balanced feed, vaccination calendars, quarantine sheds and footbaths stop outbreaks starting.",
          bullets: [
            "Disinfect housing between batches (all-in, all-out).",
            "Isolate sick stock the same day signs appear.",
            "Call the veterinary officer for notifiable diseases.",
            "Keep a health register: dates, symptoms, drugs, outcomes.",
          ],
        },
      ],
      keyPoints: [
        "Record symptoms before treating.",
        "Newcastle, FMD, anthrax: know the signs.",
        "Quarantine same-day.",
        "Prevent with vaccine, hygiene, records.",
      ],
    },
  },
  {
    subjectSlug: "further-mathematics",
    lesson: {
      slug: "matrices-3x3-transformations",
      title: "3×3 matrices and transformations",
      summary: "Determinants by expansion, inverses, and what matrices do to shapes.",
      durationMinutes: 26,
      level: "Advanced",
      examWeight: "High yield",
      sections: [
        {
          heading: "Determinants and inverses",
          body:
            "Expand along any row or column with checkerboard signs (+ − + / − + − / + − +). Inverse = adjugate ÷ determinant; singular matrices (det = 0) have none.",
          bullets: [
            "Sarrus' rule works only for 3×3 — expansion works always.",
            "Row operations that add multiples preserve the determinant.",
            "Solve linear systems with inverse matrices or Cramer's rule.",
            "Verify AA⁻¹ = I to catch arithmetic slips.",
          ],
          example: {
            prompt: "Find the determinant of [[1,2,3],[0,1,4],[5,6,0]].",
            solution: "Expand row 1: 1(0−24) − 2(0−20) + 3(0−5) = −24 + 40 − 15 = 1.",
          },
        },
        {
          heading: "Transformations",
          body:
            "Matrices rotate, reflect, enlarge and shear the plane. Read columns as images of the unit vectors.",
          bullets: [
            "Rotation θ anticlockwise: [[cosθ, −sinθ],[sinθ, cosθ]].",
            "Reflection in y = x swaps coordinates: [[0,1],[1,0]].",
            "Enlargement k scales areas by k².",
            "Successive transformations multiply right-to-left.",
          ],
        },
      ],
      keyPoints: [
        "Checkerboard signs guide expansion.",
        "Zero determinant means no inverse.",
        "Columns are transformed unit vectors.",
        "Areas scale by k² under enlargement k.",
      ],
    },
  },
  {
    subjectSlug: "computer-studies",
    lesson: {
      slug: "ethics-crime-careers",
      title: "Computer ethics, crime and careers",
      summary: "Right conduct online, recognising crime, and pathways into tech work.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Ethics and the law",
          body:
            "Software piracy, plagiarism, hacking and exam malpractice with devices are crimes with real penalties, including under Nigeria's Cybercrimes Act. Respect licences, cite sources, protect others' data.",
          bullets: [
            "Piracy steals developers' livelihoods.",
            "Passwords and PINs are never shared — staff won't ask.",
            "Think before posting: screenshots outlive regrets.",
            "Report fraud attempts instead of forwarding them.",
          ],
        },
        {
          heading: "Careers that pay",
          body:
            "Programming, data analysis, networking, cybersecurity, design and digital marketing all grow from the same foundations taught here.",
          bullets: [
            "Build a portfolio of small real projects early.",
            "Certifications plus practice beat certificates alone.",
            "Freelancing platforms reward demonstrable skill.",
            "Teachers and CBT operators are honourable tech careers too.",
          ],
        },
      ],
      keyPoints: [
        "Piracy and hacking are crimes, not cleverness.",
        "Never share passwords or OTPs.",
        "Portfolios prove skill.",
        "Ethics questions reward plain honesty.",
      ],
    },
  },
];
