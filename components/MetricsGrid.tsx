"use client";

import { motion } from "motion/react";

const METRICS = [
  {
    num: "€4M",
    label: "Revenue Impact",
    sub: "Generated in 1 month by identifying user behavior (Hotjar/Clarity) and implementing targeted video features."
  },
  {
    num: "2M+",
    label: "Pages Managed",
    sub: "Across hundreds of markets (focus on DACH & US)."
  },
  {
    num: "40+",
    label: "Shops Managed",
    sub: "Ecommerce optimization for Klarstein, Droppe, Auna, TourRadar."
  },
  {
    num: "60%",
    label: "SEM Spend Efficiency",
    sub: "Monthly budget of €50k with ROAS > 100%."
  },
  {
    num: "10.2M",
    label: "Backlinks",
    sub: "Grew from 6M to 10.2M using custom backlink strategies."
  },
  {
    num: "150%",
    label: "Traffic Increase",
    sub: "Scaled to 50M visits using programmatic SEO and proprietary data."
  },
  {
    num: "€2M+",
    label: "#1 Organic Ranking & Sales",
    sub: "Top positions for Black Friday & Christmas in DACH (year 1). End-to-end ownership: design → GTM → implementation with proprietary AI data → production."
  },
  {
    num: "25%",
    label: "AI Visibility Lift",
    sub: "Implemented GEO/AI tracking (PEEC, Otterly), shifted from volume-based to entity-based SEO and opened significant new revenue streams."
  }
];

export function MetricsGrid() {
  return (
    <section id="stats" className="relative px-6 md:px-12 lg:px-24 py-28">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="display text-4xl md:text-5xl lg:text-6xl text-[var(--color-text)] mb-14 max-w-3xl"
        >
          Eight years, eight numbers.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {METRICS.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.06 }}
              className="glass rounded-2xl p-6 md:p-7 flex flex-col min-h-[210px]"
            >
              <div className="mono text-3xl md:text-4xl text-[var(--color-bronze-deep)] leading-none mb-5">
                {m.num}
              </div>
              <div className="display text-lg md:text-xl text-[var(--color-text)] mb-2 leading-tight">
                {m.label}
              </div>
              <p className="mt-auto text-[0.88rem] leading-[1.5] text-[var(--color-text-dim)]">
                {m.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
