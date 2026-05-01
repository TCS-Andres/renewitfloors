"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "article" | "header" | "li";
  id?: string;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
  id,
}: RevealProps) {
  const prefersReduced = useReducedMotion();
  const initial = prefersReduced ? { opacity: 0 } : { opacity: 0, y };
  const animate = prefersReduced ? { opacity: 1 } : { opacity: 1, y: 0 };

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      id={id}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      className={cn(className)}
    >
      {children}
    </MotionTag>
  );
}
