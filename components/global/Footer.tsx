"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site } from "@/lib/site";
import { categories } from "@/lib/content/services";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "@/components/global/LanguageProvider";

export function Footer() {
  const { t, locale } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-cream)]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo-white.png"
              alt={site.name}
              width={200}
              height={62}
              className="h-12 w-auto"
            />
            <p className="mt-6 font-display text-[18px] leading-snug text-white">
              {site.tagline}
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-[var(--color-cream)]/70">
              {t("footer.serviceAreasTagline")}
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-2 text-[12px] uppercase tracking-wider text-[var(--color-cream)]/60">
              <li>{t("trustBar.statYears")} {locale === "es" ? "Años" : "Years"}</li>
              <li>{t("trustBar.statFamily")}</li>
              <li>{t("trustBar.statWarranty")}</li>
              <li>{locale === "es" ? "Licenciados" : "Licensed"} &amp; {locale === "es" ? "Asegurados" : "Insured"}</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white">
              {t("footer.servicesTitle")}
            </h4>
            <ul className="space-y-3 text-[15px]">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/services/${cat.slug}`}
                    className="text-[var(--color-cream)]/80 transition-colors hover:text-[var(--color-rust)]"
                  >
                    {cat.shortName}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/services"
                  className="font-semibold text-[var(--color-rust)]"
                >
                  {t("footer.allServices")} →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white">
              {t("footer.companyTitle")}
            </h4>
            <ul className="space-y-3 text-[15px]">
              {[
                { href: "/about", labelKey: "nav.about" },
                { href: "/projects", labelKey: "nav.projects" },
                { href: "/testimonials", labelKey: "nav.testimonials" },
                { href: "/service-areas", labelKey: "nav.serviceAreas" },
                { href: "/faq", labelKey: "nav.faq" },
                { href: "/blog", labelKey: "nav.blog" },
                { href: "/contact", labelKey: "nav.contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[var(--color-cream)]/80 transition-colors hover:text-[var(--color-rust)]"
                  >
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white">
              {t("footer.contactTitle")}
            </h4>
            <ul className="space-y-3.5 text-[15px]">
              <li>
                <a
                  href={site.phoneHref}
                  className="group flex items-start gap-3 text-white"
                >
                  <Phone className="mt-1 h-4 w-4 shrink-0 text-[var(--color-rust)]" />
                  <span className="font-display text-[20px] font-semibold group-hover:text-[var(--color-rust)]">
                    {site.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="flex items-start gap-3 text-[var(--color-cream)]/80 transition-colors hover:text-[var(--color-rust)]"
                >
                  <Mail className="mt-1 h-4 w-4 shrink-0 text-[var(--color-rust)]" />
                  <span>{site.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[var(--color-cream)]/80">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-[var(--color-rust)]" />
                  <span>{t("footer.servingArea")}</span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[var(--color-cream)]/80">
                  <Clock className="mt-1 h-4 w-4 shrink-0 text-[var(--color-rust)]" />
                  <ul className="space-y-0.5">
                    {site.hours.map((h) => (
                      <li key={h.day}>
                        <span className="font-semibold">{h.day}:</span> {h.hours}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={site.social.instagram}
                className="rounded-full border border-white/15 px-3.5 py-1.5 text-[12px] font-medium text-[var(--color-cream)]/80 transition-colors hover:border-[var(--color-rust)] hover:text-[var(--color-rust)]"
              >
                Instagram
              </a>
              <a
                href={site.social.facebook}
                className="rounded-full border border-white/15 px-3.5 py-1.5 text-[12px] font-medium text-[var(--color-cream)]/80 transition-colors hover:border-[var(--color-rust)] hover:text-[var(--color-rust)]"
              >
                Facebook
              </a>
              <a
                href={site.social.google}
                className="rounded-full border border-white/15 px-3.5 py-1.5 text-[12px] font-medium text-[var(--color-cream)]/80 transition-colors hover:border-[var(--color-rust)] hover:text-[var(--color-rust)]"
              >
                Google
              </a>
            </div>

            <div className="mt-6">
              <Button href="/contact" size="md" className="w-full" showArrow>
                {t("cta.freeAssessment")}
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-7 text-[13px] text-[var(--color-cream)]/60">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p>
              © {year} {site.legalName}. {t("footer.copyright")}
            </p>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <li>
                <Link href="/privacy" className="hover:text-[var(--color-rust)]">
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[var(--color-rust)]">
                  {t("footer.terms")}
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="hover:text-[var(--color-rust)]">
                  {t("footer.sitemap")}
                </Link>
              </li>
              <li className="text-[var(--color-cream)]/40">
                {t("footer.builtBy")}{" "}
                <a
                  href="https://mycreativestrategist.com"
                  className="hover:text-[var(--color-rust)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Creative Strategist
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
