"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { categories, getServicesByCategory } from "@/lib/content/services";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "@/components/global/LanguageProvider";
import { LanguageToggle } from "@/components/global/LanguageToggle";

const navLinks = [
  { href: "/projects", labelKey: "nav.projects" },
  { href: "/about", labelKey: "nav.about" },
  { href: "/service-areas", labelKey: "nav.serviceAreas" },
  { href: "/faq", labelKey: "nav.faq" },
  { href: "/contact", labelKey: "nav.contact" },
];

export function Header() {
  const pathname = usePathname();
  const { t } = useTranslation();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [megaOpen, setMegaOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !megaOpen;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          transparent
            ? "bg-transparent"
            : "bg-white shadow-[0_1px_0_0_var(--color-stone)]",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-12">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label={`${site.name} home`}
          >
            <Image
              src="/logo.png"
              alt={site.name}
              width={180}
              height={56}
              priority
              className="h-9 w-auto md:h-11"
            />
          </Link>

          <nav className="hidden items-center gap-6 xl:flex xl:gap-8">
            <button
              type="button"
              onMouseEnter={() => setMegaOpen(true)}
              onClick={() => setMegaOpen((v) => !v)}
              className={cn(
                "flex items-center gap-1 text-[15px] font-medium transition-colors",
                transparent
                  ? "text-white hover:text-white/80"
                  : "text-[var(--color-charcoal)] hover:text-[var(--color-rust)]",
              )}
              aria-expanded={megaOpen}
            >
              {t("nav.services")}
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform",
                  megaOpen && "rotate-180",
                )}
              />
            </button>
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[15px] font-medium transition-colors",
                    transparent
                      ? "text-white hover:text-white/80"
                      : "text-[var(--color-charcoal)] hover:text-[var(--color-rust)]",
                    active && (transparent ? "text-white" : "text-[var(--color-rust)]"),
                  )}
                >
                  {t(link.labelKey)}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <LanguageToggle variant={transparent ? "transparent" : "solid"} />
            <a
              href={site.phoneHref}
              className={cn(
                "flex items-center gap-2 text-[14px] font-semibold transition-colors",
                transparent
                  ? "text-white hover:text-white/80"
                  : "text-[var(--color-charcoal)] hover:text-[var(--color-rust)]",
              )}
            >
              <Phone className="h-3.5 w-3.5" />
              {site.phone}
            </a>
            <Button href="/contact" size="sm" showArrow>
              {t("cta.freeAssessment")}
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className={cn(
              "xl:hidden p-2 -m-2",
              transparent ? "text-white" : "text-[var(--color-charcoal)]",
            )}
            aria-label={t("nav.openMenu")}
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>

        {megaOpen && (
          <div
            onMouseLeave={() => setMegaOpen(false)}
            className="absolute left-0 right-0 top-full border-t border-[var(--color-stone)] bg-white shadow-lg"
          >
            <div className="mx-auto grid max-w-7xl grid-cols-4 gap-8 px-6 py-10 sm:px-8 lg:px-12">
              {categories.map((cat) => {
                const items = getServicesByCategory(cat.slug);
                return (
                  <div key={cat.slug}>
                    <Link
                      href={`/services/${cat.slug}`}
                      className="mb-4 block font-display text-[18px] font-bold tracking-tight text-[var(--color-charcoal)] hover:text-[var(--color-rust)]"
                    >
                      {cat.shortName}
                    </Link>
                    <ul className="space-y-2.5">
                      {items.map((item) => (
                        <li key={item.slug}>
                          <Link
                            href={`/services/${item.slug}`}
                            className="text-[14px] text-[var(--color-slate)] transition-colors hover:text-[var(--color-rust)]"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <li className="pt-1">
                        <Link
                          href={`/services/${cat.slug}`}
                          className="text-[13px] font-semibold text-[var(--color-rust)]"
                        >
                          All {cat.shortName} →
                        </Link>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Spacer when nav is solid (non-home) */}
      {!isHome && <div className="h-[72px] md:h-[80px]" aria-hidden />}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-[var(--color-charcoal)] xl:hidden">
          <div className="flex items-center justify-between px-6 py-4">
            <Image
              src="/logo-white.png"
              alt={site.name}
              width={160}
              height={50}
              className="h-9 w-auto"
            />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-2 -m-2 text-white"
              aria-label={t("nav.closeMenu")}
            >
              <X className="h-7 w-7" />
            </button>
          </div>
          <div className="overflow-y-auto px-6 pb-32 pt-6 h-[calc(100dvh-72px)]">
            <div className="mb-6 flex items-center justify-between">
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 text-2xl font-semibold text-white"
              >
                <Phone className="h-6 w-6" />
                {site.phone}
              </a>
              <LanguageToggle variant="dark" />
            </div>
            <nav className="space-y-2">
              <MobileServicesAccordion t={t} />
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3 text-[22px] font-medium text-white"
                >
                  {t(link.labelKey)}
                </Link>
              ))}
            </nav>
            <div className="mt-10">
              <Button href="/contact" size="lg" className="w-full" showArrow>
                {t("cta.freeAssessment")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function MobileServicesAccordion({ t }: { t: (key: string) => string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border-b border-white/10 pb-2">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-3 text-left text-[22px] font-medium text-white"
        aria-expanded={open}
      >
        {t("nav.services")}
        <ChevronDown
          className={cn("h-5 w-5 transition-transform", open && "rotate-180")}
        />
      </button>
      {open && (
        <div className="space-y-5 pb-3">
          {categories.map((cat) => {
            const items = getServicesByCategory(cat.slug);
            return (
              <div key={cat.slug}>
                <Link
                  href={`/services/${cat.slug}`}
                  className="block text-[15px] font-bold uppercase tracking-wider text-[var(--color-rust)]"
                >
                  {cat.shortName}
                </Link>
                <ul className="mt-2 space-y-1.5">
                  {items.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/services/${item.slug}`}
                        className="block py-1 text-[15px] text-white/80"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
