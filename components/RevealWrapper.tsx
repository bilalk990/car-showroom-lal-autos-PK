"use client";
import { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  animation?: "reveal-up" | "reveal-left" | "reveal-right" | "reveal-scale";
  delay?: number;
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
}

export default function RevealWrapper({
  children,
  className = "",
  animation = "reveal-up",
  delay = 0,
  threshold = 0.15,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("revealed"), delay);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    // @ts-ignore
    <Tag ref={ref} className={`${animation} ${className}`}>
      {children}
    </Tag>
  );
}
