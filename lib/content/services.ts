/**
 * Service catalog. 4 categories, 16 detail pages.
 * Each detail entry powers the dynamic /services/[slug] route AND
 * the category aggregations on /services/[category-slug] pages.
 */

export type ServiceCategorySlug =
  | "concrete-epoxy"
  | "stone-specialty"
  | "hardwood-repair"
  | "commercial-industrial";

export type ServiceCategory = {
  slug: ServiceCategorySlug;
  name: string;
  shortName: string;
  h1: string;
  subhead: string;
  description: string;
  methodAngle: string;
  metaTitle: string;
  metaDescription: string;
};

export type Service = {
  slug: string;
  category: ServiceCategorySlug;
  name: string;
  h1: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  intro: string; // Lead paragraph
  body: string; // Main service explanation
  scope: string[]; // Bulleted scope of work
  process: { title: string; description: string }[]; // 4-step process
  methodNote: string; // Why-it-lasts foundation-first block
  faqs: { q: string; a: string }[]; // 4–6 service-specific FAQs
  related: string[]; // Slugs of 3 related services
  image: string; // Hero image (relative to /public)
  imageAlt: string; // Alt text for SEO
};

export const categories: ServiceCategory[] = [
  {
    slug: "concrete-epoxy",
    name: "Concrete & Epoxy Solutions",
    shortName: "Concrete & Epoxy",
    h1: "Concrete and epoxy floors that don't peel, fade, or fail.",
    subhead:
      "From mirror-grade polished concrete to garage epoxy systems built on real prep work — this is our most-requested specialty.",
    description:
      "Polished concrete, epoxy systems, decorative finishes, and protective coatings — all grounded in our Foundation-First method.",
    methodAngle:
      "Why most epoxy peels — and why ours doesn't. The cream layer at the surface of poured concrete doesn't bond. We diamond-grind it away before any finish touches the floor.",
    metaTitle: "Concrete & Epoxy Floor Solutions in Miami | ReNewIt Floors",
    metaDescription:
      "Polished concrete, garage epoxy, decorative concrete, and sealing in Miami. Diamond-ground prep. 30+ years. 1-year warranty. Free assessment.",
  },
  {
    slug: "stone-specialty",
    name: "Natural Stone & Specialty Flooring",
    shortName: "Stone & Specialty",
    h1: "Bringing original Miami stone and tile back to life.",
    subhead:
      "Terrazzo, marble, Mexican and Cuban tile, natural stone — surfaces with history, restored with care.",
    description:
      "Restoring the surfaces that made South Florida homes what they are — historic terrazzo, marble lobbies, Mexican and Cuban tile.",
    methodAngle:
      "Honest about what's possible. Some surfaces — like a baked Mexican tile shell — won't take a full restoration. We'll tell you the truth before you spend a dollar.",
    metaTitle: "Natural Stone & Specialty Floor Restoration in Miami | ReNewIt Floors",
    metaDescription:
      "Terrazzo, marble, Mexican tile, and natural stone restoration in Miami. Family-owned. Honest assessments. 30+ years. 1-year warranty.",
  },
  {
    slug: "hardwood-repair",
    name: "Hardwood, Tile & Repair",
    shortName: "Hardwood & Repair",
    h1: "Wood floors brought back to their original warmth.",
    subhead:
      "Refinishing, repair, and targeted fixes for hardwood, tile, laminate, and vinyl.",
    description:
      "Restoration and targeted repair for the floors people walk on every day — wood, laminate, vinyl, and tile.",
    methodAngle:
      "Honest assessment first. Sometimes refinishing makes sense. Sometimes a targeted repair is all you need. We'll tell you which.",
    metaTitle: "Hardwood Refinishing & Floor Repair in Miami | ReNewIt Floors",
    metaDescription:
      "Hardwood floor refinishing, tile repair, laminate and vinyl repair in Miami. 30+ years. 1-year warranty. Free assessment.",
  },
  {
    slug: "commercial-industrial",
    name: "Commercial & Industrial Floor Care",
    shortName: "Commercial & Industrial",
    h1: "Industrial floors restored at scale — without cutting corners.",
    subhead:
      "Large-scale polished concrete, epoxy systems, and floor maintenance for South Florida facilities.",
    description:
      "Warehouse, office, and commercial floor restoration for property managers and facility operators.",
    methodAngle:
      "Scale doesn't mean shortcuts. We bring the same Foundation-First method to a 15,000-sq-ft warehouse that we bring to a Coral Gables foyer.",
    metaTitle: "Commercial & Industrial Floor Care in Miami | ReNewIt Floors",
    metaDescription:
      "Commercial and industrial floor restoration in Miami — warehouses, offices, retail. Polished concrete, epoxy systems. 30+ years. Free site visit.",
  },
];

export const services: Service[] = [
  // ===== CONCRETE & EPOXY (9) =====
  {
    slug: "concrete-polishing",
    category: "concrete-epoxy",
    name: "Concrete Polishing",
    h1: "Polished concrete with a mirror finish — built on six diamond grinds.",
    shortDescription:
      "Six to seven diamond-grind passes. Mirror-grade finishes. Built to last.",
    metaTitle: "Concrete Polishing in Miami, FL | ReNewIt Floors",
    metaDescription:
      "Diamond-ground polished concrete in Miami. Six to seven grind passes for a mirror finish. 30+ years. 1-year warranty. Free assessment.",
    intro:
      "Polished concrete is our flagship specialty. Done right, it lasts decades — a sealed, smooth, mirror-grade surface that holds up to traffic, sunlight, and South Florida humidity. Done wrong, it dulls in months.",
    body: "The difference is in the prep. Most contractors will polish a concrete floor with one or two grind passes. We run six to seven. Each pass uses progressively finer diamond pads — opening the surface, removing the cream layer, leveling imperfections, and finally bringing the slab to a refractive shine. Border details are hand-finished. Sealer goes on a surface that's ready for it.",
    scope: [
      "Floor assessment and grind plan",
      "Six to seven diamond-grind passes (progressive grit)",
      "Crack and joint repair where needed",
      "Densifier application for hardness",
      "Final polish to specified gloss level",
      "Penetrating sealer for stain protection",
      "Hand-finished border detail",
    ],
    process: [
      { title: "Assess", description: "We walk your slab, identify any prep needs, and confirm the right finish for your space." },
      { title: "Diamond Grind", description: "Six to seven progressive grinds remove the cream layer and open the surface." },
      { title: "Polish", description: "Progressive polishing pads bring the floor to its target gloss level." },
      { title: "Seal", description: "Penetrating sealer protects against stains, water, and wear." },
    ],
    methodNote:
      "When concrete dries, a soft cream layer forms at the top. Paint, sealer, and stain don't bond to it — they bond to what's underneath. That's why most polished concrete floors look great for six months and then dull. We grind through the cream every time.",
    faqs: [
      {
        q: "Can polished concrete be installed in a residential home, not just a garage?",
        a: "Yes — and it's one of our most-requested residential services. Polished concrete works in living rooms, kitchens, basements, and entire main floors. The finish can be matte, satin, or high-gloss depending on your preference.",
      },
      {
        q: "Is polished concrete slippery?",
        a: "Not when sealed properly. Our penetrating sealers don't add a slick film on top — they soak in and harden the surface. Polished concrete is no more slippery than any other hard floor.",
      },
      {
        q: "How long does a polished concrete floor last?",
        a: "Properly polished and sealed concrete can last 20+ years with minimal maintenance. We back our work with a 1-year warranty, but our floors regularly outlast that by decades.",
      },
      {
        q: "What's the difference between polished concrete and stained concrete?",
        a: "Polished concrete refers to the mechanical process of grinding and polishing — the floor's natural color shows through. Stained concrete uses acid or water-based stains to add color before polishing. We do both.",
      },
    ],
    related: ["concrete-restoration", "concrete-sealing", "patina-stains-decorative-finishes"],
    image: "/images/polished-concrete-floor-miami.jpg",
    imageAlt: "Mirror-finish polished concrete floor in a Miami home",
  },
  {
    slug: "concrete-restoration",
    category: "concrete-epoxy",
    name: "Concrete Restoration",
    h1: "Concrete floors brought back to life — not torn out.",
    shortDescription:
      "Restoring damaged, stained, or unfinished concrete floors instead of replacing them.",
    metaTitle: "Concrete Floor Restoration in Miami | ReNewIt Floors",
    metaDescription:
      "Restoring old, damaged, or unfinished concrete floors in Miami. Crack repair, surface prep, polish, seal. 30+ years. Free assessment.",
    intro:
      "Most homeowners don't realize old concrete can be restored. Stained, cracked, or unfinished slabs that look beyond saving — they almost always have a beautiful floor underneath. We've restored concrete that's been covered for forty years.",
    body: "Concrete restoration starts with an honest assessment. We grind down to the original surface, repair structural cracks, level uneven areas, and rebuild the floor from the slab up. Whether you want a polished finish, a stain, or a sealed natural look, restoration is faster, cheaper, and more sustainable than replacement.",
    scope: [
      "Honest assessment of slab condition",
      "Surface preparation and diamond grinding",
      "Crack repair and joint filling",
      "Stain and contamination removal",
      "Optional finish: polish, stain, or sealer",
      "Hand-detailed borders and transitions",
    ],
    process: [
      { title: "Diagnose", description: "We assess slab condition and tell you straight what's possible." },
      { title: "Prep", description: "Diamond-grind, repair cracks, remove stains and contamination." },
      { title: "Restore", description: "Apply the finish you want — polish, stain, or sealer." },
      { title: "Protect", description: "Final sealing ensures the restoration lasts." },
    ],
    methodNote:
      "Restoration only works when the prep is right. We don't paint over problems. We grind through them.",
    faqs: [
      {
        q: "Is restoration cheaper than replacement?",
        a: "Almost always — typically 50-70% less than tearing out and pouring a new slab. And it's faster.",
      },
      {
        q: "Can you restore concrete that's been painted multiple times?",
        a: "Yes. Diamond grinding removes any number of paint layers. We've restored slabs that had four or five coats on top.",
      },
      {
        q: "What if my concrete has deep cracks?",
        a: "Most cracks can be repaired with structural epoxy and ground flush. Some crack patterns indicate deeper structural issues — we'll tell you straight if that's the case.",
      },
    ],
    related: ["concrete-polishing", "concrete-sealing", "cementitious-coatings"],
    image: "/images/concrete-polishing-process-miami.jpg",
    imageAlt: "Concrete floor restoration in progress in Miami",
  },
  {
    slug: "concrete-sealing",
    category: "concrete-epoxy",
    name: "Concrete Sealing",
    h1: "Sealing that lasts — because the prep was done right.",
    shortDescription:
      "Professional concrete sealing that protects against stains, water, and wear.",
    metaTitle: "Concrete Sealing in Miami, FL | ReNewIt Floors",
    metaDescription:
      "Professional concrete sealing in Miami — protects against stains, water, and wear. Done right after proper prep. 1-year warranty. Free quote.",
    intro:
      "Sealer doesn't fail because the product is bad. It fails because the surface wasn't ready for it.",
    body: "We use penetrating sealers that soak into properly prepped concrete and chemically harden the surface from within. No film on top to peel. No glossy plastic look. Just protected concrete that resists stains, water, and wear for years.",
    scope: [
      "Surface assessment",
      "Diamond grinding to open the surface",
      "Cleaning and contamination removal",
      "Penetrating densifier application",
      "Final sealer with optional gloss enhancer",
    ],
    process: [
      { title: "Assess", description: "Evaluate slab and recommend the right sealer for your use." },
      { title: "Prep", description: "Grind and clean — sealer needs an open, contamination-free surface." },
      { title: "Seal", description: "Apply penetrating sealer in proper conditions for full absorption." },
      { title: "Cure", description: "Let the sealer cure properly before traffic returns." },
    ],
    methodNote:
      "Most sealing jobs fail in the first year because the contractor sprayed sealer over an unprepped surface. That sealer sits on top, can't bond, and peels off with foot traffic. Foundation first.",
    faqs: [
      {
        q: "How long does concrete sealer last?",
        a: "Penetrating sealers properly applied last 5-10 years on residential floors with normal traffic.",
      },
      {
        q: "Will sealer change the color of my concrete?",
        a: "Penetrating sealers are typically clear and don't change appearance. Enhancement sealers can deepen the natural color slightly. We'll show you a sample before applying.",
      },
      {
        q: "Can you seal stained concrete?",
        a: "Yes — sealer is the final protective layer over a stained or polished floor.",
      },
    ],
    related: ["concrete-polishing", "concrete-restoration", "waterglass-coating"],
    image: "/images/aged-concrete-floor-texture.jpg",
    imageAlt: "Sealed concrete floor with protective coating in Miami",
  },
  {
    slug: "cement-overlays",
    category: "concrete-epoxy",
    name: "Cement Overlays",
    h1: "Modern, seamless cement overlays — laid over a foundation that holds.",
    shortDescription:
      "Cementitious overlays for a modern, seamless surface over existing concrete.",
    metaTitle: "Cement Overlay Floors in Miami | ReNewIt Floors",
    metaDescription:
      "Cementitious overlays for Miami floors — modern, seamless surfaces over existing concrete. Diamond-ground prep. 1-year warranty.",
    intro:
      "Cement overlays let you transform an existing concrete floor without demolition. Done right, they last decades. Done wrong, they crack and lift.",
    body: "Overlays go on top of properly prepped concrete to give you a smooth, modern, troweled surface. We use polymer-modified cement systems that bond mechanically and chemically to the substrate. The look is contemporary, the surface is durable, and the prep is non-negotiable.",
    scope: [
      "Substrate inspection and prep recommendation",
      "Diamond grinding for mechanical bond",
      "Crack repair and patching",
      "Bonding primer application",
      "Cementitious overlay (single or multi-pour)",
      "Sealing and protective topcoat",
    ],
    process: [
      { title: "Prep", description: "Grind, clean, and prime the substrate for proper bond." },
      { title: "Apply", description: "Trowel the overlay in carefully timed pours." },
      { title: "Finish", description: "Refine the surface, add color or texture if specified." },
      { title: "Seal", description: "Protective topcoat for stain and wear resistance." },
    ],
    methodNote:
      "An overlay is only as good as the bond underneath it. We don't skip the grind.",
    faqs: [
      {
        q: "Can an overlay be installed over tile or wood?",
        a: "Sometimes — it depends on the substrate. We'll inspect first and tell you straight whether it'll hold.",
      },
      {
        q: "How thick is a cement overlay?",
        a: "Anywhere from 1/8\" for a thin decorative overlay to 3/4\" or more for a structural overlay. We choose the system based on your floor's needs.",
      },
    ],
    related: ["cementitious-coatings", "patina-stains-decorative-finishes", "concrete-epoxy-systems"],
    image: "/images/cement-overlay-floor-miami.jpg",
    imageAlt: "Modern cement overlay floor finish in a Miami corridor",
  },
  {
    slug: "cementitious-coatings",
    category: "concrete-epoxy",
    name: "Cementitious Coatings",
    h1: "Decorative cementitious finishes built on real prep.",
    shortDescription:
      "Decorative cementitious coatings with custom finishes for residential and commercial spaces.",
    metaTitle: "Cementitious Floor Coatings in Miami | ReNewIt Floors",
    metaDescription:
      "Decorative cementitious coatings for residential and commercial floors in Miami. Custom finishes. 30+ years. 1-year warranty.",
    intro:
      "Cementitious coatings are the artistic side of concrete — thinner than overlays, more decorative, with a range of looks from rustic to refined.",
    body: "We blend pigments, aggregates, and finishing techniques to create coatings that look like polished stone, weathered concrete, or modern microcement. Each project is custom — we'll show you sample boards and walk you through the options before any product touches your floor.",
    scope: [
      "Sample board consultation",
      "Substrate prep and diamond grinding",
      "Bonding primer",
      "Multi-layer cementitious application",
      "Custom color and texture work",
      "Sealing and protective finish",
    ],
    process: [
      { title: "Design", description: "Sample boards in your space, your light." },
      { title: "Prep", description: "Grind, clean, prime — every time." },
      { title: "Apply", description: "Multi-layer application with hand-finished texture." },
      { title: "Seal", description: "Protective sealer locks in the finish." },
    ],
    methodNote:
      "The thinner the coating, the more critical the prep. Decorative work has nowhere to hide a bad bond.",
    faqs: [
      {
        q: "How is this different from a cement overlay?",
        a: "Cementitious coatings are thinner (typically 1/16\" to 1/8\") and focused on appearance. Overlays are thicker and more structural.",
      },
      {
        q: "Can I see samples before committing?",
        a: "Yes — we always create sample boards so you can see the finish in your actual space.",
      },
    ],
    related: ["cement-overlays", "patina-stains-decorative-finishes", "concrete-polishing"],
    image: "/images/floor-restoration-detail-miami.jpg",
    imageAlt: "Custom cementitious decorative floor coating in Miami",
  },
  {
    slug: "concrete-epoxy-systems",
    category: "concrete-epoxy",
    name: "Concrete Epoxy Systems",
    h1: "Epoxy systems that don't peel — because we prep first.",
    shortDescription:
      "Multi-layer epoxy systems for kitchens, basements, retail spaces, and commercial floors.",
    metaTitle: "Concrete Epoxy Flooring in Miami | ReNewIt Floors",
    metaDescription:
      "Professional epoxy floor systems for Miami homes and businesses — diamond-ground prep, multi-layer epoxy, topcoat. 1-year warranty.",
    intro:
      "Epoxy gets a bad reputation because most epoxy jobs fail. The product isn't the problem — the prep is.",
    body: "We install professional epoxy systems for residential basements, commercial kitchens, retail spaces, and anywhere else a tough, easy-to-clean, beautiful floor is needed. The system starts with diamond grinding to remove the concrete cream layer, then primer, then multi-layer epoxy, then a UV-stable topcoat. Done this way, epoxy lasts 10+ years.",
    scope: [
      "Substrate diamond grinding",
      "Crack and joint repair",
      "Epoxy primer coat",
      "Base color and decorative chips (optional)",
      "Multi-layer epoxy build",
      "UV-stable polyurethane topcoat",
    ],
    process: [
      { title: "Grind", description: "Diamond-grind to bare concrete — no shortcuts." },
      { title: "Prime", description: "Penetrating primer for chemical bond." },
      { title: "Build", description: "Multi-layer epoxy with optional decorative work." },
      { title: "Topcoat", description: "UV-stable topcoat for long-term durability." },
    ],
    methodNote:
      "The cream layer at the top of poured concrete is too soft to hold epoxy. Roll epoxy on top of it and you've got a six-month floor. Grind through it and you've got a ten-year floor.",
    faqs: [
      {
        q: "Why do most epoxy jobs fail?",
        a: "Inadequate prep. Most contractors etch the concrete with acid, which doesn't reliably remove the cream layer. Diamond grinding is the only consistent way to ensure a good bond.",
      },
      {
        q: "Can I have epoxy in a kitchen or basement?",
        a: "Absolutely — epoxy is excellent in any room where you want a tough, seamless, easy-to-clean floor. We've installed it in Miami homes from kitchen to basement.",
      },
    ],
    related: ["garage-epoxy-flooring", "concrete-polishing", "cementitious-coatings"],
    image: "/images/concrete-epoxy-floor-system-miami.jpg",
    imageAlt: "Reflective concrete epoxy floor system in a Miami commercial space",
  },
  {
    slug: "garage-epoxy-flooring",
    category: "concrete-epoxy",
    name: "Garage Epoxy Flooring",
    h1: "Garage epoxy that won't peel in six months.",
    shortDescription:
      "Garage epoxy systems with proper diamond-ground prep and decorative chip options.",
    metaTitle: "Garage Epoxy Flooring in Miami | ReNewIt Floors",
    metaDescription:
      "Garage epoxy flooring in Miami done right — diamond-ground prep, multi-layer epoxy, decorative chip options. 1-year warranty. Free assessment.",
    intro:
      "If you've had garage epoxy fail before, you're not alone. Most garage epoxy jobs in Miami peel within a year — because the contractor skipped the grinding and went straight to product.",
    body: "Garages are the toughest test for epoxy. Hot tires, oil drips, road salt, and years of unsealed concrete soaked with contaminants all fight against the bond. We diamond-grind down to clean concrete, repair every crack, prime properly, then build a multi-layer epoxy system with decorative color flake and a UV-stable topcoat. The result is a garage floor that handles real life and looks great doing it.",
    scope: [
      "Existing coating removal (if needed)",
      "Diamond grinding to bare concrete",
      "Oil-spot remediation and contamination removal",
      "Crack and joint repair",
      "Epoxy primer",
      "Base epoxy coat with decorative color flake",
      "UV-stable polyurethane topcoat",
    ],
    process: [
      { title: "Strip & Grind", description: "Remove old coatings, diamond-grind to bare concrete." },
      { title: "Repair", description: "Fix cracks, fill joints, address oil contamination." },
      { title: "Coat", description: "Primer, base epoxy, decorative chip broadcast." },
      { title: "Topcoat", description: "UV-stable topcoat seals everything in." },
    ],
    methodNote:
      "Hot tires in a Miami garage can hit 180°F. Cheap epoxy bonded to a cream layer can't take it — it lifts off the surface. Diamond-ground epoxy stays put.",
    faqs: [
      {
        q: "How long does the installation take?",
        a: "Most residential garages are 2-3 days from start to drive-on ready. We'll give you a clear timeline before we start.",
      },
      {
        q: "Will it hold up to hot tires?",
        a: "Yes — when properly prepped and topcoated. The topcoat is the key to hot-tire resistance.",
      },
      {
        q: "What color options do I have?",
        a: "Hundreds. Solid colors, color-flake blends, metallic effects. We'll show you samples in your garage's natural light.",
      },
    ],
    related: ["concrete-epoxy-systems", "concrete-polishing", "concrete-sealing"],
    image: "/images/garage-epoxy-flooring-miami.jpg",
    imageAlt: "Garage epoxy floor with decorative chip flake in Miami",
  },
  {
    slug: "patina-stains-decorative-finishes",
    category: "concrete-epoxy",
    name: "Patina Stains & Decorative Finishes",
    h1: "Patina stains and decorative finishes — concrete with character.",
    shortDescription:
      "Custom patina stains, acid stains, and decorative finishes for concrete floors.",
    metaTitle: "Decorative Concrete Stains & Patina Finishes in Miami | ReNewIt Floors",
    metaDescription:
      "Custom patina stains and decorative concrete finishes in Miami — bring color, depth, and character to concrete floors. 30+ years.",
    intro:
      "Patina stains turn concrete into something with depth — color that lives in the surface, not on top of it.",
    body: "Acid and water-based stains react with concrete to produce variegated, marbled, layered color effects no other floor can match. We custom-blend stains and apply them with the techniques that bring out the floor's best. Every stained floor is one of a kind.",
    scope: [
      "Sample testing in your space",
      "Surface prep and grinding",
      "Multiple stain layers and reactions",
      "Hand-applied highlights and accents",
      "Neutralization and cleaning",
      "Sealing and protective topcoat",
    ],
    process: [
      { title: "Sample", description: "Test stain reactions on your actual floor before committing." },
      { title: "Prep", description: "Open the surface so the stain reacts properly." },
      { title: "Stain", description: "Layer color with hand-applied technique." },
      { title: "Seal", description: "Lock in the patina with a protective sealer." },
    ],
    methodNote:
      "Stained concrete is permanent. We always sample first — on your actual floor — so you know exactly what you're getting.",
    faqs: [
      {
        q: "Can I get a specific color?",
        a: "Acid stains react with the concrete chemistry, so colors vary by floor. Water-based stains are more predictable. We'll discuss what's achievable based on your slab.",
      },
      {
        q: "Will the stain look the same everywhere?",
        a: "No — and that's the appeal. Stained concrete varies in tone and depth across the surface, which gives it the character that flat paint can't.",
      },
    ],
    related: ["concrete-polishing", "cement-overlays", "cementitious-coatings"],
    image: "/images/patina-stain-decorative-concrete-miami.jpg",
    imageAlt: "Warm amber patina-stained decorative concrete in Miami",
  },
  {
    slug: "waterglass-coating",
    category: "concrete-epoxy",
    name: "Waterglass Coating",
    h1: "Waterglass coating — densifier, sealer, and stain protection in one.",
    shortDescription:
      "Sodium silicate (waterglass) densifier that hardens, seals, and protects polished concrete.",
    metaTitle: "Waterglass Concrete Coating in Miami | ReNewIt Floors",
    metaDescription:
      "Waterglass (sodium silicate) concrete densifier and protective coating in Miami. Hardens, seals, and protects polished concrete. 1-year warranty.",
    intro:
      "Waterglass is one of the oldest and best concrete densifiers — sodium silicate that reacts with the concrete itself to harden and seal from within.",
    body: "When applied to properly prepared concrete, waterglass penetrates deep into the surface and chemically reacts to form a hard, glassy, integral seal. It increases abrasion resistance, locks out moisture, and dramatically extends the life of polished concrete floors. We apply it as part of our polishing process and as a standalone restoration treatment.",
    scope: [
      "Surface assessment and prep",
      "Substrate cleaning",
      "Waterglass application (multiple coats as needed)",
      "Even penetration verification",
      "Final polishing or burnishing",
    ],
    process: [
      { title: "Prep", description: "Surface needs to be open and clean for the chemistry to work." },
      { title: "Apply", description: "Waterglass penetrates and reacts with the concrete." },
      { title: "Finish", description: "Polish or burnish to bring out the final density and shine." },
      { title: "Protect", description: "Optional topcoat for high-traffic areas." },
    ],
    methodNote:
      "Waterglass doesn't sit on the surface — it becomes part of it. That's why it lasts.",
    faqs: [
      {
        q: "Is waterglass better than a topical sealer?",
        a: "It's different. Waterglass densifies and hardens the concrete itself. A topical sealer adds a protective layer on top. We often use both — waterglass first, then a sealer.",
      },
      {
        q: "How long does waterglass last?",
        a: "Permanent — once it reacts with the concrete, it's part of the floor. Topcoats may need refreshing over time, but the densification is forever.",
      },
    ],
    related: ["concrete-polishing", "concrete-sealing", "concrete-epoxy-systems"],
    image: "/images/waterglass-concrete-coating-miami.jpg",
    imageAlt: "Waterglass densifier coating on concrete floor in Miami",
  },

  // ===== STONE & SPECIALTY (4) =====
  {
    slug: "terrazzo-restoration",
    category: "stone-specialty",
    name: "Terrazzo Restoration",
    h1: "Original Miami terrazzo, restored to its full life.",
    shortDescription:
      "Restoring historic terrazzo floors hidden under tile or carpet for decades.",
    metaTitle: "Terrazzo Restoration in Miami | ReNewIt Floors",
    metaDescription:
      "Restoring original Miami terrazzo floors — Coral Gables, Pinecrest, and across South Florida. Grinding, polishing, color matching. 30+ years.",
    intro:
      "Original terrazzo in Coral Gables, Pinecrest, and Coconut Grove homes is some of the most beautiful flooring in South Florida. Most of it has been hidden under tile or carpet for decades.",
    body: "When we pull up old flooring and find original terrazzo underneath, the work begins. Diamond-ground through layers of glue and old finish, polished with progressively finer pads, color-matched where chips need filling, and sealed for protection — terrazzo restoration is the most rewarding work we do. Every floor is unique. Every restoration brings something back.",
    scope: [
      "Old flooring removal (if needed)",
      "Diamond grinding to remove glue and old finish",
      "Crack and chip repair with color-matched fill",
      "Progressive polishing to specified gloss",
      "Penetrating sealer",
      "Optional decorative borders or inlays",
    ],
    process: [
      { title: "Uncover", description: "Remove old flooring to expose the original terrazzo." },
      { title: "Grind", description: "Multi-pass diamond grinding levels and opens the surface." },
      { title: "Repair", description: "Color-match chips, fill cracks, restore decorative work." },
      { title: "Polish & Seal", description: "Polish to your chosen gloss, seal for protection." },
    ],
    methodNote:
      "Some terrazzo floors are so far gone the substrate won't hold up. We'll tell you straight after a free assessment whether your floor can be saved.",
    faqs: [
      {
        q: "My terrazzo has been under tile for forty years — can it still be restored?",
        a: "Almost always yes. We've restored terrazzo that had three layers of tile and decades of glue on top. The original surface is usually intact underneath.",
      },
      {
        q: "Can chips and cracks be repaired?",
        a: "Yes. We custom-blend marble chips and resin to color-match the original terrazzo, then grind everything flush. Done right, the repair is invisible.",
      },
      {
        q: "How does terrazzo restoration compare to replacing the floor?",
        a: "Restoration preserves the original character of the home — irreplaceable for historic Miami architecture. It's also typically faster and less expensive than removal and replacement.",
      },
    ],
    related: ["marble-restoration", "stone-flooring", "concrete-polishing"],
    image: "/images/terrazzo-floor-restoration-miami-fl.jpg",
    imageAlt: "Polished black-and-white terrazzo floor restored in Miami",
  },
  {
    slug: "marble-restoration",
    category: "stone-specialty",
    name: "Marble Restoration",
    h1: "Marble restored — polished, sealed, brought back to its original life.",
    shortDescription:
      "Polishing, scratch repair, and sealing for marble floors and surfaces.",
    metaTitle: "Marble Restoration & Polishing in Miami | ReNewIt Floors",
    metaDescription:
      "Marble polishing, scratch repair, and sealing in Miami. Bringing dull, etched marble back to life. 30+ years. 1-year warranty.",
    intro:
      "Marble is alive — and over time, it shows the wear of life. Etching from acidic spills, scratches from foot traffic, dullness from improper cleaning. None of it is permanent.",
    body: "We restore marble floors and surfaces by mechanically diamond-honing through the damage, then polishing to the original factory shine. Etch repair, scratch removal, color enhancement, and sealing — all done in place, no need to remove the marble.",
    scope: [
      "Surface condition assessment",
      "Diamond honing (multiple grits)",
      "Etch and scratch removal",
      "Polishing to original gloss",
      "Crystallization or sealing",
      "Color enhancement (optional)",
    ],
    process: [
      { title: "Assess", description: "Identify damage type — etching, scratching, dulling — and treatment plan." },
      { title: "Hone", description: "Diamond-hone through the damage to fresh marble." },
      { title: "Polish", description: "Progressive polishing brings the gloss back." },
      { title: "Protect", description: "Sealer or crystallizer locks in the finish." },
    ],
    methodNote:
      "Marble doesn't need replacing when it gets damaged. It needs honing — and a craftsman who knows how to read the stone.",
    faqs: [
      {
        q: "Can scratches really be removed from marble?",
        a: "Yes. Marble damage isn't actually damage to the surface — it's depth. We grind down to fresh marble below the scratch, then re-polish. The scratch disappears.",
      },
      {
        q: "What causes marble to dull?",
        a: "Etching from acidic substances (citrus, wine, cleaners), scratching from grit underfoot, and abrasive cleaners that strip the polish. All restorable.",
      },
      {
        q: "Do you also restore marble countertops and showers?",
        a: "Yes — same process, smaller scale. We restore countertops, shower walls, vanities, and any other marble surface in your home.",
      },
    ],
    related: ["terrazzo-restoration", "stone-flooring", "mexican-tile-restoration"],
    image: "/images/marble-floor-restoration-miami.jpg",
    imageAlt: "Restored polished marble floor in a Miami residence",
  },
  {
    slug: "mexican-tile-restoration",
    category: "stone-specialty",
    name: "Mexican Tile Restoration",
    h1: "Mexican and Cuban tile — cleaned, sealed, restored with honesty about limits.",
    shortDescription:
      "Cleaning, sealing, and restoration of Mexican Saltillo and Cuban tile floors.",
    metaTitle: "Mexican Tile (Saltillo) Restoration in Miami | ReNewIt Floors",
    metaDescription:
      "Mexican Saltillo and Cuban tile cleaning, sealing, and restoration in Miami. Honest about what can and can't be restored. 30+ years.",
    intro:
      "Mexican Saltillo and Cuban tile are South Florida classics. They're also some of the most fragile flooring we work with — and we'll tell you straight what's possible before you spend a dollar.",
    body: "Mexican tile is sun-baked clay with a soft outer shell. That shell isn't very hard. When it cracks or wears through, you can't fully restore it — but you can clean it, deep-seal it, and protect what's left. Cuban tile is similar but typically holds up better. Either way, we approach this work with honesty: tell you what we can fix, what we can't, and what your floor will look like when we're done.",
    scope: [
      "Honest condition assessment",
      "Deep cleaning of grout and tile face",
      "Stain and stripper treatment",
      "Crack and chip repair where possible",
      "Penetrating sealer",
      "Optional enhancing or color sealer",
    ],
    process: [
      { title: "Assess", description: "Honest evaluation — what's possible, what isn't." },
      { title: "Clean", description: "Deep cleaning of tile face, grout, and texture." },
      { title: "Repair", description: "Targeted repair of cracks and chips where viable." },
      { title: "Seal", description: "Penetrating sealer locks in the finish and protects." },
    ],
    methodNote:
      "When they make Mexican tiles, they put them out on the fields and the sun makes the shell. That shell isn't very hard. The sun isn't 500 degrees. We're honest about the limits.",
    faqs: [
      {
        q: "Can broken Mexican tiles be repaired?",
        a: "Sometimes. Small chips and cracks can be filled. Tiles with broken-through shells usually can't be fully restored — they need replacement. We'll tell you which is which.",
      },
      {
        q: "How is Cuban tile different from Mexican tile?",
        a: "Cuban tile (also called Cuban hydraulic tile) is a denser cement-based tile with painted patterns. It typically holds up better than Saltillo and has more restoration potential.",
      },
      {
        q: "How long does Mexican tile sealer last?",
        a: "Penetrating sealers on Saltillo typically last 3-5 years before needing refresh, depending on traffic and cleaning practices.",
      },
    ],
    related: ["stone-flooring", "tile-laminate-vinyl-repair", "terrazzo-restoration"],
    image: "/images/mexican-saltillo-tile-restoration-miami.jpg",
    imageAlt: "Cleaned and sealed Mexican Saltillo tile floor in Miami",
  },
  {
    slug: "stone-flooring",
    category: "stone-specialty",
    name: "Stone Flooring",
    h1: "Natural stone floors — cleaned, sealed, and restored with care.",
    shortDescription:
      "Restoration for travertine, limestone, slate, granite, and other natural stone floors.",
    metaTitle: "Natural Stone Floor Restoration in Miami | ReNewIt Floors",
    metaDescription:
      "Natural stone floor restoration in Miami — travertine, limestone, slate, granite. Cleaning, sealing, and polishing. Free assessment.",
    intro:
      "Natural stone — travertine, limestone, slate, granite — each behaves differently. The right care depends on knowing the stone.",
    body: "We restore natural stone floors with the same Foundation-First method we apply everywhere: assess the stone, address damage, polish or hone to the appropriate finish, then protect. Travertine and limestone are softer and more porous — they need careful handling and the right sealers. Granite and slate are harder but still benefit from professional cleaning and sealing.",
    scope: [
      "Stone identification and condition assessment",
      "Diamond honing or polishing as appropriate",
      "Etch and scratch repair",
      "Hole and pit filling (travertine)",
      "Penetrating sealer",
      "Color enhancement if desired",
    ],
    process: [
      { title: "Identify", description: "Confirm stone type and current condition." },
      { title: "Restore", description: "Hone, polish, or clean depending on stone needs." },
      { title: "Protect", description: "Penetrating sealer matched to the stone." },
      { title: "Maintain", description: "Care recommendations to keep the floor looking great." },
    ],
    methodNote:
      "Stone isn't one material — it's a category. Knowing the difference between travertine and limestone, or honed and polished, is the difference between a great restoration and a damaged floor.",
    faqs: [
      {
        q: "Can travertine holes be filled?",
        a: "Yes. We use color-matched epoxy or grout fill, then hone or polish flush. Done right, the repair is invisible.",
      },
      {
        q: "Should my slate be honed or polished?",
        a: "Slate is typically honed (matte) — polishing slate is uncommon and often inappropriate for the stone. We'll match the original finish or your preference.",
      },
    ],
    related: ["marble-restoration", "mexican-tile-restoration", "terrazzo-restoration"],
    image: "/images/natural-stone-floor-restoration-miami.jpg",
    imageAlt: "Natural stone floor restoration in a Miami home",
  },

  // ===== HARDWOOD & REPAIR (2) =====
  {
    slug: "hardwood-refinishing",
    category: "hardwood-repair",
    name: "Hardwood Refinishing",
    h1: "Hardwood floors brought back to their original warmth.",
    shortDescription:
      "Sand, stain, and seal hardwood floors to restore their original character.",
    metaTitle: "Hardwood Floor Refinishing in Miami | ReNewIt Floors",
    metaDescription:
      "Hardwood floor sanding, staining, and sealing in Miami — bringing wood floors back to their original warmth. 1-year warranty.",
    intro:
      "Most hardwood floors can be refinished multiple times over their lifespan. If yours is showing wear, scratches, or dullness, refinishing brings it back — usually at a fraction of replacement cost.",
    body: "Refinishing involves sanding down to fresh wood, applying stain if you want to change or refresh the color, and sealing with a durable polyurethane finish. We work in South Florida humidity, which adds considerations most contractors miss — wood expansion, cure times, and product selection all matter here.",
    scope: [
      "Wood condition assessment",
      "Multi-grit sanding (coarse to fine)",
      "Edge sanding around walls and obstacles",
      "Optional stain application",
      "Multi-coat polyurethane finish",
      "Final buff and clean",
    ],
    process: [
      { title: "Assess", description: "Confirm the wood can be refinished and recommend approach." },
      { title: "Sand", description: "Multi-grit sanding to fresh wood." },
      { title: "Stain", description: "Optional stain in the color of your choice." },
      { title: "Finish", description: "Multi-coat polyurethane for durability." },
    ],
    methodNote:
      "South Florida humidity changes how wood floors behave. We adjust products, timing, and prep based on conditions — not on a generic process.",
    faqs: [
      {
        q: "How many times can hardwood be refinished?",
        a: "Most ¾\" solid hardwood can be refinished 4-7 times over its life. Engineered wood with a thin veneer may only refinish 1-2 times.",
      },
      {
        q: "How long will I be out of the room?",
        a: "Typically 3-5 days from start to walkable. Full cure for furniture takes longer. We'll give you a clear timeline.",
      },
      {
        q: "Can I change the stain color?",
        a: "Yes — once we sand to fresh wood, the floor accepts new stain. Going lighter than the original is hardest; going darker is easier.",
      },
    ],
    related: ["tile-laminate-vinyl-repair", "concrete-polishing", "marble-restoration"],
    image: "/images/hardwood-floor-refinishing-miami.jpg",
    imageAlt: "Refinished hardwood floor with warm tone in Miami",
  },
  {
    slug: "tile-laminate-vinyl-repair",
    category: "hardwood-repair",
    name: "Tile, Laminate & Vinyl Repair",
    h1: "Targeted repair — fixing what's broken, not replacing what isn't.",
    shortDescription:
      "Repair of cracked tile, loose laminate, damaged vinyl, and other floor damage.",
    metaTitle: "Tile, Laminate & Vinyl Floor Repair in Miami | ReNewIt Floors",
    metaDescription:
      "Targeted repair of cracked tile, loose laminate, and damaged vinyl floors in Miami. Honest assessment. 30+ years. 1-year warranty.",
    intro:
      "When a few tiles crack or a section of laminate lifts, you don't always need to replace the whole floor. Targeted repair is faster, cheaper, and often invisible.",
    body: "We repair cracked tiles (with replacement tiles or color-matched fill), loose laminate planks, damaged vinyl sections, and other targeted floor problems. The work is honest: if the damage is too widespread or the underlayment is failing, we'll tell you straight that repair won't hold and help you plan a real fix.",
    scope: [
      "Damage assessment and repair feasibility",
      "Tile replacement (if matching tile is available)",
      "Tile crack and chip filling",
      "Laminate plank re-lay or replacement",
      "Vinyl section replacement",
      "Grout repair and color-matching",
    ],
    process: [
      { title: "Assess", description: "Walk the damage, give you the honest fix." },
      { title: "Repair", description: "Targeted fix using matching materials where possible." },
      { title: "Blend", description: "Color-match grout and finishes for invisible repair." },
      { title: "Done", description: "Most repairs finish in half a day to a day." },
    ],
    methodNote:
      "Sometimes the right answer is repair. Sometimes it's replacement. We'll tell you which — even when repair would mean less work for us.",
    faqs: [
      {
        q: "Will the repair be invisible?",
        a: "Usually, yes — when matching materials are available. Tile replacement may show slight differences if the original tile has aged. We'll set realistic expectations before starting.",
      },
      {
        q: "What if I don't have matching replacement tiles?",
        a: "Often we can source close matches from suppliers, or use color-matched epoxy fill for small chips. For larger damage without a match, replacement of a broader section may be needed.",
      },
    ],
    related: ["hardwood-refinishing", "mexican-tile-restoration", "stone-flooring"],
    image: "/images/tile-floor-cleaning-miami.jpg",
    imageAlt: "Tile and grout floor repair and cleaning in Miami",
  },

  // ===== COMMERCIAL (1) =====
  {
    slug: "industrial-warehouse-floor-cleaning",
    category: "commercial-industrial",
    name: "Industrial & Warehouse Floor Cleaning",
    h1: "Industrial floors restored at scale — without cutting corners.",
    shortDescription:
      "Large-scale industrial and warehouse floor cleaning, polishing, and sealing.",
    metaTitle: "Industrial & Warehouse Floor Restoration in Miami | ReNewIt Floors",
    metaDescription:
      "Large-scale industrial and warehouse floor cleaning, polishing, and sealing in Miami — Doral, Medley, and across South Florida. Free site visit.",
    intro:
      "Warehouse and industrial floors take more abuse than any other surface we work with. Forklift traffic, chemical spills, sealed-in dust, years of wear — and most of them have never been properly maintained.",
    body: "We bring industrial-grade equipment and the same Foundation-First method to commercial and warehouse projects. Polished concrete, epoxy systems, and full restoration of large square-footage spaces. We schedule around your operations, work in phases when needed, and give property managers and facility operators the kind of clear communication and reliable execution that's rare in the contracting world.",
    scope: [
      "Site assessment and project planning",
      "Phased scheduling around operations",
      "Industrial-grade diamond grinding",
      "Crack repair, joint filling, and surface prep",
      "Polish, epoxy, or sealer system as specified",
      "Striping and traffic markings (if needed)",
    ],
    process: [
      { title: "Site Visit", description: "Walk the facility, understand operations, scope the project." },
      { title: "Plan", description: "Phased timeline that fits your operations." },
      { title: "Execute", description: "Industrial equipment, professional crew, full restoration." },
      { title: "Maintain", description: "Optional ongoing maintenance program for high-traffic facilities." },
    ],
    methodNote:
      "A 15,000-square-foot warehouse floor needs the same prep discipline as a Coral Gables foyer. Scale doesn't mean shortcuts.",
    faqs: [
      {
        q: "Can you work around our operations?",
        a: "Yes. We regularly phase large projects to avoid full shutdowns — working sections at a time, nights, or weekends as your operations require.",
      },
      {
        q: "What's the lifespan of polished concrete in a warehouse?",
        a: "Properly polished and densified warehouse concrete lasts 15-20+ years with minimal maintenance, even under heavy forklift traffic.",
      },
      {
        q: "Do you handle compliance and safety requirements for industrial sites?",
        a: "Yes. We carry full commercial insurance, comply with OSHA requirements on site, and coordinate with facility safety officers.",
      },
    ],
    related: ["concrete-polishing", "concrete-epoxy-systems", "concrete-sealing"],
    image: "/images/industrial-warehouse-floor-restoration-miami.jpg",
    imageAlt: "Industrial warehouse polished concrete floor in Miami",
  },
];

// Lookup helpers
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getServicesByCategory(categorySlug: ServiceCategorySlug): Service[] {
  return services.filter((s) => s.category === categorySlug);
}

export function isCategorySlug(slug: string): slug is ServiceCategorySlug {
  return categories.some((c) => c.slug === slug);
}
