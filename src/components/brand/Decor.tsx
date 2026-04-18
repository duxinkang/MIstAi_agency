import { clsx } from "clsx";

/** Grid-filled circle (top-right deck motif) */
export function GridCircle({
  className,
  size = 140,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={clsx("sp-grid-circle", className)}
      style={{ width: size, height: size }}
    />
  );
}

/** 4x4 or 5x4 dot matrix decoration */
export function DotMatrix({
  className,
  cols = 5,
  rows = 4,
  dotSize = 6,
  gap = 14,
  color = "currentColor",
}: {
  className?: string;
  cols?: number;
  rows?: number;
  dotSize?: number;
  gap?: number;
  color?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={cols * gap}
      height={rows * gap}
    >
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((_, c) => (
          <circle
            key={`${r}-${c}`}
            cx={c * gap + dotSize / 2}
            cy={r * gap + dotSize / 2}
            r={dotSize / 2}
            fill={color}
          />
        )),
      )}
    </svg>
  );
}

/** The curved line + open circle (section transition motif) */
export function ArcLine({
  className,
  size = 200,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
    >
      <path
        d="M 10 190 Q 10 60, 190 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Chevron arrows (P5 motif) */
export function Chevrons({
  className,
  count = 5,
}: {
  className?: string;
  count?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={clsx("flex items-center gap-1", className)}
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          style={{ opacity: 0.4 + i * 0.12 }}
        >
          <path
            d="M5 3L11 9L5 15"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}
