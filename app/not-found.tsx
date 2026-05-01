import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section tone="white" padded>
      <Container size="narrow">
        <div className="py-20 text-center">
          <span className="font-display text-[120px] font-bold leading-none text-[var(--color-rust)]/20 md:text-[200px]">
            404
          </span>
          <h1 className="mt-4 font-display text-[36px] font-bold leading-tight tracking-[-0.025em] text-[var(--color-charcoal)] md:text-[56px]">
            Looks like that floor wandered off.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-[var(--color-slate)]">
            The page you&apos;re looking for isn&apos;t here. But the team is —
            and we&apos;re happy to help with whatever floor you&apos;ve got.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/" variant="primary" showArrow>
              Back to Home
            </Button>
            <Link
              href="/contact"
              className="text-[15px] font-semibold text-[var(--color-charcoal)] underline-offset-4 hover:text-[var(--color-rust)] hover:underline"
            >
              Get a Free Floor Assessment Instead →
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
