import type { ExtraLesson } from "./seed-curriculum-2";

/** Fifth-wave lessons: humanities, languages, arts and vocational. */
export const extraLessons6: ExtraLesson[] = [
  {
    subjectSlug: "economics",
    lesson: {
      slug: "labour-wages-unions",
      title: "Labour, wages and trade unions",
      summary: "How wages are set, what unions do, and the faces of unemployment.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Wages and the labour market",
          body:
            "Wages price labour where demand (marginal productivity) meets supply (population, skills, mobility). Nominal wages buy; real wages (adjusted for prices) live.",
          bullets: [
            "Minimum wage laws floor the unskilled market.",
            "Real wage = nominal wage ÷ price level.",
            "Fringe benefits (housing, health, pension) supplement pay.",
            "Gender and regional gaps persist where mobility is low.",
          ],
        },
        {
          heading: "Unions and unemployment",
          body:
            "Unions bargain collectively through threats of strike to arbitration. Unemployment types point to different cures.",
          bullets: [
            "Frictional (between jobs), structural (skills mismatch), seasonal, cyclical (recessions).",
            "Full employment still leaves frictional idleness.",
            "Policies: education, labour exchanges, public works, industrial growth.",
            "Underemployment wastes skills without idleness.",
          ],
        },
      ],
      keyPoints: [
        "Wages clear where labour demand meets supply.",
        "Real wages adjust for prices.",
        "Name the unemployment type, then the cure.",
        "Unions bargain collectively.",
      ],
    },
  },
  {
    subjectSlug: "government",
    lesson: {
      slug: "rights-and-judiciary",
      title: "Fundamental rights and the judiciary",
      summary: "Chapter IV rights, their limits, and how courts guard them.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Rights in the constitution",
          body:
            "Chapter IV of the 1999 Constitution guarantees life, dignity, liberty, fair hearing, privacy, thought, expression, assembly, movement and property. Rights limit government — none is absolute.",
          bullets: [
            "Derogations allow limits for defence, safety, health and others' rights.",
            "Habeas corpus frees unlawful detention; injunctions restrain action.",
            "Citizens enforce rights through the courts (and now the Fundamental Rights procedure).",
            "Duties pair rights: obey law, pay tax, respect others.",
          ],
        },
        {
          heading: "Courts and independence",
          body:
            "Hierarchy runs Customary/Area → Magistrate → High Court → Appeal Court → Supreme Court, plus election tribunals and specialised courts (Industrial, Sharia, Customary Appeal).",
          bullets: [
            "Independence rests on secure tenure, controlled removal, and financial autonomy.",
            "Judicial review voids unconstitutional acts.",
            "Delays, corruption and disobedience of orders corrode trust.",
            "The CJN heads the judiciary; NJC disciplines judges.",
          ],
        },
      ],
      keyPoints: [
        "Chapter IV holds the rights.",
        "Rights end where others' begin.",
        "Hierarchy fixes appeal routes.",
        "Tenure plus funding secures independence.",
      ],
    },
  },
  {
    subjectSlug: "literature-in-english",
    lesson: {
      slug: "oral-literature-forms",
      title: "Oral literature: proverbs, songs and tales",
      summary: "Features, functions and how examiners test the oral tradition.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Forms and features",
          body:
            "Oral literature lives in performance: call-and-response, repetition, music, audience participation. Forms include proverbs, riddles, folktales, myths, legends, epics, songs and praise poetry.",
          bullets: [
            "Proverbs compress wisdom; riddles test wit ('what walks on four...').",
            "Myths explain origins (gods, creation); legends heroise history.",
            "Epics (Sundiata, Ozidi) chant heroic cycles with music.",
            "Dirges mourn; lullabies soothe; work songs pace labour.",
          ],
        },
        {
          heading: "How questions come",
          body:
            "Examiners ask functions (teach, preserve history, entertain, moralise), features (repetition, audience) and matching (form to example).",
          bullets: [
            " griots/oral artists preserve genealogy and custom.",
            "Folktales often open with formulae and close with morals.",
            "Songs carry theme in drama and reinforce poetry answers.",
            "Quote one proverb correctly rather than three vaguely.",
          ],
        },
      ],
      keyPoints: [
        "Performance features define orality.",
        "Myth explains; legend heroises; proverb condenses.",
        "Functions: teach, preserve, entertain, moralise.",
        "One exact proverb beats three vague ones.",
      ],
    },
  },
  {
    subjectSlug: "christian-religious-studies",
    lesson: {
      slug: "faith-prayer-spirit",
      title: "Faith, prayer and the Holy Spirit",
      summary: "What faith does, how prayer works, and the Spirit's gifts and fruit.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Faith that acts",
          body:
            "Hebrews 11 defines faith as assurance and conviction, then parades Abel to the prophets as evidence. Faith receives, obeys and endures — never merely assents.",
          bullets: [
            "Abraham believed and journeyed; Rahab believed and hid spies.",
            "Doubting Thomas moved from doubt to 'My Lord and my God'.",
            "Faith without works is dead (James 2) — action authenticates belief.",
            "Prayer partners faith: ask, seek, knock with persistence.",
          ],
        },
        {
          heading: "The Holy Spirit's work",
          body:
            "The Spirit convicts, regenerates, indwells, gifts and fruits believers. Gifts serve the church (1 Corinthians 12–14); fruit proves character (Galatians 5).",
          bullets: [
            "Gifts include wisdom, healing, tongues with interpretation, prophecy.",
            "Fruit: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control.",
            "Gifts impress; fruit transforms — examiners contrast them.",
            "Blasphemy against the Spirit warns against attributing His work to evil.",
          ],
        },
      ],
      keyPoints: [
        "Faith assures, obeys and endures.",
        "Action authenticates belief.",
        "Gifts serve; fruit proves.",
        "Persistent prayer partners faith.",
      ],
    },
  },
  {
    subjectSlug: "commerce",
    lesson: {
      slug: "business-finance-sources",
      title: "Business finance: capital, credit and banking",
      summary: "Where businesses find money, what it costs, and how banks bridge trade.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Sources of finance",
          body:
            "Short-term needs (stock, wages) suit overdrafts and trade credit; long-term needs (premises, machines) suit shares, debentures and term loans. Match source to purpose.",
          bullets: [
            "Owner's savings and ploughed-back profits cost no interest.",
            "Shares dilute ownership; debentures burden with fixed interest.",
            "Trade credit (supplier delays) and overdrafts smooth cash flow.",
            "Government schemes and development banks target SMEs and farms.",
          ],
        },
        {
          heading: "Banks and instruments",
          body:
            "Current accounts serve traders (cheques, overdrafts); savings reward thrift; fixed deposits lock higher interest. Crossing, standing orders and direct debits manage payments safely.",
          bullets: [
            "Dishonoured cheques destroy trust and attract charges.",
            "Standing orders automate repeats; direct debits let billers collect.",
            "Loans need collateral, character and cash-flow proof.",
            "Mobile money now banks the unbanked trader.",
          ],
        },
      ],
      keyPoints: [
        "Match source duration to need duration.",
        "Shares dilute; debentures obligate.",
        "Overdrafts smooth; loans build.",
        "Know account types and payment tools.",
      ],
    },
  },
  {
    subjectSlug: "financial-accounting",
    lesson: {
      slug: "incomplete-records",
      title: "Incomplete records and single entry",
      summary: "Rebuilding profit from cash summaries with mark-up and margin maths.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Reconstructing the story",
          body:
            "Small traders keep cash records only. Rebuild: opening + receipts − payments ± adjustments = closing. Compare opening and closing capital (adjusted for drawings and fresh capital) to find profit.",
          bullets: [
            "Statement of affairs opens and closes the books (assets − liabilities).",
            "Profit = closing capital − opening capital + drawings − fresh capital.",
            "Bank summaries reveal credit sales and purchases.",
            "Missing figures emerge from control-account logic.",
          ],
          example: {
            prompt: "Opening capital ₦50,000; closing ₦80,000; drawings ₦10,000; fresh capital ₦5,000. Find profit.",
            solution: "80,000 − 50,000 + 10,000 − 5,000 = ₦35,000.",
          },
        },
        {
          heading: "Mark-up and margin",
          body:
            "Mark-up adds profit to cost; margin takes profit from sales. Convert fluently: 25% mark-up equals 20% margin.",
          bullets: [
            "Margin 20% on sales ₦100,000 → profit ₦20,000.",
            "Mark-up 25% on cost ₦80,000 → sales ₦100,000.",
            "Trading account format still applies to reconstructed figures.",
            "State assumptions where records truly vanish.",
          ],
        },
      ],
      keyPoints: [
        "Capital comparison reveals profit.",
        "Adjust for drawings and fresh capital.",
        "Mark-up on cost; margin on sales.",
        "Control logic fills missing figures.",
      ],
    },
  },
  {
    subjectSlug: "geography",
    lesson: {
      slug: "soils-vegetation-water",
      title: "Soils, vegetation belts and water resources",
      summary: "Nigeria's soils and belts south-to-north, plus rivers, lakes and dams.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Belts from the coast inland",
          body:
            "Mangrove (creeks, stilt roots) → freshwater swamp → rainforest (mahogany, iroko, oil palm) → Guinea savanna → Sudan savanna → Sahel (short grasses, thorn). Rainfall and soils drive the sequence.",
          bullets: [
            "Ferruginous tropical soils dominate the savanna; hydromorphic soils waterlog the Delta.",
            "Laterites harden when exposed — a farming and building headache.",
            "Deforestation pushes savanna south into forest (derived savanna).",
            "Shelterbelts and windbreaks defend the Sahel.",
          ],
        },
        {
          heading: "Water: rivers, lakes, dams",
          body:
            "The Niger–Benue system drains most of Nigeria to the Delta; Lake Chad shrinks in the north-east. Dams serve power, irrigation and supply.",
          bullets: [
            "Kainji (Niger), Shiroro (Kaduna tributary), Jebba, Zungeru generate power.",
            "Irrigation schemes (Bakolori, South Chad) water dry-season farming.",
            "Floods follow blocked channels and extreme rains; dredging and planning respond.",
            "Fisheries cluster on lakes, rivers and the coast.",
          ],
        },
      ],
      keyPoints: [
        "Belts run mangrove to Sahel, wet to dry.",
        "Laterite hardens on exposure.",
        "Niger–Benue drains to the Delta.",
        "Dams mean power plus irrigation.",
      ],
    },
  },
  {
    subjectSlug: "history",
    lesson: {
      slug: "social-economic-history",
      title: "Social and economic history: trade, currency and media",
      summary: "Currencies before the naira, trade routes, and how Nigerians got the news.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Trade and currency",
          body:
            "Cowries, manilas, brass rods and salt preceded coins; the naira and kobo arrived in 1973, decimalising from pounds, shillings and pence.",
          bullets: [
            "Trans-Saharan routes moved kola and gold north, salt and horses south.",
            "Atlantic trade shifted wealth to coastal middlemen (Jaja, Nana).",
            "Cash crops (cocoa, groundnut, palm produce) funded regions and marketing boards.",
            "Oil (1956 Oloibiri discovery, 1958 export) rewrote the economy.",
          ],
        },
        {
          heading: "Media and social change",
          body:
            "Newspapers birthed nationalism; radio/TV carried independence; social media now mobilises protests (e.g. #EndSARS 2020).",
          bullets: [
            "West African Pilot (Azikiwe) educated the nationalist generation.",
            "WNTV 1959 pioneered African television.",
            "NTA network news unified national discourse.",
            "Urbanisation, schooling and migration keep reshaping society.",
          ],
        },
      ],
      keyPoints: [
        "Cowries to naira in 1973.",
        "Trade routes made middlemen mighty.",
        "Oloibiri 1956 changed everything.",
        "Media milestones track nationalism.",
      ],
    },
  },
  {
    subjectSlug: "home-economics",
    lesson: {
      slug: "family-marriage-parenthood",
      title: "Family, marriage and parenthood",
      summary: "Family types, courtship to marriage, and the tasks of parenting.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Family forms and functions",
          body:
            "Nuclear (parents + children) versus extended (plus relatives) families; monogamous versus polygamous marriages. Families reproduce, socialise, protect and provide.",
          bullets: [
            "Functions: procreation, socialisation, economic support, affection, status.",
            "Courtship should reveal character, health, values and plans.",
            "Bride price and rites vary honestly by culture — describe, don't judge.",
            "Family crises (death, divorce, job loss) need counselling and kin support.",
          ],
        },
        {
          heading: "Parenting and adolescence",
          body:
            "Parenting styles (authoritative balances warmth with rules) shape outcomes. Adolescence brings puberty, identity questions and peer pressure.",
          bullets: [
            "Communicate early about values, sex, drugs and careers.",
            "Chores teach responsibility and skills.",
            "Discipline corrects; abuse damages — know the line.",
            "Plan education costs as deliberately as feeding costs.",
          ],
        },
      ],
      keyPoints: [
        "Name forms, then functions.",
        "Courtship investigates before committing.",
        "Authoritative parenting balances love and limits.",
        "Crises need counsel plus kin.",
      ],
    },
  },
  {
    subjectSlug: "fine-art",
    lesson: {
      slug: "graphics-lettering-decoration",
      title: "Graphic design, lettering and decoration",
      summary: "Poster layout, letterforms, motifs and the crafts of adornment.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Letters that speak",
          body:
            "Gothic (blackletter), Roman (serifed capitals), script and sans-serif each carry moods. Posters balance headline, image, details and white space.",
          bullets: [
            "Capital Roman letters suit formal headings and monuments.",
            "Spacing (kerning) decides legibility more than size.",
            "Borders and motifs frame; clutter kills.",
            "Colour contrast carries messages across streets.",
          ],
        },
        {
          heading: "Pattern and adornment",
          body:
            "Repeating motifs decorate textiles, walls, calabashes and bodies across Nigeria — geometry with meaning.",
          bullets: [
            "Uli and Nsibidi signs encode proverbs and histories.",
            "Adire patterns name life events and aspirations.",
            "Bead colour codes rank and occasion in Benin regalia.",
            "Symmetry calms; asymmetry excites — choose deliberately.",
          ],
        },
      ],
      keyPoints: [
        "Letterform carries mood.",
        "White space is a design element.",
        "Motifs encode meaning.",
        "Contrast delivers distance messages.",
      ],
    },
  },
  {
    subjectSlug: "french",
    lesson: {
      slug: "pronouns-prepositions-expressions",
      title: "Pronouns, prepositions and everyday expressions",
      summary: "Object pronouns, à/de/en contrasts, and the phrases of daily life.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Object pronouns in place",
          body:
            "Le/la/les replace things; lui/leur replace à + person; y replaces à + place; en replaces de + thing. Pronouns precede the verb (except affirmative commands).",
          bullets: [
            "Je vois les enfants → Je les vois.",
            "Je parle à Musa → Je lui parle.",
            "Je vais à l'école → J'y vais. Je reviens de Paris → J'en reviens.",
            "Ne + pronoun + verb + pas in negatives.",
          ],
          example: {
            prompt: "Replace: 'Tu donnes le livre à Amina.'",
            solution: "'Tu le lui donnes.' (le = the book, lui = to Amina).",
          },
        },
        {
          heading: "Prepositions and expressions",
          body:
            "À marks place/time (à l'école, à midi); de marks origin/content; en marks months, years, languages and feminine countries (en France, en 2024).",
          bullets: [
            "Au/aux for masculine/plural places; en for feminine.",
            "Avoir expressions: avoir faim/soif/chaud/froid/peur (be hungry/thirsty/hot/cold/afraid).",
            "Faire expressions: faire attention, faire les courses.",
            "Time fillers: maintenant, bientôt, toujours, déjà.",
          ],
        },
      ],
      keyPoints: [
        "Pronouns precede verbs.",
        "Lui/leur for people; y/en for things/places.",
        "À place, de origin, en feminine.",
        "Avoir + noun states feelings.",
      ],
    },
  },
  {
    subjectSlug: "yoruba",
    lesson: {
      slug: "numbers-time-measurements",
      title: "Numbers, time and measurements",
      summary: "Counting to bulky figures, telling time, and market measures.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Counting the Yoruba way",
          body:
            "Yoruba uses a vigesimal-tinged system built on 1–10 with subtraction patterns (e.g. mọ́kàndínlógún = 19, 'one-less-than-twenty'). Master 1–20, tens and hundreds first.",
          bullets: [
            "1–10: ọ̀kan/ẹyọ, méjì, mẹ́ta, mẹ́rin, márùn, mẹ́fà, méje, mẹ́jọ, mẹ́sàn-án, mẹ́wàá.",
            "20 ogún; 30 ọgbọ̀n; 200 igba; 400 ẹgbẹ̀rún? no — 2000 ẹgbàá? Keep: 100 ọgọ́rùn-ún, 1000 ẹgbẹ̀rún.",
            "Money and phone numbers use dígít-by-dígít reading.",
            "Ordinal sense comes from context and k-...: first = àkọ́kọ́.",
          ],
        },
        {
          heading: "Time and market measures",
          body:
            "Clock time, market days and measures answer practical questions.",
          bullets: [
            "Àkókò mélo? (What time?) — aago méje (7 o'clock).",
            "Ọjọ́ ọ̀sẹ̀: weekdays named; ọjọ́ ìsinmi (rest day).",
            "Measures: mudu (grain bowl), kòngó (tin), tâásà (scale pan).",
            "Bargaining numbers must be instant — drill them aloud.",
          ],
        },
      ],
      keyPoints: [
        "Master 1–20 before hundreds.",
        "Subtraction patterns build teens.",
        "Time answers need aago + number.",
        "Measures belong to market contexts.",
      ],
    },
  },
  {
    subjectSlug: "igbo",
    lesson: {
      slug: "numbers-time-measurements",
      title: "Numbers, time and measurements",
      summary: "Counting, clock time, market days and measures.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Counting",
          body:
            "One to ten anchors everything: otu, abụọ, atọ, anọ, ise, isii, asaa, asatọ, itoolu, iri. Tens build regularly (iri abụọ = 20), with narị (hundred) and puku (thousand) above.",
          bullets: [
            "Drill 1–10 until automatic, then tens.",
            "Phone numbers and money read digit by digit.",
            "First: nke mbụ; position words follow nouns.",
            "Agreement errors cluster around large figures — write them out.",
          ],
        },
        {
          heading: "Time and measures",
          body:
            "Clock, week and market measures complete daily conversation.",
          bullets: [
            "Olee oge? (What time?) — Elekere ... (o'clock).",
            "Market days and Sundays organise the Igbo week alongside weekdays.",
            "Measures: iko (cup), debe (basin/tin), akpa (bag).",
            "Bargaining rehearsals fix numbers fastest.",
          ],
        },
      ],
      keyPoints: [
        "1–10 automatic first.",
        "Tens build on iri.",
        "Time answers need elekere.",
        "Measures live in markets.",
      ],
    },
  },
  {
    subjectSlug: "arabic",
    lesson: {
      slug: "numbers-time-phrases",
      title: "Numbers, time and everyday phrases",
      summary: "One to ten with gender, clock time, and the phrases of courtesy.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Numbers one to ten",
          body:
            "Wāḥid, ithnān, thalātha, arba'a, khamsa, sitta, sab'a, thamāniya, tis'a, 'ashara. Masculine and feminine forms differ for 3–10 — the examined twist.",
          bullets: [
            "3–10 take feminine form with masculine nouns and vice versa (polarity).",
            "Eleven and twelve agree fully with the noun.",
            "Ordinal first (awwal) differs from cardinal one.",
            "Phone numbers read digit by digit (ṣifr = zero).",
          ],
        },
        {
          heading: "Time and courtesy",
          body:
            "Clock time uses the feminine ordinal with sā'a (hour): as-sā'a al-wāḥida (one o'clock). Courtesy phrases oil every dialogue.",
          bullets: [
            "Kam as-sā'a? (What time?) — as-sā'a ath-thāniya (two o'clock).",
            "Min faḍlik (please, m.), law samaḥt (excuse me).",
            "Tafaḍḍal (welcome/come in), ma'a s-salāma (go in peace).",
            "In shā' Allāh for future plans; mā shā' Allāh in admiration.",
          ],
        },
      ],
      keyPoints: [
        "1–10 with gender polarity for 3–10.",
        "Clock uses feminine ordinals.",
        "Courtesy phrases complete dialogues.",
        "Digits for phones and prices.",
      ],
    },
  },
  {
    subjectSlug: "islamic-religious-studies",
    lesson: {
      slug: "islam-in-nigeria",
      title: "Islam in Nigeria: arrival, jihad and today",
      summary: "Trans-Saharan roots, the Sokoto Caliphate and contemporary institutions.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Arrival and spread",
          body:
            "Islam entered through trans-Saharan trade and scholars, taking root in Kanem-Borno (Mai Idris Alooma's era) and Hausaland's city-states centuries before the jihad.",
          bullets: [
            "Wangara traders and Malian scholars carried the faith.",
            "Kano, Katsina and Zazzau hosted scholars and mosques early.",
            "Syncretism with traditional practices troubled reformers.",
            "Arabic literacy spread with Qur'anic schools (makaranta allo).",
          ],
        },
        {
          heading: "Jihad to the present",
          body:
            "Usman dan Fodio's 1804 jihad purified practice and built the Sokoto Caliphate under emirs; colonial rule froze its politics but left Shari'ah courts for personal matters.",
          bullets: [
            "Caliphate contributions: scholarship (Abdullahi, Bello), administration, justice.",
            "Colonial indirect rule used emirs while curbing jihad spirit.",
            "Post-independence: Shari'ah debates, Izala reform movement, Sufi orders (Qadiriyya, Tijaniyya).",
            "Contemporary institutions: mosques, Islamic schools, pilgrims boards, councils (NSCIA).",
          ],
        },
      ],
      keyPoints: [
        "Trade plus scholars planted Islam.",
        "1804 jihad built the Caliphate.",
        "Makaranta allo spread literacy.",
        "Shari'ah courts handle personal law today.",
      ],
    },
  },
  {
    subjectSlug: "hausa",
    lesson: {
      slug: "numbers-time-measurements",
      title: "Numbers, time and measurements",
      summary: "Counting to thousands, clock time and market measures.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Counting",
          body:
            "D'aya, biyu, uku, hud'u, biyar, shida, bakwai, takwas, tara, goma; then goma sha d'aya (11) upward, ashirin (20), talatin (30), d'ari (100), dubu (1000).",
          bullets: [
            "Drill 1–10, then tens to a hundred.",
            "Money counts in naira and kobo plainly.",
            "Ordinal first: na farko.",
            "Ages and dates use plain cardinals.",
          ],
        },
        {
          heading: "Time and measures",
          body:
            "Clock, parts of day and market measures finish daily fluency.",
          bullets: [
            "Wane lokaci? (What time?) — Karfe bakwai (7 o'clock).",
            "Safe (morning), rana (daytime), yamma (evening), dare (night).",
            "Measures: mudu, kwano (bowl), tiya (mug/tin).",
            "Market-day names vary by town — learn your area's.",
          ],
        },
      ],
      keyPoints: [
        "1–10, then tens to dubu.",
        "Karfe + number tells time.",
        "Parts of day anchor greetings.",
        "Measures belong to bargaining.",
      ],
    },
  },
  {
    subjectSlug: "music",
    lesson: {
      slug: "theory-intervals-triads",
      title: "Theory II: intervals, triads and transposition",
      summary: "Naming distances, building chords and moving keys.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Intervals and triads",
          body:
            "Intervals count letter-names inclusively (C–E is a third); quality (major/minor/perfect) comes from semitone size. Stack two thirds for a triad.",
          bullets: [
            "Unison, 2nd, 3rd … octave by letter count.",
            "Major triad = major 3rd + minor 3rd (C–E–G). Minor flips them.",
            "Inversions reorder the same notes (first: third in bass).",
            "Perfect intervals (4th, 5th, 8ve) suit open, stable sounds.",
          ],
          example: {
            prompt: "Build a C major triad and name its first inversion.",
            solution: "C–E–G; first inversion puts E lowest: E–G–C.",
          },
        },
        {
          heading: "Transposition and cadences",
          body:
            "Move every note by the same interval to change key; cadences punctuate phrases like punctuation marks.",
          bullets: [
            "Transpose melodies up a tone by shifting each note equally.",
            "Perfect cadence (V–I) closes firmly; plagal (IV–I, 'Amen') closes gently.",
            "Imperfect (…–V) leaves questions hanging.",
            "Key signatures, not accidentals, should carry routine sharps/flats.",
          ],
        },
      ],
      keyPoints: [
        "Count letters for interval number.",
        "Triads stack two thirds.",
        "Transpose everything equally.",
        "Cadences punctuate phrases.",
      ],
    },
  },
];
