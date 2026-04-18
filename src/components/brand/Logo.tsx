import { clsx } from "clsx";

/**
 * MIST Ai wordmark — neon gradient pill (dark) or glass pill (light).
 */
export function Logo({
  className,
  variant = "dark",
  size = "md",
}: {
  className?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}) {
  const sizeCls = {
    sm: "text-sm px-2.5 py-1 gap-1.5",
    md: "text-base px-3.5 py-1.5 gap-2",
    lg: "text-lg px-4 py-2 gap-2.5",
  }[size];

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full font-bold tracking-tight",
        variant === "dark"
          ? "bg-gradient-to-r from-[#00E676] to-[#2979FF] text-[#030810]"
          : "bg-white/10 text-[#E8F0FF] border border-white/20 backdrop-blur-sm",
        sizeCls,
        className,
      )}
      aria-label="MIST Ai"
    >
      <svg
        viewBox="0 0 24 24"
        className={clsx(
          size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5",
        )}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="10.25"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <text
          x="12"
          y="16"
          textAnchor="middle"
          fontSize="11"
          fontWeight="700"
          fill="currentColor"
        >
          1
        </text>
      </svg>
      <span>MIST Ai</span>
    </span>
  );
}
