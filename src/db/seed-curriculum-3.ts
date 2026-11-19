import type { SeedLesson } from "./seed-subjects";
import type { ExtraLesson } from "./seed-curriculum-2";

/** Third-wave lessons: sciences and mathematics. */
export const extraLessons3: ExtraLesson[] = [
  {
    subjectSlug: "mathematics",
    lesson: {
      slug: "circle-theorems-loci",
      title: "Circle theorems, constructions and loci",
      summary: "Angle-chasing rules that solve circle problems in seconds, plus core constructions.",
      durationMinutes: 26,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Six theorems that cover every question",
          body:
            "Circle questions are angle-chasing: write every angle you can deduce until the wanted one appears. These six rules are sufficient.",
          bullets: [
            "Angle at centre = twice angle at circumference on the same chord.",
            "Angles in the same segment are equal.",
            "Angle in a semicircle is a right angle.",
            "Opposite angles of a cyclic quadrilateral sum to 180°.",
            "Radius meets tangent at 90°; tangents from one external point are equal.",
            "Alternate segment theorem: tangent-chord angle equals the angle in the opposite arc.",
          ],
          example: {
            prompt: "ABCD is cyclic with angle A = 100°. Find angle C.",
            solution: "Opposite angles sum to 180°, so C = 80°.",
          },
        },
        {
          heading: "Constructions and loci",
          body:
            "Use compasses and a straightedge only. A locus is the path of points obeying a rule.",
          bullets: [
            "Bisect any angle; bisect any line segment at 90°.",
            "Construct 60° (equilateral triangle), then bisect to 30°; 90° from perpendicular.",
            "Locus equidistant from two points: perpendicular bisector.",
            "Locus equidistant from two lines: angle bisector; from one point: circle.",
          ],
        },
      ],
      keyPoints: [
        "Centre angle is double the circumference angle.",
        "Cyclic quadrilateral opposites sum to 180°.",
        "Tangent meets radius at right angles.",
        "Locus = perpendicular bisector, angle bisector or circle.",
      ],
    },
  },
  {
    subjectSlug: "physics",
    lesson: {
      slug: "heat-and-gas-laws",
      title: "Heat, expansion and gas laws",
      summary: "Temperature scales, expansivity, and Boyle/Charles/pressure laws with Kelvin.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Temperature and expansion",
          body:
            "Temperature is measured from fixed points (ice and steam). Most substances expand when heated; water contracts between 0 °C and 4 °C (anomalous expansion), which keeps lakes from freezing solid.",
          bullets: [
            "Convert °C to K by adding 273 before any gas calculation.",
            "Linear expansivity α = ΔL/(L₀Δθ); bimetallic strips bend because metals differ.",
            "Thermometers: liquid-in-glass, resistance, thermocouple, infrared.",
            "Heat flows hot to cold until thermal equilibrium.",
          ],
        },
        {
          heading: "The gas laws in one equation",
          body:
            "Boyle (PV = constant at fixed T), Charles (V/T = constant at fixed P) and pressure law (P/T = constant at fixed V) combine into PV/T = constant for a fixed mass.",
          bullets: [
            "Always convert temperatures to kelvin first.",
            "Graphs: P against 1/V is a straight line through the origin.",
            "Kinetic theory: pressure comes from molecular collisions; temperature measures mean kinetic energy.",
            "Absolute zero (0 K) is where molecular motion theoretically stops.",
          ],
          example: {
            prompt: "A gas at 2 atm occupies 3 L. Find its volume at 1 atm, same temperature.",
            solution: "Boyle: P₁V₁ = P₂V₂ → 2 × 3 = 1 × V₂ → V₂ = 6 L.",
          },
        },
      ],
      keyPoints: [
        "Kelvin first, always.",
        "PV/T = constant unites the three gas laws.",
        "Water is densest at 4 °C.",
        "Temperature tracks mean molecular kinetic energy.",
      ],
    },
  },
  {
    subjectSlug: "physics",
    lesson: {
      slug: "equilibrium-moments-machines",
      title: "Equilibrium, moments and simple machines",
      summary: "Principle of moments, centre of gravity, and MA/VR/efficiency of machines.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Moments and balance",
          body:
            "Moment = force × perpendicular distance. A body balances when clockwise moments equal anticlockwise moments about the pivot, and the resultant force is zero.",
          bullets: [
            "Couples (two equal opposite parallel forces) cause rotation only.",
            "Centre of gravity: balance point; lower it and widen the base for stability.",
            "Toppling occurs when the line of action falls outside the base.",
            "Uniform metre rule: weight acts at the 50 cm mark.",
          ],
          example: {
            prompt: "A 20 g mass at the 10 cm mark balances a metre rule pivoted at 30 cm. What mass at 70 cm balances it?",
            solution: "20 × 20 = m × 40, so m = 10 g.",
          },
        },
        {
          heading: "Machines: MA, VR, efficiency",
          body:
            "Mechanical advantage = load/effort; velocity ratio = effort distance/load distance; efficiency = MA/VR × 100%. No machine exceeds 100%.",
          bullets: [
            "Levers: classify by fulcrum/load/effort order (crowbar, wheelbarrow, tweezers).",
            "Pulleys trade force for distance; each supporting rope roughly halves effort.",
            "Inclined plane: VR = length/height; longer slope, less effort.",
            "Hydraulic press multiplies force by area ratio (Pascal's principle).",
          ],
        },
      ],
      keyPoints: [
        "Clockwise = anticlockwise moments at balance.",
        "Efficiency = MA/VR × 100%.",
        "Lower centre of gravity and wider base stabilise.",
        "Hydraulics multiply force by area ratio.",
      ],
    },
  },
  {
    subjectSlug: "chemistry",
    lesson: {
      slug: "qualitative-analysis-salts",
      title: "Qualitative analysis and preparation of salts",
      summary: "Flame tests, precipitate colours, anion tests and salt preparation routes.",
      durationMinutes: 26,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Identifying cations",
          body:
            "Add aqueous NaOH drop by drop, then in excess. Colour plus solubility names the ion.",
          bullets: [
            "White precipitate soluble in excess: Al³⁺, Zn²⁺, Pb²⁺.",
            "Blue precipitate (insoluble): Cu²⁺. Dirty green: Fe²⁺. Reddish-brown: Fe³⁺.",
            "Ammonia gas (pungent, turns damp red litmus blue) signals NH₄⁺ warmed with NaOH.",
            "Flame tests: Na⁺ golden yellow, K⁺ lilac, Ca²⁺ brick red, Cu²⁺ blue-green.",
          ],
        },
        {
          heading: "Anions and salt preparation",
          body:
            "Test gases first (CO₂ turns limewater milky; H₂ pops; O₂ relights), then precipitates: AgNO₃ gives white AgCl with chlorides; BaCl₂ gives white BaSO₄ with sulphates.",
          bullets: [
            "Soluble salts: react acid + base/carbonatic/metal, then crystallise.",
            "Insoluble salts: mix two solutions (precipitation), e.g. AgNO₃ + NaCl → AgCl.",
            "PbCl₂ is the white chloride soluble in hot water.",
            "Warming removes excess volatile acid from preparations.",
          ],
          example: {
            prompt: "A salt gives a white precipitate with dilute HCl, soluble on heating. Identify the cation.",
            solution: "Pb²⁺ — lead(II) chloride dissolves in hot water, unlike AgCl.",
          },
        },
      ],
      keyPoints: [
        "Precipitate colour + solubility in excess NaOH identifies cations.",
        "Flame colours: Na yellow, K lilac, Ca brick-red.",
        "AgCl and BaSO₄ are the classic white precipitates.",
        "Soluble salts crystallise; insoluble salts precipitate.",
      ],
    },
  },
  {
    subjectSlug: "chemistry",
    lesson: {
      slug: "petroleum-polymers-environment",
      title: "Petroleum, polymers and environmental chemistry",
      summary: "Refinery fractions, cracking, addition vs condensation polymers, and pollution control.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "From crude oil to products",
          body:
            "Fractional distillation separates crude by boiling range. Smaller fractions are more valuable as fuels, so cracking breaks large molecules into petrol-range ones.",
          bullets: [
            "Order by increasing boiling point: refinery gas, petrol, kerosene, diesel, lubricating oil, bitumen.",
            "Octane rating measures resistance to knocking; reforming raises it.",
            "Catalytic cracking uses heat, pressure and catalysts.",
            "Nigerian refineries sit at Port Harcourt, Warri and Kaduna.",
          ],
        },
        {
          heading: "Polymers natural and synthetic",
          body:
            "Addition polymers form from unsaturated monomers with no by-product (polythene from ethene, PVC, perspex). Condensation polymers release small molecules (nylon, terylene). Natural polymers include rubber, starch, protein and cellulose.",
          bullets: [
            "Vulcanisation adds sulphur to harden rubber.",
            "Thermoplastics soften on heating (polythene); thermosets do not (bakelite).",
            "Biodegradable plastics answer the waste crisis of synthetics.",
            "Saponification (oil + alkali) makes soap; detergents work better in hard water.",
          ],
        },
      ],
      keyPoints: [
        "Fractions separate by boiling range; cracking makes more petrol.",
        "Addition: no by-product. Condensation: small molecule lost.",
        "Vulcanisation hardens rubber with sulphur.",
        "Soap from saponification; detergents beat hard water.",
      ],
    },
  },
  {
    subjectSlug: "biology",
    lesson: {
      slug: "nutrition-plants-animals",
      title: "Nutrition in plants and animals",
      summary: "Photosynthetic factors, mineral needs, diet classes and the digestion journey.",
      durationMinutes: 26,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Plant nutrition",
          body:
            "Photosynthesis rate depends on light, CO₂, water, chlorophyll and temperature (limiting factors). Minerals arrive as ions: nitrogen for proteins, magnesium for chlorophyll, phosphorus for roots, potassium for resistance.",
          bullets: [
            "Nitrogen deficiency yellows older leaves (chlorosis) and stunts growth.",
            "Test a leaf for starch: boil, decolourise in alcohol, add iodine (blue-black).",
            "Destarching (24 h darkness) proves photosynthesis makes the starch.",
            "Variegated-leaf experiments prove chlorophyll is necessary.",
          ],
        },
        {
          heading: "Animal nutrition and digestion",
          body:
            "A balanced diet carries carbohydrates, proteins, fats, vitamins, minerals, water and roughage. Digestion is mechanical plus enzymatic, ending in absorption at the ileum's villi.",
          bullets: [
            "Mouth: salivary amylase starts starch. Stomach: pepsin works in acid on proteins.",
            "Duodenum: bile emulsifies fats; pancreatic amylase, trypsin, lipase continue.",
            "Ileum: maltase, sucrase, lactase finish; villi absorb into blood and lacteals.",
            "Large intestine absorbs water; egestion removes undigested residue.",
          ],
          example: {
            prompt: "Food tests to run on a sample of beans.",
            solution: "Biuret (violet = protein), iodine (blue-black = starch), Sudan III/translucent spot (fats).",
          },
        },
      ],
      keyPoints: [
        "Limiting factors cap photosynthesis.",
        "N for proteins, Mg for chlorophyll.",
        "Villi absorb; large intestine reclaims water.",
        "Food tests: iodine, Benedict's, biuret, Sudan III.",
      ],
    },
  },
  {
    subjectSlug: "biology",
    lesson: {
      slug: "classification-tissues",
      title: "Classification, tissues and organisation",
      summary: "Five kingdoms, vertebrate classes, and the cell-to-system ladder.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Five kingdoms and vertebrate classes",
          body:
            "Monera (bacteria), Protista (amoeba, euglena), Fungi (mushrooms, moulds), Plantae, Animalia. Vertebrates split into fish, amphibians, reptiles, birds and mammals — learn one defining trait each.",
          bullets: [
            "Fish: gills, fins, scales, ectothermic. Amphibians: dual life, moist skin.",
            "Reptiles: scales, shelled eggs, ectothermic. Birds: feathers, beaks, endothermic, lay eggs.",
            "Mammals: hair, mammary glands, diaphragm, endothermic.",
            "Arthropods: jointed legs, exoskeleton, segmented body (insects: 6 legs, 3 body parts).",
          ],
        },
        {
          heading: "Levels of organisation",
          body:
            "Cell → tissue → organ → system → organism. Plant tissues include xylem, phloem, parenchyma; animal tissues include epithelial, muscular, nervous and connective (blood, bone).",
          bullets: [
            "Xylem carries water up; phloem carries food both ways.",
            "Epithelial tissue covers and lines; muscle contracts; nervous tissue conducts.",
            "Blood is a fluid connective tissue.",
            "Complexity rises with division of labour.",
          ],
        },
      ],
      keyPoints: [
        "Five kingdoms by cell type and nutrition.",
        "One defining trait per vertebrate class.",
        "Xylem up, phloem both ways.",
        "Organisation ladder: cell to organism.",
      ],
    },
  },
  {
    subjectSlug: "agricultural-science",
    lesson: {
      slug: "major-crops-systems",
      title: "Major crops and cropping systems",
      summary: "Cereals, tubers, legumes and cash crops with soils, plus systems from mono to rotation.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Crop groups and requirements",
          body:
            "Match each crop to its ecology. Examiners ask which crop suits which zone, or which practice fits which crop.",
          bullets: [
            "Cereals (maize, rice, millet, sorghum): full sun, fertile loam; rice tolerates flooding.",
            "Tubers (yam, cassava): deep friable soil; yam needs mounds/stakes, cassava propagates by cuttings.",
            "Legumes (cowpea, soybean, groundnut): fix nitrogen; groundnut prefers light sandy soil.",
            "Cash crops: cocoa (forest shade), oil palm (humid south), cotton (savanna), rubber (high rainfall).",
          ],
        },
        {
          heading: "Cropping systems compared",
          body:
            "Monocropping risks pests and soil exhaustion; mixed/intercropping spreads risk; rotation restores fertility; shifting cultivation rests land for years.",
          bullets: [
            "Intercropping pairs complementary crops (maize + cowpea).",
            "Rotation rule: follow heavy feeders with legumes, then rest.",
            "Cover crops and mulching protect soil between seasons.",
            "Planting dates track rainfall onset; early planting often escapes peak pests.",
          ],
        },
      ],
      keyPoints: [
        "Match crop to soil and rainfall zone.",
        "Cassava from cuttings; yam from seed tubers.",
        "Rotation restores what monocropping depletes.",
        "Intercrop complementary partners.",
      ],
    },
  },
  {
    subjectSlug: "further-mathematics",
    lesson: {
      slug: "vectors-statics",
      title: "Vectors, statics and friction",
      summary: "Vector addition, components, force polygons and limiting friction.",
      durationMinutes: 28,
      level: "Advanced",
      examWeight: "High yield",
      sections: [
        {
          heading: "Vector algebra and geometry",
          body:
            "Vectors have magnitude and direction. Add tip-to-tail (triangle) or by components. The dot product a·b = |a||b|cosθ is zero for perpendicular vectors.",
          bullets: [
            "Position vector of P(x, y) is xi + yj.",
            "Unit vector = vector ÷ its magnitude.",
            "Parallel vectors are scalar multiples of each other.",
            "Resolve into components to add awkward directions.",
          ],
          example: {
            prompt: "Forces 3 N east and 4 N north act together. Find the resultant.",
            solution: "Magnitude √(9+16) = 5 N at tan⁻¹(4/3) ≈ 53° north of east.",
          },
        },
        {
          heading: "Equilibrium and friction",
          body:
            "Concurrent forces balance when their vector polygon closes. On rough surfaces, friction opposes motion up to a limit F = μR.",
          bullets: [
            "Three-force triangle: draw to scale or resolve and equate components.",
            "Smooth surfaces give normal reaction only; rough adds friction.",
            "Limiting friction F = μR acts at the point of slipping.",
            "Angle of friction satisfies tan λ = μ.",
          ],
        },
      ],
      keyPoints: [
        "Add vectors tip-to-tail or by components.",
        "Perpendicular vectors have zero dot product.",
        "Closed force polygon means equilibrium.",
        "F = μR at the point of slipping.",
      ],
    },
  },
  {
    subjectSlug: "computer-studies",
    lesson: {
      slug: "networks-internet-security",
      title: "Networks, the internet and staying secure",
      summary: "LAN to WAN, topologies, online services and the security habits examiners test.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Network types and topologies",
          body:
            "LAN covers a building, MAN a city, WAN the globe. Topology is the wiring shape; each has a failure profile.",
          bullets: [
            "Star: central hub — one cable failure isolates one node.",
            "Bus: single backbone — cheap but one break downs all.",
            "Ring: token passes round; one break needs dual rings.",
            "Devices: modem (signal conversion), router (path choice), switch (local forwarding).",
          ],
        },
        {
          heading: "Internet services and safety",
          body:
            "Browsing, email, e-learning, e-banking and cloud storage ride on ISPs and IP addresses. Every convenience has a matching threat and defence.",
          bullets: [
            "Threats: viruses, worms, trojans, phishing, hacking, identity theft.",
            "Defences: antivirus updates, firewalls, strong unique passwords, 2FA, backups.",
            "Phishing red flags: urgency, strange sender, suspicious links, prize claims.",
            "Netiquette and copyright: cite sources, respect licences, protect privacy.",
          ],
          example: {
            prompt: "A message claims you won a lottery you never entered and asks for bank details. Respond as taught.",
            solution: "Delete it: unsolicited prize + request for details = phishing. Never click, never reply.",
          },
        },
      ],
      keyPoints: [
        "LAN/MAN/WAN by area covered.",
        "Star isolates faults; bus shares one backbone.",
        "Threat → defence pairs are the exam pattern.",
        "Verify senders before clicking anything.",
      ],
    },
  },
];
