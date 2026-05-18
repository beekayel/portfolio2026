"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="relative px-6 md:px-12 lg:px-24 py-28 md:py-32 border-y border-[var(--color-line)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center max-w-7xl mx-auto relative z-10">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 lg:col-span-4"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-line-strong)]">
            <Image
              src="/me.jpg"
              alt="Dan Hodeanu"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="mt-3 flex items-center justify-between text-[10px] tracking-[0.22em] uppercase text-[var(--color-text-low)] mono">
            <span>Dan Hodeanu</span>
            <span>Vienna · 2026</span>
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="md:col-span-7 lg:col-span-8"
        >
          <div className="eyebrow mb-3">About</div>
          <h2 className="display text-4xl md:text-5xl lg:text-6xl text-[var(--color-text)] mb-8 max-w-xl">
            Hi, I'm Dan.
          </h2>
          <div className="space-y-5 text-[1.05rem] md:text-[1.15rem] leading-[1.65] text-[var(--color-text-dim)] max-w-2xl">
            <p>
              I'm a Senior SEO with a product mindset, based in Vienna. My main focus over the
              last 8 years has been driving organic growth for international brands and
              marketplaces across multi-market websites in eCommerce, travel, and SaaS.
            </p>
            <p>
              These days I spend most of my time owning roadmaps end-to-end — currently leading the
              Organic department at{" "}
              <span className="text-[var(--color-text)] font-medium">TourRadar</span>.
            </p>
            <p>
              Outside work I run{" "}
              <a
                className="text-[var(--color-bronze-deep)] hover:text-[var(--color-text)] transition underline underline-offset-4 decoration-[var(--color-bronze)]"
                href="https://horologius.com"
                target="_blank"
                rel="noreferrer"
              >
                Horologius
              </a>
              , a microbrand watch publication I designed, built, and run alone — as I'm very
              passionate about watchmaking.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
