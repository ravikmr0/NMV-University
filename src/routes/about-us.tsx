import { createFileRoute } from "@tanstack/react-router";
import { seo, INFO_PENDING } from "@/lib/site";
import { JsonLd, PageHeader, Section, SectionHeading, breadcrumbSchema } from "@/components/site/Page";
import { CtaLink } from "@/components/site/Cta";

export const Route = createFileRoute("/about-us")({
  head: () =>
    seo({
      title: "About NMV University | Tamil Nadu Private University",
      description:
        "About NMV University — a multidisciplinary State Private University in Tamil Nadu established under the Tamil Nadu Private Universities Act, 2019, with its main campus near Madurai.",
      path: "/about-us",
    }),
  component: AboutPage,
});

const sections = [
  {
    id: "about",
    title: "About NMV University",
    body: [
      "NMV University is established under the Tamil Nadu Private Universities Act, 2019 with the vision to transform education by imparting 21st-century skills and preparing learners for an Industry 5.0-ready future.",
      "The university is headquartered in Chennai, Tamil Nadu, with its main campus near Madurai. Its academic approach emphasises multidisciplinary education, innovation, research, technology, industry relevance, experiential learning and future-ready skills.",
    ],
  },
  {
    id: "vision-mission",
    title: "Vision & Mission",
    body: [
      "Vision: To transform education by developing knowledge, skills, innovation and leadership for a rapidly changing world.",
      "Mission: Quality education, multidisciplinary learning, research and innovation, technology-enabled education, industry collaboration, entrepreneurship, social responsibility and future-ready skills.",
    ],
  },
  { id: "leadership", title: "Leadership", body: [INFO_PENDING] },
  { id: "governance", title: "Governance", body: [INFO_PENDING] },
  { id: "chancellor", title: "Chancellor / Vice Chancellor", body: [INFO_PENDING] },
  { id: "administration", title: "University Administration", body: [INFO_PENDING] },
  {
    id: "statutory-status",
    title: "Statutory Status",
    body: [
      "NMV University is established under the Tamil Nadu Private Universities Act, 2019. The Tamil Nadu Government Gazette records the university's inclusion in the Schedule to the Act through G.O.Ms. No. 82, Higher Education (K2), dated 26 February 2021.",
    ],
  },
  { id: "infrastructure", title: "Infrastructure", body: [INFO_PENDING] },
  { id: "campus", title: "Campus", body: ["Main campus near Madurai, Tamil Nadu. " + INFO_PENDING] },
  { id: "institutional-information", title: "Institutional Information", body: [INFO_PENDING] },
];

function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "About", path: "/about-us" }])} />
      <PageHeader
        title="About NMV University"
        intro="A multidisciplinary State Private University in Tamil Nadu, committed to transparent, credible and future-ready higher education."
        crumbs={[{ label: "About" }]}
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
          <nav aria-label="On this page" className="h-max lg:sticky lg:top-28">
            <p className="eyebrow text-muted-foreground">On this page</p>
            <ul className="mt-4 space-y-2 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-muted-foreground hover:text-primary">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-12">
            {sections.map((s) => (
              <article key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="rule-gold text-2xl font-semibold">{s.title}</h2>
                {s.body.map((p) => (
                  <p key={p} className="mt-4 leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
              </article>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <CtaLink to="/recognition-and-approvals">Recognition & Approvals</CtaLink>
              <CtaLink to="/contact-us" variant="outline">
                Contact the University
              </CtaLink>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
