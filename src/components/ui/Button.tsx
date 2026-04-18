import { clsx } from "clsx";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link } from "@/i18n/navigation";

type Variant = "primary" | "ink" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#00E676] text-[#030810] hover:bg-[#00C853] shadow-[0_0_24px_rgba(0,230,118,0.3)] active:scale-[0.98]",
  ink:
    "bg-[#0D1830] text-[#E8F0FF] border border-white/15 hover:border-[#00E676]/50 hover:text-[#00E676]",
  ghost:
    "bg-transparent text-[#E8F0FF] hover:bg-white/5",
  outline:
    "bg-transparent text-[#E8F0FF] border border-white/25 hover:border-white/50 hover:bg-white/5",
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
    const isHash = typeof href === "string" && href.startsWith("#");
    if (external || isHash) {
      return (
        <a
          href={href as string}
          className={cls}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
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
