"use client";

import { motion } from "motion/react";
import Image from "next/image";

type Project = {
  name: string;
  blurb: string;
  image: string;
  href: string | null;
  tag: string;
};

const PROJECTS: Project[] = [
  {
    name: "Horologius",
    tag: "Featured · Live",
    blurb:
      "A microbrand watch news and review platform serving collectors and enthusiasts. Designed in Figma, built on WordPress with React components on Hostinger, run entirely by me — custom taxonomy, AI-assisted content workflows, automation, brand partnerships, and performance marketing on Meta and Google Ads.",
    image: "/projects/Horologius.png",
    href: "https://horologius.com"
  },
  {
    name: "Petalon",
    tag: "Featured · Live",
    blurb:
      "A crowdsourced reputation layer for LinkedIn job listings. Members vote on companies with three icons — green flag, red flag, or ghost — and the winning verdict appears next to company logos as they browse jobs. Built solo end-to-end: Next.js web app, Chrome extension, Supabase backend, Stripe subscriptions, and the brand from scratch.",
    image: "/projects/Petalon.jpg",
    href: "https://petalon.app"
  },
  {
    name: "Meal Prep Plan",
    tag: "Side project",
    blurb:
      "Streamlines meal prep and grocery shopping into a waste-free experience — scan the existing products in your fridge via photos to generate optimised shopping lists. Learns from your purchasing behaviour and, based on your average purchase interval, automatically adds items back to your list.",
    image: "/projects/Mealprepplan.png",
    href: null
  },
  {
    name: "SaveGamez",
    tag: "Side project",
    blurb:
      "Explores the savings and discounts space for gamers — deal aggregation and discovery with complex data aggregation and calculation across different API connectors. Users build their own library and track the cheapest price in real time with email notifications and price alerts.",
    image: "/projects/Savegamez.png",
    href: null
  }
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative px-6 md:px-12 lg:px-24 py-28 md:py-32 border-t border-[var(--color-line)]"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="eyebrow mb-3">Projects</div>
          <h2 className="display text-4xl md:text-5xl lg:text-6xl text-[var(--color-text)] max-w-3xl">
            Things I built on my own.
          </h2>
        </motion.div>

        <div className="space-y-24 md:space-y-28">
          {PROJECTS.map((p, i) => {
            const cardOnRight = i % 2 === 0;
            return (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Image — full width, fixed aspect */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--color-line-strong)] shadow-[0_24px_70px_-28px_rgba(26,22,14,0.3)]">
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full h-full"
                    >
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 1100px"
                        className="object-cover"
                        priority={i === 0}
                      />
                    </a>
                  ) : (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 1100px"
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Glass card — floating on top of the image, alternating side */}
                <div
                  className={`relative md:absolute md:bottom-[-3.5rem] z-20 mt-[-3rem] md:mt-0 mx-4 md:mx-0 ${
                    cardOnRight
                      ? "md:right-6 lg:right-10"
                      : "md:left-6 lg:left-10"
                  } md:max-w-md lg:max-w-lg`}
                >
                  <div className="glass-strong rounded-2xl p-6 md:p-7">
                    <div className="eyebrow mb-2 text-xs">{p.tag}</div>
                    <h3 className="display text-2xl md:text-3xl text-[var(--color-text)] mb-3">
                      {p.name}
                    </h3>
                    <p className="text-[0.95rem] leading-[1.6] text-[var(--color-text-dim)]">
                      {p.blurb}
                    </p>
                    {p.href && (
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 text-sm text-[var(--color-bronze-deep)] hover:text-[var(--color-text)] transition-colors font-medium"
                      >
                        Visit site
                        <span aria-hidden>↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
