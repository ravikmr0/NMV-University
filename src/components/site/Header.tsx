import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, GraduationCap } from "lucide-react";
import { mainNav, topBarLinks } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="hidden bg-navy-deep text-navy-foreground md:block">
        <div className="container-page flex h-9 items-center justify-between text-xs">
          <p className="font-medium tracking-wide">NMV University | Tamil Nadu</p>
          <nav aria-label="Utility">
            <ul className="flex items-center gap-5">
              {topBarLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="opacity-85 transition-opacity hover:opacity-100">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link to="/" className="flex items-center gap-3" aria-label="NMV University home">
          <span className="flex size-10 items-center justify-center rounded-sm bg-navy text-navy-foreground">
            <GraduationCap className="size-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold text-navy">NMV University</span>
            <span className="block text-[11px] text-muted-foreground">
              State Private University, Tamil Nadu
            </span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-5 text-sm font-medium">
            {mainNav.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-foreground/80 transition-colors hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/admissions"
            className="hidden rounded-sm bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy sm:inline-flex"
          >
            Apply Now
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-sm border border-border xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-border bg-background xl:hidden">
          <ul className="container-page grid gap-1 py-3">
            {[...mainNav, ...topBarLinks].map((item) => (
              <li key={`${item.label}-${item.to}`}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-sm px-2 py-3 text-base font-medium text-foreground/90 hover:bg-secondary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
