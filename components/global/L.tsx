"use client";

import * as React from "react";
import { useLanguage } from "./LanguageProvider";

/**
 * Inline locale switch. Render English by default; switch to Spanish when the
 * active locale is "es" and a Spanish value was provided. Falls back to
 * English when the Spanish version is missing.
 *
 * Used inside server-rendered page templates wherever a piece of copy has a
 * pre-translated Spanish counterpart on the data record. Component name is
 * intentionally short because it appears a lot.
 *
 * <L en={service.h1} es={service.h1Es} />
 * <L en={service.body} es={service.bodyEs} />
 */
export function L({
 en,
 es,
}: {
 en: React.ReactNode;
 es?: React.ReactNode;
}) {
 const { locale } = useLanguage();
 if (locale === "es" && es != null && es !== "") return <>{es}</>;
 return <>{en}</>;
}

/**
 * String form of the same switch, for places where you need a string value
 * (e.g., HTML attributes like alt, title, aria-label). Returns one or the
 * other and is safe in any client context.
 */
export function useL() {
 const { locale } = useLanguage();
 return (en: string, es?: string) =>
 locale === "es" && es && es !== "" ? es : en;
}
