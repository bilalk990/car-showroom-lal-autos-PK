import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Laal Motors | Luxury Car Showroom",
  description: "Experience the world's finest automobiles. Browse our curated collection of luxury, sport, and SUV vehicles. Test drives available — book now.",
  keywords: "luxury cars, car showroom, sports cars, SUV, Karachi Pakistan, Laal Motors",
  openGraph: {
    title: "Laal Motors | Luxury Car Showroom",
    description: "Pakistan's premier luxury car showroom. Lamborghini, Porsche, Mercedes and more.",
    type: "website",
  },
};

import ClientLayout from "@/components/ClientLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
