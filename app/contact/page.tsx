import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/global/PageHero";
import { TrustBar } from "@/components/global/TrustBar";
import { breadcrumbSchema, jsonLdScript } from "@/lib/schema";
import { site } from "@/lib/site";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
 title: "Contact - Free Floor Assessment",
 description:
 "Request a free floor assessment from ReNewIt Floors. Family-owned in Miami. Call (305) 271-7119 or fill out the form for an honest quote.",
 alternates: { canonical: "/contact" },
};

export default function ContactPage() {
 return (
 <>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={jsonLdScript(
 breadcrumbSchema([
 { name: "Home", url: site.url },
 { name: "Contact", url: `${site.url}/contact` },
 ]),
 )}
 />
 <PageHero
 eyebrow="Contact"
 title="Let's walk your floor."
 description="A free, no-pressure assessment. We'll tell you straight what's possible, and what's not."
 breadcrumbs={[
 { name: "Home", href: "/" },
 { name: "Contact", href: "/contact" },
 ]}
 />

 <Section tone="white" padded>
 <Container>
 <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
 <Reveal className="lg:col-span-7" id="assessment-form">
 <Eyebrow className="block mb-4">Request a Free Assessment</Eyebrow>
 <h2 className="font-display text-[26px] font-bold leading-tight tracking-[-0.025em] text-balance text-[var(--color-charcoal)] sm:text-[32px] md:text-[40px]">
 Tell us about your floor.
 </h2>
 <p className="mt-4 text-[17px] leading-relaxed text-[var(--color-slate)]">
 We read every message. You&apos;ll hear back within one business day.
 </p>
 <form
 action={site.formSubmitEndpoint}
 method="POST"
 className="mt-10 grid gap-5"
 >
 {/* FormSubmit configuration */}
 <input
 type="hidden"
 name="_subject"
 value="New Floor Assessment Request, ReNewIt Floors"
 />
 <input type="hidden" name="_template" value="table" />
 <input type="hidden" name="_captcha" value="false" />
 <input
 type="hidden"
 name="_next"
 value={`${site.url}/contact?submitted=true`}
 />
 <input type="text" name="_honey" style={{ display: "none" }} />

 <div className="grid gap-5 sm:grid-cols-2">
 <Field
 label="First Name"
 name="first_name"
 type="text"
 required
 />
 <Field
 label="Last Name"
 name="last_name"
 type="text"
 required
 />
 </div>
 <div className="grid gap-5 sm:grid-cols-2">
 <Field label="Phone Number" name="phone" type="tel" required />
 <Field label="Email" name="email" type="email" required />
 </div>
 <Field
 label="Property Address"
 name="address"
 type="text"
 required
 />
 <Field label="City" name="city" type="text" required />

 <SelectField
 label="Property Type"
 name="property_type"
 required
 options={[
 "Residential",
 "Commercial",
 "Industrial",
 ]}
 />

 <SelectField
 label="Service of Interest"
 name="service"
 required
 options={services.map((s) => s.name)}
 />

 <Field
 label="Approximate Square Footage (optional)"
 name="sqft"
 type="text"
 placeholder="e.g., 1,200"
 />

 <SelectField
 label="Project Timeline"
 name="timeline"
 required
 options={[
 "ASAP",
 "Within 1 Month",
 "1-3 Months",
 "Just Exploring",
 ]}
 />

 <SelectField
 label="How Did You Hear About Us?"
 name="referral_source"
 required
 options={[
 "Google",
 "Referral",
 "Past Client",
 "Contractor",
 "Social Media",
 "Other",
 ]}
 />

 <div>
 <label className="block text-[14px] font-semibold text-[var(--color-charcoal)] mb-2">
 Tell us about your floor
 </label>
 <textarea
 name="message"
 rows={5}
 placeholder="Surface type, condition, what you're hoping for. We read every message."
 className="w-full rounded-[6px] border border-[var(--color-stone)] bg-white px-4 py-3 text-[16px] text-[var(--color-charcoal)] placeholder:text-[var(--color-slate)]/60 focus:border-[var(--color-rust)] focus:outline-none focus:ring-2 focus:ring-[var(--color-rust)]/20"
 />
 </div>

 <p className="text-[13px] text-[var(--color-slate)]">
 We respect your information. Your details stay between us and
 the floor.
 </p>

 <button
 type="submit"
 className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-[6px] bg-[var(--color-rust)] text-[16px] font-semibold text-white transition-colors hover:bg-[var(--color-rust-dark)] sm:w-auto sm:px-8"
 >
 Request Free Assessment
 <svg
 className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
 viewBox="0 0 16 16"
 fill="none"
 aria-hidden
 >
 <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
 </svg>
 </button>
 </form>
 </Reveal>

 <Reveal delay={0.2} className="lg:col-span-5">
 <div className="sticky top-28 rounded-[6px] bg-[var(--color-cream)] p-8 md:p-10">
 <Eyebrow className="block mb-5">Or reach us directly</Eyebrow>

 <a
 href={site.phoneHref}
 className="group flex items-start gap-4 border-b border-[var(--color-stone)] pb-6"
 >
 <Phone className="mt-1 h-5 w-5 shrink-0 text-[var(--color-rust)]" />
 <div>
 <span className="block font-display text-[28px] font-bold leading-tight text-[var(--color-charcoal)] group-hover:text-[var(--color-rust)] md:text-[32px]">
 {site.phone}
 </span>
 <span className="text-[13px] text-[var(--color-slate)]">
 Tap to call
 </span>
 </div>
 </a>

 <a
 href={site.emailHref}
 className="group flex items-start gap-4 border-b border-[var(--color-stone)] py-6"
 >
 <Mail className="mt-1 h-5 w-5 shrink-0 text-[var(--color-rust)]" />
 <div>
 <span className="block text-[16px] font-semibold text-[var(--color-charcoal)] group-hover:text-[var(--color-rust)]">
 {site.email}
 </span>
 </div>
 </a>

 <div className="flex items-start gap-4 border-b border-[var(--color-stone)] py-6">
 <MapPin className="mt-1 h-5 w-5 shrink-0 text-[var(--color-rust)]" />
 <p className="text-[15px] text-[var(--color-charcoal)]">
 Miami, FL
 <br />
 <span className="text-[var(--color-slate)]">
 Serving Miami-Dade, Broward, Palm Beach &amp; Monroe
 </span>
 </p>
 </div>

 <div className="flex items-start gap-4 pt-6">
 <Clock className="mt-1 h-5 w-5 shrink-0 text-[var(--color-rust)]" />
 <ul className="space-y-1 text-[15px] text-[var(--color-charcoal)]">
 {site.hours.map((h) => (
 <li key={h.day}>
 <span className="font-semibold">{h.day}:</span>{" "}
 <span className="text-[var(--color-slate)]">{h.hours}</span>
 </li>
 ))}
 </ul>
 </div>
 </div>
 </Reveal>
 </div>
 </Container>
 </Section>

 <TrustBar tone="charcoal" />
 </>
 );
}

function Field({
 label,
 name,
 type,
 required,
 placeholder,
}: {
 label: string;
 name: string;
 type: string;
 required?: boolean;
 placeholder?: string;
}) {
 return (
 <div>
 <label className="block text-[14px] font-semibold text-[var(--color-charcoal)] mb-2">
 {label}
 {required && <span className="text-[var(--color-rust)]"> *</span>}
 </label>
 <input
 type={type}
 name={name}
 required={required}
 placeholder={placeholder}
 className="w-full rounded-[6px] border border-[var(--color-stone)] bg-white px-4 py-3 text-[16px] text-[var(--color-charcoal)] placeholder:text-[var(--color-slate)]/60 focus:border-[var(--color-rust)] focus:outline-none focus:ring-2 focus:ring-[var(--color-rust)]/20"
 />
 </div>
 );
}

function SelectField({
 label,
 name,
 required,
 options,
}: {
 label: string;
 name: string;
 required?: boolean;
 options: string[];
}) {
 return (
 <div>
 <label className="block text-[14px] font-semibold text-[var(--color-charcoal)] mb-2">
 {label}
 {required && <span className="text-[var(--color-rust)]"> *</span>}
 </label>
 <select
 name={name}
 required={required}
 defaultValue=""
 className="w-full rounded-[6px] border border-[var(--color-stone)] bg-white px-4 py-3 text-[16px] text-[var(--color-charcoal)] focus:border-[var(--color-rust)] focus:outline-none focus:ring-2 focus:ring-[var(--color-rust)]/20"
 >
 <option value="" disabled>
 Select…
 </option>
 {options.map((o) => (
 <option key={o} value={o}>
 {o}
 </option>
 ))}
 </select>
 </div>
 );
}
