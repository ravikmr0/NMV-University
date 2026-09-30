export type Institution = {
  slug: string;
  name: string;
  location: string;
  focus: string;
  programs: string[];
};

export const institutions: Institution[] = [
  {
    slug: "nmv-institute-of-agriculture-and-technology",
    name: "NMV Institute of Agriculture and Technology",
    location: "Main campus, near Madurai, Tamil Nadu",
    focus: "Agricultural sciences, agricultural technology and experiential field learning",
    programs: ["B.Sc. (Hons.) Agriculture"],
  },
];
