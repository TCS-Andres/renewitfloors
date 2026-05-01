import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site } from "@/lib/site";
import { categories } from "@/lib/content/services";
import { Button } from "@/components/ui/Button";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-charcoal)] text-[var(--color-cream)]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt={site.name}
              width={200}
              height={62}
              className="h-12 w-auto invert brightness-200"
            />
            <p className="mt-6 font-display text-[18px] leading-snug text-white">
              {site.tagline}
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-[var(--color-cream)]/70">
              Family-owned floor restoration. Owner-operated. 30+ years across South Florida.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-2 text-[12px] uppercase tracking-wider text-[var(--color-cream)]/60">
              <li>30+ Years</li>
              <li>Family-Owned</li>
              <li>1-Year Warranty</li>
              <li>Licensed & Insured</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white">
              Services
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
                  All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white">
              Company
            </h4>
            <ul className="space-y-3 text-[15px]">
              {[
                { href: "/about", label: "About" },
                { href: "/projects", label: "Projects" },
                { href: "/testimonials", label: "Testimonials" },
                { href: "/service-areas", label: "Service Areas" },
                { href: "/faq", label: "FAQ" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[var(--color-cream)]/80 transition-colors hover:text-[var(--color-rust)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-white">
              Get in Touch
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
                  <span>Miami, FL — Serving South Florida</span>
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
                Free Assessment
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-7 text-[13px] text-[var(--color-cream)]/60">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p>
              © {year} {site.legalName}. All rights reserved.
            </p>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <li>
                <Link href="/privacy" className="hover:text-[var(--color-rust)]">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[var(--color-rust)]">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="hover:text-[var(--color-rust)]">
                  Sitemap
                </Link>
              </li>
              <li className="text-[var(--color-cream)]/40">
                Built by{" "}
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
