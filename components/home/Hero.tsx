"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "@/components/global/LanguageProvider";

const POSTER_SRC = "/videos/hero-bg-poster.jpg";
const VIDEO_MOBILE = "/videos/hero-bg-mobile.mp4";
const VIDEO_DESKTOP = "/videos/hero-bg-desktop.mp4";
const DESKTOP_QUERY = "(min-width: 1024px)";

/**
 * Hero with an ambient looping background video.
 *
 * Mobile-friendly behavior:
 *   - The <video> renders from initial paint with `poster=hero-bg-poster.jpg`
 *     (~62 KB), so users see the floor immediately, no JS required.
 *   - After mount we pick the right MP4 based on viewport width:
 *       <1024px → 1280x720 H.264 (~3.5 MB)
 *       ≥1024px → 1920x1080 H.264 (~7.2 MB)
 *   - Audio is stripped at encode time (no autoplay restrictions, no bandwidth).
 *   - We respect `prefers-reduced-motion` and `connection.saveData`: when either
 *     is true we never load the video, the poster stays.
 *   - We explicitly call `.load()` then `.play()` after the source is added,
 *     because the `autoplay` attribute alone can fail when the source is
 *     mounted asynchronously (notably on iOS Safari).
 */
export function Hero() {
  const prefersReduced = useReducedMotion();
  const { locale, t } = useTranslation();
  const isEs = locale === "es";

  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = React.useState<string | null>(null);

  // Step 1: pick a source (or skip entirely on reduced-motion / save-data).
  React.useEffect(() => {
    if (prefersReduced) return;

    type ConnectionLike = { saveData?: boolean };
    const nav = navigator as Navigator & {
      connection?: ConnectionLike;
      mozConnection?: ConnectionLike;
      webkitConnection?: ConnectionLike;
    };
    const conn = nav.connection ?? nav.mozConnection ?? nav.webkitConnection;
    if (conn?.saveData) return;

    const isDesktop = window.matchMedia(DESKTOP_QUERY).matches;
    setVideoSrc(isDesktop ? VIDEO_DESKTOP : VIDEO_MOBILE);
  }, [prefersReduced]);

  // Step 2: when the source is added, load and force playback. The autoplay
  // attribute alone is unreliable when src is added after the element mounts.
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v || !videoSrc) return;
    // Belt and suspenders: re-assert muted on the element. iOS Safari is
    // strict that videos must be muted at the moment play() is called.
    v.muted = true;
    v.load();
    const promise = v.play();
    if (promise && typeof promise.catch === "function") {
      // If autoplay is still blocked by browser policy, the poster stays
      // visible. We don't surface an error to the UI.
      promise.catch(() => {});
    }
  }, [videoSrc]);

  const initial = prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 };
  const animate = prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 };

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[var(--color-charcoal)] text-white">
      {/* Background video. Renders from initial paint with the poster as a
          placeholder, so there's no flash of empty space on slow connections. */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={POSTER_SRC}
          aria-hidden
          className="pointer-events-none h-full w-full object-cover object-center"
        >
          {videoSrc && <source src={videoSrc} type="video/mp4" />}
        </video>

        {/* Charcoal-to-rust gradient overlay for legibility */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(28,31,35,0.92) 0%, rgba(46,52,59,0.78) 45%, rgba(58,36,24,0.65) 100%)",
          }}
          aria-hidden
        />
        {/* Rust accent glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage: `radial-gradient(circle at 75% 35%, rgba(176,74,42,0.35), transparent 55%)`,
          }}
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-28 pb-20 sm:px-8 sm:pt-32 sm:pb-24 lg:px-12 lg:pt-40">
        <motion.div
          initial={initial}
          animate={animate}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <span className="eyebrow text-[var(--color-rust)] block mb-6">
            {isEs
              ? "Familiar · Operada por el Dueño · Miami"
              : "Family-Owned · Owner-Operated · Miami"}
          </span>
          <h1 className="font-display font-bold text-[40px] leading-[1.04] tracking-[-0.035em] text-white sm:text-[58px] sm:leading-[1.02] md:text-[88px] lg:text-[104px]">
            {isEs ? (
              <>
                Pisos Restaurados.
                <br />
                <span className="text-[var(--color-rust)]">Tranquilidad</span>{" "}
                Recuperada.
              </>
            ) : (
              <>
                Restoring Floors.
                <br />
                <span className="text-[var(--color-rust)]">Rebuilding</span>{" "}
                Peace of Mind.
              </>
            )}
          </h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/85 sm:mt-8 sm:text-[18px] md:text-[22px]">
            {isEs
              ? "Restauración de pisos de propiedad familiar en Miami. Treinta años devolviendo a la vida concreto, terrazo, mármol y loseta cansados, con presupuestos honestos, artesanía real y garantía de 1 año."
              : "Family-owned floor restoration in Miami. Thirty years bringing tired concrete, terrazzo, marble, and tile back to life, with honest quotes, real craftsmanship, and a 1-year warranty."}
          </p>
          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Button href="/contact" size="lg" showArrow>
              {t("cta.fullFreeAssessment")}
            </Button>
            <a
              href={site.phoneHref}
              className="group inline-flex items-center gap-2 text-[15px] font-semibold text-white transition-colors hover:text-[var(--color-rust)]"
            >
              <Phone className="h-4 w-4" />
              {t("cta.callPrefix")}
              {site.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
