import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/global/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
 title: "Privacy Policy",
 alternates: { canonical: "/privacy" },
 robots: { index: false, follow: true },
};

export default function PrivacyPage() {
 return (
 <>
 <PageHero
 title="Privacy Policy"
 description={`Effective Date: ${new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}`}
 breadcrumbs={[
 { name: "Home", href: "/" },
 { name: "Privacy", href: "/privacy" },
 ]}
 />
 <Section tone="white" padded>
 <Container size="narrow">
 <div className="prose-content space-y-7 text-[16px] leading-relaxed text-[var(--color-slate)]">
 <p>
 {site.legalName} (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) operates {site.url}{" "}
 and respects your privacy. This Privacy Policy explains what information we collect,
 how we use it, and your rights.
 </p>

 <h2 className="font-display text-[26px] font-bold text-[var(--color-charcoal)]">
 Information We Collect
 </h2>
 <p>
 When you fill out a contact or assessment form, we collect the
 information you submit, typically your name, phone number,
 email, property address, and project details. We may also
 collect basic analytics data (page views, device type, general
 location) automatically through services like Google Analytics
 and Microsoft Clarity.
 </p>

 <h2 className="font-display text-[26px] font-bold text-[var(--color-charcoal)]">
 How We Use Your Information
 </h2>
 <p>
 We use the information you provide solely to respond to your
 inquiry, schedule assessments, and provide service. We do not
 sell, rent, or share your contact information with third
 parties for marketing.
 </p>

 <h2 className="font-display text-[26px] font-bold text-[var(--color-charcoal)]">
 Cookies &amp; Analytics
 </h2>
 <p>
 We use cookies and similar technologies for site functionality
 and analytics. You can disable cookies in your browser settings
 if you prefer.
 </p>

 <h2 className="font-display text-[26px] font-bold text-[var(--color-charcoal)]">
 Your Rights
 </h2>
 <p>
 You may request access to, correction of, or deletion of your
 personal information at any time by contacting us at{" "}
 <a
 href={site.emailHref}
 className="text-[var(--color-rust)] hover:underline"
 >
 {site.email}
 </a>
 .
 </p>

 <h2 className="font-display text-[26px] font-bold text-[var(--color-charcoal)]">
 Contact Us
 </h2>
 <p>
 Questions about this policy? Email{" "}
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
