"use client";

import { motion } from "framer-motion";

const phases = [
  {
    title: "Phase 1 – Foundation",
    bullets: [
      "Launch KinoxAI Landing Page",
      "Deploy KXAI token smart contract",
      "Beta release of AI Chat Builder",
    ],
  },
  {
    title: "Phase 2 – Expansion",
    bullets: [
      "Launch decentralized exchange module",
      "Add wallet integration (MetaMask, WalletConnect)",
      "Community building (Discord, Telegram)",
    ],
  },
  {
    title: "Phase 3 – Ecosystem Growth",
    bullets: [
      "AI SaaS marketplace",
      "Third‑party app deployment via KinoxAI",
      "Mobile app release (iOS & Android)",
    ],
  },
  {
    title: "Phase 4 – Global Scaling",
    bullets: [
      "Cross‑chain integration",
      "Listing on major exchanges",
      "Enterprise AI solutions",
    ],
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 bg-black/70">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Roadmap
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              className="glass p-6 hover-glow transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-neon-500 text-xl font-semibold mb-3">
                {phase.title}
              </h3>
              <ul className="list-disc list-inside space-y-1 text-white/70">
                {phase.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}