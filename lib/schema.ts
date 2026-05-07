/**
 * JSON-LD schema generators for SEO.
 */

import { site } from "./site";
import { serviceAreas } from "./content/areas";
import type { Service, ServiceCategory } from "./content/services";
import type { Faq } from "./content/faqs";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo.png`,
    telephone: site.phone,
    email: site.email,
    foundingDate: String(site.founded),
    sameAs: [],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    description: site.description,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en-US",
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#localbusiness`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    image: `${site.url}/og-image.png`,
    priceRange: "$$",
    founder: {
      "@type": "Person",
      name: "Jose Fernandez",
      jobTitle: "Founder & Owner",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    areaServed: serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: `${area.county} County`,
    })),
  };
}

export function serviceSchema(service: Service, category: ServiceCategory) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.shortDescription,
    provider: { "@id": `${site.url}/#localbusiness` },
    areaServed: serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: `${area.county} County`,
    })),
    category: category.name,
    url: `${site.url}/services/${service.slug}`,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqPageSchema(faqs: Faq[] | { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

/**
 * Helper to render JSON-LD as a script tag in any page.
 */
export function jsonLdScript(data: object) {
  return {
    __html: JSON.stringify(data),
  };
}
