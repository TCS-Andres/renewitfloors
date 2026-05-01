import type { Metadata } from "next";
import { TrustBar } from "@/components/global/TrustBar";
import { Hero } from "@/components/home/Hero";
import {
  ProblemSection,
  GuideSection,
  ServicesShowcase,
  PlanSection,
  FoundationFirstSection,
  FeaturedProjectsSection,
  TestimonialsSection,
  ServiceAreasSection,
  FaqSnippetSection,
} from "@/components/home/HomeSections";
import { PreFooterCTA } from "@/components/global/PreFooterCTA";
import { faqPageSchema, jsonLdScript } from "@/lib/schema";
import { getHomepageFaqs } from "@/lib/content/faqs";

export const metadata: Metadata = {
  title: "Floor Restoration in Miami, FL",
  description:
    "Family-owned floor restoration in Miami with 30+ years restoring concrete, terrazzo, marble, and tile. Honest quotes. 1-year warranty. Free assessment.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const faqs = getHomepageFaqs();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqPageSchema(faqs))}
      />
      <Hero />
      <TrustBar tone="charcoal" />
      <ProblemSection />
      <GuideSection />
      <ServicesShowcase />
      <PlanSection />
      <FoundationFirstSection />
      <FeaturedProjectsSection />
      <TestimonialsSection />
      <ServiceAreasSection />
      <FaqSnippetSection />
      <PreFooterCTA />
    </>
  );
}
