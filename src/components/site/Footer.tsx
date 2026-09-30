import { Link } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { footerNav, INFO_PENDING } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-navy-deep text-navy-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-sm bg-navy-foreground/10">
              <GraduationCap className="size-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-semibold">NMV University</span>
          </div>
          <p className="mt-4 max-w-sm text-sm opacity-80">
            A multidisciplinary State Private University in Tamil Nadu, established under the Tamil
            Nadu Private Universities Act, 2019.
          </p>
          <p className="mt-4 text-sm opacity-80">
            Official Website:{" "}
            <a className="underline underline-offset-4" href="https://nmvuniversity.com/">
              nmvuniversity.com
            </a>
          </p>
        </div>

        {footerNav.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <h2 className="eyebrow text-gold">{col.heading}</h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={`${col.heading}-${l.label}`}>
                  <Link to={l.to} className="opacity-85 transition-opacity hover:opacity-100">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="eyebrow text-gold">Contact</h2>
          <ul className="mt-4 space-y-2.5 text-sm opacity-85">
            <li>Headquarters: Chennai, Tamil Nadu</li>
            <li>Main campus: near Madurai, Tamil Nadu</li>
            <li>Phone: {INFO_PENDING}</li>
            <li>Email: {INFO_PENDING}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/15">
        <div className="container-page flex flex-col gap-2 py-5 text-xs opacity-75 sm:flex-row sm:items-center sm:justify-between">
          <p>© NMV University. All Rights Reserved.</p>
          <p>Official Website: nmvuniversity.com</p>
        </div>
      </div>
    </footer>
  );
}
