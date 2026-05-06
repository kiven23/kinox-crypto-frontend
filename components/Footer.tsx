"use client";

import Link from "next/link";
import { FaDiscord, FaTwitter, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black/90 py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Quick links */}
        <div>
          <h4 className="text-neon-400 font-medium mb-3">Explore</h4>
          <ul className="space-y-2 text-white/70">
            <li>
              <Link href="#features">Features</Link>
            </li>
            <li>
              <Link href="#tokenomics">Tokenomics</Link>
            </li>
            <li>
              <Link href="#roadmap">Roadmap</Link>
            </li>
            <li>
              <Link href="#stats">Live Stats</Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-neon-400 font-medium mb-3">Community</h4>
          <div className="flex justify-center md:justify-start gap-4 text-neon-400">
            <a href="#" aria-label="Discord">
              <FaDiscord className="w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="w-6 h-6 hover:scale-110 transition" />
            </a>
            <a href="#" aria-label="Telegram">
              <FaTelegram className="w-6 h-6 hover:scale-110 transition" />
            </a>
          </div>
        </div>

        {/* CTA to separate system */}
        <div>
          <h4 className="text-neon-400 font-medium mb-3">
            Separate AI System
          </h4>
          <p className="text-white/70 mb-4">
            Build full‑stack backend applications with AI.
          </p>
          <Link
            href="/chat-builder"
            className="inline-block bg-neon-500 text-black font-medium px-4 py-2 rounded hover:bg-neon-600 transition"
          >
            Launch KinoxAI Chat Builder
          </Link>
        </div>
      </div>

      <div className="mt-10 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} KinoxAI. All rights reserved.
      </div>
    </footer>
  );
}