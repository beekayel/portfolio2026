"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";

const ITEMS = [
  { label: "About", href: "#about" },
  { label: "Stats", href: "#stats" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export function Nav() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 40], [0, 1]);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handler = () => {
      const sections = ITEMS.map((i) => i.href.slice(1));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < 200) current = id;
        }
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="fixed top-5 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="nav-pill rounded-full pointer-events-auto flex items-center gap-1 sm:gap-2 px-2 py-2 max-w-full"
      >
        <a
          href="#top"
          className="hidden sm:flex items-center gap-2 pl-3 pr-2 text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-bronze)] transition-colors"
        >
          <span className="display text-base">Dan Hodeanu</span>
        </a>
        <div className="hidden sm:block w-px h-5 bg-[var(--color-line-strong)] mx-1" />
        <ul className="flex items-center gap-0.5">
          {ITEMS.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative inline-flex items-center px-3 py-1.5 rounded-full text-[0.85rem] tracking-[0.01em] transition-colors ${
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
          className="ml-1 inline-flex items-center gap-1.5 bg-[var(--color-bronze)] hover:bg-[var(--color-bronze-deep)] text-[var(--color-bg)] text-[0.82rem] font-medium px-3.5 py-1.5 rounded-full transition-colors"
        >
          Get in touch
          <span aria-hidden>→</span>
        </a>
      </motion.nav>
    </div>
  );
}
