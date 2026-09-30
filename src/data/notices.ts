export type Notice = {
  id: string;
  title: string;
  category: "Admissions" | "Examination" | "Academic" | "Recruitment" | "Events" | "General" | "Results";
  date: string;
  department: string;
  file?: string;
};

export const notices: Notice[] = [
  {
    id: "NMVU/ADM/2025/01",
    title: "Admission enquiry channel for B.Sc. (Hons.) Agriculture",
    category: "Admissions",
    date: "2025-06-02",
    department: "Office of Admissions",
  },
  {
    id: "NMVU/GEN/2021/01",
    title: "Statutory establishment information — G.O.Ms. No. 82, Higher Education (K2)",
    category: "General",
    date: "2021-02-26",
    department: "Registrar's Office",
  },
];

export const noticeCategories = [
  "All",
  "Admissions",
  "Examination",
  "Academic",
  "Recruitment",
  "Events",
  "General",
  "Results",
] as const;
