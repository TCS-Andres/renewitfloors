import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/global/PageHero";

export const metadata: Metadata = {
 title: "Blog - Coming Soon",
 description:
 "Floor care tips, restoration vs. replacement guidance, and surface spotlights from ReNewIt Floors. Coming soon.",
 alternates: { canonical: "/blog" },
 robots: { index: false, follow: true },
};

export default function BlogPage() {
 return (
 <>
 <PageHero
 eyebrow="Coming Soon"
 title="The Blog."
 description="Floor care tips, restoration vs. replacement guidance, surface spotlights, and behind-the-process stories from thirty years of South Florida floor work."
 breadcrumbs={[
 { name: "Home", href: "/" },
 { name: "Blog", href: "/blog" },
 ]}
 />

 <Section tone="white" padded>
 <Container size="narrow">
 <Reveal className="rounded-[6px] border border-[var(--color-stone)] bg-[var(--color-cream)] p-10 text-center md:p-14">
 <Eyebrow className="block mb-4">Categories on the Way</Eyebrow>
 <ul className="mx-auto flex max-w-2xl flex-wrap justify-center gap-2">
 {[
 "Floor Care Tips",
 "Restoration vs. Replacement",
 "Surface Spotlights",
 "Behind the Process",
 ].map((cat) => (
 <li
 key={cat}
 className="rounded-full bg-white px-4 py-2 text-[13px] font-medium text-[var(--color-charcoal)]"
 >
 {cat}
 </li>
 ))}
 </ul>
 <h2 className="mt-10 font-display text-[26px] font-bold leading-tight text-[var(--color-charcoal)] md:text-[32px]">
 Posts coming soon.
 </h2>
 <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-[var(--color-slate)]">
 In the meantime, the fastest way to get answers about your floor
 is a free, no-pressure assessment.
 </p>
 <div className="mt-7">
 <Button href="/contact" showArrow>
 Request Your Free Assessment
 </Button>
 </div>
 </Reveal>
 </Container>
 </Section>
 </>
 );
}
