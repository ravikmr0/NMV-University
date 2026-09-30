import { createFileRoute } from "@tanstack/react-router";
import { seo, INFO_PENDING } from "@/lib/site";
import { JsonLd, PageHeader, Section, SectionHeading, breadcrumbSchema } from "@/components/site/Page";
import { CtaLink } from "@/components/site/Cta";
import { courseCategories } from "@/data/courses";

export const Route = createFileRoute("/academics")({
  head: () =>
    seo({
      title: "Academics | Schools, Programs & Regulations | NMV University",
      description:
        "Academic structure at NMV University: schools and faculties, undergraduate, postgraduate and research programmes, academic calendar, examination and academic regulations.",
      path: "/academics",
    }),
  component: AcademicsPage,
});

const blocks = [
  { title: "Schools / Faculties", body: INFO_PENDING },
  { title: "Undergraduate Programs", body: "B.Sc. (Hons.) Agriculture is offered at the main campus near Madurai." },
  { title: "Postgraduate Programs", body: INFO_PENDING },
  { title: "Research Programs", body: INFO_PENDING },
  { title: "Academic Calendar", body: INFO_PENDING },
  { title: "Examination", body: INFO_PENDING },
  { title: "Academic Regulations", body: INFO_PENDING },
];

function AcademicsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Academics", path: "/academics" }])} />
      <PageHeader
        title="Academics"
        intro="Multidisciplinary academic structure built around quality teaching, research and industry relevance."
        crumbs={[{ label: "Academics" }]}
      />
      <Section>
        <SectionHeading eyebrow="Academic structure" title="Schools, programmes and regulations" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blocks.map((b) => (
            <article key={b.title} className="rounded-md border border-border bg-card p-7">
              <h3 className="text-lg font-semibold">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="surface">
        <SectionHeading eyebrow="Disciplines" title="Academic categories" />
        <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {courseCategories.map((c) => (
            <li key={c.name} className="rounded-md border border-border bg-card p-6">
              <h3 className="font-semibold">{c.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <CtaLink to="/courses">View All Programs</CtaLink>
        </div>
      </Section>
    </>
  );
}
