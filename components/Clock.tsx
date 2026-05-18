"use client";

/* A subtle live-ticking watch face — bronze second hand, slowly sweeps every 60s. */
export function Clock() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className="opacity-80"
      aria-hidden
    >
      {/* outer ring */}
      <circle cx="20" cy="20" r="18" fill="none" stroke="var(--color-line-strong)" strokeWidth="1" />
      {/* hour ticks */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 12;
        const x1 = 20 + Math.sin(a) * 15.5;
        const y1 = 20 - Math.cos(a) * 15.5;
        const x2 = 20 + Math.sin(a) * 17;
        const y2 = 20 - Math.cos(a) * 17;
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--color-cream-low)" strokeWidth={i % 3 === 0 ? 1.2 : 0.6} />
        );
      })}
      {/* second hand */}
      <line
        x1="20"
        y1="22"
        x2="20"
        y2="6"
        stroke="var(--color-bronze)"
        strokeWidth="1"
        strokeLinecap="round"
        className="tick-hand"
      />
      {/* pivot */}
      <circle cx="20" cy="20" r="1.3" fill="var(--color-bronze)" />
    </svg>
  );
}
