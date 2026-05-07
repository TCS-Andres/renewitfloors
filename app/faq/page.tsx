import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { PageHero } from "@/components/global/PageHero";
import { PreFooterCTA } from "@/components/global/PreFooterCTA";
import { L } from "@/components/global/L";
import { breadcrumbSchema, faqPageSchema, jsonLdScript } from "@/lib/schema";
import { faqs, getFaqsByCategory } from "@/lib/content/faqs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about floor restoration in Miami — costs, timelines, surface types, warranties. Honest answers from a family-owned restoration team.",
  alternates: { canonical: "/faq" },
};

const categoryOrder = [
  "General",
  "Concrete & Epoxy",
  "Stone & Specialty Tile",
  "Hardwood & Repair",
  "Pricing & Process",
  "Warranty",
] as const;

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqPageSchema(faqs))}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "FAQ", url: `${site.url}/faq` },
          ]),
        )}
      />
      <PageHero
        eyebrow="Questions"
        title="Frequently Asked Questions."
        description="Honest answers to the questions we hear most. If yours isn't here, just give us a call."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "FAQ", href: "/faq" },
        ]}
      />

      <Section tone="white" padded>
        <Container size="narrow">
          <div className="space-y-20">
            {categoryOrder.map((cat) => {
              const items = getFaqsByCategory(cat);
              if (!items.length) return null;
              const slug = cat.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
              return (
                <Reveal key={cat} as="section" id={slug}>
                  <Eyebrow className="block mb-4">{cat}</Eyebrow>
                  <h2 className="font-display text-[28px] font-bold leading-tight tracking-[-0.025em] text-[var(--color-charcoal)] md:text-[36px]">
                    {cat}
                  </h2>
                  <div className="mt-8">
                    <Accordion items={items.map((f) => ({ q: <L en={f.q} es={f.qEs} />, a: <L en={f.a} es={f.aEs} /> }))} />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <PreFooterCTA />
    </>
  );
}
