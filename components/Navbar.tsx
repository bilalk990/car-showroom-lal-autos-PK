"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Menu, X, MessageSquare } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Inventory", href: "/inventory" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass border-b border-white/5 py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div 
              style={{ backgroundColor: "#FF0000" }} 
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(255,0,0,0.4)] transition-transform group-hover:scale-110"
            >
              <Zap size={20} className="text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase">
              <span style={{ color: "#FF0000" }}>Laal</span><span style={{ color: "#000000" }}>Motors</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 relative ${
                  pathname === link.href ? "text-[#FF0000]" : "text-muted hover:text-[#FF0000]"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FF0000] shadow-[0_0_10px_#FF0000]"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="https://wa.me/923001234567"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted hover:text-[#FF0000] transition-colors"
            >
              <MessageSquare size={14} />
              WhatsApp Support
            </a>
            <Link
              href="/inventory"
              style={{ backgroundColor: "#FF0000" }}
              className="hover:bg-red-700 px-8 py-3 rounded-full text-white text-xs font-black uppercase tracking-widest shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all hover:scale-105 active:scale-95"
            >
              Book Test Drive
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden w-10 h-10 rounded-lg glass border border-white/10 flex items-center justify-center text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div 
        className={`fixed top-0 right-0 bottom-0 z-40 w-[280px] bg-void/95 backdrop-blur-xl border-l border-white/10 p-6 transition-transform duration-300 ease-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-end mb-8">
          <button
            onClick={() => setMobileOpen(false)}
            className="w-10 h-10 rounded-lg glass border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`block py-4 px-4 text-lg font-semibold rounded-xl transition-all ${
                pathname === link.href 
                  ? "text-[#FF0000] bg-[#FF0000]/10 border border-[#FF0000]/20" 
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href="https://wa.me/923001234567"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#FF0000]/10 border border-[#FF0000]/40 text-[#FF0000] font-bold hover:bg-[#FF0000]/20 transition-colors"
          onClick={() => setMobileOpen(false)}
        >
          <MessageSquare size={18} />
          Chat on WhatsApp
        </a>
      </div>

      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />
    </div>
  );
}
