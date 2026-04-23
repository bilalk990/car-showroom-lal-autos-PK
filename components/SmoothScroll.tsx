"use client";
import React, { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = React.useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const init = async () => {
      try {
        const Lenis = (await import("@studio-freight/lenis")).default;
        if (lenisRef.current) return; // Already init
        
        lenisRef.current = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 2,
        });

        const raf = (time: number) => {
          lenisRef.current?.raf(time);
          requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);
      } catch (err) {
        console.error("Lenis init failed:", err);
      }
    };

    init();

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  return <>{children}</>;
}
