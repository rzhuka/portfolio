"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const SIZE = 420;

/** Soft light that trails the pointer. Hidden on touch devices and with reduced motion. */
export function CursorGlow() {
  const x = useMotionValue(-SIZE);
  const y = useMotionValue(-SIZE);
  const smoothX = useSpring(x, { stiffness: 90, damping: 22 });
  const smoothY = useSpring(y, { stiffness: 90, damping: 22 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      x.set(event.clientX - SIZE / 2);
      y.set(event.clientY - SIZE / 2);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return <motion.div className="cursor-glow" style={{ x: smoothX, y: smoothY }} aria-hidden="true" />;
}
