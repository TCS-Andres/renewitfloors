/**
 * UI string dictionaries for the EN/ES language toggle.
 *
 * Long-form body copy (service intros, city localStory paragraphs, FAQ answers,
 * project stories, etc.) is intentionally NOT translated here. That content
 * needs a native-Spanish translation pass and a content review with the client.
 * For now, when ES is selected we render the chrome/CTAs in Spanish and surface
 * a small banner directing Spanish-dominant visitors to the bilingual phone line.
 */

export type Locale = "en" | "es";

export const LOCALES: Locale[] = ["en", "es"];
export const DEFAULT_LOCALE: Locale = "en";

type Dictionary = Record<string, string>;

const en: Dictionary = {
 // ============== Navigation ==============
 "nav.services": "Services",
 "nav.projects": "Projects",
 "nav.about": "About",
 "nav.serviceAreas": "Service Areas",
 "nav.faq": "FAQ",
 "nav.contact": "Contact",
 "nav.testimonials": "Testimonials",
 "nav.blog": "Blog",
 "nav.allServices": "All Services",
 "nav.menu": "Menu",
 "nav.openMenu": "Open menu",
 "nav.closeMenu": "Close menu",

 // ============== Calls to Action ==============
 "cta.freeAssessment": "Free Assessment",
 "cta.fullFreeAssessment": "Request Your Free Floor Assessment",
 "cta.giveUsACall": "Give Us a Call",
 "cta.callPrefix": "Give Us a Call · ",
 "cta.learnMore": "Learn More",
 "cta.viewProject": "View Project",
 "cta.allProjects": "See All Projects",
 "cta.allFaqs": "See All FAQs",
 "cta.readReviews": "Read More Reviews",
 "cta.checkArea": "Check If We Serve Your Area",
 "cta.scheduleWalkThrough": "Schedule a Walk-Through",
 "cta.meetTheCrew": "Meet Jose & the Crew",
 "cta.method": "Learn About Our Method",

 // ============== Footer ==============
 "footer.servicesTitle": "Services",
 "footer.companyTitle": "Company",
 "footer.contactTitle": "Get in Touch",
 "footer.allServices": "All Services",
 "footer.privacy": "Privacy",
 "footer.terms": "Terms",
 "footer.sitemap": "Sitemap",
 "footer.copyright": "All rights reserved.",
 "footer.builtBy": "Built by",
 "footer.servingArea": "Miami, FL, Serving South Florida",
 "footer.serviceAreasTagline":
 "Family-owned floor restoration. Owner-operated. 30+ years across South Florida.",
 "footer.tapToCall": "Tap to call",

 // ============== Mobile sticky bar ==============
 "mobileBar.giveUsACall": "Give Us a Call",
 "mobileBar.freeAssessment": "Free Assessment",

 // ============== Pre-footer CTA (default heading/subhead) ==============
 "preFooter.heading": "Ready to bring your floors back?",
 "preFooter.subhead":
 "A free, honest assessment. No pressure. We'll walk your floor and tell you straight what's possible.",

 // ============== Trust bar (4 stat labels) ==============
 "trustBar.years": "Years Restoring South Florida Floors",
 "trustBar.owner": "On Every Job, From Quote to Walk-Through",
 "trustBar.warranty": "Warranty Backed by Our Name",
 "trustBar.family": "Owned & Operated Since Day One",
 "trustBar.statYears": "30+",
 "trustBar.statOwner": "Owner",
 "trustBar.statWarranty": "1-Year",
 "trustBar.statFamily": "Family",

 // ============== Spanish content awareness banner (only shown on ES) ==============
 "esBanner.message": "",
 "esBanner.cta": "",

 // ============== Common eyebrows ==============
 "eyebrow.ourMethod": "Our Method",
 "eyebrow.ourStory": "Our Story",
 "eyebrow.ourProcess": "Our Process",
 "eyebrow.whatWeRestore": "What We Restore",
 "eyebrow.whyItLasts": "Why It Lasts",
 "eyebrow.localKnowledge": "Local Knowledge",
 "eyebrow.nearbyAreas": "Nearby Service Areas",
 "eyebrow.questions": "Questions",
 "eyebrow.weGetIt": "We Get It",
 "eyebrow.howItWorks": "How It Works",
 "eyebrow.whatClientsSay": "What Clients Say",
 "eyebrow.whereWeWork": "Where We Work",

 // ============== Bilingual service tagline (always shown) ==============
 "bilingual.tagline": "We speak Spanish",
};

const es: Dictionary = {
 // ============== Navegación ==============
 "nav.services": "Servicios",
 "nav.projects": "Proyectos",
 "nav.about": "Nosotros",
 "nav.serviceAreas": "Áreas de Servicio",
 "nav.faq": "Preguntas",
 "nav.contact": "Contacto",
 "nav.testimonials": "Testimonios",
 "nav.blog": "Blog",
 "nav.allServices": "Todos los Servicios",
 "nav.menu": "Menú",
 "nav.openMenu": "Abrir menú",
 "nav.closeMenu": "Cerrar menú",

 // ============== Llamadas a la acción ==============
 "cta.freeAssessment": "Evaluación Gratis",
 "cta.fullFreeAssessment": "Solicite Su Evaluación Gratis",
 "cta.giveUsACall": "Llámenos",
 "cta.callPrefix": "Llámenos · ",
 "cta.learnMore": "Más Información",
 "cta.viewProject": "Ver Proyecto",
 "cta.allProjects": "Ver Todos los Proyectos",
 "cta.allFaqs": "Ver Todas las Preguntas",
 "cta.readReviews": "Más Reseñas",
 "cta.checkArea": "Verifique Si Servimos Su Área",
 "cta.scheduleWalkThrough": "Solicite Una Visita",
 "cta.meetTheCrew": "Conozca a Jose y al Equipo",
 "cta.method": "Conozca Nuestro Método",

 // ============== Pie de página ==============
 "footer.servicesTitle": "Servicios",
 "footer.companyTitle": "Compañía",
 "footer.contactTitle": "Contáctenos",
 "footer.allServices": "Todos los Servicios",
 "footer.privacy": "Privacidad",
 "footer.terms": "Términos",
 "footer.sitemap": "Mapa del Sitio",
 "footer.copyright": "Todos los derechos reservados.",
 "footer.builtBy": "Hecho por",
 "footer.servingArea": "Miami, FL, Sirviendo el Sur de la Florida",
 "footer.serviceAreasTagline":
 "Restauración de pisos de propiedad familiar. Operada por el dueño. Más de 30 años por todo el sur de la Florida.",
 "footer.tapToCall": "Toque para llamar",

 // ============== Barra fija móvil ==============
 "mobileBar.giveUsACall": "Llámenos",
 "mobileBar.freeAssessment": "Evaluación Gratis",

 // ============== Sección final (CTA) ==============
 "preFooter.heading": "¿Listo para devolverle vida a sus pisos?",
 "preFooter.subhead":
 "Una evaluación gratis y honesta. Sin presión. Caminamos su piso y le decimos directamente qué es posible.",

 // ============== Barra de confianza ==============
 "trustBar.years": "Años Restaurando Pisos del Sur de la Florida",
 "trustBar.owner": "En Cada Trabajo, del Presupuesto a la Entrega",
 "trustBar.warranty": "Garantía Respaldada por Nuestro Nombre",
 "trustBar.family": "Familiar Desde el Primer Día",
 "trustBar.statYears": "30+",
 "trustBar.statOwner": "Dueño",
 "trustBar.statWarranty": "1 Año",
 "trustBar.statFamily": "Familia",

 // ============== Aviso de contenido en español ==============
 "esBanner.message":
 "El contenido completo en español está en camino. Mientras tanto, llámenos para atención bilingüe.",
 "esBanner.cta": "Llámenos",

 // ============== Etiquetas de sección comunes ==============
 "eyebrow.ourMethod": "Nuestro Método",
 "eyebrow.ourStory": "Nuestra Historia",
 "eyebrow.ourProcess": "Nuestro Proceso",
 "eyebrow.whatWeRestore": "Lo Que Restauramos",
 "eyebrow.whyItLasts": "Por Qué Dura",
 "eyebrow.localKnowledge": "Conocimiento Local",
 "eyebrow.nearbyAreas": "Áreas Cercanas",
 "eyebrow.questions": "Preguntas",
 "eyebrow.weGetIt": "Lo Entendemos",
 "eyebrow.howItWorks": "Cómo Funciona",
 "eyebrow.whatClientsSay": "Lo Que Dicen Nuestros Clientes",
 "eyebrow.whereWeWork": "Dónde Trabajamos",

 // ============== Servicio bilingüe ==============
 "bilingual.tagline": "Hablamos español",
};

export const dictionaries: Record<Locale, Dictionary> = { en, es };

/** Translate a key. Falls back to English, then to the raw key. */
export function translate(key: string, locale: Locale): string {
 return dictionaries[locale]?.[key] ?? dictionaries.en[key] ?? key;
}
