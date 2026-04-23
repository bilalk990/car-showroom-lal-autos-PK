"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIConcierge from "@/components/AIConcierge";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-void text-white overflow-x-hidden pt-16">
      <Navbar />

      <section className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-neon text-xs tracking-[0.3em] uppercase mb-4">Get In Touch</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter">
            Start Your <span className="neon-text">Journey</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Contact Info */}
          <div>
            <div className="glass p-6 md:p-8 rounded-3xl border border-white/5">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-5">
                {[
                  { icon: Phone, label: "Call Us", value: "+92 300 1234 567", href: "tel:+923001234567" },
                  { icon: Mail, label: "Email Us", value: "hello@autoelite.pk", href: "mailto:hello@autoelite.pk" },
                  { icon: MapPin, label: "Visit Us", value: "DHA Phase 5, Karachi", href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-neon/10 border border-neon/20 flex items-center justify-center flex-shrink-0">
                      <Icon size={17} className="text-neon" />
                    </div>
                    <div>
                      <p className="text-xs text-muted font-bold uppercase tracking-widest">{label}</p>
                      {href ? (
                        <a href={href} className="text-white hover:text-neon transition-colors text-sm">{value}</a>
                      ) : (
                        <p className="text-white text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full h-12 rounded-2xl flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold hover:opacity-90 transition-opacity text-sm"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="glass p-6 md:p-10 rounded-3xl border border-white/5">
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs text-muted font-bold uppercase tracking-widest">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full h-12 px-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-muted focus:border-neon/30 focus:outline-none transition-colors text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-muted font-bold uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full h-12 px-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-muted focus:border-neon/30 focus:outline-none transition-colors text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-muted font-bold uppercase tracking-widest">Subject</label>
                  <select className="w-full h-12 px-5 rounded-2xl bg-[#0d0d0d] border border-white/10 text-white focus:border-neon/30 focus:outline-none transition-colors appearance-none text-sm">
                    <option>Inquiry about a Car</option>
                    <option>Book a Test Drive</option>
                    <option>Financing Options</option>
                    <option>Sell Your Car</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-muted font-bold uppercase tracking-widest">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about the car you're interested in..."
                    className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-muted focus:border-neon/30 focus:outline-none transition-colors resize-none text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="shimmer-btn w-full h-12 rounded-2xl flex items-center justify-center gap-2 text-void font-black shadow-[0_0_20px_rgba(57,255,20,0.4)]"
                >
                  Send Message <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <AIConcierge />
      <Footer />
    </main>
  );
}
