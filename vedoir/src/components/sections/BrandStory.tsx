"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { slideInLeft, slideInRight } from "@/lib/animations";

export default function BrandStory() {
  return (
    <section className="section-spacing">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* LEFT — founder image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
            className="lg:col-span-5"
          >
            <div className="aspect-[3/4] bg-graphite border border-smoke rounded-[2px] flex items-center justify-center">
              <span className="text-mist text-sm">Founder Photo</span>
            </div>
            <p className="text-silver text-sm mt-4 font-sans">
              Eren, Oprichter
            </p>
          </motion.div>

          {/* RIGHT — brand story */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
            className="lg:col-span-7"
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-champagne font-sans font-medium">
              ONS VERHAAL
            </p>

            <blockquote className="font-heading text-3xl md:text-4xl text-ivory italic leading-snug mt-4">
              &ldquo;Elk horloge dat onze werkplaats verlaat draagt een verhaal
              met zich mee. Niet het onze &mdash; het jouwe.&rdquo;
            </blockquote>

            <p className="text-silver leading-relaxed mt-8">
              Vedoir is geboren uit de overtuiging dat er een woord bestaat
              &mdash; sonder &mdash; voor het besef dat ieder mens een even rijk
              en complex leven leidt als het jouwe. Wij geloven dat een horloge
              meer is dan een instrument dat de tijd aangeeft.
            </p>

            <Link href="/ons-verhaal">
              <motion.span
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
                className="inline-block text-champagne border border-champagne py-3 px-8 rounded-[2px] text-[12px] uppercase tracking-[0.12em] hover:bg-champagne hover:text-void transition font-sans font-medium mt-8"
              >
                LEES ONS VERHAAL
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
