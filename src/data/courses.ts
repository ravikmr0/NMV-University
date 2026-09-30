import { INFO_PENDING } from "@/lib/site";

export type Course = {
  slug: string;
  name: string;
  degree: string;
  level: "Undergraduate" | "Postgraduate" | "Research";
  category: string;
  duration: string;
  eligibility: string;
  mode: string;
  school: string;
  overview: string;
  curriculum: string[];
  careers: string[];
  fees: string;
  facilities: string[];
  faqs: { q: string; a: string }[];
  verified: boolean;
};

export const courses: Course[] = [
  {
    slug: "bsc-hons-agriculture",
    name: "B.Sc. (Hons.) Agriculture",
    degree: "B.Sc. (Hons.)",
    level: "Undergraduate",
    category: "Agriculture",
    duration: "4 years (8 semesters)",
    eligibility:
      "Pass in Higher Secondary (Class XII) with Physics, Chemistry, Biology / Botany / Agriculture or equivalent, as per university admission regulations.",
    mode: "Full time, on campus",
    school: "NMV Institute of Agriculture and Technology",
    overview:
      "A four-year honours programme in agricultural sciences offered at the university's main campus near Madurai. The curriculum combines core agronomy, horticulture, soil science, plant protection and agricultural economics with structured exposure to modern agricultural technology and practical field learning, including the Rural Agricultural Work Experience component.",
    curriculum: [
      "Agronomy, Soil Science and Crop Production",
      "Horticulture and Plant Breeding",
      "Plant Pathology and Entomology",
      "Agricultural Engineering and Farm Machinery",
      "Agricultural Economics, Extension and Agri-business",
      "Agricultural Technology: drones, IoT sensing, robotics, AI/ML applications",
      "Rural Agricultural Work Experience and Experiential Learning",
    ],
    careers: [
      "Agricultural officer and extension services",
      "Agri-business, agri-input and agri-tech organisations",
      "Farm and plantation management",
      "Seed, fertiliser and food processing industries",
      "Higher study and research in agricultural sciences",
      "Agri-entrepreneurship and start-ups",
    ],
    fees: INFO_PENDING,
    facilities: [
      "Instructional farm and field laboratories",
      "Soil and plant science laboratories",
      "Agricultural technology and drone practice area",
      "Library and digital learning resources",
    ],
    faqs: [
      {
        q: "Where is the programme offered?",
        a: "At the university's main campus near Madurai, through NMV Institute of Agriculture and Technology, a constituent college of NMV University.",
      },
      {
        q: "What is the duration of the programme?",
        a: "Four years, structured across eight semesters, including experiential learning.",
      },
      {
        q: "What are the fees for the programme?",
        a: INFO_PENDING,
      },
    ],
    verified: true,
  },
];

export const courseCategories = [
  {
    name: "Agriculture",
    description:
      "Agricultural sciences and technology-driven agricultural education at the main campus near Madurai.",
    status: "available" as const,
  },
  {
    name: "Science",
    description: "Programme details will be published once verified by the university.",
    status: "pending" as const,
  },
  {
    name: "Engineering & Technology",
    description: "Programme details will be published once verified by the university.",
    status: "pending" as const,
  },
  {
    name: "Management",
    description: "Programme details will be published once verified by the university.",
    status: "pending" as const,
  },
  {
    name: "Humanities & Social Sciences",
    description: "Programme details will be published once verified by the university.",
    status: "pending" as const,
  },
];

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);
