import type { Metadata } from "next";
import Image from "next/image";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { TrustBar } from "@/components/global/TrustBar";
import { PreFooterCTA } from "@/components/global/PreFooterCTA";
import { PageHero } from "@/components/global/PageHero";
import { breadcrumbSchema, jsonLdScript } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
 title: "About Us - Family-Owned Floor Restoration",
 description:
 "Jose and the ReNewIt Floors team have restored South Florida floors for 30+ years. Family-owned, owner-operated. Honest pricing. Free assessment.",
 alternates: { canonical: "/about" },
};

const characteristics = [
 {
 title: "Work Hard with a Smile",
 body: "The work is physical, dusty, hot Miami work. We show up willing, and make sure customers feel welcome in their own home while we're there.",
 },
 {
 title: "Be Trustworthy and Honest",
 body: "We tell customers what we can do, and what we can't. Show up when we said we'd show up. Charge what we said we'd charge.",
 },
 {
 title: "Deliver More Than Expected",
 body: "Their expectation is the starting point, not the ceiling. If a small detail takes another hour, we take the hour.",
 },
 {
 title: "Love Creating Unforgettable Moments",
 body: 'When a homeowner walks into a finished floor and says "Wow," that moment is the product.',
 },
];

export default function AboutPage() {
 return (
 <>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={jsonLdScript(
 breadcrumbSchema([
 { name: "Home", url: site.url },
 { name: "About", url: `${site.url}/about` },
 ]),
 )}
 />
 <PageHero
 eyebrow="About"
 title={<>Thirty years.<br />Same hands. Same standards.</>}
 description="Family-owned floor restoration in Miami. The phone we answer today, (305) 271-7119, has been our line for over twenty years."
 />
 <TrustBar tone="cream" />

 {/* Origin story */}
 <Section tone="white" padded>
 <Container>
 <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
 <Reveal className="lg:col-span-5">
 <Eyebrow className="mb-4 block">Our Story</Eyebrow>
 <h2 className="font-display text-[28px] font-bold leading-[1.08] tracking-[-0.025em] text-balance text-[var(--color-charcoal)] sm:text-[36px] sm:leading-[1.05] md:text-[48px]">
 A craft passed down. A name that&apos;s stayed in Miami.
 </h2>
 </Reveal>
 <Reveal delay={0.15} className="space-y-5 text-[17px] leading-relaxed text-[var(--color-slate)] lg:col-span-7 md:text-[19px]">
 <p>
 ReNewIt Floors is a family business. Jose Fernandez, owner,
 founder, and primary operator, has been restoring floors in
 South Florida for over thirty years. The craft has been refined
 by decades of hands-on work in homes from Coral Gables to the
 Keys.
 </p>
 <p>
 Jose&apos;s on every job. He&apos;s there when the truck pulls up. He
 runs the assessments, gives the quotes, and stands on the floor
 while his guys work. He&apos;s not a CEO behind a desk. He&apos;s a floor
 guy, in the truest sense, and proud of it.
 </p>
 <p className="font-display text-[22px] font-semibold italic leading-snug text-[var(--color-charcoal)]">
 &ldquo;I sell myself. I don&apos;t go out and get customers. The
 work comes to me because the work I&apos;ve done is good.&rdquo;
 </p>
 <p>
 That&apos;s how the phone keeps ringing. Past clients call after
 fifteen, twenty years. Contractors send their hardest floor
 jobs. Neighbors of neighbors knock on the door. Word-of-mouth,
 refined over three decades.
 </p>
 </Reveal>
 </div>
 </Container>
 </Section>

 {/* Foundation-first method */}
 <section className="bg-[var(--color-ink)] text-white" id="method">
 <Container>
 <div className="py-20 sm:py-24 md:py-36">
 <Reveal>
 <Eyebrow tone="rust" className="block mb-6">
 The Foundation-First Method
 </Eyebrow>
 </Reveal>
 <Reveal delay={0.1}>
 <h2 className="max-w-4xl font-display text-[32px] font-bold leading-[1.07] tracking-[-0.025em] text-balance text-white sm:text-[40px] sm:leading-[1.05] md:text-[64px]">
 Foundation first. Always.
 </h2>
 </Reveal>
 <Reveal delay={0.2}>
 <div className="mt-12 grid gap-12 md:grid-cols-3">
 {[
 {
 title: "The Concrete Cream",
 body: "When concrete dries, a soft cream layer forms at the top. Paint, sealer, and stain don't bond to it. That's why most garage epoxy peels in six months. We grind through the cream every time.",
 },
 {
 title: "The Crooked Wall",
 body: '"A carpenter is building something on a wall, but the wall is crooked. You gotta move things around. Shift." Every floor is different. A craftsman adapts.',
 },
 {
 title: "The Mexican Tile Shell",
 body: "When they make Mexican tiles, they put them out on the fields and the sun makes the shell. That shell isn't very hard. Some floors won't take a full restoration. We tell you the truth.",
 },
 ].map((item, i) => (
 <Reveal key={i} delay={0.1 * i} className="border-t border-white/15 pt-6">
 <h3 className="font-display text-[22px] font-bold text-white md:text-[24px]">
 {item.title}
 </h3>
 <p className="mt-3 text-[16px] leading-relaxed text-[var(--color-cream)]/85">
 {item.body}
 </p>
 </Reveal>
 ))}
 </div>
 </Reveal>
 <Reveal delay={0.3}>
 <div className="mt-14 max-w-3xl space-y-5 text-[17px] leading-relaxed text-[var(--color-cream)]/85 md:text-[18px]">
 <p>
 Most contractors skip prep. They lay paint, epoxy, or sealer
 on top of a surface that hasn&apos;t been ground, cleaned, or
 opened. The result looks fine for six months, then peels.
 </p>
 <p>
 Our approach is the opposite. Before any finish goes on, the
 floor is diamond-ground. Sometimes six or seven passes. Borders
 are hand-detailed. Every step is intentional.
 </p>
 <p className="font-display text-[20px] font-semibold text-[var(--color-rust)]">
 Foundation-first is craftsmanship as ethics.
 </p>
 </div>
 </Reveal>
 </div>
 </Container>
 </section>

 {/* Four characteristics */}
 <Section tone="cream" padded>
 <Container>
 <Reveal>
 <Eyebrow className="block mb-4">What We Believe</Eyebrow>
 <h2 className="max-w-3xl font-display text-[32px] font-bold leading-[1.07] tracking-[-0.025em] text-balance text-[var(--color-charcoal)] sm:text-[40px] sm:leading-[1.05] md:text-[56px]">
 The standards we hold ourselves to.
 </h2>
 </Reveal>
 <div className="mt-14 grid gap-6 md:grid-cols-2">
 {characteristics.map((c, i) => (
 <Reveal key={c.title} delay={i * 0.08}>
 <div className="rounded-[6px] border border-[var(--color-stone)] bg-white p-7">
 <span className="font-display text-[44px] font-bold leading-none text-[var(--color-rust)]/30">
 0{i + 1}
 </span>
 <h3 className="mt-4 font-display text-[22px] font-bold leading-tight text-[var(--color-charcoal)] md:text-[24px]">
 {c.title}
 </h3>
 <p className="mt-3 text-[16px] leading-relaxed text-[var(--color-slate)]">
 {c.body}
 </p>
 </div>
 </Reveal>
 ))}
 </div>
 </Container>
 </Section>

 {/* Pricing philosophy */}
 <Section tone="white" padded>
 <Container size="narrow">
 <Reveal className="text-center">
 <Eyebrow className="block mb-5">How We Price</Eyebrow>
 <Quote className="mx-auto h-10 w-10 text-[var(--color-rust)]" aria-hidden />
 <p className="mx-auto mt-6 max-w-3xl font-display text-[26px] font-bold leading-[1.18] tracking-[-0.025em] text-balance text-[var(--color-charcoal)] sm:text-[34px] sm:leading-[1.15] md:text-[48px]">
 A fair price to do a good job. Not a cheap price to do a bad job.
 </p>
 <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-relaxed text-[var(--color-slate)] md:text-[19px]">
 Every quote is transparent and tied to the actual scope of work.
 No hidden fees. No surprise charges. No mid-job upsells. We
 don&apos;t race to the bottom, that&apos;s not our lane.
 </p>
 </Reveal>
 </Container>
 </Section>

 {/* 1-year warranty */}
 <Section tone="cream" padded>
 <Container>
 <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
 <Reveal>
 <Eyebrow className="block mb-4">Our Promise</Eyebrow>
 <h2 className="font-display text-[40px] font-bold leading-[1.05] tracking-[-0.025em] text-[var(--color-charcoal)] md:text-[52px]">
 Backed by a 1-Year Warranty.
 </h2>
 </Reveal>
 <Reveal delay={0.15} className="space-y-5 text-[17px] leading-relaxed text-[var(--color-slate)]">
 <p>
 Every job is backed by our 1-year warranty. If something
 isn&apos;t right, we come back. We&apos;ve eaten cost on jobs
 to make a customer happy because, as Jose puts it, {" "}
 <em className="font-semibold text-[var(--color-charcoal)]">
 it pays itself back.
 </em>
 </p>
 <p>
 Reputation lives in the follow-through. Even outside the formal
 warranty, we&apos;ve come back years later to fix small issues.
 That&apos;s how we&apos;ve built thirty years of referrals.
 </p>
 <div className="pt-4">
 <Button href="/contact" showArrow>
 Schedule a Walk-Through
 </Button>
 </div>
 </Reveal>
 </div>
 </Container>
 </Section>

 <PreFooterCTA />
 </>
 );
}
