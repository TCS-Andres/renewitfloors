"use client";

import * as React from "react";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { useTranslation } from "@/components/global/LanguageProvider";

export function PreFooterCTA({
  heading,
  subhead,
  headingEs,
  subheadEs,
}: {
  heading?: string;
  subhead?: string;
  headingEs?: string;
  subheadEs?: string;
}) {
  const { t, locale } = useTranslation();
  // Defaults pull from the dictionary. Caller-provided heading/subhead are
  // dynamic (city/service-specific). When the caller also provides an Es
  // variant, we render that on Spanish.
  const finalHeading =
    heading != null
      ? locale === "es" && headingEs ? headingEs : heading
      : t("preFooter.heading");
  const finalSubhead =
    subhead != null
      ? locale === "es" && subheadEs ? subheadEs : subhead
      : t("preFooter.subhead");
  return (
    <Section tone="cream" padded>
      <Container>
        <Reveal className="text-center max-w-3xl mx-auto">
          <h2 className="font-display font-bold text-[40px] leading-[1.05] tracking-[-0.025em] text-[var(--color-charcoal)] md:text-[56px]">
            {finalHeading}
          </h2>
          <p className="mt-6 text-[18px] leading-relaxed text-[var(--color-slate)] md:text-[20px]">
            {finalSubhead}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" size="lg" showArrow>
              {t("cta.fullFreeAssessment")}
            </Button>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--color-charcoal)] transition-colors hover:text-[var(--color-rust)]"
            >
              <Phone className="h-4 w-4" />
              {t("cta.callPrefix")}
              {site.phone}
            </a>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
