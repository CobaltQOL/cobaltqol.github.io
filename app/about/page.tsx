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
        <nav className="w-full p-3.5 bg-slate-800/40 border border-slate-900/25 rounded-full flex justify-between items-center">
          <Link className="text-sm ml-3 sm:ml-5 font-normal text-white" href="/">
            C O B A L T
          </Link>

          <button 
            className={`md:hidden text-zinc-300 hover:text-white transition duration-300 mr-3 z-40 ${
              isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            onClick={toggleMenu}
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M2 6h20" className="stroke-current" strokeWidth="2" />
              <path d="M2 12h20" className="stroke-current" strokeWidth="2" />
              <path d="M2 18h20" className="stroke-current" strokeWidth="2" />
            </svg>
          </button>

          <div className="hidden md:flex space-x-4 mr-3 sm:mr-5">         
            <Link
              href="/roadmap"
              className="text-zinc-300 hover:text-white transition duration-300"
              aria-label="Roadmap"
            >
              Road Map
            </Link>
            <Link
              href="/about"
              className="text-zinc-300 hover:text-white transition duration-300 mr-5"
              aria-label="About Us"
            >
              About Us
            </Link>
            <a
              href="https://discord.gg/cobaltqol"
              className="text-zinc-300 hover:text-white transition duration-300"
              aria-label="Discord"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord size={24} />
            </a>
            <a
              href="https://github.com/CobaltQOL"
              className="text-zinc-300 hover:text-white transition duration-300"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-30 bg-slate-900/95 backdrop-blur-sm transition-all duration-300 ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      >
        <div
          className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 bg-slate-800/90 rounded-2xl p-6 shadow-xl transition-all duration-300 ${
            isMenuOpen
              ? 'scale-100 opacity-100'
              : 'scale-95 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-zinc-300 hover:text-white transition duration-300"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M6 6L18 18" className="stroke-current" strokeWidth="2" />
              <path d="M18 6L6 18" className="stroke-current" strokeWidth="2" />
            </svg>
          </button>

          <div className="flex flex-col items-center space-y-2.5 mt-6">
            <Link href="/" className="text-zinc-300 hover:text-white transition duration-300 text-lg" onClick={closeMenu}>
              Home
            </Link>
            <Link href="/roadmap" className="text-zinc-300 hover:text-white transition duration-300 text-lg" onClick={closeMenu}>
              Road Map
            </Link>
            <Link href="/about" className="text-zinc-300 hover:text-white transition duration-300 text-lg" onClick={closeMenu}>
              About Us
            </Link>
            <a
              href="https://discord.gg/cobaltqol"
              className="text-zinc-300 hover:text-white transition duration-300 text-lg"
              onClick={closeMenu}
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
            <a
              href="https://github.com/CobaltQOL"
              className="text-zinc-300 hover:text-white transition duration-300 text-lg"
              onClick={closeMenu}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen select-none font-[family-name:var(--font-exo)]">
        <h1 className="text-3xl font-normal text-white mb-3">About Us</h1>

      </div>
    </div>
  );
}