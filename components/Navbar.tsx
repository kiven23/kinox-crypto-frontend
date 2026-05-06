import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-between items-center px-6 py-4 bg-black/70 backdrop-blur-sm border-b border-white/10">
      <h1 className="text-2xl font-bold text-neon-400">KinoxAI</h1>

      <nav className="flex gap-6 text-sm text-white/70">
        <Link href="#features">Features</Link>
        <Link href="#tokenomics">Tokenomics</Link>
        <Link href="#roadmap">Roadmap</Link>
        <Link href="#stats">Stats</Link>
        <a
          href="/chat-builder"
          className="ml-4 px-3 py-1 rounded bg-neon-500 text-black font-medium hover:bg-neon-600 transition"
        >
          Launch Chat Builder
        </a>
      </nav>
    </header>
  );
}