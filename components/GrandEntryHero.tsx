"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./GrandEntryHero.module.css";

const CAR_IMG = "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=1800&q=90";
// Local HD car video
const BG_VIDEO = "/car-video.mp4";

export default function GrandEntryHero() {
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapperRef    = useRef<HTMLDivElement>(null);
  const leftPanelRef  = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const brandNameRef  = useRef<HTMLHeadingElement>(null);
  const brandSubRef   = useRef<HTMLParagraphElement>(null);
  const neonGlowRef   = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    let ctx: any;

    const init = async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: "top top",
              end: "+=150%",
              scrub: 1.5,
              pin: true,
              anticipatePin: 1,
              refreshPriority: 10,
            },
          });

          // Keep horizontal split for both mobile and desktop
          tl
            .to(leftPanelRef.current,  { x: "-100%", ease: "power2.inOut" }, 0)
            .to(rightPanelRef.current, { x: "100%",  ease: "power2.inOut" }, 0)
            .fromTo(
              brandNameRef.current,
              { letterSpacing: "-0.02em", opacity: 0.6 },
              { letterSpacing: "0.18em",  opacity: 1, ease: "power2.out" },
              0
            )
            .to(brandSubRef.current,   { opacity: 1, ease: "power2.out" }, 0.3)
            .to(neonGlowRef.current,   { opacity: 1, ease: "power2.out" }, 0.5)
            .to(scrollHintRef.current, { opacity: 0, ease: "power2.out" }, 0);
        }, wrapperRef);
      } catch (err) {
        console.error("GSAP init failed:", err);
      }
    };

    init();
    return () => ctx?.revert();
  }, [mounted]);

  if (!mounted) {
    return <div className={styles.container} style={{ background: '#050505' }} />;
  }

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div className={styles.container}>
        {/* Background */}
        <div className={styles.bg}>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            preload="auto"
            className={styles.bgVideo}
          >
            <source src={BG_VIDEO} type="video/mp4" />
          </video>
          <div className={styles.bgOverlay} />
          <div ref={neonGlowRef} className={styles.neonGlow} />
        </div>

        {/* Curtain Panels */}
        <div className={styles.curtains}>
          <div ref={leftPanelRef} className={`${styles.panel} ${styles.panelLeft}`}>
            <img src={CAR_IMG} alt="" className={styles.panelImg} style={{ left: 0 }} />
          </div>
          <div ref={rightPanelRef} className={`${styles.panel} ${styles.panelRight}`}>
            <img src={CAR_IMG} alt="" className={styles.panelImg} style={{ right: 0 }} />
          </div>
        </div>

        {/* Brand */}
        <div className={styles.brand}>
          <h1 ref={brandNameRef} className={styles.brandName}>Laal Motors</h1>
          <p  ref={brandSubRef}  className={styles.brandSub}>Precision · Performance · Prestige</p>
        </div>

        {/* Scroll hint */}
        <div ref={scrollHintRef} className={styles.scrollHint}>
          <div className={styles.scrollHintLine} />
          <span className={styles.scrollHintText}>Scroll to reveal</span>
        </div>
      </div>
    </div>
  );
}
