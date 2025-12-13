"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const y = useSpring(mouseY, { stiffness: 200, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer Circle */}
      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="
          fixed top-0 left-0
          w-12 h-12
          rounded-full
          border border-cyan-400
          opacity-70
          pointer-events-none
          z-[998]
        "
      />

      {/* Inner Dot — PERFECTLY CENTERED */}
      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="
          fixed top-0 left-0
          w-3 h-3
          rounded-full
          bg-cyan-300
          pointer-events-none
          z-[999]
        "
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </>
  );
}
