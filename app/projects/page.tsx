import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/global/PageHero";
import { PreFooterCTA } from "@/components/global/PreFooterCTA";
import { breadcrumbSchema, jsonLdScript } from "@/lib/schema";
import { projects } from "@/lib/content/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Work – Before & After Floor Restoration",
  description:
    "See before and after photos of floor restoration work across Miami — terrazzo, polished concrete, marble, and more. 30+ years of South Florida craftsmanship.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Projects", url: `${site.url}/projects` },
          ]),
        )}
      />
      <PageHero
        eyebrow="Our Work"
        title="Floors that speak for themselves."
        description="Thirty years of restored floors across Miami-Dade, Broward, Palm Beach, and the Keys."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Projects", href: "/projects" },
        ]}
      />

      <Section tone="white" padded>
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 4) * 0.05}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block overflow-hidden rounded-[6px] border border-[var(--color-stone)] bg-white transition-all hover:border-[var(--color-rust)] hover:-translate-y-1 hover:shadow-lg duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-charcoal)]">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-charcoal)]">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-7">
                    <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--color-rust)]">
                      {project.location} · {project.service}
                    </span>
                    <h3 className="mt-3 font-display text-[24px] font-bold leading-tight text-[var(--color-charcoal)] md:text-[28px]">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-slate)]">
                      {project.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-rust)]">
                      View Project
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <PreFooterCTA
        heading="Want results like these in your home?"
        subhead="A free, honest assessment. No pressure. We'll walk your floor and tell you straight what's possible."
      />
    </>
  );
}
