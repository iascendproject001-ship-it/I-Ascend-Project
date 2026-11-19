import type { ExtraLesson } from "./seed-curriculum-2";

/** Third-wave lessons: humanities, languages, arts and vocational. */
export const extraLessons4: ExtraLesson[] = [
  {
    subjectSlug: "english-language",
    lesson: {
      slug: "structure-voice-speech-tags",
      title: "Structure II: voice, speech, tags and conditionals",
      summary: "The four transformation rules that convert directly into UTME marks.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "Very high yield",
      sections: [
        {
          heading: "Active–passive across tenses",
          body:
            "Move the object to the front, choose the matching 'be' verb, and use the past participle. Keep the tense identical.",
          bullets: [
            "Present: 'She writes letters' → 'Letters are written by her.'",
            "Past: 'They built it' → 'It was built by them.'",
            "Perfect: 'He has done it' → 'It has been done by him.'",
            "Modal: 'We must finish it' → 'It must be finished.'",
            "Intransitive verbs (sleep, arrive) have no passive.",
          ],
          example: {
            prompt: "Passivise: 'The teacher will mark the scripts.'",
            solution: "'The scripts will be marked by the teacher.' Modal + be + participle.",
          },
        },
        {
          heading: "Speech, tags and conditionals",
          body:
            "Three transformation families with mechanical rules. Learn the trigger, apply the shift.",
          bullets: [
            "Reported speech: backshift tenses (will→would, am→was), adjust pronouns, questions use if/whether or the wh-word without inversion.",
            "Question tags: opposite polarity, same auxiliary; 'Let's…' takes 'shall we?'; 'I am' takes 'aren't I?'.",
            "Conditionals: zero (facts), first (real future), second (unreal present: were/would), third (past unreal: had done/would have done).",
            "Articles: 'a/an' first mention, 'the' known item; silent-h words take 'an'.",
          ],
        },
      ],
      keyPoints: [
        "Passive keeps the tense: be-verb + participle.",
        "Backshift and de-invert reported questions.",
        "'Let's…' → 'shall we?'",
        "Third conditional: had done → would have done.",
      ],
    },
  },
  {
    subjectSlug: "economics",
    lesson: {
      slug: "market-structures-systems",
      title: "Market structures, business units and economic systems",
      summary: "From perfect competition to monopoly, and who owns what in each system.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Four market structures",
          body:
            "Classify by number of sellers, product sameness, entry barriers and price control. Nearly every question is a matching task.",
          bullets: [
            "Perfect competition: many sellers, identical goods, no control (village pepper market).",
            "Monopoly: one seller, no substitutes, price maker (historic NEPA/PHCN supply).",
            "Monopolistic competition: many sellers, differentiated goods (sachet water brands).",
            "Oligopoly: few large sellers watching each other (banks, telecoms, cement).",
          ],
        },
        {
          heading: "Ownership and systems",
          body:
            "Business units scale from one person to the public; economic systems scale from market to state control.",
          bullets: [
            "Sole trader → partnership → private company → public company → public corporation.",
            "Capitalism: private ownership, profit motive, competition. Socialism: state ownership, welfare motive.",
            "Mixed economy (Nigeria): private sector plus state participation and regulation.",
            "Privatisation moves assets to private hands; nationalisation reverses it.",
          ],
        },
      ],
      keyPoints: [
        "Sellers, sameness, barriers, price control — classify by these.",
        "Oligopoly: few sellers, mutual watching.",
        "Nigeria runs a mixed economy.",
        "Scale business units by liability and capital.",
      ],
    },
  },
  {
    subjectSlug: "economics",
    lesson: {
      slug: "sectors-development-population",
      title: "Sectors, development and population",
      summary: "Where Nigerians work, how development is measured, and what population structure implies.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Sectors of the economy",
          body:
            "Primary extracts, secondary transforms, tertiary serves. Development shifts workers from primary toward tertiary without abandoning food security.",
          bullets: [
            "Nigeria: oil dominates exports; agriculture employs most people; services (trade, telecoms, banking) grow fastest.",
            "Industrialisation needs power, capital, skills, markets and policy stability.",
            "Small-scale industries suit local materials and employment; large plants need infrastructure.",
            "Diversification reduces oil-price vulnerability.",
          ],
        },
        {
          heading: "Development and population",
          body:
            "Development means rising welfare, not just GDP. Population structure (age pyramid) predicts school, job and pension pressure.",
          bullets: [
            "Indicators: per capita income, literacy, life expectancy, HDI.",
            "Dependency ratio = (0–14 plus 65+) ÷ (15–64). Nigeria's is high.",
            "A youthful pyramid demands classrooms and jobs; ageing demands pensions.",
            "Brain drain exports trained workers; remittances partially compensate.",
          ],
        },
      ],
      keyPoints: [
        "Primary → secondary → tertiary is the development path.",
        "Diversification hedges oil dependence.",
        "Dependency ratio reads the pyramid.",
        "Welfare, not GDP alone, defines development.",
      ],
    },
  },
  {
    subjectSlug: "government",
    lesson: {
      slug: "parties-pressure-groups",
      title: "Political parties and pressure groups",
      summary: "Party organisation across Nigeria's republics and how organised interests press power.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Parties and party systems",
          body:
            "Parties contest to govern; their organisation (manifesto, membership, congresses, primaries) is examinable, as are Nigeria's parties by era.",
          bullets: [
            "First Republic: NCNC, AG, NPC (plus NEPU, UMBC). Second: NPN, UPN, NPP, PRP, GNPP.",
            "Aborted Third: SDP, NRC. Fourth Republic: PDP, ANPP/ACN/CPC→APC, LP and others.",
            "Functions: recruit candidates, aggregate interests, educate voters, form government or opposition.",
            "One-party risks dictatorship; two-party clarifies choice; multi-party represents diversity but fragments.",
          ],
        },
        {
          heading: "Pressure groups and civil society",
          body:
            "Groups like NLC, NBA, ASUU, NUJ and student unions influence without governing, through strikes, lobbying, litigation, publicity and protest.",
          bullets: [
            "Methods ranked by force: persuasion → publicity → lobbying → demonstration → strike → boycott.",
            "The NLC's general strikes have reversed fuel-price policies.",
            "ASUU strikes centre on university funding and autonomy.",
            "Civil society defends rights where opposition parties are weak.",
          ],
        },
      ],
      keyPoints: [
        "Parties seek power; pressure groups seek influence.",
        "Know one party set per republic.",
        "Methods escalate from persuasion to strike.",
        "NLC, NBA, ASUU are classic examples.",
      ],
    },
  },
  {
    subjectSlug: "government",
    lesson: {
      slug: "civil-service-local-government",
      title: "Civil service and local government",
      summary: "How the bureaucracy works, why it creaks, and the third tier's promise and problems.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "The civil service",
          body:
            "The permanent administration behind transient governments. Its doctrines — permanence, neutrality, anonymity, hierarchy, merit — are both its strength and, when corrupted, its disease.",
          bullets: [
            "Functions: advise ministers, implement policy, keep records, collect revenue, regulate.",
            "Problems: corruption, red tape, ghost workers, politicisation, poor pay and training.",
            "Reforms: Udoji (1974, pay and management), Ayida, Oronsaye report on agencies.",
            "Ministers come and go; permanent secretaries remain.",
          ],
        },
        {
          heading: "Local government",
          body:
            "The 1976 reform created a uniform third tier meant to bring government to the grassroots. Functions span markets, primary health, feeder roads, sanitation and local rates.",
          bullets: [
            "774 local government areas across Nigeria.",
            "Funded mainly by federation allocation plus internally generated revenue.",
            "Problems: state interference (joint accounts), corruption, weak capacity, unclear autonomy.",
            "Financial autonomy debates dominate current questions.",
          ],
        },
      ],
      keyPoints: [
        "Permanence, neutrality, anonymity, hierarchy, merit.",
        "1976 reform unified local government.",
        "774 LGAs; federation allocation funds them.",
        "Joint-account politics is the autonomy question.",
      ],
    },
  },
  {
    subjectSlug: "literature-in-english",
    lesson: {
      slug: "unseen-and-figures",
      title: "Unseen passages and the figures of speech",
      summary: "A four-step unseen method plus a twelve-device rapid reference.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Attacking unseen poetry and prose",
          body:
            "Read twice: first for literal sense, second with the questions beside you. Paraphrase each stanza in the margin before choosing options.",
          bullets: [
            "Step 1: speaker and situation — who talks, to whom, where.",
            "Step 2: subject — what happens, in one sentence.",
            "Step 3: devices — name two and state each effect.",
            "Step 4: tone and theme — the feeling and the idea.",
          ],
        },
        {
          heading: "Twelve devices, one line each",
          body:
            "Simile (like/as), metaphor (direct), personification (human traits), hyperbole (excess), litotes (understatement), irony (opposite), sarcasm (biting irony), oxymoron (joined opposites: 'deafening silence'), paradox (true contradiction), onomatopoeia (sound words), alliteration (initial consonants), repetition/anaphora (openings repeated).",
          bullets: [
            "Test each candidate device against its definition, not its vibe.",
            "Effect words that earn marks: emphasises, contrasts, musical, comic, solemn, vivid.",
            "One device well-explained beats three named.",
          ],
        },
      ],
      keyPoints: [
        "Paraphrase before choosing.",
        "Speaker, subject, devices, tone.",
        "Definition-test every device option.",
        "Always attach an effect.",
      ],
    },
  },
  {
    subjectSlug: "christian-religious-studies",
    lesson: {
      slug: "epistles-and-revelation",
      title: "Epistles: faith, works, love and hope",
      summary: "Paul's great themes, James on works, and the hope of Revelation.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Paul's core teachings",
          body:
            "Romans: justification by faith, all have sinned, grace through Christ. 1 Corinthians 13: love surpasses gifts. 1 Thessalonians: the second coming and holy living.",
          bullets: [
            "Justification by faith, not works of the law (Romans 3–5).",
            "Love chapter: patient, kind, enduring (1 Corinthians 13).",
            "Civil authority is ordained by God (Romans 13) — obey except against conscience.",
            "Fruit of the Spirit vs works of the flesh (Galatians 5).",
          ],
        },
        {
          heading: "James, Peter, John and Revelation",
          body:
            "James: faith without works is dead; control the tongue; care for widows and orphans. Peter: holy living under pressure. John: God is love. Hebrews 11: the faith hall of fame. Revelation: persecuted churches, final victory.",
          bullets: [
            "Faith–works is complement, not contradiction: living faith acts.",
            "1 Peter comforts suffering believers with living hope.",
            "Revelation's letters (chapters 2–3) commend and correct seven churches.",
            "New heaven and new earth close the canon with hope.",
          ],
        },
      ],
      keyPoints: [
        "Romans: justification by faith.",
        "1 Corinthians 13 defines love.",
        "James: living faith works.",
        "Revelation ends in hope, not fear.",
      ],
    },
  },
  {
    subjectSlug: "commerce",
    lesson: {
      slug: "foreign-trade-blocs",
      title: "Foreign trade, payments and trade blocs",
      summary: "Why nations trade, how they pay, and the blocs and barriers shaping it.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Why nations trade and how they settle",
          body:
            "Different endowments and costs make exchange profitable (comparative advantage). Settlement uses foreign exchange through banks, with documents (bill of lading, bill of exchange, letter of credit) managing trust across distance.",
          bullets: [
            "Visible trade (goods) vs invisible trade (services, shipping, insurance).",
            "Balance of trade (goods) vs balance of payments (everything).",
            "Letter of credit: the importer's bank guarantees payment.",
            "Exchange rate movements reprice every import and export.",
          ],
          example: {
            prompt: "Exports ₦800bn, imports ₦650bn. Find the balance of trade.",
            solution: "₦800bn − ₦650bn = ₦150bn favourable.",
          },
        },
        {
          heading: "Barriers and blocs",
          body:
            "Tariffs, quotas, embargoes and subsidies protect home industries but raise prices; blocs remove them among members.",
          bullets: [
            "ECOWAS: free movement, common market aims, ECOMOG interventions.",
            "AfCFTA: continental free trade — largest by membership.",
            "Dumping (below-cost exports) triggers anti-dumping duties.",
            "Nigeria's oil dependence makes diversification the standing exam question.",
          ],
        },
      ],
      keyPoints: [
        "Comparative advantage explains trade.",
        "Trade vs payments balances differ.",
        "Letter of credit bridges trust.",
        "Barriers protect but cost consumers.",
      ],
    },
  },
  {
    subjectSlug: "financial-accounting",
    lesson: {
      slug: "partnership-company-accounts",
      title: "Partnership and company accounts",
      summary: "Appropriation, current accounts, shares, debentures and dividends.",
      durationMinutes: 26,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Sharing partnership profit",
          body:
            "Net profit first serves the agreement: interest on capital, partners' salaries, interest on drawings (charged), then the residue in profit-sharing ratio. Current accounts track each partner's running balance.",
          bullets: [
            "Interest on capital rewards investment; interest on drawings punishes withdrawals.",
            "Without agreement: no salaries, no interest, equal sharing.",
            "Fluctuating capital absorbs everything; fixed capital uses current accounts.",
            "Goodwill arises on admission/retirement of a partner.",
          ],
          example: {
            prompt: "A and B share 2:1. Profit ₦90,000 after A's salary ₦6,000. Total to A?",
            solution: "Salary 6,000 + 2/3 × 84,000 = 6,000 + 56,000 = ₦62,000.",
          },
        },
        {
          heading: "Company finance basics",
          body:
            "Companies raise capital through shares (ordinary carry votes and variable dividends; preference carry fixed dividends) and debentures (loans with fixed interest, paid before dividends).",
          bullets: [
            "Authorised vs issued vs called-up vs paid-up capital.",
            "Dividends come from profit after tax; debenture interest is an expense.",
            "Bonus issues capitalise reserves; rights issues raise fresh cash.",
            "Published accounts serve shareholders, lenders and regulators.",
          ],
        },
      ],
      keyPoints: [
        "Appropriate first, share the residue.",
        "No agreement: equal shares, no extras.",
        "Debenture interest precedes dividends.",
        "Ordinary shares vote; preference shares fix dividends.",
      ],
    },
  },
  {
    subjectSlug: "geography",
    lesson: {
      slug: "map-interpretation-fieldwork",
      title: "Map interpretation and fieldwork",
      summary: "Reading relief, drainage and settlement off the sheet, plus fieldwork method.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Interpreting the topographical sheet",
          body:
            "Describe relief, drainage, settlement, transport and land use in that order. Every claim needs map evidence: a contour value, a grid reference, a named feature.",
          bullets: [
            "Relief: highlands vs lowlands, slope from contour spacing, spot heights and trigonometrical stations.",
            "Drainage patterns: dendritic (uniform rock), trellis (folded/faulted), radial (domes/volcanoes), deranged (glaciated).",
            "Settlement: nucleated at junctions and water points; dispersed on plantations; linear along routes.",
            "Transport follows relief: roads avoid steep slopes and swamps where possible.",
          ],
          example: {
            prompt: "Contours rise from 100 m to 400 m over 2 cm on a 1:50,000 map. Find the gradient.",
            solution: "Vertical 300 m; horizontal 2 × 0.5 km = 1 km = 1000 m. Gradient 300/1000 = 1 in 3.3.",
          },
        },
        {
          heading: "Fieldwork that scores",
          body:
            "Examiners reward method: aim, hypothesis, tools, sampling, presentation, analysis, conclusion.",
          bullets: [
            "Present data as bars, divided circles, flow lines or dot maps — matched to the data type.",
            "Sample randomly or systematically, never conveniently.",
            "State two limitations and how you reduced them.",
            "Conclude by answering the aim, not by praising the trip.",
          ],
        },
      ],
      keyPoints: [
        "Relief, drainage, settlement, transport, land use — in order.",
        "Evidence every claim with the sheet.",
        "Drainage pattern reveals structure.",
        "Method marks come from sampling and presentation.",
      ],
    },
  },
  {
    subjectSlug: "history",
    lesson: {
      slug: "nationalism-to-second-republic",
      title: "Nationalism, independence and the republics",
      summary: "From protest to independence constitutions, then republics, coups and returns.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Roads to 1960",
          body:
            "Newspapers (Lagos Daily News, West African Pilot), trade unions, student movements and ex-servicemen pressed colonial rule. Constitutional steps: Clifford (1922 elective), Richards (1946 regions), Macpherson (1951 wider franchise), Lyttleton (1954 federal), Independence (1960).",
          bullets: [
            "NNDP (1923, Macaulay) → NYM → NCNC/AG/NPC.",
            "1953 Kano riots followed the independence-motion crisis.",
            "1957–58 constitutional conferences fixed 1960.",
            "Independence 1 October 1960; republic 1963 with Azikiwe president, Balewa prime minister.",
          ],
        },
        {
          heading: "Republics and interruptions",
          body:
            "First Republic (1963–66) fell to coups and war; Gowon's 12 states (1967); Murtala/Obasanjo transition; Second Republic (1979–83, NPN/UPN/NPP/PRP/GNPP); Buhari/Idiagbon and Babangida years; June 12 annulment; Abacha; Abdulsalami transition; Fourth Republic from 1999.",
          bullets: [
            "Memorise by anchor dates: 1960, 1963, 1966, 1967, 1979, 1983, 1993, 1999.",
            "Each coup is asked with cause and consequence.",
            "Second Republic parties map to regions like the First.",
            "June 12 symbolises the democracy struggle.",
          ],
        },
      ],
      keyPoints: [
        "Constitutions sequence: Clifford to Independence.",
        "Anchor dates carry the narrative.",
        "Parties map to regions in both republics.",
        "Coups: cause and consequence together.",
      ],
    },
  },
  {
    subjectSlug: "home-economics",
    lesson: {
      slug: "housing-sanitation-health",
      title: "Housing, sanitation and family health",
      summary: "Choosing a home, safe water, waste disposal, immunisation and a stocked first-aid box.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "The healthy home",
          body:
            "Site, ventilation, lighting, water and waste decide health more than decoration. Questions ask for the healthiest option among alternatives.",
          bullets: [
            "Ventilation: cross-ventilate rooms; avoid overcrowding.",
            "Safe water: boil, filter or chlorinate doubtful supplies.",
            "Refuse: covered bins, prompt disposal, compost organics.",
            "Sewage: water closet to septic tank/soakaway; ventilated pit latrines where needed.",
          ],
        },
        {
          heading: "Family health practices",
          body:
            "Prevention beats cure: immunisation, hygiene, balanced diet, exercise, rest and prompt treatment.",
          bullets: [
            "Immunisable diseases: TB, polio, DPT, measles, hepatitis, yellow fever.",
            "HIV spreads via blood, sex, mother-to-child — not handshakes or sharing food.",
            "Say no to drug abuse, smoking and excess alcohol; seek counselling early.",
            "First-aid box: bandages, antiseptic, scissors, thermometer, gloves, ORS.",
          ],
        },
      ],
      keyPoints: [
        "Ventilation, water, waste: the healthy-home trio.",
        "Boil, filter or chlorinate doubtful water.",
        "Know transmission routes to kill myths.",
        "Prevention outranks treatment.",
      ],
    },
  },
  {
    subjectSlug: "fine-art",
    lesson: {
      slug: "western-contemporary-art",
      title: "Western movements and contemporary Nigerian art",
      summary: "Renaissance to Cubism in one line each, then Osogbo to today's masters.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Western movements in brief",
          body:
            "Examiners match movement to trait or artist. Learn the one-line signature of each.",
          bullets: [
            "Renaissance: revived classical realism and perspective (Leonardo, Michelangelo).",
            "Baroque: drama, light and movement (Caravaggio, Rembrandt).",
            "Impressionism: fleeting light, broken colour, open air (Monet).",
            "Cubism: fragmented geometric planes, multiple viewpoints (Picasso, Braque).",
            "Abstract/expressionist turns: feeling over likeness.",
          ],
        },
        {
          heading: "Contemporary Nigerian masters",
          body:
            "Match artist to work and style. The Osogbo school fused Yoruba myth with modern media under Ulli Beier's workshops.",
          bullets: [
            "Ben Enwonwu: Anyanwu, Sango — pioneering modernist sculpture/painting.",
            "Twins Seven Seven: Osogbo fantasy ink and paint.",
            "Yusuf Grillo: stained-glass-like blues, Yoruba themes.",
            "Nike Davies-Okundaye: adire revival and training centres.",
            "See works at the National Museum Lagos and Nike Art Gallery.",
          ],
        },
      ],
      keyPoints: [
        "Movement = trait + artist.",
        "Impressionism: light; Cubism: fragments.",
        "Osogbo fused myth with modern media.",
        "Match Nigerian masters to signature works.",
      ],
    },
  },
  {
    subjectSlug: "french",
    lesson: {
      slug: "comprehension-composition",
      title: "Comprehension and composition that score",
      summary: "Question-first reading, cognate hunting, and the connectors that build essays.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Reading for answers",
          body:
            "Comprehension in French rewards method over vocabulary size. Tense markers and question words locate answers even when some words are new.",
          bullets: [
            "Read the questions first; underline qui/que/quand/où/combien.",
            "Cognates (information, examen, nation) unlock sentences free.",
            "Passé composé signals completed events; présent signals habits.",
            "Answer in French, lifting short phrases and adjusting pronouns.",
          ],
        },
        {
          heading: "Letters and guided essays",
          body:
            "Informal letters need address, date, greeting, body, closing. Essays need plan, connectors and a closing line.",
          bullets: [
            "Openings: Cher ami / Chère amie; closings: Amitiés, Bisous (informal).",
            "Sequencers: d'abord, ensuite, puis, enfin.",
            "Reasons: parce que, car, grâce à; contrasts: mais, cependant.",
            "Model self-introduction: name, age, class, family, hobbies, ambition — five sentences.",
          ],
        },
      ],
      keyPoints: [
        "Questions first, then the passage.",
        "Cognates are free marks.",
        "Connectors build essay coherence.",
        "French answers, adjusted pronouns.",
      ],
    },
  },
  {
    subjectSlug: "yoruba",
    lesson: {
      slug: "culture-festivals-rites",
      title: "Àṣà: festivals, rites and chieftaincy",
      summary: "Egungun to Osun-Osogbo, naming to burial, and how towns are governed.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Festivals and life rites",
          body:
            "Describe any festival with four points: origin story, when held, what happens, what it means. Rites follow named stages.",
          bullets: [
            "Egungun: ancestral masquerade honouring lineage founders.",
            "Oro: exclusive rites with daytime restrictions in some towns.",
            "Osun-Osogbo: annual grove festival of the river goddess.",
            "Naming (ìsomọlórúkọ) on the eighth day; marriage (ìgbéyàwó) with bride-price and blessings; burial honouring the aged.",
          ],
        },
        {
          heading: "Governance and values",
          body:
            "The compound (agbo-ilé) under the baálé answers to the town under the Oba; chiefs (ìjòyè) hold portfolios. Ìwà (character) is the supreme value.",
          bullets: [
            "Oba-in-council decides with chiefs; town criers (góngó) announce.",
            "Age grades (ẹgbẹ́) execute communal work.",
            "Respect for elders, hospitality and honesty define ìwà rere.",
            "Proverbs and oríkì preserve these norms orally.",
          ],
        },
      ],
      keyPoints: [
        "Festival answers: origin, timing, events, meaning.",
        "Naming day eight; marriage and burial in stages.",
        "Oba, baálé, ìjòyè, ẹgbẹ́ — know the ladder.",
        "Ìwà rere crowns all values.",
      ],
    },
  },
  {
    subjectSlug: "igbo",
    lesson: {
      slug: "culture-titles-governance",
      title: "Ọdịnala: festivals, titles and village governance",
      summary: "New Yam to marriage rites, Ozo titles, age grades and the umunna assembly.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Festivals and life rites",
          body:
            "Answer culture questions with purpose, participants, sequence and meaning.",
          bullets: [
            "Iri Ji (New Yam): first-fruits thanksgiving opening the harvest, led by the eldest or priest.",
            "Marriage (Iku aka): inquiry, bride-price negotiation, wine-carrying, blessings.",
            "Naming: eighth-day or family-day ceremonies with meanings in the name.",
            "Burial: second burial and funeral rites honour achievement and aid transition.",
          ],
        },
        {
          heading: "Titles and governance",
          body:
            "Authority is diffuse and achieved. Know who decides what.",
          bullets: [
            "Nze na Ozo: prestigious title society with grades, fees and insignia (red cap, eagle feather).",
            "Otu ogbo (age grades): mates executing projects and discipline.",
            "Umunna assembly of male lineage heads decides land and disputes.",
            "Dibia (priest/diviner) mediates the spiritual realm; decisions need consensus.",
          ],
        },
      ],
      keyPoints: [
        "Iri Ji opens the harvest year.",
        "Marriage in negotiable stages.",
        "Ozo is achieved, graded and costly.",
        "Umunna decides by consensus.",
      ],
    },
  },
  {
    subjectSlug: "arabic",
    lesson: {
      slug: "reading-translation-skills",
      title: "Reading passages and translation skills",
      summary: "Vowel-mark reading, root spotting and the sentence patterns exams repeat.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Reading with marks",
          body:
            "Fully vowelled passages are gifts: case endings reveal subject, object and possession. Read slowly, mark the verbs first.",
          bullets: [
            "Find every verb; its form tells tense and subject.",
            "Case endings: -u subject, -a object, -i after prepositions.",
            "Idafa chains (possession) read right-to-left in English order.",
            "Numbers, names and places anchor comprehension.",
          ],
        },
        {
          heading: "Translation patterns",
          body:
            "Most exam sentences are school, family or routine scenes built from 40 core words. Master the connectors.",
          bullets: [
            "Wa (and), fa (then/so), thumma (then later), lakin (but), li'anna (because).",
            "Fī (in), ilā (to), min (from), 'alā (on), ma'a (with).",
            "Model: 'The diligent student reads the lesson in the school every morning.'",
            "Answer Arabic-to-English in natural English, not word-for-word.",
          ],
          example: {
            prompt: "Translate: يقرأ الطالب المجتهد الدرس في المدرسة كل صباح.",
            solution: "'The diligent student reads the lesson in the school every morning.' Verb first, adjective after noun, time phrase last.",
          },
        },
      ],
      keyPoints: [
        "Verbs first, endings second.",
        "-u subject, -a object, -i after prepositions.",
        "Connectors build exam sentences.",
        "Translate sense, not words.",
      ],
    },
  },
  {
    subjectSlug: "islamic-religious-studies",
    lesson: {
      slug: "pillars-in-practice",
      title: "The pillars in practice: salah, zakah, sawm and hajj",
      summary: "Prayer times and ablution, charity rules, fasting exemptions and Hajj order.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Salah and purification",
          body:
            "Five daily prayers at fixed times with set units (rak'ahs): Fajr 2, Zuhr 4, Asr 4, Maghrib 3, Isha 4. Validity needs wudu (or tayammum without water), clean place and covering, facing the qiblah.",
          bullets: [
            "Wudu order: intention, face, arms to elbows, wipe head, feet to ankles.",
            "Jumu'ah replaces Zuhr on Fridays with sermon and congregation.",
            "Late, traveller and sick concessions exist — learn one each.",
            "Congregational prayer carries multiplied reward.",
          ],
        },
        {
          heading: "Zakah, sawm and hajj",
          body:
            "Zakah (2.5% of qualifying savings yearly) purifies wealth for eight listed beneficiaries. Sawm abstains dawn-to-sunset in Ramadan with exemptions for the sick, travellers, pregnant/nursing mothers and the aged (fidyah). Hajj follows a fixed order once in a lifetime if able.",
          bullets: [
            "Hajj order: ihram → tawaf → sa'i → Arafat (9th Dhul-Hijjah) → Muzdalifah → Mina stoning → farewell tawaf.",
            "Arafat is the climax: 'Hajj is Arafat.'",
            "Eid al-Fitr ends Ramadan; Eid al-Adha falls in Hajj season with sacrifice.",
            "Umrah (lesser pilgrimage) can be done anytime.",
          ],
        },
      ],
      keyPoints: [
        "Five prayers, fixed rak'ahs and times.",
        "Wudu order and tayammum alternative.",
        "Zakah 2.5%; eight beneficiary classes.",
        "Hajj order with Arafat at the centre.",
      ],
    },
  },
  {
    subjectSlug: "hausa",
    lesson: {
      slug: "conversation-market-school",
      title: "Conversation: market, school and home",
      summary: "Bargaining dialogues, classroom language and polite forms that examiners quote.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Market dialogue",
          body:
            "Bargaining follows a script: greeting, asking price, reacting, counter-offering, closing. Learn the script lines, not just words.",
          bullets: [
            "'Nawa ne?' — How much is it?",
            "'Yayi tsada!' — It is too expensive!",
            "'Ka rage mini.' — Reduce (the price) for me.",
            "'Babu matsala, sai an jima.' — No problem, till later (polite exit).",
          ],
          example: {
            prompt: "Complete the bargaining: Seller: 'Naira dubu biyu ne.' Buyer wants half. What does he say?",
            solution: "'Dubun naira zan biya' (I will pay one thousand) or 'Ka rage mini' — then they meet between.",
          },
        },
        {
          heading: "School, home and politeness",
          body:
            "Classroom instructions, household requests and the softeners that mark good Hausa.",
          bullets: [
            "'A bude littafi.' — Open the book. 'Ku zauna.' — Sit down (plural).",
            "'Don Allah, ka taimake ni.' — Please help me.",
            "'Yi hakuri.' — Sorry/excuse me; 'Babu laifi.' — No offence taken.",
            "'Madalla!' — Well done!/Bravo!",
          ],
        },
      ],
      keyPoints: [
        "Bargaining is a script: price, reaction, counter, close.",
        "'Nawa ne?' opens every price question.",
        "Don Allah softens every request.",
        "Plural commands use ku-.",
      ],
    },
  },
  {
    subjectSlug: "music",
    lesson: {
      slug: "aural-ensemble-performance",
      title: "Aural skills, ensemble and performance",
      summary: "Clap-back rhythms, SATB parts, orchestra families and stage manners.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Training the ear",
          body:
            "Aural tests reward daily micro-practice: echo short rhythms, sing back intervals, and name what changes between two playings.",
          bullets: [
            "Clap crotchet, quaver and dotted patterns from memory.",
            "Distinguish major (bright) from minor (solemn) by the third.",
            "Name instruments by timbre: trumpet vs flute vs violin vs drum.",
            "Follow a score while listening to catch repeats and dynamics.",
          ],
        },
        {
          heading: "Ensembles and the stage",
          body:
            "Choirs divide into soprano, alto, tenor, bass (SATB); orchestras into strings, woodwind, brass and percussion. Conductors unify them.",
          bullets: [
            "Soprano highest, bass lowest; alto and tenor between.",
            "Strings: violin, viola, cello, double bass. Brass: trumpet, trombone, tuba.",
            "58. Woodwind: flute, clarinet, oboe, saxophone (single/double reeds).",
            "Stage manners: enter together, acknowledge applause, watch the conductor, silence phones.",
          ],
        },
      ],
      keyPoints: [
        "Echo rhythms and intervals daily.",
        "SATB from high to low.",
        "Family by sound production, not size.",
        "Watch the conductor, not the crowd.",
      ],
    },
  },
];
