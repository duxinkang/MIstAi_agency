import { clsx } from "clsx";

/**
 * The signature double-sphere gradient from the deck — two overlapping orbs
 * with a warm→indigo radial gradient. Pure CSS, no image assets.
 */
export function DoubleBall({
  className,
  size = 560,
  offset = 120,
}: {
  className?: string;
  size?: number;
  offset?: number;
}) {
  return (
    <div
      className={clsx("relative pointer-events-none", className)}
      style={{ width: size + offset, height: size }}
      aria-hidden="true"
    >
      <div
        className="sp-ball absolute top-0 left-0"
        style={{ width: size, height: size }}
      />
      <div
        className="sp-ball-warm absolute top-0 mix-blend-multiply"
        style={{
          width: size,
          height: size,
          left: offset,
          opacity: 0.92,
        }}
      />
    </div>
  );
}

/**
 * Single gradient orb — used as a section accent.
 */
export function SingleBall({
  className,
  size = 400,
  variant = "warm",
}: {
  className?: string;
  size?: number;
  variant?: "warm" | "deep";
}) {
  return (
    <div
      aria-hidden="true"
      className={clsx(
        variant === "warm" ? "sp-ball-warm" : "sp-ball",
        className,
      )}
      style={{ width: size, height: size }}
    />
  );
}
