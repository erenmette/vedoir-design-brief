"use client";

import { motion } from "framer-motion";
import { Pen, Diamond, ShieldCheck } from "lucide-react";
import { staggerContainer, fadeInUp, lineDraw } from "@/lib/animations";

const cards = [
  {
    icon: Pen,
    title: "Jouw Ontwerp",
    description:
      "Configureer elk detail. Van kast tot wijzerplaat, van band tot gravure. Jouw horloge, jouw regels.",
  },
  {
    icon: Diamond,
    title: "Luxe Materialen",
    description:
      "904L chirurgisch staal en saffierglas. Dezelfde materialen als horloges van \u20AC8.000+.",
  },
  {
    icon: ShieldCheck,
    title: "Gegarandeerd",
    description:
      "24 maanden garantie, 14 dagen retour, gratis verzending. Zonder risico.",
  },
];

export default function ValueProposition() {
  return (
    <section className="section-spacing">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center mb-6"
        >
          <motion.p
            variants={fadeInUp}
            className="text-[11px] uppercase tracking-[0.2em] text-champagne font-sans font-medium"
          >
            WAAROM VEDOIR
          </motion.p>
          <motion.div
            variants={lineDraw}
            className="h-px w-12 bg-champagne mt-4"
          />
        </motion.div>

        {/* Main heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="font-heading text-4xl md:text-5xl text-ivory text-center mb-16"
        >
          Vakmanschap ontmoet persoonlijkheid
        </motion.h2>

        {/* 3-column bento grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeInUp}
              className="bg-graphite border border-smoke p-8 md:p-10 rounded-[2px] hover:border-champagne/30 hover:glow-gold transition-all duration-500"
            >
              <card.icon className="text-champagne mb-6" size={28} />
              <h3 className="font-heading text-2xl text-ivory mb-3">
                {card.title}
              </h3>
              <p className="text-silver text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
