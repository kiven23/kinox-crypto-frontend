"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Total Users", value: "120,000+" },
  { label: "Transactions", value: "5,000,000+" },
  { label: "AI Apps Generated", value: "50,000+" },
  { label: "Uptime", value: "99.9%" },
];

export default function Stats() {
  return (
    <section id="stats" className="py-12 bg-black/80">
      <div className="max-w-6xl mx-auto overflow-x-auto">
        <motion.div
          className="flex gap-6 justify-center px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="glass flex flex-col items-center justify-center w-48 h-32 hover-glow transition"
            >
              <h2 className="text-neon-400 text-2xl font-bold">{s.value}</h2>
              <p className="text-white/60 mt-1 text-sm">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}