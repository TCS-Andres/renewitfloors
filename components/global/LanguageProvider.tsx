"use client";

import * as React from "react";
import {
 DEFAULT_LOCALE,
 LOCALES,
 type Locale,
 translate,
} from "@/lib/i18n/dictionaries";

type Ctx = {
 locale: Locale;
 setLocale: (l: Locale) => void;
 t: (key: string) => string;
};

const LanguageContext = React.createContext<Ctx | null>(null);

const STORAGE_KEY = "renewit.locale";

/**
 * Provides the current locale + a translation helper to every descendant.
 *
 * Static-export friendly: server renders English by default, then on client
 * mount we hydrate from localStorage and re-render in the user's preferred
 * language. The brief flicker only affects users who previously chose ES.
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
 const [locale, setLocaleState] = React.useState<Locale>(DEFAULT_LOCALE);

 // Hydrate from localStorage on first client render
 React.useEffect(() => {
 try {
 const stored = window.localStorage.getItem(STORAGE_KEY);
 if (stored && (LOCALES as readonly string[]).includes(stored)) {
 setLocaleState(stored as Locale);
 document.documentElement.lang = stored;
 }
 } catch {
 // localStorage might be disabled, silently default to English
 }
 }, []);

 const setLocale = React.useCallback((l: Locale) => {
 setLocaleState(l);
 try {
 window.localStorage.setItem(STORAGE_KEY, l);
 } catch {
 /* ignore */
 }
 if (typeof document !== "undefined") {
 document.documentElement.lang = l;
 }
 }, []);

 const t = React.useCallback((key: string) => translate(key, locale), [locale]);

 const value = React.useMemo(
 () => ({ locale, setLocale, t }),
 [locale, setLocale, t],
 );

 return (
 <LanguageContext.Provider value={value}>
 {children}
 </LanguageContext.Provider>
 );
}

export function useLanguage(): Ctx {
 const ctx = React.useContext(LanguageContext);
 if (!ctx) {
 // Safe fallback when used outside the provider (e.g. in a test)
 return {
 locale: DEFAULT_LOCALE,
 setLocale: () => {},
 t: (key: string) => translate(key, DEFAULT_LOCALE),
 };
 }
 return ctx;
}

/** Convenience hook, returns just (t, locale). */
export function useTranslation() {
 const { t, locale } = useLanguage();
 return { t, locale };
}
