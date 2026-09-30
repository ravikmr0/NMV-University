import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ScrollText,
  MapPin,
  Layers,
  Rocket,
  ArrowRight,
  Plane,
  Cpu,
  Bot,
  BrainCircuit,
  Sprout,
  Lightbulb,
} from "lucide-react";
import heroImage from "@/assets/hero-campus.jpg";
import agriImage from "@/assets/agri-tech.jpg";
import researchImage from "@/assets/research-lab.jpg";
import { seo, SITE_URL } from "@/lib/site";
import { CtaLink } from "@/components/site/Cta";
import { JsonLd, Section, SectionHeading, organizationSchema } from "@/components/site/Page";
import { courseCategories, courses } from "@/data/courses";
import { articles } from "@/data/news";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "NMV University | State Private University in Tamil Nadu",
      description:
        "Explore NMV University, a multidisciplinary State Private University in Tamil Nadu focused on 21st-century skills, innovation, research and Industry 5.0-ready education.",
      path: "/",
    }),
  component: Home,
});

const trustCards = [
  { icon: ScrollText, label: "Established Under", value: "Tamil Nadu Private Universities Act, 2019" },
  { icon: MapPin, label: "Location", value: "Tamil Nadu" },
  { icon: Layers, label: "Academic Focus", value: "Multidisciplinary Education" },
  { icon: Rocket, label: "Future Focus", value: "21st Century Skills & Industry 5.0" },
];

const missionPoints = [
  "Quality education",
  "Multidisciplinary learning",
  "Research and innovation",
  "Technology-enabled education",
  "Industry collaboration",
  "Entrepreneurship",
  "Social responsibility",
  "Future-ready skills",
];

const agriChips = [
  { icon: Plane, label: "Drone Technology" },
  { icon: Cpu, label: "IoT" },
  { icon: Bot, label: "Robotics" },
  { icon: BrainCircuit, label: "AI / ML" },
  { icon: Sprout, label: "Smart Farming" },
  { icon: Lightbulb, label: "Innovation" },
];

function Home() {
  const agriculture = courses[0];

  return (
    <>
      <JsonLd
        data={[
          organizationSchema,
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "NMV University",
            url: `${SITE_URL}/`,
          },
        ]}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-navy-foreground">
        <img
          src={heroImage}
          alt="NMV University campus building at golden hour with students walking on the plaza"
          width={1920}
          height={1088}
          className="absolute inset-0 -z-10 size-full object-cover opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep/95 via-navy-deep/80 to-navy-deep/40" />
        <div className="container-page py-20 lg:py-32">
          <p className="eyebrow text-gold">Official Website · nmvuniversity.com</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight lg:text-6xl">NMV University</h1>
          <p className="mt-4 max-w-2xl font-display text-xl opacity-95 lg:text-2xl">
            Transforming Education for the 21st Century and Industry 5.0
          </p>
          <p className="mt-5 max-w-2xl text-base opacity-85 lg:text-lg">
            A multidisciplinary State Private University in Tamil Nadu focused on knowledge,
            innovation, technology and industry-ready education.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <CtaLink to="/courses" variant="gold">
              Explore Programs
            </CtaLink>
            <CtaLink to="/admissions">Apply Now</CtaLink>
            <CtaLink to="/recognition-and-approvals" variant="ghostLight">
              University Information
            </CtaLink>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border bg-surface">
        <div className="container-page grid gap-px py-0 sm:grid-cols-2 lg:grid-cols-4">
          {trustCards.map((c) => (
            <div key={c.label} className="flex gap-4 border-border px-1 py-7 lg:px-6 lg:[&+&]:border-l">
              <c.icon className="mt-0.5 size-6 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="eyebrow text-muted-foreground">{c.label}</p>
                <p className="mt-1.5 text-sm font-semibold leading-snug">{c.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="About" title="A university built for a changing world" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
              NMV University is established under the Tamil Nadu Private Universities Act, 2019 with
              the vision to transform education by imparting 21st-century skills and preparing
              learners for an Industry 5.0-ready future.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Headquartered in Chennai, Tamil Nadu, with its main campus near Madurai, the university
              focuses on multidisciplinary education, innovation, research, technology, industry
              relevance, experiential learning and future-ready skills.
            </p>
            <div className="mt-8">
              <CtaLink to="/about-us">
                Discover NMV University <ArrowRight className="ml-2 size-4" />
              </CtaLink>
            </div>
          </div>

          <div className="grid gap-6">
            <article className="rounded-md border border-border bg-card p-7 shadow-card">
              <h3 className="eyebrow text-primary">Vision</h3>
              <p className="mt-3 font-display text-xl leading-snug">
                To transform education by developing knowledge, skills, innovation and leadership for
                a rapidly changing world.
              </p>
            </article>
            <article className="rounded-md border border-border bg-card p-7 shadow-card">
              <h3 className="eyebrow text-primary">Mission</h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {missionPoints.map((m) => (
                  <li key={m} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {m}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </Section>

      {/* Programs */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Academics"
          title="Academic programs"
          intro="Programme listings are published only after they are verified by the university."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courseCategories.map((cat) => (
            <article key={cat.name} className="flex flex-col rounded-md border border-border bg-card p-7">
              <h3 className="text-lg font-semibold">{cat.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {cat.description}
              </p>
              {cat.status === "available" ? (
                <Link
                  to="/courses"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-primary hover:underline"
                >
                  View programs <ArrowRight className="ml-1.5 size-4" />
                </Link>
              ) : (
                <p className="mt-5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Information will be updated by the university
                </p>
              )}
            </article>
          ))}
        </div>
        <div className="mt-10">
          <CtaLink to="/courses">View All Programs</CtaLink>
        </div>
      </Section>

      {/* Agriculture feature */}
      <Section tone="navy">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="NMV Institute of Agriculture and Technology"
              title="Technology-Driven Agricultural Education"
              light
            />
            <p className="mt-6 leading-relaxed opacity-85">
              NMV Institute of Agriculture and Technology is a constituent college of NMV University
              offering B.Sc. (Hons.) Agriculture at the university's main campus near Madurai.
            </p>
            <p className="mt-4 leading-relaxed opacity-85">
              Students gain practical field learning alongside exposure to modern agricultural
              technology — drones, IoT, robotics, artificial intelligence, machine learning and smart
              agriculture.
            </p>
            <div className="mt-8">
              <CtaLink to="/agriculture" variant="gold">
                Explore Agriculture Program
              </CtaLink>
            </div>
          </div>
          <img
            src={agriImage}
            alt="Agriculture student operating a survey drone over a paddy field with IoT sensors"
            width={1536}
            height={1024}
            loading="lazy"
            className="w-full rounded-md object-cover shadow-raised"
          />
        </div>
      </Section>

      {/* Agriculture meets technology */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src={researchImage}
            alt="Students working with laboratory instruments in a university science laboratory"
            width={1536}
            height={1024}
            loading="lazy"
            className="w-full rounded-md object-cover shadow-card"
          />
          <div>
            <SectionHeading eyebrow="Future of Agriculture" title="Agriculture Meets Technology" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Explore modern agricultural education through practical exposure to emerging
              technologies and innovative agricultural practices.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {agriChips.map((chip) => (
                <li
                  key={chip.label}
                  className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface px-3 py-2 text-sm font-medium"
                >
                  <chip.icon className="size-4 text-primary" aria-hidden="true" />
                  {chip.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Admissions */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="Admissions"
          title="Begin Your Academic Journey at NMV University"
          intro="A clear, transparent admission process from programme discovery to confirmation."
        />
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {[
            "Explore Programs",
            "Check Eligibility",
            "Submit Application",
            "Document Verification",
            "Admission Confirmation",
          ].map((step, i) => (
            <li key={step} className="rounded-md border border-border bg-card p-6">
              <span className="font-display text-3xl font-semibold text-gold">{`0${i + 1}`}</span>
              <p className="mt-2 text-sm font-semibold leading-snug">{step}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap gap-3">
          <CtaLink to="/admissions">Apply Now</CtaLink>
          <CtaLink to="/admissions" variant="outline">
            Download Prospectus
          </CtaLink>
          <CtaLink to="/contact-us" variant="outline">
            Talk to Admissions
          </CtaLink>
        </div>
      </Section>

      {/* Research */}
      <Section>
        <SectionHeading
          eyebrow="Research & Innovation"
          title="Research. Innovation. Impact."
          intro="Interdisciplinary research, agricultural innovation, emerging technologies and industry collaboration."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {["Research Centres", "Innovation", "Publications", "Industry Collaboration"].map((c) => (
            <article key={c} className="rounded-md border border-border bg-card p-7">
              <h3 className="text-base font-semibold">{c}</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Information will be updated by the university.
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <CtaLink to="/research" variant="outline">
            Explore Research
          </CtaLink>
        </div>
      </Section>

      {/* News */}
      <Section tone="surface">
        <SectionHeading eyebrow="News & Events" title="Latest from the university" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {articles.map((a) => (
            <article key={a.slug} className="rounded-md border border-border bg-card p-7">
              <p className="eyebrow text-primary">
                {a.category} ·{" "}
                {new Date(a.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <h3 className="mt-3 text-lg font-semibold leading-snug">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
              <Link
                to="/news-events/$slug"
                params={{ slug: a.slug }}
                className="mt-5 inline-flex items-center text-sm font-semibold text-primary hover:underline"
              >
                Read more <ArrowRight className="ml-1.5 size-4" />
              </Link>
            </article>
          ))}
        </div>
      </Section>

      {/* Statutory strip */}
      <section className="bg-navy text-navy-foreground">
        <div className="container-page flex flex-col gap-6 py-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-xl font-semibold lg:text-2xl">University Status & Legal Information</h2>
            <p className="mt-3 text-sm opacity-85">
              NMV University is established under the Tamil Nadu Private Universities Act, 2019. The
              Tamil Nadu Government Gazette records the university's inclusion in the Schedule to the
              Act through G.O.Ms. No. 82, Higher Education (K2), dated 26 February 2021.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <CtaLink to="/recognition-and-approvals" variant="gold">
              Recognition & Approvals
            </CtaLink>
            <CtaLink to="/courses/$slug" params={{ slug: agriculture.slug }} variant="ghostLight">
              B.Sc. (Hons.) Agriculture
            </CtaLink>
          </div>
        </div>
      </section>
    </>
  );
}
