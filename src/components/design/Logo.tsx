"use client";

import { motion } from "motion/react";

interface LogoProps {
  size?: "small" | "medium" | "large" | "favicon";
  variant?: "full" | "icon" | "text";
  showInc?: boolean;
}

export const Logo = ({ size = "medium", variant = "full", showInc = true }: LogoProps) => {
  const sizes = {
    favicon: { width: 32, height: 32, text: 0 },
    small: { width: 40, height: 40, text: 18 },
    medium: { width: 160, height: 50, text: 20 },
    large: { width: 240, height: 75, text: 28 },
  };

  const config = sizes[size];

  // Icon-only variant (5 circles pattern - matches actual logo)
  if (variant === "icon" || size === "favicon") {
    return (
      <svg
        width={size === "favicon" ? 32 : config.width}
        height={size === "favicon" ? 32 : config.height}
        viewBox="0 0 200 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Circle 1: Small rounded square (bottom left) */}
        <rect x="20" y="60" width="18" height="18" rx="6" fill="#68B3B5" />
        {/* Circle 2: Small-medium circle */}
        <circle cx="55" cy="50" r="11" fill="#5FA9AB" />
        {/* Circle 3: Medium circle (center) */}
        <circle cx="92" cy="38" r="14" fill="#4A9FA1" />
        {/* Circle 4: Medium-large circle */}
        <circle cx="132" cy="24" r="17" fill="#2E8A8C" />
        {/* Circle 5: Large circle (top right) */}
        <circle cx="175" cy="10" r="20" fill="#17788E" />
      </svg>
    );
  }

  // Text-only variant
  if (variant === "text") {
    return (
      <div className="flex items-baseline gap-1">
        <span
          className="font-ui font-bold bg-linear-to-r from-[#68B3B5] to-[#17788E] bg-clip-text text-transparent"
          style={{ fontSize: `${config.text}px` }}
        >
          FrameScale
        </span>
        {showInc && (
          <span
            className="font-ui font-normal text-(--brand-neutral)"
            style={{ fontSize: `${config.text * 0.6}px` }}
          >
            Inc
          </span>
        )}
      </div>
    );
  }

  // Full logo (icon + text)
  return (
    <div className="flex flex-col gap-1">
      <svg
        width={config.width}
        height={config.height * 0.4}
        viewBox="0 0 200 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* 5 circles pattern matching actual logo */}
        <rect x="20" y="60" width="18" height="18" rx="6" fill="#68B3B5" />
        <circle cx="55" cy="50" r="11" fill="#5FA9AB" />
        <circle cx="92" cy="38" r="14" fill="#4A9FA1" />
        <circle cx="132" cy="24" r="17" fill="#2E8A8C" />
        <circle cx="175" cy="10" r="20" fill="#17788E" />
      </svg>
      <div className="flex items-baseline gap-1">
        <span
          className="font-ui font-bold bg-linear-to-r from-[#68B3B5] to-[#17788E] bg-clip-text text-transparent"
          style={{ fontSize: `${config.text}px`, lineHeight: 1 }}
        >
          FrameScale
        </span>
        {showInc && (
          <span
            className="font-ui font-normal text-(--brand-neutral)"
            style={{ fontSize: `${config.text * 0.6}px`, lineHeight: 1 }}
          >
            Inc
          </span>
        )}
      </div>
    </div>
  );
};

// Using your actual logo image
interface LogoImageProps {
  size?: "small" | "medium" | "large";
  variant?: "horizontal" | "stacked";
}

export const LogoImage = ({ size = "medium", variant = "horizontal" }: LogoImageProps) => {
  const sizes = {
    small: { width: 120, height: 40 },
    medium: { width: 200, height: 60 },
    large: { width: 300, height: 90 },
  };

  const config = sizes[size];
  const logoSrc = variant === "stacked"
    ? "/assets/design/FrameScale_v5_4.png"
    : "/assets/design/FrameScale_v5_1.png";

  return (
    <img
      src={logoSrc}
      alt="FrameScale Inc"
      width={config.width}
      height={config.height}
      className="object-contain"
    />
  );
};

// Animated logo for hero/special sections
export const AnimatedLogo = () => {
  const circles = [
    { type: 'rect', x: 20, y: 60, width: 18, height: 18, rx: 6, fill: "#68B3B5", delay: 0 },
    { type: 'circle', cx: 55, cy: 50, r: 11, fill: "#5FA9AB", delay: 0.1 },
    { type: 'circle', cx: 92, cy: 38, r: 14, fill: "#4A9FA1", delay: 0.2 },
    { type: 'circle', cx: 132, cy: 24, r: 17, fill: "#2E8A8C", delay: 0.3 },
    { type: 'circle', cx: 175, cy: 10, r: 20, fill: "#17788E", delay: 0.4 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-2"
    >
      <motion.svg
        width={140}
        height={50}
        viewBox="0 0 200 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {circles.map((shape, i) => {
          if (shape.type === 'rect') {
            return (
              <motion.rect
                key={i}
                x={shape.x}
                y={shape.y}
                width={shape.width}
                height={shape.height}
                rx={shape.rx}
                fill={shape.fill}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: shape.delay, duration: 0.3 }}
              />
            );
          }
          return (
            <motion.circle
              key={i}
              cx={shape.cx}
              cy={shape.cy}
              r={shape.r}
              fill={shape.fill}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: shape.delay, duration: 0.3 }}
            />
          );
        })}
      </motion.svg>
      <div className="flex items-baseline gap-1">
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="font-ui font-bold text-2xl bg-linear-to-r from-[#68B3B5] to-[#17788E] bg-clip-text text-transparent"
        >
          FrameScale
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="font-ui font-normal text-sm text-(--brand-neutral)"
        >
          Inc
        </motion.span>
      </div>
    </motion.div>
  );
};
