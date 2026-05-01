"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const prefersReduced = useReducedMotion();
  const initial = prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 };
  const animate = prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 };

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[var(--color-charcoal)] text-white">
      {/* Background photography */}
      <div className="absolute inset-0">
        <Image
          src="/images/concrete-epoxy-floor-system-miami.jpg"
          alt="Polished concrete epoxy floor restoration in Miami, FL"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Charcoal-to-rust gradient overlay for legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(28,31,35,0.92) 0%, rgba(46,52,59,0.78) 45%, rgba(58,36,24,0.65) 100%)",
          }}
          aria-hidden
        />
        {/* Rust accent glow */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `radial-gradient(circle at 75% 35%, rgba(176,74,42,0.35), transparent 55%)`,
          }}
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-32 pb-24 sm:px-8 lg:px-12 lg:pt-40">
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <span className="eyebrow text-[var(--color-rust)] block mb-6">
            Family-Owned · Owner-Operated · Miami
          </span>
          <h1 className="font-display font-bold text-[44px] leading-[1.02] tracking-[-0.035em] text-white md:text-[88px] lg:text-[104px]">
            Restoring Floors.
            <br />
            <span className="text-[var(--color-rust)]">Rebuilding</span> Peace of Mind.
          </h1>
          <p className="mt-8 max-w-2xl text-[18px] leading-relaxed text-white/85 md:text-[22px]">
            Family-owned floor restoration in Miami. Thirty years bringing tired
            concrete, terrazzo, marble, and tile back to life — with honest
            quotes, real craftsmanship, and a 1-year warranty.
          </p>
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Button href="/contact" size="lg" showArrow>
              Request Your Free Floor Assessment
            </Button>
            <a
              href={site.phoneHref}
              className="group inline-flex items-center gap-2 text-[15px] font-semibold text-white transition-colors hover:text-[var(--color-rust)]"
            >
              <Phone className="h-4 w-4" />
              Give Us a Call · {site.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
