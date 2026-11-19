"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, X, Clock } from "lucide-react";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
} from "@/lib/animations";

export default function Vakmanschap() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════ */}
      <section className="flex min-h-[70vh] items-center justify-center bg-void">
        <motion.div
          className="flex flex-col items-center px-6 text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="font-sans text-[11px] font-medium uppercase tracking-[0.25em] text-champagne"
            variants={fadeInUp}
          >
            VAKMANSCHAP
          </motion.p>

          <motion.h1
            className="mt-6 font-heading text-5xl text-ivory md:text-7xl"
            variants={fadeInUp}
          >
            Waar precisie kunst ontmoet
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-silver"
            variants={fadeInUp}
          >
            Elk onderdeel vertelt een verhaal van vakmanschap en toewijding.
          </motion.p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════
          MATERIAL 1 — 904L STAAL
      ═══════════════════════════════════════════════════ */}
      <section className="section-spacing bg-obsidian">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="aspect-[4/3] rounded-[2px] border border-smoke bg-graphite" />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              className="font-mono text-6xl font-bold text-champagne md:text-8xl"
              variants={fadeInUp}
            >
              904L
            </motion.p>

            <motion.p
              className="mt-2 text-[11px] uppercase tracking-[0.2em] text-silver"
              variants={fadeInUp}
            >
              CHIRURGISCH STAAL
            </motion.p>

            <motion.p
              className="mt-6 leading-relaxed text-silver"
              variants={fadeInUp}
            >
              Hetzelfde staal dat Rolex gebruikt in hun meest exclusieve
              modellen. 904L is bestand tegen corrosie, hypoallergeen, en
              behoudt zijn glans levenslang.
            </motion.p>

            {/* Comparison table */}
            <motion.div
              className="mt-8 space-y-3"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-3 text-sm">
                <Check className="h-4 w-4 text-champagne" />
                <span className="text-ivory">Vedoir: 904L</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Check className="h-4 w-4 text-champagne" />
                <span className="text-ivory">Rolex: 904L</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <X className="h-4 w-4 text-mist" />
                <span className="text-mist">Seiko: 316L</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          MATERIAL 2 — SAFFIERGLAS
      ═══════════════════════════════════════════════════ */}
      <section className="section-spacing bg-void">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
          {/* Content (left on desktop) */}
          <motion.div
            className="order-2 lg:order-1"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              className="font-mono text-8xl font-bold text-champagne"
              variants={fadeInUp}
            >
              9
            </motion.p>

            <motion.p
              className="mt-2 text-[11px] uppercase tracking-[0.2em] text-silver"
              variants={fadeInUp}
            >
              MOHS HARDHEID
            </motion.p>

            <motion.p
              className="mt-6 leading-relaxed text-silver"
              variants={fadeInUp}
            >
              Saffierglas is het op een na hardste transparante materiaal ter
              wereld. Alleen diamant is harder. Krasbestendig, helder, en
              gebouwd om generaties mee te gaan.
            </motion.p>

            {/* Badges */}
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              variants={fadeInUp}
            >
              {[
                "Krasbestendig",
                "Anti-reflectie coating",
                "Optische helderheid",
              ].map((badge) => (
                <span
                  key={badge}
                  className="rounded-[2px] border border-smoke px-4 py-2 text-xs uppercase tracking-wide text-silver"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Image (right on desktop) */}
          <motion.div
            className="order-1 lg:order-2"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="aspect-[4/3] rounded-[2px] border border-smoke bg-graphite" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          MATERIAL 3 — MECHANISCH UURWERK
      ═══════════════════════════════════════════════════ */}
      <section className="section-spacing bg-obsidian">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="aspect-[4/3] rounded-[2px] border border-smoke bg-graphite" />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeInUp}>
              <Clock className="h-12 w-12 text-champagne" />
            </motion.div>

            <motion.h3
              className="mt-4 font-heading text-3xl text-ivory md:text-4xl"
              variants={fadeInUp}
            >
              Mechanisch Uurwerk
            </motion.h3>

            <motion.p
              className="mt-6 leading-relaxed text-silver"
              variants={fadeInUp}
            >
              Een mechanisch uurwerk is meer dan een tijdmeter &mdash; het is een
              miniatuur kunstwerk van tandwielen, veren en precisie. Elk
              onderdeel werkt samen in perfecte harmonie.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          MATERIAL 4 — 50M WATERBESTENDIG
      ═══════════════════════════════════════════════════ */}
      <section className="section-spacing bg-void">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
          {/* Content (left on desktop) */}
          <motion.div
            className="order-2 lg:order-1"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p
              className="font-mono text-7xl font-bold text-champagne md:text-9xl"
              variants={fadeInUp}
            >
              50M
            </motion.p>

            <motion.p
              className="mt-2 text-[11px] uppercase tracking-[0.2em] text-silver"
              variants={fadeInUp}
            >
              WATERBESTENDIG
            </motion.p>

            <motion.p
              className="mt-6 leading-relaxed text-silver"
              variants={fadeInUp}
            >
              Getest tot 50 meter diepte. Of je nu zwemt, doucht of in de regen
              loopt &mdash; jouw Vedoir horloge gaat overal mee.
            </motion.p>
          </motion.div>

          {/* Image (right on desktop) */}
          <motion.div
            className="order-1 lg:order-2"
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="aspect-[4/3] rounded-[2px] border border-smoke bg-graphite" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FINAL CTA
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
            className="font-heading text-4xl text-ivory"
            variants={fadeInUp}
          >
            De materialen van morgen, vandaag
          </motion.h2>

          <motion.p
            className="mt-6 leading-relaxed text-silver"
            variants={fadeInUp}
          >
            Wij geloven dat kwaliteit geen prijskaartje van &euro;8.000 nodig
            heeft. Dezelfde materialen, dezelfde standaarden, een eerlijke
            prijs.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Link
              href="/configurator"
              className="mt-8 inline-block rounded-[2px] bg-champagne px-8 py-4 font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-void transition-all duration-300 hover:translate-y-[-1px] hover:brightness-110"
            >
              ONTWERP MET DEZE MATERIALEN
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
