import type { ExtraLesson } from "./seed-curriculum-2";

/** Sixth-wave lessons: closing the remaining syllabus gaps. */
export const extraLessons7: ExtraLesson[] = [
  {
    subjectSlug: "english-language",
    lesson: {
      slug: "synonyms-antonyms-substitutes",
      title: "Vocabulary power: synonyms, antonyms and one-word substitutes",
      summary: "Connotation ladders, affix flips and the one-word answers examiners love.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Synonyms with shades",
          body:
            "Near-synonyms differ in strength and formality: slim, slender, thin, skinny, emaciated. Examiners test whether you feel the shade, not just the dictionary core.",
          bullets: [
            "Brave → courageous (formal), valiant (heroic), bold (forward).",
            "Rich → wealthy (formal), affluent (flowing), opulent (lavish).",
            "Test candidates inside the original sentence, not in isolation.",
            "Collocations decide: 'strong tea' but 'powerful engine', never swapped.",
          ],
        },
        {
          heading: "Antonyms and one-word substitutes",
          body:
            "Form antonyms with prefixes (honest/dishonest, legal/illegal, obedient/disobedient) and learn the classic one-word answers: a lover of books (bibliophile), fear of heights (acrophobia), government by the rich (plutocracy).",
          bullets: [
            "Un-, in-/im-/il-/ir-, dis-, mis-, non- negate predictably.",
            "One who can use both hands: ambidextrous. Speaker of many languages: polyglot.",
            "A short witty poem of two lines: epigram (literature crossover).",
            "Revise 10 substitutes weekly; they compound fast.",
          ],
        },
      ],
      keyPoints: [
        "Shades of meaning decide synonyms.",
        "Collocations are fixed partnerships.",
        "Prefixes flip meaning mechanically.",
        "Bank one-word substitutes weekly.",
      ],
    },
  },
  {
    subjectSlug: "mathematics",
    lesson: {
      slug: "variation-proportionality",
      title: "Variation, proportionality and word problems",
      summary: "Direct, inverse, joint and partial variation with the constant-first method.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Four variation types",
          body:
            "Direct (y = kx), inverse (y = k/x), joint (z = kxy) and partial (y = kx + c, e.g. taxi fares with flag-fall). Always find k first from the given pair.",
          bullets: [
            "Direct as square: y = kx² — square before multiplying.",
            "Inverse: product constant (xy = k).",
            "Partial: the '+ c' survives even at zero (standing charge).",
            "Word problems: translate 'varies as' to an equation immediately.",
          ],
          example: {
            prompt: "y varies directly as x²; y = 18 when x = 3. Find y when x = 5.",
            solution: "k = 18/9 = 2, so y = 2 × 25 = 50.",
          },
        },
        {
          heading: "Proportionality reasoning",
          body:
            "If a ∝ b and b ∝ c, then a ∝ c (transitivity). Scaling questions ask 'what happens to y if x doubles' — substitute 2x and compare.",
          bullets: [
            "Doubling x in y = kx² quadruples y.",
            "Halving x in y = k/x doubles y.",
            "Joint variation chains multiply.",
            "Check reasonableness: variation preserves direction or reverses it.",
          ],
        },
      ],
      keyPoints: [
        "Find k first, always.",
        "Partial variation keeps its constant.",
        "Scale by substitution, not memory.",
        "Translate 'varies as' instantly.",
      ],
    },
  },
  {
    subjectSlug: "physics",
    lesson: {
      slug: "electrostatics-capacitors",
      title: "Electrostatics and capacitors",
      summary: "Charging, Coulomb's law, fields, and series/parallel capacitors.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Charges at rest",
          body:
            "Like charges repel; unlike attract. Conductors share charge freely; insulators hold it. Charging by friction, conduction and induction (earthing the near side) explains electroscope behaviour.",
          bullets: [
            "Gold-leaf electroscope detects and compares charges.",
            "Induction: bring a charged rod near, earth the far side, remove earth, remove rod.",
            "Lightning conductors give charge an easy path to earth.",
            "Coulomb's law mirrors gravitation: F = kq₁q₂/r².",
          ],
        },
        {
          heading: "Capacitors store charge",
          body:
            "Capacitance C = Q/V in farads (microfarads in practice). Series reduces total (1/C = Σ1/Cᵢ); parallel adds (C = ΣCᵢ) — the reverse of resistors.",
          bullets: [
            "Series: same charge, voltage shared. Parallel: same voltage, charge shared.",
            "Energy stored = ½QV = ½CV².",
            "Dielectrics (paper, ceramic) raise capacitance.",
            "Capacitors smooth power supplies and start motors.",
          ],
          example: {
            prompt: "Two 6 μF capacitors in series, then in parallel. Find each total.",
            solution: "Series: (6×6)/(6+6) = 3 μF. Parallel: 6 + 6 = 12 μF.",
          },
        },
      ],
      keyPoints: [
        "Induction needs earthing at the right step.",
        "Series capacitors shrink; parallel grow.",
        "Energy = ½QV.",
        "Coulomb mirrors Newton with charge.",
      ],
    },
  },
  {
    subjectSlug: "chemistry",
    lesson: {
      slug: "industrial-chemistry",
      title: "Industrial chemistry: cement, glass, soap and fertilizers",
      summary: "Raw materials, key reactions and why each industry sits where it does.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Cement, glass and ceramics",
          body:
            "Cement: limestone + clay heated in a kiln (clinker), then ground with gypsum. Glass: sand + soda + limestone melted; different additives make coloured, safety and optical glass.",
          bullets: [
            "Setting of cement needs water (hydration), not drying.",
            "Limestone regions (Sokoto, Ewekoro) host cement works.",
            "Ceramics fire clay permanently; glazes waterproof it.",
            "Recycling glass saves sand and furnace energy.",
          ],
        },
        {
          heading: "Soap, detergents and fertilizers",
          body:
            "Saponification (oil/fat + alkali) makes soap plus glycerol; detergents are synthetic surfactants that work in hard water. NPK fertilizers restore nitrogen, phosphorus and potassium.",
          bullets: [
            "Soap scums in hard water (Ca/Mg salts); detergents do not.",
            "Urea is the richest common nitrogen fertilizer.",
            "Excess fertilizer eutrophicates ponds (algal blooms, dead fish).",
            "Match industry to raw material and market in location questions.",
          ],
        },
      ],
      keyPoints: [
        "Cement = limestone + clay + kiln + gypsum.",
        "Glass = sand + soda + limestone.",
        "Soap scums; detergents persist.",
        "Urea leads nitrogen content.",
      ],
    },
  },
  {
    subjectSlug: "chemistry",
    lesson: {
      slug: "solutions-solubility-water",
      title: "Solutions, solubility curves and water",
      summary: "Concentration units, solubility factors, and hard/soft water treatment.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Concentration and solubility",
          body:
            "Molarity (mol/dm³), mass concentration (g/dm³) and percentage interconvert. Solubility (g per 100 g water) rises with temperature for most solids but falls for gases.",
          bullets: [
            "Dilution: M₁V₁ = M₂V₂.",
            "Solubility curves read saturation at any temperature.",
            "Supersaturated solutions crystallise when seeded or cooled.",
            "Pressure raises gas solubility (fizzy drinks bottled under pressure).",
          ],
          example: {
            prompt: "What volume of 2 M acid makes 500 cm³ of 0.5 M?",
            solution: "2V = 0.5 × 0.5 → V = 0.125 dm³ = 125 cm³.",
          },
        },
        {
          heading: "Water: hardness and treatment",
          body:
            "Temporary hardness (bicarbonates) boils away; permanent hardness (sulphates/chlorides) needs washing soda or ion exchange. Municipal treatment runs screening → sedimentation → filtration → chlorination.",
          bullets: [
            "Hard water wastes soap and furs kettles, but supplies calcium.",
            "Boiling removes temporary hardness only.",
            "Chlorination kills germs at the tap end.",
            "Distillation gives the purest laboratory water.",
          ],
        },
      ],
      keyPoints: [
        "M₁V₁ = M₂V₂ for dilutions.",
        "Solubility curves answer saturation questions.",
        "Boiling cures temporary hardness only.",
        "Treatment order: screen, settle, filter, chlorinate.",
      ],
    },
  },
  {
    subjectSlug: "biology",
    lesson: {
      slug: "heredity-advanced",
      title: "Heredity II: dihybrid crosses, linkage and variation",
      summary: "9:3:3:1, sex linkage in full, mutations and the selection story.",
      durationMinutes: 26,
      level: "Advanced",
      examWeight: "High yield",
      sections: [
        {
          heading: "Dihybrid inheritance",
          body:
            "Two traits assort independently (Mendel's second law) unless linked. A TtRr × TtRr cross gives the classic 9:3:3:1 phenotypic ratio.",
          bullets: [
            "FOIL gametes: TR, Tr, tR, tr from TtRr.",
            "Test cross with fully recessive (ttrr) reveals unknown genotype.",
            "Linked genes travel together, breaking the ratio.",
            "Incomplete dominance blends (pink snapdragons); codominance shows both (AB blood).",
          ],
          example: {
            prompt: "Cross TTRR with ttrr, then self the F1. Give the F2 phenotypic ratio.",
            solution: "F1 all TtRr; F2 ratio 9 tall-round : 3 tall-wrinkled : 3 short-round : 1 short-wrinkled.",
          },
        },
        {
          heading: "Variation, mutation and selection",
          body:
            "Continuous variation (height, yield) is polygenic and environmental; discontinuous (blood group, tongue-rolling) is single-gene. Mutations (gene or chromosome) supply raw novelty; selection keeps what fits.",
          bullets: [
            "Down syndrome: trisomy 21 (nondisjunction).",
            "Sickle-cell heterozygotes resist malaria — balanced polymorphism.",
            "Artificial selection breeds crops and livestock deliberately.",
            "Fossils, embryos, homologous structures evidence evolution.",
          ],
        },
      ],
      keyPoints: [
        "9:3:3:1 signals independent assortment.",
        "Test-cross against full recessive.",
        "Continuous = many genes + environment.",
        "Selection acts on variation mutations supply.",
      ],
    },
  },
  {
    subjectSlug: "economics",
    lesson: {
      slug: "cooperatives-entrepreneurship",
      title: "Cooperatives, SMEs and entrepreneurship",
      summary: "How small producers pool strength and how enterprises begin and grow.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Cooperative societies",
          body:
            "Voluntary associations serving members: consumer (bulk buying), producer/marketing (joint sales), thrift and credit (loans), farming cooperatives. One member one vote; surplus shared by patronage or shares.",
          bullets: [
            "Benefits: credit access, bulk discounts, bargaining power, training.",
            "Problems: limited capital, illiteracy, mismanagement, political interference.",
            "Distinct from companies: service motive over profit maximisation.",
            "Nigerian examples span farming, transport and staff multipurpose societies.",
          ],
        },
        {
          heading: "Entrepreneurship and SMEs",
          body:
            "Entrepreneurs organise other factors, bear uncertainty and innovate. SMEs dominate Nigerian employment but face power, credit and infrastructure gaps.",
          bullets: [
            "Functions: identify opportunity, mobilise resources, bear risk, manage growth.",
            "Qualities: initiative, perseverance, integrity, record-keeping.",
            "Government support: SMEDAN, Bank of Industry, microfinance banks.",
            "Business plans answer what, for whom, at what cost and profit.",
          ],
        },
      ],
      keyPoints: [
        "Cooperatives serve members, not profit.",
        "One member, one vote.",
        "Entrepreneurs bear uncertainty.",
        "Records separate survivors from failures.",
      ],
    },
  },
  {
    subjectSlug: "government",
    lesson: {
      slug: "democracy-since-1999",
      title: "Democratic consolidation and challenges since 1999",
      summary: "Elections, reforms, federal tensions and the issues dominating current questions.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Elections and reforms",
          body:
            "Successive elections (1999, 2003, 2007, 2011, 2015, 2019, 2023) trace improving then contested credibility. Reforms — voters' register, card reader/BVAS, Electoral Act amendments — target rigging methods one by one.",
          bullets: [
            "2015: first opposition victory at presidential level (APC over PDP).",
            "Electoral offences: vote buying, ballot snatching, falsification, intimidation.",
            "Tribunals and courts decide disputed returns.",
            "INEC independence (funding, tenure, appointment) stays debated.",
          ],
        },
        {
          heading: "Federal tensions and governance issues",
          body:
            "Revenue allocation, resource control, state creation demands, security (insurgency, banditry, separatism), corruption and the cost of governance recur as essay themes.",
          bullets: [
            "Derivation principle vs population/equality in allocation debates.",
            "State policing debate balances local knowledge against abuse fears.",
            "Anti-corruption bodies: EFCC, ICPC, Code of Conduct Bureau/Tribunal.",
            "Civil society and media sustain accountability between elections.",
          ],
        },
      ],
      keyPoints: [
        "2015 marked the first opposition presidential win.",
        "Reforms chase rigging methods.",
        "Allocation and security dominate federal debates.",
        "Accountability lives between elections too.",
      ],
    },
  },
  {
    subjectSlug: "literature-in-english",
    lesson: {
      slug: "criticism-essay-technique",
      title: "Literary criticism and exam essay technique",
      summary: "Critical vocabulary, paragraph structure and time management for essay answers.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "The critic's toolkit",
          body:
            "Criticism judges how form serves meaning. Deploy terms precisely: approve structure, question consistency, compare treatments across texts.",
          bullets: [
            "Form vs content: does the structure carry the theme?",
            "Characterisation: convincing, consistent, developed?",
            "Language: diction, imagery, dialogue quality.",
            "Authorial vision: what view of life emerges?",
          ],
        },
        {
          heading: "Writing the exam essay",
          body:
            "Introduction (text, author, task restated, thesis), body paragraphs (point → evidence → technique → effect), conclusion (judgement). Budget roughly one minute per mark.",
          bullets: [
            "Answer the set question, not the topic in general.",
            "Short embedded quotations beat long copied passages.",
            "One idea per paragraph; link paragraphs forward.",
            "Reserve five minutes to proofread names and spellings.",
          ],
        },
      ],
      keyPoints: [
        "Judge form by how it serves meaning.",
        "Point, evidence, technique, effect.",
        "Embed short quotations.",
        "Budget a minute per mark.",
      ],
    },
  },
  {
    subjectSlug: "christian-religious-studies",
    lesson: {
      slug: "psalms-proverbs-wisdom",
      title: "Psalms, Proverbs and wisdom literature",
      summary: "Types of psalms, wisdom themes and how to apply them.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "The Psalter's voices",
          body:
            "Psalms sort into praise, lament, thanksgiving, royal and wisdom types. David authored many; Asaph and the sons of Korah others. Jesus and the apostles quote them constantly.",
          bullets: [
            "Psalm 23: the Lord as shepherd — provision and protection.",
            "Psalm 51: repentance after Nathan confronted David.",
            "Psalm 121/91: protection confessions for danger.",
            "Laments move from complaint to trust — a pattern for prayer answers.",
          ],
        },
        {
          heading: "Proverbs and wisdom living",
          body:
            "Proverbs collect Solomon-era wisdom (with Agur and Lemuel): diligence over sloth, honest scales, controlled tongue, faithful friendship, fear of the Lord as beginning of wisdom.",
          bullets: [
            "Ant lessons industry; craving must be ruled.",
            "Truthful lips endure; lying tongues vanish.",
            "Apply by pairing each saying with a modern school/home scene.",
            "Ecclesiastes balances: enjoy life, remember judgement.",
          ],
        },
      ],
      keyPoints: [
        "Classify psalms before interpreting.",
        "Laments end in trust.",
        "Proverbs pair with modern scenes.",
        "Fear of God begins wisdom.",
      ],
    },
  },
  {
    subjectSlug: "commerce",
    lesson: {
      slug: "contracts-agency-law",
      title: "Contracts, agency and commercial law basics",
      summary: "Valid contracts, agents' duties and the paper that proves trade.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Making a valid contract",
          body:
            "Offer, acceptance, consideration, capacity, legality and (usually) writing for major deals. Advertisements invite offers; the customer's order is the offer.",
          bullets: [
            "Minors' contracts are generally void except necessaries.",
            "Breach remedies: damages, specific performance, rescission.",
            "Exemption clauses cannot cover everything — read them.",
            "Consensus (meeting of minds) fails under mistake, fraud or duress.",
          ],
        },
        {
          heading: "Agency in commerce",
          body:
            "Agents (brokers, factors, auctioneers, commercial travellers) act for principals within authority and account fully. Third parties bind the principal when authority exists.",
          bullets: [
            "Factor holds goods and sells in own name; broker merely connects.",
            "Auctioneers sell to the highest bidder under hammer conditions.",
            "Del credere agents guarantee buyers' payment for commission.",
            "Duties: loyalty, care, obedience, accounting; rights: remuneration, indemnity.",
          ],
        },
      ],
      keyPoints: [
        "Offer + acceptance + consideration + capacity.",
        "Adverts invite; orders offer.",
        "Factors hold goods; brokers connect.",
        "Agents account for everything.",
      ],
    },
  },
  {
    subjectSlug: "financial-accounting",
    lesson: {
      slug: "manufacturing-departmental",
      title: "Manufacturing and departmental accounts",
      summary: "Prime cost to production cost, and splitting results by department.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Cost buildup to production",
          body:
            "Direct materials + direct labour + direct expenses = prime cost; add factory overheads for production cost; adjust for work-in-progress; transfer finished goods to trading at production cost.",
          bullets: [
            " carriage on raw materials joins material cost.",
            "Apportion overheads sensibly (floor area, machine hours, headcount).",
            "Abnormal losses leave the cost build-up for P&L.",
            "Manufacturing profit (transfer above cost) is eliminated on consolidation.",
          ],
        },
        {
          heading: "Departmental accounts",
          body:
            "Departments share common costs by agreed bases so managers see true segment profit — the same logic as branches without separate entities.",
          bullets: [
            "Allocate rent by floor area, power by meter readings, wages by headcount.",
            "Inter-department transfers priced at cost or agreed margin.",
            "Compare margins across departments to guide effort.",
            "Joint costs need consistent, disclosed bases.",
          ],
        },
      ],
      keyPoints: [
        "Prime plus overheads equals production cost.",
        "Adjust for opening/closing WIP.",
        "Allocate shared costs by sensible bases.",
        "Segments reveal where profit lives.",
      ],
    },
  },
  {
    subjectSlug: "geography",
    lesson: {
      slug: "zones-regional-development",
      title: "Geopolitical zones and regional development",
      summary: "Six zones, resource geography and closing regional gaps.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Six zones, six characters",
          body:
            "North-Central (food basket, minerals, capital), North-East (arid, livestock, Lake Chad, insurgency strain), North-West (grains, groundnut, populous cities), South-East (dense, trade, industry), South-South (oil, creeks, ports), South-West (cocoa, industry, megacity Lagos).",
          bullets: [
            "Zones group states for politics and planning, not government.",
            "Resource–need mismatches drive migration and federal transfers.",
            "Conflict and climate stress concentrate north-east.",
            "Urban primacy (Lagos, Kano, Ibadan, Abuja, Port Harcourt) shapes investment.",
          ],
        },
        {
          heading: "Developing regions evenly",
          body:
            "River basins, ADPs, commissions (NDDC, North-East Development Commission) and constituency projects all attempt balance — with mixed records examiners love to probe.",
          bullets: [
            "Criteria for regional planning: resources, needs, contiguity, viability.",
            "Growth-pole theory concentrates investment to spread effects.",
            "Evaluate schemes by targets vs outcomes, leakage and maintenance.",
            "Infrastructure (roads, power, water) precedes industry, not vice versa.",
          ],
        },
      ],
      keyPoints: [
        "Characterise each zone in one line.",
        "Zones plan; they do not govern.",
        "Match scheme to outcome honestly.",
        "Infrastructure first, industry follows.",
      ],
    },
  },
  {
    subjectSlug: "agricultural-science",
    lesson: {
      slug: "fisheries-forestry-wildlife",
      title: "Fisheries, forestry and wildlife",
      summary: "Capture vs culture fisheries, forest reserves and conservation farming.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Fish production",
          body:
            "Capture (rivers, lakes, sea) versus culture (ponds, cages, raceways). Tilapia and catfish (Clarias) dominate Nigerian aquaculture for hardiness and taste.",
          bullets: [
            "Pond siting: water supply, soil that holds water, drainage, access.",
            "Feed formulated by protein need; overfeeding fouls water.",
            "Common problems: predators, low oxygen, disease, theft.",
            "Smoke, dry, salt or freeze the catch promptly.",
          ],
        },
        {
          heading: "Forests and wildlife",
          body:
            "Forest reserves supply timber, fuel, fruits and medicine while guarding climate and water. Deforestation's costs (erosion, flooding, biodiversity loss) motivate taungya, shelterbelts and game reserves.",
          bullets: [
            "Taungya pairs food crops with young forest plantations.",
            "Selective felling beats clear-cutting for regeneration.",
            "Wildlife ranching and parks (Yankari, Cross River) protect species.",
            "Bush burning destroys humus, microbes and young trees.",
          ],
        },
      ],
      keyPoints: [
        "Culture controls what capture gambles.",
        "Tilapia and Clarias suit beginners.",
        "Taungya farms forests into being.",
        "Reserves protect more than trees.",
      ],
    },
  },
  {
    subjectSlug: "further-mathematics",
    lesson: {
      slug: "binomial-expectation",
      title: "Binomial expansion and expectation",
      summary: "Coefficients by Pascal or formula, and expected values of discrete variables.",
      durationMinutes: 24,
      level: "Advanced",
      examWeight: "High yield",
      sections: [
        {
          heading: "Binomial coefficients fluently",
          body:
            "(a+b)ⁿ expands with C(n,r) coefficients; the (r+1)th term is C(n,r)aⁿ⁻ʳbʳ. Pascal's triangle builds rows by addition.",
          bullets: [
            "C(n,r) = n!/(r!(n−r)!); C(n,0) = C(n,n) = 1.",
            "Symmetry halves memorisation: C(8,2) = C(8,6).",
            "Approximate (1+x)ⁿ ≈ 1+nx for small x.",
            "Watch signs in (a−b)ⁿ expansions.",
          ],
          example: {
            prompt: "Find the term independent of x in (x + 1/x)⁶.",
            solution: "General term C(6,r)x⁶⁻ʳx⁻ʳ = C(6,r)x⁶⁻²ʳ. Zero exponent needs r = 3: C(6,3) = 20.",
          },
        },
        {
          heading: "Expectation",
          body:
            "E(X) = Σx·P(x) is the long-run average. Fair games have zero expected gain; insurance and lotteries live on the gap.",
          bullets: [
            "Probabilities must sum to 1 — check first.",
            "Variance = E(X²) − [E(X)]².",
            "Binomial mean = np, variance = npq.",
            "Interpret: expectation predicts averages, not single trials.",
          ],
        },
      ],
      keyPoints: [
        "C(n,r) counts the term's coefficient.",
        "Pascal builds rows by addition.",
        "Expectation averages the long run.",
        "Check probabilities sum to one.",
      ],
    },
  },
  {
    subjectSlug: "computer-studies",
    lesson: {
      slug: "productivity-tools",
      title: "Productivity tools: word, sheets and slides",
      summary: "The 20% of features that do 80% of school and office work.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Word processing essentials",
          body:
            "Styles, tables, headers/footers, page numbers, references and track-changes turn typing into documents. Templates beat blank pages for reports and CVs.",
          bullets: [
            "Use heading styles so tables of contents generate themselves.",
            "Tables organise data words cannot.",
            "Spellcheck assists; proofreading decides.",
            "Save versions before major edits.",
          ],
        },
        {
          heading: "Sheets and slides",
          body:
            "Spreadsheets calculate, sort, filter and chart class scores and budgets. Slides persuade when each carries one idea with large type and one visual.",
          bullets: [
            "Absolute references ($A$1) survive copying.",
            "Sort/filter answer questions without retyping.",
            "One idea per slide; six lines maximum.",
            "Rehearse with timings; carry PDF backup.",
          ],
        },
      ],
      keyPoints: [
        "Styles generate structure free.",
        "Tables beat paragraphs for data.",
        "$ locks references when copying.",
        "One idea per slide.",
      ],
    },
  },
  {
    subjectSlug: "history",
    lesson: {
      slug: "fourth-republic-today",
      title: "The Fourth Republic to date",
      summary: "Presidents, parties, reforms and recurring questions from 1999.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Presidents and turning points",
          body:
            "Obasanjo (1999–2007, debt relief, GSM licensing), Yar'Adua (2007–10, amnesty, rule of law), Jonathan (2010–15, electoral reform, insurgency strain), Buhari (2015–23, anti-corruption, infrastructure), Tinubu (2023–, subsidy removal, forex reform).",
          bullets: [
            "1999 constitution restores federal presidential democracy.",
            "2007 Yar'Adua amnesty calmed the Delta militancy.",
            "2015 first opposition presidential victory.",
            "2023 subsidy removal reshaped prices and debate.",
          ],
        },
        {
          heading: "How questions come",
          body:
            "Match president to policy, sequence events, evaluate reforms. Avoid partisan praise or blame; examiners reward balanced evidence.",
          bullets: [
            "GSM 2001 liberalisation transformed communication.",
            "Paris Club exit (2005–06) freed fiscal space.",
            "#EndSARS 2020 tested police–youth relations.",
            "Census, elections and revenue debates never end.",
          ],
        },
      ],
      keyPoints: [
        "One signature policy per president.",
        "2015 and 2023 are anchor years.",
        "Evaluate reforms by evidence.",
        "Stay non-partisan in answers.",
      ],
    },
  },
  {
    subjectSlug: "home-economics",
    lesson: {
      slug: "pregnancy-infancy-care",
      title: "Pregnancy, infancy and childcare",
      summary: "Antenatal care, safe delivery, breastfeeding and immunisation.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Healthy pregnancy",
          body:
            "Antenatal visits monitor mother and baby; iron/folate, tetanus shots, malaria prophylaxis and birth planning save lives. Danger signs (bleeding, swelling, severe headache) demand immediate care.",
          bullets: [
            "Eat extra protein, iron, calcium; avoid alcohol and smoking.",
            "Deliver with skilled attendants in equipped facilities.",
            "Birth spacing protects mother and children.",
            "Fathers' support improves outcomes measurably.",
          ],
        },
        {
          heading: "Infant care",
          body:
            "Exclusive breastfeeding for six months, timely immunisation, growth monitoring, ORS for diarrhoea, and lots of responsive play and talk.",
          bullets: [
            "Colostrum first: nature's first vaccine.",
            "Immunisation schedule from birth (BCG, OPV, DPT, measles...).",
            "Wean gradually onto enriched family foods.",
            "Keep records: weight charts catch faltering early.",
          ],
        },
      ],
      keyPoints: [
        "Antenatal care saves two lives.",
        "Exclusive breastfeeding six months.",
        "Immunise on schedule.",
        "Danger signs mean hospital now.",
      ],
    },
  },
  {
    subjectSlug: "fine-art",
    lesson: {
      slug: "photography-digital-art",
      title: "Photography and digital art",
      summary: "Exposure triangle, composition and the ethics of editing.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Camera basics",
          body:
            "Aperture (depth of field), shutter speed (motion) and ISO (sensitivity) trade off in every shot. Phones automate them; artists override deliberately.",
          bullets: [
            "Rule of thirds places subjects off-centre.",
            "Leading lines pull eyes to the subject.",
            "Golden hour flatters; harsh noon flattens.",
            "Clean lenses and steady hands beat megapixels.",
          ],
        },
        {
          heading: "Digital tools and ethics",
          body:
            "Editing apps adjust exposure, crop and colour; design tools compose graphics. Credit sources, seek consent for portraits, and never fake documentary images.",
          bullets: [
            "Crop to remove distractions, not to deceive.",
            "Resolution decides print size (300 dpi for print).",
            "Back up originals separately from edits.",
            "Nigerian photography (J.D. 'Okhai Ojeikere hairstyles) documents culture.",
          ],
        },
      ],
      keyPoints: [
        "Aperture, shutter, ISO trade off.",
        "Thirds and leading lines compose.",
        "Edit honestly, credit always.",
        "Back up originals.",
      ],
    },
  },
  {
    subjectSlug: "french",
    lesson: {
      slug: "imparfait-storytelling",
      title: "Imparfait, plus-que-parfait and storytelling",
      summary: "Background vs events, and the past tenses that narrate them.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Imparfait for background",
          body:
            "Formed from the nous-present stem + -ais, -ais, -ait, -ions, -iez, -aient (être excepted: ét-). It paints ongoing states, habits and descriptions behind passé composé events.",
          bullets: [
            "Parler → je parlais, tu parlais, il parlait.",
            "Signal words: autrefois, chaque jour, pendant que, quand (background).",
            "Interpolated events pop in passé composé: 'Je dormais quand il a téléphoné.'",
            "State verbs (être, avoir, savoir, vouloir) prefer imparfait.",
          ],
        },
        {
          heading: "Plus-que-parfait and narrative order",
          body:
            "Had-done: imperfect of avoir/être + participle. It orders two pasts — the earlier one takes plus-que-parfait.",
          bullets: [
            "J'avais mangé avant qu'il n'arrive (I had eaten before he arrived).",
            "Agreement rules mirror passé composé.",
            "Story skeleton: setting (imparfait) → events (passé composé) → flashbacks (plus-que-parfait).",
          ],
        },
      ],
      keyPoints: [
        "Imparfait describes; passé composé narrates events.",
        "Nous-stem + imparfait endings (être → ét-).",
        "Plus-que-parfait marks the earlier past.",
        "State verbs favour imparfait.",
      ],
    },
  },
  {
    subjectSlug: "yoruba",
    lesson: {
      slug: "owe-figures-speech",
      title: "Òwe àti àkànlò èdè (proverbs and figures of speech)",
      summary: "Twenty high-yield proverbs with meanings and usage traps.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Proverbs examiners love",
          body:
            "Each òwe teaches conduct. Learn meaning first, then the situation that invites it.",
          bullets: [
            "'Ẹni tó bá da omi síwájú á tẹ̀ lé e tútù' — kindness returns (do good ahead, walk in coolness).",
            "'Ohun tí a bá fi ìfaradà ṣe kì í bàjẹ́' — patience preserves what haste destroys.",
            "'A kì í mọ̀ ọjọ́ ọlá' — no one knows tomorrow (humility).",
            "Technique: quote fully and tonally, then state the lesson in one line.",
          ],
        },
        {
          heading: "Figures of speech (àkànlò èdè)",
          body:
            "Àfiwé (simile, with bí/gẹ́gẹ́ bí), àkàwé (metaphor), ìrònú? no — personification (fífún... use: sísọ ohun aláìlémí bí ẹni pé ó níyè). Irony, hyperbole and rhetorical questions complete the set.",
          bullets: [
            "Àfiwé needs the comparison word; àkàwé states identity.",
            "Ìṣojú? no. Exaggeration for effect is standard across languages.",
            "Identify first, explain effect second — same as English paper.",
            "Proverbs themselves often contain the figure asked about.",
          ],
        },
      ],
      keyPoints: [
        "Meaning before memorisation.",
        "Quote fully, explain in one line.",
        "Àfiwé compares with markers; àkàwé equates.",
        "Proverbs carry figures inside.",
      ],
    },
  },
  {
    subjectSlug: "igbo",
    lesson: {
      slug: "ilu-spoken-arts",
      title: "Ilu, ejije and spoken arts",
      summary: "Great proverbs with applications plus praise and performance forms.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Proverbs that answer questions",
          body:
            "Ilu bu mmanụ e ji eri okwu — proverbs are the palm oil of speech. Master the famous ones with exact wording.",
          bullets: [
            "'Onye ajuru aju anaghi aju onwe ya' — who is rejected by others need not reject himself (self-worth).",
            "'Egbe bere ugo bere' — live and let live (tolerance).",
            "'Aka aja aja na-ebute ọnụ mmanụ mmanụ' — hard work brings reward (soiled hands, oiled mouth).",
            "Apply: name the situation, quote, state the counsel.",
          ],
        },
        {
          heading: "Performance forms",
          body:
            "Mbem (praise chants), uri (dirges/laments), abu (songs), ejije (masquerade displays) and ita (storytelling sessions) each suit occasions examiners name.",
          bullets: [
            "Mbem hails achievers at ceremonies.",
            "Uri mourns the dead with lineage praise.",
            "Abu paces work, worship and play.",
            "Mmanwu embodies ancestral presence in festivals.",
          ],
        },
      ],
      keyPoints: [
        "Ilu are palm oil — quote exactly.",
        "Situation, quote, counsel.",
        "Match form to occasion.",
        "Performance needs audience response.",
      ],
    },
  },
  {
    subjectSlug: "arabic",
    lesson: {
      slug: "present-dual-plurals",
      title: "Present tense, dual and plurals",
      summary: "Prefixes that mark the present, two-ness, and the three plural kinds.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "The present (al-muḍāriʿ)",
          body:
            "Add prefixes to the root: ya- (he), ta- (she/you), a- (I), na- (we). Suffixes mark feminine plural and dual. Negation uses lā for present, lan + subjunctive for future denial.",
          bullets: [
            "yaktub (he writes), taktub (she writes), aktub (I write), naktub (we write).",
            "yaktubāni (they-two write); yaktubūna (they write).",
            "lā yaktub (he does not write); lan yaktuba (he will not write).",
            "Five verbs keep their nūn in raf' and drop it after particles.",
          ],
        },
        {
          heading: "Dual and plurals",
          body:
            "Dual adds -āni (nominative) or -ayni; sound masculine plural -ūna/-īna; sound feminine -āt; broken plurals reshape internally (kitāb → kutub).",
          bullets: [
            "waladāni (two boys); bintāni (two girls).",
            "muslimūna (Muslims, nominative); muslimīna after prepositions.",
            "banāt (girls); mudarrisūn/mudarrisāt (teachers).",
            "Adjectives and verbs agree with each number class.",
          ],
        },
      ],
      keyPoints: [
        "Prefixes mark present-tense persons.",
        "Dual has two case forms.",
        "Three plural kinds, different agreements.",
        "Lā denies present; lan denies future.",
      ],
    },
  },
  {
    subjectSlug: "islamic-religious-studies",
    lesson: {
      slug: "sources-law-family",
      title: "Sources of law and Muslim family life",
      summary: "Qur'an, Sunnah, ijma and qiyas, then marriage, divorce and inheritance outlines.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Four sources of Shari'ah",
          body:
            "The Qur'an (primary), Sunnah (prophetic model), ijma (scholarly consensus) and qiyas (analogy) answer new questions in that order.",
          bullets: [
            "Qiyas example: wine's ban extends to later intoxicants by shared cause.",
            "Ijtihad (reasoning) operates within these bounds.",
            "Schools (Hanafi, Maliki, Shafi'i, Hanbali) differ on details, agree on essentials.",
            "Nigeria's Maliki heritage shapes northern courts.",
          ],
        },
        {
          heading: "Marriage, divorce and inheritance",
          body:
            "Nikah requires offer, acceptance, witnesses and mahr (dower). Talaq procedure protects deliberation; iddah follows. Fixed Qur'anic shares distribute estates (husband, wife, parents, children).",
          bullets: [
            "Mahr belongs to the bride, not her family.",
            "Best divorce is discouraged; triple-talaq misuse is condemned by scholars.",
            "A son generally inherits twice a daughter's share, with maintenance duties attached.",
            "Wills (wasiyyah) cover at most one-third to non-heirs.",
          ],
        },
      ],
      keyPoints: [
        "Four sources in order.",
        "Qiyas extends rulings by cause.",
        "Mahr belongs to the bride.",
        "Fixed shares distribute estates.",
      ],
    },
  },
  {
    subjectSlug: "hausa",
    lesson: {
      slug: "karin-magana-kirari",
      title: "Karin magana and kirari in use",
      summary: "Great proverbs with applications plus praise forms.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Proverbs that answer questions",
          body:
            "Quote the proverb, name the situation, state the counsel. Exact wording earns full marks.",
          bullets: [
            "'Hankuri maganin duniya' — patience cures the world's ills (endurance).",
            "'Rashin sani ya fi dare duhu' — ignorance is darker than night (seek knowledge).",
            "'Abin da ka shuka, shi za ka girba' — you reap what you sow (responsibility).",
            "Technique beats volume: two exact proverbs outscore five mangled ones.",
          ],
        },
        {
          heading: "Kirari and praise performance",
          body:
            "Kirari (praise epithets) hail persons, towns and professions; maroka perform them with drums at ceremonies.",
          bullets: [
            "Towns carry kirari (e.g. Kano's 'Tumbin giwa' — elephant's stomach, denoting vastness).",
            "Occupational kirari praise farmers, hunters, scholars.",
            "Yabo (boasting) must stay truthful to remain praise.",
            "Proverbs and kirari both reward exact quotation.",
          ],
        },
      ],
      keyPoints: [
        "Situation, quote, counsel.",
        "Exact wording earns marks.",
        "Kirari hails persons and towns.",
        "Two exact beat five mangled.",
      ],
    },
  },
  {
    subjectSlug: "music",
    lesson: {
      slug: "melody-harmony-composition",
      title: "Melody writing and simple harmony",
      summary: "Singable phrases, cadence points and arranging for young ensembles.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Writing singable melodies",
          body:
            "Stepwise motion with occasional leaps, one climax, balanced phrases (question-answer), and rhythms speech could speak.",
          bullets: [
            "Range within an octave suits young voices.",
            "Repeat and sequence motifs for unity.",
            "End phrases on chord tones for security.",
            "Set words naturally — stressed syllables on strong beats.",
          ],
        },
        {
          heading: "Simple harmony and arrangement",
          body:
            "Harmonise with primary triads (I, IV, V); double the root, omit the fifth when crowded; keep parts singable.",
          bullets: [
            "I–IV–V–I harmonises countless tunes.",
            "Avoid parallel fifths and octaves in part-writing.",
            "School arrangements: melody, simple alto, bass roots, percussion pulse.",
            "Rehearse sections slowly, then join.",
          ],
        },
      ],
      keyPoints: [
        "Stepwise, one climax, balanced phrases.",
        "I–IV–V–I harmonises most tunes.",
        "Double roots, avoid parallels.",
        "Words sit on strong beats.",
      ],
    },
  },
];
