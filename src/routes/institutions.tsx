import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2 } from "lucide-react";
import { seo } from "@/lib/site";
import { JsonLd, PageHeader, Section, breadcrumbSchema } from "@/components/site/Page";
import { institutions } from "@/data/institutions";

export const Route = createFileRoute("/institutions")({
  head: () =>
    seo({
      title: "Institutions & Constituent Colleges | NMV University",
      description:
        "Verified constituent institutions, schools and centres of NMV University, including NMV Institute of Agriculture and Technology near Madurai, Tamil Nadu.",
      path: "/institutions",
    }),
  component: InstitutionsPage,
});

function InstitutionsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Institutions", path: "/institutions" }])} />
      <PageHeader
        title="Institutions"
        intro="Constituent institutions, schools and centres verified by the university."
        crumbs={[{ label: "Institutions" }]}
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {institutions.map((i) => (
            <article key={i.slug} className="flex flex-col rounded-md border border-border bg-card p-7 shadow-card">
              <span className="flex size-12 items-center justify-center rounded-sm bg-navy text-navy-foreground">
                <Building2 className="size-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-xl font-semibold">{i.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{i.location}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{i.focus}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {i.programs.map((p) => (
                  <li key={p} className="rounded-sm border border-border bg-surface px-3 py-1.5 text-xs font-medium">
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                to="/agriculture"
                className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:underline"
              >
                View Institution <ArrowRight className="ml-1.5 size-4" />
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-sm text-muted-foreground">
          Additional institutions will be listed here once verified by the university.
        </p>
      </Section>
    </>
  );
}
