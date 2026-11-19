export type SeedInstitution3 = {
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

const scienceOlevel3 =
  "Five O'level credits including English Language, Mathematics, Biology, Chemistry and Physics.";

export const extraInstitutions2: SeedInstitution3[] = [
  {
    slug: "federal-university-of-petroleum-resources",
    name: "Federal University of Petroleum Resources",
    shortName: "FUPRE",
    state: "Delta",
    ownership: "Federal",
    type: "University of Technology",
    summary:
      "Nigeria's first petroleum university, sited in the oil city of Effurun. The destination for petroleum engineering and geosciences ambitions.",
    programmes: [
      {
        name: "Petroleum Engineering",
        faculty: "College of Technology",
        jambCutoff: 200,
        competitiveCutoff: 240,
        durationYears: 5,
        subjectCombo: ["English Language", "Mathematics", "Physics", "Chemistry"],
        olevel: "Five credits including English Language, Mathematics, Physics and Chemistry.",
        notes: "Specialist training with direct industry relevance.",
      },
      {
        name: "Geology and Geophysics",
        faculty: "College of Science",
        jambCutoff: 180,
        competitiveCutoff: 220,
        durationYears: 4,
        subjectCombo: ["English Language", "Biology", "Chemistry", "Physics"],
        olevel: "Five credits including English Language, Mathematics and any three sciences.",
        notes: "Exploration-focused earth science route.",
      },
      {
        name: "Computer Science",
        faculty: "College of Science",
        jambCutoff: 200,
        competitiveCutoff: 235,
        durationYears: 4,
        subjectCombo: ["English Language", "Mathematics", "Physics", "Chemistry"],
        olevel: "Five credits including English Language, Mathematics and Physics.",
        notes: "Computing with an energy-industry flavour.",
      },
    ],
  },
  {
    slug: "michael-okpara-university",
    name: "Michael Okpara University of Agriculture",
    shortName: "MOUAU",
    state: "Abia",
    ownership: "Federal",
    type: "University of Agriculture",
    summary:
      "A specialised agricultural university at Umudike, strong in agronomy, animal science, food technology and agribusiness.",
    programmes: [
      {
        name: "Agricultural Economics and Extension",
        faculty: "College of Agricultural Economics",
        jambCutoff: 170,
        competitiveCutoff: 200,
        durationYears: 4,
        subjectCombo: ["English Language", "Chemistry", "Biology", "Mathematics"],
        olevel: "Five credits including English Language, Mathematics, Chemistry and Biology.",
        notes: "Agribusiness and advisory career route.",
      },
      {
        name: "Food Science and Technology",
        faculty: "College of Applied Food Sciences",
        jambCutoff: 180,
        competitiveCutoff: 210,
        durationYears: 4,
        subjectCombo: ["English Language", "Chemistry", "Biology", "Physics"],
        olevel: "Five credits including English Language, Mathematics, Chemistry and Biology.",
        notes: "Processing, safety and product development.",
      },
      {
        name: "Veterinary Medicine",
        faculty: "College of Veterinary Medicine",
        jambCutoff: 200,
        competitiveCutoff: 240,
        durationYears: 6,
        subjectCombo: ["English Language", "Biology", "Chemistry", "Physics"],
        olevel: scienceOlevel3,
        notes: "Animal-doctor pathway with moderate competition.",
      },
    ],
  },
  {
    slug: "federal-university-of-agriculture-abeokuta",
    name: "Federal University of Agriculture, Abeokuta",
    shortName: "FUNAAB",
    state: "Ogun",
    ownership: "Federal",
    type: "University of Agriculture",
    summary:
      "A leading agricultural university with strong veterinary, engineering and management programmes in the south-west.",
    programmes: [
      {
        name: "Veterinary Medicine",
        faculty: "College of Veterinary Medicine",
        jambCutoff: 200,
        competitiveCutoff: 245,
        durationYears: 6,
        subjectCombo: ["English Language", "Biology", "Chemistry", "Physics"],
        olevel: scienceOlevel3,
        notes: "Well-regarded teaching hospital for animals.",
      },
      {
        name: "Agricultural Engineering",
        faculty: "College of Engineering",
        jambCutoff: 180,
        competitiveCutoff: 220,
        durationYears: 5,
        subjectCombo: ["English Language", "Mathematics", "Physics", "Chemistry"],
        olevel: "Five credits including English Language, Mathematics, Physics and Chemistry.",
        notes: "Machinery, irrigation and processing systems.",
      },
    ],
  },
  {
    slug: "ladoke-akintola-university",
    name: "Ladoke Akintola University of Technology",
    shortName: "LAUTECH",
    state: "Oyo",
    ownership: "State",
    type: "University of Technology",
    summary:
      "Ogbomoso-based technology university jointly owned historically by Oyo and Osun states, famous for Medicine, Engineering and Sciences.",
    programmes: [
      {
        name: "Medicine and Surgery",
        faculty: "College of Health Sciences",
        jambCutoff: 200,
        competitiveCutoff: 270,
        durationYears: 6,
        subjectCombo: ["English Language", "Biology", "Chemistry", "Physics"],
        olevel: scienceOlevel3,
        notes: "Strong clinical training; competition is real.",
      },
      {
        name: "Mechanical Engineering",
        faculty: "Faculty of Engineering and Technology",
        jambCutoff: 190,
        competitiveCutoff: 235,
        durationYears: 5,
        subjectCombo: ["English Language", "Mathematics", "Physics", "Chemistry"],
        olevel: "Five credits including English Language, Mathematics, Physics and Chemistry.",
        notes: "Technology-first engineering culture.",
      },
      {
        name: "Computer Science",
        faculty: "Faculty of Computing and Informatics",
        jambCutoff: 190,
        competitiveCutoff: 240,
        durationYears: 4,
        subjectCombo: ["English Language", "Mathematics", "Physics", "Chemistry"],
        olevel: "Five credits including English Language, Mathematics and Physics.",
        notes: "Popular and rising fast.",
      },
    ],
  },
  {
    slug: "osun-state-university",
    name: "Osun State University",
    shortName: "UNIOSUN",
    state: "Osun",
    ownership: "State",
    type: "University",
    summary:
      "A multi-campus state university with Medicine, Law and a reputation for stable calendars.",
    programmes: [
      {
        name: "Medicine and Surgery",
        faculty: "College of Health Sciences",
        jambCutoff: 200,
        competitiveCutoff: 260,
        durationYears: 6,
        subjectCombo: ["English Language", "Biology", "Chemistry", "Physics"],
        olevel: scienceOlevel3,
        notes: "State fees apply; plan finances early.",
      },
      {
        name: "Law",
        faculty: "Faculty of Law",
        jambCutoff: 190,
        competitiveCutoff: 240,
        durationYears: 5,
        subjectCombo: ["English Language", "Literature in English", "Government", "Economics"],
        olevel: "Five credits including English Language and Literature in English.",
        notes: "Steady faculty growth.",
      },
    ],
  },
  {
    slug: "kwara-state-university",
    name: "Kwara State University",
    shortName: "KWASU",
    state: "Kwara",
    ownership: "State",
    type: "University",
    summary:
      "An entrepreneurial-minded state university at Malete, known for innovation programmes and community engagement.",
    programmes: [
      {
        name: "Mass Communication",
        faculty: "Faculty of Information and Communication Sciences",
        jambCutoff: 180,
        competitiveCutoff: 220,
        durationYears: 4,
        subjectCombo: ["English Language", "Literature in English", "Government", "Economics"],
        olevel: "Five credits including English Language, Literature in English and Mathematics.",
        notes: "Media training with practical studios.",
      },
      {
        name: "Computer Science",
        faculty: "Faculty of Information and Communication Sciences",
        jambCutoff: 180,
        competitiveCutoff: 225,
        durationYears: 4,
        subjectCombo: ["English Language", "Mathematics", "Physics", "Chemistry"],
        olevel: "Five credits including English Language, Mathematics and Physics.",
        notes: "Entrepreneurship woven into the curriculum.",
      },
    ],
  },
  {
    slug: "rivers-state-university",
    name: "Rivers State University",
    shortName: "RSU",
    state: "Rivers",
    ownership: "State",
    type: "University",
    summary:
      "Port Harcourt's state university of science and technology, feeding the oil and gas, engineering and business sectors.",
    programmes: [
      {
        name: "Petroleum Engineering",
        faculty: "Faculty of Engineering",
        jambCutoff: 190,
        competitiveCutoff: 240,
        durationYears: 5,
        subjectCombo: ["English Language", "Mathematics", "Physics", "Chemistry"],
        olevel: "Five credits including English Language, Mathematics, Physics and Chemistry.",
        notes: "Location advantage for industry exposure.",
      },
      {
        name: "Law",
        faculty: "Faculty of Law",
        jambCutoff: 190,
        competitiveCutoff: 235,
        durationYears: 5,
        subjectCombo: ["English Language", "Literature in English", "Government", "Economics"],
        olevel: "Five credits including English Language and Literature in English.",
        notes: "Energy-law electives reflect the region.",
      },
      {
        name: "Accounting",
        faculty: "Faculty of Management Sciences",
        jambCutoff: 180,
        competitiveCutoff: 220,
        durationYears: 4,
        subjectCombo: ["English Language", "Mathematics", "Economics", "Financial Accounting"],
        olevel: "Five credits including English Language, Mathematics and Economics.",
        notes: "Professional-exam friendly curriculum.",
      },
    ],
  },
  {
    slug: "federal-polytechnic-nekede",
    name: "Federal Polytechnic, Nekede",
    shortName: "Nekede Poly",
    state: "Imo",
    ownership: "Federal",
    type: "Polytechnic",
    summary:
      "A leading south-east polytechnic with strong engineering technology, business and science programmes, plus morning/evening options.",
    programmes: [
      {
        name: "ND Electrical/Electronics Engineering Technology",
        faculty: "School of Engineering Technology",
        jambCutoff: 150,
        competitiveCutoff: 185,
        durationYears: 2,
        subjectCombo: ["English Language", "Mathematics", "Physics", "Chemistry"],
        olevel: "Five credits including English Language, Mathematics and Physics.",
        notes: "Practical route with HND progression.",
      },
      {
        name: "ND Mass Communication",
        faculty: "School of Humanities and Social Sciences",
        jambCutoff: 160,
        competitiveCutoff: 195,
        durationYears: 2,
        subjectCombo: ["English Language", "Literature in English", "Government", "Economics"],
        olevel: "Five credits including English Language and Literature in English.",
        notes: "Active campus media for practice.",
      },
      {
        name: "ND Accountancy",
        faculty: "School of Business Management Technology",
        jambCutoff: 150,
        competitiveCutoff: 185,
        durationYears: 2,
        subjectCombo: ["English Language", "Mathematics", "Economics", "Financial Accounting"],
        olevel: "Five credits including English Language and Mathematics.",
        notes: "Solid base for professional accounting.",
      },
    ],
  },
];
