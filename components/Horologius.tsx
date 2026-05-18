"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { SectionHeading } from "./SectionHeading";

const STACK = [
  "Hostinger",
  "WordPress",
  "React",
  "Figma",
  "PostHog",
  "Microsoft Clarity",
  "Google Search Console",
  "Meta Ads",
  "Google Ads",
  "Claude Code",
  "ChatGPT",
  "Perplexity"
];

export function Horologius() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-32 bg-[var(--color-ink-2)] border-y border-[var(--color-line)]">
      <SectionHeading
        index="02 / On my own"
        eyebrow="Side project · 2024 – present"
        title="Horologius — what shipping a product alone looks like."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Screenshot */}
        <motion.a
          href="https://horologius.com"
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-7 group block relative overflow-hidden border border-[var(--color-line-strong)] aspect-[16/10]"
        >
          <Image
            src="/projects/horologius.jpg"
            alt="Horologius.com — microbrand watch news platform"
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-[11px] tracking-[0.2em] uppercase text-[var(--color-cream)] mono">
            <span>horologius.com</span>
            <span className="opacity-0 group-hover:opacity-100 transition">Visit ↗</span>
          </div>
        </motion.a>

        {/* Copy + stack */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="lg:col-span-5 space-y-7"
        >
          <div className="space-y-5 text-[var(--color-cream-dim)] text-[1.05rem] leading-[1.7]">
            <p>
              A microbrand watch news and review platform serving collectors and enthusiasts.
              Designed in Figma, built on WordPress with React components on Hostinger, run
              entirely by me.
            </p>
            <p>
              Custom taxonomy and indexation logic, AI-assisted content workflows, social
              scheduling automations, brand partnerships, event coverage, performance marketing
              on Meta and Google Ads.
            </p>
            <p className="text-[var(--color-cream)]">
              It taught me more about shipping a product than any course could.
            </p>
          </div>

          <div>
            <div className="eyebrow mb-3">The stack</div>
            <div className="flex flex-wrap gap-2">
              {STACK.map((s) => (
                <span
                  key={s}
                  className="text-xs mono uppercase tracking-[0.12em] text-[var(--color-cream-dim)] border border-[var(--color-line-strong)] rounded-full px-3 py-1.5"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
