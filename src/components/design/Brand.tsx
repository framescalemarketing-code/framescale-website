"use client";

type Tone = "color" | "light" | "dark";

// Official logo spec: viewBox="0 -10 200 90"
// Shape 1: rounded rect (bottom-left), shapes 2-5: circles (ascending size, top-right)
const LOGO_VIEWBOX = "0 -10 200 90";

type LogoShape =
  | { type: "rect"; x: number; y: number; w: number; h: number; rx: number }
  | { type: "circle"; cx: number; cy: number; r: number };

const logoShapes: LogoShape[] = [
  { type: "rect",   x: 20,  y: 60, w: 18, h: 18, rx: 6 },
  { type: "circle", cx: 55,  cy: 50, r: 11 },
  { type: "circle", cx: 92,  cy: 38, r: 14 },
  { type: "circle", cx: 132, cy: 24, r: 17 },
  { type: "circle", cx: 175, cy: 10, r: 20 },
];

const palettes: Record<Tone, string[]> = {
  // Official brand gradient (light teal → dark teal)
  color: ["#68B3B5", "#5FA9AB", "#4A9FA1", "#2E8A8C", "#17788E"],
  // White tones for dark backgrounds
  light: ["rgba(255,255,255,0.65)", "rgba(255,255,255,0.75)", "rgba(255,255,255,0.85)", "rgba(255,255,255,0.93)", "#FFFFFF"],
  // Deep teal tones for light backgrounds
  dark:  ["#4A8A93", "#3A737B", "#33646E", "#2D5560", "#264653"],
};

function renderShape(shape: LogoShape, fill: string, key: number) {
  if (shape.type === "rect") {
    return <rect key={key} x={shape.x} y={shape.y} width={shape.w} height={shape.h} rx={shape.rx} fill={fill} />;
  }
  return <circle key={key} cx={shape.cx} cy={shape.cy} r={shape.r} fill={fill} />;
}

interface BrandMarkProps {
  width?: number;
  height?: number;
  tone?: Tone;
  className?: string;
}

export const BrandMark = ({
  width = 80,
  height = 32,
  tone = "color",
  className,
}: BrandMarkProps) => {
  const colors = palettes[tone];
  return (
    <svg
      width={width}
      height={height}
      viewBox={LOGO_VIEWBOX}
      role="img"
      aria-label="FrameScale Inc logo mark"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {logoShapes.map((shape, i) => renderShape(shape, colors[i], i))}
    </svg>
  );
};

interface BrandLockupProps {
  size?: "sm" | "md" | "lg";
  tone?: Tone;
  showInc?: boolean;
  className?: string;
}

const lockupSizes = {
  sm: { mark: 80,  markH: 32, text: "text-[17px]", inc: "text-[10px]", gap: "gap-1.5" },
  md: { mark: 100, markH: 40, text: "text-xl",     inc: "text-xs",     gap: "gap-2"   },
  lg: { mark: 200, markH: 80, text: "text-3xl",    inc: "text-sm",     gap: "gap-3"   },
};

export const BrandLockup = ({
  size = "md",
  tone = "color",
  showInc = true,
  className = "",
}: BrandLockupProps) => {
  const s = lockupSizes[size];
  const textGradient =
    tone === "light"
      ? "text-white"
      : "bg-linear-to-r from-[#68B3B5] to-[#17788E] bg-clip-text text-transparent";
  const incColor = tone === "light" ? "text-white/60" : "text-(--brand-neutral)";

  return (
    <div className={`inline-flex flex-col ${s.gap} ${className}`}>
      <BrandMark width={s.mark} height={s.markH} tone={tone} />
      <div className="flex items-baseline gap-1.5 pl-0.5">
        <span
          className={`font-ui font-bold tracking-tight ${s.text} leading-none ${textGradient}`}
        >
          FrameScale
        </span>
        {showInc && (
          <span className={`font-ui font-medium leading-none ${s.inc} ${incColor}`}>
            Inc
          </span>
        )}
      </div>
    </div>
  );
};
