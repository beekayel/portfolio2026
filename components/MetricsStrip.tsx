const METRICS = [
  { num: "€4M", label: "Revenue from BBG seasonal landing-page system" },
  { num: "150%", label: "Traffic growth at JustWatch (20M → 50M users)" },
  { num: "25%", label: "AI-search visibility lift at TourRadar" },
  { num: "60%", label: "Paid-budget efficiency at Droppe via internal tool" },
  { num: "0%", label: "Traffic loss on NZ domain consolidation" },
  { num: "55,000", label: "Tour pages owned at TourRadar" },
  { num: "12", label: "Regional product expansions at JustWatch" },
  { num: "10.2M", label: "Backlinks at JustWatch (from 6M)" },
  { num: "50,000+", label: "Pages shipped with Itinerary Summaries product" },
  { num: "+30%", label: "Keyword rankings at BBG via internal-linking work" }
];

export function MetricsStrip() {
  const items = [...METRICS, ...METRICS];
  return (
    <section className="relative py-14 border-y border-[var(--color-line)] overflow-hidden">
      <div className="marquee-track flex gap-12 whitespace-nowrap will-change-transform">
        {items.map((m, i) => (
          <div key={i} className="flex items-baseline gap-4 shrink-0">
            <span className="mono text-2xl md:text-3xl text-[var(--color-bronze)]">{m.num}</span>
            <span className="text-sm md:text-base text-[var(--color-cream-dim)]">{m.label}</span>
            <span className="text-[var(--color-cream-low)] ml-8 mono">∙</span>
          </div>
        ))}
      </div>
    </section>
  );
}
