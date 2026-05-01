import * as React from "react";
import { cn } from "@/lib/utils";

type Tone = "white" | "cream" | "charcoal" | "ink";

export function Section({
  className,
  children,
  tone = "white",
  padded = true,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  tone?: Tone;
  padded?: boolean;
  id?: string;
}) {
  const toneClasses: Record<Tone, string> = {
    white: "bg-white text-[var(--color-ink)]",
    cream: "bg-[var(--color-cream)] text-[var(--color-ink)]",
    charcoal: "bg-[var(--color-charcoal)] text-[var(--color-cream)]",
    ink: "bg-[var(--color-ink)] text-[var(--color-cream)]",
  };

  return (
    <section
      id={id}
      className={cn(
        toneClasses[tone],
        padded && "py-20 md:py-28 lg:py-36",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function Eyebrow({
  children,
  className,
  tone = "rust",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "rust" | "muted" | "cream";
}) {
  const toneClass =
    tone === "rust"
      ? "text-[var(--color-rust)]"
      : tone === "cream"
        ? "text-[var(--color-cream)]"
        : "text-[var(--color-slate)]";
  return (
    <span className={cn("eyebrow", toneClass, className)}>{children}</span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  tone = "ink",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  tone?: "ink" | "cream";
}) {
  const titleColor = tone === "cream" ? "text-white" : "text-[var(--color-charcoal)]";
  const descColor = tone === "cream" ? "text-[var(--color-cream)]/80" : "text-[var(--color-slate)]";

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Eyebrow tone={tone === "cream" ? "cream" : "rust"} className="mb-4 block">
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={cn(
          "font-display font-bold tracking-[-0.025em] text-[40px] leading-[1.05] md:text-[52px]",
          titleColor,
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-5 text-[18px] leading-relaxed md:text-[20px]", descColor)}>
          {description}
        </p>
      )}
    </div>
  );
}
