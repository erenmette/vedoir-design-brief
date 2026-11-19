"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "@/lib/animations";

// ── Word-by-word clip reveal ──────────────────────────
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

const heroFadeIn: Variants = {
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

// ── Hero heading words ────────────────────────────────
const HERO_WORDS = [
  "Elke",
  "seconde",
  "draagt",
  "een",
  "verhaal",
  "met",
  "zich",
  "mee",
];

export default function OnsVerhaal() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════ */}
      <section className="relative flex min-h-[80vh] items-center justify-center bg-void">
        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          {/* Label */}
          <motion.p
            className="font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-champagne"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.05 }}
          >
            ONS VERHAAL
          </motion.p>

          {/* Heading — word-by-word reveal */}
          <motion.h1
            className="mx-auto mt-6 max-w-4xl font-heading text-5xl leading-tight text-ivory md:text-7xl"
            variants={wordReveal}
            initial="hidden"
            animate="visible"
          >
            <span className="flex flex-wrap items-center justify-center gap-[0.25em]">
              {HERO_WORDS.map((word) => (
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

          {/* Subtitle */}
          <motion.p
            className="mt-4 text-xl italic text-silver"
            custom={0.8}
            variants={heroFadeIn}
            initial="hidden"
            animate="visible"
          >
            Deze is van ons.
          </motion.p>
        </div>

        {/* Scroll indicator */}
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

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — THE ORIGIN
      ═══════════════════════════════════════════════════ */}
      <section className="section-spacing">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
          {/* Image */}
          <motion.div
            className="lg:col-span-7"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="aspect-[4/3] rounded-[2px] border border-smoke bg-graphite" />
          </motion.div>

          {/* Text */}
          <motion.div
            className="flex flex-col justify-center lg:col-span-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span
              className="font-heading text-6xl text-champagne/30"
              variants={fadeInUp}
            >
              &ldquo;
            </motion.span>

            <motion.p
              className="font-heading text-2xl leading-snug text-ivory"
              variants={fadeInUp}
            >
              Het begon met een eenvoudige vraag: waarom draagt iedereen
              hetzelfde horloge?
            </motion.p>

            <motion.p
              className="mt-6 leading-relaxed text-silver"
              variants={fadeInUp}
            >
              In een wereld van massaproductie en eenheidsworst zag Eren iets
              dat anderen misten. Elk mens leeft een leven zo rijk en complex als
              het jouwe &mdash; een concept dat de Duitsers &lsquo;Sonder&rsquo;
              noemen. Waarom zou het horloge aan je pols dat niet weerspiegelen?
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — THE PHILOSOPHY
      ═══════════════════════════════════════════════════ */}
      <section className="section-spacing bg-void">
        <motion.div
          className="mx-auto max-w-3xl px-6 text-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="text-gradient-gold font-heading text-6xl italic md:text-8xl"
            variants={fadeInUp}
          >
            Sonder
          </motion.h2>

          <motion.p
            className="mt-8 font-heading text-xl italic leading-relaxed text-ivory md:text-2xl"
            variants={fadeInUp}
          >
            het besef dat ieder willekeurig voorbijganger een even levendig en
            complex leven leidt als het jouwe
          </motion.p>

          <motion.p
            className="mt-8 leading-relaxed text-silver"
            variants={fadeInUp}
          >
            Dit woord werd onze noordster. Het herinnert ons eraan dat elk
            horloge dat we maken een uniek verhaal moet vertellen. Niet ons
            verhaal &mdash; het jouwe.
          </motion.p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — THE FOUNDER
      ═══════════════════════════════════════════════════ */}
      <section className="section-spacing">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
          {/* Portrait */}
          <motion.div
            className="lg:col-span-5"
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="aspect-[3/4] rounded-[2px] border border-smoke bg-graphite" />
            <p className="mt-4 text-sm text-silver">
              Eren, Oprichter &amp; Ontwerper
            </p>
          </motion.div>

          {/* Text */}
          <motion.div
            className="flex flex-col justify-center lg:col-span-7"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2
              className="font-heading text-4xl text-ivory"
              variants={fadeInUp}
            >
              Van Roosendaal naar de wereld
            </motion.h2>

            <div className="mt-6 space-y-4">
              <motion.p
                className="leading-relaxed text-silver"
                variants={fadeInUp}
              >
                Vanuit een kleine werkplaats in Roosendaal begon Eren met wat
                veel mensen onmogelijk achtten: een horlogemerk dat luxe
                materialen combineert met volledige personalisatie, voor een
                eerlijke prijs.
              </motion.p>

              <motion.p
                className="leading-relaxed text-silver"
                variants={fadeInUp}
              >
                Geen investeerders, geen compromissen. Alleen een onwrikbare
                overtuiging dat iedereen een horloge verdient dat net zo uniek is
                als het verhaal dat ze elke dag leven.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 4 — THE PROMISE
      ═══════════════════════════════════════════════════ */}
      <section className="section-spacing bg-void text-center">
        <motion.div
          className="mx-auto max-w-3xl px-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="font-heading text-4xl text-ivory md:text-5xl"
            variants={fadeInUp}
          >
            Ons belofte
          </motion.h2>

          <motion.p
            className="mt-8 text-lg leading-relaxed text-silver"
            variants={fadeInUp}
          >
            Wij maken geen horloges. Wij vertalen verhalen naar vakmanschap. Elk
            uurwerk dat onze werkplaats verlaat is een bewijs dat luxe niet
            onbereikbaar hoeft te zijn &mdash; het hoeft alleen maar persoonlijk
            te zijn.
          </motion.p>

          <motion.p
            className="mt-12 font-heading text-2xl italic text-champagne"
            variants={fadeInUp}
          >
            Vedoir. Elke seconde een verhaal.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Link
              href="/configurator"
              className="mt-8 inline-block rounded-[2px] bg-champagne px-8 py-4 font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-void transition-all duration-300 hover:translate-y-[-1px] hover:brightness-110"
            >
              ONTWERP JOUW VERHAAL
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
