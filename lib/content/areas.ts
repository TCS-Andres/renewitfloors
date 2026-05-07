export type ServiceArea = {
 county: string;
 countySlug: string;
 intro: string;
 signatureWork: string;
 cities: string[];
 topServices: { name: string; slug: string }[];
 countyEs?: string;
 introEs?: string;
 signatureWorkEs?: string;
 topServicesEs?: { name: string; slug: string }[];
};

export const serviceAreas: ServiceArea[] = [
 {
 county: "Miami-Dade",
 countySlug: "miami-dade",
 intro:
 "We've restored more floors in Miami-Dade than we can count. From original 1940s terrazzo in Coral Gables to polished concrete in modern Brickell condos and Mexican tile in older neighborhoods like Coconut Grove, this is home turf.",
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
 countyEs: "Miami-Dade",
 introEs: "Hemos restaurado más pisos en Miami-Dade que los que podemos contar. Desde terrazo original de los años 40 en Coral Gables hasta concreto pulido en condominios modernos de Brickell y loseta mexicana en barrios viejos como Coconut Grove, esta es nuestra casa.",
 signatureWorkEs: "Restauración de terrazo histórico, mármol y loseta mexicana/cubana.",
 },
 {
 county: "Broward",
 countySlug: "broward",
 intro:
 "Broward homes and businesses bring their own mix, from Fort Lauderdale waterfront properties to Weston and Pembroke Pines residential, plus growing commercial work in Davie and Hollywood. We make the drive.",
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
 countyEs: "Broward",
 introEs: "Las casas y negocios de Broward traen su propia mezcla, desde propiedades frente al agua en Fort Lauderdale hasta zonas residenciales en Weston y Pembroke Pines, más trabajo comercial creciente en Davie y Hollywood. Hacemos el viaje.",
 signatureWorkEs: "Vestíbulos de mármol, epoxi de garaje, reacondicionamiento de madera residencial.",
 },
 {
 county: "Palm Beach",
 countySlug: "palm-beach",
 intro:
 "Palm Beach work is mostly high-end residential, Boca Raton condos, West Palm marble lobbies. We accept select projects in this region, with the same hands-on standard we apply everywhere.",
 signatureWork: "High-end marble and stone restoration.",
 cities: ["Boca Raton", "West Palm Beach"],
 topServices: [
 { name: "Marble Restoration", slug: "marble-restoration" },
 { name: "Stone Flooring", slug: "stone-flooring" },
 { name: "Concrete Polishing", slug: "concrete-polishing" },
 ],
 countyEs: "Palm Beach",
 introEs: "El trabajo en Palm Beach es principalmente residencial de alto nivel, condominios de Boca Raton, vestíbulos de mármol en West Palm. Aceptamos proyectos selectos en esta región, con el mismo estándar manual que aplicamos en todas partes.",
 signatureWorkEs: "Restauración de mármol y piedra de alto nivel.",
 },
 {
 county: "Monroe",
 countySlug: "monroe",
 intro:
 "Yes, we travel to the Keys. The salt air and humidity put unique wear on Keys floors, we know how to handle it.",
 signatureWork: "Coastal-tough sealing, marble, and concrete restoration.",
 cities: ["Key Largo", "Key West"],
 topServices: [
 { name: "Concrete Sealing", slug: "concrete-sealing" },
 { name: "Marble Restoration", slug: "marble-restoration" },
 { name: "Concrete Polishing", slug: "concrete-polishing" },
 ],
 countyEs: "Monroe",
 introEs: "Sí, viajamos a los Cayos. El aire salado y la humedad ponen un desgaste único en los pisos de los Cayos, sabemos cómo manejarlo.",
 signatureWorkEs: "Sellado resistente a la costa, restauración de mármol y concreto.",
 },
];

// =============================================================================
// City-level service area pages (currently Miami-Dade, others can be added)
// =============================================================================

export type ServiceCity = {
 slug: string;
 name: string;
 county: string;
 countySlug: string;
 /** 1-2 sentence intro (used in hero) */
 intro: string;
 /** ~150-word local story, what's unique about this neighborhood's floors */
 localStory: string;
 /** Top 4-6 service slugs most relevant here */
 topServiceSlugs: string[];
 /** Other city slugs to cross-link */
 nearbyCitySlugs: string[];
 /** Project slugs that took place in this city */
 relatedProjectSlugs?: string[];
 metaTitle: string;
 metaDescription: string;
 /** City-specific 4K hero image (16:9) */
 cityImage: string;
 cityImageAlt: string;
 // Spanish translations (optional, fall back to English when missing)
 countyEs?: string;
 introEs?: string;
 localStoryEs?: string;
 metaTitleEs?: string;
 metaDescriptionEs?: string;
 cityImageAltEs?: string;
};

export const cities: ServiceCity[] = [
 {
 slug: "coral-gables",
 name: "Coral Gables",
 county: "Miami-Dade",
 countySlug: "miami-dade",
 intro:
 "Coral Gables is the heart of historic Miami floors. The Mediterranean Revival homes lining Coral Way, Riviera Drive, and the Granada district often hide original 1920s and 1940s terrazzo under decades of carpet, tile, and wood.",
 localStory:
 "When George Merrick laid out Coral Gables a hundred years ago, he built the city to last, and the floors he commissioned for these homes have outlasted everything else in them. We've worked on Mediterranean Revival originals where the homeowners had no idea their carpeted hallways were sitting on cream-and-marble terrazzo. We've restored Cuban tile in 1930s bungalows and polished marble entryways that hadn't been honed since the Eisenhower administration. Coral Gables historic-zoning rules make restoration the smart move, and we know the old surfaces well enough to tell you straight what's possible before any work begins.",
 topServiceSlugs: [
 "terrazzo-restoration",
 "marble-restoration",
 "mexican-tile-restoration",
 "concrete-polishing",
 "hardwood-refinishing",
 ],
 nearbyCitySlugs: ["coconut-grove", "miami", "brickell"],
 relatedProjectSlugs: ["1940s-terrazzo-coral-gables"],
 metaTitle: "Floor Restoration in Coral Gables, FL | ReNewIt Floors",
 metaDescription:
 "Floor restoration in Coral Gables, historic terrazzo, marble, Cuban and Mexican tile. Family-owned, 30+ years restoring Mediterranean Revival and historic homes. Free assessment.",
 cityImage: "/images/city-coral-gables-mediterranean-revival.jpg",
 cityImageAlt: "Mediterranean Revival home with red-tile roof and original terrazzo entrance in Coral Gables, Miami",
 countyEs: "Miami-Dade",
 introEs: "Coral Gables es el corazón de los pisos históricos de Miami. Las casas estilo Mediterranean Revival que bordean Coral Way, Riviera Drive y el distrito de Granada esconden a menudo terrazo original de los años 1920 y 40 bajo décadas de alfombra, loseta y madera.",
 localStoryEs: "Cuando George Merrick trazó Coral Gables hace cien años, construyó la ciudad para que durara, y los pisos que encargó para estas casas han sobrevivido todo lo demás en ellas. Hemos trabajado en originales Mediterranean Revival donde los dueños no tenían idea de que sus pasillos alfombrados estaban sobre terrazo de mármol y crema. Hemos restaurado loseta cubana en bungalows de los años 30 y vestíbulos de mármol pulido que no se habían lijado desde la administración de Eisenhower. Las reglas de zonificación histórica de Coral Gables hacen que la restauración sea la jugada inteligente, y conocemos las superficies viejas lo suficiente para decirle directamente qué es posible antes de que comience cualquier trabajo.",
 metaTitleEs: "Restauración de Pisos en Coral Gables, FL | ReNewIt Floors",
 metaDescriptionEs: "Restauración de pisos en Coral Gables, terrazo histórico, mármol, loseta cubana y mexicana. De propiedad familiar, más de 30 años restaurando casas históricas Mediterranean Revival. Evaluación gratis.",
 cityImageAltEs: "Casa Mediterranean Revival con tejas rojas y entrada de terrazo original en Coral Gables, Miami",
 },
 {
 slug: "brickell",
 name: "Brickell",
 county: "Miami-Dade",
 countySlug: "miami-dade",
 intro:
 "Brickell's high-rises and luxury condos have some of the most beautiful marble lobbies and polished concrete units in South Florida. We restore them all, without closing the building down.",
 localStory:
 "Brickell HOAs and condo boards know the math: replacing a 5,000-square-foot marble lobby costs more than a small house and shuts down the building for weeks. Restoration takes a long weekend and costs a fraction. We've worked with HOAs from Brickell Key down to The Roads, brought back high-traffic marble that took twenty years of foot traffic, and polished concrete in luxury units after the construction crew left. Most of our Brickell jobs run nights and weekends to keep residents and retail happy. We're licensed, insured, and used to the documentation buildings need.",
 topServiceSlugs: [
 "marble-restoration",
 "concrete-polishing",
 "concrete-epoxy-systems",
 "terrazzo-restoration",
 "industrial-warehouse-floor-cleaning",
 ],
 nearbyCitySlugs: ["downtown-miami", "coconut-grove", "miami"],
 relatedProjectSlugs: ["marble-lobby-brickell"],
 metaTitle: "Floor Restoration in Brickell, Miami | ReNewIt Floors",
 metaDescription:
 "Marble, polished concrete, and lobby restoration in Brickell. HOA-friendly scheduling, licensed and insured. 30+ years restoring Brickell condos and commercial floors. Free assessment.",
 cityImage: "/images/city-brickell-marble-highrise-lobby.jpg",
 cityImageAlt: "Polished marble lobby of a luxury Brickell, Miami high-rise with bay views",
 countyEs: "Miami-Dade",
 introEs: "Los rascacielos y condominios de lujo de Brickell tienen algunos de los vestíbulos de mármol y unidades de concreto pulido más bonitos del sur de la Florida. Los restauramos todos, sin cerrar el edificio.",
 localStoryEs: "Las asociaciones y juntas de condominios de Brickell saben los números: reemplazar un vestíbulo de mármol de 5,000 pies cuadrados cuesta más que una casa pequeña y cierra el edificio por semanas. La restauración toma un fin de semana largo y cuesta una fracción. Hemos trabajado con asociaciones desde Brickell Key hasta The Roads, recuperado mármol de alto tráfico que aguantó veinte años de pisadas y pulido concreto en unidades de lujo después de que los constructores se fueron. La mayoría de nuestros trabajos en Brickell se hacen de noche y los fines de semana para no molestar a residentes ni locales. Estamos licenciados, asegurados y acostumbrados a la documentación que los edificios necesitan.",
 metaTitleEs: "Restauración de Pisos en Brickell, Miami | ReNewIt Floors",
 metaDescriptionEs: "Restauración de mármol, concreto pulido y vestíbulos en Brickell. Programación amigable con asociaciones, licenciados y asegurados. Más de 30 años restaurando condominios y pisos comerciales de Brickell. Evaluación gratis.",
 cityImageAltEs: "Vestíbulo de mármol pulido de un rascacielos de lujo en Brickell, Miami con vista a la bahía",
 },
 {
 slug: "pinecrest",
 name: "Pinecrest",
 county: "Miami-Dade",
 countySlug: "miami-dade",
 intro:
 "Pinecrest's sprawling estates and modern homes call for floors built to handle real life, and the South Florida sun that wears down anything not finished correctly the first time.",
 localStory:
 "Pinecrest's housing stock skews newer and bigger, large lots, four-car garages, and primary residences with poured concrete that homeowners want polished or sealed instead of carpeted. We do a lot of polished concrete here, and even more garage epoxy: most builders pour rough slabs that look fine for the walk-through and start dusting six months later. Diamond grinding fixes that. We also see plenty of hardwood refinishing in the older central Pinecrest streets, where homes built in the seventies still have the original oak and just need a sand-and-finish to come back to life.",
 topServiceSlugs: [
 "concrete-polishing",
 "garage-epoxy-flooring",
 "hardwood-refinishing",
 "concrete-sealing",
 "marble-restoration",
 ],
 nearbyCitySlugs: ["palmetto-bay", "kendall", "coral-gables"],
 relatedProjectSlugs: ["polished-concrete-pinecrest"],
 metaTitle: "Floor Restoration in Pinecrest, FL | ReNewIt Floors",
 metaDescription:
 "Polished concrete, garage epoxy, and hardwood refinishing in Pinecrest. Residential floor restoration with a 1-year warranty. 30+ years. Free assessment.",
 cityImage: "/images/city-pinecrest-modern-estate.jpg",
 cityImageAlt: "Modern Pinecrest estate with polished concrete driveway and epoxy garage floor",
 countyEs: "Miami-Dade",
 introEs: "Las grandes propiedades y casas modernas de Pinecrest piden pisos hechos para aguantar la vida real, y el sol del sur de la Florida que desgasta cualquier cosa que no se termine bien la primera vez.",
 localStoryEs: "El parque habitacional de Pinecrest tiende a ser más nuevo y grande, lotes amplios, garajes para cuatro autos y residencias principales con concreto vaciado que los dueños quieren pulido o sellado en vez de alfombrado. Hacemos mucho concreto pulido aquí, y aún más epoxi para garaje: la mayoría de los constructores vacía losas ásperas que lucen bien para el día del cierre y empiezan a soltar polvo a los seis meses. El pulido con diamante arregla eso. También vemos bastante reacondicionamiento de madera en las calles más antiguas del centro de Pinecrest, donde las casas construidas en los setenta todavía tienen el roble original y solo necesitan un lijado y acabado para volver a la vida.",
 metaTitleEs: "Restauración de Pisos en Pinecrest, FL | ReNewIt Floors",
 metaDescriptionEs: "Concreto pulido, epoxi de garaje y reacondicionamiento de madera en Pinecrest. Restauración de pisos residenciales con garantía de 1 año. Más de 30 años. Evaluación gratis.",
 cityImageAltEs: "Propiedad moderna en Pinecrest con entrada de concreto pulido y piso de epoxi en el garaje",
 },
 {
 slug: "doral",
 name: "Doral",
 county: "Miami-Dade",
 countySlug: "miami-dade",
 intro:
 "Doral's industrial parks, warehouses, and office market need polished concrete that handles forklift traffic without dusting, and presents well when the regional VP walks the floor.",
 localStory:
 "Doral is where we put our biggest equipment to work. Logistics warehouses pushing fifteen, twenty, thirty thousand square feet. Distribution centers along NW 41st Street where the floor was poured raw and never sealed. Office buildings off the Palmetto. We phase these projects around your operations, nights, weekends, sectional shutdowns, so the work gets done without halting the business. Polished concrete lasts longer in industrial settings than any other finish, and properly densified slabs stop the dust that ruins inventory and breaks equipment seals. We also handle restaurant and retail concrete in the new mixed-use developments around Downtown Doral.",
 topServiceSlugs: [
 "industrial-warehouse-floor-cleaning",
 "concrete-polishing",
 "concrete-epoxy-systems",
 "concrete-sealing",
 "garage-epoxy-flooring",
 ],
 nearbyCitySlugs: ["miami-lakes", "miami", "kendall"],
 relatedProjectSlugs: ["warehouse-floor-doral"],
 metaTitle: "Industrial Floor Restoration in Doral, FL | ReNewIt Floors",
 metaDescription:
 "Warehouse polished concrete, epoxy systems, and industrial floor cleaning in Doral. Phased scheduling around operations. Licensed, insured, OSHA-aware. Free site visit.",
 cityImage: "/images/city-doral-business-park-warehouse.jpg",
 cityImageAlt: "Industrial business park warehouse with polished concrete loading dock in Doral, Miami",
 countyEs: "Miami-Dade",
 introEs: "Los parques industriales, almacenes y mercado de oficinas de Doral necesitan concreto pulido que aguante el tráfico de montacargas sin levantar polvo, y que se vea bien cuando el vicepresidente regional camine el piso.",
 localStoryEs: "Doral es donde ponemos nuestro equipo más grande a trabajar. Almacenes de logística empujando quince, veinte, treinta mil pies cuadrados. Centros de distribución a lo largo de la NW 41st Street donde la losa se vació cruda y nunca se selló. Edificios de oficinas saliendo del Palmetto. Programamos estos proyectos alrededor de la operación, noches, fines de semana, cierres por sección, para que el trabajo se haga sin parar el negocio. El concreto pulido dura más en ambientes industriales que cualquier otro acabado, y las losas correctamente densificadas detienen el polvo que arruina inventario y rompe sellos de equipo. También manejamos concreto de restaurantes y locales en los nuevos desarrollos de uso mixto alrededor del Downtown Doral.",
 metaTitleEs: "Restauración de Pisos Industriales en Doral, FL | ReNewIt Floors",
 metaDescriptionEs: "Concreto pulido para almacenes, sistemas de epoxi y limpieza de pisos industriales en Doral. Programación por fases alrededor de la operación. Licenciados, asegurados, conscientes de OSHA. Visita gratis al sitio.",
 cityImageAltEs: "Almacén de un parque industrial con muelle de carga de concreto pulido en Doral, Miami",
 },
 {
 slug: "miami-beach",
 name: "Miami Beach",
 county: "Miami-Dade",
 countySlug: "miami-dade",
 intro:
 "Miami Beach floors carry history. Art Deco terrazzo in 1930s buildings, Cuban tile in South of Fifth bungalows, modern marble in the Collins Avenue high-rises, every one with its own restoration story.",
 localStory:
 "Salt air is hard on floors, and Miami Beach has plenty of it. Sealers fail faster here, marble etches faster, and unfinished concrete absorbs moisture year-round. We pick products that hold up to coastal conditions and apply them after the right prep, the only way they last. We've restored Art Deco terrazzo in original South Beach hotels, brought back Cuban hydraulic tile in homes south of Fifth, and polished concrete in lofts converted from older buildings on Lincoln Road. Hospitality and retail floors here see thousands of feet a day; we schedule around peak hours so the work doesn't show up in your reviews.",
 topServiceSlugs: [
 "terrazzo-restoration",
 "marble-restoration",
 "mexican-tile-restoration",
 "concrete-polishing",
 "concrete-sealing",
 ],
 nearbyCitySlugs: ["downtown-miami", "brickell", "miami"],
 metaTitle: "Floor Restoration in Miami Beach, FL | ReNewIt Floors",
 metaDescription:
 "Art Deco terrazzo, Cuban tile, marble, and concrete restoration in Miami Beach. Coastal-tough finishes, hospitality-friendly scheduling. 30+ years. Free assessment.",
 cityImage: "/images/city-miami-beach-art-deco-terrazzo.jpg",
 cityImageAlt: "Art Deco hotel lobby with restored geometric terrazzo floor in Miami Beach",
 countyEs: "Miami-Dade",
 introEs: "Los pisos de Miami Beach cargan historia. Terrazo Art Deco en edificios de los años 30, loseta cubana en bungalows del South of Fifth, mármol moderno en los rascacielos de Collins Avenue, cada uno con su propia historia de restauración.",
 localStoryEs: "El aire salado es duro con los pisos, y a Miami Beach le sobra. Los selladores fallan más rápido aquí, el mármol se mancha más rápido, y el concreto sin acabado absorbe humedad todo el año. Escogemos productos que aguantan condiciones de costa y los aplicamos después de la preparación correcta, la única forma de que duren. Hemos restaurado terrazo Art Deco en hoteles originales del South Beach, recuperado loseta hidráulica cubana en casas al sur de la Quinta y pulido concreto en lofts convertidos de edificios viejos sobre Lincoln Road. Los pisos de hospitalidad y locales aquí ven miles de pisadas al día; programamos alrededor de las horas pico para que el trabajo no aparezca en sus reseñas.",
 metaTitleEs: "Restauración de Pisos en Miami Beach, FL | ReNewIt Floors",
 metaDescriptionEs: "Restauración de terrazo Art Deco, loseta cubana, mármol y concreto en Miami Beach. Acabados resistentes a la costa, programación amigable con la hospitalidad. Más de 30 años. Evaluación gratis.",
 cityImageAltEs: "Vestíbulo de hotel Art Deco con piso de terrazo geométrico restaurado en Miami Beach",
 },
 {
 slug: "kendall",
 name: "Kendall",
 county: "Miami-Dade",
 countySlug: "miami-dade",
 intro:
 "Kendall covers a vast piece of Miami-Dade and a wide range of homes, from 1960s ranches to 1990s townhomes to brand-new builds along Krome Avenue. Every floor type, every era.",
 localStory:
 "If we drew a Venn diagram of Kendall floors, it would have everything in it: original Mexican Saltillo in older Hammocks homes, oak hardwood in the eighties developments, ceramic tile through the nineties communities, and polished concrete in the new construction along the western edge. We do a lot of targeted repair here, a few cracked tiles, a section of laminate that lifted, a hardwood patch where a refrigerator leaked. When repair is the right answer, we tell you. When it isn't, we tell you that too. Honest assessments are how we've kept getting referred across this neighborhood for thirty years.",
 topServiceSlugs: [
 "tile-laminate-vinyl-repair",
 "hardwood-refinishing",
 "concrete-polishing",
 "garage-epoxy-flooring",
 "mexican-tile-restoration",
 ],
 nearbyCitySlugs: ["pinecrest", "palmetto-bay", "miami"],
 metaTitle: "Floor Restoration in Kendall, FL | ReNewIt Floors",
 metaDescription:
 "Tile, hardwood, concrete, and Mexican tile restoration in Kendall. Honest assessments, repair or replace, we'll tell you straight. 30+ years. Free quote.",
 cityImage: "/images/city-kendall-suburban-home.jpg",
 cityImageAlt: "Comfortable Kendall, Miami suburban home with hardwood and tile floors",
 countyEs: "Miami-Dade",
 introEs: "Kendall cubre una pieza vasta de Miami-Dade y un rango amplio de casas, desde ranchos de los años 60 hasta townhomes de los 90 hasta construcciones nuevas a lo largo de Krome Avenue. Cada tipo de piso, cada época.",
 localStoryEs: "Si dibujáramos un diagrama de Venn de los pisos de Kendall, tendría todo dentro: Saltillo mexicano original en casas viejas de Hammocks, madera de roble en los desarrollos de los ochenta, loseta de cerámica por las comunidades de los noventa, y concreto pulido en la construcción nueva del borde occidental. Hacemos mucha reparación puntual aquí, unas losetas rotas, una sección de laminado que se levantó, un parche de madera donde una nevera goteó. Cuando la reparación es la respuesta correcta, se lo decimos. Cuando no lo es, también se lo decimos. Las evaluaciones honestas son cómo nos han seguido refiriendo por todo este barrio durante treinta años.",
 metaTitleEs: "Restauración de Pisos en Kendall, FL | ReNewIt Floors",
 metaDescriptionEs: "Restauración de loseta, madera, concreto y loseta mexicana en Kendall. Evaluaciones honestas, reparar o reemplazar, le decimos directamente. Más de 30 años. Presupuesto gratis.",
 cityImageAltEs: "Casa suburbana en Kendall, Miami con pisos de madera y loseta",
 },
 {
 slug: "coconut-grove",
 name: "Coconut Grove",
 county: "Miami-Dade",
 countySlug: "miami-dade",
 intro:
 "The Grove's older homes, set under banyans and royal poincianas, often have original Cuban tile, Saltillo, or terrazzo waiting to be brought back to life.",
 localStory:
 "Coconut Grove is the oldest continuously inhabited neighborhood in Miami, and it shows in the floors. Cuban hydraulic tile with painted patterns from the thirties. Mexican Saltillo in cottages tucked behind century-old hardwood canopies. Terrazzo in mid-century moderns east of US-1. Restoration matters more here than almost anywhere else in the county, these floors are part of why people love the Grove. We approach this work with care and honesty: some Saltillo with broken-through shells can't be fully restored, but most can be cleaned and sealed back to life. We tell you what's possible before we move a single piece of furniture.",
 topServiceSlugs: [
 "mexican-tile-restoration",
 "terrazzo-restoration",
 "marble-restoration",
 "hardwood-refinishing",
 "concrete-polishing",
 ],
 nearbyCitySlugs: ["coral-gables", "miami", "brickell"],
 relatedProjectSlugs: ["1940s-terrazzo-coral-gables"],
 metaTitle: "Floor Restoration in Coconut Grove, Miami | ReNewIt Floors",
 metaDescription:
 "Historic Cuban tile, Saltillo, terrazzo, and hardwood restoration in Coconut Grove. Honest about what can be saved. 30+ years. Family-owned. Free assessment.",
 cityImage: "/images/city-coconut-grove-cuban-tile-bungalow.jpg",
 cityImageAlt: "Historic Coconut Grove bungalow with original Cuban hydraulic tile floor",
 countyEs: "Miami-Dade",
 introEs: "Las casas viejas de El Grove, bajo banyans y royal poincianas, tienen a menudo loseta cubana original, Saltillo o terrazo esperando a ser devueltos a la vida.",
 localStoryEs: "Coconut Grove es el barrio habitado continuamente más viejo de Miami, y se nota en los pisos. Loseta hidráulica cubana con patrones pintados de los años treinta. Saltillo mexicano en cabañas escondidas detrás de copas centenarias de árboles. Terrazo en mid-century modernos al este de la US-1. La restauración importa más aquí que casi en ningún otro lugar del condado, estos pisos son parte de por qué la gente ama El Grove. Abordamos este trabajo con cuidado y honestidad: algunos Saltillo con la cáscara rota no se pueden restaurar por completo, pero la mayoría se puede limpiar y sellar para devolverle vida. Le decimos qué es posible antes de mover un solo mueble.",
 metaTitleEs: "Restauración de Pisos en Coconut Grove, Miami | ReNewIt Floors",
 metaDescriptionEs: "Restauración histórica de loseta cubana, Saltillo, terrazo y madera en Coconut Grove. Honestos sobre qué se puede salvar. Más de 30 años. De propiedad familiar. Evaluación gratis.",
 cityImageAltEs: "Bungalow histórico en Coconut Grove con piso original de loseta hidráulica cubana",
 },
 {
 slug: "cutler-bay",
 name: "Cutler Bay",
 county: "Miami-Dade",
 countySlug: "miami-dade",
 intro:
 "Cutler Bay rebuilt strong after Andrew. Today it's a mix of newer construction and well-cared-for homes that still need real floor work, done honestly.",
 localStory:
 "Most of Cutler Bay was rebuilt in the years following Hurricane Andrew, which means a huge percentage of the homes here were built in the same window, and the floors in them are aging on the same schedule. Tile from the late nineties showing grout failure and isolated cracks. Hardwood that's seen its first refinish and is ready for a second. Garage concrete that the original builder never sealed. We do a lot of targeted tile repair, hardwood sand-and-finish, and garage epoxy here. Newer subdivisions on the east side of US-1 bring in modern polished concrete work. We make the drive south for any project worth doing.",
 topServiceSlugs: [
 "tile-laminate-vinyl-repair",
 "concrete-polishing",
 "garage-epoxy-flooring",
 "hardwood-refinishing",
 "concrete-sealing",
 ],
 nearbyCitySlugs: ["palmetto-bay", "kendall", "homestead"],
 metaTitle: "Floor Restoration in Cutler Bay, FL | ReNewIt Floors",
 metaDescription:
 "Tile repair, hardwood refinishing, garage epoxy, and concrete polishing in Cutler Bay. Family-owned, 30+ years restoring South Miami-Dade floors. Free quote.",
 cityImage: "/images/city-cutler-bay-modern-rebuild.jpg",
 cityImageAlt: "Modern Cutler Bay home with epoxy garage floor and tropical landscaping",
 countyEs: "Miami-Dade",
 introEs: "Cutler Bay se reconstruyó fuerte después de Andrew. Hoy es una mezcla de construcción nueva y casas bien cuidadas que todavía necesitan trabajo de pisos real, hecho con honestidad.",
 localStoryEs: "La mayor parte de Cutler Bay se reconstruyó en los años después del Huracán Andrew, lo que significa que un porcentaje enorme de las casas aquí se construyeron en la misma ventana, y los pisos en ellas envejecen al mismo paso. Loseta de finales de los noventa con falla de lechada y rajaduras aisladas. Madera que ya tuvo su primer reacondicionamiento y está lista para un segundo. Concreto de garaje que el constructor original nunca selló. Hacemos mucha reparación puntual de loseta, lijado y acabado de madera y epoxi para garajes aquí. Las subdivisiones más nuevas al este de la US-1 traen trabajo moderno de concreto pulido. Hacemos el viaje al sur por cualquier proyecto que valga la pena.",
 metaTitleEs: "Restauración de Pisos en Cutler Bay, FL | ReNewIt Floors",
 metaDescriptionEs: "Reparación de loseta, reacondicionamiento de madera, epoxi de garaje y pulido de concreto en Cutler Bay. De propiedad familiar, más de 30 años restaurando pisos del sur de Miami-Dade. Presupuesto gratis.",
 cityImageAltEs: "Casa moderna en Cutler Bay con piso de epoxi en el garaje y jardinería tropical",
 },
 {
 slug: "homestead",
 name: "Homestead",
 county: "Miami-Dade",
 countySlug: "miami-dade",
 intro:
 "Homestead is South Miami-Dade's working heart, agricultural roots, modest homes, and growing residential developments. We bring honest floor work to every doorstep we cross.",
 localStory:
 "Homestead has more variety than people give it credit for. Agricultural-era homes with original Mexican tile that just needs a deep clean and a fresh seal. Mid-century cottages with terrazzo hidden under linoleum. New subdivisions east of the turnpike with garage concrete waiting to be epoxy-coated. Commercial agricultural buildings where polished concrete is the only finish that lasts. We make the drive south because the work is good and the people are direct, they want a fair price to do a good job, and they want to know what's actually possible before they spend a dollar. That's the standard we operate by everywhere.",
 topServiceSlugs: [
 "mexican-tile-restoration",
 "tile-laminate-vinyl-repair",
 "concrete-polishing",
 "hardwood-refinishing",
 "garage-epoxy-flooring",
 ],
 nearbyCitySlugs: ["cutler-bay", "kendall", "palmetto-bay"],
 metaTitle: "Floor Restoration in Homestead, FL | ReNewIt Floors",
 metaDescription:
 "Mexican tile, hardwood, concrete polishing, and garage epoxy in Homestead. Honest pricing, family-owned, 30+ years across South Miami-Dade. Free assessment.",
 cityImage: "/images/city-homestead-agricultural-residential.jpg",
 cityImageAlt: "Modest South Miami-Dade home in Homestead with Saltillo tile floors",
 countyEs: "Miami-Dade",
 introEs: "Homestead es el corazón trabajador del sur de Miami-Dade, raíces agrícolas, casas modestas y desarrollos residenciales en crecimiento. Llevamos trabajo honesto de pisos a cada puerta que cruzamos.",
 localStoryEs: "Homestead tiene más variedad de la que la gente le da crédito. Casas de la era agrícola con loseta mexicana original que solo necesita una limpieza profunda y un sellado fresco. Cabañas mid-century con terrazo escondido bajo linóleo. Subdivisiones nuevas al este del turnpike con concreto de garaje esperando ser cubierto con epoxi. Edificios comerciales agrícolas donde el concreto pulido es el único acabado que dura. Hacemos el viaje al sur porque el trabajo es bueno y la gente es directa, quieren un precio justo por un buen trabajo y quieren saber qué es realmente posible antes de gastar un dólar. Ese es el estándar con el que operamos en todas partes.",
 metaTitleEs: "Restauración de Pisos en Homestead, FL | ReNewIt Floors",
 metaDescriptionEs: "Loseta mexicana, madera, concreto pulido y epoxi de garaje en Homestead. Precios honestos, de propiedad familiar, más de 30 años por todo el sur de Miami-Dade. Evaluación gratis.",
 cityImageAltEs: "Casa modesta del sur de Miami-Dade en Homestead con pisos de loseta Saltillo",
 },
 {
 slug: "palmetto-bay",
 name: "Palmetto Bay",
 county: "Miami-Dade",
 countySlug: "miami-dade",
 intro:
 "Palmetto Bay's tree-lined streets and large residential lots are home to some of South Miami's most thoughtful homes, and floors built to match.",
 localStory:
 "Palmetto Bay homeowners tend to take their time, get the right answer the first time, and stay in the home for the long run, which is exactly the kind of client we work best with. We've refinished hardwood in homes off Old Cutler that hadn't been touched in twenty years and look brand new again. We've polished concrete in modern primary residences along the bay. We've honed marble entryways that took two decades of grit underfoot and brought them back to factory shine. Big lots, big garages, big projects, all done with the same Foundation-First method we apply to a small Coral Gables foyer.",
 topServiceSlugs: [
 "hardwood-refinishing",
 "marble-restoration",
 "concrete-polishing",
 "terrazzo-restoration",
 "garage-epoxy-flooring",
 ],
 nearbyCitySlugs: ["pinecrest", "cutler-bay", "kendall"],
 metaTitle: "Floor Restoration in Palmetto Bay, FL | ReNewIt Floors",
 metaDescription:
 "Hardwood refinishing, marble restoration, polished concrete, and garage epoxy in Palmetto Bay. Residential floor restoration with a 1-year warranty. 30+ years.",
 cityImage: "/images/city-palmetto-bay-tree-lined-estate.jpg",
 cityImageAlt: "Palmetto Bay estate under mature live oak canopy with refinished hardwood",
 countyEs: "Miami-Dade",
 introEs: "Las calles arboladas y los grandes lotes residenciales de Palmetto Bay son hogar de algunas de las casas más reflexivas del sur de Miami, y pisos hechos para combinarlas.",
 localStoryEs: "Los dueños de Palmetto Bay tienden a tomarse su tiempo, conseguir la respuesta correcta la primera vez y quedarse en la casa a largo plazo, exactamente la clase de cliente con el que mejor trabajamos. Hemos lijado y acabado madera en casas saliendo del Old Cutler que no se habían tocado en veinte años y lucen nuevas otra vez. Hemos pulido concreto en residencias modernas a lo largo de la bahía. Hemos lijado entradas de mármol que aguantaron dos décadas de tierra bajo los zapatos y las devolvimos al brillo de fábrica. Lotes grandes, garajes grandes, proyectos grandes, todo hecho con el mismo Método de Base Primero que aplicamos a un vestíbulo pequeño en Coral Gables.",
 metaTitleEs: "Restauración de Pisos en Palmetto Bay, FL | ReNewIt Floors",
 metaDescriptionEs: "Reacondicionamiento de madera, restauración de mármol, concreto pulido y epoxi de garaje en Palmetto Bay. Restauración de pisos residenciales con garantía de 1 año. Más de 30 años.",
 cityImageAltEs: "Propiedad en Palmetto Bay bajo copa madura de robles con madera reacondicionada",
 },
 {
 slug: "miami-lakes",
 name: "Miami Lakes",
 county: "Miami-Dade",
 countySlug: "miami-dade",
 intro:
 "Miami Lakes is a planned community with great bones, 1960s-70s homes that often have original Mexican Saltillo or terrazzo floors worth saving.",
 localStory:
 "Miami Lakes was master-planned starting in 1962, and the original homes here were built with the floor finishes that defined that era, Saltillo from Mexico, hydraulic Cuban tile, terrazzo, and oak hardwood. Six decades later, those floors are still in most of these houses, just buried under carpet or refresh-painted. Pull up the carpet, deep-clean the tile, and you've got a floor that beats anything you can install today. We work the 67th Avenue corridor too, where the commercial buildings need polished concrete and epoxy work for the offices, restaurants, and retail along Main Street and Town Center.",
 topServiceSlugs: [
 "mexican-tile-restoration",
 "terrazzo-restoration",
 "hardwood-refinishing",
 "concrete-polishing",
 "tile-laminate-vinyl-repair",
 ],
 nearbyCitySlugs: ["doral", "miami", "kendall"],
 relatedProjectSlugs: ["mexican-tile-miami-lakes"],
 metaTitle: "Floor Restoration in Miami Lakes, FL | ReNewIt Floors",
 metaDescription:
 "Mexican Saltillo, terrazzo, hardwood, and concrete restoration in Miami Lakes. Restoring original 1960s-70s floors. 30+ years. Free assessment.",
 cityImage: "/images/city-miami-lakes-saltillo-home.jpg",
 cityImageAlt: "Classic 1960s Miami Lakes home with original Mexican Saltillo tile floors",
 countyEs: "Miami-Dade",
 introEs: "Miami Lakes es una comunidad planeada con buenos huesos, casas de los años 60 y 70 que a menudo tienen Saltillo mexicano original o terrazo dignos de salvar.",
 localStoryEs: "Miami Lakes empezó como comunidad maestra-planeada en 1962, y las casas originales de aquí se construyeron con los acabados de pisos que definieron esa era, Saltillo de México, loseta cubana hidráulica, terrazo y madera de roble. Seis décadas después, esos pisos siguen en la mayoría de estas casas, solo enterrados bajo alfombra o repintados. Levante la alfombra, limpie a fondo la loseta y tendrá un piso que le gana a cualquier cosa que pueda instalar hoy. También trabajamos el corredor de la 67th Avenue, donde los edificios comerciales necesitan concreto pulido y trabajo de epoxi para las oficinas, restaurantes y locales del Main Street y Town Center.",
 metaTitleEs: "Restauración de Pisos en Miami Lakes, FL | ReNewIt Floors",
 metaDescriptionEs: "Restauración de Saltillo mexicano, terrazo, madera y concreto en Miami Lakes. Restaurando pisos originales de los años 60 y 70. Más de 30 años. Evaluación gratis.",
 cityImageAltEs: "Casa clásica de los años 60 en Miami Lakes con pisos originales de loseta mexicana Saltillo",
 },
 {
 slug: "miami",
 name: "Miami",
 county: "Miami-Dade",
 countySlug: "miami-dade",
 intro:
 "The City of Miami covers everything from Edgewater high-rises to Little Havana bungalows to Wynwood lofts. Each neighborhood has its own floor story, and we've worked them all.",
 localStory:
 "Miami isn't one neighborhood, it's a couple dozen, and the floors change with every zip code. Wynwood and the Design District: warehouse conversions where polished concrete is the right finish and the only finish that holds up. Little Havana: Cuban tile and original terrazzo in homes built before 1960. Allapattah: older single-families with hardwood and Saltillo. Edgewater and Midtown: modern condos with marble and concrete. We tailor the approach to the neighborhood, what works in a Wynwood loft would be wrong in a 1940s Shenandoah cottage. Knowing the difference is the work.",
 topServiceSlugs: [
 "concrete-polishing",
 "terrazzo-restoration",
 "mexican-tile-restoration",
 "marble-restoration",
 "concrete-epoxy-systems",
 ],
 nearbyCitySlugs: ["brickell", "downtown-miami", "coconut-grove"],
 metaTitle: "Floor Restoration in Miami, FL | ReNewIt Floors",
 metaDescription:
 "Floor restoration across Miami, Wynwood, Little Havana, Edgewater, Allapattah, Midtown. Concrete, terrazzo, marble, tile. 30+ years. Free assessment.",
 cityImage: "/images/city-miami-wynwood-loft-concrete.jpg",
 cityImageAlt: "Converted Wynwood Miami loft with polished concrete floor and exposed brick",
 countyEs: "Miami-Dade",
 introEs: "La Ciudad de Miami cubre desde rascacielos en Edgewater hasta bungalows en Little Havana hasta lofts en Wynwood. Cada barrio tiene su propia historia de pisos, y los hemos trabajado todos.",
 localStoryEs: "Miami no es un solo barrio, son un par de docenas, y los pisos cambian con cada código postal. Wynwood y el Design District: conversiones de almacenes donde el concreto pulido es el acabado correcto y el único que aguanta. Little Havana: loseta cubana y terrazo original en casas construidas antes de 1960. Allapattah: casas unifamiliares viejas con madera y Saltillo. Edgewater y Midtown: condominios modernos con mármol y concreto. Adaptamos el enfoque al barrio, lo que funciona en un loft de Wynwood estaría mal en una cabaña Shenandoah de los años 40. Saber la diferencia es el trabajo.",
 metaTitleEs: "Restauración de Pisos en Miami, FL | ReNewIt Floors",
 metaDescriptionEs: "Restauración de pisos por toda la ciudad de Miami, Wynwood, Little Havana, Edgewater, Allapattah, Midtown. Concreto, terrazo, mármol, loseta. Más de 30 años. Evaluación gratis.",
 cityImageAltEs: "Loft convertido en Wynwood, Miami con piso de concreto pulido y ladrillo expuesto",
 },
 {
 slug: "downtown-miami",
 name: "Downtown Miami",
 county: "Miami-Dade",
 countySlug: "miami-dade",
 intro:
 "Downtown Miami's commercial buildings, restaurants, and retail spaces need floors that handle thousands of feet a day and still look the part, every day.",
 localStory:
 "Downtown is high-traffic, high-stakes commercial work. Government buildings on Flagler. Bayside retail and the cruise corridor. Restaurant rows on Biscayne where the floor is a brand asset. We've polished concrete in restaurant kitchens, restored marble lobbies in century-old downtown towers, and brought back terrazzo in historic buildings near Government Center. Property managers and operators appreciate three things: clear scheduling, real warranties, and the ability to phase work around operating hours. We do all three. Most of our downtown jobs run nights or weekends to avoid foot-traffic disruption.",
 topServiceSlugs: [
 "concrete-polishing",
 "marble-restoration",
 "terrazzo-restoration",
 "concrete-epoxy-systems",
 "industrial-warehouse-floor-cleaning",
 ],
 nearbyCitySlugs: ["brickell", "miami", "miami-beach"],
 metaTitle: "Floor Restoration in Downtown Miami | ReNewIt Floors",
 metaDescription:
 "Commercial floor restoration in Downtown Miami, marble lobbies, polished concrete, historic terrazzo. Phased scheduling, licensed, insured. 30+ years. Free site visit.",
 cityImage: "/images/city-downtown-miami-marble-lobby.jpg",
 cityImageAlt: "Historic Downtown Miami commercial lobby with restored Art Deco terrazzo",
 countyEs: "Miami-Dade",
 introEs: "Los edificios comerciales, restaurantes y locales del Downtown Miami necesitan pisos que aguantan miles de pisadas al día y siguen luciendo bien, todos los días.",
 localStoryEs: "El Downtown es trabajo comercial de alto tráfico, alto en lo que está en juego. Edificios gubernamentales sobre Flagler. Locales de Bayside y el corredor de cruceros. Hileras de restaurantes sobre Biscayne donde el piso es un activo de marca. Hemos pulido concreto en cocinas de restaurantes, restaurado vestíbulos de mármol en torres centenarias del centro y devuelto vida al terrazo en edificios históricos cerca de Government Center. Los administradores de propiedades y operadores aprecian tres cosas: programación clara, garantías reales y la capacidad de hacer el trabajo por fases alrededor del horario operacional. Hacemos las tres. La mayoría de nuestros trabajos en el centro corren noches o fines de semana para evitar interrumpir el flujo de pie.",
 metaTitleEs: "Restauración de Pisos en Downtown Miami | ReNewIt Floors",
 metaDescriptionEs: "Restauración comercial de pisos en Downtown Miami, vestíbulos de mármol, concreto pulido, terrazo histórico. Programación por fases, licenciados, asegurados. Más de 30 años. Visita gratis al sitio.",
 cityImageAltEs: "Vestíbulo comercial histórico en Downtown Miami con terrazo Art Deco restaurado",
 },
 {
 slug: "fort-lauderdale",
 name: "Fort Lauderdale",
 county: "Broward",
 countySlug: "broward",
 intro:
 "Fort Lauderdale's Intracoastal homes, Las Olas marble entrances, and Riverwalk lofts each call for a different floor approach. We work them all, and we know what salt air does to a sealer.",
 localStory:
 "Fort Lauderdale floors are diverse: 1950s ranch homes off Sunrise Boulevard with original terrazzo, modern Las Olas condos with marble lobbies, riverfront properties on the New River with hardwood and polished concrete, yacht-club homes along the Intracoastal where the salt and humidity make sealer choice critical. We've worked everywhere from Victoria Park to Coral Ridge to Rio Vista, and we know which products hold up when the wind shifts off the Atlantic. For older Las Olas marble, we hone and polish in place, most of these floors don't need replacement, just real restoration. For the waterfront homes, we lean toward harder sealers and more frequent maintenance plans.",
 topServiceSlugs: [
 "marble-restoration",
 "concrete-polishing",
 "terrazzo-restoration",
 "hardwood-refinishing",
 "concrete-sealing",
 ],
 nearbyCitySlugs: ["hollywood", "davie", "pembroke-pines"],
 metaTitle: "Floor Restoration in Fort Lauderdale, FL | ReNewIt Floors",
 metaDescription:
 "Marble, terrazzo, hardwood, and concrete restoration in Fort Lauderdale, Las Olas, Victoria Park, Coral Ridge, Rio Vista. Coastal-tough sealing. 30+ years.",
 cityImage: "/images/city-fort-lauderdale-waterfront-residence.jpg",
 cityImageAlt: "Fort Lauderdale waterfront residence with polished marble interior and yacht dock at golden hour",
 countyEs: "Broward",
 introEs: "Las casas frente al Intracoastal de Fort Lauderdale, las entradas de mármol de Las Olas y los lofts del Riverwalk piden cada uno un enfoque diferente. Los trabajamos todos, y sabemos lo que el aire salado le hace a un sellador.",
 localStoryEs: "Los pisos de Fort Lauderdale son diversos: ranchos de los años 50 saliendo de Sunrise Boulevard con terrazo original, condominios modernos en Las Olas con vestíbulos de mármol, propiedades frente al río en el New River con madera y concreto pulido, casas de yacht-club a lo largo del Intracoastal donde la sal y la humedad hacen crítica la elección del sellador. Hemos trabajado por todas partes desde Victoria Park hasta Coral Ridge hasta Rio Vista, y sabemos qué productos aguantan cuando el viento sopla del Atlántico. Para el mármol viejo de Las Olas, lijamos y pulimos en sitio, la mayoría de estos pisos no necesitan reemplazo, solo restauración real. Para las casas frente al agua, nos inclinamos por selladores más duros y planes de mantenimiento más frecuentes.",
 metaTitleEs: "Restauración de Pisos en Fort Lauderdale, FL | ReNewIt Floors",
 metaDescriptionEs: "Mármol, terrazo, madera y concreto en Fort Lauderdale, Las Olas, Victoria Park, Coral Ridge, Rio Vista. Sellado resistente a la costa. Más de 30 años.",
 cityImageAltEs: "Residencia frente al agua en Fort Lauderdale con interior de mármol pulido y muelle al atardecer",
 },
 {
 slug: "hollywood",
 name: "Hollywood",
 county: "Broward",
 countySlug: "broward",
 intro:
 "Hollywood floors run from beachside Broadwalk duplexes to inland ranch homes, different eras, different surfaces, all worth saving.",
 localStory:
 "Hollywood east of US-1 is a different floor world than west of it. Beachside, you've got 1950s and 60s duplexes with original Cuban tile and terrazzo, mid-century moderns with hardwood, and condos with marble entrances. Inland, the Hollywood Hills and west-of-441 neighborhoods skew newer, ranch and contemporary homes with tile and laminate. We restore the historic surfaces with the same care we apply in Coral Gables and we do straightforward repair and refinishing across the inland communities. Older Hollywood deserves restoration over replacement, the original floors are part of why these neighborhoods feel right.",
 topServiceSlugs: [
 "terrazzo-restoration",
 "mexican-tile-restoration",
 "hardwood-refinishing",
 "tile-laminate-vinyl-repair",
 "concrete-polishing",
 ],
 nearbyCitySlugs: ["fort-lauderdale", "pembroke-pines", "davie"],
 metaTitle: "Floor Restoration in Hollywood, FL | ReNewIt Floors",
 metaDescription:
 "Terrazzo, Cuban tile, hardwood, and tile repair in Hollywood, Beachside, Hollywood Hills, and west-of-441. Honest assessments. 30+ years. Free quote.",
 cityImage: "/images/city-hollywood-beachside-mid-century.jpg",
 cityImageAlt: "Hollywood Florida mid-century home with refinished oak hardwood and ocean view through sliding doors",
 countyEs: "Broward",
 introEs: "Los pisos de Hollywood van desde duplex frente al Broadwalk hasta ranchos tierra adentro, épocas distintas, superficies distintas, todas dignas de salvar.",
 localStoryEs: "Hollywood al este de la US-1 es un mundo de pisos diferente al del oeste. En la playa, hay duplex de los años 50 y 60 con loseta cubana original y terrazo, mid-century moderns con madera y condominios con entradas de mármol. Tierra adentro, Hollywood Hills y los barrios al oeste de la 441 son más nuevos, casas estilo rancho y contemporáneas con loseta y laminado. Restauramos las superficies históricas con el mismo cuidado que aplicamos en Coral Gables y hacemos reparación y reacondicionamiento estándar por todas las comunidades del interior. Hollywood viejo merece restauración antes que reemplazo, los pisos originales son parte de por qué estos barrios se sienten correctos.",
 metaTitleEs: "Restauración de Pisos en Hollywood, FL | ReNewIt Floors",
 metaDescriptionEs: "Terrazo, loseta cubana, madera y reparación de loseta en Hollywood, Beachside, Hollywood Hills y al oeste de la 441. Evaluaciones honestas. Más de 30 años. Presupuesto gratis.",
 cityImageAltEs: "Casa mid-century en Hollywood, Florida con madera reacondicionada y vista al océano",
 },
 {
 slug: "weston",
 name: "Weston",
 county: "Broward",
 countySlug: "broward",
 intro:
 "Weston's master-planned communities and luxury homes call for newer-construction floor finishes, polished concrete, garage epoxy, refinished hardwood, done right the first time.",
 localStory:
 "Weston was master-planned in the late 80s and 90s by Arvida, and the housing stock here is consistent: large family homes, two- and three-car garages, primary-floor concrete that owners want polished or tile that needs maintenance after twenty-five years of life. We do a lot of garage epoxy here, most builders poured rough slabs that look fine on closing day and start dusting and chipping a year in. Diamond grinding and a real epoxy system fixes that for good. Hardwood refinishing is the other steady call: original oak from the 90s subdivisions ready for its first or second sand-and-finish. Weston homeowners want it done right and stay in the home long enough to enjoy the result.",
 topServiceSlugs: [
 "garage-epoxy-flooring",
 "concrete-polishing",
 "hardwood-refinishing",
 "marble-restoration",
 "tile-laminate-vinyl-repair",
 ],
 nearbyCitySlugs: ["pembroke-pines", "southwest-ranches", "davie"],
 metaTitle: "Floor Restoration in Weston, FL | ReNewIt Floors",
 metaDescription:
 "Garage epoxy, polished concrete, hardwood refinishing, and marble restoration in Weston, master-planned communities, family homes. 30+ years. Free assessment.",
 cityImage: "/images/city-weston-luxury-suburban-home.jpg",
 cityImageAlt: "Mediterranean-style luxury suburban home in Weston, Florida with palm-lined paver driveway and decorative epoxy garage floor",
 countyEs: "Broward",
 introEs: "Las comunidades planeadas y casas de lujo de Weston piden acabados de construcción nueva, concreto pulido, epoxi de garaje, madera reacondicionada, hechos bien la primera vez.",
 localStoryEs: "Weston se planeó al final de los 80 y los 90 por Arvida, y el parque habitacional aquí es consistente: casas familiares grandes, garajes para dos y tres autos, concreto del piso principal que los dueños quieren pulido o loseta que necesita mantenimiento después de veinticinco años de vida. Hacemos mucho epoxi para garaje aquí, la mayoría de los constructores vació losas ásperas que lucen bien en el día del cierre y empiezan a soltar polvo y rajarse al año. El pulido con diamante y un sistema de epoxi real arregla eso para siempre. El reacondicionamiento de madera es el otro pedido constante: roble original de las subdivisiones de los noventa listo para su primer o segundo lijado y acabado. Los dueños de Weston quieren que se haga bien y se quedan en la casa lo suficiente para disfrutar el resultado.",
 metaTitleEs: "Restauración de Pisos en Weston, FL | ReNewIt Floors",
 metaDescriptionEs: "Epoxi de garaje, concreto pulido, reacondicionamiento de madera y restauración de mármol en Weston, comunidades planeadas, casas familiares. Más de 30 años. Evaluación gratis.",
 cityImageAltEs: "Casa suburbana de lujo estilo mediterráneo en Weston, Florida con entrada de adoquines y piso de epoxi en el garaje",
 },
 {
 slug: "davie",
 name: "Davie",
 county: "Broward",
 countySlug: "broward",
 intro:
 "Davie's equestrian estates, ranch homes, and growing family neighborhoods bring a real mix of floor work, from Saltillo to polished concrete to garage epoxy.",
 localStory:
 "Davie keeps its rural-Western character in the older neighborhoods around Pine Island Road and Griffin Road, with ranch homes, equestrian properties, and large lots that often have Saltillo or terra-cotta tile floors. Newer developments to the west have more standard Florida residential, tile, hardwood, and concrete that needs sealing. We see plenty of garage epoxy work here because horses, trucks, and trailer storage demand a floor that handles real abuse. We also do agricultural-commercial concrete sealing for the small businesses and equestrian operations that define this town.",
 topServiceSlugs: [
 "garage-epoxy-flooring",
 "concrete-sealing",
 "mexican-tile-restoration",
 "tile-laminate-vinyl-repair",
 "hardwood-refinishing",
 ],
 nearbyCitySlugs: ["weston", "southwest-ranches", "pembroke-pines"],
 metaTitle: "Floor Restoration in Davie, FL | ReNewIt Floors",
 metaDescription:
 "Garage epoxy, concrete sealing, Saltillo tile, and hardwood restoration in Davie, equestrian estates, ranch homes, family neighborhoods. 30+ years. Free quote.",
 cityImage: "/images/city-davie-ranch-style-home.jpg",
 cityImageAlt: "Davie Florida ranch-style home with red tile accents, oak trees, and a polished concrete patio",
 countyEs: "Broward",
 introEs: "Las propiedades ecuestres, ranchos y barrios familiares en crecimiento de Davie traen una mezcla real de trabajo de pisos, desde Saltillo hasta concreto pulido hasta epoxi de garaje.",
 localStoryEs: "Davie mantiene su carácter del oeste-rural en los barrios viejos alrededor de Pine Island Road y Griffin Road, con ranchos, propiedades ecuestres y lotes grandes que a menudo tienen pisos de Saltillo o loseta de barro. Los desarrollos más nuevos al oeste tienen residencial estándar de la Florida, loseta, madera y concreto que necesita sellado. Vemos bastante trabajo de epoxi de garaje aquí porque los caballos, camionetas y almacenamiento de tráileres exigen un piso que aguante abuso real. También hacemos sellado de concreto agrícola-comercial para los pequeños negocios y operaciones ecuestres que definen este pueblo.",
 metaTitleEs: "Restauración de Pisos en Davie, FL | ReNewIt Floors",
 metaDescriptionEs: "Epoxi de garaje, sellado de concreto, loseta Saltillo y restauración de madera en Davie, propiedades ecuestres, ranchos, barrios familiares. Más de 30 años. Presupuesto gratis.",
 cityImageAltEs: "Casa estilo rancho en Davie, Florida con detalles de loseta roja, robles y patio de concreto pulido",
 },
 {
 slug: "pembroke-pines",
 name: "Pembroke Pines",
 county: "Broward",
 countySlug: "broward",
 intro:
 "Pembroke Pines's planned family neighborhoods are full of homes that benefit from a fresh take on the floors, tile repair, hardwood refresh, garage epoxy, polished concrete.",
 localStory:
 "Pembroke Pines is mostly newer-construction residential, with planned communities running from Pines Boulevard down to Sheridan Street and west out to I-75. The housing stock is consistent, well-built family homes from the 90s through 2010s, and the floors in them age on a similar schedule. We do tile and laminate repair where a few planks lifted or grout failed, hardwood refinishing in the homes ready for their second sand-and-finish, garage epoxy installs for owners tired of dusty raw concrete, and polished concrete for owners who want a maintenance-free look that lasts decades. Family-friendly scheduling and clean work, we don't track dust through your house.",
 topServiceSlugs: [
 "tile-laminate-vinyl-repair",
 "garage-epoxy-flooring",
 "hardwood-refinishing",
 "concrete-polishing",
 "concrete-sealing",
 ],
 nearbyCitySlugs: ["weston", "hollywood", "davie"],
 metaTitle: "Floor Restoration in Pembroke Pines, FL | ReNewIt Floors",
 metaDescription:
 "Tile repair, garage epoxy, hardwood refinishing, polished concrete in Pembroke Pines. Family-friendly scheduling. 30+ years. Free assessment.",
 cityImage: "/images/city-pembroke-pines-contemporary-residential.jpg",
 cityImageAlt: "Contemporary Pembroke Pines, Florida home with polished concrete floor and tropical landscaping",
 countyEs: "Broward",
 introEs: "Los barrios familiares planeados de Pembroke Pines están llenos de casas que se benefician de un nuevo enfoque para los pisos, reparación de loseta, refrescada de madera, epoxi de garaje, concreto pulido.",
 localStoryEs: "Pembroke Pines es principalmente residencial de construcción más reciente, con comunidades planeadas que corren desde Pines Boulevard bajando a Sheridan Street y al oeste hasta la I-75. El parque habitacional es consistente, casas familiares bien construidas de los 90 hasta los 2010, y los pisos en ellas envejecen al mismo ritmo. Hacemos reparación de loseta y laminado donde unas tablas se levantaron o falló la lechada, reacondicionamiento de madera en las casas listas para su segundo lijado y acabado, instalaciones de epoxi de garaje para dueños cansados del concreto crudo polvoriento, y concreto pulido para dueños que quieren un look libre de mantenimiento que dure décadas. Programación amigable con familias y trabajo limpio, no llevamos polvo por toda su casa.",
 metaTitleEs: "Restauración de Pisos en Pembroke Pines, FL | ReNewIt Floors",
 metaDescriptionEs: "Reparación de loseta, epoxi de garaje, reacondicionamiento de madera, concreto pulido en Pembroke Pines. Programación amigable con familias. Más de 30 años. Evaluación gratis.",
 cityImageAltEs: "Casa contemporánea en Pembroke Pines, Florida con piso de concreto pulido y jardinería tropical",
 },
 {
 slug: "southwest-ranches",
 name: "Southwest Ranches",
 county: "Broward",
 countySlug: "broward",
 intro:
 "Southwest Ranches's equestrian estates and large-lot homes need floor work that handles the real demands of country living, and finishes that match the architecture.",
 localStory:
 "Southwest Ranches keeps its rural character intentionally, equestrian estates with stables, large family compounds, and acreage that demand floor finishes meant for hard use. We polish and seal concrete in horse barns and tack rooms where slip-resistant durability matters, install garage epoxy systems in the multi-bay garages these properties typically have, and refinish hardwood in the main residences. We've also worked on the marble entrances and stone floors in the high-end Mediterranean-style homes scattered throughout the community. Honest pricing for projects of unusual scale.",
 topServiceSlugs: [
 "garage-epoxy-flooring",
 "concrete-polishing",
 "concrete-sealing",
 "marble-restoration",
 "hardwood-refinishing",
 ],
 nearbyCitySlugs: ["davie", "weston", "pembroke-pines"],
 metaTitle: "Floor Restoration in Southwest Ranches, FL | ReNewIt Floors",
 metaDescription:
 "Equestrian floor sealing, garage epoxy, polished concrete, and marble restoration in Southwest Ranches. Large-estate experience. 30+ years. Free site visit.",
 cityImage: "/images/city-southwest-ranches-equestrian-estate.jpg",
 cityImageAlt: "Spanish-style equestrian estate in Southwest Ranches with polished concrete driveway and a horse barn",
 countyEs: "Broward",
 introEs: "Las propiedades ecuestres y casas de lotes grandes de Southwest Ranches necesitan trabajo de pisos que aguanta las demandas reales de la vida campestre, y acabados que combinan con la arquitectura.",
 localStoryEs: "Southwest Ranches mantiene su carácter rural intencionalmente, propiedades ecuestres con establos, complejos familiares grandes y acreaje que exige acabados pensados para uso duro. Pulimos y sellamos concreto en establos de caballos y cuartos de equipo donde la durabilidad antideslizante importa, instalamos sistemas de epoxi de garaje en los garajes de varias bahías que estas propiedades suelen tener, y reacondicionamos madera en las residencias principales. También hemos trabajado en las entradas de mármol y pisos de piedra de las casas estilo mediterráneo de alto nivel esparcidas por toda la comunidad. Precios honestos para proyectos de escala inusual.",
 metaTitleEs: "Restauración de Pisos en Southwest Ranches, FL | ReNewIt Floors",
 metaDescriptionEs: "Sellado de pisos ecuestres, epoxi de garaje, concreto pulido y restauración de mármol en Southwest Ranches. Experiencia con propiedades grandes. Más de 30 años. Visita gratis al sitio.",
 cityImageAltEs: "Propiedad ecuestre estilo español en Southwest Ranches con entrada de concreto pulido y un establo",
 },
 {
 slug: "boca-raton",
 name: "Boca Raton",
 county: "Palm Beach",
 countySlug: "palm-beach",
 intro:
 "Boca Raton's country-club neighborhoods and oceanfront condos are home to some of the most beautiful marble, terrazzo, and hardwood floors in South Florida. We restore them quietly, professionally, and on the homeowners' schedule.",
 localStory:
 "Boca Raton has a tradition of refined, Mediterranean and contemporary architecture, and the floors in these homes are usually as serious as the homes themselves. Cremà and Calacatta marble entrances in country-club homes off Camino Real. Polished travertine in oceanfront condos along Highway A1A. Hardwood in the older neighborhoods near Mizner Park. We approach this work the way Boca homeowners and HOA boards expect it, quietly, on their schedule, with proper insurance and clean handoffs. Marble restoration is our most-requested service here. We can hone in place, color-match repairs, and bring twenty-year-old marble back to factory shine without removing a single piece of furniture.",
 topServiceSlugs: [
 "marble-restoration",
 "stone-flooring",
 "hardwood-refinishing",
 "concrete-polishing",
 "terrazzo-restoration",
 ],
 nearbyCitySlugs: ["west-palm-beach", "fort-lauderdale", "hollywood"],
 metaTitle: "Floor Restoration in Boca Raton, FL | ReNewIt Floors",
 metaDescription:
 "Luxury marble, travertine, hardwood, and stone floor restoration in Boca Raton, country-club homes, oceanfront condos. Quiet, professional, insured. 30+ years.",
 cityImage: "/images/city-boca-raton-luxury-foyer.jpg",
 cityImageAlt: "Luxury Boca Raton, Florida home foyer with mirror-polished cremà marble floor, sweeping staircase, and crystal chandelier",
 countyEs: "Palm Beach",
 introEs: "Los barrios de country club y condominios frente al océano de Boca Raton tienen algunos de los pisos de mármol, terrazo y madera más bonitos del sur de la Florida. Los restauramos en silencio, con profesionalismo y en el horario de los dueños.",
 localStoryEs: "Boca Raton tiene una tradición de arquitectura mediterránea y contemporánea refinada, y los pisos en estas casas suelen ser tan serios como las casas mismas. Entradas de mármol Cremà y Calacatta en casas de country club saliendo de Camino Real. Travertino pulido en condominios frente al océano a lo largo del Highway A1A. Madera en los barrios viejos cerca de Mizner Park. Abordamos este trabajo de la forma en que los dueños de Boca y las juntas de asociaciones lo esperan, en silencio, en su horario, con seguro apropiado y entregas limpias. La restauración de mármol es nuestro servicio más solicitado aquí. Podemos lijar en sitio, hacer reparaciones de color combinado y devolver el mármol de veinte años al brillo de fábrica sin mover un solo mueble.",
 metaTitleEs: "Restauración de Pisos en Boca Raton, FL | ReNewIt Floors",
 metaDescriptionEs: "Restauración de mármol, travertino, madera y piedra de lujo en Boca Raton, casas de country club, condominios frente al océano. Silenciosos, profesionales, asegurados. Más de 30 años.",
 cityImageAltEs: "Vestíbulo de casa de lujo en Boca Raton, Florida con piso de mármol Cremà pulido espejo, escalera curva y candelabro de cristal",
 },
 {
 slug: "west-palm-beach",
 name: "West Palm Beach",
 county: "Palm Beach",
 countySlug: "palm-beach",
 intro:
 "West Palm Beach's downtown district, historic neighborhoods, and Worth Avenue commercial corridor each have their own floor history, and we restore them all.",
 localStory:
 "Downtown West Palm has some of the prettiest historic terrazzo in South Florida, buildings on Clematis Street and the surrounding district from the 1920s and 30s. Worth Avenue and the surrounding luxury commercial corridor sees marble lobbies and high-end retail floors that need restoration on a regular cycle. The historic residential neighborhoods around El Cid and Flamingo Park have hardwood floors and original terrazzo worth saving. We do select projects in the West Palm market, historic terrazzo, marble lobbies, and serious commercial polished concrete for the right project.",
 topServiceSlugs: [
 "terrazzo-restoration",
 "marble-restoration",
 "concrete-polishing",
 "hardwood-refinishing",
 "stone-flooring",
 ],
 nearbyCitySlugs: ["boca-raton", "fort-lauderdale", "hollywood"],
 metaTitle: "Floor Restoration in West Palm Beach, FL | ReNewIt Floors",
 metaDescription:
 "Historic terrazzo, marble lobby, hardwood, and polished concrete restoration in West Palm Beach, downtown, El Cid, Flamingo Park, Worth Avenue. 30+ years.",
 cityImage: "/images/city-west-palm-beach-historic-lobby.jpg",
 cityImageAlt: "Historic West Palm Beach commercial lobby with restored geometric terrazzo and brass elevator doors",
 countyEs: "Palm Beach",
 introEs: "El distrito del centro, los barrios históricos y el corredor comercial de Worth Avenue de West Palm Beach tienen cada uno su propia historia de pisos, y los restauramos todos.",
 localStoryEs: "Downtown West Palm tiene parte del terrazo histórico más bonito del sur de la Florida, edificios sobre Clematis Street y el distrito alrededor de los años 1920 y 30. Worth Avenue y el corredor comercial de lujo alrededor ven vestíbulos de mármol y pisos de locales de alto nivel que necesitan restauración en ciclo regular. Los barrios residenciales históricos alrededor de El Cid y Flamingo Park tienen pisos de madera y terrazo original dignos de salvar. Hacemos proyectos selectos en el mercado de West Palm, terrazo histórico, vestíbulos de mármol y concreto pulido comercial serio para el proyecto correcto.",
 metaTitleEs: "Restauración de Pisos en West Palm Beach, FL | ReNewIt Floors",
 metaDescriptionEs: "Restauración histórica de terrazo, vestíbulos de mármol, madera y concreto pulido en West Palm Beach, centro, El Cid, Flamingo Park, Worth Avenue. Más de 30 años.",
 cityImageAltEs: "Vestíbulo comercial histórico en West Palm Beach con terrazo geométrico restaurado y puertas de elevador en bronce",
 },
 {
 slug: "key-largo",
 name: "Key Largo",
 county: "Monroe",
 countySlug: "monroe",
 intro:
 "Key Largo homes deal with salt, humidity, and casual Keys living, floors here need finishes that hold up to all three.",
 localStory:
 "The Keys are tough on floors. Salt air degrades sealers faster than mainland conditions. Humidity year-round changes how wood and concrete behave. The casual indoor-outdoor flow of most Keys homes means floors take more wear from sand, water, and traffic in flip-flops. We use harder sealers, faster-curing systems, and we plan maintenance schedules that account for the conditions. Key Largo work is mostly residential, older Keys cottages with hardwood, mid-century rebuilds with terrazzo, and modern homes along the bay with polished concrete and stone.",
 topServiceSlugs: [
 "concrete-sealing",
 "hardwood-refinishing",
 "terrazzo-restoration",
 "stone-flooring",
 "marble-restoration",
 ],
 nearbyCitySlugs: ["key-west", "homestead", "cutler-bay"],
 metaTitle: "Floor Restoration in Key Largo, FL | ReNewIt Floors",
 metaDescription:
 "Coastal-tough floor restoration in Key Largo, concrete sealing, hardwood refinishing, terrazzo, stone. Salt air and humidity expertise. 30+ years.",
 cityImage: "/images/city-key-largo-waterfront-cottage.jpg",
 cityImageAlt: "Casual Key Largo waterfront home interior with refinished light oak hardwood and turquoise ocean view",
 countyEs: "Monroe",
 introEs: "Las casas de Key Largo lidian con sal, humedad y vida casual de los Cayos, los pisos aquí necesitan acabados que aguantan los tres.",
 localStoryEs: "Los Cayos son duros con los pisos. El aire salado degrada los selladores más rápido que en condiciones de tierra firme. La humedad del año entero cambia cómo se comportan la madera y el concreto. El flujo casual interior-exterior de la mayoría de las casas de los Cayos significa que los pisos toman más desgaste de arena, agua y tráfico en chanclas. Usamos selladores más duros, sistemas de curado más rápido y planeamos cronogramas de mantenimiento que tienen en cuenta las condiciones. El trabajo en Key Largo es principalmente residencial, cabañas viejas de los Cayos con madera, reconstrucciones mid-century con terrazo y casas modernas a lo largo de la bahía con concreto pulido y piedra.",
 metaTitleEs: "Restauración de Pisos en Key Largo, FL | ReNewIt Floors",
 metaDescriptionEs: "Restauración de pisos resistente a la costa en Key Largo, sellado de concreto, reacondicionamiento de madera, terrazo, piedra. Experiencia con aire salado y humedad. Más de 30 años.",
 cityImageAltEs: "Interior casual de casa frente al agua en Key Largo con madera de roble claro reacondicionada y vista al océano turquesa",
 },
 {
 slug: "key-west",
 name: "Key West",
 county: "Monroe",
 countySlug: "monroe",
 intro:
 "Key West's historic Old Town homes and hospitality buildings carry serious floor history, original Dade County pine, Cuban tile, and terrazzo from another era.",
 localStory:
 "Key West Old Town is a different floor universe. Conch-style historic homes have original Dade County pine and heart pine hardwood, wood so dense termites won't touch it, that's been on the floor for over a hundred years and just needs careful refinishing to come back to life. Cuban tile from before the embargo lives in many of the colonial-era homes. Mid-century rebuilds and hospitality buildings have terrazzo and marble. We approach Key West work the way the historic district expects, preservation-first, no replacement when restoration is possible, and respect for surfaces that aren't being made anymore. We accept select Keys projects with appropriate scheduling.",
 topServiceSlugs: [
 "hardwood-refinishing",
 "terrazzo-restoration",
 "marble-restoration",
 "mexican-tile-restoration",
 "concrete-sealing",
 ],
 nearbyCitySlugs: ["key-largo", "homestead", "cutler-bay"],
 metaTitle: "Floor Restoration in Key West, FL | ReNewIt Floors",
 metaDescription:
 "Historic Dade County pine, Cuban tile, terrazzo, and marble restoration in Key West Old Town. Preservation-first approach for historic homes. 30+ years.",
 cityImage: "/images/city-key-west-historic-conch-home.jpg",
 cityImageAlt: "Historic Conch-style Key West home with original heart pine hardwood floor and tropical garden through French doors",
 countyEs: "Monroe",
 introEs: "Las casas históricas del Old Town y los edificios de hospitalidad de Key West cargan historia seria de pisos, pino original de Dade County, loseta cubana y terrazo de otra era.",
 localStoryEs: "Old Town de Key West es un universo de pisos diferente. Las casas históricas estilo Conch tienen pino de Dade County y heart pine originales, madera tan densa que las termitas no la tocan, que ha estado en el piso por más de cien años y solo necesita un reacondicionamiento cuidadoso para volver a la vida. La loseta cubana de antes del embargo vive en muchas de las casas de la era colonial. Las reconstrucciones mid-century y edificios de hospitalidad tienen terrazo y mármol. Abordamos el trabajo en Key West como el distrito histórico lo espera, preservación primero, sin reemplazo cuando la restauración es posible y respeto por superficies que ya no se hacen. Aceptamos proyectos selectos en los Cayos con la programación apropiada.",
 metaTitleEs: "Restauración de Pisos en Key West, FL | ReNewIt Floors",
 metaDescriptionEs: "Restauración de pino de Dade County, loseta cubana, terrazo y mármol históricos en el Old Town de Key West. Enfoque de preservación primero para casas históricas. Más de 30 años.",
 cityImageAltEs: "Casa histórica estilo Conch en Key West con piso original de heart pine y jardín tropical a través de las puertas francesas",
 },
];

export function getCityBySlug(slug: string): ServiceCity | undefined {
 return cities.find((c) => c.slug === slug);
}

export function getCitiesByCounty(countySlug: string): ServiceCity[] {
 return cities.filter((c) => c.countySlug === countySlug);
}
