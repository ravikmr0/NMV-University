import { createFileRoute } from "@tanstack/react-router";
import { seo, INFO_PENDING } from "@/lib/site";
import { JsonLd, PageHeader, Section, SectionHeading, breadcrumbSchema } from "@/components/site/Page";
import researchImage from "@/assets/research-lab.jpg";

export const Route = createFileRoute("/research")({
  head: () =>
    seo({
      title: "Research & Innovation | NMV University",
      description:
        "Research and innovation at NMV University: interdisciplinary research, agricultural innovation, emerging technologies, industry collaboration and student research.",
      path: "/research",
    }),
  component: ResearchPage,
});

const focus = [
  "Interdisciplinary research",
  "Agricultural innovation",
  "Emerging technologies",
  "Industry collaboration",
  "Student research",
  "Faculty research",
  "Innovation ecosystem",
];

function ResearchPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Research", path: "/research" }])} />
      <PageHeader
        title="Research. Innovation. Impact."
        intro="Building a research culture that connects disciplines, technology and real-world problems."
        crumbs={[{ label: "Research" }]}
      />
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Focus areas" title="Where our research is directed" />
            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {focus.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <img
            src={researchImage}
            alt="Researchers working with instruments in a university laboratory"
            width={1536}
            height={1024}
            loading="lazy"
            className="w-full rounded-md object-cover shadow-card"
          />
        </div>
      </Section>
      <Section tone="surface">
        <SectionHeading eyebrow="Research at NMV" title="Centres, publications and collaboration" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {["Research Centres", "Innovation", "Publications", "Industry Collaboration"].map((c) => (
            <article key={c} className="rounded-md border border-border bg-card p-7">
              <h3 className="font-semibold">{c}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{INFO_PENDING}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
