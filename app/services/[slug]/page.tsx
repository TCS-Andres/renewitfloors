import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { PageHero } from "@/components/global/PageHero";
import { TrustBar } from "@/components/global/TrustBar";
import { PreFooterCTA } from "@/components/global/PreFooterCTA";
import {
  breadcrumbSchema,
  faqPageSchema,
  jsonLdScript,
  serviceSchema,
} from "@/lib/schema";
import {
  categories,
  getCategoryBySlug,
  getServiceBySlug,
  getServicesByCategory,
  isCategorySlug,
  services,
} from "@/lib/content/services";
import { site } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return [
    ...categories.map((c) => ({ slug: c.slug })),
    ...services.map((s) => ({ slug: s.slug })),
  ];
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  if (isCategorySlug(slug)) {
    const cat = getCategoryBySlug(slug);
    if (!cat) return {};
    return {
      title: cat.metaTitle,
      description: cat.metaDescription,
      alternates: { canonical: `/services/${slug}` },
    };
  }
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServicePage({ params }: { params: Params }) {
  const { slug } = await params;

  if (isCategorySlug(slug)) {
    const cat = getCategoryBySlug(slug)!;
    const list = getServicesByCategory(slug);
    return <CategoryPage category={cat} services={list} />;
  }

  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const cat = getCategoryBySlug(service.category)!;
  return <ServiceDetailPage service={service} category={cat} />;
}

// =================== CATEGORY TEMPLATE ===================
function CategoryPage({
  category,
  services: list,
}: {
  category: ReturnType<typeof getCategoryBySlug> & object;
  services: ReturnType<typeof getServicesByCategory>;
}) {
  const cat = category!;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Services", url: `${site.url}/services` },
            { name: cat.shortName, url: `${site.url}/services/${cat.slug}` },
          ]),
        )}
      />
      <PageHero
        eyebrow={cat.shortName}
        title={cat.h1}
        description={cat.subhead}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: cat.shortName, href: `/services/${cat.slug}` },
        ]}
      />
      <TrustBar tone="cream" />

      <Section tone="white" padded>
        <Container>
          <Reveal>
            <p className="max-w-3xl text-[18px] leading-relaxed text-[var(--color-slate)] md:text-[20px]">
              {cat.description}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 6) * 0.05}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col rounded-[6px] border border-[var(--color-stone)] bg-white p-7 transition-all hover:border-[var(--color-rust)]"
                >
                  <h3 className="font-display text-[22px] font-bold leading-tight text-[var(--color-charcoal)] md:text-[24px]">
                    {s.name}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[var(--color-slate)]">
                    {s.shortDescription}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-rust)]">
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="cream" padded>
        <Container size="narrow">
          <Reveal>
            <Eyebrow className="block mb-4">Our Method</Eyebrow>
            <h2 className="font-display text-[32px] font-bold leading-[1.05] tracking-[-0.025em] text-[var(--color-charcoal)] md:text-[48px]">
              Why this work lasts.
            </h2>
            <p className="mt-6 text-[18px] leading-relaxed text-[var(--color-slate)] md:text-[20px]">
              {cat.methodAngle}
            </p>
            <div className="mt-8">
              <Button href="/about#method" variant="ghost" showArrow>
                Learn About Our Method
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <PreFooterCTA />
    </>
  );
}

// =================== SERVICE DETAIL TEMPLATE ===================
function ServiceDetailPage({
  service,
  category,
}: {
  service: NonNullable<ReturnType<typeof getServiceBySlug>>;
  category: NonNullable<ReturnType<typeof getCategoryBySlug>>;
}) {
  const related = service.related
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean) as NonNullable<ReturnType<typeof getServiceBySlug>>[];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(serviceSchema(service, category))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqPageSchema(service.faqs))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Services", url: `${site.url}/services` },
            { name: category.shortName, url: `${site.url}/services/${category.slug}` },
            { name: service.name, url: `${site.url}/services/${service.slug}` },
          ]),
        )}
      />

      <PageHero
        eyebrow={category.shortName}
        title={service.h1}
        description={service.shortDescription}
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: category.shortName, href: `/services/${category.slug}` },
          { name: service.name, href: `/services/${service.slug}` },
        ]}
      />

      {/* Service hero image */}
      <section className="relative aspect-[16/7] w-full overflow-hidden bg-[var(--color-charcoal)] md:aspect-[16/6]">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </section>

      <TrustBar tone="cream" />

      {/* Intro + scope */}
      <Section tone="white" padded>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <Eyebrow className="block mb-4">What This Service Covers</Eyebrow>
              <p className="text-[18px] leading-relaxed text-[var(--color-charcoal)] md:text-[22px]">
                {service.intro}
              </p>
              <p className="mt-6 text-[17px] leading-relaxed text-[var(--color-slate)] md:text-[18px]">
                {service.body}
              </p>
            </Reveal>
            <Reveal delay={0.15} className="lg:col-span-5">
              <div className="rounded-[6px] bg-[var(--color-cream)] p-7 md:p-8">
                <Eyebrow className="block mb-4">Scope of Work</Eyebrow>
                <ul className="space-y-3">
                  {service.scope.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[15px] leading-snug text-[var(--color-charcoal)]"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-rust)]"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section tone="cream" padded>
        <Container>
          <Reveal>
            <Eyebrow className="block mb-4">Our Process</Eyebrow>
            <h2 className="max-w-3xl font-display text-[32px] font-bold leading-[1.05] tracking-[-0.025em] text-[var(--color-charcoal)] md:text-[48px]">
              How we approach this work.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
            {service.process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <div className="border-t border-[var(--color-stone)] pt-5">
                  <span className="font-display text-[44px] font-bold leading-none text-[var(--color-rust)]">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-[20px] font-bold uppercase tracking-tight text-[var(--color-charcoal)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-slate)]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Optional secondary detail/process image */}
      {service.detailImage && (
        <section className="relative aspect-[16/7] w-full overflow-hidden bg-[var(--color-charcoal)] md:aspect-[16/6]">
          <Image
            src={service.detailImage}
            alt={service.detailImageAlt ?? service.imageAlt}
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </section>
      )}

      {/* Why it lasts */}
      <section className="bg-[var(--color-ink)] text-white">
        <Container>
          <div className="grid items-start gap-12 py-20 md:grid-cols-12 md:py-28 md:gap-16">
            <Reveal className="md:col-span-5">
              <Eyebrow tone="rust" className="block mb-4">
                Why It Lasts
              </Eyebrow>
              <h2 className="font-display text-[32px] font-bold leading-[1.05] tracking-[-0.025em] text-white md:text-[44px]">
                The Foundation-First difference.
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="md:col-span-7">
              <p className="text-[17px] leading-relaxed text-[var(--color-cream)]/85 md:text-[19px]">
                {service.methodNote}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Pricing block (no numbers) */}
      <Section tone="white" padded>
        <Container size="narrow">
          <Reveal className="rounded-[6px] border border-[var(--color-stone)] bg-[var(--color-cream)] p-8 md:p-12">
            <Eyebrow className="block mb-4">Honest, Transparent Quotes</Eyebrow>
            <h2 className="font-display text-[28px] font-bold leading-tight text-[var(--color-charcoal)] md:text-[40px]">
              Every floor is different. Every job is custom-quoted.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-[var(--color-slate)] md:text-[18px]">
              Pricing depends on surface, prep needed, square footage, and
              finish. We don&apos;t give over-the-phone quotes because every
              floor is different — but the on-site assessment is free, and the
              quote is honest with no surprises.
            </p>
            <div className="mt-7">
              <Button href="/contact" showArrow>
                Get Your Free Quote
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* FAQs */}
      <Section tone="cream" padded>
        <Container size="narrow">
          <Reveal>
            <Eyebrow className="block mb-4">Frequently Asked</Eyebrow>
            <h2 className="font-display text-[32px] font-bold leading-[1.05] tracking-[-0.025em] text-[var(--color-charcoal)] md:text-[44px]">
              Common questions about {service.name.toLowerCase()}.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <Accordion items={service.faqs.map((f) => ({ q: f.q, a: f.a }))} />
          </Reveal>
        </Container>
      </Section>

      {/* Related services */}
      <Section tone="white" padded>
        <Container>
          <Reveal>
            <Eyebrow className="block mb-4">Related Services</Eyebrow>
            <h2 className="font-display text-[28px] font-bold leading-[1.05] text-[var(--color-charcoal)] md:text-[36px]">
              Other ways we can help your floors.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.06}>
                <Link
                  href={`/services/${r.slug}`}
                  className="group block h-full rounded-[6px] border border-[var(--color-stone)] bg-white p-6 transition-all hover:border-[var(--color-rust)]"
                >
                  <h3 className="font-display text-[20px] font-bold leading-tight text-[var(--color-charcoal)]">
                    {r.name}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-slate)]">
                    {r.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-rust)]">
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <PreFooterCTA
        heading={`Ready to restore your ${service.name.toLowerCase()} floor?`}
        subhead="A free, honest assessment. No pressure. We'll walk your floor and tell you straight what's possible."
      />
    </>
  );
}
