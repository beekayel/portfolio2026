"use client";

import { motion } from "motion/react";

const TOOLS = [
  // Product & analytics
  "Jira",
  "Asana",
  "Confluence",
  "Figma",
  "GA4",
  "Amplitude",
  "Looker Studio",
  "Hotjar",
  "PostHog",
  "Microsoft Clarity",
  // SEO · GEO · AI search
  "Google Search Console",
  "Semrush",
  "Ahrefs",
  "AWR Ranking",
  "PEEC",
  "Otterly",
  "Screaming Frog",
  // Build & AI
  "Claude Code",
  "Codex",
  "ChatGPT",
  "Perplexity",
  "Lovable",
  "Supabase",
  "WordPress",
  "React",
  "Strapi"
];

export function Toolbox() {
  return (
    <section className="relative px-6 md:px-12 lg:px-24 py-24 md:py-28 border-t border-[var(--color-line)]">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-10"
        >
          <div className="eyebrow mb-3">Toolbox</div>
          <h2 className="display text-3xl md:text-4xl lg:text-5xl text-[var(--color-text)] max-w-3xl">
            A working kit, not a sticker collection.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap gap-2 md:gap-2.5"
        >
          {TOOLS.map((t) => (
            <span
              key={t}
              className="glass text-[0.85rem] text-[var(--color-text-dim)] hover:text-[var(--color-text)] transition-colors rounded-full px-3.5 py-1.5"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
