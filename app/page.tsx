"use client";

import { useState } from "react";
import Link from "next/link";
import { FaDiscord, FaGithub } from "react-icons/fa";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div>
      <div className="fixed left-1/2 transform -translate-x-1/2 w-[90%] flex justify-center mt-4 z-30">
        <nav className="w-full p-3.5 bg-slate-800/40 border border-slate-900/25 rounded-full flex justify-between items-center relative">
          <Link className="text-sm ml-3 sm:ml-5 font-normal text-white" href="/">
            C O B A L T
          </Link>

          <div className="flex items-center">
            <div className="hidden md:flex space-x-4 mr-3 sm:mr-5">
              <Link
                href="/roadmap"
                className="text-zinc-300 hover:text-white transition duration-300"
              >
                Road Map
              </Link>
              <Link
                href="/about"
                className="text-zinc-300 hover:text-white transition duration-300 mr-5"
              >
                About Us
              </Link>
              <a
                href="https://discord.gg/cobaltqol"
                className="text-zinc-300 hover:text-white transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord size={24} />
              </a>
              <a
                href="https://github.com/CobaltQOL"
                className="text-zinc-300 hover:text-white transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
            </div>

            <button
              className="md:hidden text-zinc-300 hover:text-white transition duration-300 mr-3"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M6 6L18 18" className="stroke-current" strokeWidth="2" />
                  <path d="M18 6L6 18" className="stroke-current" strokeWidth="2" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M2 6h20" className="stroke-current" strokeWidth="2" />
                  <path d="M2 12h20" className="stroke-current" strokeWidth="2" />
                  <path d="M2 18h20" className="stroke-current" strokeWidth="2" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          <div
            className={`absolute top-full right-0 mt-2 w-full md:hidden bg-slate-800/90 backdrop-blur-sm border border-slate-900/25 rounded-2xl shadow-xl transition-all duration-300 ${
              isMenuOpen
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-2"
            }`}
          >
            <div className="flex flex-col p-4 space-y-4">
              <Link
                href="/roadmap"
                className="text-zinc-300 hover:text-white transition duration-300 text-center"
                onClick={closeMenu}
              >
                Road Map
              </Link>
              <Link
                href="/about"
                className="text-zinc-300 hover:text-white transition duration-300 text-center"
                onClick={closeMenu}
              >
                About Us
              </Link>
              <a
                href="https://discord.gg/cobaltqol"
                className="text-zinc-300 hover:text-white transition duration-300 text-center"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Discord
              </a>
              <a
                href="https://github.com/CobaltQOL"
                className="text-zinc-300 hover:text-white transition duration-300 text-center"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                GitHub
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Rest of your content */}
      <div className="flex flex-col items-center justify-center min-h-screen select-none font-[family-name:var(--font-exo)]">
        <h1 className="text-3xl font-normal text-white mb-3">C O B A L T</h1>
        <p className="text-sm text-gray-500 mb-5">The next generation of QOL scripts</p>
        <div className="flex space-x-4">
          <a className="px-8 py-3 bg-blue-950 font-light text-white rounded hover:bg-indigo-950 transition duration-300" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            Download
          </a>
          <a className="px-8 py-3 bg-blue-950 font-light text-white rounded hover:bg-indigo-950 transition duration-300" href="https://discord.gg/cobaltqol">
            Discord
          </a>
        </div>
      </div>
    </div>
  );
}