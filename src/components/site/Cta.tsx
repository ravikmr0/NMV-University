import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

type Variant = "primary" | "outline" | "gold" | "ghostLight";

const styles: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-navy border border-transparent",
  outline:
    "border border-border bg-background text-foreground hover:bg-secondary",
  gold: "bg-gold text-gold-foreground hover:brightness-95 border border-transparent",
  ghostLight:
    "border border-navy-foreground/35 text-navy-foreground hover:bg-navy-foreground/10",
};

export function CtaLink({
  to,
  children,
  variant = "primary",
  params,
}: {
  to: string;
  children: ReactNode;
  variant?: Variant;
  params?: Record<string, string>;
}) {
  return (
    <Link
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      to={to as any}
      params={params as never}
      className={`inline-flex min-h-11 items-center justify-center rounded-sm px-5 py-2.5 text-sm font-semibold transition-colors ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
