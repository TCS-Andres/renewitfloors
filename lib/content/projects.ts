/**
 * Featured project case studies. Photography pulled from the existing
 * renewitfloorsmiami.com asset library and SEO-renamed.
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
  imageAlt: string; // Alt text for SEO
  featured: boolean;
  titleEs?: string;
  serviceEs?: string;
  excerptEs?: string;
  storyEs?: string;
  imageAltEs?: string;
  categoryEs?: string;
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
    image: "/images/terrazzo-floor-restoration-miami-fl.jpg",
    imageAlt: "Original 1940s terrazzo floor restored in Coral Gables, Miami",
    featured: true,
    titleEs: "Terrazo Original de los Años 40 Devuelto a la Vida",
    serviceEs: "Restauración de Terrazo",
    categoryEs: "Residencial",
    excerptEs: "Terrazo original escondido bajo loseta y alfombra por sesenta años — restaurado a un acabado pulido espejo, suave como vidrio.",
    storyEs: "Cuando los dueños levantaron su loseta de los 80s, no sabían qué encontrarían debajo. Nosotros sí. Después de tres días de pulido con diamante atravesando décadas de pegamento y acabado viejo, salió a la luz el terrazo original de los años 40 — chips de mármol fundidos en cemento, así como se construían las casas de Miami antes. Le hicimos algunas reparaciones pequeñas con color combinado, pulimos progresivamente hasta llegar a un brillo de 3000 grit y sellamos con un densificador penetrante. El piso luce mejor que el día en que se vació.",
    imageAltEs: "Piso de terrazo original de los años 40 restaurado en una casa de Coral Gables, Miami",
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
    image: "/images/concrete-epoxy-floor-system-miami.jpg",
    imageAlt: "Mirror-finish polished concrete floor in a Pinecrest, Miami home",
    featured: true,
    titleEs: "Concreto Pulido con Acabado Espejo",
    serviceEs: "Concreto Pulido",
    categoryEs: "Residencial",
    excerptEs: "Una casa de construcción nueva en Pinecrest con losa cruda — terminada con siete pulidos progresivos hasta un acabado satinado-espejo.",
    storyEs: "El concreto de construcción nueva luce áspero — gris, polvoriento, con variaciones de superficie que pueden arruinar cualquier acabado. Evaluamos la losa, planeamos la secuencia de pulido y trabajamos siete pasadas progresivas con diamante. El dueño quería satinado, no alto brillo — paramos en grit 1500, aplicamos un densificador de litio y sellamos. El resultado es la clase de piso por el que se camina descalzo durante los próximos veinte años.",
    imageAltEs: "Piso de concreto pulido con acabado espejo en una casa de Pinecrest, Miami",
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
    image: "/images/industrial-warehouse-floor-restoration-miami.jpg",
    imageAlt: "Restored industrial warehouse concrete floor in Doral, Miami",
    featured: true,
    titleEs: "Piso de Almacén, Restaurado y Sellado",
    serviceEs: "Limpieza de Pisos Industriales",
    categoryEs: "Comercial",
    excerptEs: "Almacén de 12,000 pies cuadrados — veinte años de desgaste de montacargas, manchas de aceite y falla de superficie. Restauración por fases en tres fines de semana.",
    storyEs: "El gerente de la instalación nos llamó porque el piso estaba soltando polvo malo — cada pasada de montacargas levantaba una nube y el producto se ensuciaba. Cotizamos el trabajo en tres fines de semana para que la operación nunca parara. Cada fin de semana atendíamos 4,000 pies cuadrados: pulido con diamante, reparación de juntas, densificación y un acabado pulido. Al final de la tercera semana el almacén tenía un piso limpio, sellado y libre de polvo — y un plan de mantenimiento para mantenerlo así.",
    imageAltEs: "Piso de concreto restaurado en un almacén industrial de Doral, Miami",
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
    image: "/images/marble-floor-restoration-miami.jpg",
    imageAlt: "Restored polished marble lobby floor in Brickell, Miami",
    featured: false,
    titleEs: "Restauración de Vestíbulo de Mármol",
    serviceEs: "Restauración de Mármol",
    categoryEs: "Comercial",
    excerptEs: "Vestíbulo de condominio de alto tráfico en Brickell con veinte años de marcas de pisadas — restaurado al brillo de fábrica.",
    storyEs: "A la asociación de propietarios le habían dicho que tenían que reemplazar el mármol. No tenían que hacerlo. Lijamos con diamante atravesando las marcas, removimos los rasguños de años de tierra bajo los zapatos y devolvimos el mármol a su acabado pulido original. Tiempo total: cuatro días, trabajo de fin de semana, sin cerrar el vestíbulo. Costo: una fracción del reemplazo.",
    imageAltEs: "Piso de mármol pulido restaurado en un vestíbulo de Brickell, Miami",
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
    image: "/images/mexican-saltillo-tile-restoration-miami.jpg",
    imageAlt: "Cleaned and sealed Mexican Saltillo tile floor in Miami Lakes",
    featured: false,
    titleEs: "Loseta Mexicana Saltillo Renovada",
    serviceEs: "Restauración de Loseta Mexicana",
    categoryEs: "Residencial",
    excerptEs: "Pisos de loseta Saltillo de los años 90 — desnudados, limpiados profundamente, sellados. Evaluación honesta de qué se podía restaurar y qué no.",
    storyEs: "El dueño estaba listo para arrancar todo. Le dijimos directamente: la mayoría de la loseta era salvable, pero unas secciones tenían la cáscara rota y no podíamos restaurarlas por completo. Reemplazamos las peores con piezas que conseguimos similares, limpiamos profundamente el resto y sellamos el piso con un sellador penetrante realzante. Ahorraron miles y conservaron el carácter de la casa.",
    imageAltEs: "Piso de loseta mexicana Saltillo limpiado y sellado en Miami Lakes",
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
    image: "/images/garage-epoxy-flooring-miami.jpg",
    imageAlt: "Garage epoxy floor with chip flake finish in Weston",
    featured: false,
    titleEs: "Epoxi de Garaje Que No Se Despega",
    serviceEs: "Epoxi para Garaje",
    categoryEs: "Residencial",
    excerptEs: "Garaje de tres autos — el trabajo de epoxi anterior de otro contratista falló en ocho meses. Pulido con diamante hasta el concreto desnudo y reconstruido bien.",
    storyEs: "El primer trabajo de epoxi del cliente duró ocho meses antes de levantarse cerca de la puerta del garaje. Lijamos el recubrimiento fallido, llevamos la losa de regreso al concreto desnudo, reparamos las marcas de llantas calientes y construimos un sistema de epoxi de varias capas con escamas decorativas y un acabado superior estable a los rayos UV. Tres años después el piso luce como el día en que terminamos.",
    imageAltEs: "Piso de epoxi para garaje con escamas decorativas en una casa de Weston",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
