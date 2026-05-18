"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { SectionHeading } from "./SectionHeading";

const CASES = [
  {
    metric: "€4M",
    metricLabel: "Revenue · under 5 months",
    company: "Berlin Brands Group",
    logo: "/logos/bbg.png",
    role: "SEO Manager (acting PM)",
    title: "The two-week seasonal launch.",
    problem: "Multi-brand eCom group needed a seasonal landing-page system for Black Friday and Christmas across DACH. No PM on the team.",
    approach: "Owned planning end-to-end — requirements, sprints with engineering, coordination with sales. Shipped in under two weeks.",
    outcome: "#1 rankings across DACH and UK. ~€4M revenue in under five months."
  },
  {
    metric: "150%",
    metricLabel: "Traffic · 20M → 50M users",
    company: "JustWatch",
    logo: "/logos/justwatch.png",
    role: "Junior SEO Manager (acting product)",
    title: "From streaming guide to platform.",
    problem: "World's largest streaming guide needed platform-level growth, not tactical SEO.",
    approach: "Owned indexation, structured data, A/B testing. Launched Esports vertical. Led 12 regional expansions.",
    outcome: "150% traffic growth. 50M monthly users. Backlinks 6M → 10.2M with a 12-contractor team."
  },
  {
    metric: "25%",
    metricLabel: "AI-search visibility",
    company: "TourRadar",
    logo: "/logos/tourradar.png",
    role: "Senior SEO Manager · reports to COO",
    title: "Discovery, rebuilt for the AI era.",
    problem: "55K tour pages, six markets, declining returns on volume-based SEO. Generative search starting to bite.",
    approach: "Pivoted to entity-based optimization. Implemented GEO tracking. Shipped Itinerary Summaries across 50K pages with LLM workflows. Launched Travel Community Forum and Google Things to Do.",
    outcome: "25% AI-search visibility lift, new revenue stream. 0% loss on NZ domain consolidation."
  },
  {
    metric: "60%",
    metricLabel: "Paid-budget efficiency",
    company: "Droppe",
    logo: "/logos/droppe.png",
    role: "Senior SEO & SEM Manager",
    title: "An internal tool that ran the budget.",
    problem: "B2B2C platform spending €20K/week on paid with inefficient bid management.",
    approach: "Owned full acquisition budget — paid, organic, link-builders, tooling. Specced and shipped an internal SEM efficiency tool.",
    outcome: "60% paid-budget efficiency. 50%+ MoM organic growth. Tenure cut short by strategic vision mismatch."
  }
];

export function SelectedWork() {
  return (
    <section id="work" className="px-6 md:px-12 lg:px-24 py-32">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          index="01 / Work"
          eyebrow="Selected impact"
          title="Four projects, four numbers."
        />

        <div className="space-y-20">
          {CASES.map((c, i) => (
            <motion.article
              key={c.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.04 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 group"
            >
              {/* Number block */}
              <div className="md:col-span-4 lg:col-span-3">
                <div className="mono text-6xl md:text-7xl lg:text-[5.5rem] leading-none text-[var(--color-bronze)] group-hover:text-[var(--color-cream)] transition-colors duration-700">
                  {c.metric}
                </div>
                <div className="mt-2 text-xs text-[var(--color-cream-low)] mono uppercase tracking-[0.15em]">
                  {c.metricLabel}
                </div>
              </div>

              {/* Body */}
              <div className="md:col-span-8 lg:col-span-9 md:pl-8 md:border-l md:border-[var(--color-line)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-6 h-6 shrink-0">
                    <Image
                      src={c.logo}
                      alt={c.company}
                      fill
                      sizes="24px"
                      className="object-contain grayscale brightness-0 invert opacity-70"
                    />
                  </div>
                  <span className="display text-xl md:text-2xl text-[var(--color-cream)]">{c.company}</span>
                  <span className="text-[10px] mono tracking-[0.15em] uppercase text-[var(--color-cream-low)] hidden sm:inline">{c.role}</span>
                </div>
                <h3 className="display text-3xl md:text-4xl text-[var(--color-cream)] mb-6 max-w-2xl">
                  {c.title}
                </h3>
                <dl className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-[var(--color-cream-dim)]">
                  <div>
                    <dt className="eyebrow mb-1.5">Problem</dt>
                    <dd className="text-[0.92rem] leading-[1.55]">{c.problem}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow mb-1.5">Approach</dt>
                    <dd className="text-[0.92rem] leading-[1.55]">{c.approach}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow mb-1.5">Outcome</dt>
                    <dd className="text-[0.92rem] leading-[1.55]">{c.outcome}</dd>
                  </div>
                </dl>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
