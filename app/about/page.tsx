"use client";

import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <div className="fixed left-1/2 transform -translate-x-1/2 w-[90%] flex justify-center mt-4 z-30">
        <Navbar />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen select-none font-[family-name:var(--font-exo)]">
        <h1 className="text-3xl font-normal text-white mb-3">About Us</h1>
      </div>
    </div>
  );
}
