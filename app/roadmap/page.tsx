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
        } flex flex-col items-center justify-center min-h-screen pt-[100px] pb-20 box-border`}
      >
        <h1 className="text-3xl font-normal text-white mb-5">Roadmap</h1>

        <div className="relative h-90 w-full max-w-4xl">
          <div className="absolute left-1/2 w-0.5 h-full bg-white/50 transform -translate-x-1/2" />

          {roadmapItems.map((item, index) => {
            const topPosition = 20 + index * 20;
            const isLeft = item.position === "left";

            return (
              <div
                key={item.title}
                className="absolute"
                style={{
                  top: `${topPosition}%`,
                  [isLeft ? "right" : "left"]: "50%",
                }}
              >
                <div className={`relative ${isLeft ? "mr-8" : "ml-8"}`}>
                  <div
                    className={`absolute top-1/2 w-8 h-px bg-white/50 ${
                      isLeft ? "-right-8" : "-left-8"
                    }`}
                  />

                  <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-all">
                    <h2 className="text-xl text-white font-medium">
                      {item.title}
                    </h2>
                    <p className="text-white/70 mt-2 text-sm">
                      {item.description}
                    </p>

                    <div className="mt-3 h-1 bg-white/10 rounded-full">
                      <div
                        className="h-full bg-green-400 rounded-full"
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
