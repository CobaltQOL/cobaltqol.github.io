export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen select-none font-[family-name:var(--font-exo)]">
      <h1 className="text-4xl font-normal mb-4">
        C O B A L T
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        The next generation of QOL scripts
      </p>
      <div className="flex space-x-6">
        <a
          className="px-8 py-3 bg-blue-950 font-light text-white rounded hover:bg-indigo-950 transition duration-300"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        >
          Download
        </a>
        <a
          className="px-8 py-3 bg-blue-950 font-light text-white rounded hover:bg-indigo-950 transition duration-300"
          href="https://discord.gg/cobaltqol"
        >
          Discord
        </a>
      </div>
    </div>
  );
}