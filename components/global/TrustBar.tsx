import * as React from "react";
import { site } from "@/lib/site";

export function TrustBar({ tone = "charcoal" }: { tone?: "charcoal" | "cream" }) {
  const bg = tone === "charcoal" ? "bg-[var(--color-charcoal)]" : "bg-[var(--color-cream)]";
  const stat = tone === "charcoal" ? "text-white" : "text-[var(--color-charcoal)]";
  const label = tone === "charcoal" ? "text-[var(--color-cream)]/70" : "text-[var(--color-slate)]";
  const divider = tone === "charcoal" ? "bg-white/10" : "bg-[var(--color-stone)]";

  return (
    <div className={`${bg}`}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-px md:grid-cols-4 md:gap-0">
          {site.trustBar.map((item, i) => (
            <div
              key={item.stat}
              className={`flex flex-col items-start gap-1 py-7 md:py-9 ${
                i > 0 ? `md:relative md:before:absolute md:before:left-0 md:before:top-1/2 md:before:h-10 md:before:w-px md:before:-translate-y-1/2 md:before:${divider}` : ""
              } md:px-8 ${i === 0 ? "md:pl-0" : ""} ${i === 3 ? "md:pr-0" : ""}`}
            >
              <span className={`font-display text-[36px] font-bold leading-none tracking-tight ${stat} md:text-[44px]`}>
                {item.stat}
              </span>
              <span className={`text-[13px] font-medium leading-snug ${label} md:text-[14px]`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
