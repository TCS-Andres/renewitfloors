import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { categories, services } from "@/lib/content/services";
import { projects } from "@/lib/content/projects";
import { cities } from "@/lib/content/areas";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    { url: "/", priority: 1.0 },
    { url: "/services", priority: 0.9 },
    { url: "/projects", priority: 0.8 },
    { url: "/about", priority: 0.8 },
    { url: "/service-areas", priority: 0.8 },
    { url: "/testimonials", priority: 0.7 },
    { url: "/faq", priority: 0.7 },
    { url: "/contact", priority: 0.9 },
  ];

  const categoryRoutes = categories.map((c) => ({
    url: `/services/${c.slug}`,
    priority: 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `/services/${s.slug}`,
    priority: 0.7,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `/projects/${p.slug}`,
    priority: 0.6,
  }));

  // City landing pages — high local-SEO value
  const cityRoutes = cities.map((c) => ({
    url: `/service-areas/${c.slug}`,
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...serviceRoutes,
    ...projectRoutes,
    ...cityRoutes,
  ].map((route) => ({
    url: `${site.url}${route.url}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route.priority,
  }));
}
