export type SeedInstitution = {
  slug: string;
  name: string;
  shortName: string;
  state: string;
  ownership: string;
  type: string;
  summary: string;
  programmes: {
    name: string;
    faculty: string;
    jambCutoff: number;
    competitiveCutoff: number;
    durationYears: number;
    subjectCombo: string[];
    olevel: string;
    notes: string;
  }[];
};

const scienceOlevel =
  "Five O'level credits including English Language, Mathematics, Biology, Chemistry and Physics.";

export const seedInstitutions: SeedInstitution[] = [
  {
    slug: "university-of-lagos",
    name: "University of Lagos",
    shortName: "UNILAG",
    state: "Lagos",
    ownership: "Federal",
    type: "University",
    summary:
      "Nigeria's most subscribed federal university by application volume. High competition means your UTME score alone is not enough — post-UTME screening and O'level grades decide close races.",
    programmes: [
      {
        name: "Medicine and Surgery",
        faculty: "College of Medicine",
        jambCutoff: 200,
        competitiveCutoff: 300,
        durationYears: 6,
        subjectCombo: ["English Language", "Biology", "Chemistry", "Physics"],
        olevel: scienceOlevel,
        notes: "Competitive candidates score 300+ and hold strong credits in one sitting.",
      },
      {
        name: "Law",
        faculty: "Faculty of Law",
        jambCutoff: 200,
        competitiveCutoff: 290,
        durationYears: 5,
        subjectCombo: ["English Language", "Literature in English", "Government", "Mathematics"],
        olevel: "Five credits including English Language, Literature in English and Mathematics.",
        notes: "Very competitive; post-UTME and strong English performance are decisive.",
      },
      {
        name: "Computer Science",
        faculty: "Faculty of Science",
        jambCutoff: 200,
        competitiveCutoff: 265,
        durationYears: 4,
        subjectCombo: ["English Language", "Mathematics", "Physics", "Chemistry"],
        olevel: "Five credits including English Language, Mathematics, Physics and Chemistry.",
        notes: "One of the fastest-rising cut-offs in Nigeria — prepare for 250+ at minimum.",
      },
      {
        name: "Mass Communication",
        faculty: "Faculty of Social Sciences",
        jambCutoff: 200,
        competitiveCutoff: 255,
        durationYears: 4,
        subjectCombo: ["English Language", "Literature in English", "Government", "Economics"],
        olevel: "Five credits including English Language, Literature in English and Mathematics.",
        notes: "Strong English and current affairs awareness are tested at screening.",
      },
      {
        name: "Pharmacy",
        faculty: "Faculty of Pharmacy",
        jambCutoff: 200,
        competitiveCutoff: 275,
        durationYears: 5,
        subjectCombo: ["English Language", "Biology", "Chemistry", "Physics"],
        olevel: scienceOlevel,
        notes: "Chemistry is heavily weighted in the post-UTME.",
      },
    ],
  },
  {
    slug: "university-of-ibadan",
    name: "University of Ibadan",
    shortName: "UI",
    state: "Oyo",
    ownership: "Federal",
    type: "University",
    summary:
      "Nigeria's first university, with a strong research culture. UI runs a rigorous post-UTME screening and values consistent O'level excellence.",
    programmes: [
      {
        name: "Medicine and Surgery",
        faculty: "College of Medicine",
        jambCutoff: 200,
        competitiveCutoff: 305,
        durationYears: 6,
        subjectCombo: ["English Language", "Biology", "Chemistry", "Physics"],
        olevel: scienceOlevel,
        notes: "Among the highest thresholds in the country. Aim well beyond the minimum.",
      },
      {
        name: "Economics",
        faculty: "Faculty of Economics and Management Sciences",
        jambCutoff: 200,
        competitiveCutoff: 250,
        durationYears: 4,
        subjectCombo: ["English Language", "Mathematics", "Economics", "Government"],
        olevel: "Five credits including English Language, Mathematics and Economics.",
        notes: "Mathematics in UTME carries strong weight at screening.",
      },
      {
        name: "Mechanical Engineering",
        faculty: "Faculty of Technology",
        jambCutoff: 200,
        competitiveCutoff: 260,
        durationYears: 5,
        subjectCombo: ["English Language", "Mathematics", "Physics", "Chemistry"],
        olevel: "Five credits including English Language, Mathematics, Physics and Chemistry.",
        notes: "Physics and Mathematics scores are scrutinised closely.",
      },
      {
        name: "Agricultural Economics",
        faculty: "Faculty of Agriculture",
        jambCutoff: 180,
        competitiveCutoff: 220,
        durationYears: 4,
        subjectCombo: ["English Language", "Chemistry", "Biology", "Mathematics"],
        olevel: "Five credits including English Language, Mathematics, Chemistry and Biology.",
        notes: "A realistic route into agriculture and agribusiness for candidates with 200–230.",
      },
    ],
  },
  {
    slug: "obafemi-awolowo-university",
    name: "Obafemi Awolowo University",
    shortName: "OAU",
    state: "Osun",
    ownership: "Federal",
    type: "University",
    summary:
      "Popularly called 'Great Ife'. Historically competitive in Law, Medicine and Engineering, with a well-structured post-UTME.",
    programmes: [
      {
        name: "Law",
        faculty: "Faculty of Law",
        jambCutoff: 200,
        competitiveCutoff: 285,
        durationYears: 5,
        subjectCombo: ["English Language", "Literature in English", "Government", "Economics"],
        olevel: "Five credits including English Language and Literature in English.",
        notes: "Literature is often substituted by CRS or History depending on the JAMB brochure.",
      },
      {
        name: "Civil Engineering",
        faculty: "Faculty of Technology",
        jambCutoff: 200,
        competitiveCutoff: 250,
        durationYears: 5,
        subjectCombo: ["English Language", "Mathematics", "Physics", "Chemistry"],
        olevel: "Five credits including English Language, Mathematics, Physics and Chemistry.",
        notes: "Strong mathematics foundation is essential.",
      },
      {
        name: "Accounting",
        faculty: "Faculty of Administration",
        jambCutoff: 200,
        competitiveCutoff: 245,
        durationYears: 4,
        subjectCombo: ["English Language", "Mathematics", "Economics", "Financial Accounting"],
        olevel: "Five credits including English Language, Mathematics and Economics.",
        notes: "Commerce or Financial Accounting is accepted as the fourth UTME subject.",
      },
      {
        name: "Political Science",
        faculty: "Faculty of Social Sciences",
        jambCutoff: 180,
        competitiveCutoff: 230,
        durationYears: 4,
        subjectCombo: ["English Language", "Government", "Economics", "Literature in English"],
        olevel: "Five credits including English Language, Government and Mathematics.",
        notes: "An accessible entry point into governance and public policy careers.",
      },
    ],
  },
  {
    slug: "university-of-nigeria-nsukka",
    name: "University of Nigeria, Nsukka",
    shortName: "UNN",
    state: "Enugu",
    ownership: "Federal",
    type: "University",
    summary:
      "The first indigenous Nigerian university. Strong in the sciences, education and the arts, with a straightforward online screening process.",
    programmes: [
      {
        name: "Medicine and Surgery",
        faculty: "Faculty of Medical Sciences",
        jambCutoff: 200,
        competitiveCutoff: 295,
        durationYears: 6,
        subjectCombo: ["English Language", "Biology", "Chemistry", "Physics"],
        olevel: scienceOlevel,
        notes: "Screening scores are combined with UTME; plan for 290+.",
      },
      {
        name: "Electrical Engineering",
        faculty: "Faculty of Engineering",
        jambCutoff: 200,
        competitiveCutoff: 250,
        durationYears: 5,
        subjectCombo: ["English Language", "Mathematics", "Physics", "Chemistry"],
        olevel: "Five credits including English Language, Mathematics, Physics and Chemistry.",
        notes: "Physics and Mathematics are the deciding papers.",
      },
      {
        name: "Economics",
        faculty: "Faculty of Social Sciences",
        jambCutoff: 200,
        competitiveCutoff: 245,
        durationYears: 4,
        subjectCombo: ["English Language", "Mathematics", "Economics", "Government"],
        olevel: "Five credits including English Language, Mathematics and Economics.",
        notes: "Commercial and arts candidates both apply here — strengthen Mathematics.",
      },
    ],
  },
  {
    slug: "university-of-benin",
    name: "University of Benin",
    shortName: "UNIBEN",
    state: "Edo",
    ownership: "Federal",
    type: "University",
    summary:
      "A large federal university with competitive Medicine and Law, and a well-attended post-UTME screening exercise.",
    programmes: [
      {
        name: "Medicine and Surgery",
        faculty: "School of Medicine",
        jambCutoff: 200,
        competitiveCutoff: 290,
        durationYears: 6,
        subjectCombo: ["English Language", "Biology", "Chemistry", "Physics"],
        olevel: scienceOlevel,
        notes: "Screening performance often decides candidates clustered around the cut-off.",
      },
      {
        name: "Accounting",
        faculty: "Faculty of Management Sciences",
        jambCutoff: 200,
        competitiveCutoff: 240,
        durationYears: 4,
        subjectCombo: ["English Language", "Mathematics", "Economics", "Financial Accounting"],
        olevel: "Five credits including English Language, Mathematics and Economics.",
        notes: "Financial Accounting knowledge helps at post-UTME.",
      },
      {
        name: "Mass Communication",
        faculty: "Faculty of Social Sciences",
        jambCutoff: 200,
        competitiveCutoff: 250,
        durationYears: 4,
        subjectCombo: ["English Language", "Literature in English", "Government", "Economics"],
        olevel: "Five credits including English Language, Literature in English and Mathematics.",
        notes: "English and current affairs screening are key.",
      },
    ],
  },
  {
    slug: "federal-university-of-technology-akure",
    name: "Federal University of Technology, Akure",
    shortName: "FUTA",
    state: "Ondo",
    ownership: "Federal",
    type: "University of Technology",
    summary:
      "Nigeria's leading technology-focused university. Ideal for candidates who want engineering, computing and applied science with a practical orientation.",
    programmes: [
      {
        name: "Computer Engineering",
        faculty: "School of Engineering and Engineering Technology",
        jambCutoff: 200,
        competitiveCutoff: 255,
        durationYears: 5,
        subjectCombo: ["English Language", "Mathematics", "Physics", "Chemistry"],
        olevel: "Five credits including English Language, Mathematics, Physics and Chemistry.",
        notes: "Strong Mathematics is the single biggest predictor of success.",
      },
      {
        name: "Biochemistry",
        faculty: "School of Sciences",
        jambCutoff: 200,
        competitiveCutoff: 235,
        durationYears: 4,
        subjectCombo: ["English Language", "Biology", "Chemistry", "Physics"],
        olevel: scienceOlevel,
        notes: "Good option for science candidates who prefer research to hospital practice.",
      },
      {
        name: "Cyber Security",
        faculty: "School of Computing",
        jambCutoff: 200,
        competitiveCutoff: 250,
        durationYears: 4,
        subjectCombo: ["English Language", "Mathematics", "Physics", "Chemistry"],
        olevel: "Five credits including English Language, Mathematics, Physics and Chemistry.",
        notes: "Fast-growing programme; cut-offs have risen sharply in recent years.",
      },
    ],
  },
  {
    slug: "university-of-ilorin",
    name: "University of Ilorin",
    shortName: "UNILORIN",
    state: "Kwara",
    ownership: "Federal",
    type: "University",
    summary:
      "Known for stable academic calendar and strong postgraduate outcomes. Screening is competitive and thorough.",
    programmes: [
      {
        name: "Medicine and Surgery",
        faculty: "College of Health Sciences",
        jambCutoff: 200,
        competitiveCutoff: 290,
        durationYears: 6,
        subjectCombo: ["English Language", "Biology", "Chemistry", "Physics"],
        olevel: scienceOlevel,
        notes: "Aim for 280+ and flawless O'level credit combinations.",
      },
      {
        name: "Computer Science",
        faculty: "Faculty of Communication and Information Sciences",
        jambCutoff: 200,
        competitiveCutoff: 250,
        durationYears: 4,
        subjectCombo: ["English Language", "Mathematics", "Physics", "Chemistry"],
        olevel: "Five credits including English Language, Mathematics and Physics.",
        notes: "Mathematics-heavy screening; practise speed and accuracy.",
      },
      {
        name: "Public Administration",
        faculty: "Faculty of Management Sciences",
        jambCutoff: 180,
        competitiveCutoff: 220,
        durationYears: 4,
        subjectCombo: ["English Language", "Government", "Economics", "Mathematics"],
        olevel: "Five credits including English Language, Mathematics and Government.",
        notes: "A practical option for candidates with 200–225 who want governance careers.",
      },
    ],
  },
  {
    slug: "lagos-state-university",
    name: "Lagos State University",
    shortName: "LASU",
    state: "Lagos",
    ownership: "State",
    type: "University",
    summary:
      "The largest state university. Competitive for Medicine, Law and Mass Communication, with many candidates using it as a strategic state option.",
    programmes: [
      {
        name: "Medicine and Surgery",
        faculty: "College of Medicine",
        jambCutoff: 200,
        competitiveCutoff: 280,
        durationYears: 6,
        subjectCombo: ["English Language", "Biology", "Chemistry", "Physics"],
        olevel: scienceOlevel,
        notes: "State residency is not required, but competition is intense.",
      },
      {
        name: "Mass Communication",
        faculty: "School of Communication",
        jambCutoff: 190,
        competitiveCutoff: 240,
        durationYears: 4,
        subjectCombo: ["English Language", "Literature in English", "Government", "Economics"],
        olevel: "Five credits including English Language, Literature in English and Mathematics.",
        notes: "Strong English and writing ability tested at screening.",
      },
      {
        name: "Accounting",
        faculty: "Faculty of Management Sciences",
        jambCutoff: 190,
        competitiveCutoff: 230,
        durationYears: 4,
        subjectCombo: ["English Language", "Mathematics", "Economics", "Financial Accounting"],
        olevel: "Five credits including English Language, Mathematics and Economics.",
        notes: "Popular state option; apply early in the JAMB change-of-course window if needed.",
      },
    ],
  },
  {
    slug: "bayero-university-kano",
    name: "Bayero University, Kano",
    shortName: "BUK",
    state: "Kano",
    ownership: "Federal",
    type: "University",
    summary:
      "A major northern federal university with strong Medicine, Engineering and Education faculties, and a broad spread of accessible programmes.",
    programmes: [
      {
        name: "Medicine and Surgery",
        faculty: "College of Health Sciences",
        jambCutoff: 200,
        competitiveCutoff: 270,
        durationYears: 6,
        subjectCombo: ["English Language", "Biology", "Chemistry", "Physics"],
        olevel: scienceOlevel,
        notes: "One of the more attainable Medicine thresholds in the north.",
      },
      {
        name: "Civil Engineering",
        faculty: "Faculty of Engineering",
        jambCutoff: 190,
        competitiveCutoff: 230,
        durationYears: 5,
        subjectCombo: ["English Language", "Mathematics", "Physics", "Chemistry"],
        olevel: "Five credits including English Language, Mathematics, Physics and Chemistry.",
        notes: "Regional accessibility with solid engineering training.",
      },
      {
        name: "Education and Biology",
        faculty: "Faculty of Education",
        jambCutoff: 170,
        competitiveCutoff: 200,
        durationYears: 4,
        subjectCombo: ["English Language", "Biology", "Chemistry", "Mathematics"],
        olevel: "Five credits including English Language, Mathematics, Biology and Chemistry.",
        notes: "A strong teaching-career route with lower entry competition.",
      },
    ],
  },
  {
    slug: "covenant-university",
    name: "Covenant University",
    shortName: "CU",
    state: "Ogun",
    ownership: "Private",
    type: "University",
    summary:
      "A leading private university with a disciplined academic culture. Higher fees, but more predictable admission for candidates who meet the requirements.",
    programmes: [
      {
        name: "Computer Science",
        faculty: "College of Science and Technology",
        jambCutoff: 180,
        competitiveCutoff: 230,
        durationYears: 4,
        subjectCombo: ["English Language", "Mathematics", "Physics", "Chemistry"],
        olevel: "Five credits including English Language, Mathematics and Physics.",
        notes: "Private option: plan for tuition and living costs alongside admission.",
      },
      {
        name: "Accounting",
        faculty: "College of Business and Social Sciences",
        jambCutoff: 180,
        competitiveCutoff: 220,
        durationYears: 4,
        subjectCombo: ["English Language", "Mathematics", "Economics", "Financial Accounting"],
        olevel: "Five credits including English Language, Mathematics and Economics.",
        notes: "Screening includes a written assessment for some intakes.",
      },
    ],
  },
  {
    slug: "nnamdi-azikiwe-university",
    name: "Nnamdi Azikiwe University",
    shortName: "UNIZIK",
    state: "Anambra",
    ownership: "Federal",
    type: "University",
    summary:
      "A large federal university in the south-east with expanding health sciences, engineering and management programmes.",
    programmes: [
      {
        name: "Medicine and Surgery",
        faculty: "Faculty of Medicine",
        jambCutoff: 200,
        competitiveCutoff: 285,
        durationYears: 6,
        subjectCombo: ["English Language", "Biology", "Chemistry", "Physics"],
        olevel: scienceOlevel,
        notes: "Screening is competitive; prepare Chemistry thoroughly.",
      },
      {
        name: "Law",
        faculty: "Faculty of Law",
        jambCutoff: 200,
        competitiveCutoff: 265,
        durationYears: 5,
        subjectCombo: ["English Language", "Literature in English", "Government", "Economics"],
        olevel: "Five credits including English Language and Literature in English.",
        notes: "English Language performance is weighted heavily.",
      },
    ],
  },
];

export type SeedResource = {
  subjectSlug: string | null;
  title: string;
  type: string;
  provider: string;
  description: string;
  url: string;
  isFree: number;
  sortOrder: number;
};

export const seedResources: SeedResource[] = [
  {
    subjectSlug: null,
    title: "JAMB UTME syllabus (current year)",
    type: "Official guide",
    provider: "Joint Admissions and Matriculation Board",
    description:
      "The single document that defines what can be asked in every subject. Print it, highlight the topics you have never been taught, and bring that list to your mentor.",
    url: "https://www.jamb.gov.ng",
    isFree: 1,
    sortOrder: 1,
  },
  {
    subjectSlug: null,
    title: "I Ascend 12-week study calendar",
    type: "I Ascend guide",
    provider: "I Ascend Project",
    description:
      "A week-by-week plan covering all four UTME subjects, with weekly CBT checkpoints and a rest-day rhythm. Available inside the programme.",
    url: "",
    isFree: 1,
    sortOrder: 2,
  },
  {
    subjectSlug: null,
    title: "Navigating JAMB CAPS: admission offers step by step",
    type: "I Ascend guide",
    provider: "I Ascend Project",
    description:
      "How to accept or reject an admission offer, what 'admission in progress' means, and when to change course or institution safely.",
    url: "",
    isFree: 1,
    sortOrder: 3,
  },
  {
    subjectSlug: "mathematics",
    title: "New General Mathematics for Senior Secondary Schools (Books 1–3)",
    type: "Textbook",
    provider: "Longman",
    description:
      "The most reliable foundation for UTME Mathematics. Work the end-of-chapter exercises, not just the examples.",
    url: "",
    isFree: 0,
    sortOrder: 4,
  },
  {
    subjectSlug: "mathematics",
    title: "Essential Mathematics for Senior Secondary Schools",
    type: "Textbook",
    provider: "A. J. S. Oluwasanmi",
    description:
      "Dense but exam-aligned. Best used alongside the syllabus: pick topics, do 10 questions each, mark and review errors.",
    url: "",
    isFree: 0,
    sortOrder: 5,
  },
  {
    subjectSlug: "english-language",
    title: "Use of English for Universities and Colleges",
    type: "Textbook",
    provider: "I Ascend recommended",
    description:
      "Covers comprehension, summary, lexis and structure with practice passages. Prioritise the concord and idiom chapters.",
    url: "",
    isFree: 0,
    sortOrder: 6,
  },
  {
    subjectSlug: "english-language",
    title: "I Ascend 60 idioms and 100 preposition combinations",
    type: "I Ascend guide",
    provider: "I Ascend Project",
    description:
      "A one-page revision sheet for the English Language questions candidates lose most often. Ask your mentor for a printed copy.",
    url: "",
    isFree: 1,
    sortOrder: 7,
  },
  {
    subjectSlug: "physics",
    title: "New School Physics",
    type: "Textbook",
    provider: "M. W. Anyakoha",
    description:
      "The standard Nigerian senior secondary physics text. Chapters on mechanics and electricity align closely with UTME patterns.",
    url: "",
    isFree: 0,
    sortOrder: 8,
  },
  {
    subjectSlug: "chemistry",
    title: "New Chemistry for Senior Secondary Schools",
    type: "Textbook",
    provider: "I. E. I. Anyakoha / Longman",
    description:
      "Strong on stoichiometry and organic chemistry. Practise calculation questions under timed conditions.",
    url: "",
    isFree: 0,
    sortOrder: 9,
  },
  {
    subjectSlug: "biology",
    title: "Modern Biology for Senior Secondary Schools",
    type: "Textbook",
    provider: "S. T. Ramalingam",
    description:
      "Comprehensive coverage of the UTME syllabus, with diagrams worth copying by hand — drawing improves recall.",
    url: "",
    isFree: 0,
    sortOrder: 10,
  },
  {
    subjectSlug: "economics",
    title: "Economics for Senior Secondary Schools",
    type: "Textbook",
    provider: "I Ascend recommended",
    description:
      "Use the end-of-chapter graph exercises. If you can describe a graph in words, the CBT cannot trick you with text-only options.",
    url: "",
    isFree: 0,
    sortOrder: 11,
  },
  {
    subjectSlug: "government",
    title: "Government for Senior Secondary Schools",
    type: "Textbook",
    provider: "I Ascend recommended",
    description:
      "Pair every definition with a Nigerian example. Examiners reward specific constitutional references.",
    url: "",
    isFree: 0,
    sortOrder: 12,
  },
  {
    subjectSlug: "literature-in-english",
    title: "Current JAMB Literature recommended texts",
    type: "Official guide",
    provider: "Joint Admissions and Matriculation Board",
    description:
      "Literature set texts change. Confirm the current drama, prose and poetry list on the JAMB site before buying any text.",
    url: "https://www.jamb.gov.ng",
    isFree: 1,
    sortOrder: 13,
  },
  {
    subjectSlug: null,
    title: "I Ascend past-question walkthrough sessions",
    type: "Video / Live",
    provider: "I Ascend Project",
    description:
      "Volunteer tutors work through 20 past questions per session, explaining why the wrong options are wrong. Scheduled weekly for enrolled candidates.",
    url: "",
    isFree: 1,
    sortOrder: 14,
  },
];
