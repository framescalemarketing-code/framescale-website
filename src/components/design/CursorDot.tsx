"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Premium cursor follower: subtle tinted dot that tracks the pointer.
 * - Only renders on devices with a fine pointer (mouse / trackpad).
 * - Disabled when prefers-reduced-motion is set.
 * - Subtly grows / brightens over interactive elements.
 */
export const CursorDot = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const interactive = useRef(false);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- enable only after client-only media query check
    setEnabled(true);

    const onMove = (e: PointerEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      const t = e.target as HTMLElement | null;
      interactive.current = !!t?.closest("a, button, [role='button'], input, textarea, select, label");
    };

    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };
    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = "1";
    };

    const tick = () => {
      const dx = target.current.x - current.current.x;
      const dy = target.current.y - current.current.y;
      current.current.x += dx * 0.22;
      current.current.y += dy * 0.22;
      if (dotRef.current) {
        const scale = interactive.current ? 1.9 : 1;
        dotRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
        dotRef.current.style.background = interactive.current
          ? "rgba(23,120,142,0.55)"
          : "rgba(23,120,142,0.32)";
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerenter", onEnter);
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerenter", onEnter);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  if (!enabled) return null;
  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-70 h-3 w-3 rounded-full mix-blend-multiply transition-[background,opacity] duration-200"
      style={{ opacity: 1 }}
    />
  );
};
