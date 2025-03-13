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

  const roadmapItems = [
    {
      title: "Website",
      description:
        "Website to showcase progress and about us with a sleek UI design.",
      position: "left",
      progress: 75,
    },
    {
      title: "Cheats",
      description:
        "Dungeon cheats and simple utilities. Ex: Auto Dojo, Blaze Helper",
      position: "right",
      progress: 0,
    },
    {
      title: "Macros",
      description:
        "Skip the boring parts, and automate some parts of Hypixel Skyblock",
      position: "left",
      progress: 30,
    },
    {
      title: "Discord Bot",
      description:
        "Discord bot for some utilities and embeds made across the server.",
      position: "right",
      progress: 10,
    },
  ];

  return (
    <div>
      <div className="fixed left-1/2 transform -translate-x-1/2 w-[90%] flex justify-center mt-4 z-30">
        <Navbar />
      </div>

      <div
        className={`transition-opacity duration-500 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        } flex flex-col items-center justify-center min-h-screen pt-[100px] pb-20 box-border px-4`}
      >
        <h1 className="text-3xl font-normal text-white mb-8">Roadmap</h1>

        <div className="relative w-full max-w-4xl">
          {/* Central vertical line */}
          <div className="absolute left-1/2 w-[2px] h-full bg-white/20 transform -translate-x-1/2" />

          {roadmapItems.map((item, index) => {
            const isLeft = item.position === "left";
            const verticalPosition = 15 + index * 23;

            return (
              <div
                key={item.title}
                className="absolute"
                style={{
                  top: `${verticalPosition}%`,
                  [isLeft ? "right" : "left"]: "50%",
                }}
              >
                <div className={`relative ${isLeft ? "mr-4 md:mr-8" : "ml-4 md:ml-8"}`}>
                  {/* Curved SVG connector */}
                  <svg
                    className={`absolute top-1/2 -translate-y-1/2 w-16 h-12 ${
                      isLeft ? "right-[calc(100%+2px)]" : "left-[calc(100%+2px)]"
                    }`}
                    viewBox="0 0 100 50"
                  >
                    <path
                      d={isLeft ? "M98,25 Q50,25 2,25" : "M2,25 Q50,25 98,25"}
                      stroke="rgba(255,255,255,0.5)"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Content card */}
                  <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all max-w-[280px] md:max-w-none mx-2">
                    <h2 className="text-xl text-white font-medium">
                      {item.title}
                    </h2>
                    <p className="text-white/70 mt-2 text-sm">
                      {item.description}
                    </p>

                    <div className="mt-3 h-1 bg-white/10 rounded-full">
                      <div
                        className="h-full bg-green-400 rounded-full transition-all duration-500"
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}