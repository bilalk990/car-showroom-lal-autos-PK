"use client";
import { useParams, useRouter } from "next/navigation";
import { inventory } from "@/constants/inventory";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIConcierge from "@/components/AIConcierge";
import { LucideIcon, ArrowLeft, Fuel, Gauge, Zap, Users, ShieldCheck, Box, MessageCircle, Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CarDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [car, setCar] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const carId = parseInt(id as string);
    const foundCar = inventory.find((c: any) => c.id === carId);
    if (!foundCar) {
      router.push("/inventory");
    } else {
      setCar(foundCar);
      setSelectedImage(foundCar.img);
    }
  }, [id, router]);

  if (!mounted || !car) return <div className="min-h-screen bg-void" />;

  const SpecItem = ({ icon: Icon, label, value, color }: { icon: LucideIcon, label: string, value: string, color: string }) => (
    <div className="flex flex-col gap-2 p-6 glass rounded-2xl border border-white/5 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full opacity-50 group-hover:opacity-100 transition-opacity" style={{ background: color }} />
      <Icon size={20} className="mb-2" style={{ color }} />
      <span className="text-xs text-muted font-bold uppercase tracking-widest">{label}</span>
      <span className="text-2xl font-black">{value}</span>
    </div>
  );

  return (
    <main className="min-h-screen bg-void text-white overflow-x-hidden">
      <Navbar />

      {/* Cinematic Hero */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-end">
        <div className="absolute inset-0 z-0">
          <img
            src={selectedImage}
            alt={car.name}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
          <div className="absolute inset-0 bg-void/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 pb-10 md:pb-20 w-full">
          <div>
            <Link
              href="/inventory"
              className="flex items-center gap-2 text-muted hover:text-white transition-colors mb-6 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Inventory
            </Link>
            <p className="text-sm tracking-[0.4em] uppercase mb-3" style={{ color: car.color }}>{car.brand}</p>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-none mb-4">
              {car.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <div className="flex flex-col">
                <span className="text-2xl md:text-4xl lg:text-5xl font-black" style={{ color: car.color }}>{car.priceStr}</span>
                <span className="text-muted text-xs uppercase tracking-widest">{car.usd} EST.</span>
              </div>
              <div className="h-10 w-px bg-white/10 hidden md:block" />
              <div className="flex items-center gap-2">
                <Star className="text-yellow-400 fill-yellow-400" size={18} />
                <span className="text-xl font-bold">{car.rating}</span>
                <span className="text-muted text-sm ml-1">Expert Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Thumbnails */}
      {car.images && car.images.length > 1 && (
        <section className="max-w-7xl mx-auto px-4 md:px-6 -mt-8 relative z-20">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {car.images.map((image: string, index: number) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden border-2 transition-all ${
                  selectedImage === image 
                    ? 'border-white scale-105 shadow-lg' 
                    : 'border-white/20 hover:border-white/50 opacity-70 hover:opacity-100'
                }`}
              >
                <img 
                  src={image} 
                  alt={`${car.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Floating Specs */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 mt-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <SpecItem icon={Zap} label="Horsepower" value={`${car.hp} HP`} color={car.color} />
          <SpecItem icon={Gauge} label="0–60 MPH" value={car.acceleration} color={car.color} />
          <SpecItem icon={Box} label="Top Speed" value={car.topSpeed} color={car.color} />
          <SpecItem icon={Fuel} label="Engine" value={car.engine} color={car.color} />
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-16">
            <div>
              <h2 className="text-3xl font-black tracking-tight mb-6">The <span className="neon-text">Experience</span></h2>
              <p className="text-muted text-lg leading-relaxed max-w-3xl italic font-light">
                &quot;{car.description}&quot;
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-3xl border border-white/5">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <ShieldCheck className="text-neon" size={20} />
                  Performance Profile
                </h3>
                <ul className="space-y-4">
                  {[
                    { label: "Engine", value: car.engine },
                    { label: "Torque", value: car.torque },
                    { label: "Transmission", value: "8-Speed Automatic" },
                    { label: "Drivetrain", value: car.type === "Sport" ? "AWD" : "RWD" }
                  ].map((spec, i) => (
                    <li key={i} className="flex justify-between items-center border-b border-white/5 pb-3">
                      <span className="text-muted text-sm">{spec.label}</span>
                      <span className="font-semibold text-sm">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass p-8 rounded-3xl border border-white/5">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Star className="text-neon" size={20} />
                  Key Features
                </h3>
                <div className="flex flex-wrap gap-2">
                  {car.features.map((feature: string, i: number) => (
                    <span key={i} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 glass p-8 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <h3 className="text-2xl font-black mb-6">Reserve Now</h3>
              <p className="text-muted text-sm mb-8">Secure this masterpiece today. Prices starting from <span className="text-white font-bold">{car.priceStr}</span> (approximately {car.usd} USD).</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <Users size={16} className="text-neon" />
                  <span className="text-muted">Personal Concierge Assigned</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <ShieldCheck size={16} className="text-neon" />
                  <span className="text-muted">Imported with Full History</span>
                </div>
              </div>

              <a 
                href={`https://wa.me/923001234567?text=Hi, I am interested in the ${car.brand} ${car.name}. Can you provide more details?`}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-btn w-full py-4 rounded-2xl flex items-center justify-center gap-2 text-void font-black text-lg transition-transform active:scale-95"
              >
                <MessageCircle size={22} />
                Enquire via WhatsApp
              </a>

              <p className="text-[10px] text-muted text-center mt-6 uppercase tracking-widest leading-relaxed">
                Prices are subject to tax and import duties in Pakistan.<br/>Terms and conditions apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-surface/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <div className="flex-1 h-64 md:h-[500px] rounded-[2rem] overflow-hidden glass border border-white/10 relative group">
              <img src={selectedImage} alt="Main view" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 md:p-10">
                <p className="text-white font-bold tracking-widest uppercase text-xs">Exterior Precision</p>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4 md:gap-6">
              <div className="h-48 md:h-[240px] rounded-[2rem] overflow-hidden glass border border-white/10 relative group">
                <img src="https://images.unsplash.com/photo-1540066019607-e5f69323a8dc?w=800&q=80" alt="Interior" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 md:p-8">
                  <p className="text-white font-bold tracking-widest uppercase text-xs">Aesthetic Interior</p>
                </div>
              </div>
              <div className="h-48 md:h-[240px] rounded-[2rem] overflow-hidden glass border border-white/10 relative group">
                <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80" alt="Mechanical" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 md:p-8">
                  <p className="text-white font-bold tracking-widest uppercase text-xs">Mechanical Mastery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AIConcierge />
      <Footer />
    </main>
  );
}
