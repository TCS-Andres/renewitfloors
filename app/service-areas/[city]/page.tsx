import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/global/PageHero";
import { TrustBar } from "@/components/global/TrustBar";
import { PreFooterCTA } from "@/components/global/PreFooterCTA";
import { breadcrumbSchema, jsonLdScript } from "@/lib/schema";
import { cities, getCityBySlug } from "@/lib/content/areas";
import { getServiceBySlug } from "@/lib/content/services";
import { getProjectBySlug } from "@/lib/content/projects";
import { site } from "@/lib/site";

type Params = Promise<{ city: string }>;

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { city } = await params;
  const c = getCityBySlug(city);
  if (!c) return {};
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: `/service-areas/${c.slug}` },
  };
}

function localBusinessAreaServedSchema(city: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Floor Restoration",
    name: `Floor Restoration in ${city}, FL`,
    provider: { "@id": `${site.url}/#localbusiness` },
    areaServed: {
      "@type": "Place",
      name: `${city}, Florida`,
      address: {
        "@type": "PostalAddress",
        addressLocality: city,
        addressRegion: "FL",
        addressCountry: "US",
      },
    },
    url: `${site.url}/service-areas/${city.toLowerCase().replace(/\s+/g, "-")}`,
  };
}

export default async function CityPage({ params }: { params: Params }) {
  const { city: slug } = await params;
  const c = getCityBySlug(slug);
  if (!c) notFound();

  const topServices = c.topServiceSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s) => Boolean(s)) as NonNullable<ReturnType<typeof getServiceBySlug>>[];

  const relatedProjects = (c.relatedProjectSlugs ?? [])
    .map((p) => getProjectBySlug(p))
    .filter((p) => Boolean(p)) as NonNullable<ReturnType<typeof getProjectBySlug>>[];

  const nearbyCities = c.nearbyCitySlugs
    .map((s) => getCityBySlug(s))
    .filter((c) => Boolean(c)) as NonNullable<ReturnType<typeof getCityBySlug>>[];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Service Areas", url: `${site.url}/service-areas` },
            { name: c.name, url: `${site.url}/service-areas/${c.slug}` },
          ]),
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(localBusinessAreaServedSchema(c.name))}
      />

      <PageHero
        eyebrow={`${c.county} County`}
        title={
          <>
            Floor Restoration in {c.name}<span className="text-[var(--color-rust)]">.</span>
          </>
        }
        description={c.intro}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/service-areas" },
          { name: c.name, href: `/service-areas/${c.slug}` },
        ]}
      />

      {/* City-specific hero image banner */}
      <section className="relative aspect-[16/7] w-full overflow-hidden bg-[var(--color-charcoal)] md:aspect-[16/6]">
        <Image
          src={c.cityImage}
          alt={c.cityImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      <TrustBar tone="cream" />

      {/* Local story */}
      <Section tone="white" padded>
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <Eyebrow className="block mb-4">Local Knowledge</Eyebrow>
              <h2 className="font-display text-[36px] font-bold leading-[1.05] tracking-[-0.025em] text-[var(--color-charcoal)] md:text-[48px]">
                What we know about {c.name} floors.
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="lg:col-span-7">
              <p className="text-[18px] leading-relaxed text-[var(--color-slate)] md:text-[20px]">
                {c.localStory}
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Top services for this city */}
      <Section tone="cream" padded>
        <Container>
          <Reveal>
            <Eyebrow className="block mb-4">Most-Requested in {c.name}</Eyebrow>
            <h2 className="max-w-3xl font-display text-[36px] font-bold leading-[1.05] tracking-[-0.025em] text-[var(--color-charcoal)] md:text-[48px]">
              The services {c.name} homes and businesses ask for most.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topServices.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 6) * 0.05}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[6px] border border-[var(--color-stone)] bg-white transition-all hover:border-[var(--color-rust)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-charcoal)]">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-[20px] font-bold leading-tight text-[var(--color-charcoal)] md:text-[22px]">
                      {s.name} in {c.name}
                    </h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[var(--color-slate)]">
                      {s.shortDescription}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-rust)]">
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10" delay={0.2}>
            <Button href="/services" variant="ghost" showArrow>
              All Services
            </Button>
          </Reveal>
        </Container>
      </Section>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <Section tone="white" padded>
          <Container>
            <Reveal>
              <Eyebrow className="block mb-4">Recent Work in {c.name}</Eyebrow>
              <h2 className="font-display text-[32px] font-bold leading-[1.05] tracking-[-0.025em] text-[var(--color-charcoal)] md:text-[40px]">
                Projects from this neighborhood.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {relatedProjects.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.08}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="group block overflow-hidden rounded-[6px] border border-[var(--color-stone)] bg-white transition-all hover:border-[var(--color-rust)]"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-charcoal)]">
                      <Image
                        src={p.image}
                        alt={p.imageAlt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-charcoal)]">
                        {p.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--color-rust)]">
                        {p.location} · {p.service}
                      </span>
                      <h3 className="mt-3 font-display text-[22px] font-bold leading-tight text-[var(--color-charcoal)] md:text-[26px]">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-slate)]">
                        {p.excerpt}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-rust)]">
                        View Project
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Nearby areas */}
      {nearbyCities.length > 0 && (
        <Section tone="cream" padded>
          <Container>
            <Reveal>
              <Eyebrow className="block mb-4">Nearby Service Areas</Eyebrow>
              <h2 className="font-display text-[28px] font-bold leading-[1.05] text-[var(--color-charcoal)] md:text-[36px]">
                We also work in these nearby neighborhoods.
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {nearbyCities.map((nc, i) => (
                <Reveal key={nc.slug} delay={i * 0.06}>
                  <Link
                    href={`/service-areas/${nc.slug}`}
                    className="group flex items-center justify-between rounded-[6px] border border-[var(--color-stone)] bg-white px-6 py-5 transition-all hover:border-[var(--color-rust)]"
                  >
                    <span className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-[var(--color-rust)]" />
                      <span className="font-display text-[18px] font-semibold text-[var(--color-charcoal)] group-hover:text-[var(--color-rust)] md:text-[20px]">
                        Floor Restoration in {nc.name}
                      </span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-[var(--color-rust)] transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Reveal>
              ))}
            </div>
            <Reveal className="mt-10" delay={0.2}>
              <Button href="/service-areas" variant="ghost" showArrow>
                See All Service Areas
              </Button>
            </Reveal>
          </Container>
        </Section>
      )}

      <PreFooterCTA
        heading={`Ready to restore your ${c.name} floor?`}
        subhead={`A free, honest assessment in ${c.name}. No pressure. We'll walk your floor and tell you straight what's possible.`}
      />
    </>
  );
}
