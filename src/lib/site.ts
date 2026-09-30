export const SITE_URL = "https://nmvuniversity.com";
export const SITE_NAME = "NMV University";
export const SITE_TAGLINE = "Transforming Education for the 21st Century and Industry 5.0";
export const INFO_PENDING = "Information will be updated by the university.";

export const canonical = (path = "/") =>
  `${SITE_URL}${path === "/" ? "/" : `${path.replace(/\/$/, "")}/`}`;

type Meta = { title?: string; name?: string; property?: string; content?: string };

export function seo(opts: {
  title: string;
  description: string;
  path: string;
  type?: string;
  image?: string;
  noindex?: boolean;
}): { meta: Meta[]; links: { rel: string; href: string }[] } {
  const url = canonical(opts.path);
  const meta: Meta[] = [
    { title: opts.title },
    { name: "description", content: opts.description },
    { property: "og:title", content: opts.title },
    { property: "og:description", content: opts.description },
    { property: "og:type", content: opts.type ?? "website" },
    { property: "og:url", content: url },
    { property: "og:site_name", content: SITE_NAME },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: opts.title },
    { name: "twitter:description", content: opts.description },
  ];
  if (opts.image) {
    meta.push({ property: "og:image", content: opts.image });
    meta.push({ name: "twitter:image", content: opts.image });
  }
  if (opts.noindex) meta.push({ name: "robots", content: "noindex" });
  return { meta, links: [{ rel: "canonical", href: url }] };
}

export const topBarLinks = [
  { label: "Student Login", to: "/login" },
  { label: "Faculty Login", to: "/login" },
  { label: "Examination", to: "/examination" },
  { label: "Notices", to: "/notices" },
  { label: "Contact", to: "/contact-us" },
  { label: "Admission Enquiry", to: "/admissions" },
] as const;

export const mainNav = [
  { label: "About", to: "/about-us" },
  { label: "Academics", to: "/academics" },
  { label: "Courses", to: "/courses" },
  { label: "Institutions", to: "/institutions" },
  { label: "Admissions", to: "/admissions" },
  { label: "Research", to: "/research" },
  { label: "Agriculture", to: "/agriculture" },
  { label: "News & Events", to: "/news-events" },
] as const;

export const footerNav = [
  {
    heading: "University",
    links: [
      { label: "About", to: "/about-us" },
      { label: "Vision & Mission", to: "/about-us" },
      { label: "Leadership", to: "/about-us" },
      { label: "Governance", to: "/about-us" },
      { label: "Recognition & Approvals", to: "/recognition-and-approvals" },
      { label: "Contact", to: "/contact-us" },
    ],
  },
  {
    heading: "Academics",
    links: [
      { label: "Courses", to: "/courses" },
      { label: "Schools", to: "/academics" },
      { label: "Institutions", to: "/institutions" },
      { label: "Research", to: "/research" },
      { label: "Agriculture", to: "/agriculture" },
    ],
  },
  {
    heading: "Admissions",
    links: [
      { label: "Apply Now", to: "/admissions" },
      { label: "Eligibility", to: "/admissions" },
      { label: "Fees", to: "/admissions" },
      { label: "Scholarships", to: "/admissions" },
      { label: "Prospectus", to: "/admissions" },
      { label: "FAQs", to: "/admissions" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "News & Events", to: "/news-events" },
      { label: "Notices", to: "/notices" },
      { label: "Examination", to: "/examination" },
      { label: "Transparency", to: "/transparency" },
      { label: "Careers", to: "/careers" },
    ],
  },
] as const;
