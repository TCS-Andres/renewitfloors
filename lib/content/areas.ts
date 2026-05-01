export type ServiceArea = {
  county: string;
  countySlug: string;
  intro: string;
  signatureWork: string;
  cities: string[];
  topServices: { name: string; slug: string }[];
};

export const serviceAreas: ServiceArea[] = [
  {
    county: "Miami-Dade",
    countySlug: "miami-dade",
    intro:
      "We've restored more floors in Miami-Dade than we can count. From original 1940s terrazzo in Coral Gables to polished concrete in modern Brickell condos and Mexican tile in older neighborhoods like Coconut Grove — this is home turf.",
    signatureWork: "Historic terrazzo, marble, and Mexican/Cuban tile restoration.",
    cities: [
      "Miami",
      "Coral Gables",
      "Brickell",
      "Doral",
      "Miami Beach",
      "Kendall",
      "Pinecrest",
      "Cutler Bay",
      "Homestead",
      "Palmetto Bay",
      "Miami Lakes",
      "Coconut Grove",
      "Downtown Miami",
    ],
    topServices: [
      { name: "Terrazzo Restoration", slug: "terrazzo-restoration" },
      { name: "Marble Restoration", slug: "marble-restoration" },
      { name: "Concrete Polishing", slug: "concrete-polishing" },
    ],
  },
  {
    county: "Broward",
    countySlug: "broward",
    intro:
      "Broward homes and businesses bring their own mix — from Fort Lauderdale waterfront properties to Weston and Pembroke Pines residential, plus growing commercial work in Davie and Hollywood. We make the drive.",
    signatureWork: "Marble lobbies, garage epoxy, residential hardwood refinishing.",
    cities: [
      "Fort Lauderdale",
      "Hollywood",
      "Weston",
      "Davie",
      "Pembroke Pines",
      "Southwest Ranches",
    ],
    topServices: [
      { name: "Marble Restoration", slug: "marble-restoration" },
      { name: "Garage Epoxy Flooring", slug: "garage-epoxy-flooring" },
      { name: "Hardwood Refinishing", slug: "hardwood-refinishing" },
    ],
  },
  {
    county: "Palm Beach",
    countySlug: "palm-beach",
    intro:
      "Palm Beach work is mostly high-end residential — Boca Raton condos, West Palm marble lobbies. We accept select projects in this region, with the same hands-on standard we apply everywhere.",
    signatureWork: "High-end marble and stone restoration.",
    cities: ["Boca Raton", "West Palm Beach"],
    topServices: [
      { name: "Marble Restoration", slug: "marble-restoration" },
      { name: "Stone Flooring", slug: "stone-flooring" },
      { name: "Concrete Polishing", slug: "concrete-polishing" },
    ],
  },
  {
    county: "Monroe",
    countySlug: "monroe",
    intro:
      "Yes, we travel to the Keys. The salt air and humidity put unique wear on Keys floors — we know how to handle it.",
    signatureWork: "Coastal-tough sealing, marble, and concrete restoration.",
    cities: ["Key Largo", "Key West"],
    topServices: [
      { name: "Concrete Sealing", slug: "concrete-sealing" },
      { name: "Marble Restoration", slug: "marble-restoration" },
      { name: "Concrete Polishing", slug: "concrete-polishing" },
    ],
  },
];
