"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4">
      {/* Optional animated background – simple CSS gradient for now */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-400 via-neon-500 to-neon-600 opacity-20 animate-pulse" />

      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        Build. Trade. Deploy.
        <span className="block text-neon-400">Powered by KinoxAI</span>
      </motion.h1>

      <motion.p
        className="mt-6 max-w-2xl text-lg text-white/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        The next‑generation AI crypto ecosystem where ideas become full‑stack
        applications instantly.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="mt-10 flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link
          href="#exchange"
          className="bg-neon-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-neon-600 transition"
        >
          Launch Exchange
        </Link>

        <Link
          href="/chat-builder"
          className="bg-neon-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-neon-500 transition"
        >
          Try AI Builder
        </Link>

        <Link
          href="#tokenomics"
          className="bg-white/10 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/20 transition"
        >
          View Tokenomics
        </Link>
      </motion.div>
    </section>
  );
}