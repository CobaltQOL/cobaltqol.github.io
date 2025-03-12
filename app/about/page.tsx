"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { User } from "../components/user";

export default function AboutUs() {
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
        <h1 className="text-3xl font-normal text-white mb-3">About Us</h1>
        <p className="text-sm text-gray-500 mb-5 w-[400px] text-center">
          We agree that everyone should be able to use free QOL scripts. Open
          source is an amazing thing that we all find amazing. And want to give
          back to the community.
        </p>

        <div className="w-[70%] h-px bg-gray-400 opacity-50 my-5"></div>

        <h1 className="text-3xl font-normal text-white mb-3">Developers</h1>
        <div className="flex flex-wrap justify-center gap-4">
          <User
            name="Nathan"
            description="Mentally Unstable"
            image="/logo.png"
          />
          <User
            name="Twiston"
            description="Quality shitcode"
            image="/logo.png"
          />
          <User
            name="Night"
            description="Can barely play skyblock"
            image="/logo.png"
          />
          <User
            name="Nima"
            description="Long live Germany!"
            image="/logo.png"
          />
        </div>
      </div>

      <div className="w-[70%] h-px bg-gray-400 opacity-50 my-5"></div>

      <h1 className="text-3xl font-normal text-white mb-3">Contributors</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <User
          name="Funzies"
          description="Professional bullshitter"
          image="/logo.png"
        />
        <User
          name="Kobe"
          description="Helped with original website"
          image="/logo.png"
        />
        <User name="Flow" description="Best critiques!" image="/logo.png" />
      </div>
    </div>
  );
}
