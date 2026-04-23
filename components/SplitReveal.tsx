"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./SplitReveal.module.css";

interface SplitRevealProps {
  image: string;
  title: string;
  subtitle?: string;
  height?: string;
}

export default function SplitReveal({ image, title, subtitle, height = "70vh" }: SplitRevealProps) {
  const [mounted, setMounted] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !wrapperRef.current) return;
    
    let ctx: any;

    const init = async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          // Check if all refs are available
          if (!leftPanelRef.current || !rightPanelRef.current || !textRef.current) {
            return;
          }

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top 60%",
              end: "bottom 40%",
              scrub: 1,
            },
          });

          tl
            .to(leftPanelRef.current, { x: "-100%", ease: "power2.inOut" }, 0)
            .to(rightPanelRef.current, { x: "100%", ease: "power2.inOut" }, 0)
            .fromTo(
              textRef.current,
              { opacity: 0, scale: 0.9 },
              { opacity: 1, scale: 1, ease: "power2.out" },
              0.2
            );
        }, wrapperRef);
      } catch (err) {
        console.error("GSAP init failed:", err);
      }
    };

    init();
    return () => {
      if (ctx) ctx.revert();
    };
  }, [mounted]);

  if (!mounted) {
    return <div style={{ height }} className="relative w-full bg-void" />;
  }

  return (
    <div ref={wrapperRef} className={styles.wrapper} style={{ height }}>
      <div className={styles.container}>
        {/* Background Image */}
        <div className={styles.bgImage}>
          <img src={image} alt="" className={styles.bgImg} />
        </div>

        {/* Curtain Panels */}
        <div className={styles.curtains}>
          <div ref={leftPanelRef} className={`${styles.panel} ${styles.panelLeft}`}>
            <img src={image} alt="" className={styles.panelImg} />
          </div>
          <div ref={rightPanelRef} className={`${styles.panel} ${styles.panelRight}`}>
            <img src={image} alt="" className={styles.panelImg} />
          </div>
        </div>

        {/* Text */}
        <div ref={textRef} className={styles.textContent}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
