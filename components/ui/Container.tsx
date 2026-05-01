import * as React from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  size = "default",
}: {
  className?: string;
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide";
}) {
  const sizeClass =
    size === "narrow" ? "max-w-4xl" : size === "wide" ? "max-w-[1400px]" : "max-w-7xl";
  return (
    <div className={cn("mx-auto px-6 sm:px-8 lg:px-12", sizeClass, className)}>
      {children}
    </div>
  );
}
