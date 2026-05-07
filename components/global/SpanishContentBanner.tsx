"use client";

import * as React from "react";
import { Phone, X } from "lucide-react";
import { site } from "@/lib/site";
import { useLanguage } from "@/components/global/LanguageProvider";

const DISMISS_KEY = "renewit.esBannerDismissed";

/**
 * Slim banner shown only when ES is selected. Acknowledges that the page body
 * may still be in English while a full Spanish content pass is in progress,
 * and surfaces the bilingual phone CTA prominently.
 *
 * Dismissible, choice persists in localStorage so we don't nag.
 */
export function SpanishContentBanner() {
 const { locale, t } = useLanguage();
 const [dismissed, setDismissed] = React.useState(false);

 React.useEffect(() => {
 try {
 const v = window.localStorage.getItem(DISMISS_KEY);
 if (v === "1") setDismissed(true);
 } catch {
 /* ignore */
 }
 }, []);

 // Reset dismissal when user re-enters Spanish, they probably want the info.
 React.useEffect(() => {
 if (locale !== "es") setDismissed(false);
 }, [locale]);

 if (locale !== "es" || dismissed) return null;

 const dismiss = () => {
 setDismissed(true);
 try {
 window.localStorage.setItem(DISMISS_KEY, "1");
 } catch {
 /* ignore */
 }
 };

 return (
 <div
 role="status"
 className="bg-[var(--color-rust)] text-white"
 >
 <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2.5 sm:px-8 lg:px-12">
 <p className="text-[13px] leading-snug">
 {t("esBanner.message")}
 </p>
 <div className="flex shrink-0 items-center gap-3">
 <a
 href={site.phoneHref}
 className="hidden items-center gap-1.5 text-[13px] font-semibold underline-offset-2 hover:underline sm:inline-flex"
 >
 <Phone className="h-3.5 w-3.5" />
 {site.phone}
 </a>
 <button
 type="button"
 onClick={dismiss}
 aria-label="Cerrar"
 className="-mr-2 p-1.5 text-white/80 transition-colors hover:text-white"
 >
 <X className="h-4 w-4" />
 </button>
 </div>
 </div>
 </div>
 );
}
