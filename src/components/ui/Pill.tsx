import { clsx } from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export function Pill({
  children,
  variant = "orange",
  size = "md",
  className,
  ...rest
}: {
  children: ReactNode;
  variant?: "orange" | "ink" | "soft" | "outline";
  size?: "sm" | "md" | "lg";
} & ComponentPropsWithoutRef<"span">) {
  const variants = {
    orange:  "bg-[#00E676] text-[#030810]",
    ink:     "bg-[#0D1830] text-[#E8F0FF] border border-white/15",
    soft:    "bg-[rgba(0,230,118,0.12)] text-[#00E676] border border-[#00E676]/25",
    outline: "bg-transparent text-[#E8F0FF] border border-white/25",
  };
  const sizes = {
    sm: "text-xs px-2.5 py-1",
    md: "text-sm px-3.5 py-1.5",
    lg: "text-base px-5 py-2",
  };
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-full font-semibold tracking-wide",
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
