import type { ReactNode } from "react";

/**
 * The scale motif. The logo is one small rounded square growing into four
 * circles; this is that idea drawn as a lens: concentric rings that draw
 * themselves outward, a ruler of ticks on the barrel, one rounded square (the
 * "frame") sitting on the outer ring, and four dots that grow up and to the
 * right like the logo's circles. Children show through the innermost ring like
 * a lens aperture.
 *
 * Server component with no client script: the draw-in is a CSS animation
 * (`.ring-draw` in globals.css) so the reduced-motion rules apply to it with no
 * extra code, and it works with scripting off.
 */

const CENTER = 200;
const APERTURE_R = 104;
const RING_RADII = [APERTURE_R, 134, 164, 192] as const;
const TICK_COUNT = 72;
const DOT_ANGLE = -48;
const DOT_SIZES = [4, 5.5, 7, 8.5] as const;
const FRAME_ANGLE = 138;
const FRAME_SIZE = 30;

const round = (n: number) => Math.round(n * 100) / 100;
const polar = (radius: number, degrees: number) => {
  const radians = (degrees * Math.PI) / 180;
  return { x: round(CENTER + radius * Math.cos(radians)), y: round(CENTER + radius * Math.sin(radians)) };
};

const TICKS = Array.from({ length: TICK_COUNT }, (_, index) => {
  const angle = (360 / TICK_COUNT) * index;
  const long = index % 6 === 0;
  const from = polar(195, angle);
  const to = polar(long ? 200 : 197.5, angle);
  return { key: index, x1: from.x, y1: from.y, x2: to.x, y2: to.y, long };
});

type RingsProps = {
  /** Shown inside the innermost ring. Fills a circle that is 50% of the width. */
  children?: ReactNode;
  className?: string;
};

export function Rings({ children, className = "" }: RingsProps) {
  const frame = polar(RING_RADII[3], FRAME_ANGLE);
  const stroke = { stroke: "var(--ring-line)" } as const;
  const fill = { fill: "var(--ring-line)" } as const;

  return (
    <div className={`relative aspect-square w-full ${className}`}>
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 size-full overflow-visible"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <g className="ring-fade" style={{ ...stroke, ["--i" as string]: 5 }}>
          {TICKS.map((tick) => (
            <line
              key={tick.key}
              x1={tick.x1}
              y1={tick.y1}
              x2={tick.x2}
              y2={tick.y2}
              strokeWidth={tick.long ? 1.2 : 0.8}
              opacity={tick.long ? 0.7 : 0.4}
            />
          ))}
        </g>

        {RING_RADII.map((radius, index) => (
          <circle
            key={radius}
            className="ring-draw"
            cx={CENTER}
            cy={CENTER}
            r={radius}
            pathLength={1}
            strokeWidth={index === 0 ? 1.6 : 1}
            opacity={[1, 0.62, 0.4, 0.26][index]}
            style={{ ...stroke, ["--i" as string]: index }}
          />
        ))}

        {RING_RADII.map((radius, index) => {
          const point = polar(radius, DOT_ANGLE);
          return (
            <circle
              key={`dot-${radius}`}
              className="ring-fade"
              cx={point.x}
              cy={point.y}
              r={DOT_SIZES[index]}
              style={{ ...fill, ["--i" as string]: index + 3 }}
            />
          );
        })}

        <rect
          className="ring-fade"
          x={round(frame.x - FRAME_SIZE / 2)}
          y={round(frame.y - FRAME_SIZE / 2)}
          width={FRAME_SIZE}
          height={FRAME_SIZE}
          rx={8}
          strokeWidth={1.4}
          style={{ ...stroke, fill: "var(--brand-deep)", ["--i" as string]: 6 }}
        />
      </svg>

      {children ? (
        <div className="absolute top-1/2 left-1/2 aspect-square w-[50%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
          {children}
        </div>
      ) : null}
    </div>
  );
}
