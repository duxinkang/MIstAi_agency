import { clsx } from "clsx";

/**
 * StartPoint wordmark: "①StartPoint" on a black pill.
 * Matches the in-deck brand mark.
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
          ? "bg-ink text-white"
          : "bg-white text-ink border border-ink/10",
        sizeCls,
        className,
      )}
      aria-label="StartPoint"
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
      <span>StartPoint</span>
    </span>
  );
}
