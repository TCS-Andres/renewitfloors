"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

type Item = { q: React.ReactNode; a: React.ReactNode };

export function Accordion({
  items,
  className,
}: {
  items: Item[];
  className?: string;
}) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const prefersReduced = useReducedMotion();

  return (
    <div className={cn("divide-y divide-[var(--color-stone)] border-t border-b border-[var(--color-stone)]", className)}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="group flex w-full items-center justify-between gap-6 py-6 text-left md:py-8"
              aria-expanded={isOpen}
            >
              <span className="font-display text-[20px] font-semibold text-[var(--color-charcoal)] md:text-[22px]">
                {item.q}
              </span>
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-stone)] transition-colors group-hover:border-[var(--color-rust)] group-hover:text-[var(--color-rust)]",
                  isOpen && "border-[var(--color-rust)] text-[var(--color-rust)]",
                )}
                aria-hidden
              >
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={prefersReduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
                  animate={prefersReduced ? { opacity: 1 } : { opacity: 1, height: "auto" }}
                  exit={prefersReduced ? { opacity: 0 } : { opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pr-12 text-[17px] leading-relaxed text-[var(--color-slate)] md:pb-8">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
