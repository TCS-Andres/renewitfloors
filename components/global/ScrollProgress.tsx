"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";

/**
 * Two interactions in one component:
 *   1. A thin rust-colored progress bar pinned to the very top of the viewport
 *      that grows as you scroll down the page.
 *   2. A circular scroll-to-top button that fades in once you've scrolled past
 *      ~600px and smoothly returns to the top on click.
 *
 * Both respect prefers-reduced-motion and only run client-side.
 */
export function ScrollProgress() {
  const [progress, setProgress] = React.useState(0);
  const [showButton, setShowButton] = React.useState(false);

  React.useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? scrollTop / max : 0;
      setProgress(pct);
      setShowButton(scrollTop > 600);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollUp = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <>
      {/* Top progress bar */}
      <div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 right-0 z-[55] h-[2px] bg-transparent"
      >
        <div
          className="h-full origin-left bg-[var(--color-rust)] transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {/* Scroll-to-top button — bottom-right, hidden behind sticky bar on mobile */}
      <button
        type="button"
        onClick={scrollUp}
        aria-label="Scroll to top"
        className={`fixed bottom-24 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-charcoal)] text-white shadow-lg transition-all duration-300 ease-out hover:bg-[var(--color-rust)] hover:-translate-y-0.5 active:scale-95 lg:bottom-8 lg:right-8 lg:h-14 lg:w-14 ${
          showButton
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-3 opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </>
  );
}
