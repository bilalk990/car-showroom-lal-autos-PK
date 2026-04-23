"use client";
import Navbar from "@/components/Navbar";
import GrandEntryHero from "@/components/GrandEntryHero";
import SpecGrid from "@/components/SpecGrid";
import ShowcaseMarquee from "@/components/ShowcaseMarquee";
import InventorySection from "@/components/InventorySection";
import AIConcierge from "@/components/AIConcierge";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-void text-white">
      <Navbar />
      <GrandEntryHero />
      <ShowcaseMarquee />
      <InventorySection />
      <SpecGrid />
      <Testimonials />
      <AIConcierge />
      <Footer />
    </main>
  );
}
