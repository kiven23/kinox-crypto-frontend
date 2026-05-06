"use client";

import { motion } from "framer-motion";
import { FaRobot, FaBolt, FaBrain, FaLayerGroup } from "react-icons/fa";

const features = [
  {
    title: "KinoxAI Chat Builder",
    desc: "Build full backend applications using AI prompts. From APIs to databases to deployment scripts.",
    icon: <FaRobot className="text-neon-400 w-8 h-8" />,
  },
  {
    title: "Smart Exchange Engine",
    desc: "Fast, secure crypto trading with real‑time analytics.",
    icon: <FaBolt className="text-neon-500 w-8 h-8" />,
  },
  {
    title: "AI Developer Assistant",
    desc: "Generate full‑stack systems, SaaS apps, and automation tools using simple chat.",
    icon: <FaBrain className="text-neon-600 w-8 h-8" />,
  },
  {
    title: "Separate Systems Architecture",
    desc: "Frontend landing page is independent from KinoxAI backend builder system for security and scalability.",
    icon: <FaLayerGroup className="text-neon-400 w-8 h-8" />,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-black/70">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Features
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="glass p-6 hover-glow transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">{f.icon}</div>
              <h3 className="text-neon-400 text-xl font-semibold mb-2">
                {f.title}
              </h3>
              <p className="text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}