"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";

// ── Animation variants ────────────────────────────────
const wordReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const wordSlideUp: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// ── Heading words ─────────────────────────────────────
const LINE_1 = ["ELKE", "SECONDE"];
const LINE_2 = ["EEN", "VERHAAL"];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* ── Background gradient ──────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-void to-obsidian" />

      {/* ── Animated gold orb ────────────────────────── */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="h-[500px] w-[500px] rounded-full opacity-[0.15]"
          style={{
            background:
              "radial-gradient(circle, rgba(201,169,110,0.4) 0%, rgba(201,169,110,0) 70%)",
          }}
        />
      </motion.div>

      {/* ── Content ──────────────────────────────────── */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        style={{ y: contentY }}
      >
        {/* Subtitle with lines */}
        <motion.div
          className="mb-8 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.05 }}
        >
          <span className="inline-block h-px w-8 bg-champagne/40" />
          <span className="font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-champagne">
            VEDOIR HORLOGES
          </span>
          <span className="inline-block h-px w-8 bg-champagne/40" />
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="font-heading font-light text-[clamp(2.25rem,8vw,7rem)] leading-[1.05] tracking-[0.06em] text-ivory"
          variants={wordReveal}
          initial="hidden"
          animate="visible"
        >
          {/* Line 1 */}
          <span className="flex items-center justify-center gap-[0.3em]">
            {LINE_1.map((word) => (
              <span key={word} className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block"
                  variants={wordSlideUp}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </span>

          {/* Line 2 */}
          <span className="flex items-center justify-center gap-[0.3em]">
            {LINE_2.map((word) => (
              <span key={word} className="inline-block overflow-hidden">
                <motion.span
                  className="inline-block"
                  variants={wordSlideUp}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="mx-auto mt-8 max-w-xl font-body text-lg font-light text-silver md:text-xl"
          custom={0.6}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          Ontwerp een horloge dat jouw verhaal vertelt. Handgemaakt met 904L
          staal en saffierglas.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
          custom={0.9}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
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
            BEKIJK DE COLLECTIE
          </Link>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ─────────────────────────── */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="font-sans text-[10px] uppercase tracking-widest text-mist">
          Scroll
        </span>
        <motion.span
          className="block h-6 w-px bg-mist"
          animate={{ y: [0, 8, 0], opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}
