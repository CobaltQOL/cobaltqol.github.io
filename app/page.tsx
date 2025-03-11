import { FaDiscord, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <nav className="fixed left-1/2 transform -translate-x-1/2 w-[70%] p-3.5 bg-slate-800/40 border-2 border-solid border-slate-900/25 rounded-full flex justify-between items-center mt-4 z-10">
        <h1 className="tex-sm font-light text-white-200">C O B A L T</h1>
        <div className="flex space-x-4">
          <a
            href="https://discord.gg/cobaltqol"
            className="text-zinc-300 hover:text-white transition duration-300"
            aria-label="Discord"
          >
            <FaDiscord size={24} />
          </a>
          <a
            href="https://github.com/CobaltQOL"
            className="text-zinc-300 hover:text-white transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center min-h-screen select-none font-[family-name:var(--font-exo)]">
        <h1 className="text-3xl font-light text-white mb-3">C O B A L T</h1>
        <p className="text-sm text-gray-500 mb-8">
          The next generation of QOL scripts
        </p>
      </div>
    </div>
  );
}
