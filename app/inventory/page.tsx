"use client";
import Navbar from "@/components/Navbar";
import InventorySection from "@/components/InventorySection";
import Footer from "@/components/Footer";
import AIConcierge from "@/components/AIConcierge";

export default function InventoryPage() {
  return (
    <main className="min-h-screen bg-void text-white overflow-x-hidden pt-16">
      <Navbar />
      <InventorySection />
      <AIConcierge />
      <Footer />
    </main>
  );
}
