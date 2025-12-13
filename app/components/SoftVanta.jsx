"use client";

import React, { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import p5 from "p5";

export default function SoftVanta() {
  const vantaRef = useRef(null);
  const [effect, setEffect] = useState(null);

  useEffect(() => {
    if (!effect) {
      setEffect(
        NET({
          el: vantaRef.current,
          p5: p5,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          color: 0x66f0ff,        // Light cyan
          backgroundColor: 0x0a0f1c,
          maxDistance: 15,
          spacing: 18,
        })
      );
    }
    return () => effect && effect.destroy();
  }, [effect]);

  return (
    <div
      ref={vantaRef}
      className="w-[350px] h-[350px] md:w-[430px] md:h-[430px]
      opacity-40 blur-sm"
    ></div>
  );
}
