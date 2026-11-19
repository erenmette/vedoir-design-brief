"use client";

import { motion } from "framer-motion";
import { Shield, Gem, Award, RotateCcw, Truck } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import { trustSignals } from "@/lib/data";

// ── Icon map ────────────────────────────────────────
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  shield: Shield,
  gem: Gem,
  award: Award,
  refresh: RotateCcw,
  truck: Truck,
};

export default function TrustBar() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      className="border-t border-b border-smoke bg-void py-6"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-6 px-6 md:justify-between">
        {trustSignals.map((signal, i) => {
          const Icon = iconMap[signal.icon];
          return (
            <div key={signal.label} className="flex items-center gap-2">
              {/* Dot separator — desktop only, not before first item */}
              {i > 0 && (
                <span
                  className="mr-4 hidden text-smoke md:inline"
                  aria-hidden="true"
                >
                  ·
                </span>
              )}
              {Icon && <Icon size={16} className="text-champagne" />}
              <span className="font-sans text-xs uppercase tracking-wider text-silver md:text-sm">
                {signal.label}
              </span>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
