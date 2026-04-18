import { clsx } from "clsx";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
  size = "xl",
}: {
  children: ReactNode;
  className?: string;
  size?: "md" | "lg" | "xl" | "full";
}) {
  const sizes = {
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-[1440px]",
  };
  return (
    <div className={clsx("mx-auto px-6 md:px-10 lg:px-16", sizes[size], className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
  bg = "paper",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: "paper" | "cream" | "orange" | "ink" | "white" | "bone";
}) {
  const backgrounds = {
    paper: "bg-[#060D1C] text-[#E8F0FF]",
    cream: "bg-[#0A1428] text-[#E8F0FF]",
    bone:  "bg-[#0D1830] text-[#E8F0FF]",
    orange:"bg-[#060D1C] text-[#E8F0FF]",
    ink:   "bg-[#030810] text-[#E8F0FF]",
    white: "bg-[#0D1830] text-[#E8F0FF]",
  };
  return (
    <section
      id={id}
      className={clsx(
        "relative overflow-hidden py-20 md:py-28 lg:py-32",
        backgrounds[bg],
        className,
      )}
    >
      {children}
    </section>
  );
}
