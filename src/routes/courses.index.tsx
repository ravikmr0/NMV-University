import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, ArrowRight } from "lucide-react";
import { seo } from "@/lib/site";
import { JsonLd, PageHeader, Section, breadcrumbSchema } from "@/components/site/Page";
import { courses, courseCategories } from "@/data/courses";

export const Route = createFileRoute("/courses/")({
  head: () =>
    seo({
      title: "Courses & Programs | NMV University",
      description:
        "Search and filter verified academic programmes offered by NMV University, including B.Sc. (Hons.) Agriculture at NMV Institute of Agriculture and Technology.",
      path: "/courses",
    }),
  component: CoursesPage,
});

function CoursesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () =>
      courses.filter(
        (c) =>
          (category === "All" || c.category === category) &&
          `${c.name} ${c.school} ${c.category}`.toLowerCase().includes(query.toLowerCase()),
      ),
    [query, category],
  );

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Courses", path: "/courses" }])} />
      <PageHeader
        title="Courses & Programs"
        intro="Only programmes verified by the university are listed. Further programmes will be published as they are confirmed."
        crumbs={[{ label: "Courses" }]}
      />

      <Section>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-sm">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <label htmlFor="course-search" className="sr-only">
              Search courses
            </label>
            <input
              id="course-search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search programmes"
              className="h-11 w-full rounded-sm border border-input bg-background pl-9 pr-3 text-sm"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", ...courseCategories.map((c) => c.name)].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={`min-h-10 rounded-sm border px-4 text-sm font-medium transition-colors ${
                  category === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background hover:bg-secondary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filtered.map((c) => (
            <article key={c.slug} className="flex flex-col rounded-md border border-border bg-card p-7">
              <p className="eyebrow text-primary">
                {c.category} · {c.level}
              </p>
              <h2 className="mt-3 text-xl font-semibold">{c.name}</h2>
              <dl className="mt-4 grid gap-2 text-sm text-muted-foreground">
                <div className="flex gap-2">
                  <dt className="font-medium text-foreground">Degree:</dt>
                  <dd>{c.degree}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-foreground">Duration:</dt>
                  <dd>{c.duration}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-foreground">Mode:</dt>
                  <dd>{c.mode}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-medium text-foreground">School:</dt>
                  <dd>{c.school}</dd>
                </div>
              </dl>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {c.overview.slice(0, 180)}…
              </p>
              <Link
                to="/courses/$slug"
                params={{ slug: c.slug }}
                className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:underline"
              >
                View programme <ArrowRight className="ml-1.5 size-4" />
              </Link>
            </article>
          ))}
          {filtered.length === 0 && (
            <p className="text-muted-foreground">
              No programmes match your search. Information will be updated by the university.
            </p>
          )}
        </div>
      </Section>
    </>
  );
}
