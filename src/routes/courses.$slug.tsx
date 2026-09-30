import { createFileRoute, notFound } from "@tanstack/react-router";
import { canonical, seo } from "@/lib/site";
import { JsonLd, PageHeader, Section, breadcrumbSchema } from "@/components/site/Page";
import { CtaLink } from "@/components/site/Cta";
import { getCourse } from "@/data/courses";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = getCourse(params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Course not found | NMV University" }, { name: "robots", content: "noindex" }] };
    }
    const c = loaderData.course;
    return seo({
      title: `${c.name} | NMV University`,
      description: `${c.name} at ${c.school}, NMV University. Duration ${c.duration}. Eligibility, curriculum, careers and admission information.`,
      path: `/courses/${c.slug}`,
    });
  },
  component: CourseDetail,
});

function CourseDetail() {
  const { course } = Route.useLoaderData();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Courses", path: "/courses" },
            { name: course.name, path: `/courses/${course.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Course",
            name: course.name,
            description: course.overview,
            url: canonical(`/courses/${course.slug}`),
            provider: {
              "@type": "EducationalOrganization",
              name: "NMV University",
              url: canonical("/"),
            },
          },
        ]}
      />
      <PageHeader
        title={course.name}
        intro={`${course.degree} · ${course.duration} · ${course.school}`}
        crumbs={[{ label: "Courses", to: "/courses" }, { label: course.name }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
          <div className="space-y-10">
            <article>
              <h2 className="rule-gold text-2xl font-semibold">Course Overview</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{course.overview}</p>
            </article>

            <article>
              <h2 className="rule-gold text-2xl font-semibold">Curriculum</h2>
              <ul className="mt-4 space-y-2">
                {course.curriculum.map((c) => (
                  <li key={c} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </article>

            <article>
              <h2 className="rule-gold text-2xl font-semibold">Career Opportunities</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {course.careers.map((c) => (
                  <li key={c} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </article>

            <article>
              <h2 className="rule-gold text-2xl font-semibold">Facilities</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {course.facilities.map((c) => (
                  <li key={c} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </article>

            <article>
              <h2 className="rule-gold text-2xl font-semibold">Frequently Asked Questions</h2>
              <dl className="mt-4 divide-y divide-border border-y border-border">
                {course.faqs.map((f) => (
                  <div key={f.q} className="py-5">
                    <dt className="font-semibold">{f.q}</dt>
                    <dd className="mt-2 text-sm text-muted-foreground">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </div>

          <aside className="h-max rounded-md border border-border bg-surface p-7 lg:sticky lg:top-28">
            <h2 className="text-lg font-semibold">Programme details</h2>
            <dl className="mt-5 space-y-4 text-sm">
              {[
                ["Degree", course.degree],
                ["Duration", course.duration],
                ["Mode", course.mode],
                ["Department / School", course.school],
                ["Eligibility", course.eligibility],
                ["Fees", course.fees],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="eyebrow text-muted-foreground">{k}</dt>
                  <dd className="mt-1 leading-relaxed">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 grid gap-3">
              <CtaLink to="/admissions">Apply Now</CtaLink>
              <CtaLink to="/contact-us" variant="outline">
                Talk to Admissions
              </CtaLink>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
