"use client";
import { useState, useEffect } from "react";
import { Filter, Search, ArrowRight, Star, Fuel, Users } from "lucide-react";
import Link from "next/link";
import { inventory, BRANDS, TYPES, PRICES } from "@/constants/inventory";
import RevealWrapper from "./RevealWrapper";

export default function InventorySection() {
  const [brand, setBrand] = useState("All");
  const [type, setType] = useState("All");
  const [price, setPrice] = useState("All");
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="min-h-screen" />;

  const filtered = inventory.filter((car) => {
    const matchBrand = brand === "All" || car.brand === brand;
    const matchType = type === "All" || car.type === type;
    const matchPrice =
      price === "All" ||
      (price === "Under ₨2Cr" && car.price < 20000000) ||
      (price === "₨2–5Cr" && car.price >= 20000000 && car.price <= 50000000) ||
      (price === "₨5Cr+" && car.price > 50000000);
    const matchSearch = car.name.toLowerCase().includes(search.toLowerCase()) || car.brand.toLowerCase().includes(search.toLowerCase());
    return matchBrand && matchType && matchPrice && matchSearch;
  });

  const FilterPills = ({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) => (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 border ${
            value === opt
              ? "bg-[#FF0000] text-white border-[#FF0000] shadow-[0_0_10px_rgba(255,0,0,0.4)]"
              : "border-white/10 text-muted hover:border-[#FF0000]/30 hover:text-white"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );

  return (
    <section id="inventory" className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <RevealWrapper animation="reveal-up" className="mb-10">
          <p className="text-xs text-[#FF0000] tracking-[0.3em] uppercase mb-3">Our Fleet</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">
              Browse <span style={{ color: '#FF0000' }}>Inventory</span>
            </h2>
            {/* Search + filter toggle */}
            <div className="flex gap-3">
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                <input
                  type="text"
                  placeholder="Search brand or model..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 pr-4 py-2.5 rounded-xl glass border border-white/10 text-sm text-white placeholder-muted focus:border-[#FF0000]/30 focus:outline-none w-full sm:w-56 md:w-64 transition-all"
                />
              </div>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-all duration-200 ${sidebarOpen ? "border-[#FF0000] text-[#FF0000] bg-[#FF0000]/5" : "border-white/10 text-muted hover:border-[#FF0000]/30 hover:text-white"}`}
              >
                <Filter size={14} /> Filters
              </button>
            </div>
          </div>
        </RevealWrapper>

        {/* Filter panel */}
        {sidebarOpen && (
          <div className="overflow-hidden mb-8">
            <div className="glass border border-white/8 rounded-2xl p-6 grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-xs text-muted uppercase tracking-widest mb-3">Brand</p>
                <FilterPills options={BRANDS} value={brand} onChange={setBrand} />
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-widest mb-3">Body Type</p>
                <FilterPills options={TYPES} value={type} onChange={setType} />
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-widest mb-3">Price Range</p>
                <FilterPills options={PRICES} value={price} onChange={setPrice} />
              </div>
            </div>
          </div>
        )}

        {/* Results count */}
        <p className="text-sm text-muted mb-6">
          Showing <span className="text-white font-semibold">{filtered.length}</span> vehicles
        </p>

        {/* Car grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((car, i) => (
            <RevealWrapper key={car.id} animation="reveal-up" delay={(i % 4) * 100}>
              <Link href={`/inventory/${car.id}`} className="block h-full cursor-pointer">
                <div className="gradient-border card-shine overflow-hidden h-full flex flex-col group text-left transition-transform hover:scale-[1.02]">
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-panel">
                  <img
                    src={car.img}
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                  {/* Fuel badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-semibold"
                    style={{ background: car.color + "20", color: car.color, border: `1px solid ${car.color}40` }}>
                    {car.fuel}
                  </span>
                  {/* Rating */}
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 text-xs font-bold">
                    <Star size={10} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-white">{car.rating}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col flex-1">
                  <p className="text-xs text-muted uppercase tracking-widest mb-1">{car.brand}</p>
                  <h3 className="font-bold text-base mb-3 leading-tight">{car.name}</h3>

                  {/* Mini specs */}
                  <div className="flex gap-3 mb-4 text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <Fuel size={10} style={{ color: car.color }} />
                      {car.fuel}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={10} style={{ color: car.color }} />
                      {car.seats} seats
                    </span>
                    <span style={{ color: car.color }} className="font-semibold">{car.hp} hp</span>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <div className="font-black text-lg">{car.priceStr}</div>
                      <div className="text-muted text-xs">{car.usd}</div>
                    </div>
                    <div
                      className="flex items-center gap-1 px-3 py-2 rounded-xl text-void text-xs font-bold"
                      style={{ background: car.color }}
                    >
                      Enquire <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            </RevealWrapper>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-muted">
            <p className="text-4xl mb-3">🚗</p>
            <p className="text-lg font-semibold text-white">No vehicles match your filters</p>
            <p className="text-sm mt-1">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </section>
  );
}
