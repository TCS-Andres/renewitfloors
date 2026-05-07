import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { services } from "@/lib/content/services";
import { getFeaturedProjects } from "@/lib/content/projects";
import { testimonials } from "@/lib/content/testimonials";
import { serviceAreas } from "@/lib/content/areas";
import { getHomepageFaqs } from "@/lib/content/faqs";

// ============== Section 3: Problem / Empathy ==============
export function ProblemSection() {
 return (
 <Section tone="white" padded>
 <Container>
 <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
 <Reveal className="lg:col-span-7">
 <Eyebrow className="mb-4 block">We Get It</Eyebrow>
 <h2 className="font-display text-[32px] font-bold leading-[1.07] tracking-[-0.025em] text-balance text-[var(--color-charcoal)] sm:text-[40px] sm:leading-[1.05] md:text-[56px]">
 You&apos;ve already been through enough.
 </h2>
 <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-[var(--color-slate)] md:text-[19px]">
 <p>
 By the time most of our customers call us, they&apos;ve been let
 down already. The last contractor disappeared mid-job. The
 remodel ran long. The budget ran longer.
 </p>
 <p>
 And the floor, the thing they walk on every day, the thing
 that makes a house feel like <em>theirs</em>, still isn&apos;t
 right.
 </p>
 <p>
 We get it. Because we&apos;ve been the people who finally show
 up at the end of that story for thirty years.
 </p>
 </div>
 </Reveal>
 <Reveal delay={0.15} className="lg:col-span-5">
 <ul className="space-y-4 border-l-2 border-[var(--color-rust)]/30 pl-7">
 {[
 "Marble that's lost its life, dull, scratched, etched",
 "Terrazzo trapped under decades of carpet or tile",
 "Garage epoxy that peeled in six months",
 "Cracked Mexican tile and worn-down stone",
 'A "fast" finish that wasn\'t really finished',
 "Contractors who quoted low and then disappeared",
 ].map((line, i) => (
 <li
 key={i}
 className="font-display text-[18px] font-medium leading-snug text-[var(--color-charcoal)] md:text-[20px]"
 >
 {line}
 </li>
 ))}
 </ul>
 </Reveal>
 </div>
 </Container>
 </Section>
 );
}

// ============== Section 4: Guide / Meet ReNewIt ==============
export function GuideSection() {
 return (
 <section className="relative overflow-hidden">
 <div className="relative h-[420px] bg-[var(--color-charcoal)] md:h-[520px]">
 <Image
 src="/images/aged-concrete-floor-texture.jpg"
 alt="Aged concrete floor texture restored by ReNewIt Floors in Miami"
 fill
 sizes="100vw"
 className="object-cover object-center"
 />
 <div
 className="absolute inset-0"
 style={{
 background:
 "linear-gradient(135deg, rgba(28,31,35,0.88) 0%, rgba(46,52,59,0.78) 50%, rgba(176,74,42,0.55) 100%)",
 }}
 aria-hidden
 />
 <div className="relative z-10 flex h-full items-center">
 <Container>
 <Reveal>
 <Eyebrow tone="cream" className="mb-4 block">
 Meet ReNewIt
 </Eyebrow>
 <h2 className="font-display max-w-3xl text-[34px] font-bold leading-[1.05] tracking-[-0.03em] text-balance text-white sm:text-[44px] sm:leading-[1.02] md:text-[72px]">
 Thirty years. Same hands. Same standards.
 </h2>
 </Reveal>
 </Container>
 </div>
 </div>

 <Section tone="white" padded>
 <Container>
 <div className="grid gap-8 md:grid-cols-3">
 {[
 {
 title: "Family-Owned & Owner-Operated",
 body: "ReNewIt Floors is run by Jose and his family. The phone we answer today is the same line we've had for over twenty years.",
 },
 {
 title: "30+ Years of Floor Restoration",
 body: "Jose has personally restored every floor type common to South Florida homes, terrazzo, marble, polished concrete, Mexican tile, hardwood. He's seen what works and what fails.",
 },
 {
 title: "Owner on Every Job",
 body: "We don't hand you off to a junior estimator. Jose walks the floor, gives the quote, and stands on it from grind to finish.",
 },
 ].map((pillar, i) => (
 <Reveal key={i} delay={i * 0.1}>
 <div className="border-t border-[var(--color-stone)] pt-6">
 <h3 className="font-display text-[22px] font-bold leading-tight text-[var(--color-charcoal)] md:text-[24px]">
 {pillar.title}
 </h3>
 <p className="mt-3 text-[16px] leading-relaxed text-[var(--color-slate)]">
 {pillar.body}
 </p>
 </div>
 </Reveal>
 ))}
 </div>
 <Reveal delay={0.3} className="mt-12">
 <Button href="/about" variant="ghost" showArrow>
 Meet Jose & the Crew
 </Button>
 </Reveal>
 </Container>
 </Section>
 </section>
 );
}

// ============== Section 5: Services Showcase ==============
export function ServicesShowcase() {
 const featured = [
 services.find((s) => s.slug === "concrete-polishing")!,
 services.find((s) => s.slug === "terrazzo-restoration")!,
 services.find((s) => s.slug === "marble-restoration")!,
 services.find((s) => s.slug === "mexican-tile-restoration")!,
 services.find((s) => s.slug === "garage-epoxy-flooring")!,
 services.find((s) => s.slug === "hardwood-refinishing")!,
 ];

 return (
 <Section tone="cream" padded>
 <Container>
 <SectionHeading
 eyebrow="What We Restore"
 title={
 <>
 From historic terrazzo to polished concrete, we bring floors
 back to life.
 </>
 }
 />
 <div className="mt-14 grid gap-6 md:grid-cols-6">
 {featured.map((service, i) => {
 const isLarge = i === 0;
 return (
 <Reveal
 key={service.slug}
 delay={i * 0.05}
 className={isLarge ? "md:col-span-3 md:row-span-2" : "md:col-span-3"}
 >
 <Link
 href={`/services/${service.slug}`}
 className="group block h-full overflow-hidden rounded-[6px] border border-[var(--color-stone)] bg-white transition-all hover:border-[var(--color-rust)] hover:-translate-y-1 hover:shadow-lg duration-300"
 >
 <div
 className={`relative w-full overflow-hidden bg-[var(--color-charcoal)] ${
 isLarge ? "aspect-[4/5] md:aspect-auto md:h-[60%]" : "aspect-[16/9]"
 }`}
 >
 <Image
 src={service.image}
 alt={service.imageAlt}
 fill
 sizes={isLarge ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
 className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
 />
 <div
 className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
 aria-hidden
 />
 <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between">
 <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-charcoal)]">
 {service.name}
 </span>
 </div>
 </div>
 <div className={`p-6 ${isLarge ? "md:p-8" : ""}`}>
 <h3
 className={`font-display font-bold leading-tight text-[var(--color-charcoal)] ${
 isLarge ? "text-[28px] md:text-[32px]" : "text-[22px]"
 }`}
 >
 {service.name}
 </h3>
 <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-slate)]">
 {service.shortDescription}
 </p>
 <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-rust)]">
 Learn More
 <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
 </span>
 </div>
 </Link>
 </Reveal>
 );
 })}
 </div>
 <Reveal className="mt-12 text-center" delay={0.2}>
 <Button href="/services" variant="ghost" showArrow>
 See All Services
 </Button>
 </Reveal>
 </Container>
 </Section>
 );
}

// ============== Section 6: The Plan ==============
export function PlanSection() {
 const steps = [
 {
 n: "01",
 title: "Assess",
 body: "Jose walks your floor and tells you straight what's possible, and what isn't.",
 },
 {
 n: "02",
 title: "Quote",
 body: "An honest, transparent quote. No hidden fees. No mid-job upsells.",
 },
 {
 n: "03",
 title: "Restore",
 body: "The crew does the work with care. Jose oversees from the first grind to the final polish.",
 },
 {
 n: "04",
 title: "Enjoy",
 body: "Beautiful, lasting floors, backed by our 1-year warranty.",
 },
 ];

 return (
 <Section tone="white" padded>
 <Container>
 <SectionHeading
 eyebrow="How It Works"
 title="Four steps. No surprises."
 />
 <div className="mt-16 grid gap-12 md:grid-cols-4 md:gap-6">
 {steps.map((step, i) => (
 <Reveal key={step.n} delay={i * 0.08}>
 <div className="border-t border-[var(--color-stone)] pt-6">
 <div className="font-display text-[60px] font-bold leading-none tracking-tight text-[var(--color-rust)] md:text-[72px]">
 {step.n}
 </div>
 <h3 className="mt-5 font-display text-[24px] font-bold uppercase tracking-tight text-[var(--color-charcoal)]">
 {step.title}
 </h3>
 <p className="mt-3 text-[16px] leading-relaxed text-[var(--color-slate)]">
 {step.body}
 </p>
 </div>
 </Reveal>
 ))}
 </div>
 </Container>
 </Section>
 );
}

// ============== Section 7: Foundation-First Method ==============
export function FoundationFirstSection() {
 return (
 <section className="bg-[var(--color-ink)] text-white" id="method">
 <Container>
 <div className="py-24 md:py-36">
 <Reveal>
 <Eyebrow tone="rust" className="block mb-6">
 The Foundation-First Method
 </Eyebrow>
 </Reveal>
 <Reveal delay={0.1}>
 <blockquote>
 <Quote
 className="mb-6 h-8 w-8 text-[var(--color-rust)] opacity-80"
 aria-hidden
 />
 <p className="font-display text-[28px] font-bold leading-[1.15] tracking-[-0.025em] text-balance text-white sm:text-[36px] sm:leading-[1.12] md:text-[60px]">
 It&apos;s the foundation. If you don&apos;t do the foundation,
 nothing else works.
 </p>
 <footer className="mt-8 text-[14px] uppercase tracking-[0.18em] text-[var(--color-cream)]/60">
 Jose, Founder
 </footer>
 </blockquote>
 </Reveal>
 <Reveal delay={0.2}>
 <div className="mt-16 grid max-w-4xl gap-6 text-[17px] leading-relaxed text-[var(--color-cream)]/85 md:text-[18px]">
 <p>
 Most contractors skip prep. They lay paint, epoxy, or sealer on
 top of a surface that hasn&apos;t been ground, cleaned, or
 opened. The result looks fine for six months, then peels.
 </p>
 <p>
 We do the opposite. Before any finish touches your floor,
 it&apos;s diamond-ground. Sometimes six or seven passes. We open
 the surface so it absorbs sealer the way it should. Only then
 does the polish, color, or coating go on. Borders are detailed
 by hand.
 </p>
 <p className="font-display text-[22px] font-semibold text-[var(--color-rust)] md:text-[24px]">
 It&apos;s slower. It costs more. It&apos;s the only way it
 lasts.
 </p>
 </div>
 </Reveal>
 <Reveal delay={0.3}>
 <div className="mt-12">
 <Button href="/about#method" variant="primary" showArrow>
 Learn About Our Method
 </Button>
 </div>
 </Reveal>
 </div>
 </Container>
 </section>
 );
}

// ============== Section 8: Featured Projects ==============
export function FeaturedProjectsSection() {
 const featured = getFeaturedProjects();
 const [hero, ...rest] = featured;

 return (
 <Section tone="white" padded>
 <Container>
 <SectionHeading
 eyebrow="Our Work"
 title="Floors that speak for themselves."
 />
 <div className="mt-14 grid gap-6 md:grid-cols-2">
 {/* Hero card */}
 {hero && (
 <Reveal>
 <Link
 href={`/projects/${hero.slug}`}
 className="group block overflow-hidden rounded-[6px] border border-[var(--color-stone)] bg-white transition-all hover:border-[var(--color-rust)] hover:-translate-y-1 hover:shadow-lg duration-300"
 >
 <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-charcoal)]">
 <Image
 src={hero.image}
 alt={hero.imageAlt}
 fill
 sizes="(min-width: 768px) 50vw, 100vw"
 className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
 />
 <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-charcoal)]">
 {hero.category}
 </span>
 </div>
 <div className="p-7">
 <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--color-rust)]">
 {hero.location}
 </span>
 <h3 className="mt-3 font-display text-[26px] font-bold leading-tight text-[var(--color-charcoal)] md:text-[30px]">
 {hero.title}
 </h3>
 <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-slate)]">
 {hero.excerpt}
 </p>
 <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-rust)]">
 View Project
 <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
 </span>
 </div>
 </Link>
 </Reveal>
 )}

 {/* Two stacked cards */}
 <div className="grid gap-6">
 {rest.slice(0, 2).map((project, i) => (
 <Reveal key={project.slug} delay={(i + 1) * 0.1}>
 <Link
 href={`/projects/${project.slug}`}
 className="group flex h-full overflow-hidden rounded-[6px] border border-[var(--color-stone)] bg-white transition-all hover:border-[var(--color-rust)] hover:-translate-y-1 hover:shadow-lg duration-300"
 >
 <div className="relative aspect-square w-2/5 shrink-0 overflow-hidden bg-[var(--color-charcoal)]">
 <Image
 src={project.image}
 alt={project.imageAlt}
 fill
 sizes="(min-width: 768px) 25vw, 40vw"
 className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
 />
 </div>
 <div className="flex-1 p-6">
 <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-rust)]">
 {project.location}
 </span>
 <h3 className="mt-2 font-display text-[18px] font-bold leading-tight text-[var(--color-charcoal)] md:text-[20px]">
 {project.title}
 </h3>
 <span className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-[var(--color-rust)]">
 View Project
 <ArrowRight className="h-3 w-3" />
 </span>
 </div>
 </Link>
 </Reveal>
 ))}
 </div>
 </div>
 <Reveal className="mt-12 text-center" delay={0.2}>
 <Button href="/projects" variant="ghost" showArrow>
 See All Projects
 </Button>
 </Reveal>
 </Container>
 </Section>
 );
}

// ============== Section 9: Testimonials ==============
export function TestimonialsSection() {
 const featured = testimonials.slice(0, 3);

 return (
 <Section tone="cream" padded>
 <Container>
 <SectionHeading
 eyebrow="What Clients Say"
 title="Thirty years of referrals don't happen by accident."
 />
 <div className="mt-14 grid gap-6 md:grid-cols-3">
 {featured.map((t, i) => (
 <Reveal key={i} delay={i * 0.1}>
 <article className="flex h-full flex-col rounded-[6px] border border-[var(--color-stone)] bg-white p-7">
 <div className="flex gap-1 text-[var(--color-rust)]">
 {Array.from({ length: 5 }).map((_, j) => (
 <span key={j} aria-hidden>★</span>
 ))}
 </div>
 <p className="mt-5 flex-1 font-display text-[18px] italic leading-snug text-[var(--color-charcoal)] md:text-[20px]">
 &ldquo;{t.quote}&rdquo;
 </p>
 <footer className="mt-6 border-t border-[var(--color-stone)] pt-5 text-[13px]">
 <div className="font-semibold text-[var(--color-charcoal)]">
 {t.name}
 </div>
 <div className="text-[var(--color-slate)]">
 {t.location} · {t.service}
 </div>
 </footer>
 </article>
 </Reveal>
 ))}
 </div>
 <Reveal className="mt-10 flex flex-col items-center gap-4 text-center" delay={0.3}>
 <p className="text-[14px] text-[var(--color-slate)]">
 <span className="text-[var(--color-rust)]">★★★★★</span>{" "}
 <span className="font-semibold text-[var(--color-charcoal)]">
 Reviews on Google &amp; word-of-mouth
 </span>
 </p>
 <Button href="/testimonials" variant="ghost" showArrow>
 Read More Reviews
 </Button>
 </Reveal>
 </Container>
 </Section>
 );
}

// ============== Section 10: Service Areas ==============
export function ServiceAreasSection() {
 return (
 <Section tone="white" padded>
 <Container>
 <SectionHeading
 eyebrow="Where We Work"
 title="Miami-Dade. Broward. Palm Beach. The Keys."
 />
 <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
 <Reveal className="lg:col-span-5">
 {/* Illustrated South Florida service-area map. The base image is
 a flat editorial illustration of southeast Florida + the Keys
 (generated via Nano Banana Pro). City dot positions are tuned
 to the visual geography of THAT specific image, so adjustments
 here may be needed if the image is ever regenerated. */}
 <div className="relative aspect-square overflow-hidden rounded-[6px] shadow-sm ring-1 ring-[var(--color-stone)]/40">
 <Image
 src="/images/south-florida-map.jpg"
 alt="Illustrated map of South Florida showing Palm Beach, Broward, Miami-Dade, and Monroe counties (the Florida Keys), the service area for ReNewIt Floors"
 fill
 sizes="(min-width: 1024px) 40vw, 100vw"
 className="object-cover"
 />
 <svg
 viewBox="0 0 100 100"
 preserveAspectRatio="none"
 className="absolute inset-0 h-full w-full"
 aria-hidden
 >
 {[
 { x: 90, y: 17, label: "Boca Raton", size: "md" },
 { x: 92, y: 27, label: "Fort Lauderdale", size: "md" },
 { x: 78, y: 42, label: "Doral", size: "sm" },
 { x: 94, y: 42, label: "Miami", size: "lg" },
 { x: 87, y: 48, label: "Coral Gables", size: "sm" },
 { x: 84, y: 52, label: "Pinecrest", size: "sm" },
 { x: 73, y: 65, label: "Key Largo", size: "sm" },
 { x: 7, y: 94, label: "Key West", size: "md" },
 ].map((dot) => {
 const r = dot.size === "lg" ? 1.6 : dot.size === "md" ? 1.3 : 1.05;
 const ringR = r * 2.4;
 return (
 <g key={dot.label}>
 <circle cx={dot.x} cy={dot.y} r={ringR} fill="var(--color-rust)" fillOpacity="0.28" />
 <circle cx={dot.x} cy={dot.y} r={r} fill="var(--color-rust)" stroke="white" strokeWidth="0.4" />
 </g>
 );
 })}
 </svg>
 </div>
 </Reveal>
 <div className="space-y-7 lg:col-span-7">
 {serviceAreas.map((area, i) => (
 <Reveal key={area.county} delay={i * 0.08}>
 <div className="border-l-2 border-[var(--color-rust)] pl-6">
 <h3 className="font-display text-[22px] font-bold uppercase tracking-tight text-[var(--color-charcoal)]">
 {area.county}
 </h3>
 <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-slate)]">
 {area.cities.join(" · ")}
 </p>
 </div>
 </Reveal>
 ))}
 <Reveal delay={0.4}>
 <Button href="/service-areas" variant="ghost" showArrow>
 Check If We Serve Your Area
 </Button>
 </Reveal>
 </div>
 </div>
 </Container>
 </Section>
 );
}

// ============== Section 11: FAQ Snippet ==============
export function FaqSnippetSection() {
 const items = getHomepageFaqs().map((f) => ({ q: f.q, a: f.a }));

 return (
 <Section tone="cream" padded>
 <Container size="narrow">
 <SectionHeading
 eyebrow="Questions"
 title="Before you call."
 align="center"
 />
 <Reveal className="mt-12">
 <Accordion items={items} />
 </Reveal>
 <Reveal className="mt-10 text-center" delay={0.2}>
 <Button href="/faq" variant="ghost" showArrow>
 See All FAQs
 </Button>
 </Reveal>
 </Container>
 </Section>
 );
}
