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

type InternalTool = {
  tag: string;
  title: string;
  copy: string;
  bullets?: { label: string; desc: string }[];
  tail?: string;
};

const INTERNAL_TOOLS: InternalTool[] = [
  {
    tag: "TourRadar · Company-wide",
    title: "Michael & Susan — Persona Content Engine",
    copy:
      "A company-wide Claude Code AI assistant trained on real emails, bookings, and customer data for TourRadar's highest-value segment (boomer couples — 41% of revenue). Three modes:",
    bullets: [
      { label: "Generate", desc: "emails, landing pages, ads, tour copy" },
      { label: "Evaluate", desc: "scorecard-style QA on drafts" },
      { label: "CS Triage", desc: "spots persona-fit customers" }
    ]
  },
  {
    tag: "TourRadar · SEO content",
    title: "Destination & Tour-Data FAQ Generators",
    copy:
      "Twin pipelines producing Q&A pairs grounded in live data pulled directly from our internal MCP — real tour pricing, departures, operator info — not generic AI guesses. Output is production-ready HTML with built-in quality checks, voice rules, and partner-link injection. Built in Claude Code."
  },
  {
    tag: "TourRadar · Organic growth",
    title: "Forum Seeding Pipeline",
    copy:
      "Claude Code automation hooked into the Ahrefs MCP to automatically pull fresh competitor keywords every week, then generated authentic forum posts in parallel sub-agents (batches of 20), with automated CSV validation so nothing shipped without a sanity check."
  },
  {
    tag: "TourRadar · Quality plugin",
    title: "Google Content Rater (E-E-A-T)",
    copy:
      "A company-wide Claude Code plugin built on Google's Search Quality Evaluator Guidelines. Two modes: Creation guides drafts with E-E-A-T signals baked in; Rating scores any piece across four dimensions on a 6-point scale with evidence, gaps, and concrete improvement recommendations. YMYL detection built in."
  },
  {
    tag: "TourRadar · AI Hackathon",
    title: "TourRadar AI Search",
    copy:
      "A conversational tour search interface for multi-day tours. Built on Next.js 16, Gemini 2.5 Flash, the TourRadar MCP, and Neon Postgres on Vercel. Shipped production-ready with proper guardrails, integrated into the TourRadar design system, and slated for a future marketplace rollout."
  },
  {
    tag: "Droppe · Paid acquisition",
    title: "SEM Budget Optimizer",
    copy:
      "Daily ETL job that scanned every keyword across our Google Ads account, automatically negated wasteful spend and reallocated budget in real time. Before, ~60% of our €50K monthly budget was burning on non-converting terms at sub-90% ROAS.",
    tail:
      "This tool lifted ROAS to a consistent 100%+ and redirected 60% of spend onto keywords that actually converted."
  }
];

export function Toolbox() {
  return (
    <section
      id="tools"
      className="relative px-6 md:px-12 lg:px-24 py-24 md:py-28 border-t border-[var(--color-line)]"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
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

        {/* Pills */}
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

        {/* Spacer divider */}
        <div
          aria-hidden
          className="mt-20 md:mt-28 mb-20 md:mb-24 h-px bg-gradient-to-r from-transparent via-[var(--color-line-strong)] to-transparent"
        />

        {/* Internal Tools sub-section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="display text-3xl md:text-4xl lg:text-5xl text-[var(--color-text)] mb-5">
            Internal Tools built
          </h2>
          <p className="text-[var(--color-text-dim)] text-[1rem] md:text-[1.05rem] leading-[1.6]">
            A few of the internal tools I've shipped, built to remove
            bottlenecks, automate tasks, and let the team move faster.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {INTERNAL_TOOLS.map((tool, i) => (
            <motion.article
              key={tool.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.06 }}
              className="glass rounded-2xl p-6 md:p-7 flex flex-col"
            >
              <div className="text-[10px] tracking-[0.18em] uppercase text-[var(--color-bronze-deep)] mono mb-3">
                {tool.tag}
              </div>
              <h3 className="display text-xl md:text-[1.4rem] text-[var(--color-text)] leading-tight mb-3">
                {tool.title}
              </h3>
              <p className="text-[0.88rem] leading-[1.55] text-[var(--color-text-dim)]">
                {tool.copy}
              </p>
              {tool.bullets && (
                <ul className="mt-3 space-y-1.5">
                  {tool.bullets.map((b) => (
                    <li
                      key={b.label}
                      className="relative pl-4 text-[0.88rem] leading-[1.55] text-[var(--color-text-dim)]"
                    >
                      <span
                        aria-hidden
                        className="absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full bg-[var(--color-bronze)]"
                      />
                      <span className="text-[var(--color-text)] font-medium">
                        {b.label}
                      </span>{" "}
                      — {b.desc}
                    </li>
                  ))}
                </ul>
              )}
              {tool.tail && (
                <p className="mt-3 text-[0.88rem] leading-[1.55] text-[var(--color-text)]">
                  {tool.tail}
                </p>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
