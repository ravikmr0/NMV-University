export type Article = {
  slug: string;
  title: string;
  category: "News" | "Event" | "Announcement" | "Research";
  date: string;
  author: string;
  excerpt: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "nmv-university-established-under-tamil-nadu-private-universities-act-2019",
    title: "NMV University established under the Tamil Nadu Private Universities Act, 2019",
    category: "Announcement",
    date: "2021-02-26",
    author: "University Communications",
    excerpt:
      "The Tamil Nadu Government Gazette records NMV University's inclusion in the Schedule to the Tamil Nadu Private Universities Act, 2019 through G.O.Ms. No. 82, Higher Education (K2), dated 26 February 2021.",
    body: [
      "NMV University is established under the Tamil Nadu Private Universities Act, 2019.",
      "The Tamil Nadu Government Gazette records the university's inclusion in the Schedule to the Act through G.O.Ms. No. 82, Higher Education (K2), dated 26 February 2021.",
      "Further statutory and regulatory information is published on the Recognition & Approvals page and will be updated by the university as documents are released.",
    ],
  },
  {
    slug: "bsc-hons-agriculture-at-nmv-institute-of-agriculture-and-technology",
    title: "B.Sc. (Hons.) Agriculture offered at NMV Institute of Agriculture and Technology",
    category: "News",
    date: "2025-06-02",
    author: "Office of Academic Affairs",
    excerpt:
      "NMV Institute of Agriculture and Technology, a constituent college of NMV University, offers B.Sc. (Hons.) Agriculture at the university's main campus near Madurai.",
    body: [
      "NMV Institute of Agriculture and Technology is a constituent college of NMV University offering B.Sc. (Hons.) Agriculture at the university's main campus near Madurai.",
      "The programme combines core agricultural sciences with practical field learning and exposure to modern agricultural technology, including drones, IoT-based sensing, robotics and AI/ML applications in agriculture.",
      "Admission information, eligibility and important dates are published on the Admissions page.",
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
