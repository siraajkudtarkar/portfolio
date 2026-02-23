"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

type ClickSpark = {
  id: number;
  x: number;
  y: number;
  rayColor: string;
};

const lightSparkPalette = [
  { rayColor: "rgba(157, 94, 52, 0.82)" },
  { rayColor: "rgba(138, 74, 43, 0.82)" },
  { rayColor: "rgba(127, 75, 40, 0.82)" },
  { rayColor: "rgba(181, 115, 70, 0.82)" },
  { rayColor: "rgba(214, 160, 90, 0.82)" },
];

const darkSparkPalette = [
  { rayColor: "rgba(247, 237, 228, 0.82)" },
  { rayColor: "rgba(215, 196, 182, 0.82)" },
  { rayColor: "rgba(203, 184, 170, 0.82)" },
  { rayColor: "rgba(197, 140, 92, 0.82)" },
  { rayColor: "rgba(228, 212, 198, 0.82)" },
];

const getRandomSparkColors = () => {
  const isDark = document.documentElement.classList.contains("dark");
  const palette = isDark ? darkSparkPalette : lightSparkPalette;
  return palette[Math.floor(Math.random() * palette.length)];
};

export default function InteractionFlair() {
  const [clickSparks, setClickSparks] = useState<ClickSpark[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(media.matches);
    updateMotionPreference();
    media.addEventListener("change", updateMotionPreference);
    return () => media.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    let sparkId = 0;

    const addSpark = (x: number, y: number) => {
      const colors = getRandomSparkColors();
      const spark = { id: sparkId++, x, y, ...colors };
      setClickSparks((prev) => [...prev, spark]);
      window.setTimeout(() => {
        setClickSparks((prev) => prev.filter((item) => item.id !== spark.id));
      }, 560);
    };

    const onPointerDown = (event: PointerEvent) => {
      addSpark(event.clientX, event.clientY);
    };

    window.addEventListener("pointerdown", onPointerDown, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div className="interaction-layer" aria-hidden>
      {clickSparks.map((spark) => (
        <span
          key={spark.id}
          className="interaction-spark"
          style={{
            left: spark.x,
            top: spark.y,
            "--spark-ray-color": spark.rayColor,
          } as CSSProperties}
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <span
              key={index}
              className="interaction-spark-ray"
              style={{ ["--ray-rotation" as string]: `${index * 45}deg` }}
            />
          ))}
        </span>
      ))}
    </div>
  );
}
