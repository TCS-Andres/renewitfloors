import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/global/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
 title: "Terms of Service",
 alternates: { canonical: "/terms" },
 robots: { index: false, follow: true },
};

export default function TermsPage() {
 return (
 <>
 <PageHero
 title="Terms of Service"
 description={`Effective Date: ${new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}`}
 breadcrumbs={[
 { name: "Home", href: "/" },
 { name: "Terms", href: "/terms" },
 ]}
 />
 <Section tone="white" padded>
 <Container size="narrow">
 <div className="space-y-7 text-[16px] leading-relaxed text-[var(--color-slate)]">
 <p>
 These Terms of Service govern your use of {site.url} and the
 services provided by {site.legalName}. By using this website or
 engaging our services, you agree to these terms.
 </p>

 <h2 className="font-display text-[26px] font-bold text-[var(--color-charcoal)]">
 Services Description
 </h2>
 <p>
 {site.legalName} provides floor restoration services including but
 not limited to concrete polishing, terrazzo restoration, marble
 restoration, tile restoration, hardwood refinishing, and
 commercial/industrial floor care. Specific scope, pricing, and
 warranty terms are defined in each individual project quote.
 </p>

 <h2 className="font-display text-[26px] font-bold text-[var(--color-charcoal)]">
 No Guarantees on Specific Outcomes
 </h2>
 <p>
 Every floor is unique. While we apply our Foundation-First method
 and 30+ years of expertise to every job, we cannot guarantee
 specific outcomes for every floor. Our on-site assessments
 provide an honest evaluation of what is possible, and what is
 not, before any work begins.
 </p>

 <h2 className="font-display text-[26px] font-bold text-[var(--color-charcoal)]">
 Warranty
 </h2>
 <p>
 All work is backed by our 1-year warranty on craftsmanship and
 materials. Specific warranty terms are documented with each
 project.
 </p>

 <h2 className="font-display text-[26px] font-bold text-[var(--color-charcoal)]">
 Liability Limitations
 </h2>
 <p>
 {site.legalName}&apos;s liability is limited to the amount paid for
 services rendered. We are not liable for indirect, incidental, or
 consequential damages.
 </p>

 <h2 className="font-display text-[26px] font-bold text-[var(--color-charcoal)]">
 Governing Law
 </h2>
 <p>
 These terms are governed by the laws of the State of Florida.
 </p>

 <h2 className="font-display text-[26px] font-bold text-[var(--color-charcoal)]">
 Contact Us
 </h2>
 <p>
 Questions? Email{" "}
 <a
 href={site.emailHref}
 className="text-[var(--color-rust)] hover:underline"
 >
 {site.email}
 </a>{" "}
 or call{" "}
 <a
 href={site.phoneHref}
 className="text-[var(--color-rust)] hover:underline"
 >
 {site.phone}
 </a>
 .
 </p>
 </div>
 </Container>
 </Section>
 </>
 );
}
