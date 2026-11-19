"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

// ── Counter hook ──────────────────────────────────────
function useCounter(end: number, duration: number, start: boolean, decimals = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let raf: number;

    function animate(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((eased * end).toFixed(decimals)));

      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    }

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start, decimals]);

  return value;
}

// ── Stat item data ────────────────────────────────────
interface StatItem {
  value: number;
  decimals?: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 4.9, decimals: 1, suffix: "", label: "147+ Reviews" },
  { value: 500, decimals: 0, suffix: "+", label: "Horloges ontworpen" },
  { value: 904, decimals: 0, suffix: "L", label: "Chirurgisch staal" },
];

// ── Animated stat ─────────────────────────────────────
function AnimatedStat({
  item,
  inView,
}: {
  item: StatItem;
  inView: boolean;
}) {
  const count = useCounter(
    item.value,
    1800,
    inView,
    item.decimals ?? 0,
  );

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-baseline gap-1">
        <motion.span className="font-mono text-base font-medium text-champagne md:text-lg">
          {inView
            ? item.decimals
              ? count.toFixed(item.decimals)
              : Math.round(count)
            : 0}
          {item.suffix}
        </motion.span>

        {/* Star icon for the rating stat */}
        {item.value === 4.9 && (
          <Star className="h-3.5 w-3.5 fill-champagne text-champagne" />
        )}
      </div>

      <span className="font-sans text-sm text-silver">{item.label}</span>
    </div>
  );
}

// ── Vertical divider ──────────────────────────────────
function Divider() {
  return <span className="hidden h-4 w-px bg-smoke md:block" />;
}

// ── SocialProofBar ────────────────────────────────────
export default function SocialProofBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="w-full border-t border-smoke bg-obsidian py-5"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex flex-col items-center justify-center gap-4 px-6 md:flex-row md:gap-16">
        {stats.map((item, i) => (
          <div key={item.label} className="flex items-center gap-8 md:gap-16">
            {i > 0 && <Divider />}
            <AnimatedStat item={item} inView={isInView} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
