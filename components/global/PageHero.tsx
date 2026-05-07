import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";

type Crumb = { name: string; href: string };

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  align = "left",
  tone = "cream",
}: {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumbs?: Crumb[];
  align?: "left" | "center";
  tone?: "cream" | "white" | "charcoal";
}) {
  const bg =
    tone === "cream"
      ? "bg-[var(--color-cream)]"
      : tone === "charcoal"
        ? "bg-[var(--color-charcoal)]"
        : "bg-white";
  const isDark = tone === "charcoal";
  const titleColor = isDark ? "text-white" : "text-[var(--color-charcoal)]";
  const descColor = isDark ? "text-[var(--color-cream)]/85" : "text-[var(--color-slate)]";
  const crumbColor = isDark ? "text-[var(--color-cream)]/60" : "text-[var(--color-slate)]";

  return (
    <section className={cn("pt-28 pb-16 md:pt-36 md:pb-24", bg)}>
      <Container>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className={cn("flex flex-wrap items-center gap-1.5 text-[13px]", crumbColor)}>
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="h-3 w-3 opacity-50" />}
                  {i === breadcrumbs.length - 1 ? (
                    <span className="font-medium">{crumb.name}</span>
                  ) : (
                    <Link
                      href={crumb.href}
                      className="hover:text-[var(--color-rust)] transition-colors"
                    >
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div
          className={cn(
            "max-w-4xl",
            align === "center" && "mx-auto text-center",
          )}
        >
          {eyebrow && (
            <Eyebrow tone={isDark ? "cream" : "rust"} className="mb-5 block">
              {eyebrow}
            </Eyebrow>
          )}
          <h1
            className={cn(
              "font-display font-bold tracking-[-0.03em] text-[44px] leading-[1.05] md:text-[72px]",
              titleColor,
            )}
          >
            {title}
          </h1>
          {description && (
            <p
              className={cn(
                "mt-6 max-w-2xl text-[18px] leading-relaxed md:text-[22px]",
                descColor,
                align === "center" && "mx-auto",
              )}
            >
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
