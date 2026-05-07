"use client";

import * as React from "react";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { useTranslation } from "@/components/global/LanguageProvider";

export function MobileStickyBar() {
  const { t } = useTranslation();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--color-stone)] bg-white/95 backdrop-blur shadow-[0_-4px_20px_-4px_rgba(0,0,0,0.08)] lg:hidden">
      <div className="grid grid-cols-2">
        <a
          href={site.phoneHref}
          className="flex items-center justify-center gap-2 bg-[var(--color-cream)] py-4 text-[15px] font-semibold text-[var(--color-charcoal)]"
        >
          <Phone className="h-4 w-4" />
          {t("mobileBar.giveUsACall")}
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 bg-[var(--color-rust)] py-4 text-[15px] font-semibold text-white"
        >
          {t("mobileBar.freeAssessment")}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
