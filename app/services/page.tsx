import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/global/PageHero";
import { PreFooterCTA } from "@/components/global/PreFooterCTA";
import { L } from "@/components/global/L";
import { breadcrumbSchema, jsonLdScript } from "@/lib/schema";
import { categories, getServicesByCategory } from "@/lib/content/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
 title: "Floor Restoration Services in Miami",
 description:
 "Polished concrete, terrazzo, marble, Mexican tile, garage epoxy, hardwood, and commercial floor restoration in Miami. 30+ years. 1-year warranty.",
 alternates: { canonical: "/services" },
};

export default function ServicesHub() {
 return (
 <>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={jsonLdScript(
 breadcrumbSchema([
 { name: "Home", url: site.url },
 { name: "Services", url: `${site.url}/services` },
 ]),
 )}
 />
 <PageHero
 eyebrow="Services"
 title={<>From historic terrazzo to polished concrete, we restore it all.</>}
 description="Sixteen specialty services across four categories. Every floor restored with the same Foundation-First standard."
 breadcrumbs={[
 { name: "Home", href: "/" },
 { name: "Services", href: "/services" },
 ]}
 />

 <Section tone="white" padded>
 <Container>
 <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
 {categories.map((cat, i) => {
 const services = getServicesByCategory(cat.slug);
 return (
 <Reveal key={cat.slug} delay={i * 0.05}>
 <Link
 href={`/services/${cat.slug}`}
 className="group block h-full rounded-[6px] border border-[var(--color-stone)] bg-white p-8 transition-all hover:border-[var(--color-rust)] hover:-translate-y-1 hover:shadow-lg duration-300 md:p-10"
 >
 <div className="flex items-start justify-between gap-6">
 <div>
 <Eyebrow className="block mb-3">
 {services.length} Service{services.length === 1 ? "" : "s"}
 </Eyebrow>
 <h2 className="font-display text-[28px] font-bold leading-tight text-[var(--color-charcoal)] md:text-[32px]">
 <L en={cat.name} es={cat.nameEs} />
 </h2>
 <p className="mt-3 text-[16px] leading-relaxed text-[var(--color-slate)]">
 <L en={cat.description} es={cat.descriptionEs} />
 </p>
 </div>
 <ArrowRight className="mt-2 h-5 w-5 shrink-0 text-[var(--color-rust)] transition-transform group-hover:translate-x-1" />
 </div>
 <ul className="mt-6 flex flex-wrap gap-2 border-t border-[var(--color-stone)] pt-5">
 {services.slice(0, 6).map((s) => (
 <li
 key={s.slug}
 className="rounded-full bg-[var(--color-cream)] px-3 py-1 text-[12px] font-medium text-[var(--color-charcoal)]"
 >
 <L en={s.name} es={s.nameEs} />
 </li>
 ))}
 </ul>
 </Link>
 </Reveal>
 );
 })}
 </div>
 </Container>
 </Section>

 {/* Foundation-First condensed */}
 <section className="bg-[var(--color-ink)] text-white">
 <Container>
 <div className="grid items-center gap-10 py-16 sm:gap-12 sm:py-20 md:grid-cols-2 md:py-28 md:gap-16">
 <Reveal>
 <Eyebrow tone="rust" className="block mb-5">
 Our Method
 </Eyebrow>
 <h2 className="font-display text-[28px] font-bold leading-[1.08] tracking-[-0.025em] text-balance text-white sm:text-[36px] sm:leading-[1.05] md:text-[52px]">
 Every floor gets the Foundation-First treatment.
 </h2>
 </Reveal>
 <Reveal delay={0.15} className="space-y-5 text-[17px] leading-relaxed text-[var(--color-cream)]/85">
 <p>
 Diamond-grind. Multiple passes. Open the surface. Then, and
 only then, does any finish go on.
 </p>
 <p>
 That&apos;s the difference between a floor that lasts twenty
 years and one that fails in six months.
 </p>
 <div className="pt-4">
 <Button href="/about#method" variant="primary" showArrow>
 Learn About Our Method
 </Button>
 </div>
 </Reveal>
 </div>
 </Container>
 </section>

 {/* Why restore vs. replace */}
 <Section tone="cream" padded>
 <Container>
 <div className="text-center">
 <Reveal>
 <Eyebrow className="block mb-4">Restore Instead of Replace</Eyebrow>
 <h2 className="mx-auto max-w-3xl font-display text-[28px] font-bold leading-[1.08] tracking-[-0.025em] text-balance text-[var(--color-charcoal)] sm:text-[36px] sm:leading-[1.05] md:text-[48px]">
 Most floors don&apos;t need replacing. They need restoring.
 </h2>
 </Reveal>
 </div>
 <div className="mt-14 grid gap-6 md:grid-cols-3">
 {[
 {
 title: "Cost Savings",
 body: "Restoration is typically 50-70% less than full replacement, sometimes more.",
 },
 {
 title: "Original Character Preserved",
 body: "Especially for historic terrazzo, marble, and tile in older Miami homes.",
 },
 {
 title: "Faster Turnaround",
 body: "Most jobs finish in 1-5 days, not the weeks tear-out and replacement requires.",
 },
 ].map((b, i) => (
 <Reveal key={b.title} delay={i * 0.08}>
 <div className="border-t border-[var(--color-stone)] pt-6">
 <h3 className="font-display text-[22px] font-bold leading-tight text-[var(--color-charcoal)] md:text-[24px]">
 {b.title}
 </h3>
 <p className="mt-3 text-[16px] leading-relaxed text-[var(--color-slate)]">
 {b.body}
 </p>
 </div>
 </Reveal>
 ))}
 </div>
 </Container>
 </Section>

 <PreFooterCTA />
 </>
 );
}
