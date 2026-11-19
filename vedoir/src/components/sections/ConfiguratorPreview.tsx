"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { slideInLeft, slideInRight } from "@/lib/animations";

const steps = [
  {
    number: "01",
    title: "Kies je model",
    description: "Selecteer de basis die bij jouw stijl past.",
  },
  {
    number: "02",
    title: "Configureer elk detail",
    description: "Materialen, kleuren, wijzerplaat en meer.",
  },
  {
    number: "03",
    title: "Personaliseer met gravure",
    description: "Voeg een naam, datum of logo toe.",
  },
];

export default function ConfiguratorPreview() {
  return (
    <section className="section-spacing bg-void">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT — visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="aspect-square bg-graphite rounded-[2px] border border-smoke flex items-center justify-center"
            >
              <span className="text-mist text-lg">3D Preview</span>
            </motion.div>
          </motion.div>

          {/* RIGHT — content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-champagne font-sans font-medium">
              HET ATELIER
            </p>

            <h2 className="font-heading text-4xl md:text-5xl text-ivory mt-4">
              Ontwerp jouw meesterwerk
            </h2>

            <p className="text-silver text-base leading-relaxed mt-6">
              In drie stappen naar een horloge dat nergens anders bestaat. Kies
              je materialen, ontwerp je wijzerplaat, en personaliseer met gravure
              of logo.
            </p>

            {/* Steps */}
            <div className="mt-10 space-y-6">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-4">
                  <span className="font-mono text-champagne text-sm">
                    {step.number}
                  </span>
                  <div>
                    <p className="text-ivory font-medium">{step.title}</p>
                    <p className="text-silver text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/configurator">
              <motion.span
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
                className="inline-block bg-champagne text-void py-4 px-8 rounded-[2px] uppercase tracking-[0.12em] text-[12px] font-sans font-medium mt-10 transition"
              >
                START MET ONTWERPEN
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
