import { createFileRoute } from "@tanstack/react-router";
import { seo, INFO_PENDING } from "@/lib/site";
import { JsonLd, PageHeader, Section, SectionHeading, breadcrumbSchema } from "@/components/site/Page";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { courses } from "@/data/courses";

export const Route = createFileRoute("/admissions")({
  head: () =>
    seo({
      title: "Admissions | Apply to NMV University",
      description:
        "Admissions at NMV University: application process, eligibility, important dates, scholarships, prospectus and admission enquiry for programmes in Tamil Nadu.",
      path: "/admissions",
    }),
  component: AdmissionsPage,
});

const steps = [
  "Explore Programs",
  "Check Eligibility",
  "Submit Application",
  "Document Verification",
  "Admission Confirmation",
];

const faqs = [
  {
    q: "Which programmes are currently open?",
    a: "B.Sc. (Hons.) Agriculture at NMV Institute of Agriculture and Technology. Further programmes will be published once verified.",
  },
  { q: "What is the fee structure?", a: INFO_PENDING },
  { q: "Are scholarships available?", a: INFO_PENDING },
  { q: "What are the important dates?", a: INFO_PENDING },
];

function AdmissionsPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Admissions", path: "/admissions" }]),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />
      <PageHeader
        title="Begin Your Academic Journey at NMV University"
        intro="A transparent admission process, from programme discovery to admission confirmation."
        crumbs={[{ label: "Admissions" }]}
      />

      <Section>
        <SectionHeading eyebrow="Process" title="How to apply" />
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li key={s} className="rounded-md border border-border bg-card p-6">
              <span className="font-display text-3xl font-semibold text-gold">{`0${i + 1}`}</span>
              <p className="mt-2 text-sm font-semibold leading-snug">{s}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="surface">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Eligibility" title="Programme eligibility" />
            <div className="mt-8 space-y-6">
              {courses.map((c) => (
                <article key={c.slug} className="rounded-md border border-border bg-card p-6">
                  <h3 className="font-semibold">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.eligibility}</p>
                </article>
              ))}
            </div>

            <h2 className="mt-12 rule-gold text-2xl font-semibold">Fees, scholarships & dates</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Fee structure: {INFO_PENDING}</li>
              <li>Scholarships: {INFO_PENDING}</li>
              <li>Important dates: {INFO_PENDING}</li>
              <li>Prospectus download: {INFO_PENDING}</li>
            </ul>

            <h2 className="mt-12 rule-gold text-2xl font-semibold">FAQs</h2>
            <dl className="mt-4 divide-y divide-border border-y border-border">
              {faqs.map((f) => (
                <div key={f.q} className="py-5">
                  <dt className="font-semibold">{f.q}</dt>
                  <dd className="mt-2 text-sm text-muted-foreground">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:sticky lg:top-28 lg:h-max">
            <EnquiryForm />
          </div>
        </div>
      </Section>
    </>
  );
}
