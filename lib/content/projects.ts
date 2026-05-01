/**
 * Featured project case studies (placeholder content — Joe to replace with real projects).
 */

export type Project = {
  slug: string;
  title: string;
  location: string;
  service: string;
  serviceSlug: string;
  category: "Residential" | "Commercial";
  excerpt: string;
  story: string;
  image: string; // Public path or external URL
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "1940s-terrazzo-coral-gables",
    title: "Original 1940s Terrazzo Brought Back to Life",
    location: "Coral Gables",
    service: "Terrazzo Restoration",
    serviceSlug: "terrazzo-restoration",
    category: "Residential",
    excerpt:
      "Original terrazzo hidden under tile and carpet for sixty years — restored to a glass-smooth, mirror-polished finish.",
    story:
      "When the homeowners pulled up their 1980s tile floor, they didn't know what they'd find underneath. We did. After three days of diamond grinding through decades of mastic and old finish, the original 1940s terrazzo emerged — marble chips set in cement, the way Miami homes used to be built. We color-matched a few small repairs, polished progressively to a 3000-grit gloss, sealed with a penetrating densifier. The floor looks better than it did when it was poured.",
    image: "/images/placeholder-project-terrazzo.jpg",
    featured: true,
  },
  {
    slug: "polished-concrete-pinecrest",
    title: "Polished Concrete with a Mirror Finish",
    location: "Pinecrest",
    service: "Concrete Polishing",
    serviceSlug: "concrete-polishing",
    category: "Residential",
    excerpt:
      "A new-construction Pinecrest home with raw slab — finished with seven progressive grinds to a satin-mirror polish.",
    story:
      "New construction concrete looks rough — grey, dusty, with surface variation that can throw off any finish. We assessed the slab, planned the grind sequence, and worked through seven progressive diamond passes. The homeowner wanted satin, not high-gloss — we stopped at 1500 grit, applied a lithium densifier, and sealed. The result is the kind of floor you can walk on in bare feet for the next twenty years.",
    image: "/images/placeholder-project-concrete.jpg",
    featured: true,
  },
  {
    slug: "warehouse-floor-doral",
    title: "Warehouse Floor, Restored & Sealed",
    location: "Doral",
    service: "Industrial Floor Cleaning",
    serviceSlug: "industrial-warehouse-floor-cleaning",
    category: "Commercial",
    excerpt:
      "12,000-square-foot warehouse — twenty years of forklift wear, oil staining, and surface failure. Phased restoration in three weekends.",
    story:
      "The facility manager called us because the floor was dusting badly — every forklift pass kicked up a cloud, and product was getting dusted. We scoped the job in three weekends so operations never paused. Each weekend we tackled 4,000 square feet: diamond grinding, joint repair, densification, and a polished finish. By the end of week three the warehouse had a clean, sealed, dust-free floor — and a maintenance plan to keep it that way.",
    image: "/images/placeholder-project-warehouse.jpg",
    featured: true,
  },
  {
    slug: "marble-lobby-brickell",
    title: "Marble Lobby Restoration",
    location: "Brickell",
    service: "Marble Restoration",
    serviceSlug: "marble-restoration",
    category: "Commercial",
    excerpt:
      "High-traffic Brickell condominium lobby with twenty years of foot traffic etching — restored to factory shine.",
    story:
      "The HOA had been told they needed to replace the marble. They didn't. We diamond-honed through the etching, removed scratches from years of grit underfoot, and brought the marble back to its original polished finish. Total time: four days, weekend work, no lobby closure. Cost: a fraction of replacement.",
    image: "/images/placeholder-project-marble.jpg",
    featured: false,
  },
  {
    slug: "mexican-tile-miami-lakes",
    title: "Mexican Saltillo Tile Renewed",
    location: "Miami Lakes",
    service: "Mexican Tile Restoration",
    serviceSlug: "mexican-tile-restoration",
    category: "Residential",
    excerpt:
      "1990s Saltillo tile floors — stripped, deep-cleaned, sealed. Honest assessment of what could and couldn't be restored.",
    story:
      "The homeowner was ready to rip everything out. We told them straight: most of the tile was salvageable, but a few sections had broken-through shells we couldn't fully restore. We replaced the worst tiles with sourced matches, deep-cleaned the rest, and sealed the floor with an enhancing penetrating sealer. They saved thousands and kept the character of the home.",
    image: "/images/placeholder-project-mexican-tile.jpg",
    featured: false,
  },
  {
    slug: "garage-epoxy-weston",
    title: "Garage Epoxy That Won't Peel",
    location: "Weston",
    service: "Garage Epoxy Flooring",
    serviceSlug: "garage-epoxy-flooring",
    category: "Residential",
    excerpt:
      "Three-car garage — previous epoxy job from another contractor failed in eight months. Diamond-ground to bare concrete and rebuilt right.",
    story:
      "The customer's first epoxy job lasted eight months before lifting near the bay door. We ground out the failed coating, took the slab back to bare concrete, repaired hot-tire scarring, and built a multi-layer epoxy system with decorative chip and a UV-stable topcoat. Three years later the floor still looks like the day we finished.",
    image: "/images/placeholder-project-garage.jpg",
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
