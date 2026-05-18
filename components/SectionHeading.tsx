"use client";

import { motion } from "motion/react";

export function SectionHeading({
  index,
  eyebrow,
  title
}: {
  index: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="mb-14"
    >
      <div className="flex items-baseline gap-6 mb-3">
        <span className="mono text-xs tracking-[0.2em] uppercase text-[var(--color-cream-low)]">{index}</span>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="display text-5xl md:text-6xl lg:text-7xl text-[var(--color-cream)] max-w-4xl">
        {title}
      </h2>
    </motion.div>
  );
}
