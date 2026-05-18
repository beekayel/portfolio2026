"use client";

import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

export function HowIWork() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-28">
      <div className="max-w-5xl mx-auto">
        <SectionHeading index="03 / Approach" eyebrow="How I work" title="Owner of the messy middle." />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl space-y-5 text-[1.05rem] md:text-[1.15rem] leading-[1.65] text-[var(--color-cream-dim)]"
        >
          <p>
            I tend to be the person who owns the messy middle — where data, engineering,
            design, and the deadline all meet. I write the requirements, prioritize with
            ICE and OKRs, and present the roadmap.
          </p>
          <p className="text-[var(--color-cream)]">
            I have very little patience for AI slop dressed up as strategy — and I'm the
            kind of person who builds the thing on the weekend to see if it works.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
