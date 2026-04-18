import { clsx } from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link } from "@/i18n/navigation";

type Variant = "primary" | "ink" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-orange-500 text-white hover:bg-orange-600 shadow-sm active:scale-[0.98]",
  ink: "bg-ink text-white hover:bg-orange-500",
  ghost: "bg-transparent text-ink hover:bg-ink/5",
  outline: "bg-transparent text-ink border border-ink/20 hover:border-ink/60",
};
const sizes: Record<Size, string> = {
  sm: "text-sm px-4 py-2",
  md: "text-base px-6 py-3",
  lg: "text-lg px-8 py-4",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  href?: any;
  external?: boolean;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  external,
  ...rest
}: CommonProps & Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps>) {
  const cls = clsx(
    "inline-flex items-center justify-center rounded-full font-semibold tracking-wide transition-all",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href as string}
          className={cls}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
