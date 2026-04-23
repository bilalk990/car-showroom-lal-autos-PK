"use client";

import Preloader from "./Preloader";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Preloader />
      {children}
    </>
  );
}
