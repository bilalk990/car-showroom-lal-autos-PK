"use client";
import { Gauge, Zap, Clock, Flame } from "lucide-react";
import RevealWrapper from "./RevealWrapper";

const specs = [
  {
    icon: Gauge,
    label: "Top Speed",
    value: "217",
    unit: "mph",
    sub: "Bugatti Chiron Flagship",
    desc: "Unrivaled velocity engineered for the most daring drivers on the planet.",
  },
  {
    icon: Clock,
    label: "0 – 60",
    value: "2.3",
    unit: "sec",
    sub: "Lamborghini Huracán EVO",
    desc: "Instantaneous acceleration that defies the laws of physics.",
  },
  {
    icon: Zap,
    label: "Horsepower",
    value: "1,479",
    unit: "hp",
    sub: "Porsche Taycan Turbo GT",
    desc: "A surgical strike of electrical power and precision engineering.",
  },
  {
    icon: Flame,
    label: "Peak Torque",
    value: "1,180",
    unit: "Nm",
    sub: "Ferrari SF90 Stradale",
    desc: "Raw, unadulterated force delivered with Italian elegance.",
  },
];

export default function SpecGrid() {
  return (
    <section className="relative py-16 md:py-24 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-20">
        {/* Left */}
        <RevealWrapper animation="reveal-left" className="lg:w-1/3 lg:pt-10">
          <p className="text-xs text-neon tracking-[0.4em] uppercase mb-4">Mastery & Precision</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none uppercase mb-6">
            Engineered <br />
            <span className="neon-text">Dominance</span>
          </h2>
          <p className="text-muted text-base leading-relaxed">
            Our curated fleet represents the pinnacle of human engineering. Witness
            the metrics that define the Laal Motors standard.
          </p>
        </RevealWrapper>

        {/* Right */}
        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
          {specs.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <RevealWrapper
                key={spec.label}
                animation="reveal-scale"
                delay={i * 120}
              >
                <div className="glass card-shine p-6 md:p-8 rounded-[1.5rem] border border-white/10 shadow-xl relative overflow-hidden h-full">
                  <div className="absolute top-0 right-0 p-6 opacity-5">
                    <Icon size={64} className="text-neon" />
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-neon" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted tracking-widest uppercase">{spec.label}</p>
                      <p className="text-sm font-bold text-white truncate">{spec.sub}</p>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-5xl md:text-6xl font-black tracking-tighter">{spec.value}</span>
                    <span className="text-xl font-bold text-neon uppercase">{spec.unit}</span>
                  </div>

                  <p className="text-muted text-sm leading-relaxed">{spec.desc}</p>
                </div>
              </RevealWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
