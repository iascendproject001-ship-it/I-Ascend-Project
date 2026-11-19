import type { SeedLesson, SeedSubject } from "./seed-subjects";
import type { SeedQuestion } from "./seed-questions";

/* ------------------------------------------------------------------ */
/* New JAMB subjects missing from the first curriculum release        */
/* ------------------------------------------------------------------ */

export const extraSubjects: SeedSubject[] = [
  {
    slug: "islamic-religious-studies",
    name: "Islamic Religious Studies",
    category: "Arts & Social Science",
    tagline: "Qur'an, Hadith, articles of faith, the Prophet's life and the early caliphate.",
    description:
      "IRS rewards precise knowledge of revelation, the Prophet's biography and the practices of Islam. Lessons organise the syllabus around dates, definitions and distinctions examiners test every year.",
    icon: "☪️",
    accent: "#00695C",
    sortOrder: 23,
    lessons: [
      {
        slug: "quran-hadith-and-faith",
        title: "The Qur'an, Hadith and the articles of faith",
        summary: "Revelation and compilation, Hadith components and collections, and the six articles of iman.",
        durationMinutes: 24,
        level: "Core",
        examWeight: "Very high yield",
        sections: [
          {
            heading: "Revelation and compilation of the Qur'an",
            body:
              "The Qur'an was revealed to Prophet Muhammad (SAW) over about 23 years, beginning in the Cave of Hira with the word 'Iqra' (Read). Memorisation and writing preserved it during his lifetime; it was compiled into a single volume under Caliph Abubakar and standardised under Caliph Uthman.",
            bullets: [
              "The Qur'an has 114 surahs (chapters); the longest is Al-Baqarah, the shortest Al-Kawthar.",
              "Makkan surahs emphasise faith and worship; Madinan surahs emphasise law and community.",
              "Uthman's standardisation produced the single authoritative text (mushaf).",
              "Tafsir is commentary explaining the Qur'an; the best-known classical commentator is Ibn Kathir.",
            ],
          },
          {
            heading: "Hadith: components and collections",
            body:
              "A Hadith reports the sayings, actions or approvals of the Prophet. Each Hadith has an isnad (chain of narrators) and a matn (the text). Scholars grade Hadith as sahih (sound), hasan (fair) or da'if (weak) by examining the reliability of the chain.",
            bullets: [
              "The six canonical collections are called Kutub as-Sittah.",
              "Sahih al-Bukhari and Sahih Muslim are the two most authentic (the Sahihayn).",
              "A Hadith Qudsi is a sacred Hadith in which the Prophet reports the words of Allah outside the Qur'an.",
              "Hadith is the second primary source of Islamic law after the Qur'an.",
            ],
          },
          {
            heading: "The six articles of faith (iman)",
            body:
              "Belief in Allah, His angels, His revealed books, His messengers, the Last Day, and divine decree (qadar) — good and bad. Examination questions typically ask for the list, the meaning of one article, or the practical effect of belief.",
            bullets: [
              "Tawhid is the oneness of Allah — the foundation of all six articles.",
              "Revealed books include the Tawrah (Musa), Zabur (Dawud), Injil (Isa) and Qur'an (Muhammad).",
              "Belief in the Last Day produces accountability, honesty and restraint.",
              "Mala'ikah (angels) include Jibril, who brought revelation, and Malik, keeper of Hell.",
            ],
          },
        ],
        keyPoints: [
          "First revelation: 'Iqra' in the Cave of Hira.",
          "114 surahs; compilation under Abubakar, standardisation under Uthman.",
          "Hadith = isnad + matn; Bukhari and Muslim are most authentic.",
          "Six articles of faith, founded on tawhid.",
        ],
      },
      {
        slug: "prophet-and-caliphate",
        title: "Muhammad (SAW), the Hijrah and the Rightly Guided Caliphs",
        summary: "Makkan and Madinan periods, the Hijrah of 622 CE, and the four Khulafa ar-Rashidun.",
        durationMinutes: 24,
        level: "Core",
        examWeight: "High yield",
        sections: [
          {
            heading: "The Makkan period",
            body:
              "Muhammad (SAW) was born in Makkah around 570 CE, received revelation at 40, and preached tawhid for 13 years amid persecution. The boycott, the loss of Khadijah and Abu Talib (the Year of Sorrow), and the pledge of Aqabah preceded the migration.",
            bullets: [
              "Early converts included Khadijah (first believer), Ali, Abubakar and Zayd.",
              "Some followers migrated to Abyssinia for protection under the Negus.",
              "The Hijrah to Madinah in 622 CE marks the start of the Islamic calendar.",
            ],
            example: {
              prompt: "Why is 622 CE the first year of the Islamic calendar?",
              solution:
                "The Hijrah — the Prophet's migration from Makkah to Madinah — established the first Muslim community and state. Caliph Umar later adopted it as the calendar epoch.",
            },
          },
          {
            heading: "The Madinan period",
            body:
              "In Madinah the Prophet built the mosque, established brotherhood between Muhajirun and Ansar, and issued the Constitution of Madinah. Key events include Badr (2 AH), Uhud (3 AH), the Trench/Khandaq (5 AH), Hudaybiyyah (6 AH), the conquest of Makkah (8 AH) and the Farewell Pilgrimage (10 AH).",
            bullets: [
              "Badr was the first major battle and a decisive Muslim victory.",
              "The Constitution of Madinah defined the rights of Muslims, Jews and others.",
              "The Farewell Sermon emphasised equality, women's rights and unity.",
            ],
          },
          {
            heading: "The Khulafa ar-Rashidun",
            body:
              "Four caliphs in order: Abubakar as-Siddiq (riddah wars, Qur'an compilation), Umar ibn al-Khattab (expansion, Hijri calendar, administration), Uthman ibn Affan (Qur'an standardisation, navy), Ali ibn Abi Talib (fitnah, Siffin, Kharijites). Learn one achievement and one challenge each.",
            bullets: [
              "Abubakar ruled 632–634 CE; Umar 634–644; Uthman 644–656; Ali 656–661.",
              "Umar's reign saw the conquest of Persia, Syria and Egypt.",
              "Uthman was martyred while reading the Qur'an; Ali was martyred in Kufa.",
            ],
          },
        ],
        keyPoints: [
          "Hijrah 622 CE = year 1 AH.",
          "Badr (2 AH), Uhud (3 AH), Khandaq (5 AH), conquest of Makkah (8 AH).",
          "Order: Abubakar, Umar, Uthman, Ali.",
          "Match each caliph to one achievement.",
        ],
      },
    ],
  },
  {
    slug: "hausa",
    name: "Hausa",
    category: "Languages",
    tagline: "Gaisuwa, ƙamus da al'ada — greetings, tones, grammar and oral literature.",
    description:
      "The Hausa paper tests everyday vocabulary, tone awareness, grammar and culture. Lessons build the greeting system and the grammatical patterns that carry objective marks.",
    icon: "🗣️",
    accent: "#5D4037",
    sortOrder: 24,
    lessons: [
      {
        slug: "hausa-greetings-and-vocabulary",
        title: "Gaisuwa (greetings) and everyday vocabulary",
        summary: "Time-of-day greetings, family words, numbers and the three tones.",
        durationMinutes: 20,
        level: "Core",
        examWeight: "High yield",
        sections: [
          {
            heading: "Gaisuwa by time and situation",
            body:
              "Hausa greetings change with the time of day and the activity. Matching the greeting to its context is the most frequent objective question.",
            bullets: [
              "Barka da safiya — good morning. Barka da yamma — good afternoon/evening. Barka da dare — good night.",
              "Sannu — a general respectful greeting. Sannu da aiki — greetings on work well done.",
              "Lafiya lau — I am fine (in response to 'Lafiya?').",
              "Na gode — thank you. Don Allah — please. Yi hakuri — sorry/excuse me.",
            ],
          },
          {
            heading: "Core vocabulary",
            body:
              "Build the family, number and household words first; they recur in comprehension passages.",
            bullets: [
              "Uba — father. Uwa — mother. D'a — son. 'Ya — daughter.",
              "D'aya — one, biyu — two, uku — three, hud'u — four, biyar — five, goma — ten.",
              "Gida — house/home. Makaranta — school. Kasuwa — market.",
              "Ruwa — water. Abinci — food. Littafi — book.",
            ],
          },
          {
            heading: "Tones",
            body:
              "Hausa distinguishes high, low and falling tones. Tone marks can change meaning, so written answers must carry them where the question demands.",
            bullets: [
              "High tone is marked with an acute accent, low with a grave accent.",
              "The glottalised consonants b', d', k', 'y are written with an apostrophe or hook.",
              "Vowel length also matters: short versus long vowels change words.",
            ],
          },
        ],
        keyPoints: [
          "Barka da safiya = good morning.",
          "Na gode = thank you; Sannu = general greeting.",
          "Uba = father, uwa = mother.",
          "Three tones: high, low, falling.",
        ],
      },
      {
        slug: "hausa-grammar-and-literature",
        title: "Grammar: gender, number and oral literature",
        summary: "Noun gender, plural patterns, and the forms of Hausa oral tradition.",
        durationMinutes: 20,
        level: "Core",
        examWeight: "High yield",
        sections: [
          {
            heading: "Gender and number",
            body:
              "Hausa nouns are masculine or feminine, and adjectives and pronouns agree with them. Most feminine nouns end in -a. Plurals (jam'i) follow several patterns that must be memorised per word.",
            bullets: [
              "Feminine nouns commonly end in -a: k'ofa (door), kujera (chair).",
              "Common plural patterns include reduplication and suffix changes — learn each noun with its plural.",
              "Adjectives follow the noun and agree in gender and number.",
              "Demonstratives distinguish near (wannan) from far (wancan).",
            ],
          },
          {
            heading: "Oral literature",
            body:
              "Associate each form with its purpose. Questions ask 'what is X used for?' or 'which form does this example belong to?'",
            bullets: [
              "Karin magana — proverb; the vehicle of Hausa wisdom.",
              "Tatsuniya — folktale, often beginning 'Ga ta nan, ga ta nanku…'",
              "Kirari — praise epithet or motto of a person, town or profession.",
              "Wak'a — song/poem; maroka are praise-singers and musicians.",
            ],
          },
        ],
        keyPoints: [
          "Most feminine nouns end in -a.",
          "Learn each noun together with its plural.",
          "Karin magana = proverb; tatsuniya = folktale.",
          "Adjectives follow the noun and agree with it.",
        ],
      },
    ],
  },
  {
    slug: "music",
    name: "Music",
    category: "Arts & Social Science",
    tagline: "Rudiments, rhythm and Nigerian musical traditions — theory that sings.",
    description:
      "Music theory questions are precise and generous to candidates who learn the rudiments cold. Lessons cover notation, scales, rhythm and the Nigerian traditions examiners love.",
    icon: "🎵",
    accent: "#4A148C",
    sortOrder: 25,
    lessons: [
      {
        slug: "rudiments-staff-scales-rhythm",
        title: "Rudiments: staff, clefs, scales and rhythm",
        summary: "Notation values, time signatures, the major-scale pattern and key signatures.",
        durationMinutes: 24,
        level: "Core",
        examWeight: "Very high yield",
        sections: [
          {
            heading: "The staff and note values",
            body:
              "The staff has five lines and four spaces. The treble (G) clef centres on the second line; the bass (F) clef centres on the fourth line. Note values are fractions of a semibreve (whole note).",
            bullets: [
              "Semibreve = 4 beats, minim = 2, crotchet = 1, quaver = ½, semiquaver = ¼.",
              "A dot adds half the value again: a dotted minim = 3 beats.",
              "Rests mirror the notes: semibreve rest hangs from a line, minim rest sits on it.",
              "Ledger lines extend the staff for notes above or below it.",
            ],
            example: {
              prompt: "How many quavers fit into one dotted crotchet?",
              solution:
                "A crotchet = 2 quavers. The dot adds half a crotchet (1 quaver). Total = 3 quavers.",
            },
          },
          {
            heading: "Time signatures and rhythm",
            body:
              "The upper number tells how many beats per bar; the lower tells which note gets one beat. Simple time divides the beat into two; compound time divides it into three.",
            bullets: [
              "2/4 = two crotchet beats; 3/4 = three; 4/4 (common time) = four.",
              "6/8 = two dotted-crotchet beats — compound duple time.",
              "A bar line divides measures; a double bar ends a section or piece.",
              "Syncopation stresses the off-beat; a triplet fits three notes into the time of two.",
            ],
          },
          {
            heading: "Scales and key signatures",
            body:
              "The major scale follows tone–tone–semitone–tone–tone–tone–semitone. Key signatures add the sharps or flats of that scale at the start of every staff.",
            bullets: [
              "C major has no sharps or flats; G major has F♯.",
              "Order of sharps: F♯ C♯ G♯ D♯ A♯ E♯ B♯. Order of flats: B♭ E♭ A♭ D♭ G♭ C♭ F♭.",
              "The relative minor shares the key signature and starts on the sixth degree (A minor ↔ C major).",
              "A semitone is the smallest step (E–F, B–C); all other adjacent naturals are tones.",
            ],
          },
        ],
        keyPoints: [
          "Five lines, four spaces; note values halve down the table.",
          "A dot adds half the value again.",
          "Upper number = beats per bar; lower = beat unit.",
          "Major scale: T–T–S–T–T–T–S.",
        ],
      },
      {
        slug: "nigerian-music-traditions",
        title: "Nigerian musical traditions and instruments",
        summary: "Talking drums, court trumpets, and the popular genres with their pioneers.",
        durationMinutes: 20,
        level: "Core",
        examWeight: "High yield",
        sections: [
          {
            heading: "Traditional instruments by culture",
            body:
              "Match each instrument to its people and its function. Examiners test culture–instrument–occasion triples.",
            bullets: [
              "Gangan (talking drum, Yoruba): hourglass tension drum that mimics speech tones.",
              "Bata (Yoruba): double-headed drum for Sango worship and festivals.",
              "Kakaki (Hausa): long royal trumpet for emirs and ceremonies.",
              "Ogene (Igbo): double iron bell marking time and ceremony.",
              "Agidigbo (Yoruba): large lamellophone (thumb piano) for social music.",
            ],
          },
          {
            heading: "Popular genres and pioneers",
            body:
              "Associate each genre with its sound and its defining artiste. Questions ask who pioneered what, or which genre an artiste belongs to.",
            bullets: [
              "Afrobeat — Fela Anikulapo-Kuti: jazz, funk and Yoruba rhythms with political lyrics.",
              "Juju — King Sunny Adé: talking drums, guitars and praise lyrics.",
              "Fuji — Ayinde Barrister (Sikiru Adepoju): Islamic were-music roots, percussion-driven.",
              "Highlife — Osita Osadebe, Oliver de Coque: guitars, horns and Igbo lyrics.",
              "Hymnody and choral music remain central to church and school music examinations.",
            ],
          },
        ],
        keyPoints: [
          "Gangan = Yoruba talking drum; kakaki = Hausa royal trumpet.",
          "Ogene = Igbo double bell; agidigbo = Yoruba lamellophone.",
          "Fela = Afrobeat; Sunny Adé = juju; Barrister = fuji.",
          "Match instrument to culture and occasion.",
        ],
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Additional topic lessons for existing subjects                     */
/* ------------------------------------------------------------------ */

export type ExtraLesson = { subjectSlug: string; lesson: SeedLesson };

export const extraLessons: ExtraLesson[] = [
  {
    subjectSlug: "english-language",
    lesson: {
      slug: "summary-writing",
      title: "Summary writing: condensing without losing meaning",
      summary: "Sentence limits, one-word answers, and the six-mark method for the summary question.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Read for the demand, not the story",
          body:
            "The summary question gives a demand (for example, 'in one sentence, state two reasons...') and a strict sentence limit. Underline the demand first, then read only to answer it. Every sentence over the limit loses marks, however good.",
          bullets: [
            "One sentence means one full stop. Semicolons do not create new sentences, but examiners dislike them.",
            "Answer in your own words where possible; lifting whole phrases is penalised.",
            "Number your points exactly as demanded — no more, no fewer.",
            "Roughwork in the margin: draft, count, then write fair.",
          ],
        },
        {
          heading: "The six-mark method",
          body:
            "Two marks usually reward content (finding the points) and the rest reward expression, sentence limit and clarity. Write short, plain sentences: subject, verb, point.",
          bullets: [
            "Avoid introductions like 'The writer says that' — they waste your sentence budget.",
            "Combine two short points with 'and' inside one sentence.",
            "Never add examples, opinions or outside knowledge.",
            "Check every pronoun: it must be clear what 'it' or 'they' refers to.",
          ],
          example: {
            prompt: "Demand: 'In one sentence, give two causes of flooding mentioned in the passage.'",
            solution: "Draft: flooding is caused by blocked drainage channels and by building on waterways. Count: one sentence, two causes, no extra words. Write it fair.",
          },
        },
      ],
      keyPoints: [
        "Underline the demand before reading.",
        "Respect the sentence limit absolutely.",
        "Short plain sentences earn expression marks.",
        "No examples, opinions or outside knowledge.",
      ],
    },
  },
  {
    subjectSlug: "mathematics",
    lesson: {
      slug: "sets-probability-statistics",
      title: "Sets, probability and statistics",
      summary: "Venn diagrams, mean/median/mode, variance and the probability rules that recur yearly.",
      durationMinutes: 30,
      level: "Core",
      examWeight: "Very high yield",
      sections: [
        {
          heading: "Sets and Venn diagrams",
          body:
            "A set is a well-defined collection. For two sets, n(A ∪ B) = n(A) + n(B) − n(A ∩ B). Draw the diagram, fill the intersection first, then work outward.",
          bullets: [
            "Universal set ξ contains everything under discussion; A′ is the complement.",
              "Disjoint sets have empty intersection.",
            "In three-set problems, start from the centre (all three) and expand.",
            "n(A ∪ B ∪ C) = sum of singles − sum of pair-only intersections + all three.",
          ],
          example: {
            prompt: "In a class of 40, 25 offer Physics and 20 offer Chemistry; 8 offer neither. How many offer both?",
            solution: "Both = 25 + 20 − (40 − 8) = 45 − 32 = 13.",
          },
        },
        {
          heading: "Averages and spread",
          body:
            "Mean = sum ÷ count. Median = middle value of ordered data. Mode = most frequent. Range = max − min. Variance is the mean of squared deviations; standard deviation is its square root.",
          bullets: [
            "For grouped data, use class midpoints with frequencies.",
            "An outlier moves the mean far more than the median.",
            "Cumulative frequency graphs (ogives) give median, quartiles and percentiles.",
            "Variance = Σf(x − x̄)² ÷ Σf; standard deviation = √variance.",
          ],
        },
        {
          heading: "Probability rules",
          body:
            "Probability = required outcomes ÷ possible outcomes, between 0 and 1. For independent events multiply; for mutually exclusive events add.",
          bullets: [
            "P(not A) = 1 − P(A).",
            "Independent: P(A and B) = P(A) × P(B).",
            "Mutually exclusive: P(A or B) = P(A) + P(B).",
            "With replacement the probabilities stay constant; without replacement they change.",
          ],
          example: {
            prompt: "A bag has 4 red and 6 blue balls. Two are drawn without replacement. Find P(both blue).",
            solution: "(6/10) × (5/9) = 30/90 = 1/3.",
          },
        },
      ],
      keyPoints: [
        "Fill Venn diagrams from the intersection outward.",
        "Median resists outliers; the mean does not.",
        "Independent → multiply; mutually exclusive → add.",
        "Without replacement, denominators shrink.",
      ],
    },
  },
  {
    subjectSlug: "mathematics",
    lesson: {
      slug: "differentiation-integration",
      title: "Differentiation and integration in one sitting",
      summary: "Power rule, maxima/minima, and integration as reverse differentiation with area.",
      durationMinutes: 28,
      level: "Advanced",
      examWeight: "High yield",
      sections: [
        {
          heading: "Differentiating from first principles to the power rule",
          body:
            "Differentiation gives the gradient function. From first principles, dy/dx is the limit of the chord gradient. In practice, use the power rule: if y = axⁿ, then dy/dx = anxⁿ⁻¹.",
          bullets: [
            "Derivative of a constant is zero; derivative of x is 1.",
            "Differentiate term by term: d/dx(3x² + 2x − 5) = 6x + 2.",
            "Product and quotient rules are rarely needed at UTME level — expand first.",
            "Second derivative d²y/dx² determines the nature of a turning point.",
          ],
          example: {
            prompt: "Find dy/dx if y = 4x³ − 2x² + 7x − 1.",
            solution: "dy/dx = 12x² − 4x + 7.",
          },
        },
        {
          heading: "Maxima, minima and rates",
          body:
            "At a turning point dy/dx = 0. If d²y/dx² > 0 it is a minimum; if < 0, a maximum. Rate questions use the chain rule in words: multiply the rates together.",
          bullets: [
            "Solve dy/dx = 0, then test with the second derivative.",
            "Maximum area and minimum cost problems always start with one equation in one variable.",
            "For rates: dV/dt = dV/dr × dr/dt — write the chain before substituting.",
          ],
        },
        {
          heading: "Integration and area",
          body:
            "Integration reverses differentiation: ∫xⁿ dx = xⁿ⁺¹/(n+1) + C for n ≠ −1. The constant C appears in indefinite integrals and is found from a given point.",
          bullets: [
            "∫(2x + 3) dx = x² + 3x + C.",
            "Definite integrals evaluate F(b) − F(a); the constant cancels.",
            "Area under y = f(x) from a to b is ∫ₐᵇ f(x) dx (take absolute value where the curve dips below the axis).",
          ],
          example: {
            prompt: "Evaluate ∫₁² (3x² + 1) dx.",
            solution: "Antiderivative x³ + x. At 2: 10; at 1: 2. Area = 8.",
          },
        },
      ],
      keyPoints: [
        "Power rule: multiply by the power, reduce the power by one.",
        "dy/dx = 0 locates turning points; second derivative classifies them.",
        "Never forget +C in indefinite integrals.",
        "Definite integral = F(b) − F(a).",
      ],
    },
  },
  {
    subjectSlug: "physics",
    lesson: {
      slug: "waves-sound-light",
      title: "Waves, sound and light",
      summary: "Wave terms, the electromagnetic spectrum, mirrors, lenses and total internal reflection.",
      durationMinutes: 28,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Wave behaviour and terms",
          body:
            "Transverse waves vibrate perpendicular to travel (light, water ripples); longitudinal waves vibrate parallel (sound). The wave equation v = fλ connects speed, frequency and wavelength.",
          bullets: [
            "Amplitude = maximum displacement; period T = 1/f.",
            "Reflection, refraction, diffraction, interference and polarisation apply to all waves.",
            "Sound needs a medium; its speed is greatest in solids.",
            "Echoes: distance = (speed × time)/2 for the round trip.",
          ],
          example: {
            prompt: "A tuning fork of frequency 256 Hz produces sound of wavelength 1.34 m. Find the speed of sound.",
            solution: "v = fλ = 256 × 1.34 ≈ 343 m/s.",
          },
        },
        {
          heading: "Light: mirrors and lenses",
          body:
            "Plane mirrors give virtual, erect, same-size images. For curved mirrors and lenses use 1/f = 1/u + 1/v with the real-is-positive convention.",
          bullets: [
            "Concave mirrors converge; convex mirrors diverge and always give diminished virtual images.",
            "Convex lenses converge; concave lenses diverge.",
            "Magnification m = v/u = image height/object height.",
            "A lens of focal length 10 cm has power +10 dioptres (P = 100/f in cm).",
          ],
        },
        {
          heading: "Refraction and total internal reflection",
          body:
            "Snell's law: n = sin i / sin r for a ray entering a denser medium. Beyond the critical angle, light reflects totally inside the denser medium.",
          bullets: [
            "Critical angle c satisfies sin c = 1/n.",
            "Total internal reflection needs: denser-to-rarer boundary AND angle above critical.",
            "Applications: optical fibres, prism binoculars, sparkling diamonds, mirages.",
            "Dispersion splits white light; rainbow order is ROYGBIV.",
          ],
          example: {
            prompt: "Glass has refractive index 1.5. Find its critical angle.",
            solution: "sin c = 1/1.5 = 0.667, so c ≈ 41.8°.",
          },
        },
      ],
      keyPoints: [
        "v = fλ for every wave; sound needs a medium.",
        "Real-is-positive in mirror/lens formulas.",
        "TIR needs denser-to-rarer plus angle above critical.",
        "Power in dioptres = 100/focal length in cm.",
      ],
    },
  },
  {
    subjectSlug: "physics",
    lesson: {
      slug: "fields-atom-and-nucleus",
      title: "Fields, the atom and the nucleus",
      summary: "Gravitational and electric fields, thermionic emission, radioactivity and half-life.",
      durationMinutes: 26,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Gravitational and electric fields",
          body:
            "A field is a region where a mass or charge experiences force. Field strength g = F/m for gravity and E = F/q for electricity. Field lines point from positive to negative (electric) and toward masses (gravity).",
          bullets: [
            "Newton's law: F = Gm₁m₂/r²; Coulomb's law: F = kq₁q₂/r² — same inverse-square shape.",
            "Potential difference V = W/q; a charge gains energy qV crossing it.",
            "Capacitance C = Q/V; energy stored = ½QV = ½CV².",
            "Satellites stay up because gravity provides the centripetal force: v = √(gr) near Earth.",
          ],
        },
        {
          heading: "Electrons and thermionic emission",
          body:
            "Heated cathodes emit electrons (thermionic emission), the basis of cathode-ray tubes and valves. In a magnetic field, moving charges curve — the principle of the mass spectrograph and the CRO.",
          bullets: [
            "Specific charge e/m of the electron ≈ 1.76 × 10¹¹ C/kg.",
            "X-rays are produced when fast electrons strike a metal target; they are high-frequency EM waves.",
            "Photoelectric emission needs photon energy above the work function: hf = φ + KE(max).",
            "The CRO displays waveforms; its time-base controls the horizontal scale.",
          ],
        },
        {
          heading: "Radioactivity and half-life",
          body:
            "Unstable nuclei decay by emitting alpha (helium nuclei, stopped by paper), beta (electrons, stopped by aluminium) or gamma (EM waves, reduced by lead). Half-life is the time for half the nuclei to decay.",
          bullets: [
            "Alpha decay: mass number −4, atomic number −2. Beta decay: atomic number +1.",
            "After n half-lives, remaining fraction = (½)ⁿ.",
            "Uses: tracers, radiotherapy, smoke detectors (americium), carbon dating.",
            "Nuclear fission splits heavy nuclei; fusion joins light ones — both release binding energy (E = mc²).",
          ],
          example: {
            prompt: "A sample falls from 80 g to 10 g in 12 days. Find its half-life.",
            solution: "80 → 40 → 20 → 10 is 3 half-lives in 12 days, so half-life = 4 days.",
          },
        },
      ],
      keyPoints: [
        "Gravity and electrostatics share the inverse-square form.",
        "Photoelectric effect: hf = work function + max KE.",
        "Alpha, beta, gamma differ in penetration and charge.",
        "Remaining fraction after n half-lives = (½)ⁿ.",
      ],
    },
  },
  {
    subjectSlug: "chemistry",
    lesson: {
      slug: "electrolysis-and-cells",
      title: "Electrolysis and electrochemical cells",
      summary: "Discharge rules, Faraday's laws, cells versus electrolysis, and rust prevention.",
      durationMinutes: 26,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "What happens at each electrode",
          body:
            "In electrolysis, the cathode is negative (cations gain electrons: reduction) and the anode is positive (anions lose electrons: oxidation). OILRIG: oxidation is loss, reduction is gain.",
          bullets: [
            "Discharge series for cations: K⁺, Na⁺, Ca²⁺, Mg²⁺, Al³⁺ stay in solution (H⁺ discharged instead); Cu²⁺, Ag⁺ discharge readily.",
            "For anions: concentrated halides discharge at the anode; dilute solutions and SO₄²⁻/NO₃⁻ release oxygen.",
            "Electroplating coats the cathode (object to be plated) with metal from the anode or solution.",
            "Purification of copper uses impure anode, pure cathode, CuSO₄ electrolyte.",
          ],
          example: {
            prompt: "Predict the products of electrolysing concentrated NaCl solution (brine).",
            solution: "Cathode: hydrogen (Na⁺ stays, H⁺ discharged). Anode: chlorine (concentrated Cl⁻ discharged). Solution becomes NaOH — the chlor-alkali process.",
          },
        },
        {
          heading: "Faraday's laws and calculations",
          body:
            "First law: mass deposited is proportional to quantity of electricity (Q = It). Second law: masses deposited by the same charge are in ratio of chemical equivalents (molar mass ÷ valency).",
          bullets: [
            "1 Faraday = 96,500 C = 1 mole of electrons.",
            "Moles of electrons = It/96,500; divide by valency for moles of metal.",
            "Same current, same time: Ag⁺ (valency 1) deposits twice the moles of Cu²⁺ (valency 2) — compare masses via equivalents.",
          ],
          example: {
            prompt: "What mass of copper is deposited by 0.5 A for 1 hour? (Cu = 64, F = 96,500)",
            solution: "Q = 0.5 × 3600 = 1800 C = 0.01865 mol e⁻. Cu²⁺ needs 2 e⁻, so 0.00933 mol Cu = 0.597 g.",
          },
        },
        {
          heading: "Cells and corrosion",
          body:
            "A galvanic (voltaic) cell converts chemical energy to electrical energy spontaneously; electrolysis needs an external supply. The Daniell cell (Zn|Zn²⁺||Cu²⁺|Cu) has EMF ≈ 1.1 V with zinc as the negative terminal.",
          bullets: [
            "E°cell = E°cathode − E°anode (reduction potentials).",
            "Dry cells (Leclanché) and lead-acid accumulators are commercial examples.",
            "Rusting needs oxygen AND water; prevention: painting, oiling, galvanising (zinc coating), sacrificial protection, alloying (stainless steel).",
          ],
        },
      ],
      keyPoints: [
        "Cathode = reduction (gain); anode = oxidation (loss).",
        "Concentrated halides discharge at the anode.",
        "1 Faraday = 96,500 C per mole of electrons.",
        "Rusting needs both air and water.",
      ],
    },
  },
  {
    subjectSlug: "chemistry",
    lesson: {
      slug: "acids-bases-salts",
      title: "Acids, bases, salts and pH",
      summary: "Definitions, strength versus concentration, salt types, hydrolysis and titrations.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Three definitions, one exam",
          body:
            "Arrhenius: acids give H⁺ in water, bases give OH⁻. Brønsted–Lowry: acids donate protons, bases accept them. Lewis: acids accept electron pairs, bases donate them. Conjugate pairs differ by one H⁺.",
          bullets: [
            "Strong acids/bases ionise completely (HCl, H₂SO₄, NaOH); weak ones partially (CH₃COOH, NH₃).",
            "Strength ≠ concentration: a dilute strong acid is still strong.",
            "Amphiprotic substances (H₂O, HCO₃⁻) can act as acid or base.",
            "Normality = molarity × basicity (acids) or acidity (bases).",
          ],
        },
        {
          heading: "Salts: types and hydrolysis",
          body:
            "Normal salts (NaCl), acid salts (NaHSO₄), basic salts, double salts (alum) and complex salts. Hydrolysis of a dissolved salt can make the solution acidic, basic or neutral.",
          bullets: [
            "Strong acid + strong base → neutral salt solution (NaCl).",
            "Strong acid + weak base → acidic solution (NH₄Cl).",
            "Weak acid + strong base → basic solution (CH₃COONa).",
            "Water of crystallisation (e.g. CuSO₄·5H₂O) is lost on heating — hydrated blue to anhydrous white.",
          ],
        },
        {
          heading: "pH and titrations",
          body:
            "pH = −log[H⁺]. Each unit is a factor of 10. Indicators change colour at specific ranges: methyl orange (3.1–4.4), phenolphthalein (8.3–10.0).",
          bullets: [
            "Strong acid vs strong base: either indicator; phenolphthalein preferred.",
            "Weak acid vs strong base: phenolphthalein only.",
            "Strong acid vs weak base: methyl orange only.",
            "Weak acid vs weak base: no suitable indicator — use a pH meter.",
          ],
          example: {
            prompt: "25 cm³ of 0.1 M NaOH neutralises 20 cm³ of HCl. Find the acid concentration.",
            solution: "Moles base = 0.1 × 0.025 = 0.0025. Ratio 1:1, so [HCl] = 0.0025/0.02 = 0.125 M.",
          },
        },
      ],
      keyPoints: [
        "Strength is ionisation; concentration is amount per volume.",
        "Salt hydrolysis decides acidic/basic/neutral solutions.",
        "Match the indicator to the titration pair.",
        "pH steps of 1 mean ×10 in [H⁺].",
      ],
    },
  },
  {
    subjectSlug: "biology",
    lesson: {
      slug: "ecology-and-conservation",
      title: "Ecology: ecosystems, succession and human impact",
      summary: "Food chains and pyramids, nutrient cycles, succession, pollution and conservation in Nigeria.",
      durationMinutes: 26,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Feeding relationships and energy flow",
          body:
            "Producers trap light energy; primary consumers eat producers; secondary and tertiary consumers eat each other; decomposers recycle everything. Only about 10% of energy passes each level — hence pyramids of energy are always upright.",
          bullets: [
            "Food chains link feeding steps; food webs show the real interconnected feeding.",
            "Pyramids of numbers can invert (one tree feeding many insects); pyramids of energy cannot.",
            "Ecological niche = role + habitat + relationships of an organism.",
            "Biotic factors (predation, competition, disease) and abiotic factors (light, pH, salinity) control populations.",
          ],
          example: {
            prompt: "Explain why a food chain rarely exceeds five trophic levels.",
            solution: "Roughly 90% of energy is lost as heat, respiration and waste at each transfer, so too little remains to support another level.",
          },
        },
        {
          heading: "Cycles and succession",
          body:
            "Carbon cycles via photosynthesis, respiration, combustion and decomposition; nitrogen cycles via fixation, nitrification, denitrification and ammonification (Rhizobium, Nitrosomonas, Nitrobacter). Succession moves from pioneers to climax community.",
          bullets: [
            "Leguminous plants fix nitrogen through Rhizobium in root nodules.",
            "Denitrifying bacteria return nitrogen to the atmosphere, reducing fertility.",
            "Primary succession starts on bare rock; secondary starts after disturbance.",
            "A climax community (e.g. rainforest) is stable until disturbed.",
          ],
        },
        {
          heading: "Pollution and conservation in Nigeria",
          body:
            "Pollution questions expect the pollutant, the source and one control. Conservation questions expect the method and one Nigerian example.",
          bullets: [
            "Oil spillage (Niger Delta): control by pipeline maintenance, rapid cleanup, bioremediation.",
            "Gas flaring, refuse dumping, sewage in lagoons, industrial effluents, pesticide misuse.",
            "Conservation: national parks (Yankari, Cross River), game reserves, forest reserves, ranching, laws and education.",
            "Deforestation causes erosion, flooding, biodiversity loss and climate effects; afforestation reverses them.",
          ],
        },
      ],
      keyPoints: [
        "Energy pyramids are always upright (~10% transfer).",
        "Rhizobium fixes nitrogen in legume nodules.",
        "Succession runs pioneers → climax.",
        "Pollutant + source + control is the answer formula.",
      ],
    },
  },
  {
    subjectSlug: "biology",
    lesson: {
      slug: "reproduction-and-coordination",
      title: "Reproduction and coordination in plants and animals",
      summary: "Sexual and asexual reproduction, the nervous system, hormones and tropisms.",
      durationMinutes: 26,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Reproduction strategies",
          body:
            "Asexual reproduction (binary fission, budding, fragmentation, spores, vegetative propagation) is fast and uniform; sexual reproduction (gametes, fertilisation) is slower but creates variation for natural selection.",
          bullets: [
            "Flower parts: sepals, petals, stamens (anther + filament), carpels (stigma, style, ovary).",
            "Pollination (transfer) precedes fertilisation (fusion); double fertilisation is unique to flowering plants.",
            "Fruits develop from ovaries; seeds from ovules. Agents of dispersal: wind, water, animals, explosive.",
            "Placental mammals show internal fertilisation and parental care; external fertilisation needs water (fish, amphibians).",
          ],
        },
        {
          heading: "Nervous coordination",
          body:
            "The neurone (dendron, cell body, axon, myelin sheath, synapse) carries impulses. The CNS (brain + spinal cord) integrates; reflex arcs bypass the brain for speed.",
          bullets: [
            "Reflex arc: receptor → sensory neurone → spinal cord → motor neurone → effector.",
            "The cerebellum coordinates balance and movement; medulla controls heartbeat and breathing.",
            "Synapses pass impulses chemically in one direction only.",
            "Myelin sheath speeds transmission (saltatory conduction).",
          ],
        },
        {
          heading: "Hormones and plant responses",
          body:
            "Animal hormones travel in blood from glands: insulin/glucagon (pancreas, sugar), adrenaline (adrenal, emergency), thyroxine (thyroid, metabolism), auxins/gibberellins (plants, growth). Tropisms are directional growth responses.",
          bullets: [
            "Diabetes mellitus follows insulin deficiency or resistance.",
            "Phototropism (shoots to light), geotropism (roots downward), hydrotropism, thigmotropism.",
            "Auxins concentrate on the shaded side of shoots, causing bending toward light.",
            "Plant hormones also control dormancy, fruit ripening and leaf fall.",
          ],
        },
      ],
      keyPoints: [
        "Asexual = fast and uniform; sexual = variation.",
        "Reflex arcs bypass the brain.",
        "Insulin lowers blood sugar; adrenaline prepares emergency action.",
        "Tropisms are directional growth movements.",
      ],
    },
  },
  {
    subjectSlug: "economics",
    lesson: {
      slug: "national-income-trade-finance",
      title: "National income, trade and public finance",
      summary: "GDP measurement, balance of payments, exchange rates, taxation and budgets.",
      durationMinutes: 28,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Measuring national income",
          body:
            "GDP is the value of final goods and services produced within a country in a year. GNP adds net income from abroad. Three approaches — output, income, expenditure — should agree in theory.",
          bullets: [
            "Nominal GDP uses current prices; real GDP removes inflation using a base year.",
            "Per capita income = national income ÷ population — an average, not a distribution.",
            "Problems: subsistence output, unpaid work, double counting, informal economy, price changes.",
            "Uses: growth comparison, policy, standard-of-living estimates (with caution).",
          ],
          example: {
            prompt: "Country X has GDP ₦500bn and population 50m. Find per capita income.",
            solution: "₦500bn ÷ 50m = ₦10,000 per person.",
          },
        },
        {
          heading: "International trade and payments",
          body:
            "Trade rests on comparative advantage: even without absolute advantage, specialisation and exchange raise total output. The balance of payments records all transactions; the exchange rate is the price of one currency in another.",
          bullets: [
            "Favourable balance of trade = exports exceed imports (visible goods).",
            "Devaluation lowers the external value deliberately to boost exports.",
            "Arguments for protection: infant industries, employment, security; against: retaliation, inefficiency, higher prices.",
            "ECOWAS promotes West African integration; Nigeria trades mostly in crude oil.",
          ],
        },
        {
          heading: "Public finance",
          body:
            "Government raises revenue (tax, borrowing, fees, oil receipts) and spends it (recurrent vs capital). Taxation follows canons: equity, certainty, convenience, economy.",
          bullets: [
            "Direct taxes (PAYE, company tax) fall on income; indirect taxes (VAT, excise) fall on spending.",
            "Progressive tax takes a higher proportion from higher incomes; regressive takes more from the poor.",
            "Budget surplus (revenue > spending), deficit, balanced.",
            "National debt: internal vs external; servicing costs constrain future spending.",
          ],
        },
      ],
      keyPoints: [
        "GDP counts final output inside borders; GNP adds net foreign income.",
        "Per capita income hides distribution.",
        "Devaluation is deliberate; depreciation is market-driven.",
        "Progressive taxes rise with income proportion.",
      ],
    },
  },
  {
    subjectSlug: "government",
    lesson: {
      slug: "military-democracy-foreign-policy",
      title: "Military rule, democracy and Nigeria in the world",
      summary: "Coups and transitions, democratic features, foreign policy and international organisations.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Military rule in Nigeria",
          body:
            "Military interventions (1966, 1975, 1983, 1985, 1993) are studied by cause, character and consequence. Military regimes rule by decree, suspend constitutions and centralise power, but often cite corruption and indiscipline.",
          bullets: [
            "First coup: January 1966 (Nzeogwu and others); counter-coup July 1966 brought Gowon.",
            "Civil war 1967–1970 followed the creation of 12 states and Biafra's secession.",
            "Murtala/Obasanjo (1975–79) returned power to civilians in the Second Republic.",
            "Babangida annulled the June 12, 1993 election; Abacha ruled until 1998; Abdulsalami conducted the 1999 transition.",
          ],
        },
        {
          heading: "Democracy and its features",
          body:
            "Democracy means government by the consent of the governed, expressed through periodic, free and fair elections. Pillars include rule of law, separation of powers, fundamental rights, free press and an independent judiciary.",
          bullets: [
            "Nigeria's Fourth Republic began 29 May 1999 (Democracy Day, now June 12).",
            "Demerits of democracy examined: slow decisions, cost of elections, tyranny of the majority risk.",
            "Electoral bodies: FEDECO (1978), NEC, NECON, INEC (1998–date).",
          ],
        },
        {
          heading: "Foreign policy and organisations",
          body:
            "Nigeria's foreign policy centres on Africa (Afrocentrism), non-alignment, peaceful settlement and economic diplomacy. Memberships test well: UN, AU, ECOWAS, Commonwealth, OPEC.",
          bullets: [
            "ECOWAS (1975, Lagos treaty): free movement, trade, ECOMOG peacekeeping.",
            "AU replaced the OAU in 2002; Nkrumah championed continental unity.",
            "Nigeria's peacekeeping (Liberia, Sierra Leone, Sudan) is a favourite question.",
            "OPEC coordinates petroleum policies; Nigeria is a prominent member.",
          ],
        },
      ],
      keyPoints: [
        "January 1966 first coup; civil war 1967–1970.",
        "June 12, 1993 annulment; Fourth Republic from 1999.",
        "Democracy = consent + periodic genuine elections.",
        "ECOWAS 1975; AU replaced OAU in 2002.",
      ],
    },
  },
  {
    subjectSlug: "literature-in-english",
    lesson: {
      slug: "set-text-skills",
      title: "Set-text skills: African prose and drama",
      summary: "Theme, character and technique answers that work for any recommended text.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Answer any theme question",
          body:
            "Examiners rotate texts but repeat task types. A theme answer needs: a one-line definition of the theme, two characters or events that carry it, one technique the writer uses, and a concluding judgement.",
          bullets: [
            "Frequent themes: colonialism and its aftermath, corruption, gender, generational conflict, tradition versus change, exile and identity.",
            "Never retell the plot beyond the minimum needed as evidence.",
            "Name the technique: symbolism, irony, foreshadowing, flashback, parallelism.",
            "End with what the writer seems to recommend or condemn.",
          ],
          example: {
            prompt: "Discuss the theme of corruption in any novel you have studied.",
            solution:
              "Define corruption as abuse of office for gain. Cite two scenes (a bribe demanded, merit subverted). Note the satiric tone or symbolism used. Conclude with the novel's warning about national decay.",
          },
        },
        {
          heading: "Answer any character question",
          body:
            "Trait → evidence → function. State the trait, quote or cite the action, then explain what the character contributes to theme or plot.",
          bullets: [
            "Round characters change; flat characters embody one trait.",
            "The protagonist drives the action; the antagonist opposes it; the foil highlights another by contrast.",
            "Use the character's decisions at crisis points, not their appearance.",
            "Three traits with evidence beat six adjectives with none.",
          ],
        },
        {
          heading: "Unseen prose and drama extracts",
          body:
            "For extracts you have never seen, answer only from the passage: identify speaker cues, stage directions, and the immediate conflict. Do not import the whole play.",
          bullets: [
            "Stage directions in brackets are instructions, not decoration.",
            "Track who wants what in the scene — that is the conflict.",
            "Diction (word choice) reveals class, mood and relationships.",
            "If asked for the theme of an extract, generalise from this scene only.",
          ],
        },
      ],
      keyPoints: [
        "Theme answer: definition, two evidences, technique, judgement.",
        "Character answer: trait → evidence → function.",
        "Technique named beats plot retold.",
        "Extracts: answer from the passage alone.",
      ],
    },
  },
  {
    subjectSlug: "christian-religious-studies",
    lesson: {
      slug: "jesus-and-early-church",
      title: "The life and teachings of Jesus and the early church",
      summary: "Parables, miracles, the Sermon on the Mount, Pentecost and Paul's journeys.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Teachings: Sermon and parables",
          body:
            "The Sermon on the Mount (Matthew 5–7) contains the Beatitudes, the Lord's Prayer and the ethic of love of enemies. Parables teach one central truth each — identify it before adding detail.",
          bullets: [
            "The Good Samaritan: neighbourliness crosses ethnic and religious lines.",
            "The Prodigal Son: repentance and the Father's forgiveness.",
            "The Sower: responses to the word (wayside, rocky, thorny, good soil).",
            "The Talents: faithful use of gifts; condemnation of sloth.",
          ],
        },
        {
          heading: "Miracles and their meaning",
          body:
            "Miracles demonstrate compassion and authority, never magic for show. Group them: over nature (calming the storm, feeding 5,000), healing (leper, blind Bartimaeus, paralytic), and raising the dead (Jairus' daughter, Lazarus).",
          bullets: [
            "Feeding of the 5,000 appears in all four gospels — note its significance.",
            "Faith of the recipient or intercessor is repeatedly emphasised.",
            "Miracles authenticate Jesus as Messiah and foreshadow the kingdom.",
          ],
        },
        {
          heading: "Death, resurrection and the early church",
          body:
            "Trials before the Sanhedrin, Herod and Pilate; crucifixion at Golgotha; resurrection appearances; the Great Commission; ascension. Pentecost (Acts 2) births the church with Peter's sermon and 3,000 converts.",
          bullets: [
            "Pentecost: Holy Spirit as tongues of fire; speaks to all nations.",
            "Stephen: first martyr; Saul's conversion on the Damascus road follows.",
            "Paul's journeys: Cyprus, Galatia, Macedonia, Greece, arrest in Jerusalem, Rome.",
            "The Jerusalem council (Acts 15) freed Gentile converts from circumcision.",
          ],
          example: {
            prompt: "State two significances of Pentecost for the church today.",
            solution:
              "It empowers witness — ordinary believers spoke boldly — and it founds the church's universality, gathering all nations and languages into one body.",
          },
        },
      ],
      keyPoints: [
        "One parable, one central truth.",
        "Group miracles: nature, healing, raising the dead.",
        "Pentecost = empowerment + universality.",
        "Acts 15 settled the Gentile question.",
      ],
    },
  },
  {
    subjectSlug: "commerce",
    lesson: {
      slug: "marketing-and-consumer-protection",
      title: "Marketing, consumer protection and e-commerce",
      summary: "Marketing mix, channels of distribution, consumer rights and modern trade.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "The marketing mix (4Ps)",
          body:
            "Product, Price, Place and Promotion. Examination questions give a business situation and ask which P is wrong or missing.",
          bullets: [
            "Product: quality, branding, packaging, labelling, warranty.",
            "Price: skimming (high entry), penetration (low entry), cost-plus, competitive.",
            "Place: channels — manufacturer → wholesaler → retailer → consumer.",
            "Promotion: advertising, personal selling, sales promotion, publicity.",
            "Each intermediary earns a margin but adds a utility (time, place, possession).",
          ],
        },
        {
          heading: "Consumer protection",
          body:
            "Consumers need protection because sellers know more (information asymmetry). Rights: safety, information, choice, redress, education, healthy environment.",
          bullets: [
            "Nigeria's consumer agency is the Federal Competition and Consumer Protection Commission (FCCPC).",
            "SON (Standards Organisation of Nigeria) certifies product standards (MANCAP, SONCAP).",
            "NAFDAC regulates food, drugs and related products.",
            "Redress includes refund, replacement, repair and compensation.",
          ],
        },
        {
          heading: "E-commerce and modern trade",
          body:
            "Electronic commerce conducts trade through the internet: B2B, B2C, C2C. Payment systems include cards, transfers, mobile money and pay-on-delivery.",
          bullets: [
            "Advantages: wider market, lower overheads, 24-hour trading, price comparison.",
            "Risks: fraud, failed delivery, data theft, no physical inspection.",
            "Documents adapt: electronic invoices, order confirmations, tracking numbers.",
          ],
        },
      ],
      keyPoints: [
        "4Ps: product, price, place, promotion.",
        "FCCPC protects consumers; SON sets standards; NAFDAC regulates food/drugs.",
        "Channels add utilities at each stage.",
        "E-commerce risks centre on trust and delivery.",
      ],
    },
  },
  {
    subjectSlug: "financial-accounting",
    lesson: {
      slug: "final-accounts-and-bank-reconciliation",
      title: "Final accounts and bank reconciliation",
      summary: "Trading, profit and loss, balance sheet, and reconciling cash book with bank statement.",
      durationMinutes: 26,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Trading, profit and loss account",
          body:
            "The trading account finds gross profit: sales − cost of sales, where cost of sales = opening stock + purchases − closing stock (+ carriage inwards, − returns). The profit and loss account deducts expenses and adds other income to give net profit.",
          bullets: [
            "Gross profit = sales − cost of goods sold.",
            "Carriage inwards is added to purchases; carriage outwards is a selling expense.",
            "Discounts allowed (expense) vs discounts received (income).",
            "Net profit belongs to the owner: added to capital, drawings deducted.",
          ],
          example: {
            prompt: "Sales ₦200,000; opening stock ₦20,000; purchases ₦120,000; closing stock ₦30,000. Find gross profit.",
            solution: "Cost of sales = 20,000 + 120,000 − 30,000 = 110,000. Gross profit = 200,000 − 110,000 = ₦90,000.",
          },
        },
        {
          heading: "The balance sheet",
          body:
            "A statement (not an account) of assets, liabilities and capital at a date: Capital + Liabilities = Fixed + Current assets. Order: fixed assets, then current; capital, then long-term, then current liabilities.",
          bullets: [
            "Working capital = current assets − current liabilities.",
            "Prepayments are current assets; accruals are current liabilities.",
            "Provision for depreciation accumulates against the asset's cost.",
            "Drawings reduce capital; net profit increases it.",
          ],
        },
        {
          heading: "Bank reconciliation",
          body:
            "The cash book and bank statement disagree because of timing and unrecorded items. Start from one balance and adjust for the other side's items to reach agreement.",
          bullets: [
            "Unpresented cheques: in cash book, not yet on statement — subtract from bank balance.",
            "Uncredited lodgements (deposits in transit): add to bank balance.",
            "Bank charges, standing orders, direct debits: update the cash book first.",
            "Dishonoured cheques are entered back in the cash book.",
          ],
        },
      ],
      keyPoints: [
        "Cost of sales = opening + purchases − closing.",
        "Balance sheet balances: capital + liabilities = assets.",
        "Working capital = current assets − current liabilities.",
        "Unpresented cheques vs uncredited lodgements decide the adjustment.",
      ],
    },
  },
  {
    subjectSlug: "geography",
    lesson: {
      slug: "population-settlement-economy",
      title: "Population, settlement and economic activities",
      summary: "Density factors, settlement patterns, and primary to quaternary activities with Nigerian cases.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Population: distribution and change",
          body:
            "Population density = population ÷ area. Distribution follows relief, climate, water, soils, minerals, transport and history. Change comes from births, deaths and migration.",
          bullets: [
            "Nigeria is Africa's most populous country; Kano and Lagos are the densest states.",
            "High fertility plus falling mortality gives rapid growth and a youthful pyramid.",
            "Rural–urban migration (push: poor services; pull: jobs, schools) drives urbanisation.",
            "Problems of rapid growth: unemployment, slums, pressure on schools and hospitals.",
          ],
        },
        {
          heading: "Settlements: types and patterns",
          body:
            "Rural settlements farm, fish or mine; urban settlements trade, manufacture and administer. Patterns: nucleated (defence, water point), dispersed (plantations, rugged land), linear (roads, rivers, railways).",
          bullets: [
            "Urban functions: commercial, industrial, administrative, residential, transport.",
            "Conurbation joins neighbouring towns; a megacity exceeds 10 million (Lagos).",
            "Urban problems: congestion, housing shortage, waste, flooding, crime.",
            "Planned responses: satellite towns, //layout schemes, urban renewal.",
          ],
        },
        {
          heading: "Economic activities by level",
          body:
            "Primary (farming, fishing, mining, lumbering), secondary (manufacturing, construction), tertiary (trade, transport, services), quaternary (ICT, research). Nigeria's economy rests on oil, agriculture and a growing services sector.",
          bullets: [
            "Cash crops: cocoa (south-west), groundnut (north), oil palm (south-east/south-south).",
            "Minerals: petroleum (Niger Delta), coal (Enugu), tin (Jos), limestone (Sokoto/Ewekoro).",
            "Industries cluster near raw materials, markets, power and ports (Lagos, Kano, Port Harcourt).",
            "Tourism potentials: Yankari, Obudu, Osun-Osogbo grove, Sukur landscape.",
          ],
        },
      ],
      keyPoints: [
        "Density = population ÷ area; explain distribution with physical + human factors.",
        "Nucleated, dispersed and linear patterns each have causes.",
        "Push vs pull explains rural–urban migration.",
        "Classify activities primary → quaternary with Nigerian examples.",
      ],
    },
  },
  {
    subjectSlug: "agricultural-science",
    lesson: {
      slug: "animal-husbandry-and-farm-management",
      title: "Animal husbandry and farm management",
      summary: "Breeds, feeding, health, and the records and decisions of a profitable farm.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Livestock types and systems",
          body:
            "Cattle (White Fulani, Sokoto Gudali, N'dama — trypanotolerant), sheep (Uda, Yankasa, Balami), goats (Sokoto Red, West African Dwarf), pigs (Large White, Landrace), poultry (Rhode Island Red, Leghorn, broilers, layers). Systems run from extensive (nomadic) to intensive (battery, deep litter).",
          bullets: [
            "N'dama resists trypanosomiasis — key for tsetse zones.",
            "Layers produce eggs; broilers produce meat; dual-purpose breeds do both moderately.",
            "Ranching, pastoral nomadism and transhumance suit different ecologies.",
            "Paddocking, rotational grazing and zero-grazing manage pasture.",
          ],
        },
        {
          heading: "Feeding, health and reproduction",
          body:
            "Feed classes: carbohydrates (energy), proteins (growth), minerals, vitamins, water. Diseases spread by contact, vectors and feed; control by sanitation, vaccination, quarantine and culling.",
          bullets: [
            "Ruminants (cattle, sheep, goats) digest fibre in the rumen; poultry are monogastric.",
            "Newcastle disease (poultry) and foot-and-mouth (cloven-hoofed) are highly contagious notifiable diseases.",
            "Signs of heat: restlessness, mounting, mucus discharge, bellowing.",
            "Gestation: cow ~283 days, sow ~114 days (3-3-3), ewe/doe ~150 days.",
          ],
        },
        {
          heading: "Farm records and management decisions",
          body:
            "Records turn farming into business: inventory, production, sales, labour, profit and loss. Decisions use costs (fixed vs variable), revenue and profit.",
          bullets: [
            "Profit = total revenue − total cost; break-even where they are equal.",
            "Farm planning answers what, how much, how and for whom to produce.",
            "Cooperatives help farmers access credit, inputs and markets.",
            "Extension services (ADPs) carry research to farmers.",
          ],
        },
      ],
      keyPoints: [
        "Match breed to purpose and ecology.",
        "Ruminants vs monogastrics decides feeding.",
        "Gestation lengths are favourite recall questions.",
        "Records → costs → profit decisions.",
      ],
    },
  },
  {
    subjectSlug: "further-mathematics",
    lesson: {
      slug: "calculus-differentiation-integration",
      title: "Calculus: differentiation, integration and kinematics",
      summary: "Chain, product and quotient rules, definite integrals, and motion with calculus.",
      durationMinutes: 30,
      level: "Advanced",
      examWeight: "High yield",
      sections: [
        {
          heading: "Advanced differentiation",
          body:
            "Beyond the power rule: chain rule for composite functions, product rule for multiplied functions, quotient rule for division. Choose by structure: brackets → chain; two functions multiplied → product; divided → quotient.",
          bullets: [
            "Chain: d/dx f(g(x)) = f′(g)·g′. Example: d/dx(2x+1)⁵ = 10(2x+1)⁴.",
            "Product: (uv)′ = u′v + uv′.",
            "Quotient: (u/v)′ = (u′v − uv′)/v².",
            "Differentiate logarithmic and simple trigonometric functions where the syllabus requires.",
          ],
          example: {
            prompt: "Differentiate y = x²(3x − 1).",
            solution: "Product rule: u = x², v = 3x − 1. y′ = 2x(3x − 1) + x²(3) = 9x² − 2x.",
          },
        },
        {
          heading: "Definite integrals and area",
          body:
            "Definite integrals evaluate change and area. Substitute to simplify where needed; symmetric limits of odd functions give zero.",
          bullets: [
            "∫ₐᵇ f(x) dx = F(b) − F(a).",
            "Area between curve and axis: integrate the absolute value across sign changes.",
            "Volume of revolution (about x-axis): π∫y² dx.",
          ],
        },
        {
          heading: "Kinematics with calculus",
          body:
            "Displacement → velocity → acceleration by differentiation; reverse by integration with initial conditions fixing the constants.",
          bullets: [
            "v = ds/dt; a = dv/dt = d²s/dt².",
            "Given a(t), integrate twice, using s(0) and v(0).",
            "Maximum displacement occurs where v = 0 (and a < 0).",
          ],
          example: {
            prompt: "A particle has s = t³ − 6t² + 9t. Find when it is instantaneously at rest.",
            solution: "v = 3t² − 12t + 9 = 0 → t² − 4t + 3 = 0 → t = 1 s or 3 s.",
          },
        },
      ],
      keyPoints: [
        "Structure decides the rule: brackets, product or quotient.",
        "Definite integrals need limits applied as F(b) − F(a).",
        "v = ds/dt; integrate with initial conditions to return.",
        "Stationary points come from v = 0.",
      ],
    },
  },
  {
    subjectSlug: "computer-studies",
    lesson: {
      slug: "software-programming-data",
      title: "Software, programming and data processing",
      summary: "System vs application software, program development steps, and the data processing cycle.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "System and application software",
          body:
            "System software manages the hardware (operating systems, utilities, translators); application software serves the user (word processors, spreadsheets, browsers). The OS handles memory, processes, files and devices.",
          bullets: [
            "Examples of OS: Windows, Linux, macOS, Android.",
            "Utilities: antivirus, backup, compression, disk defragmenter.",
            "Translators: compilers (whole program), interpreters (line by line), assemblers.",
            "Open-source software can be studied and modified; proprietary cannot.",
          ],
        },
        {
          heading: "Program development",
          body:
            "Problem definition → algorithm → flowchart or pseudocode → coding → compilation → testing/debugging → documentation → maintenance. Algorithms must be finite, definite and effective.",
          bullets: [
            "Flowchart symbols: oval (start/stop), parallelogram (input/output), rectangle (process), diamond (decision).",
            "Pseudocode reads like structured English.",
            "Bugs are errors; debugging removes them; testing uses sample and boundary data.",
            "High-level languages (Python, Java) are portable; machine language is fastest.",
          ],
        },
        {
          heading: "Data processing cycle",
          body:
            "Input → processing → output → storage, with feedback. Data (raw facts) becomes information (processed, meaningful) only after processing.",
          bullets: [
            "Methods: batch, real-time, timesharing, distributed.",
            "Files: master (permanent), transaction (updates), backup.",
            "Threats: viruses, worms, phishing, hacking; defences: antivirus, firewall, passwords, encryption, backups.",
          ],
        },
      ],
      keyPoints: [
        "OS manages hardware; applications serve users.",
        "Compilers translate whole programs; interpreters go line by line.",
        "Algorithm → flowchart → code → test → document.",
        "Data + processing = information.",
      ],
    },
  },
  {
    subjectSlug: "history",
    lesson: {
      slug: "precolonial-to-1914",
      title: "Pre-colonial Nigeria and the path to 1914",
      summary: "Hausa states, Kanem-Borno, Oyo, Benin and Igbo systems, then the colonial takeover.",
      durationMinutes: 24,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "States and systems before colonialism",
          body:
            "Match each group to its political system, economy and signature institution. Questions ask 'which of the following is associated with...?'",
          bullets: [
            "Hausa states (Kano, Katsina, Zazzau, Gobir...): emirate system after the 1804 Sokoto jihad of Usman dan Fodio.",
            "Kanem-Borno: long-lived Sahelian empire; Mai Idris Alooma (16th century) famed for reforms and military.",
            "Oyo: Alaafin with checks by the Oyomesi council and the Bashorun; cavalry-based expansion.",
            "Benin: Ogiso then Oranmiyan dynasty; Oba with guilds; famous bronze art.",
            "Igbo: largely decentralised — village assemblies, age grades, titled societies (Nze na Ozo), oracles (Arochukwu).",
          ],
        },
        {
          heading: "Economy and society",
          body:
            "Trans-Saharan trade (kola, gold, salt, slaves) enriched the north; Atlantic trade enriched the coast. Long-distance trade, crafts, agriculture and festivals organised life.",
          bullets: [
            "Kano's dye pits and leatherwork; Nupe brass; Awka blacksmithing.",
            "The slave trade's abolition shifted commerce to 'legitimate' trade (palm oil, groundnuts).",
            "Missionaries brought Christianity, Western education and the printing press.",
          ],
        },
        {
          heading: "The colonial takeover",
          body:
            "Company rule (Royal Niger Company charter 1886), then protectorates: Lagos colony (1861), Oil Rivers/Niger Coast, Northern and Southern Protectorates (1900). Lugard's 1914 amalgamation joined North and South for administrative and financial reasons.",
          bullets: [
            "Berlin Conference 1884–85 set the rules of partition.",
            "Resistance: Nana of Itsekiri, Jaja of Opobo, Sultan Attahiru of Sokoto, Aba women later in 1929.",
            "Amalgamation reasons: finance (the North's deficit), railways, unified administration.",
          ],
        },
      ],
      keyPoints: [
        "Match group → system → signature institution.",
        "Sokoto jihad 1804 transformed Hausaland.",
        "Oyo checked the Alaafin through the Oyomesi.",
        "Amalgamation 1914: administrative and financial motives.",
      ],
    },
  },
  {
    subjectSlug: "home-economics",
    lesson: {
      slug: "clothing-and-consumer",
      title: "Clothing, textiles and the wise consumer",
      summary: "Fibres and fabrics, garment care labels, and consumer rights in the market.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Fibres and fabrics",
          body:
            "Natural fibres (cotton, wool, silk, linen) come from plants or animals; synthetic fibres (nylon, polyester, acrylic) from chemicals. Weaves (plain, twill, satin) and knits decide appearance and use.",
          bullets: [
            "Cotton: absorbent, cool, creases; ideal for tropical wear.",
            "Wool: warm, elastic, shrinks; needs gentle care.",
            "Polyester: strong, crease-resistant, non-absorbent; blends improve cotton.",
            "Burning test: cotton burns with an afterglow and paper smell; synthetics melt into beads.",
          ],
        },
        {
          heading: "Garment construction and care",
          body:
            "Patterns, seams and finishes determine fit and durability. Care labels use symbols for washing, bleaching, drying, ironing and dry-cleaning — learn to read them.",
          bullets: [
            "French seams enclose raw edges; best for transparent fabrics.",
            "Pressing (up-and-down) differs from ironing (sliding).",
            "Stain removal: treat fresh stains first; match solvent to stain type.",
            "Storage: clean, dry, aired; camphor or naphthalene against insects.",
          ],
        },
        {
          heading: "The wise consumer",
          body:
            "Consumers face adulteration, misleading advertising, short measure and expired goods. Protection comes from knowledge, standards and redress.",
          bullets: [
            "Consumer rights: safety, information, choice, redress, education.",
            "SON and NAFDAC certify standards and consumables in Nigeria.",
            "Read labels: content, size, expiry, instructions, manufacturer.",
            "Budget clothing money like food money: needs before wants.",
          ],
        },
      ],
      keyPoints: [
        "Natural vs synthetic fibres and their properties.",
        "Burning test identifies fibre families.",
        "Read care-label symbols before washing.",
        "SON/NAFDAC protect Nigerian consumers.",
      ],
    },
  },
  {
    subjectSlug: "fine-art",
    lesson: {
      slug: "drawing-painting-crafts",
      title: "Drawing, painting and crafts",
      summary: "Still life, perspective, colour mixing and Nigerian craft traditions.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Drawing foundations",
          body:
            "Still-life drawing tests observation: proportion, tone (shading), texture and composition. Perspective creates depth: one-point (roads, corridors), two-point (buildings at angles).",
          bullets: [
            "Outline first in light lines; correct proportion before shading.",
            "Hatching, cross-hatching, stippling and blending build tone.",
            "Horizon line = eye level; vanishing points sit on it.",
            "Foreground is detailed and dark; background is pale and simple (aerial perspective).",
          ],
        },
        {
          heading: "Painting and colour",
          body:
            "Watercolour is transparent; poster colour (gouache) is opaque; oils blend slowly; acrylics dry fast. Mix secondaries from primaries; neutrals from complements.",
          bullets: [
            "Warm colours advance; cool colours recede.",
            "Tint = colour + white; shade = colour + black; tone = colour + grey.",
            "Wash, wet-on-wet, dry brush and impasto are core techniques.",
            "Clean brushes immediately; work light to dark in watercolour.",
          ],
        },
        {
          heading: "Nigerian crafts",
          body:
            "Craft questions name the material and the producing area. Learn the pairs.",
          bullets: [
            "Pottery: Abuja (Ladi Kwali tradition), Ilorin, Benin.",
            "Textiles: adire (Yoruba indigo dyeing), aso-oke weaving, Kano dye pits.",
            "Woodcarving: Awka, Benin, Osogbo; calabash decoration in the north.",
            "Beadwork: Bida glass beads; Benin coral regalia.",
          ],
        },
      ],
      keyPoints: [
        "Proportion before shading; tone before detail.",
        "One-point vs two-point perspective use cases.",
        "Tint/shade/tone definitions.",
        "Craft = material + producing area.",
      ],
    },
  },
  {
    subjectSlug: "french",
    lesson: {
      slug: "passe-compose-futur-conversation",
      title: "Passé composé, futur and everyday conversation",
      summary: "Compound past with avoir/être, near and simple future, and market/school dialogues.",
      durationMinutes: 22,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Le passé composé",
          body:
            "Past tense = present of avoir or être + past participle. Most verbs use avoir; verbs of movement and reflexives use être (with agreement).",
          bullets: [
            "Regular participles: parlé, fini, vendu.",
            "Avoir verbs: J'ai mangé, Tu as fini, Ils ont vendu.",
            "Être verbs (DR MRS VANDERTRAMP set): Je suis allé(e), Elle est venue.",
            "Agreement with être: add -e (feminine), -s (plural).",
          ],
          example: {
            prompt: "Complete: Elles ____ (partir) hier.",
            solution: "Partir uses être: Elles sont parties hier — feminine plural agreement.",
          },
        },
        {
          heading: "Le futur",
          body:
            "Near future = aller + infinitive (Je vais étudier). Simple future adds endings -ai, -as, -a, -ons, -ez, -ont to the infinitive (or irregular stem).",
          bullets: [
            "Parler → je parlerai, tu parleras, il parlera.",
            "Irregular stems: être → ser-, avoir → aur-, aller → ir-, faire → fer-.",
            "Use the near future for close plans, simple future for distant or formal ones.",
          ],
        },
        {
          heading: "Everyday conversation",
          body:
            "Market, school and home dialogues recycle the same verbs: acheter, vendre, coûter, vouloir, pouvoir, devoir.",
          bullets: [
            "C'est combien ? / Ça coûte combien ? — How much is it?",
            "Je voudrais… — I would like… (polite requests).",
            "Il y a… / Il n'y a pas de… — There is/are…",
            "Time: Quelle heure est-il ? Il est huit heures et demie.",
          ],
        },
      ],
      keyPoints: [
        "Passé composé = avoir/être + participle.",
        "Être verbs agree in gender and number.",
        "Future endings: -ai, -as, -a, -ons, -ez, -ont.",
        "Market verbs: acheter, vendre, coûter, vouloir.",
      ],
    },
  },
  {
    subjectSlug: "yoruba",
    lesson: {
      slug: "verbs-tenses-sentences",
      title: "Verbs, tenses and sentence structure",
      summary: "Verb phrases, tense/aspect markers, and simple, compound and complex sentences.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Ìṣe (verbs) and their markers",
          body:
            "Yoruba verbs do not conjugate; tense and aspect come from markers placed before the verb. Master the common markers and their meanings.",
          bullets: [
            "ń / máa ń — continuous/habitual: Ó ń lọ (He is going / goes).",
            "ti — perfective: Ó ti lọ (He has gone).",
            "yóò / á — future: Ó yóò lọ (He will go).",
            "ṣẹ̀ṣẹ̀ — just completed: Ó ṣẹ̀ṣẹ̀ dé (He just arrived).",
            "Negative: kò (past/present), má (imperative/future): Kò lọ (He did not go).",
          ],
        },
        {
          heading: "Sentence types",
          body:
            "Classify sentences by structure and by function. Questions often ask for the type of a given sentence.",
          bullets: [
            "Gbólóhùn rírọrùn — simple sentence (one clause).",
            "Gbólóhùn yíyípo / àsopọ̀ — compound/complex sentences joined by conjunctions (àti, ṣùgbọ́n, nítorí, bí).",
            "By function: àṣẹ (command), ìbéèrè (question), ìṣe (statement), ìbánújẹ́/ayọ̀ (exclamatory).",
            "Question markers: ṣé, ǹjẹ́, àbí, sé.",
          ],
        },
        {
          heading: "Nouns, pronouns and agreement",
          body:
            "Yoruba has no gender or plural inflection on nouns; number and definiteness come from context and determiners.",
          bullets: [
            "Pronouns: èmi (I), ìwọ (you), òun (he/she), àwa (we), ẹ̀yin (you pl.), àwọn (they).",
            "Plurality by àwọn or numerals: àwọn ọmọ (the children).",
            "Possession by juxtaposition or tí: ilé ìwọ / ilé tí ìwọ (your house).",
            "Adjectives follow nouns: aṣọ pupa (red cloth).",
          ],
        },
      ],
      keyPoints: [
        "Tense lives in markers: ń, ti, yóò, ṣẹ̀ṣẹ̀.",
        "Negation: kò (statements), má (commands).",
        "Classify by structure and by function.",
        "Adjectives follow nouns.",
      ],
    },
  },
  {
    subjectSlug: "igbo",
    lesson: {
      slug: "igbo-grammar-sentences",
      title: "Grammar: nouns, verbs and sentence patterns",
      summary: "Noun classes, verb roots with suffixes, and statement/question/negative forms.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "Nouns and pronouns",
          body:
            "Igbo nouns carry inherent tone. Pronouns change by position (subject vs object) — a favourite objective area.",
          bullets: [
            "Subject pronouns: m (I), ị (you), ọ (he/she), anyị (we), unu (you pl.), ha (they).",
            "The noun prefix a-/e-/i-/o-/ọ-/u- often marks infinitives and verbal nouns.",
            "Plurals use ụmụ (children/people) or numerals: ụmụaka (children).",
            "Demonstratives: a (this), ahụ (that).",
          ],
        },
        {
          heading: "Verbs: roots and suffixes",
          body:
            "Igbo verbs are roots extended by suffixes that carry tense, aspect and negation. Recognise the suffix, not just the root.",
          bullets: [
            "-ra/-re/-ri past marker: o riri (he ate).",
            "-ghị negation: o righị (he did not eat).",
            "-na progressive: ọ na-eri (he is eating).",
            "-la/-ga future: ọ ga-eri (he will eat).",
          ],
        },
        {
          heading: "Sentence patterns",
          body:
            "Basic order is subject–verb–object. Questions, negatives and commands each have markers examiners test.",
          bullets: [
            "Questions often begin with kedu, gịnị, ole, ebee, olee.",
            "Negation uses -ghị on the verb; commands use the bare root (rie! — eat!).",
            "Conjunctions: na (and), mana (but), maka na (because), ma ọ bụ (or).",
          ],
        },
      ],
      keyPoints: [
        "Subject vs object pronouns differ.",
        "Suffixes carry tense and negation (-ra, -ghị, -na, -ga).",
        "Question words: kedu, gịnị, ole, ebee.",
        "Basic order: subject–verb–object.",
      ],
    },
  },
  {
    subjectSlug: "arabic",
    lesson: {
      slug: "arabic-verbs-sentences",
      title: "Verbs, pronouns and simple sentences",
      summary: "Past-tense conjugation, attached pronouns, and nominal vs verbal sentences.",
      durationMinutes: 20,
      level: "Core",
      examWeight: "High yield",
      sections: [
        {
          heading: "The past tense (al-māḍī)",
          body:
            "Arabic verbs conjugate by adding suffixes to a three-letter root. Learn kataba (he wrote) as the model for all sound verbs.",
          bullets: [
            "kataba (he wrote), katabat (she wrote), katabta (you m. wrote), katabti (you f. wrote), katabtu (I wrote).",
            "katabnā (we wrote), katabtum (you pl. wrote), katabū (they m. wrote), katabna (they f. wrote).",
            "The root k-t-b carries the idea of writing; patterns shape meaning.",
            "Negation of the past uses lam + jussive: lam yaktub (he did not write).",
          ],
        },
        {
          heading: "Pronouns",
          body:
            "Detached pronouns stand alone; attached pronouns suffix to nouns, verbs and prepositions.",
          bullets: [
            "Detached: anā (I), anta/anti (you), huwa/hiya (he/she), naḥnu (we), hum (they).",
            "Attached to nouns show possession: kitābī (my book), kitābuka (your book).",
            "Attached to verbs show objects: katabahu (he wrote it).",
            "Attached to prepositions: lahū (for him), fīhā (in it).",
          ],
        },
        {
          heading: "Sentence types",
          body:
            "Nominal sentences begin with a noun (mubtada' + khabar); verbal sentences begin with a verb (fi'l + fā'il).",
          bullets: [
            "al-waladu kabīrun — the boy is big (nominal).",
            "kataba al-waladu — the boy wrote (verbal).",
            "Adjectives (ṣifah) follow nouns and agree in gender, number and definiteness.",
            "Questions use hal (yes/no) or question nouns: man (who), mā/mādhā (what), ayna (where), matā (when).",
          ],
        },
      ],
      keyPoints: [
        "kataba is the model past-tense conjugation.",
        "Attached pronouns show possession or objects.",
        "Nominal starts with a noun; verbal starts with a verb.",
        "Adjectives follow nouns and agree fully.",
      ],
    },
  },
];

/* ------------------------------------------------------------------ */
/* Questions for the newly added subjects                             */
/* ------------------------------------------------------------------ */

export const extraSubjectQuestions: Record<string, SeedQuestion[]> = {
  "islamic-religious-studies": [
    {
      topic: "Revelation",
      prompt: "The first word revealed to Prophet Muhammad (SAW) was:",
      options: ["Iqra", "Alhamdu", "Qul", "Tabbat"],
      correctIndex: 0,
      explanation: "The first revelation in the Cave of Hira began with 'Iqra' (Read).",
      difficulty: "easy",
    },
    {
      topic: "Hijrah",
      prompt: "The Hijrah took place in the year:",
      options: ["610 CE", "622 CE", "632 CE", "570 CE"],
      correctIndex: 1,
      explanation: "The migration to Madinah in 622 CE begins the Islamic calendar.",
      difficulty: "easy",
    },
    {
      topic: "Caliphate",
      prompt: "The first Rightly Guided Caliph was:",
      options: ["Umar ibn al-Khattab", "Abubakar as-Siddiq", "Uthman ibn Affan", "Ali ibn Abi Talib"],
      correctIndex: 1,
      explanation: "Abubakar as-Siddiq succeeded the Prophet in 632 CE.",
      difficulty: "easy",
    },
    {
      topic: "Articles of faith",
      prompt: "How many articles of faith (iman) are there in Islam?",
      options: ["Five", "Six", "Seven", "Three"],
      correctIndex: 1,
      explanation: "Belief in Allah, angels, books, messengers, the Last Day and divine decree — six articles.",
      difficulty: "medium",
    },
    {
      topic: "Qur'an",
      prompt: "How many surahs are in the Holy Qur'an?",
      options: ["99", "110", "114", "120"],
      correctIndex: 2,
      explanation: "The Qur'an contains 114 surahs, from Al-Fatihah to An-Nas.",
      difficulty: "easy",
    },
    {
      topic: "Hadith",
      prompt: "The two most authentic Hadith collections are:",
      options: [
        "Tirmidhi and Nasa'i",
        "Bukhari and Muslim",
        "Abu Dawud and Ibn Majah",
        "Malik and Ahmad",
      ],
      correctIndex: 1,
      explanation: "Sahih al-Bukhari and Sahih Muslim are the Sahihayn, the two most authentic collections.",
      difficulty: "medium",
    },
    {
      topic: "Battles",
      prompt: "The first major battle in Islam, fought in 2 AH, was the Battle of:",
      options: ["Uhud", "Khandaq", "Badr", "Hunayn"],
      correctIndex: 2,
      explanation: "Badr (2 AH/624 CE) was the first decisive Muslim victory.",
      difficulty: "medium",
    },
  ],
  hausa: [
    {
      topic: "Gaisuwa",
      prompt: "What does 'Barka da safiya' mean?",
      options: ["Good afternoon", "Good night", "Good morning", "Welcome"],
      correctIndex: 2,
      explanation: "'Barka da safiya' is the morning greeting.",
      difficulty: "easy",
    },
    {
      topic: "Vocabulary",
      prompt: "What does 'Na gode' mean?",
      options: ["Please", "Sorry", "Thank you", "Goodbye"],
      correctIndex: 2,
      explanation: "'Na gode' means thank you.",
      difficulty: "easy",
    },
    {
      topic: "Vocabulary",
      prompt: "The Hausa word 'uba' means:",
      options: ["mother", "father", "brother", "child"],
      correctIndex: 1,
      explanation: "'Uba' means father; 'uwa' means mother.",
      difficulty: "easy",
    },
    {
      topic: "Numbers",
      prompt: "What is 'biyu' in English?",
      options: ["One", "Two", "Three", "Ten"],
      correctIndex: 1,
      explanation: "D'aya is one, biyu is two, uku is three.",
      difficulty: "easy",
    },
    {
      topic: "Literature",
      prompt: "The Hausa word 'karin magana' refers to:",
      options: ["a folktale", "a proverb", "a song", "a riddle"],
      correctIndex: 1,
      explanation: "'Karin magana' is a proverb; 'tatsuniya' is a folktale.",
      difficulty: "medium",
    },
    {
      topic: "Tones",
      prompt: "How many basic tones does Hausa distinguish?",
      options: ["Two", "Three", "Four", "Five"],
      correctIndex: 1,
      explanation: "Hausa distinguishes high, low and falling tones.",
      difficulty: "hard",
    },
  ],
  music: [
    {
      topic: "Notation",
      prompt: "How many lines and spaces make up the musical staff?",
      options: [
        "Four lines and five spaces",
        "Five lines and four spaces",
        "Five lines and five spaces",
        "Six lines and four spaces",
      ],
      correctIndex: 1,
      explanation: "The staff has five lines and four spaces.",
      difficulty: "easy",
    },
    {
      topic: "Note values",
      prompt: "A crotchet is worth how many beats?",
      options: ["Four", "Two", "One", "Half"],
      correctIndex: 2,
      explanation: "Semibreve 4, minim 2, crotchet 1, quaver ½.",
      difficulty: "easy",
    },
    {
      topic: "Clefs",
      prompt: "The treble clef is also called the:",
      options: ["F clef", "C clef", "G clef", "D clef"],
      correctIndex: 2,
      explanation: "The treble clef curls around the second line, the G above middle C.",
      difficulty: "easy",
    },
    {
      topic: "Scales",
      prompt: "The pattern of the major scale is:",
      options: [
        "T–S–T–T–S–T–T",
        "T–T–S–T–T–T–S",
        "S–T–T–S–T–T–T",
        "T–T–T–S–T–T–S",
      ],
      correctIndex: 1,
      explanation: "Tone, tone, semitone, tone, tone, tone, semitone — with semitones E–F and B–C.",
      difficulty: "medium",
    },
    {
      topic: "Nigerian music",
      prompt: "Fela Anikulapo-Kuti is best known as the pioneer of:",
      options: ["Juju", "Fuji", "Afrobeat", "Highlife"],
      correctIndex: 2,
      explanation: "Fela created Afrobeat, fusing jazz, funk and Yoruba rhythms.",
      difficulty: "easy",
    },
    {
      topic: "Instruments",
      prompt: "The gangan is best described as a:",
      options: ["Hausa royal trumpet", "Yoruba talking drum", "Igbo double bell", "Wooden xylophone"],
      correctIndex: 1,
      explanation: "The hourglass gangan mimics the tones of Yoruba speech.",
      difficulty: "medium",
    },
  ],
};
