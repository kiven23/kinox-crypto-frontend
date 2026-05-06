"use client";

import { motion } from "framer-motion";

const breakdown = [
  { name: "Ecosystem & Rewards", percent: "40%" },
  { name: "Liquidity Pool", percent: "25%" },
  { name: "Development Fund", percent: "15%" },
  { name: "Marketing & Partnerships", percent: "10%" },
  { name: "Team Allocation", percent: "10%" },
];

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-20 bg-black/80">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          Tokenomics
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* CSS‑only pie chart */}
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-400 via-neon-500 to-neon-600 animate-pulse" />
            {/* Simple overlay to mimic slices */}
            <div className="absolute inset-0 rounded-full bg-black/70 mix-blend-multiply" />
            <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-neon-400">
              100M KXAI
            </span>
          </div>

          {/* Breakdown list */}
          <div className="grid gap-4">
            {breakdown.map((b, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="w-4 h-4 rounded-full bg-neon-400" />
                <p className="text-white/80">
                  <span className="font-medium">{b.percent}</span> – {b.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Utility bullets */}
        <motion.ul
          className="mt-12 grid md:grid-cols-2 gap-4 text-white/70 list-disc list-inside"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <li>Access to premium AI builder features</li>
          <li>Reduced trading fees on the exchange</li>
          <li>Staking rewards for KXAI holders</li>
          <li>Governance voting in ecosystem decisions</li>
        </motion.ul>
      </div>
    </section>
  );
}