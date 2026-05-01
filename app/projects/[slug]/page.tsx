import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PreFooterCTA } from "@/components/global/PreFooterCTA";
import { breadcrumbSchema, jsonLdScript } from "@/lib/schema";
import { projects, getProjectBySlug } from "@/lib/content/projects";
import { getServiceBySlug } from "@/lib/content/services";
import { site } from "@/lib/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} – ${project.location}`,
    description: project.excerpt,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectDetail({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const service = getServiceBySlug(project.serviceSlug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: "Home", url: site.url },
            { name: "Projects", url: `${site.url}/projects` },
            { name: project.title, url: `${site.url}/projects/${project.slug}` },
          ]),
        )}
      />

      <article>
        <section className="bg-[var(--color-cream)] pt-28 pb-16 md:pt-36 md:pb-24">
          <Container>
            <Reveal>
              <Link
                href="/projects"
                className="mb-8 inline-flex items-center gap-2 text-[14px] font-semibold text-[var(--color-slate)] transition-colors hover:text-[var(--color-rust)]"
              >
                <ArrowLeft className="h-4 w-4" />
                All Projects
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <Eyebrow className="block mb-4">
                {project.category} · {project.location} · {project.service}
              </Eyebrow>
              <h1 className="max-w-4xl font-display text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-[var(--color-charcoal)] md:text-[64px]">
                {project.title}
              </h1>
            </Reveal>
          </Container>
        </section>

        <section>
          <div className="relative aspect-[16/8] w-full overflow-hidden bg-[var(--color-charcoal)]">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </section>

        <Section tone="white" padded>
          <Container size="narrow">
            <Reveal>
              <Eyebrow className="block mb-4">The Story</Eyebrow>
              <p className="font-display text-[24px] leading-[1.4] text-[var(--color-charcoal)] md:text-[30px]">
                {project.story}
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-12 grid gap-4 sm:grid-cols-3">
              <Stat label="Location" value={project.location} />
              <Stat label="Service" value={project.service} />
              <Stat label="Type" value={project.category} />
            </Reveal>
          </Container>
        </Section>

        {service && (
          <Section tone="cream" padded>
            <Container size="narrow">
              <Reveal>
                <Eyebrow className="block mb-3">Service Used</Eyebrow>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block rounded-[6px] border border-[var(--color-stone)] bg-white p-7 transition-colors hover:border-[var(--color-rust)] md:p-10"
                >
                  <h3 className="font-display text-[26px] font-bold leading-tight text-[var(--color-charcoal)] md:text-[32px]">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-[var(--color-slate)]">
                    {service.shortDescription}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-rust)]">
                    Learn About This Service
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            </Container>
          </Section>
        )}
      </article>

      <PreFooterCTA
        heading="Want results like these in your home?"
        subhead="A free, honest assessment. No pressure. We'll walk your floor and tell you straight what's possible."
      />
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-[var(--color-stone)] pt-4">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-slate)]">
        {label}
      </div>
      <div className="mt-1.5 font-display text-[20px] font-semibold text-[var(--color-charcoal)]">
        {value}
      </div>
    </div>
  );
}
