"use client";

import * as React from "react";
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
      {/* Background imagery — gradient + texture stand-in until real photography is supplied */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#1A1D22] via-[#2E343B] to-[#3A2418]"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 30%, rgba(176,74,42,0.4), transparent 50%), radial-gradient(circle at 20% 80%, rgba(176,74,42,0.15), transparent 50%)`,
          }}
          aria-hidden
        />
        {/* Subtle noise overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
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
