"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "dark";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 ease-out rounded-[6px] relative overflow-hidden whitespace-nowrap";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--color-rust)] text-white hover:bg-[var(--color-rust-dark)] shadow-sm",
  secondary:
    "bg-[var(--color-cream)] text-[var(--color-charcoal)] hover:bg-[var(--color-stone)]",
  outline:
    "border border-[var(--color-stone)] text-[var(--color-charcoal)] hover:border-[var(--color-rust)] hover:text-[var(--color-rust)] bg-transparent",
  ghost:
    "text-[var(--color-charcoal)] hover:text-[var(--color-rust)] bg-transparent",
  dark: "bg-[var(--color-charcoal)] text-white hover:bg-[var(--color-ink)]",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-base",
  lg: "h-14 px-7 text-base",
};

function CursorGradient({ active }: { active: boolean }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  React.useEffect(() => {
    if (!active) return;
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;
    const onMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.18), transparent 60%)`;
    };
    parent.addEventListener("mousemove", onMove);
    return () => parent.removeEventListener("mousemove", onMove);
  }, [active]);
  if (!active) return null;
  return (
    <span
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 opacity-100 transition-opacity"
    />
  );
}

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type LinkProps = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export function Button(props: ButtonProps | LinkProps) {
  const {
    variant = "primary",
    size = "md",
    showArrow = false,
    className,
    children,
  } = props;

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  const inner = (
    <>
      <CursorGradient active={variant === "primary" || variant === "dark"} />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {showArrow && (
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        )}
      </span>
    </>
  );

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props as LinkProps;
    if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a className={cn("group", classes)} href={href} {...rest}>
          {inner}
        </a>
      );
    }
    return (
      <Link className={cn("group", classes)} href={href}>
        {inner}
      </Link>
    );
  }

  const { ...buttonRest } = props as ButtonProps;
  return (
    <button className={cn("group", classes)} {...buttonRest}>
      {inner}
    </button>
  );
}
