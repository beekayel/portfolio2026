"use client";

import { motion } from "motion/react";
import Image from "next/image";

const PROJECTS = [
  {
    name: "Meal Prep Plan",
    blurb: "Personal weekly meal-planning tool built end-to-end as a weekend project.",
    image: "/projects/mealprepplan.jpg",
    href: null as string | null
  },
  {
    name: "SaveGamez",
    blurb: "A side project exploring the savings and discounts space for gamers.",
    image: "/projects/savegamez.jpg",
    href: null as string | null
  }
];

export function OtherProjects() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-24 bg-[var(--color-ink-2)] border-b border-[var(--color-line)]">
      <div className="eyebrow mb-8">Also built</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: i * 0.08 }}
            className="group"
          >
            <div className="relative overflow-hidden border border-[var(--color-line-strong)] aspect-[16/10] mb-4">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03] grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/40 to-transparent" />
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="display text-2xl text-[var(--color-cream)]">{p.name}</h3>
            </div>
            <p className="mt-2 text-sm text-[var(--color-cream-dim)] leading-[1.55]">{p.blurb}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
