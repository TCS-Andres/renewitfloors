"use client";

import * as React from "react";
import { useLanguage } from "./LanguageProvider";
import { LOCALES, type Locale } from "@/lib/i18n/dictionaries";
import { cn } from "@/lib/utils";

const labels: Record<Locale, string> = { en: "EN", es: "ES" };
const a11yLabels: Record<Locale, string> = {
  en: "Switch to English",
  es: "Cambiar a español",
};

/**
 * Compact pill toggle for the header. Renders two letter-pill buttons
 * (EN | ES) with a sliding selection indicator. Variant tunes color
 * for transparent (homepage hero) vs solid (inner pages and dark menus)
 * backgrounds.
 */
export function LanguageToggle({
  variant = "solid",
  className,
}: {
  variant?: "solid" | "transparent" | "dark";
  className?: string;
}) {
  const { locale, setLocale } = useLanguage();

  const containerClass =
    variant === "transparent"
      ? "border border-white/30 bg-white/10 backdrop-blur"
      : variant === "dark"
        ? "border border-white/15 bg-white/5"
        : "border border-[var(--color-stone)] bg-white";

  const baseBtn =
    "relative z-10 flex h-7 w-9 items-center justify-center text-[12px] font-semibold tracking-wider transition-colors duration-200";

  const activeText =
    variant === "transparent" || variant === "dark" ? "text-white" : "text-white";
  const inactiveText =
    variant === "transparent"
      ? "text-white/80 hover:text-white"
      : variant === "dark"
        ? "text-white/70 hover:text-white"
        : "text-[var(--color-slate)] hover:text-[var(--color-charcoal)]";

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "relative inline-flex items-center rounded-full p-0.5",
        containerClass,
        className,
      )}
    >
      {/* Sliding selection pill */}
      <span
        aria-hidden
        className="absolute top-0.5 left-0.5 h-7 w-9 rounded-full bg-[var(--color-rust)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transform: `translateX(${locale === "es" ? "calc(100% + 0px)" : "0"})`,
        }}
      />
      {LOCALES.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-label={a11yLabels[l]}
          aria-pressed={locale === l}
          className={cn(baseBtn, locale === l ? activeText : inactiveText)}
        >
          {labels[l]}
        </button>
      ))}
    </div>
  );
}
