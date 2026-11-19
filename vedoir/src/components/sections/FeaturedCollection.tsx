"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { watches } from "@/lib/data";
import { staggerContainer, fadeInUp, lineDraw } from "@/lib/animations";

const featuredWatches = watches.filter((w) => w.featured).slice(0, 6);

export default function FeaturedCollection() {
  return (
    <section className="section-spacing max-w-[100vw] overflow-hidden">
      {/* Section header */}
      <div className="max-w-6xl mx-auto px-6">
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
            VOLTOOIDE MEESTERWERKEN
          </motion.p>
          <motion.div
            variants={lineDraw}
            className="h-px w-12 bg-champagne mt-4"
          />
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="font-heading text-4xl md:text-5xl text-ivory text-center mb-16"
        >
          De Collectie
        </motion.h2>
      </div>

      {/* Horizontal scroll */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="horizontal-scroll-container px-6"
      >
        {featuredWatches.map((watch) => (
          <motion.div
            key={watch.id}
            variants={fadeInUp}
            className="horizontal-scroll-item w-[320px] md:w-[380px]"
          >
            <div className="bg-graphite border border-smoke rounded-[2px] overflow-hidden group cursor-pointer hover:border-champagne/20 hover:glow-gold transition-all duration-500">
              {/* Image area */}
              <div className="aspect-[3/4] bg-smoke/30 relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center group-hover:scale-[1.03] transition-transform duration-700">
                  <span className="text-mist text-sm">Watch Image</span>
                </div>
              </div>

              {/* Content area */}
              <div className="p-6">
                <p className="text-[11px] uppercase tracking-[0.15em] text-champagne font-sans">
                  {watch.collection}
                </p>
                <h3 className="font-heading text-2xl text-ivory mt-1">
                  {watch.name}
                </h3>
                <p className="font-mono text-champagne text-lg mt-2">
                  &euro;{watch.price}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <div className="flex justify-center mt-12 px-6">
        <Link href="/collectie">
          <motion.span
            whileHover={{ y: -1 }}
            transition={{ duration: 0.2 }}
            className="inline-block text-champagne border border-champagne py-3 px-8 rounded-[2px] text-[12px] uppercase tracking-[0.12em] hover:bg-champagne hover:text-void transition font-sans font-medium"
          >
            BEKIJK ALLE HORLOGES
          </motion.span>
        </Link>
      </div>
    </section>
  );
}
