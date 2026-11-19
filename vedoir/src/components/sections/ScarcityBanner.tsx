"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

// ── Counter hook ────────────────────────────────────
function useCountUp(target: number, inView: boolean, duration = 1.6) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const start = performance.now();

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return count;
}

// ── Stats data ──────────────────────────────────────
const stats = [
  { value: 14, label: "Werkdagen levertijd", suffix: "" },
  { value: 50, label: "Max per maand", suffix: "" },
  { value: 904, label: "Chirurgisch staal", suffix: "L" },
];

// ── Stat item ───────────────────────────────────────
function StatItem({
  value,
  label,
  suffix,
  inView,
}: {
  value: number;
  label: string;
  suffix: string;
  inView: boolean;
}) {
  const count = useCountUp(value, inView);

  return (
    <div className="flex flex-col items-center">
      <motion.span className="font-mono text-3xl text-champagne">
        {count}
        {suffix}
      </motion.span>
      <span className="mt-2 text-xs uppercase tracking-wider text-silver">
        {label}
      </span>
    </div>
  );
}

// ── Component ───────────────────────────────────────
export default function ScarcityBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className="relative border-t border-b border-smoke bg-obsidian py-20 md:py-28"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Label */}
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-champagne">
          HANDGEMAAKT. OP BESTELLING.
        </p>

        {/* Heading */}
        <h2 className="mt-4 font-heading text-3xl text-ivory md:text-5xl">
          Maximaal 50 horloges per maand
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-6 max-w-2xl text-base text-silver md:text-lg">
          Elk horloge wordt met de hand geassembleerd door onze horlogemakers.
          Geen massaproductie, geen haast. Alleen precisie.
        </p>

        {/* Stats row */}
        <div className="mt-12 flex flex-wrap items-start justify-center gap-12 md:gap-20">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-start gap-12 md:gap-20">
              {/* Divider before (skip first, hidden on mobile) */}
              {i > 0 && (
                <span
                  className="hidden h-12 w-px bg-smoke md:block"
                  aria-hidden="true"
                />
              )}
              <StatItem
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                inView={isInView}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
