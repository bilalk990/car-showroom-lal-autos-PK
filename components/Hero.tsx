"use client";
import { ArrowRight, ChevronDown } from "lucide-react";

const CAR = {
  name: "Huracán Revuelto",
  brand: "Lamborghini",
  tag: "V12 Hybrid · 1001 HP",
  acceleration: "2.5s",
  topSpeed: "350 km/h",
  engine: "6.5L V12 PHEV",
  price: "₨ 8.4 Cr",
  accent: "#FF6B35",
  img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1800&q=90",
};

export default function Hero() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black" id="hero">
      {/* Static Background */}
      <div className="absolute inset-0">
        <img
          src={CAR.img}
          alt={CAR.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 px-10 md:px-20 pb-20 pointer-events-none z-10">
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-[10px] font-black tracking-[0.35em] uppercase px-3 py-1 rounded-full"
            style={{ background: `${CAR.accent}22`, color: CAR.accent, border: `1px solid ${CAR.accent}44` }}
          >
            {CAR.brand}
          </span>
          <span className="text-[10px] text-muted tracking-[0.2em] uppercase">{CAR.tag}</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase text-white mb-6">
          {CAR.name}
        </h1>

        <div className="flex flex-wrap gap-4 mb-8">
          {[
            { label: "0–100", value: CAR.acceleration },
            { label: "Top Speed", value: CAR.topSpeed },
            { label: "Engine", value: CAR.engine },
            { label: "Price", value: CAR.price },
          ].map((s) => (
            <div key={s.label} className="glass px-4 py-2 rounded-xl">
              <p className="text-[9px] text-muted tracking-[0.2em] uppercase">{s.label}</p>
              <p className="text-sm font-black text-white mt-0.5">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-4 pointer-events-auto">
          <a
            href="#inventory"
            className="shimmer-btn flex items-center gap-2 px-7 py-3.5 rounded-full text-void font-black text-sm hover:scale-105 transition-transform"
          >
            Explore Fleet <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full glass border border-white/10 text-white font-bold text-sm hover:scale-105 transition-transform"
          >
            Book Test Drive
          </a>
        </div>
      </div>

      {/* Static scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-50 pointer-events-none">
        <span className="text-[9px] text-muted tracking-[0.25em] uppercase">Explore Below</span>
        <ChevronDown size={16} className="text-neon" />
      </div>
    </div>
  );
}
