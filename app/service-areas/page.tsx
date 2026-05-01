import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/global/PageHero";
import { PreFooterCTA } from "@/components/global/PreFooterCTA";
import { breadcrumbSchema, jsonLdScript } from "@/lib/schema";
import { serviceAreas } from "@/lib/content/areas";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas – South Florida",
  description:
    "Floor restoration across Miami-Dade, Broward, Palm Beach, and the Keys. 30+ years serving Coral Gables, Pinecrest, Brickell, Fort Lauderdale, and beyond.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Service Areas", url: `${site.url}/service-areas` },
          ]),
        )}
      />
      <PageHero
        eyebrow="Where We Work"
        title="Where we work."
        description="For thirty years, we've restored floors across South Florida. From historic Coral Gables terrazzo to Brickell marble lobbies — we know the floors of this region."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/service-areas" },
        ]}
      />

      <Section tone="white" padded>
        <Container>
          <div className="space-y-24">
            {serviceAreas.map((area, i) => (
              <Reveal key={area.county} delay={i * 0.05}>
                <article id={area.countySlug} className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                  <div className="lg:col-span-4">
                    <Eyebrow className="block mb-3">{area.county} County</Eyebrow>
                    <h2 className="font-display text-[36px] font-bold leading-[1.05] tracking-[-0.025em] text-[var(--color-charcoal)] md:text-[48px]">
                      Floor Restoration in {area.county}
                    </h2>
                  </div>
                  <div className="space-y-6 lg:col-span-8">
                    <p className="text-[17px] leading-relaxed text-[var(--color-slate)] md:text-[19px]">
                      {area.intro}
                    </p>
                    <p className="font-display text-[18px] font-semibold leading-snug text-[var(--color-charcoal)] md:text-[20px]">
                      {area.signatureWork}
                    </p>

                    <div className="rounded-[6px] border border-[var(--color-stone)] bg-[var(--color-cream)] p-6 md:p-7">
                      <Eyebrow className="block mb-3">Cities We Serve</Eyebrow>
                      <ul className="flex flex-wrap gap-2">
                        {area.cities.map((city) => (
                          <li
                            key={city}
                            className="rounded-full bg-white px-3.5 py-1.5 text-[13px] font-medium text-[var(--color-charcoal)]"
                          >
                            {city}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <Eyebrow className="block mb-4">Most Common Services</Eyebrow>
                      <ul className="grid gap-3 sm:grid-cols-3">
                        {area.topServices.map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/services/${s.slug}`}
                              className="group flex items-center justify-between rounded-[6px] border border-[var(--color-stone)] px-4 py-3 transition-colors hover:border-[var(--color-rust)]"
                            >
                              <span className="text-[14px] font-medium text-[var(--color-charcoal)] group-hover:text-[var(--color-rust)]">
                                {s.name}
                              </span>
                              <ArrowRight className="h-3.5 w-3.5 text-[var(--color-rust)] transition-transform group-hover:translate-x-0.5" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-24 rounded-[6px] border border-[var(--color-stone)] bg-[var(--color-cream)] p-8 text-center md:p-12">
            <h3 className="font-display text-[26px] font-bold leading-tight text-[var(--color-charcoal)] md:text-[32px]">
              Not on the list?
            </h3>
            <p className="mt-3 text-[16px] leading-relaxed text-[var(--color-slate)]">
              Give us a call — we travel for the right project.
            </p>
            <a
              href={site.phoneHref}
              className="mt-5 inline-block font-display text-[24px] font-bold text-[var(--color-rust)] hover:text-[var(--color-rust-dark)] md:text-[28px]"
            >
              {site.phone}
            </a>
          </Reveal>
        </Container>
      </Section>

      <PreFooterCTA />
    </>
  );
}
