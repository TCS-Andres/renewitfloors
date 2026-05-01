/**
 * Global site configuration for ReNewIt Floors.
 * All globally-used constants (NAP, hours, social, copy snippets) live here.
 */

export const site = {
  name: "ReNewIt Floors",
  legalName: "ReNewIt Floors",
  tagline: "Restoring Floors. Rebuilding Peace of Mind.",
  domain: "renewitfloorsmiami.com",
  url: "https://renewitfloorsmiami.com",
  description:
    "Family-owned floor restoration in Miami with 30+ years restoring concrete, terrazzo, marble, and tile. Honest quotes. 1-year warranty. Free assessment.",
  phone: "(305) 271-7119",
  phoneHref: "tel:+13052717119",
  email: "jobs@renewitfloorsmiami.com",
  emailHref: "mailto:jobs@renewitfloorsmiami.com",

  // FormSubmit endpoint — first submission triggers activation email
  formSubmitEndpoint: "https://formsubmit.co/jobs@renewitfloorsmiami.com",

  address: {
    locality: "Miami",
    region: "FL",
    country: "US",
  },

  hours: [
    { day: "Mon–Fri", hours: "8:00 AM – 6:00 PM" },
    { day: "Saturday", hours: "8:00 AM – 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],

  geo: {
    latitude: 25.7617,
    longitude: -80.1918,
  },

  founded: 1995,
  yearsInBusiness: "30+",

  trustBar: [
    { stat: "30+", label: "Years Restoring South Florida Floors" },
    { stat: "Owner", label: "On Every Job, From Quote to Walk-Through" },
    { stat: "1-Year", label: "Warranty Backed by Our Name" },
    { stat: "Family", label: "Owned & Operated Since Day One" },
  ],

  social: {
    instagram: "#",
    facebook: "#",
    google: "#",
  },

  // Analytics IDs (set via env in production)
  analytics: {
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID || "",
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
    clarityId: process.env.NEXT_PUBLIC_CLARITY_ID || "",
  },

  primaryCta: "Request Your Free Floor Assessment",
  secondaryCta: "Give Us a Call",
} as const;

export type Site = typeof site;
