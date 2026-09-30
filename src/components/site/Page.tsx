import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { canonical, SITE_NAME, SITE_URL } from "@/lib/site";

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs">
      <ol className="flex flex-wrap items-center gap-1.5 opacity-80">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        {items.map((c) => (
          <li key={c.label} className="flex items-center gap-1.5">
            <ChevronRight className="size-3.5" aria-hidden="true" />
            {c.to ? (
              <Link to={c.to} className="hover:underline">
                {c.label}
              </Link>
            ) : (
              <span aria-current="page">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHeader({
  title,
  intro,
  crumbs,
}: {
  title: string;
  intro?: string;
  crumbs: Crumb[];
}) {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="container-page py-12 lg:py-16">
        <Breadcrumbs items={crumbs} />
        <h1 className="mt-5 max-w-3xl text-3xl font-semibold lg:text-5xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-base opacity-85 lg:text-lg">{intro}</p>}
      </div>
    </section>
  );
}

export function Section({
  children,
  className = "",
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "surface" | "navy";
}) {
  const tones = {
    default: "bg-background",
    surface: "bg-surface",
    navy: "bg-navy text-navy-foreground",
  };
  return (
    <section className={`${tones[tone]} ${className}`}>
      <div className="container-page py-14 lg:py-20">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className={`eyebrow ${light ? "text-gold" : "text-primary"}`}>{eyebrow}</p>
      )}
      <h2 className="mt-3 rule-gold text-2xl font-semibold lg:text-4xl">{title}</h2>
      {intro && (
        <p className={`mt-5 text-base leading-relaxed lg:text-lg ${light ? "opacity-85" : "text-muted-foreground"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: canonical(it.path),
    })),
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_NAME,
  alternateName: "NMV University, Tamil Nadu",
  url: `${SITE_URL}/`,
  description:
    "NMV University is a multidisciplinary State Private University in Tamil Nadu established under the Tamil Nadu Private Universities Act, 2019.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
};
