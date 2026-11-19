import type { ExtraLesson } from "./seed-curriculum-2";

/** Fifth-wave lessons: sciences and mathematics. */
export const extraLessons5: ExtraLesson[] = [
  {
    subjectSlug: "english-language",
    lesson: {
      slug: "idioms-and-registers",
      title: "Idioms, registers and word formation",
      summary: "A 40-idiom survival bank, occupational registers and affixation rules.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Idioms by family",
          body:
            "Learn idioms in meaning-families, not alphabetically. Examiners recycle the same 40 ideas with new sentences.",
          bullets: [
            "Time: once in a blue moon (rarely), at the eleventh hour (last moment), beat the clock.",
            "Trouble: at sixes and sevens (confused), in hot water, bite the dust (defeated).",
            "Secrets: spill the beans, let the cat out of the bag, a blessing in disguise.",
            "Effort: burn the midnight oil, pull one's weight, cut corners (do poorly to save effort).",
          ],
        },
        {
          heading: "Registers and affixes",
          body:
            "Registers are vocabularies of occupations: legal (plaintiff, affidavit), medical (diagnosis, prescription), sports (offside, derby), ICT (bandwidth, phishing). Affixes build words: un-/in-/dis- negate; -ness/-tion/-ment form nouns.",
          bullets: [
            "Match the term to the occupation, not the dictionary meaning.",
            "One-word substitutes: polyglot (many languages), orphanage? no — use: venue? Keep: versatile (many uses), novice (beginner).",
            "unhappy = un + happy + ... actually un- + happy; unhappiness adds -ness.",
            "Check spelling after adding affixes (drop silent e: love → lovable).",
          ],
        },
      ],
      keyPoints: [
        "Learn idioms in meaning-families.",
        "Match terms to occupations.",
        "Affixes change class and meaning predictably.",
        "One-word substitutes reward wide reading.",
      ],
    },
  },
  {
    subjectSlug: "mathematics",
    lesson: {
      slug: "bases-inequalities-approximations",
      title: "Number bases, inequalities and approximations",
      summary: "Binary arithmetic, inequality lines and significant figures under time pressure.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Bases and standard form",
          body:
            "Binary place values double: 1, 2, 4, 8, 16, 32. Add in binary column by column, carrying twos. Standard form is one digit before the point times a power of ten.",
          bullets: [
            "101₂ + 11₂ = 1000₂ (5 + 3 = 8).",
            "Convert by place values: 101010₂ = 32 + 8 + 2 = 42.",
            "0.00045 = 4.5 × 10⁻⁴; 72000 = 7.2 × 10⁴.",
            "Computers count in binary; that is why the topic persists.",
          ],
          example: {
            prompt: "Add 1011₂ and 110₂.",
            solution: "Right to left: 1+0=1, 1+1=10 (write 0 carry 1), 0+1+carry=10 (0 carry 1), 1+carry=10. Result 10001₂ (11+6=17 ✓).",
          },
        },
        {
          heading: "Inequalities and approximations",
          body:
            "Solve like equations, except multiplying/dividing by a negative flips the sign. Round only at the final step.",
          bullets: [
            "2x + 3 > 11 gives x > 4; show it on a number line with an open circle.",
            "Combined: 0 ≤ x < 3 means 0, 1, 2 for integers.",
            "Significant figures count from the first non-zero digit: 0.04671 → 0.047 (2 s.f.).",
            "LCM solves 'together again' problems (bells, traffic lights).",
          ],
        },
      ],
      keyPoints: [
        "Binary carries twos, not tens.",
        "Flipping rule for negative multiplication.",
        "Count significant figures from the first non-zero digit.",
        "LCM answers 'when next together'.",
      ],
    },
  },
  {
    subjectSlug: "physics",
    lesson: {
      slug: "pressure-fluids",
      title: "Pressure, fluids and hydraulics",
      summary: "Solid pressure, Torricelli's barometer, upthrust and the hydraulic press.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Pressure in solids and fluids",
          body:
            "Pressure = force ÷ area. Sharp knives cut because small area means huge pressure. In fluids, pressure grows with depth (P = ρgh) and acts in all directions.",
          bullets: [
            "Torricelli's mercury column (~760 mmHg) measures atmospheric pressure.",
            "Siphons, suckers and drinking straws all use atmospheric pressure.",
            "B lactometer? no. Barometers fall before storms (low pressure).",
            "Pascal's principle: pressure applied to enclosed fluid transmits undiminished.",
          ],
        },
        {
          heading: "Upthrust and hydraulics",
          body:
            "Archimedes: upthrust equals the weight of displaced fluid. Floating bodies displace their own weight. Hydraulics multiply force by area ratio.",
          bullets: [
            "Ships float by displacing enormous water weight; submarines adjust ballast.",
            "Hydrometer floats higher in denser liquids.",
            "Hydraulic press: F₂ = F₁ × (A₂/A₁) — car lifts, brakes, jacks.",
            "Relative density = density ÷ density of water (no units).",
          ],
          example: {
            prompt: "A 10 N effort on a 2 cm² piston lifts what load on a 20 cm² piston?",
            solution: "Load = 10 × 20/2 = 100 N.",
          },
        },
      ],
      keyPoints: [
        "Pressure falls when area rises.",
        "760 mmHg anchors atmospheric questions.",
        "Upthrust equals displaced-fluid weight.",
        "Hydraulics trade distance for force.",
      ],
    },
  },
  {
    subjectSlug: "physics",
    lesson: {
      slug: "induction-transformers-ac",
      title: "Electromagnetic induction, transformers and AC",
      summary: "Faraday and Lenz, step-up/step-down maths, and mains electricity.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Induction: Faraday and Lenz",
          body:
            "Changing magnetic flux through a coil induces EMF (Faraday); the induced current opposes the change (Lenz). More turns, stronger magnet, faster motion — bigger EMF.",
          bullets: [
            "Generators rotate coils in fields (mechanical → electrical).",
            "Electric bells, relays and scrap cranes use electromagnets.",
            "Eddy currents waste energy as heat; laminated cores reduce them.",
            "Back EMF opposes the supply in motors.",
          ],
        },
        {
          heading: "Transformers and mains",
          body:
            "Vs/Vp = Ns/Np = Ip/Is for ideal transformers. Step-up raises voltage for transmission (lower current, less heat loss); step-down delivers safe voltage.",
          bullets: [
            "Nigerian mains: ~220–240 V at 50 Hz AC.",
            "Fuses and breakers protect against overloads; earthing protects users.",
            "Three-pin plugs: live (brown), neutral (blue), earth (green-yellow).",
            "kWh = kilowatts × hours is the billing unit.",
          ],
          example: {
            prompt: "A transformer has 100 primary and 500 secondary turns. With 20 V input, find the output.",
            solution: "Vs = 20 × 500/100 = 100 V (step-up).",
          },
        },
      ],
      keyPoints: [
        "Changing flux induces EMF; Lenz gives direction.",
        "Turns ratio = voltage ratio.",
        "Step up to transmit, step down to use.",
        "Know plug wiring and the kWh.",
      ],
    },
  },
  {
    subjectSlug: "chemistry",
    lesson: {
      slug: "rates-and-equilibrium",
      title: "Reaction rates and chemical equilibrium",
      summary: "Collision theory, rate factors, Haber/Contact conditions and Le Chatelier predictions.",
      durationMinutes: 26,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Why reactions speed up",
          body:
            "Collision theory: particles must collide with enough energy (activation energy) and correct orientation. Anything raising effective collisions raises the rate.",
          bullets: [
            "Higher temperature: more particles exceed activation energy.",
            "Higher concentration/pressure: more collisions per second.",
            "Greater surface area (powdered solids): more exposed particles.",
            "Catalysts offer a lower-energy pathway and emerge unchanged.",
          ],
        },
        {
          heading: "Equilibrium and industry",
          body:
            "Reversible reactions reach dynamic equilibrium (rates equal, concentrations steady). Le Chatelier: disturbed systems shift to oppose the change.",
          bullets: [
            "Haber (NH₃): iron catalyst, ~450 °C, ~200 atm — yield vs rate compromise.",
            "Contact (H₂SO₄): V₂O₅ catalyst; SO₂ + O₂ ⇌ SO₃.",
            "Exothermic forward: lower temperature favours product; fewer product moles: higher pressure favours it.",
            "Catalysts speed equilibrium without shifting position.",
          ],
        },
      ],
      keyPoints: [
        "Effective collisions need energy plus orientation.",
        "Catalysts lower the barrier, not the yield.",
        "Haber: Fe, moderate heat, high pressure.",
        "Disturbed equilibria oppose the disturbance.",
      ],
    },
  },
  {
    subjectSlug: "chemistry",
    lesson: {
      slug: "metals-extraction",
      title: "Metals: reactivity, extraction and uses",
      summary: "The reactivity series as a prediction tool, blast furnace and aluminium electrolysis.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "The reactivity series",
          body:
            "K > Na > Ca > Mg > Al > (C) > Zn > Fe > Sn > Pb > (H) > Cu > Ag > Au. Position predicts displacement, extraction method and corrosion.",
          bullets: [
            "A higher metal displaces a lower one from solution (Zn + CuSO₄ → blue fades).",
            "Above carbon: electrolysis. Around/below: reduction with carbon.",
            "Gold and platinum occur native (uncombined).",
            "Reactivity with water/acid falls down the series.",
          ],
        },
        {
          heading: "Extraction in practice",
          body:
            "Iron: blast furnace fed with haematite, coke (fuel + reducer) and limestone (flux removing silica as slag). Aluminium: electrolysis of molten bauxite in cryolite.",
          bullets: [
            "Coke burns to CO₂, reduced to CO, which reduces the ore.",
            "Limestone decomposes to CaO, carrying silica off as slag.",
            "Cryolite lowers bauxite's melting point, saving energy.",
            "Recycling aluminium saves ~95% of extraction energy.",
          ],
        },
      ],
      keyPoints: [
        "Series order predicts displacement and extraction.",
        "Blast furnace trio: ore, coke, limestone.",
        "Aluminium needs electrolysis, not carbon.",
        "Native metals sit at the bottom.",
      ],
    },
  },
  {
    subjectSlug: "biology",
    lesson: {
      slug: "respiration-excretion-homeostasis",
      title: "Respiration, excretion and homeostasis",
      summary: "Breathing mechanics, excretory organs and how the body holds its balance.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Breathing and gaseous exchange",
          body:
            "Inhalation: diaphragm contracts and flattens, ribs move up and out, volume rises, pressure falls, air rushes in. Alveoli (huge surface, thin walls, rich blood) exchange gases rapidly.",
          bullets: [
            "Inhaled air ~21% O₂, 0.04% CO₂; exhaled ~16% O₂, 4% CO₂.",
            "Anaerobic respiration in muscle: glucose → lactic acid + little energy.",
            "Oxygen debt is repaid by deep breathing oxidising lactate.",
            "Smoking damages cilia and alveoli; tar is carcinogenic.",
          ],
        },
        {
          heading: "Excretion and balance",
          body:
            "Lungs (CO₂, water), skin (sweat: water, salts, urea), kidneys (urea, excess salts/water). The skin is the largest organ; homeostasis (negative feedback) holds temperature, sugar and water steady.",
          bullets: [
            "Hot day: sweating plus vasodilation lose heat. Cold: shivering, vasoconstriction, hair erection.",
            "Kidney failure needs dialysis; transplant cures.",
            "Dehydration and heatstroke follow excess water/salt loss.",
          ],
        },
      ],
      keyPoints: [
        "Inhalation: diaphragm down, ribs out.",
        "Alveoli maximise surface for exchange.",
        "Skin is the largest excretory organ.",
        "Negative feedback holds the internal balance.",
      ],
    },
  },
  {
    subjectSlug: "biology",
    lesson: {
      slug: "support-movement-skeleton",
      title: "Support, movement and the skeleton",
      summary: "Bones, joints, antagonistic muscles and plant support systems.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "The mammalian skeleton",
          body:
            "Axial (skull, vertebral column, ribs) protects and supports; appendicular (limbs, girdles) moves. Bone is living tissue supplied with blood.",
          bullets: [
            "Skull protects the brain; vertebrae shield the spinal cord.",
            "Rib cage guards heart and lungs and drives breathing.",
            "Ball-and-socket (shoulder, hip) rotates freely; hinge (elbow, knee) swings one way.",
            "Ligaments bind bone to bone; tendons bind muscle to bone.",
          ],
        },
        {
          heading: "Muscles and plant support",
          body:
            "Muscles pull only, so they work in antagonistic pairs (biceps/triceps, quadriceps/hamstrings). Plants stand by turgidity, wood (xylem/lignin) and climbing adaptations.",
          bullets: [
            "One muscle contracts while its partner relaxes.",
            "Tendons transmit the pull to bones.",
            "Wilting is lost turgor; watering restores it.",
            "Tendrils, thorns-as-climbers? no — tendrils and twining stems aid climbing.",
          ],
        },
      ],
      keyPoints: [
        "Axial protects; appendicular moves.",
        "Ligament bone–bone; tendon muscle–bone.",
        "Muscles work in opposing pairs.",
        "Turgor plus lignin hold plants up.",
      ],
    },
  },
  {
    subjectSlug: "agricultural-science",
    lesson: {
      slug: "finance-marketing-extension",
      title: "Farm finance, marketing and extension",
      summary: "Credit, cooperatives, storage, processing and getting research to the field.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Money for the farm",
          body:
            "Farming needs capital for inputs, labour and equipment. Sources range from personal savings to banks, government schemes and cooperatives — each with a cost.",
          bullets: [
            "Cooperative societies pool savings and lend cheaply to members.",
            "Collateral and repayment plans decide loan approval.",
            "Keep cash, input and sales records or credit becomes guesswork.",
            "Insurance (crop, livestock) transfers weather and disease risk.",
          ],
        },
        {
          heading: "From harvest to market",
          body:
            "Harvest timing, storage, processing and grading decide what the farmer actually earns. Extension carries improved seeds and methods to the field.",
          bullets: [
            "Store grains dry in silos/cribs; treat against weevils.",
            "Process to add value: cassava→gari, palm fruits→oil, milk→cheese.",
            "Grade produce: uniform quality earns premium prices.",
            "Extension agents demonstrate, don't just lecture — resultators convince.",
          ],
        },
      ],
      keyPoints: [
        "Cooperatives are the smallholder's bank.",
        "Records unlock credit.",
        "Processing multiplies harvest value.",
        "Grade before you sell.",
      ],
    },
  },
  {
    subjectSlug: "further-mathematics",
    lesson: {
      slug: "compound-angles-identities",
      title: "Compound angles and trigonometric identities",
      summary: "Addition formulas, double angles and the equations they solve.",
      durationMinutes: 26,
      level: "Advanced",
      examWeight: "High yield",
      sections: [
        {
          heading: "Addition and double-angle formulas",
          body:
            "sin(A±B), cos(A±B) and tan(A±B) expand predictably; setting B = A gives double-angle forms used to simplify and solve.",
          bullets: [
            "sin(A+B) = sinA cosB + cosA sinB; cos(A−B) = cosA cosB + sinA sinB.",
            "cos2A has three faces: cos²A − sin²A = 2cos²A − 1 = 1 − 2sin²A.",
            "tan2A = 2tanA/(1 − tan²A).",
            "Use exact values (30°, 45°, 60°) to evaluate sin75° = sin(45+30).",
          ],
          example: {
            prompt: "Simplify cos²15° − sin²15°.",
            solution: "This is cos(2×15°) = cos30° = √3/2.",
          },
        },
        {
          heading: "Solving with identities",
          body:
            "Convert everything to one function, factorise, and reject roots outside the range. Always check for extraneous values from squaring.",
          bullets: [
            "Replace 1 with sin²+cos² to homogenise equations.",
            "Solve cos x = 1/2 in 0–360°: 60° and 300°.",
            "Factorise quadratics in sin or cos before solving.",
            "Verify each solution in the original equation.",
          ],
        },
      ],
      keyPoints: [
        "Addition formulas generate double angles.",
        "cos2A wears three equivalent forms.",
        "Homogenise, factorise, then solve.",
        "Reject out-of-range roots.",
      ],
    },
  },
  {
    subjectSlug: "computer-studies",
    lesson: {
      slug: "data-databases-spreadsheets",
      title: "Data, databases and spreadsheets",
      summary: "Fields and records, spreadsheet addresses, file types and everyday data skills.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Organising data",
          body:
            "Data hierarchy: bit → byte → field → record → file → database. Databases query millions of records instantly; flat files cannot.",
          bullets: [
            "Field = one attribute (column); record = one item (row).",
            "Primary keys uniquely identify records (admission numbers).",
            "Sort, filter and query answer questions without retyping.",
            "Back up the database separately from the computer.",
          ],
        },
        {
          heading: "Spreadsheets and files",
          body:
            "Cells sit at column-letter + row-number addresses (B4). Formulas start with = and copy relatively unless locked with $.",
          bullets: [
            "=SUM(A1:A10) adds a range; =AVERAGE finds the mean.",
            "Charts turn tables into instant arguments.",
            "File extensions advertise content: .docx text, .xlsx sheet, .pptx slides, .jpg image, .mp3 audio.",
            "Save often, version clearly (v1, v2, final).",
          ],
        },
      ],
      keyPoints: [
        "Field is column; record is row.",
        "Cell address = letter + number.",
        "Formulas begin with =.",
        "Extensions reveal file types.",
      ],
    },
  },
];
