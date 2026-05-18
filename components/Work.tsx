"use client";

import { motion } from "motion/react";
import Image from "next/image";

type Role = {
  company: string;
  position: string;
  location: string;
  dates: string;
  logo: string;
  bullets: string[];
  href?: string;
};

const ROLES: Role[] = [
  {
    company: "TourRadar",
    position: "Senior SEO Manager",
    location: "Vienna, Austria · On-site",
    dates: "May 2025 — Present",
    logo: "/logos/tourradar.png",
    bullets: [
      "Own SEO strategy for a content platform serving 55,000+ tour pages and 9,500+ landing pages across 6 international markets.",
      "Led end-to-end NZ domain consolidation: defined requirements, collaborated with engineering, 0% traffic/ranking loss.",
      "Launched and own SEO/discovery rollout for Google Things to Do; launched and scaled the Travel Community Forum.",
      "Shipped Itinerary Summaries across 50,000+ pages using proprietary data and LLM workflows.",
      "Implemented GEO and AI visibility tracking (PEEC, Otterly) — shifted to entity-based optimisation, 25% AI visibility lift."
    ]
  },
  {
    company: "Droppe",
    position: "Senior SEO & SEM Manager",
    location: "Helsinki, Finland · Remote",
    dates: "Feb 2025 — Apr 2025",
    logo: "/logos/droppe.png",
    bullets: [
      "Led user acquisition strategy and budget allocation across organic and paid; defined growth KPIs and reported to exec stakeholders.",
      "Collaborated with product team on continuous CRO and organic traffic growth for the B2B source-to-order platform.",
      "Developed SEM efficiency tool — product initiative increasing budget efficiency by 60% via automation and bid optimization.",
      "Drove 50%+ MoM organic traffic growth by scaling the content pipeline and product listing experience (metadata, reviews, GMC)."
    ]
  },
  {
    company: "Berlin Brands Group",
    position: "SEO Manager",
    location: "Berlin, Germany · On-site",
    dates: "Nov 2023 — Jan 2025",
    logo: "/logos/bbg.png",
    bullets: [
      "Led platform strategy across all brands (Klarstein, Elektronik-Star, Blumfeldt…): feature prioritization for landing-page systems, internal linking, content taxonomy.",
      "Spearheaded UI/UX redesign initiatives with design and engineering to lift CTR and CR on landing pages.",
      "Restructured internal linking architecture → +30% organic keyword rankings and +15% traffic within six months.",
      "PM for AI-driven content optimization: automated Amazon and D2C content creation via AI workflows.",
      "Launched seasonal landing pages (Black Friday, Christmas) hitting #1 across DACH + UK for core categories, driving significant revenue."
    ]
  },
  {
    company: "JustWatch",
    position: "Junior SEO Manager",
    location: "Berlin, Germany · On-site",
    dates: "Oct 2022 — Oct 2023",
    logo: "/logos/justwatch.png",
    bullets: [
      "Increased platform traffic by 150% to 50M monthly visits through feature launches and platform optimization.",
      "Owned core platform systems: metadata, structured data, indexation architecture, A/B testing frameworks.",
      "Launched the Esports category and led 12 regional expansions — product strategy, requirements, and localization.",
      "Grew the backlink profile from 6M to 10.2M leading a 12-contractor team."
    ]
  },
  {
    company: "Fishing in Lappland",
    position: "Marketing Manager & Web Developer",
    location: "Storuman, Sweden",
    dates: "Aug 2019 — Aug 2021",
    logo: "/logos/fl.png",
    href: "https://fishinginlappland.com/",
    bullets: [
      "Developed the fishinginlappland.com website end-to-end while leading marketing.",
      "Produced video content and ran social media across all channels.",
      "Re-contracted in 2025 to redesign and rebuild the website."
    ]
  }
];

export function Work() {
  return (
    <section id="work" className="relative px-6 md:px-12 lg:px-24 py-28 md:py-32">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="eyebrow mb-3">Work</div>
          <h2 className="display text-4xl md:text-5xl lg:text-6xl text-[var(--color-text)] max-w-3xl">
            A timeline of my professional journey.
          </h2>
        </motion.div>

        <div className="relative">
          {/* vertical line */}
          <div
            aria-hidden
            className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-[var(--color-line-strong)] to-transparent"
          />

          <div className="space-y-10">
            {ROLES.map((r, i) => (
              <motion.div
                key={r.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-12 md:pl-16"
              >
                {/* dot */}
                <span className="absolute left-0 md:left-[3px] top-6 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-bg)] border border-[var(--color-bronze)]">
                  <span className="block h-2 w-2 rounded-full bg-[var(--color-bronze)]" />
                </span>

                <div className="glass rounded-2xl p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8 shrink-0 rounded-md overflow-hidden bg-white/50 border border-[var(--color-line)] p-1">
                        <Image
                          src={r.logo}
                          alt={r.company}
                          fill
                          sizes="32px"
                          className="object-contain p-1"
                        />
                      </div>
                      <div>
                        <div className="display text-xl md:text-2xl text-[var(--color-text)] leading-tight">
                          {r.position}
                        </div>
                        <div className="text-sm text-[var(--color-text-dim)]">
                          {r.href ? (
                            <a
                              href={r.href}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[var(--color-bronze-deep)] hover:text-[var(--color-text)] transition-colors underline underline-offset-4 decoration-[var(--color-bronze)]/40"
                            >
                              {r.company} ↗
                            </a>
                          ) : (
                            r.company
                          )}{" "}
                          <span className="text-[var(--color-text-low)]">· {r.location}</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[11px] tracking-[0.15em] uppercase text-[var(--color-text-low)] mono whitespace-nowrap pt-1">
                      {r.dates}
                    </span>
                  </div>

                  <ul className="space-y-2 text-[0.95rem] leading-[1.6] text-[var(--color-text-dim)]">
                    {r.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-3">
                        <span
                          aria-hidden
                          className="mt-2.5 inline-block h-1 w-1 rounded-full bg-[var(--color-bronze)] shrink-0"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
