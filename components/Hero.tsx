"use client";

import { motion } from "motion/react";

export function Hero() {
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } }
  };
  const line = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-[72vh] md:min-h-[78vh] flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 pt-32 pb-20 text-center"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto relative z-10"
      >
        <motion.p variants={line} className="eyebrow mb-7">
          Hi there 👋 and welcome to my portfolio.
        </motion.p>

        <motion.h1
          variants={line}
          className="display text-[14vw] md:text-[8vw] lg:text-[6.8rem] leading-[0.95] text-[var(--color-text)]"
        >
          Dan Hodeanu
        </motion.h1>

        <motion.p
          variants={line}
          className="mt-8 mx-auto max-w-2xl text-[1.15rem] md:text-[1.3rem] leading-[1.5] text-[var(--color-text-dim)]"
        >
          Eight years driving organic growth for international brands and marketplaces across
          eCommerce, travel, and SaaS. Always on the watch for Senior SEO and Product roles.
        </motion.p>

        <motion.div
          variants={line}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#contact" className="btn btn-primary">
            Get in touch
            <span aria-hidden>→</span>
          </a>
          <a
            href="https://linkedin.com/in/danhodeanu"
            target="_blank"
            rel="noreferrer"
            className="btn btn-linkedin"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.22 0z" />
            </svg>
            LinkedIn
            <span aria-hidden>↗</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
