import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/global/PageHero";
import { PreFooterCTA } from "@/components/global/PreFooterCTA";
import { Button } from "@/components/ui/Button";
import { breadcrumbSchema, jsonLdScript } from "@/lib/schema";
import { testimonials } from "@/lib/content/testimonials";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Testimonials & Reviews",
  description:
    "Real reviews from South Florida homeowners and contractors. Family-owned floor restoration with 30+ years of referrals. Read what our clients say.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Testimonials", url: `${site.url}/testimonials` },
          ]),
        )}
      />
      <PageHero
        eyebrow="What Clients Say"
        title="Thirty years of referrals don't happen by accident."
        description="Most of our work comes from word-of-mouth. Here's what clients say about working with us."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Testimonials", href: "/testimonials" },
        ]}
      />

      <Section tone="white" padded={false}>
        <Container>
          <div className="border-y border-[var(--color-stone)] py-8">
            <Reveal className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
              <div className="flex items-center gap-3">
                <span className="text-[20px] text-[var(--color-rust)]">
                  ★★★★★
                </span>
                <span className="text-[15px] font-semibold text-[var(--color-charcoal)]">
                  Reviews from Google &amp; word-of-mouth
                </span>
              </div>
              <Button
                href="https://www.google.com/maps/search/renewit+floors+miami"
                variant="ghost"
                size="sm"
                external
              >
                See Reviews on Google →
              </Button>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="cream" padded>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={(i % 6) * 0.05}>
                <article className="flex h-full flex-col rounded-[6px] border border-[var(--color-stone)] bg-white p-7">
                  <div className="flex gap-1 text-[var(--color-rust)]">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} aria-hidden>
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 flex-1 font-display text-[18px] italic leading-snug text-[var(--color-charcoal)]">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-6 border-t border-[var(--color-stone)] pt-5">
                    <div className="text-[14px] font-semibold text-[var(--color-charcoal)]">
                      {t.name}
                    </div>
                    <div className="text-[12px] text-[var(--color-slate)]">
                      {t.location} · {t.service}
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-wider text-[var(--color-slate)]/70">
                      {t.date}
                    </div>
                  </footer>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white" padded>
        <Container size="narrow">
          <Reveal className="rounded-[6px] border border-[var(--color-stone)] bg-[var(--color-cream)] p-10 text-center md:p-14">
            <Eyebrow className="block mb-3">Worked With Us?</Eyebrow>
            <h2 className="font-display text-[28px] font-bold leading-tight text-[var(--color-charcoal)] md:text-[36px]">
              We&apos;d love to hear about it.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-[var(--color-slate)]">
              A short Google review helps other South Florida homeowners find
              honest floor restoration. Thank you in advance.
            </p>
            <div className="mt-8">
              <Button
                href="https://www.google.com/maps/search/renewit+floors+miami"
                showArrow
                external
              >
                Leave a Google Review
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <PreFooterCTA />
    </>
  );
}
