// Accurate FrameScale logo icon based on actual brand assets
// 5 circles in ascending arc pattern

interface LogoIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export const LogoIcon = ({ width = 120, height = 50, className = "" }: LogoIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Circle 1: Small rounded square (bottom left) */}
      <rect
        x="20"
        y="60"
        width="18"
        height="18"
        rx="6"
        fill="#68B3B5"
      />

      {/* Circle 2: Small-medium circle */}
      <circle
        cx="55"
        cy="50"
        r="11"
        fill="#5FA9AB"
      />

      {/* Circle 3: Medium circle (center) */}
      <circle
        cx="92"
        cy="38"
        r="14"
        fill="#4A9FA1"
      />

      {/* Circle 4: Medium-large circle */}
      <circle
        cx="132"
        cy="24"
        r="17"
        fill="#2E8A8C"
      />

      {/* Circle 5: Large circle (top right) */}
      <circle
        cx="175"
        cy="10"
        r="20"
        fill="#17788E"
      />
    </svg>
  );
};

// Favicon version (optimized for 32x32)
export const FaviconIcon = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circle 1: Small rounded square */}
      <rect x="20" y="60" width="18" height="18" rx="6" fill="#68B3B5" />
      {/* Circle 2: Small-medium */}
      <circle cx="55" cy="50" r="11" fill="#5FA9AB" />
      {/* Circle 3: Medium */}
      <circle cx="92" cy="38" r="14" fill="#4A9FA1" />
      {/* Circle 4: Medium-large */}
      <circle cx="132" cy="24" r="17" fill="#2E8A8C" />
      {/* Circle 5: Large */}
      <circle cx="175" cy="10" r="20" fill="#17788E" />
    </svg>
  );
};
