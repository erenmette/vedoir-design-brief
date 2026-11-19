"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// ── Animation variants ──────────────────────────────
const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FinalCTA() {
  return (
    <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden">
      {/* ── Background gradient ──────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-void to-obsidian" />

      {/* ── Subtle grid overlay ──────────────────────── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(255,255,255,0.4) 59px, rgba(255,255,255,0.4) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(255,255,255,0.4) 59px, rgba(255,255,255,0.4) 60px)",
        }}
      />

      {/* ── Animated radial orb ─────────────────────── */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          scale: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        <div
          className="h-[600px] w-[600px] rounded-full opacity-[0.08]"
          style={{
            background:
              "radial-gradient(circle, rgba(201,169,110,0.6) 0%, rgba(201,169,110,0) 70%)",
          }}
        />
      </motion.div>

      {/* ── Content ──────────────────────────────────── */}
      <motion.div
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        {/* Label */}
        <motion.p
          variants={fadeInUp}
          className="font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-champagne"
        >
          JOUW VERHAAL BEGINT HIER
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={fadeInUp}
          className="mt-6 font-heading text-4xl leading-tight text-ivory md:text-6xl"
        >
          Begin met het ontwerpen van jouw meesterwerk
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="mt-6 text-lg text-silver"
        >
          Meer dan 500 verhalenvertellers gingen je voor. Jouw horloge wacht op
          je.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/configurator"
            className="inline-block rounded-[2px] bg-champagne px-8 py-4 font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-void transition-all duration-300 hover:translate-y-[-1px] hover:brightness-110"
          >
            ONTWERP JOUW HORLOGE
          </Link>

          <Link
            href="/collectie"
            className="btn-liquid inline-block rounded-[2px] border border-smoke px-8 py-4 font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-ivory transition-all duration-300 hover:border-champagne hover:text-champagne"
          >
            Bekijk de collectie
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
