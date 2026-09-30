import { createFileRoute } from "@tanstack/react-router";
import { seo, INFO_PENDING } from "@/lib/site";
import { JsonLd, PageHeader, Section, SectionHeading, breadcrumbSchema } from "@/components/site/Page";

export const Route = createFileRoute("/recognition-and-approvals")({
  head: () =>
    seo({
      title: "Recognition & Approvals | NMV University",
      description:
        "Statutory establishment and regulatory information for NMV University, established under the Tamil Nadu Private Universities Act, 2019 (G.O.Ms. No. 82, Higher Education (K2), dated 26 February 2021).",
      path: "/recognition-and-approvals",
    }),
  component: RecognitionPage,
});

const facts = [
  { label: "Statute", value: "Tamil Nadu Private Universities Act, 2019" },
  { label: "University", value: "NMV University" },
  { label: "Authority", value: "Government of Tamil Nadu Gazette notification" },
  { label: "Government Order", value: "G.O.Ms. No. 82, Higher Education (K2)" },
  { label: "Date", value: "26 February 2021" },
];

function RecognitionPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Recognition & Approvals", path: "/recognition-and-approvals" },
        ])}
      />
      <PageHeader
        title="University Status & Legal Information"
        intro="Verified statutory information about the establishment of NMV University."
        crumbs={[{ label: "Recognition & Approvals" }]}
      />

      <Section>
        <SectionHeading
          eyebrow="Statutory Establishment"
          title="Established under the Tamil Nadu Private Universities Act, 2019"
          intro="The Tamil Nadu Government Gazette records NMV University's inclusion in the Schedule to the Tamil Nadu Private Universities Act, 2019 through G.O.Ms. No. 82, Higher Education (K2), dated 26 February 2021."
        />

        <dl className="mt-10 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2">
          {facts.map((f) => (
            <div key={f.label} className="bg-card p-6">
              <dt className="eyebrow text-muted-foreground">{f.label}</dt>
              <dd className="mt-2 font-semibold">{f.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap gap-3">
          {["View Government Gazette", "View University Documents", "View Regulatory Information"].map(
            (b) => (
              <span
                key={b}
                className="inline-flex min-h-11 items-center rounded-sm border border-border bg-surface px-5 text-sm font-semibold text-muted-foreground"
                aria-disabled="true"
                title={INFO_PENDING}
              >
                {b} — document pending
              </span>
            ),
          )}
        </div>

        <p className="mt-8 max-w-3xl rounded-md border-l-4 border-gold bg-surface p-6 text-sm leading-relaxed text-muted-foreground">
          Only authentic official documents will be linked here. No regulatory approval, accreditation
          or affiliation is claimed beyond the statutory establishment recorded above.
          {" "}
          {INFO_PENDING}
        </p>
      </Section>
    </>
  );
}
