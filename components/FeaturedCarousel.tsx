"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { inventory } from "@/constants/inventory";

const featuredCars = inventory.slice(0, 4).map((car) => ({
  ...car,
  tag: car.id === 1 ? "New Arrival" : car.id === 2 ? "Hot Pick" : car.id === 3 ? "Limited" : "Best Seller",
}));

export default function FeaturedCarousel() {
  return (
    <section id="carousel" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-10">
        <p className="text-xs text-neon tracking-[0.3em] uppercase mb-3">Featured Collection</p>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
          Fresh from the <span className="neon-text">Factory</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {featuredCars.map((car) => (
            <Link key={car.id} href={`/inventory/${car.id}`} className="block group">
              <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-panel shadow-lg hover:border-neon/30 transition-all duration-300 h-full flex flex-col">
                {/* Image */}
                <div className="relative h-36 md:h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={car.img}
                    alt={car.name}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <span
                    className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[10px] md:text-xs font-bold"
                    style={{ background: car.color + "22", color: car.color, border: `1px solid ${car.color}44` }}
                  >
                    {car.tag}
                  </span>
                </div>

                {/* Info */}
                <div className="p-3 md:p-5 flex flex-col flex-1">
                  <p className="text-[10px] md:text-xs text-muted mb-1 uppercase tracking-widest">{car.type}</p>
                  <h3 className="text-sm md:text-lg font-bold mb-3 leading-tight">{car.name}</h3>

                  <div className="flex gap-3 mb-3">
                    <div>
                      <div className="text-[9px] md:text-[10px] text-muted uppercase">Power</div>
                      <div className="text-xs md:text-sm font-semibold" style={{ color: car.color }}>{car.hp} HP</div>
                    </div>
                    <div>
                      <div className="text-[9px] md:text-[10px] text-muted uppercase">Top Speed</div>
                      <div className="text-xs md:text-sm font-semibold" style={{ color: car.color }}>{car.topSpeed}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="font-black text-base md:text-xl">{car.priceStr}</div>
                    <div
                      className="flex items-center gap-1 px-2 md:px-4 py-1.5 md:py-2 rounded-full text-void text-[10px] md:text-xs font-bold"
                      style={{ background: car.color }}
                    >
                      Enquire <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
