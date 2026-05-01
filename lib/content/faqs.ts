export type FaqCategory =
  | "General"
  | "Concrete & Epoxy"
  | "Stone & Specialty Tile"
  | "Hardwood & Repair"
  | "Pricing & Process"
  | "Warranty";

export type Faq = {
  category: FaqCategory;
  q: string;
  a: string;
};

export const faqs: Faq[] = [
  // General
  {
    category: "General",
    q: "Can my floor be restored, or do I need to replace it?",
    a: "Most floors can be restored. We've brought back terrazzo that was hidden under tile for forty years, marble that looked dead, and concrete that had been poured wrong. Joe will walk your floor and tell you straight — what's possible, and what isn't.",
  },
  {
    category: "General",
    q: "Do you do new tile or marble installation?",
    a: "No. ReNewIt Floors is a restoration company. We restore, repair, and finish floors. We don't install new tile or marble.",
  },
  {
    category: "General",
    q: "How long have you been in business?",
    a: "Joe has been restoring floors in South Florida for over thirty years. The phone we answer today — (305) 271-7119 — has been our line for over twenty.",
  },
  {
    category: "General",
    q: "Are you family-owned?",
    a: "Yes. ReNewIt Floors is run by Joe and his family. Joe is on every job. His wife answers the phone when he can't. The work is family-rooted and family-supported.",
  },
  {
    category: "General",
    q: "Are you licensed and insured?",
    a: "Yes. We carry full insurance for residential and commercial work. License and insurance documentation is available on request before any project starts.",
  },

  // Concrete & Epoxy
  {
    category: "Concrete & Epoxy",
    q: "What is polished concrete and why does it last?",
    a: "Polished concrete is mechanically ground, densified, and polished concrete — not painted or coated. The shine comes from the concrete itself, after multiple progressive diamond grinds. Done right, it lasts 20+ years with minimal maintenance.",
  },
  {
    category: "Concrete & Epoxy",
    q: "Why do most garage epoxy jobs peel?",
    a: "When concrete dries, a soft cream layer forms at the top. That layer doesn't bond to anything. Most garage epoxy jobs are rolled directly onto that cream layer — and within a year, the epoxy lifts. We diamond-grind through the cream every time. That's why ours doesn't peel.",
  },
  {
    category: "Concrete & Epoxy",
    q: "What is the foundation-first method?",
    a: "It's our standard: every floor is properly prepped — diamond-ground, cleaned, and opened — before any finish goes on. Sealer, polish, epoxy, stain — none of it bonds reliably without the prep. Foundation first. Always.",
  },
  {
    category: "Concrete & Epoxy",
    q: "How many diamond grinds does a polished concrete floor need?",
    a: "We typically run six to seven progressive grinds — starting with coarse diamonds to remove the cream and level imperfections, then stepping through finer grits to bring the polish. Cheaper jobs often skip half of these passes.",
  },
  {
    category: "Concrete & Epoxy",
    q: "Can I have polished concrete in my house, not just my garage?",
    a: "Absolutely — and it's increasingly popular. Polished concrete works beautifully in living rooms, kitchens, foyers, and entire main floors. Comfortable, easy to clean, allergen-free, and modern.",
  },

  // Stone & Specialty Tile
  {
    category: "Stone & Specialty Tile",
    q: "Can terrazzo that's been covered for decades be brought back?",
    a: "Almost always yes. We've restored terrazzo that had three layers of tile and decades of glue on top. The original surface is usually intact underneath — it just needs the right grinding and polishing.",
  },
  {
    category: "Stone & Specialty Tile",
    q: "Can cracked Mexican tile be saved?",
    a: "Some can, some can't. Mexican (Saltillo) tile has a soft outer shell baked by the sun. Once that shell breaks through, we can't fully restore it — but we can clean and seal what's left. We'll be honest about the limits.",
  },
  {
    category: "Stone & Specialty Tile",
    q: "Do you restore Cuban tile?",
    a: "Yes. Cuban hydraulic tile (encaustic cement tile with painted patterns) is denser than Saltillo and typically holds up to restoration well. We deep-clean, repair where needed, and seal.",
  },
  {
    category: "Stone & Specialty Tile",
    q: "How is marble restored — is it just polishing?",
    a: "Marble restoration is mechanical. We diamond-hone through scratches, etching, and dullness to fresh marble below the damage, then progressively polish back to original gloss. Damage isn't permanent — it's depth.",
  },

  // Hardwood & Repair
  {
    category: "Hardwood & Repair",
    q: "Can hardwood floors be refinished, or do they need replacing?",
    a: "Most ¾-inch solid hardwood can be refinished 4-7 times over its life. Engineered wood with a thin veneer may only refinish 1-2 times. We'll inspect first and tell you what your floor will support.",
  },
  {
    category: "Hardwood & Repair",
    q: "Do you repair laminate or vinyl?",
    a: "Yes — targeted repair of damaged laminate planks, lifted sections, and damaged vinyl. When repair makes sense, it's faster and cheaper than replacement. When it doesn't, we'll tell you straight.",
  },

  // Pricing & Process
  {
    category: "Pricing & Process",
    q: "How much does floor restoration cost?",
    a: "Every floor is custom-quoted. Cost depends on surface type, prep needed, square footage, and finish. We don't give over-the-phone quotes because every floor is different — but the on-site assessment is free, and the quote is honest with no surprises.",
  },
  {
    category: "Pricing & Process",
    q: "What's included in a free assessment?",
    a: "Joe walks the floor with you, identifies what can and can't be done, explains the process, and gives you a transparent quote tied to the actual scope. There's no pressure to commit and no hidden fees later.",
  },
  {
    category: "Pricing & Process",
    q: "How long does a typical project take?",
    a: "Most residential restorations take 1-5 days depending on size and surface. Commercial and industrial projects scale up from there. We'll give you a realistic timeline before work starts.",
  },
  {
    category: "Pricing & Process",
    q: "Do you give written quotes?",
    a: "Yes. Every quote is documented and tied to a specific scope of work. No verbal estimates that change later.",
  },
  {
    category: "Pricing & Process",
    q: "Do I need to leave my home during the work?",
    a: "Usually not. We work in sections, contain dust, and try to minimize disruption. Some finishes (like wet polishing) require staying off the floor temporarily. We'll plan around your life.",
  },

  // Warranty
  {
    category: "Warranty",
    q: "Do you offer a warranty?",
    a: "Yes. Every job is backed by our 1-year warranty. If something isn't right, we come back. Joe stands behind the work personally.",
  },
  {
    category: "Warranty",
    q: "What does the warranty cover?",
    a: "Workmanship and materials we install. If a finish lifts, a sealer fails, or a repair doesn't hold within the warranty period, we fix it on us.",
  },
  {
    category: "Warranty",
    q: "What if I notice an issue months after the job?",
    a: "Call us. Even outside the formal warranty, we've come back years later to fix small issues — that's how Joe runs the business. Reputation lives in the follow-through.",
  },
];

export function getFaqsByCategory(category: FaqCategory): Faq[] {
  return faqs.filter((f) => f.category === category);
}

export function getHomepageFaqs(): Faq[] {
  return [
    faqs.find((f) => f.q === "Can my floor be restored, or do I need to replace it?")!,
    faqs.find((f) => f.q === "How much does floor restoration cost?")!,
    faqs.find((f) => f.q === "How long does a typical project take?")!,
    faqs.find((f) => f.q === "Do you offer a warranty?")!,
  ];
}
