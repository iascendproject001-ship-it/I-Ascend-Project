import type { ExtraLesson } from "./seed-curriculum-2";

/** Sixth-wave lessons: humanities, languages, arts and vocational. */
export const extraLessons9: ExtraLesson[] = [
  {
    subjectSlug: "economics",
    lesson: {
      slug: "development-indicators-planning",
      title: "Development indicators and planning",
      summary: "Measuring progress beyond GDP and how nations plan for it.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Beyond GDP",
          body:
            "Development means better lives: health, education, equity, sustainability. HDI blends income, schooling and longevity; inequality (Gini) and poverty headcount complete the picture.",
          bullets: [
            "GDP can rise while the poor multiply — check distribution.",
            "Literacy and life expectancy move slower than income — and matter more.",
            "Vision documents (Nigeria's Vision 20:2020, SDGs) set direction.",
            "Plans fail on funding gaps, corruption and policy reversals.",
          ],
        },
        {
          heading: "Planning that works",
          body:
            "Good plans set measurable targets, fund them, assign owners and review publicly. Questions ask you to evaluate plans, not praise them.",
          bullets: [
            "First–Fourth National Development Plans taught ambition vs capacity.",
            "NEEDS/SEEDS/LEEDS cascaded federal to local reform.",
            "Diversification, power and human capital recur as priorities.",
            "Judge every policy by implementation evidence.",
          ],
        },
      ],
      keyPoints: [
        "Development is welfare, not output alone.",
        "HDI blends income, schooling, longevity.",
        "Distribution decides who gains.",
        "Evaluate plans by evidence.",
      ],
    },
  },
  {
    subjectSlug: "government",
    lesson: {
      slug: "bill-to-law-process",
      title: "How laws are made: bill to law",
      summary: "Readings, committees and assent — plus money bills and vetoes.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "The legislative journey",
          body:
            "First reading (introduction), second (general debate), committee stage (clause-by-clause scrutiny), third (passage), concurrence by the other house, then presidential assent. Money bills start in the lower house.",
          bullets: [
            "Committees do the detailed, expert work — including public hearings.",
            "Bicameral agreement is required; conference committees reconcile versions.",
            "The president assents or withholds; vetoes can be overridden by supermajority.",
            "Private members' bills come from legislators, not the executive.",
          ],
        },
        {
          heading: "Oversight beyond lawmaking",
          body:
            "Legislatures also approve budgets and appointments, summon ministers, investigate scandals and (in extremes) impeach.",
          bullets: [
            "Oversight visits test project claims on the ground.",
            "Confirmation hearings vet nominees publicly.",
            "Impeachment needs gross misconduct plus supermajorities.",
            "Constituency projects link lawmakers to local needs — and controversies.",
          ],
        },
      ],
      keyPoints: [
        "Three readings plus committee scrutiny.",
        "Money bills start lower.",
        "Concurrence precedes assent.",
        "Oversight is half the job.",
      ],
    },
  },
  {
    subjectSlug: "literature-in-english",
    lesson: {
      slug: "negritude-apartheid-voices",
      title: "Negritude, apartheid and protest voices",
      summary: "The movements that made African poetry political — and answerable.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Negritude and its critics",
          body:
            "Senghor, Césaire and Damas affirmed Black civilisation against colonial contempt. Soyinka's tiger quip ('a tiger does not proclaim its tigritude') and later critics demanded universality over race pride.",
          bullets: [
            "Negritude themes: Africa's past glory, rhythm, emotion vs reason.",
            "Senghor's imagery draws on African landscapes and ancestry.",
            "Critics: essentialism, French-language irony, elite distance.",
            "Answer pattern: present the movement, then the counter-view, then judge.",
          ],
        },
        {
          heading: "Apartheid and protest",
          body:
            "South African writing (Serote, Brutus, Kunene, Gordimer, Coetzee) documents pass laws, Sharpeville, Soweto and Robben Island. Nigerian parallels: military-era protest poetry and songs.",
          bullets: [
            "Prison poems turn suffering into testimony.",
            "Exile literature writes home from abroad.",
            "Protest devices: bitter irony, catalogue of horrors, direct address.",
            "Always tie device to the political effect.",
          ],
        },
      ],
      keyPoints: [
        "Negritude affirms; critics universalise.",
        "Apartheid writing testifies.",
        "Present movement, counter-view, judgement.",
        "Device must serve political effect.",
      ],
    },
  },
  {
    subjectSlug: "christian-religious-studies",
    lesson: {
      slug: "apostles-deacons-martyrs",
      title: "Apostles, deacons and martyrs",
      summary: "The Twelve, the Seven, and the witnesses unto death.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "The Twelve and the Seven",
          body:
            "Jesus chose twelve apostles (Simon Peter, James, John, Andrew, Philip, Bartholomew, Matthew, Thomas, James son of Alphaeus, Thaddaeus, Simon the Zealot, Judas Iscariot — replaced by Matthias). The Seven (Stephen, Philip...) freed apostles for prayer and the word.",
          bullets: [
            "Peter leads at Pentecost; John is the beloved disciple.",
            "Matthew the tax collector writes the most Jewish gospel.",
            "Thomas moves from doubt to missionary tradition in India.",
            "Deacons model service ministries in every church.",
          ],
        },
        {
          heading: "Martyrs and missionaries",
          body:
            "Stephen (stoned), James son of Zebedee (Herod's sword), Antipas (Revelation) — and Paul's sufferings catalogue (beatings, shipwrecks, stoning). Persecution scattered and spread the gospel.",
          bullets: [
            "Saul held the coats at Stephen's death — grace converts persecutors.",
            "Philip evangelised Samaria and the Ethiopian eunuch.",
            "Barnabas encouraged Paul, Mark and Antioch.",
            "Modern application: courage, forgiveness, mission priority.",
          ],
        },
      ],
      keyPoints: [
        "Twelve apostles, seven deacons — know roles.",
        "Service frees the word ministry.",
        "Persecution scattered and spread.",
        "Apply courage and forgiveness today.",
      ],
    },
  },
  {
    subjectSlug: "commerce",
    lesson: {
      slug: "chambers-trade-associations",
      title: "Chambers of commerce and trade associations",
      summary: "How businesses organise collectively — and what each body does.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Chambers and associations",
          body:
            "Chambers of commerce (local, state, national — NACCIMA) promote trade, issue certificates of origin, arbitrate disputes and lobby government. Trade associations unite one line of business.",
          bullets: [
            "Functions: advocacy, information, training, exhibitions, arbitration.",
            "Employers' bodies (NECA) bargain with unions centrally.",
            "Professional bodies (ICAN, NBA, NSE) set standards and discipline.",
            "Distinguish: chamber (all trades, an area) vs association (one trade).",
          ],
        },
        {
          heading: "Fairs, markets and integration",
          body:
            "Trade fairs (Lagos, Kaduna, Enugu international) launch products and contacts. Common markets and customs unions deepen integration stepwise toward economic union.",
          bullets: [
            "Exhibitions cut buyer-search costs dramatically.",
            "Free trade area → customs union → common market → economic union.",
            "Rules of origin stop backdoor imports.",
            "Prepare fair participation: samples, prices, cards, follow-up.",
          ],
        },
      ],
      keyPoints: [
        "Chamber = area, all trades; association = one trade.",
        "Certificates of origin enable preferences.",
        "Integration deepens stepwise.",
        "Fairs compress search costs.",
      ],
    },
  },
  {
    subjectSlug: "financial-accounting",
    lesson: {
      slug: "public-sector-accounting",
      title: "Public sector accounting",
      summary: "How governments budget, spend, and account differently from firms.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Why government accounts differ",
          body:
            "Governments seek service, not profit: cash (or modified cash) basis, voted budgets, fund accounting, and audit by the Auditor-General with Public Accounts Committee scrutiny.",
          bullets: [
            "Revenue heads vs expenditure heads replace sales and costs.",
            "Virement moves savings between sub-heads with approval.",
            "Warrants authorise spending releases quarterly.",
            "Unspent votes lapse at year end (annuality).",
          ],
        },
        {
          heading: "Controls that matter",
          body:
            "Financial Regulations/Instructions, tender boards, internal audit, and legislative oversight chain custody of public money.",
          bullets: [
            "Due process certification precedes contract award.",
            "Store ledgers track every receipt and issue.",
            "Audit queries must be answered or surcharged.",
            "Transparency tools: published budgets, GIFMIS, TSA (single treasury account).",
          ],
        },
      ],
      keyPoints: [
        "Service motive changes the books.",
        "Votes lapse yearly.",
        "Warrants release money in tranches.",
        "Audit trail ends at the legislature.",
      ],
    },
  },
  {
    subjectSlug: "geography",
    lesson: {
      slug: "nigerian-cities-planning",
      title: "Nigerian cities: growth, problems and planning",
      summary: "Why cities explode, what breaks, and how planners respond.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Urban growth drivers",
          body:
            "Natural increase plus rural–urban migration swells Lagos, Kano, Ibadan, Abuja and Port Harcourt. Administrative status, ports, industries and institutions anchor growth.",
          bullets: [
            "Primate city dominance (Lagos) skews investment.",
            "Informal settlements house the working poor affordably.",
            "Slums show overcrowding, poor sanitation, insecure tenure.",
            "Traffic, flooding, waste and crime scale with size.",
          ],
        },
        {
          heading: "Planning responses",
          body:
            "Master plans, layout schemes, satellite towns, urban renewal, serviced sites and development control aim to order growth — enforcement decides success.",
          bullets: [
            "Abuja's master plan vs implementation gaps.",
            "Lagos BRT and rail tackle congestion corridors.",
            "Drainage masterplans answer flooding structurally.",
            "Involve communities or plans gather dust.",
          ],
        },
      ],
      keyPoints: [
        "Migration plus natural increase explodes cities.",
        "Informality houses the poor affordably.",
        "Plan, fund, enforce — all three.",
        "Transport shapes city form.",
      ],
    },
  },
  {
    subjectSlug: "history",
    lesson: {
      slug: "heroes-heroines-movements",
      title: "Heroes, heroines and movements",
      summary: "The people questions name — and what each one stands for.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Nationalist pantheon",
          body:
            "Macaulay (father of nationalism, NNDP, Daily News), Azikiwe (pilot, NCNC), Awolowo (AG, free education, cocoa wealth), Bello (Sardauna, NPC, northern modernisation), Enahoro (1953 motion), Funmilayo Ransome-Kuti (women's rights, Abeokuta women's revolt), Aminu Kano (talakawa politics, NEPU/PRP).",
          bullets: [
            "Match person to party, region and signature policy.",
            "Women's activism (Aba 1929, Abeokuta 1940s) is increasingly examined.",
            "Labour leaders (Imoudu) bridge unions and politics.",
            "Avoid hagiography: note controversies where asked.",
          ],
        },
        {
          heading: "Movements beyond parties",
          body:
            "Trade unions, student movements, press, market associations and youth corps shaped outcomes parties claim.",
          bullets: [
            "General Strike 1945 forced colonial concessions.",
            "NUNS/NADECO resisted military rule at great cost.",
            "June 12 pro-democracy coalition spanned regions.",
            "Diaspora remittances and advocacy now weigh in.",
          ],
        },
      ],
      keyPoints: [
        "Person → party → policy → region.",
        "Women's movements are examinable.",
        "Unions and students moved history too.",
        "Balance praise with evidence.",
      ],
    },
  },
  {
    subjectSlug: "home-economics",
    lesson: {
      slug: "consumer-rights-budgeting",
      title: "Consumer rights and family budgeting",
      summary: "Smart buying, honest sellers, and budgets that survive the month.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Rights and redress",
          body:
            "Safety, information, choice, redress, education and a healthy environment. Complain in writing, keep receipts, escalate to regulators (FCCPC, SON, NAFDAC) and consumer associations.",
          bullets: [
            "Read labels, expiry dates and NAFDAC numbers first.",
            "Guarantees and receipts are legal shields — keep them.",
            "Beware fake discounts, expired relabels and short measure.",
            "Mediation precedes litigation for small disputes.",
          ],
        },
        {
          heading: "Budgets that work",
          body:
            "List income, fix needs, cap wants, save first (pay yourself), track weekly, review monthly. The 50/30/20 guide adapts to any income.",
          bullets: [
            "Needs (food, rent, school) precede wants strictly.",
            "Emergency funds cover three months' basics.",
            "Compare unit prices, not pack prices.",
            "Involve the whole family or budgets leak.",
          ],
        },
      ],
      keyPoints: [
        "Receipts and labels protect buyers.",
        "Escalate complaints in writing.",
        "Save first, spend the rest.",
        "Compare unit prices.",
      ],
    },
  },
  {
    subjectSlug: "fine-art",
    lesson: {
      slug: "exhibition-criticism-careers",
      title: "Exhibition, criticism and art careers",
      summary: "Showing work, judging it fairly, and earning from it.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Exhibiting well",
          body:
            "Curate by theme, hang at eye level with breathing space, light evenly, label clearly (title, medium, size, price), open with remarks and a catalogue.",
          bullets: [
            "Solo shows depth; group shows range.",
            "Photograph everything before it leaves.",
            "Price by size, medium, reputation and costs — in writing.",
            "School exhibitions build the same muscles early.",
          ],
        },
        {
          heading: "Criticism and careers",
          body:
            "Describe, analyse, interpret, judge — in that order, with evidence. Careers span studio practice, teaching, galleries, museums, illustration, animation, fashion and conservation.",
          bullets: [
            "Fair criticism separates work from person.",
            "Portfolios, not certificates, win commissions.",
            "Copyright your designs; watermark online posts.",
            "Art businesses need the commerce in this syllabus too.",
          ],
        },
      ],
      keyPoints: [
        "Curate, hang, light, label.",
        "Describe before judging.",
        "Portfolios win work.",
        "Protect designs legally.",
      ],
    },
  },
  {
    subjectSlug: "french",
    lesson: {
      slug: "relative-pronouns-speech",
      title: "Relative pronouns and reported speech",
      summary: "Qui/que/dont/où without fear, plus saying what was said.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Qui, que, dont, où",
          body:
            "Qui replaces subjects, que replaces direct objects, dont replaces de + thing, où replaces place/time. Agreement: past participle agrees with preceding direct object.",
          bullets: [
            "L'homme qui parle (who speaks); le livre que je lis (which I read).",
            "Le film dont je parle (of which I speak).",
            "La ville où je vis (where I live).",
            "Les lettres que j'ai écrites (agreement with preceding les lettres).",
          ],
          example: {
            prompt: "Join: 'Voici le stylo. J'ai perdu le stylo.'",
            solution: "'Voici le stylo que j'ai perdu.' (direct object → que).",
          },
        },
        {
          heading: "Reporting in French",
          body:
            "Dire que, demander si, dire de + infinitive for commands. Tenses backshift like English: present → imparfait, passé composé → plus-que-parfait, futur → conditionnel.",
          bullets: [
            "Il dit qu'il est malade (he says he is ill).",
            "Elle demande si tu viens (she asks if you are coming).",
            "Le prof dit de se taire (orders silence).",
            "J'avais dit que je viendrais (sequence of pasts).",
          ],
        },
      ],
      keyPoints: [
        "Qui subject, que object, dont for de, où for place.",
        "Agreement with preceding direct objects.",
        "Dire que / demander si / dire de.",
        "Backshift tenses in reports.",
      ],
    },
  },
  {
    subjectSlug: "yoruba",
    lesson: {
      slug: "riddles-songs-games",
      title: "Àlọ́ àpamọ̀, orin àti eré (riddles, songs and games)",
      summary: "Wit contests, work songs and the play that teaches.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Riddles as examinations",
          body:
            "Àlọ́ àpamọ̀ poses nature puzzles ('my father's farm is never fully harvested' — the sky with stars). Evenings gather children to match wits; the wise answer with proverbs.",
          bullets: [
            "Structure: riddle, guesses, answer, applause-song.",
            "Answers hide in observation (palm tree, mortar, writing).",
            "Losers 'buy towns' (fines) amid laughter — learning disguised.",
            "Examiners ask purpose and performance context.",
          ],
        },
        {
          heading: "Songs and moonlight play",
          body:
            "Orin ìṣẹ́ (work), orin ìṣeré (play), orin ìyìn (praise) rhythm tasks. Eré oṣùpá (moonlight games: hide-and-seek, folktale circles) socialise children after farm work.",
          bullets: [
            "Call-and-response structures most songs.",
            "Clapping patterns teach rhythm and counting.",
            "Games rehearse cooperation, speed and memory.",
            "Festivals stage the best troupes competitively.",
          ],
        },
      ],
      keyPoints: [
        "Riddles test observation playfully.",
        "Answers hide in familiar things.",
        "Songs pace work and play.",
        "Moonlight play socialises children.",
      ],
    },
  },
  {
    subjectSlug: "igbo",
    lesson: {
      slug: "masquerades-festivals-calendar",
      title: "Mmanwu, festivals and the Igbo calendar",
      summary: "Ancestral theatre, farming festivals and the four-day week.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Mmanwu theatre",
          body:
            "Masquerades embody ancestors and spirits: majestic (Agbogho Mmuo maiden), fearsome (night guards), comic (commentators). Initiates carve, costume and choreograph in secret; uninitiated keep respectful distance.",
          bullets: [
            "Festival peaks: Christmas/New Year homecomings, Iri Ji, funerals of titled men.",
            "Music (ogene, drums, flutes) cues each spirit's steps.",
            "Taboos protect performance spaces and times.",
            "Examiners ask meaning, occasion and organisation.",
          ],
        },
        {
          heading: "Calendar and farming festivals",
          body:
            "The four-day week (Eke, Orie, Afor, Nkwo) schedules markets, meetings and worship; thirteen such months approximate the year. Iri Ji opens harvest with first-fruits rites.",
          bullets: [
            "Market days rotate across neighbouring towns.",
            "New Yam restrictions forbid early eating.",
            "Ofala and Ofala-like festivals renew kingship.",
            "Christian calendar now overlays without erasing.",
          ],
        },
      ],
      keyPoints: [
        "Mmanwu embodies ancestors theatrically.",
        "Music cues each spirit.",
        "Four-day week organises life.",
        "Iri Ji opens harvest.",
      ],
    },
  },
  {
    subjectSlug: "arabic",
    lesson: {
      slug: "idafa-possession-constructs",
      title: "Idafa: possession constructs",
      summary: "The two-word chain that owns Arabic noun phrases.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Building idafa",
          body:
            "First term (muḍāf) loses tanwīn and al-; second term (muḍāf ilayh) takes genitive case. Chain length is unlimited in theory, two-to-three in exams.",
          bullets: [
            "kitābu al-waladi — the boy's book.",
            "madrasatu al-qaryati — the village school.",
            "Feminine tāʾ marbūṭa opens to -at- in construct (madrasatu).",
            "Demonstratives and adjectives stand outside the chain.",
          ],
          example: {
            prompt: "Construct: 'the door of the house' (bāb, bayt).",
            solution: "'bābu al-bayt' — first term bare, second with al- in genitive.",
          },
        },
        {
          heading: "Using idafa in sentences",
          body:
            "Idafa supplies subjects, objects and adverbials compactly. Definite chains need no extra al-; indefinite chains pair indefinite terms.",
          bullets: [
            "baytu rajulin — a man's house (indefinite).",
            "fī bayti al-mudarrisi — in the teacher's house.",
            "Break long chains with li- (belonging to) for clarity.",
            "Exam translations hinge on spotting the chain first.",
          ],
        },
      ],
      keyPoints: [
        "First term bare; second genitive.",
        "Tāʾ marbūṭa opens in construct.",
        "Chains stay short in exams.",
        "Spot the chain, then translate.",
      ],
    },
  },
  {
    subjectSlug: "islamic-religious-studies",
    lesson: {
      slug: "akhlaq-brotherhood-society",
      title: "Akhlaq: truthfulness, brotherhood and society",
      summary: "Character as worship — honesty, promises, kinship and neighbourliness.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Truthfulness and trust",
          body:
            "The Prophet was Al-Amīn (the Trustworthy) before prophethood. Sidq (truthfulness) leads to righteousness; kadhib (lying) to ruin. Amanah covers deposits, offices, exams and secrets.",
          bullets: [
            "Fulfil promises — breaking them marks hypocrisy (with prayer-neglect and betrayal).",
            "Backbiting (ghibah) equals eating a brother's flesh (Qur'an 49:12).",
            "Exam malpractice violates amanah — say so plainly in answers.",
            "Restitution precedes repentance where rights were taken.",
          ],
        },
        {
          heading: "Kinship and neighbours",
          body:
            "Silat ar-raḥim (kin ties) draws provision and lifespan; neighbours hold rights up to forty houses; orphans, widows and travellers claim community care (zakah channels it).",
          bullets: [
            "Parental obedience follows only Allah's obedience.",
            "The best companion honours parents and kin.",
            "Community projects (mosques, wells, schools) are ongoing charity.",
            "Reconciliation (ṣulḥ) outranks victory in disputes.",
          ],
        },
      ],
      keyPoints: [
        "Al-Amīn models all dealings.",
        "Promises, exams and secrets are amanah.",
        "Kin ties draw blessing.",
        "Reconcile rather than win.",
      ],
    },
  },
  {
    subjectSlug: "hausa",
    lesson: {
      slug: "tatsuniya-storytelling",
      title: "Tatsuniya: the art of Hausa storytelling",
      summary: "Openings, trickster tales and the morals examiners ask for.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "How tales run",
          body:
            "'Ga ta nan, ga ta nanku…' opens; stock characters (Gizo the spider-trickster, Dila the hyena-fool, Kura the wise) act; songs punctuate; morals close the tale. Audience choruses responses.",
          bullets: [
            "Gizo wins by wit, loses by greed — know both turns.",
            "Animal tales veil human criticism safely.",
            "Repetition aids memory and invites chanting.",
            "Evening timing (tale-telling after farm work) matters socially.",
            "Closing formulae hand the tale back to the audience.",
          ],
        },
        {
          heading: "Answering tale questions",
          body:
            "Summarise plot in three lines, name two characters with traits, state the moral, connect to modern conduct.",
          bullets: [
            "Morals first: greed punished, wisdom rewarded, unity strength.",
            "Compare Hausa tales with Yoruba/Igbo parallels for bonus depth.",
            "Distinguish tatsuniya (fiction) from tarihin (history).",
            "Performance features (songs, choruses) earn method marks.",
          ],
        },
      ],
      keyPoints: [
        "Formula opening, moral closing.",
        "Gizo tricks; Dila blunders.",
        "Plot-traits-moral-modern link.",
        "Tatsuniya entertains to teach.",
      ],
    },
  },
  {
    subjectSlug: "music",
    lesson: {
      slug: "conducting-sight-reading",
      title: "Conducting patterns and sight-reading",
      summary: "Beat patterns, cues and the skill of playing the unknown.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Beat patterns",
          body:
            "Right hand traces patterns: downbeat always falls; 2/4 (down-up), 3/4 (down-out-up), 4/4 (down-in-out-up). Left hand shapes expression and cues entries.",
          bullets: [
            "Prep beat breathes the ensemble in together.",
            "Cut-offs end cleanly — circles mean sustain.",
            "Smaller patterns for faster tempi.",
            "Mirror practice fixes lopsided gestures.",
          ],
        },
        {
          heading: "Sight-reading method",
          body:
            "Scan key, time, hardest bar; set pulse; sol-fa silently; keep going through mistakes — recovery outscores perfection.",
          bullets: [
            "Rhythm first, pitches second, expression third.",
            "Count aloud during practice, internally in tests.",
            "Mark repeats, codas and D.S. before starting.",
            "Daily five-minute drills compound fastest.",
          ],
        },
      ],
      keyPoints: [
        "Downbeat always falls.",
        "Left cues, right keeps time.",
        "Scan, pulse, continue.",
        "Recovery beats perfection.",
      ],
    },
  },
];
