"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/navbar";

export default function Roadmap() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="fixed left-1/2 transform -translate-x-1/2 w-[90%] flex justify-center mt-4 z-30">
        <Navbar />
      </div>

      <div
        className={`transition-opacity duration-500 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        } flex flex-col items-center justify-center min-h-screen select-none font-[family-name:var(--font-exo)]`}
      >
        <h1 className="text-3xl font-normal text-white mb-3">Roadmap</h1>
      </div>
    </div>
  );
}
