"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIConcierge from "@/components/AIConcierge";
import SplitReveal from "@/components/SplitReveal";
import { MapPin, Clock, Award, ShieldCheck, Users, CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-void text-white overflow-x-hidden pt-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 text-center max-w-4xl mx-auto">
        <p className="text-neon text-xs tracking-[0.3em] uppercase mb-4">
          Our Story
        </p>
        <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 md:mb-8">
          Redefining the Automotive <span className="neon-text">Experience</span>
        </h1>
        <p className="text-muted text-base md:text-lg leading-relaxed">
          At Laal Motors, we don&apos;t just sell cars; we deliver dreams on wheels. Established as a cornerstone of the Lahore automobile industry, we&apos;ve earned a reputation for being the most trusted destination for Premium Imported and Certified Pre-owned vehicles.
        </p>
      </section>

      {/* Split Reveal 1 - Legacy */}
      <SplitReveal 
        image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1800&q=90"
        title="The Legacy of Laal Motors"
        subtitle="Years of excellence in delivering quality vehicles to Lahore"
        height="85vh"
      />

      {/* Mission Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 md:mb-6">
            Our Mission: Quality Without <span className="neon-text">Compromise</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            To provide an unmatched car-buying experience rooted in honesty and excellence. We understand that buying a car is a significant investment, which is why every vehicle undergoes rigorous quality checks.
          </p>
        </div>
      </section>

      {/* Split Reveal 2 - Quality */}
      <SplitReveal 
        image="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=1800&q=90"
        title="Showroom Condition Guaranteed"
        subtitle="From high-end Japanese imports to meticulously maintained local units"
        height="80vh"
      />

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-surface/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-12 md:mb-16 text-center">
            Why Choose <span className="neon-text">Laal Motors?</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { 
                icon: Award, 
                title: "Curated Selection", 
                desc: "Handpicked imported SUVs, sedans, and luxury hatchbacks meeting the highest standards of performance and aesthetics." 
              },
              { 
                icon: ShieldCheck, 
                title: "Verified Documentation", 
                desc: "100% authentic auction sheets and verified ownership history for complete peace of mind." 
              },
              { 
                icon: Users, 
                title: "Customer-Centric", 
                desc: "Expert consultants dedicated to helping you find a vehicle that fits your lifestyle and budget." 
              },
              { 
                icon: CheckCircle, 
                title: "Prime Location", 
                desc: "Easily accessible facility in Johar Town with a spacious, professional environment." 
              },
            ].map((val, i) => (
              <div 
                key={i}
                className="text-center"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-neon/10 border border-neon/20 flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <val.icon size={24} className="text-neon md:w-7 md:h-7" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{val.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Reveal 3 - Showroom */}
      <SplitReveal 
        image="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1800&q=90"
        title="Visit Our Premium Showroom"
        subtitle="Experience the difference of a dealership that cares"
        height="80vh"
      />

      {/* Location Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 md:mb-6">
              Visit Us <span className="neon-text">Today</span>
            </h2>
            <p className="text-muted mb-8 md:mb-12 text-base md:text-lg leading-relaxed">
              Step into our showroom and drive home the excellence you deserve. Our relationship with our clients doesn&apos;t end at the sale; it begins there.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-neon mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-bold text-base md:text-lg">37-A Main Blvd, Johar Town</p>
                  <p className="text-sm text-muted">Shok Chowk, Block A, Phase 1, Johar Town, Lahore</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="text-neon mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-bold text-base md:text-lg">Operating Hours</p>
                  <p className="text-sm text-muted">Monday – Saturday: 10:30 AM – 9:00 PM</p>
                  <p className="text-sm text-muted mt-1">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block shimmer-btn px-8 py-4 rounded-full text-void text-sm font-black uppercase tracking-widest shadow-[0_0_20px_rgba(57,255,20,0.3)]"
            >
              Contact Us on WhatsApp
            </a>
          </div>
          <div 
            className="aspect-video glass rounded-3xl overflow-hidden border border-white/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80" 
              alt="Laal Motors Showroom" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-surface/30 border-y border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 md:mb-8">
            The Laal Motors <span className="neon-text">Promise</span>
          </h2>
          <p className="text-muted text-base md:text-xl leading-relaxed italic">
            Whether you are a first-time buyer or a seasoned car enthusiast, we promise a seamless journey from the first test drive to the final handshake. We strive to be your lifelong partner for all your automotive needs.
          </p>
        </div>
      </section>

      <AIConcierge />
      <Footer />
    </main>
  );
}
