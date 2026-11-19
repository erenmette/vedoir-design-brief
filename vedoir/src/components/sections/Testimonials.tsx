"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { staggerContainer, fadeInUp, lineDraw } from "@/lib/animations";

export default function Testimonials() {
  return (
    <section className="section-spacing bg-void">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
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
            VERHALEN
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
          Geen verhaal onverteld
        </motion.h2>

        {/* Testimonial grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              className="bg-graphite border border-smoke p-8 rounded-[2px]"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="currentColor"
                    className="text-champagne"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-ivory text-base leading-relaxed mt-4 font-light">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="h-px bg-smoke w-12 my-6" />

              {/* Attribution */}
              <p className="text-ivory font-medium text-sm">
                {testimonial.name}
              </p>
              <p className="text-mist text-xs">
                {testimonial.location} &middot; {testimonial.watchModel}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="flex justify-center mt-12">
          <Link href="/familie">
            <motion.span
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
              className="inline-block text-champagne border border-champagne py-3 px-8 rounded-[2px] text-[12px] uppercase tracking-[0.12em] hover:bg-champagne hover:text-void transition font-sans font-medium"
            >
              LEES MEER VERHALEN
            </motion.span>
          </Link>
        </div>
      </div>
    </section>
  );
}
