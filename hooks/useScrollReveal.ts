"use client";
import { useEffect, useRef } from "react";

interface Options {
  threshold?: number;
  delay?: number;
}

export function useScrollReveal<T extends HTMLElement>(options: Options = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("revealed");
          }, options.delay ?? 0);
          observer.disconnect();
        }
      },
      { threshold: options.threshold ?? 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.delay, options.threshold]);

  return ref;
}
