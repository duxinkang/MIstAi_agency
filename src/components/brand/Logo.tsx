import Image from "next/image";
import { clsx } from "clsx";

/**
 * MIST Ai brand mark — circular logo image.
 */
export function Logo({
  className,
  size = "md",
}: {
  className?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}) {
  const dimension = { sm: 28, md: 36, lg: 44 }[size];

  return (
    <span
      className={clsx("inline-flex items-center gap-2.5", className)}
      aria-label="MIST Ai"
    >
      <Image
        src="/brand/logo.jpg"
        alt="MIST Ai"
        width={dimension}
        height={dimension}
        priority
        className="rounded-full shrink-0"
      />
      <span
        className={clsx(
          "font-bold tracking-tight text-[#E8F0FF]",
          size === "sm" ? "text-sm" : size === "lg" ? "text-xl" : "text-base",
        )}
      >
        MIST Ai
      </span>
    </span>
  );
}
