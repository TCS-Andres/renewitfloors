import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/global/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Floor Care Guide",
  description:
    "A free floor care guide from ReNewIt Floors — Miami's family-owned floor restoration specialists. Coming soon.",
  alternates: { canonical: "/floor-care-guide" },
  robots: { index: false, follow: true },
};

export default function FloorCareGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Coming Soon"
        title="Floor Care Guide."
        description="A free guide for South Florida homeowners. Drop your email and we'll send it your way the moment it's ready."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Floor Care Guide", href: "/floor-care-guide" },
        ]}
      />

      <Section tone="white" padded>
        <Container size="narrow">
          <Reveal className="rounded-[6px] border border-[var(--color-stone)] bg-[var(--color-cream)] p-8 md:p-12">
            <Eyebrow className="block mb-4">Get Notified</Eyebrow>
            <h2 className="font-display text-[28px] font-bold leading-tight text-[var(--color-charcoal)] md:text-[36px]">
              We&apos;re putting together a guide.
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-[var(--color-slate)]">
              What to look for in your floors. What to avoid. How to know if
              your floor can be restored. Real, honest guidance from thirty
              years of South Florida restoration work.
            </p>
            <form
              action={site.formSubmitEndpoint}
              method="POST"
              className="mt-8 grid gap-4 sm:grid-cols-[1fr_auto]"
            >
              <input
                type="hidden"
                name="_subject"
                value="Floor Care Guide — Email List Signup"
              />
              <input
                type="hidden"
                name="_next"
                value={`${site.url}/floor-care-guide?subscribed=true`}
              />
              <input type="text" name="_honey" style={{ display: "none" }} />
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="h-14 w-full rounded-[6px] border border-[var(--color-stone)] bg-white px-4 text-[16px] text-[var(--color-charcoal)] placeholder:text-[var(--color-slate)]/60 focus:border-[var(--color-rust)] focus:outline-none focus:ring-2 focus:ring-[var(--color-rust)]/20"
              />
              <button
                type="submit"
                className="inline-flex h-14 items-center justify-center rounded-[6px] bg-[var(--color-rust)] px-7 text-[16px] font-semibold text-white transition-colors hover:bg-[var(--color-rust-dark)]"
              >
                Notify Me
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 rounded-[6px] border border-[var(--color-stone)] p-8 text-center md:p-10">
            <Eyebrow className="block mb-3">Don&apos;t Want to Wait?</Eyebrow>
            <h3 className="font-display text-[22px] font-bold leading-tight text-[var(--color-charcoal)] md:text-[28px]">
              Get a free, no-pressure floor assessment now.
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-slate)]">
              We&apos;ll come walk your floor and tell you straight what&apos;s possible.
            </p>
            <div className="mt-6">
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
