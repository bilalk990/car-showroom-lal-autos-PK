"use client";
import { useEffect, useRef } from "react";
import { inventory } from "@/constants/inventory";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CARS = inventory.slice(0, 6);

export default function ShowcaseMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;

    const initGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const track = trackRef.current;
        const container = containerRef.current;
        if (!track || !container) return;

        // Reset previous transforms
        gsap.set(track, { x: 0 });

        // Calculate the exact distance to scroll horizontally
        const getScrollAmount = () => track.scrollWidth - window.innerWidth;

        // GSAP Animation + ScrollTrigger
        gsap.to(track, {
          // Dynamic function ensures recalculation on window resize
          x: () => -getScrollAmount(),
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            // The end value exactly matches the horizontal scroll distance 
            // for a 1:1 scroll speed feel
            end: () => `+=${getScrollAmount()}`, 
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true, // Recalculates on window resize
            anticipatePin: 1,
          },
        });
      }, containerRef);
    };

    // Delay ensures images and DOM fonts are loaded before width calculation
    const timer = setTimeout(initGSAP, 500);

    return () => {
      clearTimeout(timer);
      ctx?.revert();
    };
  }, []);

  return (
    // Added 'max-w-full' to prevent any horizontal scrollbar bugs from the container
    <section ref={containerRef} className="bg-void overflow-hidden w-full max-w-full">
      <div className="relative h-screen flex items-center">
        
        {/* Header — top left */}
        <div className="absolute top-10 md:top-20 left-6 md:left-20 z-20 pointer-events-none">
          <p className="text-[10px] md:text-sm text-[#FF0000] font-bold uppercase tracking-[0.4em] mb-2">
            Featured Collection
          </p>
          <h2 className="text-3xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">
            Scroll to <br />
            <span style={{ color: "#FF0000", textShadow: "0 0 40px rgba(255,0,0,0.5)" }}>
              Explore
            </span>
          </h2>
          <div className="flex items-center gap-3 mt-4 md:mt-8">
            <div className="w-8 h-[1px] bg-white/20" />
            <span className="text-[10px] text-white/30 uppercase tracking-widest">Swipe or scroll</span>
            <ArrowRight size={12} className="text-white/30" />
          </div>
        </div>

        {/* Cards track */}
        <div
          ref={trackRef}
          className="flex flex-row items-center gap-8 md:gap-16 pl-[15vw] md:pl-[25vw]"
          style={{ width: "max-content", willChange: "transform" }}
        >
          {CARS.map((car, i) => (
            <Link
              key={car.id}
              href={`/inventory/${car.id}`}
              className="group relative card-shine flex-shrink-0 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 bg-panel shadow-[0_30px_80px_rgba(0,0,0,0.9)] hover:border-white/20 transition-all duration-700"
              style={{
                width: "clamp(280px, 80vw, 520px)",
                height: "clamp(400px, 65vh, 620px)",
              }}
            >
              <img
                src={car.img}
                alt={car.name}
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Brand Label */}
              <div
                className="absolute top-6 left-6 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] z-10"
                style={{ background: car.color + "33", color: car.color, border: `1px solid ${car.color}66`, backdropFilter: 'blur(8px)' }}
              >
                {car.brand}
              </div>

              {/* Number */}
              <div className="absolute top-6 right-8 text-white/10 font-black text-4xl md:text-7xl leading-none z-0">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-20">
                <p className="text-[10px] md:text-sm text-white/40 uppercase tracking-[0.3em] mb-2">{car.type}</p>
                <h3 className="text-xl md:text-4xl font-black uppercase tracking-tight text-white mb-4 md:mb-8 leading-tight">
                  {car.name}
                </h3>
                
                <div className="flex items-center gap-4 md:gap-8 mb-6 md:mb-10">
                  <div>
                    <div className="text-[8px] md:text-[10px] text-white/30 uppercase tracking-widest mb-1">Power</div>
                    <div className="text-sm md:text-xl font-bold" style={{ color: car.color }}>{car.hp} HP</div>
                  </div>
                  <div className="w-px h-6 md:h-10 bg-white/10" />
                  <div>
                    <div className="text-[8px] md:text-[10px] text-white/30 uppercase tracking-widest mb-1">Top Speed</div>
                    <div className="text-sm md:text-xl font-bold" style={{ color: car.color }}>{car.topSpeed}</div>
                  </div>
                  <div className="w-px h-6 md:h-10 bg-white/10" />
                  <div>
                    <div className="text-[8px] md:text-[10px] text-white/30 uppercase tracking-widest mb-1">0-100</div>
                    <div className="text-sm md:text-xl font-bold" style={{ color: car.color }}>{car.acceleration}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-white/30 uppercase tracking-widest">Ex-Stock Price</span>
                    <span className="text-2xl md:text-4xl font-black text-white">{car.priceStr}</span>
                  </div>
                  <div
                    className="flex items-center gap-2 px-6 py-3 rounded-xl text-black text-[10px] md:text-sm font-black uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
                    style={{ background: car.color }}
                  >
                    Details <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
          {/* End spacer - ensures the last card doesn't stick to the screen edge */}
          <div className="w-[10vw] flex-shrink-0" />
        </div>

        {/* BG Large Text */}
        <div className="absolute bottom-8 left-0 w-full whitespace-nowrap opacity-[0.02] select-none pointer-events-none font-black text-[30vw] md:text-[20vw] leading-none uppercase tracking-tighter text-white overflow-hidden z-0">
          LAAL MOTORS PRECISION SPEED
        </div>
      </div>
    </section>
  );
}