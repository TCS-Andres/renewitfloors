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
 {/* South Florida service-area map. Coordinates are projected from
 real lat/lon (Jupiter 26.93N down to Key West 24.55N, longitude
 81.78W to 80.05W) into the 400x400 viewBox so cities sit at
 their actual relative geographic positions. */}
 <div className="relative aspect-square rounded-[6px] bg-[var(--color-cream)] p-6 sm:p-8 md:p-10">
 <svg
 viewBox="0 0 400 400"
 className="h-full w-full"
 fill="none"
 role="img"
 aria-labelledby="sf-map-title sf-map-desc"
 >
 <title id="sf-map-title">South Florida service area</title>
 <desc id="sf-map-desc">Map of southeast Florida and the Keys showing Palm Beach, Broward, Miami-Dade and Monroe counties with city markers for the areas served by ReNewIt Floors.</desc>
 <defs>
 <linearGradient id="sf-land" x1="0" y1="0" x2="0" y2="1">
 <stop offset="0%" stopColor="var(--color-stone)" stopOpacity="0.32" />
 <stop offset="100%" stopColor="var(--color-stone)" stopOpacity="0.55" />
 </linearGradient>
 <linearGradient id="sf-ocean" x1="0" y1="0" x2="1" y2="0">
 <stop offset="55%" stopColor="var(--color-cream)" stopOpacity="0" />
 <stop offset="100%" stopColor="#9bb8c4" stopOpacity="0.18" />
 </linearGradient>
 </defs>

 {/* Faint Atlantic wash on the east edge */}
 <rect x="0" y="0" width="400" height="400" fill="url(#sf-ocean)" />

 {/* SE Florida mainland: Atlantic coast from Jupiter (top NE) down
 through Boca, Fort Lauderdale, Miami, to Florida City (mainland
 southern tip), then west across Florida Bay, then north along
 the Everglades inland edge back up to PB. */}
 <path
 d="M 370 22
 L 380 40 L 382 60 L 378 85
 L 370 110 L 367 135 L 365 152
 L 363 172 L 363 192 L 360 212
 L 348 228 L 320 246 L 293 254
 L 255 256 L 215 252
 L 195 222 L 180 187 L 170 152
 L 165 117 L 170 82 L 180 52
 L 200 30 L 235 18 L 290 14
 L 335 18 Z"
 fill="url(#sf-land)"
 stroke="var(--color-charcoal)"
 strokeOpacity="0.55"
 strokeWidth="1.6"
 strokeLinejoin="round"
 />

 {/* County boundaries (dashed). Latitudes:
 PB / Broward at ~26.32 N → y ≈ 116
 Broward / Miami-Dade at ~25.97 N → y ≈ 168 */}
 <line x1="167" y1="116" x2="370" y2="116" stroke="var(--color-charcoal)" strokeOpacity="0.32" strokeWidth="1" strokeDasharray="3 3" />
 <line x1="170" y1="168" x2="365" y2="168" stroke="var(--color-charcoal)" strokeOpacity="0.32" strokeWidth="1" strokeDasharray="3 3" />

 {/* County labels */}
 <text x="232" y="68" fontSize="9" fontWeight="700" fill="var(--color-charcoal)" opacity="0.65" letterSpacing="1.5">PALM BEACH</text>
 <text x="248" y="146" fontSize="9" fontWeight="700" fill="var(--color-charcoal)" opacity="0.65" letterSpacing="1.5">BROWARD</text>
 <text x="232" y="220" fontSize="9" fontWeight="700" fill="var(--color-charcoal)" opacity="0.65" letterSpacing="1.5">MIAMI-DADE</text>
 <text x="115" y="345" fontSize="9" fontWeight="700" fill="var(--color-rust)" opacity="0.85" letterSpacing="1.5">MONROE / KEYS</text>

 {/* Florida Keys arc curving SW from Florida City through Key
 Largo and Marathon down to Key West. */}
 <path
 d="M 290 254 Q 305 278 295 302 Q 232 322 165 358 Q 95 374 25 380"
 stroke="var(--color-rust)"
 strokeOpacity="0.28"
 strokeWidth="7"
 strokeLinecap="round"
 fill="none"
 />
 <path
 d="M 290 254 Q 305 278 295 302 Q 232 322 165 358 Q 95 374 25 380"
 stroke="var(--color-rust)"
 strokeOpacity="0.9"
 strokeWidth="2"
 strokeLinecap="round"
 fill="none"
 />

 {/* City markers (positioned by lat/lon projection). Size tiers:
 lg = primary anchor (Miami), md = major city, sm = sub-city. */}
 {[
 { x: 374, y: 57, label: "West Palm Beach", size: "md" },
 { x: 359, y: 109, label: "Boca Raton", size: "md" },
 { x: 357, y: 146, label: "Fort Lauderdale", size: "md" },
 { x: 313, y: 191, label: "Doral", size: "sm" },
 { x: 346, y: 199, label: "Miami", size: "lg" },
 { x: 331, y: 205, label: "Coral Gables", size: "sm" },
 { x: 323, y: 213, label: "Pinecrest", size: "sm" },
 { x: 295, y: 302, label: "Key Largo", size: "sm" },
 { x: 25, y: 380, label: "Key West", size: "md" },
 ].map((dot) => {
 const inner = dot.size === "lg" ? 6 : dot.size === "md" ? 5 : 4;
 const outer = inner * 2.2;
 return (
 <g key={dot.label}>
 <circle cx={dot.x} cy={dot.y} r={outer} fill="var(--color-rust)" fillOpacity="0.22" />
 <circle cx={dot.x} cy={dot.y} r={inner} fill="var(--color-rust)" />
 </g>
 );
 })}

 {/* Atlantic Ocean compass cue */}
 <text x="392" y="115" fontSize="8" fontWeight="600" fill="var(--color-slate)" opacity="0.45" letterSpacing="2" textAnchor="middle" transform="rotate(-90 392 115)">ATLANTIC</text>
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
