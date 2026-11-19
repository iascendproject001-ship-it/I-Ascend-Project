import type { ExtraLesson } from "./seed-curriculum-2";

/** Seventh-wave lessons: one per subject, tight exam focus. */
export const extraLessons10: ExtraLesson[] = [
  {
    subjectSlug: "english-language",
    lesson: {
      slug: "error-identification-correction",
      title: "Error identification and sentence correction",
      summary: "Spot the faulty segment fast with a checklist of usual suspects.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "The suspect list",
          body: "In 'choose the incorrect option' items, test each segment against concord, tense, preposition, article and word-choice rules before trusting your ear.",
          bullets: [
            "Concord first: find the true subject, ignore interrupters.",
            "Tense consistency: mixed past/present without reason is wrong.",
            "Prepositions: test fixed combinations (good at, afraid of).",
            "Double negatives and redundant pairs (return back, repeat again).",
          ],
        },
        {
          heading: "Correction technique",
          body: "Read the whole sentence for meaning, test A–D in order, and pick the FIRST provable error — never the merely awkward.",
          bullets: [
            "An option is wrong only if a rule breaks, not by feel.",
            "If two seem wrong, choose the grammatical breach over style.",
            "Watch pronoun reference: every 'it/they' must point clearly.",
          ],
        },
      ],
      keyPoints: [
        "Test concord, tense, preposition, article in order.",
        "First provable error wins.",
        "Redundant pairs are always wrong.",
        "Pronouns must point clearly.",
      ],
    },
  },
  {
    subjectSlug: "mathematics",
    lesson: {
      slug: "commercial-arithmetic",
      title: "Commercial arithmetic: profit, interest and depreciation",
      summary: "Cost, selling, discount, simple/compound interest and asset decay.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Profit, discount and commission",
          body: "Profit = sales − cost; percentage profit is on COST unless stated on sales. Discount reduces marked price; commission is a percentage of sales.",
          bullets: [
            "Gain% = gain/cost × 100; loss% likewise on cost.",
            "Marked price minus discount = selling price.",
            "Agent earnings rise with sales — compute straight percentages.",
          ],
          example: {
            prompt: "A trader buys for ₦800 and sells for ₦1000. Find gain percent.",
            solution: "Gain 200 on cost 800: 25%.",
          },
        },
        {
          heading: "Interest and depreciation",
          body: "Simple interest I = PRT/100 on principal only; compound interest grows on accumulating total (A = P(1+r)ⁿ). Depreciation mirrors decay.",
          bullets: [
            "Time must match rate units (years vs months).",
            "Compound exceeds simple from year two onward.",
            "Reducing-balance depreciation shrinks yearly.",
            "Read whether rate is per annum or per month.",
          ],
        },
      ],
      keyPoints: [
        "Profit percent uses cost price.",
        "Discount works on marked price.",
        "I = PRT/100, time matched to rate.",
        "Compound grows on totals.",
      ],
    },
  },
  {
    subjectSlug: "physics",
    lesson: {
      slug: "gravitation-space",
      title: "Gravitation, satellites and space",
      summary: "Newton's law, g variations, orbits and weightlessness explained.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Newton's law and g",
          body: "Every mass attracts with F = Gm₁m₂/r². Surface g falls with altitude and depth; weightlessness is free fall, not zero gravity.",
          bullets: [
            "g ≈ 10 m/s² for school calculations.",
            "At height h, g scales by (R/(R+h))².",
            "Satellites balance gravity against required centripetal force.",
            "Geostationary orbits sit ~36,000 km over the equator, period 24 h.",
          ],
        },
        {
          heading: "Orbits and escape",
          body: "Circular orbit speed v = √(gr) near Earth (~8 km/s). Faster means higher orbit; escape velocity (~11 km/s) leaves Earth entirely.",
          bullets: [
            "Period grows with orbital radius (Kepler's third law).",
            "Astronauts float because everything falls together.",
            "Communication, weather and GPS use different orbits.",
          ],
        },
      ],
      keyPoints: [
        "F = Gm₁m₂/r² governs all.",
        "Weightlessness is free fall.",
        "Geostationary: 24 h over equator.",
        "Escape needs ~11 km/s.",
      ],
    },
  },
  {
    subjectSlug: "chemistry",
    lesson: {
      slug: "redox-oxidation-numbers",
      title: "Redox: oxidation numbers and half equations",
      summary: "Assign numbers mechanically, split reactions, balance electrons.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Assigning oxidation numbers",
          body: "Free elements 0; Group 1 +1, Group 2 +2; oxygen usually −2 (peroxides −1); hydrogen +1 with non-metals; halogens usually −1. The sum equals the charge.",
          bullets: [
            "In H₂SO₄: H +1 each, O −2 each, so S = +6.",
            "In NO₃⁻: O total −6, charge −1, so N = +5.",
            "Fractional or unusual values still follow the sum rule.",
            "Rise = oxidation (lose electrons); fall = reduction.",
          ],
          example: {
            prompt: "Find the oxidation number of Mn in KMnO₄.",
            solution: "K +1, O₄ −8, neutral: Mn = +7.",
          },
        },
        {
          heading: "Half equations and cells",
          body: "Split redox into oxidation and reduction halves, balance atoms then charge with electrons. The more positive electrode potential wins reduction.",
          bullets: [
            "OILRIG: oxidation is loss, reduction is gain.",
            "Oxidising agents get reduced; they take electrons.",
            "Zinc–copper cell: Zn oxidises, Cu²⁺ reduces, EMF ≈ 1.1 V.",
            "Rust is slow redox needing air and water together.",
          ],
        },
      ],
      keyPoints: [
        "Sum of numbers equals the charge.",
        "Rise oxidises; fall reduces.",
        "Balance atoms, then electrons.",
        "Oxidiser is itself reduced.",
      ],
    },
  },
  {
    subjectSlug: "biology",
    lesson: {
      slug: "microbes-immunity",
      title: "Microorganisms, disease and immunity",
      summary: "Germ types, transmission routes, defence lines and vaccines.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Germs and transmission",
          body: "Bacteria (single cells, some useful), viruses (reproduce only in hosts), fungi (moulds, yeast, mushrooms), protozoa (amoeba, plasmodium). Routes: air, water, food, vectors, contact, sex, mother-to-child.",
          bullets: [
            "Malaria (protozoan, mosquito), cholera/typhoid (water bacteria), TB (airborne bacteria), HIV (virus, fluids).",
            "Useful microbes: nitrogen fixers, decomposers, yoghurt/gari fermentation, antibiotics source.",
            "Match disease to agent and vector in table questions.",
          ],
        },
        {
          heading: "Defence and control",
          body:
            "Barriers (skin, mucus, stomach acid), then white cells (phagocytes engulf; lymphocytes make antibodies), then fever. Vaccines train memory safely; antibiotics kill bacteria only.",
          bullets: [
            "Active immunity (infection/vaccine) lasts; passive (maternal antibodies) fades.",
            "Antibiotics useless against viruses — a favourite trap.",
            "Control: sanitation, vaccination, quarantine, vector control, health education.",
          ],
        },
      ],
      keyPoints: [
        "Match disease, agent, vector.",
        "Barriers, cells, then fever.",
        "Vaccines train; antibiotics kill bacteria.",
        "Useful microbes also score marks.",
      ],
    },
  },
  {
    subjectSlug: "economics",
    lesson: {
      slug: "financial-markets-policy",
      title: "Financial markets and stabilisation policy",
      summary: "Money vs capital markets, CBN tools, and fiscal/monetary mixes.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Money and capital markets",
          body:
            "Money market trades short-term funds (treasury bills, commercial papers, call money); capital market trades long-term (shares, bonds). Stock exchange mobilises savings into investment.",
          bullets: [
            "Bull market rises; bear market falls.",
            "SEC regulates the capital market; CBN oversees money market.",
            "Insurance and pensions supply long-term funds.",
            "Mobile money deepens inclusion where banks are thin.",
          ],
        },
        {
          heading: "Stabilisation mixes",
          body:
            "Inflation: tighten money, cut spending, raise taxes. Recession: reverse. Exchange pressure: adjust rates, manage reserves, curb imports.",
          bullets: [
            "Fiscal (budget) moves slowly but hits directly.",
            "Monetary (CBN rates, reserves) moves fast via banks.",
            "Supply-side fixes (power, roads, skills) beat demand tricks long-term.",
            "Policy lags mean patience in evaluation answers.",
          ],
        },
      ],
      keyPoints: [
        "Money short-term; capital long-term.",
        "Bull rises, bear falls.",
        "Match tool to problem (inflation vs recession).",
        "Supply-side wins long-term.",
      ],
    },
  },
  {
    subjectSlug: "government",
    lesson: {
      slug: "electoral-process-tribunals",
      title: "Electoral process and tribunals",
      summary: "From registration to swearing-in — and what happens when results are disputed.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "The election chain",
          body:
            "Delimitation, registration (continuous voter registration), notice, primaries, campaigns, accreditation (BVAS), voting, sorting, counting, collation, declaration, swearing-in. Break any link and credibility suffers.",
          bullets: [
            "PVC plus BVAS accreditation cut multiple voting sharply.",
            "Result sheets (EC8 series) are the legal evidence of votes.",
            "IReV uploads enable publicResult viewing.",
            "Off-cycle elections (Kogi, Bayelsa, Edo, Ondo, Anambra, Ekiti, Osun) test reforms.",
          ],
        },
        {
          heading: "Petitions and tribunals",
          body:
            "Losers petition within 21 days of declaration; tribunals (and Appeal/Supreme Courts) can uphold, nullify, order reruns or declare winners. Grounds: non-compliance, disqualification, majority of lawful votes.",
          bullets: [
            "Burden of proof sits heavily on petitioners.",
            "Landmark nullifications reshaped electoral law.",
            "Timelines are strict — late petitions die.",
            "Reforms to watch: electronic transmission, diaspora voting debates.",
          ],
        },
      ],
      keyPoints: [
        "Chain every stage in order.",
        "BVAS + IReV anchor credibility answers.",
        "21 days to petition.",
        "Tribunals can rerun or declare.",
      ],
    },
  },
  {
    subjectSlug: "literature-in-english",
    lesson: {
      slug: "figures-speech-advanced",
      title: "Advanced figures: oxymoron to zeugma",
      summary: "The rarer devices that separate A1 answers from the crowd.",
      durationMinutes: 20,
      level: "Advanced",
      examWeight: "High yield",
      sections: [
        {
          heading: "Contradiction family",
          body:
            "Oxymoron (joined opposites: 'deafening silence'), paradox (true contradiction: 'less is more'), irony (opposite outcome), sarcasm (biting irony), litotes (understatement by denial: 'not unkind').",
          bullets: [
            "Test: can both halves be true at once? Paradox yes, oxymoron juxtaposes.",
            "Dramatic irony needs audience knowledge (introduced earlier).",
            "Sarcasm's tone is hostile; irony's may be gentle.",
          ],
        },
        {
          heading: "Comparison and sound family",
          body:
            "Synecdoche (part for whole: 'all hands on deck'), metonymy (associated term: 'the crown' for monarchy), transferred epithet ('sleepless night'), onomatopoeia, assonance, consonance.",
          bullets: [
            "Synecdoche vs metonymy: part-whole vs associated idea.",
            "Sound devices create mood: harsh consonants for conflict, soft vowels for calm.",
            "Name precisely; vague 'imagery' earns little.",
          ],
        },
      ],
      keyPoints: [
        "Define before applying.",
        "Oxymoron juxtaposes; paradox resolves true.",
        "Part-whole is synecdoche.",
        "Sound carries mood.",
      ],
    },
  },
  {
    subjectSlug: "christian-religious-studies",
    lesson: {
      slug: "united-divided-kingdom",
      title: "United monarchy, division and exile",
      summary: "Saul to Solomon to split kingdoms — causes, kings and prophets.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Saul, David, Solomon",
          body:
            "Saul (first king, disobedience at Gilgal, rejected), David (Goliath, Jerusalem capital, covenant of dynasty, Bathsheba fall and repentance), Solomon (wisdom, temple, wealth — then idolatry through foreign wives).",
          bullets: [
            "Disobedience cost Saul the kingdom (1 Samuel 15).",
            "David's repentance (Psalm 51) models restoration.",
            "Solomon's 1 Kings 3 request pleased God.",
            "Heavy levies under Solomon seeded revolt.",
          ],
        },
        {
          heading: "Division, exile, return",
          body:
            "Rehoboam's harsh answer split ten tribes (Jeroboam/Israel) from Judah; Ahab/Jezebel vs Elijah; Assyria took Israel (722 BC), Babylon took Judah (586 BC); Cyrus decreed return; Ezra/Nehemiah rebuilt.",
          bullets: [
            "Elijah on Carmel: fire decides between God and Baal.",
            "Exile taught monotheism firmly.",
            "Nehemiah rebuilt walls amid opposition.",
            "Lessons: leadership justice, repentance, hope.",
          ],
        },
      ],
      keyPoints: [
        "Disobedience dethroned Saul.",
        "Repentance restored David.",
        "Harsh rule split the kingdom.",
        "Exile refined, return rebuilt.",
      ],
    },
  },
  {
    subjectSlug: "commerce",
    lesson: {
      slug: "growth-combinations",
      title: "Business growth: mergers, acquisitions and holding",
      summary: "Why firms combine, how they do it, and what changes.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Forms of combination",
          body:
            "Merger (equals fuse), acquisition/takeover (buyer absorbs), holding company (controls subsidiaries via shares), cartel (competitors fix output/prices), consortium (joint project).",
          bullets: [
            "Horizontal (same stage), vertical (supply chain), conglomerate (unrelated).",
            "Motives: scale economies, market power, survival, diversification.",
            "Dangers: monopoly abuse, job losses, culture clash.",
          ],
        },
        {
          heading: "Holding companies and groups",
          body:
            "A holding company controls subsidiaries (51%+ or de facto); group accounts consolidate. Minority interests get separate disclosure.",
          bullets: [
            "Control without full ownership multiplies reach.",
            "Regulators watch anti-competitive mergers (FCCPC).",
            "De-mergers refocus sprawling groups.",
          ],
        },
      ],
      keyPoints: [
        "Name the combination type first.",
        "Horizontal, vertical, conglomerate.",
        "Scale and power motivate; abuse threatens.",
        "Holding controls via shares.",
      ],
    },
  },
  {
    subjectSlug: "financial-accounting",
    lesson: {
      slug: "payroll-paye-pension",
      title: "Payroll, PAYE tax and pensions",
      summary: "Gross to net pay, tax bands logic, and contributory pensions.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "From gross to net",
          body:
            "Gross pay (basic + allowances + overtime + bonuses) minus deductions (PAYE tax, pension, NHIS/NHF, union dues, loans) equals net pay. Payslips must show each line.",
          bullets: [
            "Allowances (housing, transport) may be taxed differently from basics.",
            "Statutory deductions precede voluntary ones.",
            "Net pay is what enters the bank.",
            "Payroll fraud (ghost workers) is checked by verification.",
          ],
        },
        {
          heading: "PAYE and pensions",
          body:
            "Pay-As-You-Earn deducts income tax at source using bands and reliefs; employers remit to states. Contributory pensions split employer/employee percentages into RSAs.",
          bullets: [
            "Progressive bands tax higher slices harder.",
            "Reliefs (consolidated allowance) reduce taxable income.",
            "Pension contributions are remitted monthly, with penalties for default.",
            "Gratuity rewards long service at exit.",
          ],
        },
      ],
      keyPoints: [
        "Gross minus deductions equals net.",
        "Statutory before voluntary.",
        "Progressive bands, monthly remittance.",
        "Verify payrolls against ghost workers.",
      ],
    },
  },
  {
    subjectSlug: "geography",
    lesson: {
      slug: "tourism-nigeria",
      title: "Tourism in Nigeria: sites, value and challenges",
      summary: "Where tourists go, what it earns, and what holds it back.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Sites by zone",
          body:
            "Yankari (wildlife), Obudu (mountain resort), Osun-Osogbo grove (UNESCO), Sukur landscape (UNESCO), Olumo Rock, Zuma Rock, Awhum falls, Argungu fishing festival, Kano dye pits, Badagry slave relics.",
          bullets: [
            "Match site to state and attraction type.",
            "UNESCO listings signal world-class value.",
            "Festivals (Eyo, Durbar, Calabar Carnival) drive seasonal peaks.",
          ],
        },
        {
          heading: "Value and constraints",
          body:
            "Tourism earns forex, jobs and infrastructure — when security, roads, power, hospitality standards and marketing align. Insecurity currently caps potential.",
          bullets: [
            "Multiplier effects spread tourist spending widely.",
            "Ecotourism protects while profiting (Cross River parks).",
            "Constraints: insecurity, poor access, weak maintenance, visa friction.",
            "Answers should balance promise with problems.",
          ],
        },
      ],
      keyPoints: [
        "Site–state–type triples score.",
        "UNESCO status marks value.",
        "Multiplier spreads earnings.",
        "Balance promise with problems.",
      ],
    },
  },
  {
    subjectSlug: "agricultural-science",
    lesson: {
      slug: "climate-seasons-farming",
      title: "Climate, seasons and farming calendars",
      summary: "Rainfall regimes, harmattan effects and planning the farming year.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Nigeria's climatic belts",
          body:
            "Rainforest south (8–12 wet months) through Guinea savanna to Sudan/Sahel (3–5 months). Onset moves northward March–June; cessation retreats September–October. The August break splits southern rains.",
          bullets: [
            "Plant with reliable onset, not first rains.",
            "Harmattan (dry dust, cold nights) suits harvesting and storage.",
            "Drought-tolerant millet/sorghum fit the far north.",
            "Floodplains (fadama) farm dry-season vegetables.",
          ],
        },
        {
          heading: "Calendar decisions",
          body:
            "Land prep before rains, planting at onset, weeding at critical competition windows, harvest at physiological maturity. NiMet seasonal predictions now guide dates.",
          bullets: [
            "Early planting escapes peak pests; late planting risks drought.",
            "Stagger varieties to spread risk.",
            "Store against lean seasons, not just harvest gluts.",
          ],
        },
      ],
      keyPoints: [
        "Onset moves north with months.",
        "Plant on reliable rains.",
        "Fadama farms the dry season.",
        "Follow seasonal predictions.",
      ],
    },
  },
  {
    subjectSlug: "further-mathematics",
    lesson: {
      slug: "complex-arithmetic",
      title: "Complex numbers: arithmetic, modulus and conjugates",
      summary: "Add, multiply and divide in a+bi form with confidence.",
      durationMinutes: 22,
      level: "Advanced",
      examWeight: "High yield",
      sections: [
        {
          heading: "Four operations",
          body:
            "Add/subtract real with real, imaginary with imaginary. Multiply with FOIL, replacing i² by −1. Divide by multiplying top and bottom by the conjugate.",
          bullets: [
            "(3+2i)+(1+4i) = 4+6i.",
            "(2+i)(1−2i) = 2−4i+i−2i² = 4−3i.",
            "Conjugate of a+bi is a−bi; product is a²+b² (real).",
          ],
          example: {
            prompt: "Simplify (1+i)/(1−i).",
            solution: "Multiply by (1+i)/(1+i): (1+i)²/2 = 2i/2 = i.",
          },
        },
        {
          heading: "Modulus and geometry",
          body:
            "|a+bi| = √(a²+b²) is distance from origin. Conjugates mirror across the real axis. Loci like |z|=r draw circles.",
          bullets: [
            "|3+4i| = 5.",
            "|z₁z₂| = |z₁||z₂| speeds checks.",
            "Argand diagrams plot real vs imaginary axes.",
          ],
        },
      ],
      keyPoints: [
        "Real with real, imaginary with imaginary.",
        "i² becomes −1 immediately.",
        "Divide via the conjugate.",
        "Modulus is distance from origin.",
      ],
    },
  },
  {
    subjectSlug: "computer-studies",
    lesson: {
      slug: "maintenance-troubleshooting",
      title: "System maintenance and troubleshooting",
      summary: "Keep computers healthy and diagnose faults methodically.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Preventive habits",
          body:
            "Update systems, scan regularly, back up 3-2-1 (three copies, two media, one offsite), clean dust, manage storage, uninstall junk.",
          bullets: [
            "Backups before major changes, always.",
            "Genuine software updates patch holes.",
            "Surge protectors guard harmattan-season spikes.",
            "Document passwords securely, never plainly.",
          ],
        },
        {
          heading: "Diagnose like a technician",
          body:
            "Observe, reproduce, isolate (hardware vs software), test cheapest fixes first, escalate with notes.",
          bullets: [
            "No power: cable, socket, PSU order.",
            "Slow: startup apps, disk space, malware scan.",
            "No internet: cables, router restart, ISP check.",
            "Record fixes for next time.",
          ],
        },
      ],
      keyPoints: [
        "3-2-1 backups always.",
        "Cheapest fix first.",
        "Isolate hardware vs software.",
        "Document every fix.",
      ],
    },
  },
  {
    subjectSlug: "history",
    lesson: {
      slug: "women-in-history",
      title: "Women in Nigerian history",
      summary: "Market queens, activists and firsts — increasingly examined.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Resistance and rights",
          body:
            "Aba Women's Revolt 1929 (taxation, warrant chiefs), Abeokuta Women's Union under Funmilayo Ransome-Kuti (1940s levies), Margaret Ekpo (politics, markets), Gambo Sawaba (northern women's mobilisation).",
          bullets: [
            "Aba tactics: sit-ins, songs, symbolic nudity pressure.",
            "Ransome-Kuti linked market women to nationalist politics.",
            "Ekpo won elections and championed traders.",
            "Sawaba defied detention repeatedly for talakawa women.",
          ],
        },
        {
          heading: "Firsts and institutions",
          body:
            "Verified firsts: Flora Nwapa (first African woman novelist in English, Efuru 1966), first female professor Adetowun Ogunsheye, pioneering female pilots, ministers and judges.",
          bullets: [
            "Match person to specific first.",
            "Women's wings carried party grassroots.",
            "Market associations remain political forces.",
          ],
        },
      ],
      keyPoints: [
        "Aba 1929 and Abeokuta 1940s anchor answers.",
        "Match person to concrete first.",
        "Markets doubled as movements.",
        "Specifics beat general praise.",
      ],
    },
  },
  {
    subjectSlug: "home-economics",
    lesson: {
      slug: "marriage-lifecycle",
      title: "Marriage systems and the family lifecycle",
      summary: "Courtship to ageing — stages, needs and adjustments.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Marriage forms and choices",
          body:
            "Monogamy, polygyny, and (rare/legal elsewhere) polyandry; customary, Islamic, church and court marriages each carry requirements. Mate choice weighs values, health, genotype, faith and readiness over infatuation.",
          bullets: [
            "Genotype compatibility (AA/AS/SS) prevents sickle-cell tragedies — test before vows.",
            "Bride price rites differ honestly by culture.",
            "Age, education and income gaps need discussion, not assumptions.",
          ],
        },
        {
          heading: "Lifecycle stages",
          body:
            "Beginning, childbearing, school-age, teenage, launching, empty nest, ageing. Each stage shifts money, space, attention and conflict sources.",
          bullets: [
            "Teenage stage strains communication most.",
            "Launching children test finances and emotions.",
            "Ageing needs care plans and wills.",
            "Adjust roles deliberately each stage.",
          ],
        },
      ],
      keyPoints: [
        "Genotype testing precedes vows.",
        "Rites differ by culture.",
        "Stages shift needs predictably.",
        "Plan care and wills early.",
      ],
    },
  },
  {
    subjectSlug: "fine-art",
    lesson: {
      slug: "design-principles",
      title: "Design principles: balance, contrast, emphasis",
      summary: "The grammar behind every strong composition.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Seven working principles",
          body:
            "Balance (symmetrical/formal vs asymmetrical), contrast (light/dark, big/small), emphasis (focal point), rhythm (repeated motifs), proportion (part-to-whole), unity (coherence), harmony (agreement).",
          bullets: [
            "Focal points pull eyes via contrast, isolation or detail.",
            "Rule of thirds places interest off-centre.",
            "Repetition with variation keeps rhythm alive.",
            "White space is active, not empty.",
          ],
        },
        {
          heading: "Applying under exam conditions",
          body:
            "Read the brief for function (poster? textile?), audience and size; thumbnail three options; develop one; finish cleanly with labels where required.",
          bullets: [
            "Borders contain; bleeds energise.",
            "Limit palettes for unity (3 hues + neutrals).",
            "Lettering must stay legible at viewing distance.",
            "Mount and present neatly — presentation scores.",
          ],
        },
      ],
      keyPoints: [
        "Contrast creates emphasis.",
        "Thirds place interest.",
        "Repeat with variation.",
        "Present work professionally.",
      ],
    },
  },
  {
    subjectSlug: "french",
    lesson: {
      slug: "pronominal-negation",
      title: "Pronominal verbs and advanced negation",
      summary: "Se lever properly and deny with ne...jamais/plus/rien/personne.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Reflexive routines",
          body:
            "Se lever, se laver, s'habiller, se coucher describe daily routines. Reflexive pronoun matches the subject (me/te/se/nous/vous/se); passé composé uses être with agreement.",
          bullets: [
            "Je me lève à six heures.",
            "Elle s'est lavée (agreement with preceding reflexive).",
            "S'appeler introduces (Je m'appelle...).",
            "Reciprocals: ils se parlent (each other).",
          ],
          example: {
            prompt: "Put in passé composé: 'Tu te couches tôt.'",
            solution: "'Tu t'es couché(e) tôt.' — être auxiliary with agreement.",
          },
        },
        {
          heading: "Beyond ne...pas",
          body:
            "Ne...jamais (never), ne...plus (no longer), ne...rien (nothing), ne...personne (nobody), ne...que (only).",
          bullets: [
            "Je ne fume jamais.",
            "Il n'y a personne ici.",
            "Rien drops 'pas': Je ne vois rien.",
            "Que = only: Je n'ai que dix nairas.",
          ],
        },
      ],
      keyPoints: [
        "Reflexives match subjects.",
        "Passé composé uses être + agreement.",
        "Jamais/plus/rien/personne replace pas.",
        "Routines are the context.",
      ],
    },
  },
  {
    subjectSlug: "yoruba",
    lesson: {
      slug: "body-parts",
      title: "Apá ara (parts of the body)",
      summary: "Head to toe vocabulary with tone accuracy.",
      durationMinutes: 18,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Orí dé ẹsẹ̀ (head to foot)",
          body:
            "Orí (head), irun (hair), ojú (eye/face), etí (ear), imú (nose), ẹnu (mouth), eyín (teeth), ahọ́n (tongue), ọrùn (neck), ejìká (shoulder), ọwọ́ (hand/arm), ìka (finger), àyà (chest), ikùn (stomach), ẹ̀yìn (back), ìdí (buttocks), ẹsẹ̀ (leg/foot), orúnkún (knee).",
          bullets: [
            "Tones decide meaning — drill with marks.",
            "Inú covers inside/belly/mind by context.",
            "Ẹ̀jẹ̀ (blood) and egungun (bone) complete injuries talk.",
            "Riddles love body parts ('I have teeth but cannot bite' — comb?).",
          ],
        },
        {
          heading: "Using parts in speech",
          body:
            "Body idioms carry questions: 'ó ní orí' (he has sense), 'ojú rẹ̀ dára' (kind-faced), 'ọwọ́ rẹ̀ dọ̀tí' (thief, lit. dirty hand).",
          bullets: [
            "Learn two idioms per part.",
            "Health complaints need precise parts.",
            "Praise and insult both borrow anatomy.",
          ],
        },
      ],
      keyPoints: [
        "Head-to-foot order aids recall.",
        "Tones non-negotiable.",
        "Idioms borrow anatomy.",
        "Health needs precision.",
      ],
    },
  },
  {
    subjectSlug: "igbo",
    lesson: {
      slug: "body-parts",
      title: "Akụkụ ahụ (parts of the body)",
      summary: "Head-to-toe vocabulary with tone care.",
      durationMinutes: 18,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Site n'isi ruo n'ụkwụ",
          body:
            "Isi (head), ntutu (hair), anya (eye), ntị (ear), imi (nose), ọnụ (mouth), eze (teeth), ire (tongue), olu (neck), ubu (shoulder), aka (hand), mkpịsị aka (finger), obi (chest/heart), afọ (stomach), azụ (back), ụkwụ (leg/foot), ikpere (knee).",
          bullets: [
            "Downstep marks where required.",
            "Ọbara (blood), ọkpụkpụ (bone) for injuries.",
            "Proverbs use body parts constantly.",
          ],
        },
        {
          heading: "Idioms and health talk",
          body:
            "Obi ọcha (clean heart = innocence), isi ike (hard head = stubbornness), aka aja (generous hand). Health descriptions need exact parts.",
          bullets: [
            "Two idioms per part minimum.",
            "Symptoms described part-first.",
          ],
        },
      ],
      keyPoints: [
        "Order head to foot.",
        "Mark tones/downsteps.",
        "Idioms use anatomy.",
        "Health needs exactness.",
      ],
    },
  },
  {
    subjectSlug: "arabic",
    lesson: {
      slug: "body-parts",
      title: "Aʿḍāʾ al-jism (parts of the body)",
      summary: "Head-to-toe vocabulary with gender notes.",
      durationMinutes: 18,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Head to foot",
          body:
            "Ra's (head), sha'r (hair), 'ayn (eye), udhun (ear), anf (nose), fam (mouth), sinn (tooth), lisān (tongue), 'unuq (neck), katif (shoulder), yad (hand), iṣba' (finger), ṣadr (chest), baṭn (belly), ẓahr (back), rijl (leg/foot), rukba (knee).",
          bullets: [
            "Paired parts are usually feminine (yad, 'ayn, udhun).",
            "Dam (blood), 'aẓm (bone) for injuries.",
            "Dual forms describe pairs naturally (yadāni).",
          ],
        },
        {
          heading: "Idioms and clinic talk",
          body:
            "Qalb (heart) carries feelings; wajh (face) carries honour; yad (hand) carries power and giving.",
          bullets: [
            "Learn two idioms per part.",
            "Symptoms: use 'indī alam fī...' (I have pain in...).",
          ],
        },
      ],
      keyPoints: [
        "Head-to-foot order.",
        "Pairs usually feminine.",
        "Duals describe pairs.",
        "Idioms borrow anatomy.",
      ],
    },
  },
  {
    subjectSlug: "islamic-religious-studies",
    lesson: {
      slug: "akhlaq-character",
      title: "Akhlaq: truthfulness, promises and backbiting",
      summary: "Character as worship — honesty, amanah and guarding tongues.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Truthfulness and trust",
          body:
            "The Prophet was Al-Amīn (the Trustworthy) before prophethood. Sidq (truthfulness) leads to righteousness; kadhib (lying) to ruin. Amanah covers deposits, offices, exams and secrets.",
          bullets: [
            "Fulfil promises — breaking them marks hypocrisy.",
            "Backbiting (ghibah) equals eating a brother's flesh (Qur'an 49:12).",
            "Exam malpractice violates amanah — say so plainly.",
            "Restitution precedes repentance where rights were taken.",
          ],
        },
        {
          heading: "Kinship and society",
          body:
            "Silat ar-raḥim (kin ties) draws provision; neighbours hold rights; orphans and travellers claim community care.",
          bullets: [
            "Parental obedience follows only Allah's obedience.",
            "Community projects are ongoing charity.",
            "Reconciliation outranks victory in disputes.",
          ],
        },
      ],
      keyPoints: [
        "Al-Amīn models all dealings.",
        "Promises, exams, secrets are amanah.",
        "Kin ties draw blessing.",
        "Reconcile rather than win.",
      ],
    },
  },
  {
    subjectSlug: "hausa",
    lesson: {
      slug: "body-parts",
      title: "Sassan jiki (parts of the body)",
      summary: "Head-to-toe vocabulary with tone care.",
      durationMinutes: 18,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Daga kai zuwa ƙafa",
          body:
            "Kai (head), gashi (hair), ido (eye), kunne (ear), hanci (nose), baki (mouth), hakori (tooth), harshe (tongue), wuya (neck), kafada (shoulder), hannu (hand), yatsa (finger), kirji (chest), ciki (belly), baya (back), kafa (leg/foot), gwiwa (knee).",
          bullets: [
            "Mark high, low and falling tones.",
            "Jini (blood), kashi (bone) for injuries.",
            "Karin magana constantly borrows anatomy.",
          ],
        },
        {
          heading: "Idioms and health talk",
          body:
            "'Farin ciki' (joy, lit. white stomach) and 'bakin ciki' (sadness, black stomach) show how feelings live in the belly. Health needs exact parts.",
          bullets: [
            "Two idioms per part minimum.",
            "Describe symptoms part-first.",
          ],
        },
      ],
      keyPoints: [
        "Head-to-foot order.",
        "Three tones marked.",
        "Idioms use anatomy.",
        "Health needs exactness.",
      ],
    },
  },
  {
    subjectSlug: "music",
    lesson: {
      slug: "nigerian-composers",
      title: "Nigerian art-music composers",
      summary: "Sowande, Bankole, Euba and the classical tradition at home.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Pioneers",
          body:
            "Fela Sowande (organ works, 'African Suite' blending Yoruba melodies with European forms), Ayo Bankole (choral and organ music, died 1976), Akin Euba (African pianism, operas).",
          bullets: [
            "Sowande: father of Nigerian art music.",
            "Bankole: master of choir and organ.",
            "Euba: theory of African pianism.",
          ],
        },
        {
          heading: "Tradition today",
          body:
            "University music departments, church choirs, orchestras (Lagos, Abuja) and festivals keep art music alive beside popular genres.",
          bullets: [
            "Match composer to work and style.",
            "Church music remains the largest employer.",
            "Study scores alongside recordings.",
          ],
        },
      ],
      keyPoints: [
        "Sowande fathers art music.",
        "Bankole masters choir/organ.",
        "Euba theorises pianism.",
        "Match composer to work.",
      ],
    },
  },
];
