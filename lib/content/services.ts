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
  // Spanish translations (optional — fall back to English when missing)
  nameEs?: string;
  shortNameEs?: string;
  h1Es?: string;
  subheadEs?: string;
  descriptionEs?: string;
  methodAngleEs?: string;
  metaTitleEs?: string;
  metaDescriptionEs?: string;
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
  detailImage?: string; // Optional secondary process/detail shot
  detailImageAlt?: string;
  // Spanish translations (optional — fall back to English when missing)
  nameEs?: string;
  h1Es?: string;
  shortDescriptionEs?: string;
  metaTitleEs?: string;
  metaDescriptionEs?: string;
  introEs?: string;
  bodyEs?: string;
  scopeEs?: string[];
  processEs?: { title: string; description: string }[];
  methodNoteEs?: string;
  faqsEs?: { q: string; a: string }[];
  imageAltEs?: string;
  detailImageAltEs?: string;
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
    nameEs: "Soluciones de Concreto y Epoxi",
    shortNameEs: "Concreto y Epoxi",
    h1Es: "Pisos de concreto y epoxi que no se despegan, no se opacan, ni fallan.",
    subheadEs: "Desde concreto pulido espejo hasta sistemas de epoxi para garajes hechos sobre una preparación real — esta es nuestra especialidad más solicitada.",
    descriptionEs: "Concreto pulido, sistemas de epoxi, acabados decorativos y selladores de protección — todo basado en nuestro Método de Base Primero.",
    methodAngleEs: "Por qué se despega el epoxi de la mayoría — y por qué el nuestro no. La capa de natilla del concreto recién vaciado no se adhiere. La eliminamos con pulido de diamante antes de que cualquier acabado toque el piso.",
    metaTitleEs: "Soluciones de Pisos de Concreto y Epoxi en Miami | ReNewIt Floors",
    metaDescriptionEs: "Concreto pulido, epoxi para garaje, concreto decorativo y sellado en Miami. Preparación con pulido de diamante. Más de 30 años. Garantía de 1 año. Evaluación gratis.",
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
    nameEs: "Piedra Natural y Pisos Especiales",
    shortNameEs: "Piedra y Especiales",
    h1Es: "Devolviéndole vida a la piedra y la loseta original de Miami.",
    subheadEs: "Terrazo, mármol, loseta mexicana y cubana, piedra natural — superficies con historia, restauradas con cuidado.",
    descriptionEs: "Restaurando las superficies que hicieron a las casas del sur de la Florida lo que son — terrazo histórico, vestíbulos de mármol, loseta mexicana y cubana.",
    methodAngleEs: "Honestos sobre lo que es posible. Algunas superficies — como la cáscara horneada de la loseta mexicana — no aceptan una restauración completa. Le decimos la verdad antes de que gaste un dólar.",
    metaTitleEs: "Restauración de Piedra Natural y Pisos Especiales en Miami | ReNewIt Floors",
    metaDescriptionEs: "Terrazo, mármol, loseta mexicana y piedra natural en Miami. De propiedad familiar. Evaluaciones honestas. Más de 30 años. Garantía de 1 año.",
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
    nameEs: "Madera, Loseta y Reparaciones",
    shortNameEs: "Madera y Reparaciones",
    h1Es: "Devolviéndole a los pisos de madera su calidez original.",
    subheadEs: "Reacondicionamiento, reparación y arreglos puntuales para madera, loseta, laminado y vinilo.",
    descriptionEs: "Restauración y reparación puntual para los pisos por los que la gente camina todos los días — madera, laminado, vinilo y loseta.",
    methodAngleEs: "Primero, una evaluación honesta. A veces tiene sentido reacondicionar. A veces basta con una reparación puntual. Le decimos cuál.",
    metaTitleEs: "Reacondicionamiento de Madera y Reparación de Pisos en Miami | ReNewIt Floors",
    metaDescriptionEs: "Reacondicionamiento de pisos de madera, reparación de loseta, laminado y vinilo en Miami. Más de 30 años. Garantía de 1 año. Evaluación gratis.",
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
    nameEs: "Cuidado de Pisos Comerciales e Industriales",
    shortNameEs: "Comercial e Industrial",
    h1Es: "Pisos industriales restaurados a gran escala — sin atajos.",
    subheadEs: "Concreto pulido a gran escala, sistemas de epoxi y mantenimiento de pisos para instalaciones del sur de la Florida.",
    descriptionEs: "Restauración de pisos para almacenes, oficinas y locales comerciales — para administradores de propiedades y operadores de instalaciones.",
    methodAngleEs: "Escala no significa atajos. Aplicamos el mismo Método de Base Primero a un almacén de 15,000 pies cuadrados que a un vestíbulo en Coral Gables.",
    metaTitleEs: "Cuidado de Pisos Comerciales e Industriales en Miami | ReNewIt Floors",
    metaDescriptionEs: "Restauración de pisos comerciales e industriales en Miami — almacenes, oficinas, locales. Concreto pulido, sistemas de epoxi. Más de 30 años. Visita gratis al sitio.",
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
    detailImage: "/images/concrete-polishing-macro-detail-miami.jpg",
    detailImageAlt: "Macro detail of mirror-polished concrete floor surface in Miami",
    nameEs: "Concreto Pulido",
    h1Es: "Concreto pulido con acabado espejo — construido sobre seis pasadas de diamante.",
    shortDescriptionEs: "De seis a siete pasadas de pulido con diamante. Acabados espejo. Hechos para durar.",
    metaTitleEs: "Concreto Pulido en Miami, FL | ReNewIt Floors",
    metaDescriptionEs: "Concreto pulido con diamante en Miami. De seis a siete pasadas para un acabado espejo. Más de 30 años. Garantía de 1 año. Evaluación gratis.",
    introEs: "El concreto pulido es nuestra especialidad principal. Hecho bien, dura décadas — una superficie sellada, suave, con acabado espejo que aguanta tráfico, sol y la humedad del sur de la Florida. Hecho mal, se opaca en meses.",
    bodyEs: "La diferencia está en la preparación. La mayoría de los contratistas pulen un piso de concreto con una o dos pasadas. Nosotros corremos seis o siete. Cada pasada usa pads de diamante progresivamente más finos — abriendo la superficie, removiendo la capa de natilla, nivelando imperfecciones, y finalmente llevando la losa a un brillo refractante. Los detalles del borde se terminan a mano. El sellador va sobre una superficie lista para él.",
    methodNoteEs: "Cuando el concreto seca, se forma una capa suave de natilla en la superficie. La pintura, el sellador y los tintes no se adhieren a esa capa — se adhieren a lo de abajo. Por eso la mayoría de los pisos de concreto pulido lucen bien por seis meses y luego se opacan. Nosotros lijamos la natilla todas las veces.",
    imageAltEs: "Piso de concreto pulido con acabado espejo en una casa de Miami",
    detailImageAltEs: "Detalle macro de superficie de concreto pulido espejo en Miami",
    scopeEs: [
      "Evaluación del piso y plan de pulido",
      "De seis a siete pasadas de pulido con diamante (granos progresivos)",
      "Reparación de grietas y juntas donde sea necesario",
      "Aplicación de densificador para dureza",
      "Pulido final al nivel de brillo especificado",
      "Sellador penetrante para protección contra manchas",
      "Detalle de borde terminado a mano",
    ],
    processEs: [
      { title: "Evaluamos", description: "Caminamos su losa, identificamos cualquier necesidad de preparación y confirmamos el acabado correcto para su espacio." },
      { title: "Pulido con Diamante", description: "Seis o siete pulidos progresivos remueven la capa de natilla y abren la superficie." },
      { title: "Pulimos", description: "Pads de pulido progresivos llevan el piso al nivel de brillo objetivo." },
      { title: "Sellamos", description: "Sellador penetrante protege contra manchas, agua y desgaste." },
    ],
    faqsEs: [
      { q: "¿Se puede instalar concreto pulido en una casa residencial, no solo en un garaje?", a: "Sí — y es uno de nuestros servicios residenciales más solicitados. El concreto pulido funciona en salas, cocinas, sótanos y pisos principales completos. El acabado puede ser mate, satinado o de alto brillo según su preferencia." },
      { q: "¿El concreto pulido es resbaloso?", a: "No cuando se sella correctamente. Nuestros selladores penetrantes no agregan una película resbalosa encima — se absorben y endurecen la superficie. El concreto pulido no es más resbaloso que cualquier otro piso duro." },
      { q: "¿Cuánto dura un piso de concreto pulido?", a: "El concreto pulido y sellado correctamente puede durar más de 20 años con mantenimiento mínimo. Respaldamos nuestro trabajo con una garantía de 1 año, pero nuestros pisos suelen durar décadas más allá." },
      { q: "¿Cuál es la diferencia entre concreto pulido y concreto teñido?", a: "El concreto pulido se refiere al proceso mecánico de lijar y pulir — el color natural del piso resalta. El concreto teñido usa tintes ácidos o de base agua para agregar color antes de pulir. Hacemos ambos." },
    ],
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
    nameEs: "Restauración de Concreto",
    h1Es: "Pisos de concreto devueltos a la vida — no arrancados.",
    shortDescriptionEs: "Restaurando pisos de concreto dañados, manchados o sin terminar en lugar de reemplazarlos.",
    metaTitleEs: "Restauración de Pisos de Concreto en Miami | ReNewIt Floors",
    metaDescriptionEs: "Restaurando pisos de concreto viejos, dañados o sin terminar en Miami. Reparación de grietas, preparación de superficie, pulido, sellado. Más de 30 años. Evaluación gratis.",
    introEs: "La mayoría de los dueños no se da cuenta de que el concreto viejo se puede restaurar. Losas manchadas, agrietadas o sin terminar que parecen estar más allá de salvación — casi siempre tienen un piso hermoso debajo. Hemos restaurado concreto que estuvo cubierto por cuarenta años.",
    bodyEs: "La restauración de concreto comienza con una evaluación honesta. Lijamos hasta la superficie original, reparamos grietas estructurales, nivelamos áreas desniveladas y reconstruimos el piso desde la losa hacia arriba. Ya sea que quiera un acabado pulido, un tinte o un look natural sellado, la restauración es más rápida, más barata y más sostenible que el reemplazo.",
    methodNoteEs: "La restauración solo funciona cuando la preparación es correcta. No pintamos sobre los problemas. Lijamos a través de ellos.",
    imageAltEs: "Restauración de piso de concreto en proceso en Miami",
    scopeEs: [
      "Evaluación honesta de la condición de la losa",
      "Preparación de la superficie y pulido con diamante",
      "Reparación de grietas y rellenado de juntas",
      "Remoción de manchas y contaminación",
      "Acabado opcional: pulido, tinte o sellador",
      "Bordes y transiciones detallados a mano",
    ],
    processEs: [
      { title: "Diagnosticamos", description: "Evaluamos la condición de la losa y le decimos directamente qué es posible." },
      { title: "Preparamos", description: "Pulido con diamante, reparamos grietas, removemos manchas y contaminación." },
      { title: "Restauramos", description: "Aplicamos el acabado que usted quiere — pulido, tinte o sellador." },
      { title: "Protegemos", description: "El sellado final asegura que la restauración dure." },
    ],
    faqsEs: [
      { q: "¿La restauración es más barata que el reemplazo?", a: "Casi siempre — generalmente entre 50 y 70% menos que arrancar y vaciar una losa nueva. Y es más rápido." },
      { q: "¿Pueden restaurar concreto que ha sido pintado varias veces?", a: "Sí. El pulido con diamante remueve cualquier número de capas de pintura. Hemos restaurado losas que tenían cuatro o cinco capas encima." },
      { q: "¿Qué pasa si mi concreto tiene grietas profundas?", a: "La mayoría de las grietas se pueden reparar con epoxi estructural y se pulen al nivel. Algunos patrones de grietas indican problemas estructurales más profundos — le diremos directamente si ese es el caso." },
    ],
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
    nameEs: "Sellado de Concreto",
    h1Es: "Sellado que dura — porque la preparación se hizo bien.",
    shortDescriptionEs: "Sellado profesional de concreto que protege contra manchas, agua y desgaste.",
    metaTitleEs: "Sellado de Concreto en Miami, FL | ReNewIt Floors",
    metaDescriptionEs: "Sellado profesional de concreto en Miami — protege contra manchas, agua y desgaste. Hecho bien después de la preparación correcta. Garantía de 1 año. Presupuesto gratis.",
    introEs: "El sellador no falla porque el producto sea malo. Falla porque la superficie no estaba lista para él.",
    bodyEs: "Usamos selladores penetrantes que se absorben en concreto correctamente preparado y endurecen químicamente la superficie desde adentro. Sin película encima que se despegue. Sin look de plástico brillante. Solo concreto protegido que resiste manchas, agua y desgaste por años.",
    methodNoteEs: "La mayoría de los trabajos de sellado fallan en el primer año porque el contratista roció sellador sobre una superficie sin preparar. Ese sellador se queda encima, no se adhiere y se despega con el tráfico de pisadas. Base primero.",
    imageAltEs: "Piso de concreto sellado con recubrimiento protector en Miami",
    scopeEs: [
      "Evaluación de la superficie",
      "Pulido con diamante para abrir la superficie",
      "Limpieza y remoción de contaminación",
      "Aplicación de densificador penetrante",
      "Sellador final con realce de brillo opcional",
    ],
    processEs: [
      { title: "Evaluamos", description: "Evaluamos la losa y recomendamos el sellador correcto para su uso." },
      { title: "Preparamos", description: "Pulimos y limpiamos — el sellador necesita una superficie abierta, libre de contaminación." },
      { title: "Sellamos", description: "Aplicamos sellador penetrante en condiciones apropiadas para absorción completa." },
      { title: "Curamos", description: "Dejamos curar el sellador correctamente antes de que regrese el tráfico." },
    ],
    faqsEs: [
      { q: "¿Cuánto dura el sellador de concreto?", a: "Los selladores penetrantes aplicados correctamente duran de 5 a 10 años en pisos residenciales con tráfico normal." },
      { q: "¿El sellador cambiará el color de mi concreto?", a: "Los selladores penetrantes son típicamente transparentes y no cambian la apariencia. Los selladores realzantes pueden profundizar ligeramente el color natural. Le mostramos una muestra antes de aplicar." },
      { q: "¿Pueden sellar concreto teñido?", a: "Sí — el sellador es la capa protectora final sobre un piso teñido o pulido." },
    ],
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
    nameEs: "Capas de Cemento",
    h1Es: "Capas de cemento modernas y sin uniones — colocadas sobre una base que aguanta.",
    shortDescriptionEs: "Capas cementicias para una superficie moderna y sin uniones sobre concreto existente.",
    metaTitleEs: "Pisos de Capa de Cemento en Miami | ReNewIt Floors",
    metaDescriptionEs: "Capas cementicias para pisos de Miami — superficies modernas y sin uniones sobre concreto existente. Preparación con pulido de diamante. Garantía de 1 año.",
    introEs: "Las capas de cemento le permiten transformar un piso de concreto existente sin demolición. Hechas bien, duran décadas. Hechas mal, se rajan y se levantan.",
    bodyEs: "Las capas van encima del concreto correctamente preparado para darle una superficie suave, moderna, aplanada con plana. Usamos sistemas de cemento modificado con polímero que se adhieren mecánica y químicamente al sustrato. El look es contemporáneo, la superficie es duradera y la preparación es no negociable.",
    methodNoteEs: "Una capa solo es tan buena como la adherencia que está debajo. Nosotros no nos saltamos el pulido.",
    imageAltEs: "Piso de capa de cemento moderno y sin uniones en un pasillo de Miami",
    scopeEs: [
      "Inspección del sustrato y recomendación de preparación",
      "Pulido con diamante para adherencia mecánica",
      "Reparación de grietas y parchado",
      "Aplicación de imprimante adherente",
      "Capa cementicia (vaciado único o múltiple)",
      "Sellado y capa superior protectora",
    ],
    processEs: [
      { title: "Preparamos", description: "Lijamos, limpiamos e imprimamos el sustrato para una adherencia adecuada." },
      { title: "Aplicamos", description: "Aplanamos la capa en vaciados cuidadosamente cronometrados." },
      { title: "Terminamos", description: "Refinamos la superficie, agregamos color o textura si se especifica." },
      { title: "Sellamos", description: "Capa superior protectora para resistencia a manchas y desgaste." },
    ],
    faqsEs: [
      { q: "¿Se puede instalar una capa sobre loseta o madera?", a: "A veces — depende del sustrato. Inspeccionamos primero y le decimos directamente si aguantará." },
      { q: "¿Qué tan gruesa es una capa de cemento?", a: "Desde 1/8\" para una capa decorativa fina hasta 3/4\" o más para una capa estructural. Elegimos el sistema según las necesidades de su piso." },
    ],
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
    nameEs: "Recubrimientos Cementicios",
    h1Es: "Acabados cementicios decorativos construidos sobre preparación real.",
    shortDescriptionEs: "Recubrimientos cementicios decorativos con acabados a medida para espacios residenciales y comerciales.",
    metaTitleEs: "Recubrimientos Cementicios para Pisos en Miami | ReNewIt Floors",
    metaDescriptionEs: "Recubrimientos cementicios decorativos para pisos residenciales y comerciales en Miami. Acabados a medida. Más de 30 años. Garantía de 1 año.",
    introEs: "Los recubrimientos cementicios son el lado artístico del concreto — más finos que las capas, más decorativos, con un rango de looks desde rústico hasta refinado.",
    bodyEs: "Mezclamos pigmentos, agregados y técnicas de acabado para crear recubrimientos que parecen piedra pulida, concreto curtido o microcemento moderno. Cada proyecto es a medida — le mostramos tableros de muestra y le caminamos por las opciones antes de que cualquier producto toque su piso.",
    methodNoteEs: "Mientras más fino el recubrimiento, más crítica la preparación. El trabajo decorativo no tiene dónde esconder una mala adherencia.",
    imageAltEs: "Recubrimiento decorativo cementicio a medida en Miami",
    scopeEs: [
      "Consulta con tableros de muestra",
      "Preparación del sustrato y pulido con diamante",
      "Imprimante adherente",
      "Aplicación cementicia de varias capas",
      "Trabajo de color y textura a medida",
      "Sellado y acabado protector",
    ],
    processEs: [
      { title: "Diseñamos", description: "Tableros de muestra en su espacio, en su luz." },
      { title: "Preparamos", description: "Lijamos, limpiamos, imprimamos — todas las veces." },
      { title: "Aplicamos", description: "Aplicación de varias capas con textura terminada a mano." },
      { title: "Sellamos", description: "Sellador protector cierra el acabado." },
    ],
    faqsEs: [
      { q: "¿En qué se diferencia esto de una capa de cemento?", a: "Los recubrimientos cementicios son más finos (típicamente de 1/16\" a 1/8\") y enfocados en apariencia. Las capas son más gruesas y más estructurales." },
      { q: "¿Puedo ver muestras antes de comprometerme?", a: "Sí — siempre creamos tableros de muestra para que vea el acabado en su espacio real." },
    ],
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
    nameEs: "Sistemas de Epoxi para Concreto",
    h1Es: "Sistemas de epoxi que no se despegan — porque preparamos primero.",
    shortDescriptionEs: "Sistemas de epoxi de varias capas para cocinas, sótanos, locales y pisos comerciales.",
    metaTitleEs: "Pisos de Epoxi para Concreto en Miami | ReNewIt Floors",
    metaDescriptionEs: "Sistemas de epoxi profesionales para casas y negocios de Miami — preparación con pulido de diamante, epoxi de varias capas, capa superior. Garantía de 1 año.",
    introEs: "El epoxi tiene mala reputación porque la mayoría de los trabajos de epoxi fallan. El producto no es el problema — la preparación lo es.",
    bodyEs: "Instalamos sistemas profesionales de epoxi para sótanos residenciales, cocinas comerciales, locales y dondequiera que se necesite un piso duro, fácil de limpiar y bonito. El sistema empieza con pulido de diamante para remover la capa de natilla del concreto, luego imprimante, luego epoxi de varias capas, y luego una capa superior estable a los rayos UV. Hecho así, el epoxi dura más de 10 años.",
    methodNoteEs: "La capa de natilla en la superficie del concreto vaciado es demasiado suave para sostener epoxi. Aplicar epoxi encima y tendrá un piso de seis meses. Lijar a través y tendrá un piso de diez años.",
    imageAltEs: "Sistema de piso de epoxi reflectante en un espacio comercial de Miami",
    scopeEs: [
      "Pulido con diamante del sustrato",
      "Reparación de grietas y juntas",
      "Capa imprimante de epoxi",
      "Color base y escamas decorativas (opcional)",
      "Construcción de epoxi de varias capas",
      "Capa superior de poliuretano estable a los rayos UV",
    ],
    processEs: [
      { title: "Lijamos", description: "Pulimos con diamante hasta concreto desnudo — sin atajos." },
      { title: "Imprimamos", description: "Imprimante penetrante para adherencia química." },
      { title: "Construimos", description: "Epoxi de varias capas con trabajo decorativo opcional." },
      { title: "Capa Superior", description: "Capa superior estable a los rayos UV para durabilidad a largo plazo." },
    ],
    faqsEs: [
      { q: "¿Por qué fallan la mayoría de los trabajos de epoxi?", a: "Preparación inadecuada. La mayoría de los contratistas graba el concreto con ácido, lo cual no remueve la capa de natilla de manera confiable. El pulido con diamante es la única forma consistente de asegurar buena adherencia." },
      { q: "¿Puedo tener epoxi en una cocina o sótano?", a: "Por supuesto — el epoxi es excelente en cualquier cuarto donde quiera un piso duro, sin uniones y fácil de limpiar. Lo hemos instalado en casas de Miami desde la cocina hasta el sótano." },
    ],
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
    detailImage: "/images/garage-epoxy-chip-broadcast-miami.jpg",
    detailImageAlt: "Decorative chip flake being broadcast onto wet epoxy in a Miami garage",
    nameEs: "Pisos de Epoxi para Garaje",
    h1Es: "Epoxi de garaje que no se despega en seis meses.",
    shortDescriptionEs: "Sistemas de epoxi para garaje con preparación adecuada de pulido con diamante y opciones de escamas decorativas.",
    metaTitleEs: "Pisos de Epoxi para Garaje en Miami | ReNewIt Floors",
    metaDescriptionEs: "Pisos de epoxi para garaje en Miami hechos bien — preparación con pulido de diamante, epoxi de varias capas, opciones de escamas decorativas. Garantía de 1 año. Evaluación gratis.",
    introEs: "Si ha tenido un epoxi de garaje que falló antes, no es el único. La mayoría de los trabajos de epoxi de garaje en Miami se despegan en menos de un año — porque el contratista se saltó el pulido y se fue directo al producto.",
    bodyEs: "Los garajes son la prueba más dura para el epoxi. Llantas calientes, gotas de aceite, sal de carretera y años de concreto sin sellar empapado de contaminantes — todo eso lucha contra la adherencia. Lijamos con diamante hasta el concreto limpio, reparamos cada grieta, imprimamos correctamente, y luego construimos un sistema de epoxi de varias capas con escamas de color decorativas y una capa superior estable a los rayos UV. El resultado es un piso de garaje que aguanta la vida real y luce bien al hacerlo.",
    methodNoteEs: "Las llantas calientes en un garaje de Miami pueden alcanzar 180°F. El epoxi barato adherido a una capa de natilla no aguanta — se levanta de la superficie. El epoxi sobre una superficie pulida con diamante se queda en su lugar.",
    imageAltEs: "Piso de epoxi para garaje con escamas decorativas de color en Miami",
    detailImageAltEs: "Aplicación de escamas decorativas sobre epoxi húmedo en un garaje de Miami",
    scopeEs: [
      "Remoción de recubrimiento existente (si es necesario)",
      "Pulido con diamante hasta el concreto desnudo",
      "Remediación de manchas de aceite y remoción de contaminación",
      "Reparación de grietas y juntas",
      "Imprimante de epoxi",
      "Capa base de epoxi con escamas de color decorativas",
      "Capa superior de poliuretano estable a los rayos UV",
    ],
    processEs: [
      { title: "Quitamos y Lijamos", description: "Removemos recubrimientos viejos, pulimos con diamante hasta el concreto desnudo." },
      { title: "Reparamos", description: "Arreglamos grietas, llenamos juntas, atendemos contaminación de aceite." },
      { title: "Recubrimos", description: "Imprimante, epoxi base, lanzamiento de escamas decorativas." },
      { title: "Capa Superior", description: "La capa superior estable a los rayos UV cierra todo." },
    ],
    faqsEs: [
      { q: "¿Cuánto tarda la instalación?", a: "La mayoría de los garajes residenciales toman de 2 a 3 días desde el inicio hasta poder estacionar. Le damos un cronograma claro antes de empezar." },
      { q: "¿Aguantará llantas calientes?", a: "Sí — cuando se prepara y se aplica capa superior correctamente. La capa superior es la clave de la resistencia a llantas calientes." },
      { q: "¿Qué opciones de color tengo?", a: "Cientos. Colores sólidos, mezclas de escamas de color, efectos metálicos. Le mostramos muestras en la luz natural de su garaje." },
    ],
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
    nameEs: "Tintes Patina y Acabados Decorativos",
    h1Es: "Tintes patina y acabados decorativos — concreto con carácter.",
    shortDescriptionEs: "Tintes patina a medida, tintes ácidos y acabados decorativos para pisos de concreto.",
    metaTitleEs: "Tintes Decorativos de Concreto y Acabados Patina en Miami | ReNewIt Floors",
    metaDescriptionEs: "Tintes patina a medida y acabados decorativos de concreto en Miami — traen color, profundidad y carácter a los pisos de concreto. Más de 30 años.",
    introEs: "Los tintes patina convierten el concreto en algo con profundidad — color que vive en la superficie, no encima.",
    bodyEs: "Los tintes ácidos y de base agua reaccionan con el concreto para producir efectos de color variados, marmolados, en capas que ningún otro piso puede igualar. Mezclamos tintes a medida y los aplicamos con las técnicas que sacan lo mejor del piso. Cada piso teñido es único.",
    methodNoteEs: "El concreto teñido es permanente. Siempre hacemos muestras primero — en su piso real — para que sepa exactamente lo que va a obtener.",
    imageAltEs: "Piso de concreto decorativo con tinte patina cálido en Miami",
    scopeEs: [
      "Pruebas de muestra en su espacio",
      "Preparación de superficie y pulido",
      "Múltiples capas de tinte y reacciones",
      "Realces y acentos aplicados a mano",
      "Neutralización y limpieza",
      "Sellado y capa superior protectora",
    ],
    processEs: [
      { title: "Probamos", description: "Probamos las reacciones del tinte en su piso real antes de comprometernos." },
      { title: "Preparamos", description: "Abrimos la superficie para que el tinte reaccione correctamente." },
      { title: "Teñimos", description: "Aplicamos color en capas con técnica a mano." },
      { title: "Sellamos", description: "Cerramos la patina con un sellador protector." },
    ],
    faqsEs: [
      { q: "¿Puedo elegir un color específico?", a: "Los tintes ácidos reaccionan con la química del concreto, así que los colores varían según el piso. Los tintes de base agua son más predecibles. Discutimos qué es alcanzable según su losa." },
      { q: "¿El tinte se verá igual en todas partes?", a: "No — y ese es el atractivo. El concreto teñido varía en tono y profundidad por toda la superficie, lo que le da el carácter que la pintura plana no puede." },
    ],
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
    nameEs: "Recubrimiento de Vidrio Líquido",
    h1Es: "Recubrimiento de vidrio líquido — densificador, sellador y protección contra manchas en uno.",
    shortDescriptionEs: "Densificador de silicato de sodio (vidrio líquido) que endurece, sella y protege el concreto pulido.",
    metaTitleEs: "Recubrimiento de Vidrio Líquido para Concreto en Miami | ReNewIt Floors",
    metaDescriptionEs: "Densificador de vidrio líquido (silicato de sodio) y recubrimiento protector para concreto en Miami. Endurece, sella y protege el concreto pulido. Garantía de 1 año.",
    introEs: "El vidrio líquido es uno de los densificadores de concreto más viejos y mejores — silicato de sodio que reacciona con el concreto mismo para endurecer y sellar desde adentro.",
    bodyEs: "Cuando se aplica a concreto correctamente preparado, el vidrio líquido penetra profundamente la superficie y reacciona químicamente para formar un sello duro, vidrioso e integral. Aumenta la resistencia a la abrasión, bloquea la humedad y extiende dramáticamente la vida de los pisos de concreto pulido. Lo aplicamos como parte de nuestro proceso de pulido y como tratamiento de restauración independiente.",
    methodNoteEs: "El vidrio líquido no se queda en la superficie — se vuelve parte de ella. Por eso dura.",
    imageAltEs: "Recubrimiento densificador de vidrio líquido en piso de concreto en Miami",
    scopeEs: [
      "Evaluación y preparación de la superficie",
      "Limpieza del sustrato",
      "Aplicación de vidrio líquido (varias capas según se necesite)",
      "Verificación de penetración uniforme",
      "Pulido o brillado final",
    ],
    processEs: [
      { title: "Preparamos", description: "La superficie necesita estar abierta y limpia para que la química funcione." },
      { title: "Aplicamos", description: "El vidrio líquido penetra y reacciona con el concreto." },
      { title: "Terminamos", description: "Pulimos o brillamos para sacar la densidad y el brillo final." },
      { title: "Protegemos", description: "Capa superior opcional para áreas de alto tráfico." },
    ],
    faqsEs: [
      { q: "¿El vidrio líquido es mejor que un sellador tópico?", a: "Es diferente. El vidrio líquido densifica y endurece el concreto mismo. Un sellador tópico agrega una capa protectora encima. A menudo usamos ambos — vidrio líquido primero, luego un sellador." },
      { q: "¿Cuánto dura el vidrio líquido?", a: "Permanente — una vez que reacciona con el concreto, es parte del piso. Las capas superiores pueden necesitar refrescarse con el tiempo, pero la densificación es para siempre." },
    ],
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
    detailImage: "/images/terrazzo-restoration-process-miami.jpg",
    detailImageAlt: "Diamond grinder restoring original terrazzo floor in a Miami home",
    nameEs: "Restauración de Terrazo",
    h1Es: "Terrazo original de Miami, restaurado a su vida completa.",
    shortDescriptionEs: "Restaurando pisos históricos de terrazo escondidos bajo loseta o alfombra por décadas.",
    metaTitleEs: "Restauración de Terrazo en Miami | ReNewIt Floors",
    metaDescriptionEs: "Restaurando pisos originales de terrazo en Miami — Coral Gables, Pinecrest y por todo el sur de la Florida. Pulido, abrillantado, color combinado. Más de 30 años.",
    introEs: "El terrazo original en casas de Coral Gables, Pinecrest y Coconut Grove es uno de los pisos más bonitos del sur de la Florida. La mayoría ha estado escondido bajo loseta o alfombra por décadas.",
    bodyEs: "Cuando levantamos pisos viejos y encontramos terrazo original debajo, comienza el trabajo. Pulido con diamante a través de capas de pegamento y acabado viejo, abrillantado con pads progresivamente más finos, color combinado donde las astillas necesitan rellenarse, y sellado para protección — la restauración de terrazo es el trabajo más gratificante que hacemos. Cada piso es único. Cada restauración trae algo de regreso.",
    methodNoteEs: "Algunos pisos de terrazo están tan dañados que el sustrato no aguantará. Le decimos directamente después de una evaluación gratis si su piso se puede salvar.",
    imageAltEs: "Piso de terrazo blanco y negro pulido restaurado en Miami",
    detailImageAltEs: "Pulidora de diamante restaurando piso de terrazo original en una casa de Miami",
    scopeEs: [
      "Remoción de piso viejo (si es necesario)",
      "Pulido con diamante para remover pegamento y acabado viejo",
      "Reparación de grietas y astillas con relleno de color combinado",
      "Abrillantado progresivo al brillo especificado",
      "Sellador penetrante",
      "Bordes o decoraciones opcionales",
    ],
    processEs: [
      { title: "Descubrimos", description: "Removemos el piso viejo para exponer el terrazo original." },
      { title: "Pulimos", description: "Pulido con diamante de varias pasadas nivela y abre la superficie." },
      { title: "Reparamos", description: "Color combinado para astillas, llenamos grietas, restauramos el trabajo decorativo." },
      { title: "Abrillantamos y Sellamos", description: "Abrillantamos al brillo que escoja, sellamos para protección." },
    ],
    faqsEs: [
      { q: "Mi terrazo ha estado bajo loseta por cuarenta años — ¿todavía se puede restaurar?", a: "Casi siempre sí. Hemos restaurado terrazo que tenía tres capas de loseta y décadas de pegamento encima. La superficie original generalmente está intacta debajo." },
      { q: "¿Se pueden reparar las astillas y grietas?", a: "Sí. Mezclamos chips de mármol y resina a medida para combinar el color del terrazo original, luego pulimos todo al nivel. Hecho bien, la reparación es invisible." },
      { q: "¿Cómo se compara la restauración de terrazo con reemplazar el piso?", a: "La restauración preserva el carácter original de la casa — irreemplazable para la arquitectura histórica de Miami. También suele ser más rápida y menos costosa que la remoción y reemplazo." },
    ],
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
    detailImage: "/images/marble-honing-process-miami.jpg",
    detailImageAlt: "Craftsman diamond-honing a marble floor in Miami",
    nameEs: "Restauración de Mármol",
    h1Es: "Mármol restaurado — pulido, sellado, devuelto a su vida original.",
    shortDescriptionEs: "Pulido, reparación de rasguños y sellado para pisos y superficies de mármol.",
    metaTitleEs: "Restauración y Pulido de Mármol en Miami | ReNewIt Floors",
    metaDescriptionEs: "Pulido de mármol, reparación de rasguños y sellado en Miami. Devolviendo a la vida mármol opaco y manchado. Más de 30 años. Garantía de 1 año.",
    introEs: "El mármol está vivo — y con el tiempo, muestra el desgaste de la vida. Manchas de derrames ácidos, rasguños del tráfico, opacidad por limpieza inadecuada. Nada de eso es permanente.",
    bodyEs: "Restauramos pisos y superficies de mármol lijando mecánicamente con diamante a través del daño, luego abrillantando hasta el brillo de fábrica. Reparación de manchas, remoción de rasguños, realce de color y sellado — todo hecho en sitio, sin necesidad de remover el mármol.",
    methodNoteEs: "El mármol no necesita reemplazo cuando se daña. Necesita lijado — y un artesano que sepa leer la piedra.",
    imageAltEs: "Piso de mármol restaurado y pulido en una residencia de Miami",
    detailImageAltEs: "Artesano lijando con diamante un piso de mármol en Miami",
    scopeEs: [
      "Evaluación de la condición de la superficie",
      "Lijado con diamante (varios granos)",
      "Remoción de manchas y rasguños",
      "Abrillantado al brillo original",
      "Cristalización o sellado",
      "Realce de color (opcional)",
    ],
    processEs: [
      { title: "Evaluamos", description: "Identificamos el tipo de daño — manchas, rasguños, opacidad — y plan de tratamiento." },
      { title: "Lijamos", description: "Lijado con diamante a través del daño hasta llegar a mármol fresco." },
      { title: "Abrillantamos", description: "El abrillantado progresivo devuelve el brillo." },
      { title: "Protegemos", description: "Sellador o cristalizador cierra el acabado." },
    ],
    faqsEs: [
      { q: "¿De verdad se pueden remover los rasguños del mármol?", a: "Sí. El daño en el mármol no es realmente daño en la superficie — es profundidad. Lijamos hasta mármol fresco debajo del rasguño y luego volvemos a pulir. El rasguño desaparece." },
      { q: "¿Qué causa la opacidad del mármol?", a: "Manchas de sustancias ácidas (cítricos, vino, limpiadores), rasguños por tierra bajo los pies y limpiadores abrasivos que despojan el pulido. Todo restaurable." },
      { q: "¿También restauran encimeras y duchas de mármol?", a: "Sí — mismo proceso, escala más pequeña. Restauramos encimeras, paredes de duchas, vanidades y cualquier otra superficie de mármol en su casa." },
    ],
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
    detailImage: "/images/mexican-tile-sealing-process-miami.jpg",
    detailImageAlt: "Sealing penetrating sealer onto Saltillo tile in a Miami home",
    nameEs: "Restauración de Loseta Mexicana",
    h1Es: "Loseta mexicana y cubana — limpiada, sellada, restaurada con honestidad sobre los límites.",
    shortDescriptionEs: "Limpieza, sellado y restauración de pisos de loseta mexicana Saltillo y cubana.",
    metaTitleEs: "Restauración de Loseta Mexicana (Saltillo) en Miami | ReNewIt Floors",
    metaDescriptionEs: "Limpieza, sellado y restauración de loseta mexicana Saltillo y cubana en Miami. Honestos sobre lo que se puede y no se puede restaurar. Más de 30 años.",
    introEs: "La loseta mexicana Saltillo y la loseta cubana son clásicos del sur de la Florida. También son algunos de los pisos más frágiles que trabajamos — y le decimos directamente qué es posible antes de que gaste un dólar.",
    bodyEs: "La loseta mexicana es barro horneado por el sol con una cáscara exterior suave. Esa cáscara no es muy dura. Cuando se rompe o se gasta, no se puede restaurar por completo — pero sí se puede limpiar, sellar profundamente y proteger lo que queda. La loseta cubana es similar pero suele aguantar mejor. De cualquier manera, abordamos este trabajo con honestidad: le decimos qué podemos arreglar, qué no podemos y cómo lucirá su piso cuando terminemos.",
    methodNoteEs: "Cuando hacen las losetas mexicanas, las ponen en los campos y el sol forma la cáscara. Esa cáscara no es muy dura. El sol no son 500 grados. Somos honestos sobre los límites.",
    imageAltEs: "Piso de loseta mexicana Saltillo limpiado y sellado en Miami",
    detailImageAltEs: "Aplicando sellador penetrante a loseta Saltillo en una casa de Miami",
    scopeEs: [
      "Evaluación honesta de la condición",
      "Limpieza profunda de lechada y cara de loseta",
      "Tratamiento de manchas y removedor",
      "Reparación de grietas y astillas donde sea posible",
      "Sellador penetrante",
      "Sellador realzante o de color opcional",
    ],
    processEs: [
      { title: "Evaluamos", description: "Evaluación honesta — qué es posible, qué no." },
      { title: "Limpiamos", description: "Limpieza profunda de la cara de loseta, lechada y textura." },
      { title: "Reparamos", description: "Reparación puntual de grietas y astillas donde sea viable." },
      { title: "Sellamos", description: "Sellador penetrante cierra el acabado y protege." },
    ],
    faqsEs: [
      { q: "¿Se pueden reparar las losetas mexicanas rotas?", a: "A veces. Las astillas pequeñas y las grietas se pueden rellenar. Las losetas con cáscara rota generalmente no se pueden restaurar por completo — necesitan reemplazo. Le decimos cuál es cuál." },
      { q: "¿En qué se diferencia la loseta cubana de la mexicana?", a: "La loseta cubana (también llamada loseta hidráulica cubana) es una loseta de cemento más densa con patrones pintados. Suele aguantar mejor que la Saltillo y tiene más potencial de restauración." },
      { q: "¿Cuánto dura el sellador de loseta mexicana?", a: "Los selladores penetrantes en Saltillo suelen durar de 3 a 5 años antes de necesitar refrescarse, dependiendo del tráfico y las prácticas de limpieza." },
    ],
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
    nameEs: "Pisos de Piedra",
    h1Es: "Pisos de piedra natural — limpiados, sellados y restaurados con cuidado.",
    shortDescriptionEs: "Restauración de pisos de travertino, caliza, pizarra, granito y otras piedras naturales.",
    metaTitleEs: "Restauración de Pisos de Piedra Natural en Miami | ReNewIt Floors",
    metaDescriptionEs: "Restauración de pisos de piedra natural en Miami — travertino, caliza, pizarra, granito. Limpieza, sellado y pulido. Evaluación gratis.",
    introEs: "La piedra natural — travertino, caliza, pizarra, granito — cada una se comporta diferente. El cuidado correcto depende de conocer la piedra.",
    bodyEs: "Restauramos pisos de piedra natural con el mismo Método de Base Primero que aplicamos en todo: evaluamos la piedra, atendemos el daño, abrillantamos o lijamos al acabado apropiado, y luego protegemos. El travertino y la caliza son más suaves y porosos — necesitan manejo cuidadoso y los selladores correctos. El granito y la pizarra son más duros pero todavía se benefician de limpieza y sellado profesional.",
    methodNoteEs: "La piedra no es un solo material — es una categoría. Saber la diferencia entre travertino y caliza, o lijado y pulido, es la diferencia entre una gran restauración y un piso dañado.",
    imageAltEs: "Restauración de piso de piedra natural en una casa de Miami",
    scopeEs: [
      "Identificación y evaluación de la condición de la piedra",
      "Lijado o pulido con diamante según corresponda",
      "Reparación de manchas y rasguños",
      "Llenado de hoyos y agujeros (travertino)",
      "Sellador penetrante",
      "Realce de color si se desea",
    ],
    processEs: [
      { title: "Identificamos", description: "Confirmamos el tipo de piedra y la condición actual." },
      { title: "Restauramos", description: "Lijamos, pulimos o limpiamos según las necesidades de la piedra." },
      { title: "Protegemos", description: "Sellador penetrante adecuado a la piedra." },
      { title: "Mantenemos", description: "Recomendaciones de cuidado para mantener el piso luciendo bien." },
    ],
    faqsEs: [
      { q: "¿Se pueden llenar los hoyos del travertino?", a: "Sí. Usamos relleno de epoxi o lechada de color combinado, luego lijamos o pulimos al nivel. Hecho bien, la reparación es invisible." },
      { q: "¿Mi pizarra debería ser lijada o pulida?", a: "La pizarra suele ser lijada (mate) — pulir pizarra es poco común y a menudo inapropiado para la piedra. Combinamos el acabado original o su preferencia." },
    ],
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
    detailImage: "/images/hardwood-sanding-process-miami.jpg",
    detailImageAlt: "Drum sander refinishing oak hardwood floor in a Miami residence",
    nameEs: "Reacondicionamiento de Madera",
    h1Es: "Pisos de madera devueltos a su calidez original.",
    shortDescriptionEs: "Lijar, teñir y sellar pisos de madera para restaurar su carácter original.",
    metaTitleEs: "Reacondicionamiento de Pisos de Madera en Miami | ReNewIt Floors",
    metaDescriptionEs: "Lijado, teñido y sellado de pisos de madera en Miami — devolviendo a los pisos su calidez original. Garantía de 1 año.",
    introEs: "La mayoría de los pisos de madera se pueden reacondicionar varias veces durante su vida. Si el suyo está mostrando desgaste, rasguños u opacidad, el reacondicionamiento lo trae de regreso — generalmente a una fracción del costo de reemplazo.",
    bodyEs: "El reacondicionamiento involucra lijar hasta llegar a madera fresca, aplicar tinte si quiere cambiar o refrescar el color, y sellar con un acabado de poliuretano duradero. Trabajamos en la humedad del sur de la Florida, que agrega consideraciones que la mayoría de los contratistas pasa por alto — la expansión de la madera, los tiempos de curado y la selección de productos importan aquí.",
    methodNoteEs: "La humedad del sur de la Florida cambia cómo se comportan los pisos de madera. Ajustamos productos, tiempos y preparación según las condiciones — no según un proceso genérico.",
    imageAltEs: "Piso de madera de roble recién reacondicionado con tono cálido en Miami",
    detailImageAltEs: "Lijadora de tambor reacondicionando un piso de madera de roble en una residencia de Miami",
    scopeEs: [
      "Evaluación de la condición de la madera",
      "Lijado de varios granos (grueso a fino)",
      "Lijado de bordes alrededor de paredes y obstáculos",
      "Aplicación de tinte opcional",
      "Acabado de poliuretano de varias capas",
      "Pulido y limpieza final",
    ],
    processEs: [
      { title: "Evaluamos", description: "Confirmamos que la madera se puede reacondicionar y recomendamos el enfoque." },
      { title: "Lijamos", description: "Lijado de varios granos hasta madera fresca." },
      { title: "Teñimos", description: "Tinte opcional en el color de su elección." },
      { title: "Acabamos", description: "Poliuretano de varias capas para durabilidad." },
    ],
    faqsEs: [
      { q: "¿Cuántas veces se puede reacondicionar la madera?", a: "La mayoría de la madera sólida de ¾\" se puede reacondicionar de 4 a 7 veces durante su vida. La madera de ingeniería con una capa fina solo se puede reacondicionar 1 o 2 veces." },
      { q: "¿Cuánto tiempo estaré fuera del cuarto?", a: "Generalmente de 3 a 5 días desde el inicio hasta poder caminar. El curado completo para muebles toma más tiempo. Le damos un cronograma claro." },
      { q: "¿Puedo cambiar el color del tinte?", a: "Sí — una vez que lijamos hasta madera fresca, el piso acepta tinte nuevo. Ir más claro que el original es lo más difícil; ir más oscuro es más fácil." },
    ],
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
    nameEs: "Reparación de Loseta, Laminado y Vinilo",
    h1Es: "Reparación puntual — arreglando lo que está roto, no reemplazando lo que no.",
    shortDescriptionEs: "Reparación de loseta rota, laminado suelto, vinilo dañado y otros daños de piso.",
    metaTitleEs: "Reparación de Pisos de Loseta, Laminado y Vinilo en Miami | ReNewIt Floors",
    metaDescriptionEs: "Reparación puntual de loseta rota, laminado suelto y pisos de vinilo dañados en Miami. Evaluación honesta. Más de 30 años. Garantía de 1 año.",
    introEs: "Cuando unas losetas se rompen o una sección de laminado se levanta, no siempre necesita reemplazar todo el piso. La reparación puntual es más rápida, más barata y a menudo invisible.",
    bodyEs: "Reparamos losetas rotas (con losetas de reemplazo o relleno de color combinado), tablas de laminado sueltas, secciones de vinilo dañadas y otros problemas puntuales de pisos. El trabajo es honesto: si el daño es demasiado extendido o el sub-piso está fallando, le decimos directamente que la reparación no aguantará y le ayudamos a planear un arreglo real.",
    methodNoteEs: "A veces la respuesta correcta es reparación. A veces es reemplazo. Le decimos cuál — incluso cuando reparación significa menos trabajo para nosotros.",
    imageAltEs: "Reparación y limpieza de loseta y lechada en un piso de Miami",
    scopeEs: [
      "Evaluación del daño y viabilidad de reparación",
      "Reemplazo de loseta (si hay loseta combinada disponible)",
      "Llenado de grietas y astillas en loseta",
      "Recolocación o reemplazo de tablas de laminado",
      "Reemplazo de sección de vinilo",
      "Reparación de lechada y combinación de color",
    ],
    processEs: [
      { title: "Evaluamos", description: "Caminamos el daño, le damos la solución honesta." },
      { title: "Reparamos", description: "Arreglo puntual usando materiales combinados donde sea posible." },
      { title: "Combinamos", description: "Combinamos color de lechada y acabados para reparación invisible." },
      { title: "Listo", description: "La mayoría de las reparaciones terminan en medio día a un día." },
    ],
    faqsEs: [
      { q: "¿La reparación será invisible?", a: "Generalmente sí — cuando hay materiales combinados disponibles. El reemplazo de loseta puede mostrar diferencias ligeras si la loseta original ha envejecido. Establecemos expectativas realistas antes de empezar." },
      { q: "¿Y si no tengo losetas de reemplazo combinadas?", a: "A menudo podemos conseguir combinaciones cercanas de proveedores, o usar relleno de epoxi de color combinado para astillas pequeñas. Para daños más grandes sin combinación, puede necesitarse reemplazo de una sección más amplia." },
    ],
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
    nameEs: "Limpieza de Pisos Industriales y de Almacenes",
    h1Es: "Pisos industriales restaurados a gran escala — sin atajos.",
    shortDescriptionEs: "Limpieza, pulido y sellado de pisos industriales y de almacenes a gran escala.",
    metaTitleEs: "Restauración de Pisos Industriales y de Almacenes en Miami | ReNewIt Floors",
    metaDescriptionEs: "Limpieza, pulido y sellado de pisos industriales y de almacenes a gran escala en Miami — Doral, Medley y por todo el sur de la Florida. Visita gratis al sitio.",
    introEs: "Los pisos de almacenes e industriales reciben más abuso que cualquier otra superficie que trabajamos. Tráfico de montacargas, derrames químicos, polvo encerrado, años de desgaste — y la mayoría nunca ha tenido mantenimiento adecuado.",
    bodyEs: "Llevamos equipo de grado industrial y el mismo Método de Base Primero a proyectos comerciales y de almacén. Concreto pulido, sistemas de epoxi y restauración completa de espacios de gran metraje cuadrado. Programamos alrededor de su operación, trabajamos por fases cuando es necesario, y le damos a los administradores de propiedades y operadores de instalaciones la clase de comunicación clara y ejecución confiable que es rara en el mundo de la contratación.",
    methodNoteEs: "Un piso de almacén de 15,000 pies cuadrados necesita la misma disciplina de preparación que un vestíbulo en Coral Gables. Escala no significa atajos.",
    imageAltEs: "Piso de concreto pulido en almacén industrial de Miami",
    scopeEs: [
      "Evaluación del sitio y planificación del proyecto",
      "Programación por fases alrededor de la operación",
      "Pulido con diamante de grado industrial",
      "Reparación de grietas, llenado de juntas y preparación de superficie",
      "Sistema de pulido, epoxi o sellador según se especifique",
      "Líneas y marcas de tráfico (si se necesitan)",
    ],
    processEs: [
      { title: "Visita al Sitio", description: "Caminamos la instalación, entendemos la operación, definimos el proyecto." },
      { title: "Planeamos", description: "Cronograma por fases que encaja con su operación." },
      { title: "Ejecutamos", description: "Equipo industrial, equipo profesional, restauración completa." },
      { title: "Mantenemos", description: "Programa de mantenimiento opcional para instalaciones de alto tráfico." },
    ],
    faqsEs: [
      { q: "¿Pueden trabajar alrededor de nuestra operación?", a: "Sí. Regularmente hacemos proyectos grandes por fases para evitar paros completos — trabajando secciones a la vez, noches o fines de semana según lo requiera su operación." },
      { q: "¿Cuál es la vida útil del concreto pulido en un almacén?", a: "El concreto correctamente pulido y densificado en almacén dura más de 15 a 20 años con mantenimiento mínimo, incluso bajo tráfico pesado de montacargas." },
      { q: "¿Manejan requisitos de cumplimiento y seguridad para sitios industriales?", a: "Sí. Tenemos seguro comercial completo, cumplimos con los requisitos de OSHA en sitio y coordinamos con los oficiales de seguridad de la instalación." },
    ],
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
