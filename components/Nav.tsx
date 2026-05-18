"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const ITEMS = [
  { label: "About", href: "#about" },
  { label: "Stats", href: "#stats" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" }
];

export function Nav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = ITEMS.map((i) => i.href.slice(1));
    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio);
          } else {
            visible.delete(entry.target.id);
          }
        });

        if (visible.size === 0) {
          setActive("");
          return;
        }

        // Of all currently-visible sections, pick the one whose top is highest
        // up in the viewport (smallest top relative to the detection band).
        let best = "";
        let bestTop = Infinity;
        visible.forEach((_, id) => {
          const el = document.getElementById(id);
          if (!el) return;
          const top = el.getBoundingClientRect().top;
          // We want the section whose top is closest to (or just past) the
          // top of the detection zone — use absolute distance.
          if (Math.abs(top) < bestTop) {
            bestTop = Math.abs(top);
            best = id;
          }
        });
        if (best) setActive(best);
      },
      {
        // Detection band: from 110px below viewport top to 60% from the top.
        rootMargin: "-110px 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center pointer-events-none px-3 sm:px-4">
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="nav-pill rounded-full pointer-events-auto flex items-center gap-1 sm:gap-2 px-1.5 sm:px-2 py-1.5 sm:py-2 max-w-full"
      >
        <a
          href="#top"
          className="hidden md:flex items-center gap-2 pl-3 pr-2 text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-bronze)] transition-colors whitespace-nowrap"
        >
          <span className="display text-base">Dan Hodeanu</span>
        </a>
        <div className="hidden md:block w-px h-5 bg-[var(--color-line-strong)] mx-1" />
        <ul className="flex items-center gap-0">
          {ITEMS.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative inline-flex items-center px-2 sm:px-3 py-1.5 rounded-full text-[0.72rem] sm:text-[0.85rem] tracking-[0.01em] transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-[var(--color-bronze-deep)]"
                      : "text-[var(--color-text-dim)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-white/60 border border-[var(--color-line)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href="#contact"
          aria-label="Get in touch"
          className="ml-1 inline-flex items-center justify-center gap-1.5 bg-[var(--color-bronze)] hover:bg-[var(--color-bronze-deep)] text-[var(--color-bg)] text-[0.82rem] font-medium rounded-full transition-colors whitespace-nowrap h-8 w-8 sm:h-auto sm:w-auto sm:px-3.5 sm:py-1.5"
        >
          <span className="hidden sm:inline">Get in touch</span>
          <span aria-hidden>→</span>
        </a>
      </motion.nav>
    </div>
  );
}
