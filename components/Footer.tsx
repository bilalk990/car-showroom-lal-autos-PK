"use client";
import Link from "next/link";
import { MessageCircle, Zap, Instagram, Twitter, Facebook, Mail, MapPin, Phone } from "lucide-react";

import RevealWrapper from "./RevealWrapper";

const links = {
  Inventory: ["Luxury Sedans", "Sport Cars", "SUVs", "Electric", "New Arrivals"],
  Services: ["Test Drive", "Financing PKR", "Insurance", "Maintenance", "Export/Import"],
  Company: ["About Us", "Our Team", "Blog", "Press", "Careers"],
};

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/5 py-14 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top CTA */}
        <RevealWrapper animation="reveal-scale" className="gradient-border p-6 md:p-10 text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-4">
            Ready to Drive Your <span className="neon-text">Dream Car</span>?
          </h2>
          <p className="text-muted mb-6 max-w-lg mx-auto text-sm md:text-base">
            Book your test drive today. Our team in Johar Town, Lahore is available Monday to Saturday.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-void font-bold"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
            <a
              href="mailto:info@laalmotors.pk"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full glass border border-white/10 text-white font-semibold hover:border-neon/30 transition-all"
            >
              <Mail size={18} />
              Email Us
            </a>
          </div>
        </RevealWrapper>

        {/* Main grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-neon flex items-center justify-center">
                <Zap size={16} className="text-void fill-void" />
              </div>
              <span className="text-xl font-black">Laal<span className="text-neon">Motors</span></span>
            </Link>
            <p className="text-muted text-sm leading-relaxed mb-5 max-w-xs">
              Lahore&apos;s most trusted destination for Premium Imported and Certified Pre-owned vehicles since years.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:+923001234567" className="flex items-center gap-2 text-muted hover:text-neon transition-colors">
                <Phone size={13} /> +92 300 1234 567
              </a>
              <a href="mailto:info@laalmotors.pk" className="flex items-center gap-2 text-muted hover:text-neon transition-colors">
                <Mail size={13} /> info@laalmotors.pk
              </a>
              <div className="flex items-start gap-2 text-muted">
                <MapPin size={13} className="mt-0.5 flex-shrink-0" /> 
                <span className="text-xs">37-A Main Blvd, Shok Chowk, Johar Town, Lahore</span>
              </div>
            </div>
            <div className="mt-4 px-3 py-2 rounded-lg border border-neon/20 bg-neon/5 text-xs text-neon font-medium inline-block">
              💱 All prices in PKR
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-bold mb-3 text-white tracking-wide">{title}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href={title === "Inventory" ? "/inventory" : `/${title.toLowerCase()}`}
                      className="text-sm text-muted hover:text-neon transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs md:text-sm text-center md:text-left">
            © 2025 Laal Motors. All rights reserved. Built in Lahore 🇵🇰
          </p>
          <div className="flex items-center gap-4">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="text-muted hover:text-neon transition-colors">
                <Icon size={17} />
              </a>
            ))}
          </div>
          <div className="flex gap-4 text-xs text-muted">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
