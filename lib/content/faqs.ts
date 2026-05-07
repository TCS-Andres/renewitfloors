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
  qEs?: string;
  aEs?: string;
  categoryEs?: string;
};

export const faqs: Faq[] = [
  // General
  {
    category: "General",
    q: "Can my floor be restored, or do I need to replace it?",
    a: "Most floors can be restored. We've brought back terrazzo that was hidden under tile for forty years, marble that looked dead, and concrete that had been poured wrong. Jose will walk your floor and tell you straight — what's possible, and what isn't.",
    qEs: "¿Se puede restaurar mi piso o tengo que reemplazarlo?",
    aEs: "La mayoría de los pisos pueden restaurarse. Hemos rescatado terrazo escondido bajo loseta por cuarenta años, mármol que parecía muerto y concreto que se vació mal. Jose camina su piso y le dice directamente — qué es posible y qué no.",
  },
  {
    category: "General",
    q: "Do you do new tile or marble installation?",
    a: "No. ReNewIt Floors is a restoration company. We restore, repair, and finish floors. We don't install new tile or marble.",
    qEs: "¿Instalan loseta o mármol nuevo?",
    aEs: "No. ReNewIt Floors es una compañía de restauración. Restauramos, reparamos y damos acabado a pisos. No instalamos loseta ni mármol nuevo.",
  },
  {
    category: "General",
    q: "How long have you been in business?",
    a: "Jose has been restoring floors in South Florida for over thirty years. The phone we answer today — (305) 271-7119 — has been our line for over twenty.",
    qEs: "¿Cuántos años llevan en el negocio?",
    aEs: "Jose lleva más de treinta años restaurando pisos en el sur de la Florida. El teléfono que contestamos hoy — (305) 271-7119 — ha sido nuestra línea por más de veinte.",
  },
  {
    category: "General",
    q: "Are you family-owned?",
    a: "Yes. ReNewIt Floors is run by Jose and his family. Jose is on every job. His wife answers the phone when he can't. The work is family-rooted and family-supported.",
    qEs: "¿Son una empresa familiar?",
    aEs: "Sí. ReNewIt Floors es manejado por Jose y su familia. Jose está en cada trabajo. Su esposa contesta el teléfono cuando él no puede. El trabajo tiene raíces familiares y respaldo familiar.",
  },
  {
    category: "General",
    q: "Are you licensed and insured?",
    a: "Yes. We carry full insurance for residential and commercial work. License and insurance documentation is available on request before any project starts.",
    qEs: "¿Están licenciados y asegurados?",
    aEs: "Sí. Tenemos seguro completo para trabajo residencial y comercial. La documentación de licencia y seguro está disponible bajo solicitud antes de comenzar cualquier proyecto.",
  },

  // Concrete & Epoxy
  {
    category: "Concrete & Epoxy",
    q: "What is polished concrete and why does it last?",
    a: "Polished concrete is mechanically ground, densified, and polished concrete — not painted or coated. The shine comes from the concrete itself, after multiple progressive diamond grinds. Done right, it lasts 20+ years with minimal maintenance.",
    qEs: "¿Qué es el concreto pulido y por qué dura?",
    aEs: "El concreto pulido es concreto trabajado mecánicamente, densificado y pulido — no pintado ni recubierto. El brillo viene del concreto mismo, después de varios pulidos progresivos con diamante. Hecho bien, dura más de 20 años con mantenimiento mínimo.",
  },
  {
    category: "Concrete & Epoxy",
    q: "Why do most garage epoxy jobs peel?",
    a: "When concrete dries, a soft cream layer forms at the top. That layer doesn't bond to anything. Most garage epoxy jobs are rolled directly onto that cream layer — and within a year, the epoxy lifts. We diamond-grind through the cream every time. That's why ours doesn't peel.",
    qEs: "¿Por qué se despega el epoxi en la mayoría de los garajes?",
    aEs: "Cuando el concreto seca, se forma una capa de natilla suave en la superficie. Esa capa no se adhiere a nada. La mayoría de los trabajos de epoxi para garaje se aplican directamente sobre esa capa — y en menos de un año, el epoxi se levanta. Nosotros lijamos con diamante atravesando la natilla todas las veces. Por eso el nuestro no se despega.",
  },
  {
    category: "Concrete & Epoxy",
    q: "What is the foundation-first method?",
    a: "It's our standard: every floor is properly prepped — diamond-ground, cleaned, and opened — before any finish goes on. Sealer, polish, epoxy, stain — none of it bonds reliably without the prep. Foundation first. Always.",
    qEs: "¿Qué es el método de base primero?",
    aEs: "Es nuestro estándar: cada piso se prepara correctamente — pulido con diamante, limpio y abierto — antes de cualquier acabado. Sellador, pulido, epoxi, tinte — nada se adhiere bien sin la preparación. Base primero. Siempre.",
  },
  {
    category: "Concrete & Epoxy",
    q: "How many diamond grinds does a polished concrete floor need?",
    a: "We typically run six to seven progressive grinds — starting with coarse diamonds to remove the cream and level imperfections, then stepping through finer grits to bring the polish. Cheaper jobs often skip half of these passes.",
    qEs: "¿Cuántos pulidos con diamante necesita un piso de concreto pulido?",
    aEs: "Generalmente hacemos seis o siete pulidos progresivos — empezando con diamantes gruesos para quitar la natilla y nivelar imperfecciones, y luego pasando por granos más finos para sacar el brillo. Los trabajos baratos suelen omitir la mitad de estos pasos.",
  },
  {
    category: "Concrete & Epoxy",
    q: "Can I have polished concrete in my house, not just my garage?",
    a: "Absolutely — and it's increasingly popular. Polished concrete works beautifully in living rooms, kitchens, foyers, and entire main floors. Comfortable, easy to clean, allergen-free, and modern.",
    qEs: "¿Puedo tener concreto pulido en mi casa, no solo en el garaje?",
    aEs: "Por supuesto — y cada vez es más popular. El concreto pulido funciona perfectamente en salas, cocinas, vestíbulos y pisos principales completos. Cómodo, fácil de limpiar, libre de alérgenos y moderno.",
  },

  // Stone & Specialty Tile
  {
    category: "Stone & Specialty Tile",
    q: "Can terrazzo that's been covered for decades be brought back?",
    a: "Almost always yes. We've restored terrazzo that had three layers of tile and decades of glue on top. The original surface is usually intact underneath — it just needs the right grinding and polishing.",
    qEs: "¿Se puede recuperar un terrazo que ha estado cubierto por décadas?",
    aEs: "Casi siempre sí. Hemos restaurado terrazo que tenía tres capas de loseta y décadas de pegamento encima. La superficie original suele estar intacta debajo — solo necesita el pulido y abrillantado correctos.",
  },
  {
    category: "Stone & Specialty Tile",
    q: "Can cracked Mexican tile be saved?",
    a: "Some can, some can't. Mexican (Saltillo) tile has a soft outer shell baked by the sun. Once that shell breaks through, we can't fully restore it — but we can clean and seal what's left. We'll be honest about the limits.",
    qEs: "¿Se puede salvar la loseta mexicana rota?",
    aEs: "Algunas sí, otras no. La loseta mexicana (Saltillo) tiene una cáscara exterior suave horneada por el sol. Una vez que esa cáscara se rompe, no podemos restaurarla por completo — pero sí podemos limpiar y sellar lo que queda. Somos honestos sobre los límites.",
  },
  {
    category: "Stone & Specialty Tile",
    q: "Do you restore Cuban tile?",
    a: "Yes. Cuban hydraulic tile (encaustic cement tile with painted patterns) is denser than Saltillo and typically holds up to restoration well. We deep-clean, repair where needed, and seal.",
    qEs: "¿Restauran loseta cubana?",
    aEs: "Sí. La loseta hidráulica cubana (mosaico de cemento con patrones pintados) es más densa que el Saltillo y suele responder bien a la restauración. Hacemos limpieza profunda, reparamos donde sea necesario y sellamos.",
  },
  {
    category: "Stone & Specialty Tile",
    q: "How is marble restored — is it just polishing?",
    a: "Marble restoration is mechanical. We diamond-hone through scratches, etching, and dullness to fresh marble below the damage, then progressively polish back to original gloss. Damage isn't permanent — it's depth.",
    qEs: "¿Cómo se restaura el mármol — solo se pule?",
    aEs: "La restauración del mármol es mecánica. Lijamos con diamante atravesando los rasguños, manchas de ácido y la opacidad hasta llegar a mármol fresco debajo del daño, y luego lo pulimos progresivamente para devolverle el brillo original. El daño no es permanente — es profundidad.",
  },

  // Hardwood & Repair
  {
    category: "Hardwood & Repair",
    q: "Can hardwood floors be refinished, or do they need replacing?",
    a: "Most ¾-inch solid hardwood can be refinished 4-7 times over its life. Engineered wood with a thin veneer may only refinish 1-2 times. We'll inspect first and tell you what your floor will support.",
    qEs: "¿Se puede reacondicionar un piso de madera o hay que reemplazarlo?",
    aEs: "La mayoría de la madera sólida de ¾ de pulgada se puede reacondicionar de 4 a 7 veces durante su vida. La madera de ingeniería con una capa fina solo se puede reacondicionar 1 o 2 veces. Inspeccionamos primero y le decimos lo que su piso aguantará.",
  },
  {
    category: "Hardwood & Repair",
    q: "Do you repair laminate or vinyl?",
    a: "Yes — targeted repair of damaged laminate planks, lifted sections, and damaged vinyl. When repair makes sense, it's faster and cheaper than replacement. When it doesn't, we'll tell you straight.",
    qEs: "¿Reparan laminado o vinilo?",
    aEs: "Sí — reparación puntual de tablas de laminado dañadas, secciones levantadas y vinilo dañado. Cuando la reparación es lo correcto, es más rápida y barata que el reemplazo. Cuando no lo es, se lo decimos directamente.",
  },

  // Pricing & Process
  {
    category: "Pricing & Process",
    q: "How much does floor restoration cost?",
    a: "Every floor is custom-quoted. Cost depends on surface type, prep needed, square footage, and finish. We don't give over-the-phone quotes because every floor is different — but the on-site assessment is free, and the quote is honest with no surprises.",
    qEs: "¿Cuánto cuesta restaurar un piso?",
    aEs: "Cada piso se cotiza a la medida. El costo depende del tipo de superficie, la preparación necesaria, los pies cuadrados y el acabado. No damos presupuestos por teléfono porque cada piso es diferente — pero la evaluación en sitio es gratis y el presupuesto es honesto, sin sorpresas.",
  },
  {
    category: "Pricing & Process",
    q: "What's included in a free assessment?",
    a: "Jose walks the floor with you, identifies what can and can't be done, explains the process, and gives you a transparent quote tied to the actual scope. There's no pressure to commit and no hidden fees later.",
    qEs: "¿Qué incluye una evaluación gratis?",
    aEs: "Jose camina el piso con usted, identifica qué se puede y qué no se puede hacer, le explica el proceso y le entrega un presupuesto transparente atado al alcance real. No hay presión para comprometerse y no hay cargos ocultos después.",
  },
  {
    category: "Pricing & Process",
    q: "How long does a typical project take?",
    a: "Most residential restorations take 1-5 days depending on size and surface. Commercial and industrial projects scale up from there. We'll give you a realistic timeline before work starts.",
    qEs: "¿Cuánto se toma un proyecto típico?",
    aEs: "La mayoría de las restauraciones residenciales toman de 1 a 5 días según el tamaño y la superficie. Los proyectos comerciales e industriales escalan desde ahí. Le damos un cronograma realista antes de empezar.",
  },
  {
    category: "Pricing & Process",
    q: "Do you give written quotes?",
    a: "Yes. Every quote is documented and tied to a specific scope of work. No verbal estimates that change later.",
    qEs: "¿Dan presupuestos por escrito?",
    aEs: "Sí. Cada presupuesto se documenta y se ata a un alcance específico de trabajo. Nada de estimados verbales que cambian después.",
  },
  {
    category: "Pricing & Process",
    q: "Do I need to leave my home during the work?",
    a: "Usually not. We work in sections, contain dust, and try to minimize disruption. Some finishes (like wet polishing) require staying off the floor temporarily. We'll plan around your life.",
    qEs: "¿Tengo que salir de mi casa durante el trabajo?",
    aEs: "Generalmente no. Trabajamos por secciones, contenemos el polvo y minimizamos la molestia. Algunos acabados (como el pulido húmedo) requieren mantenerse fuera del piso temporalmente. Planeamos alrededor de su vida.",
  },

  // Warranty
  {
    category: "Warranty",
    q: "Do you offer a warranty?",
    a: "Yes. Every job is backed by our 1-year warranty. If something isn't right, we come back. Jose stands behind the work personally.",
    qEs: "¿Ofrecen garantía?",
    aEs: "Sí. Cada trabajo está respaldado por nuestra garantía de 1 año. Si algo no está bien, regresamos. Jose respalda el trabajo personalmente.",
  },
  {
    category: "Warranty",
    q: "What does the warranty cover?",
    a: "Workmanship and materials we install. If a finish lifts, a sealer fails, or a repair doesn't hold within the warranty period, we fix it on us.",
    qEs: "¿Qué cubre la garantía?",
    aEs: "La mano de obra y los materiales que instalamos. Si un acabado se levanta, un sellador falla o una reparación no aguanta dentro del período de garantía, lo arreglamos por nuestra cuenta.",
  },
  {
    category: "Warranty",
    q: "What if I notice an issue months after the job?",
    a: "Call us. Even outside the formal warranty, we've come back years later to fix small issues — that's how Jose runs the business. Reputation lives in the follow-through.",
    qEs: "¿Y si noto un problema meses después del trabajo?",
    aEs: "Llámenos. Incluso fuera de la garantía formal, hemos regresado años después para arreglar pequeños detalles — así es como Jose maneja el negocio. La reputación vive en el seguimiento.",
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
