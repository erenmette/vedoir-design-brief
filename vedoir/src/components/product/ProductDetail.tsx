"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface WatchSpecs {
  case: string;
  glass: string;
  water: string;
  movement: string;
  diameter: string;
}

interface Watch {
  id: string;
  slug: string;
  name: string;
  collection: string;
  price: number;
  description: string;
  specs: WatchSpecs;
  image: string;
  images: string[];
}

interface ProductDetailProps {
  watch: Watch;
}

const specLabels: Record<keyof WatchSpecs, string> = {
  case: "Kast",
  glass: "Glas",
  water: "Waterbestendig",
  movement: "Uurwerk",
  diameter: "Diameter",
};

const trustBadges = ["904L Staal", "Saffierglas", "2 Jaar Garantie", "14d Retour"];

export default function ProductDetail({ watch }: ProductDetailProps) {
  return (
    <div className="pt-32 max-w-7xl mx-auto px-6 pb-20">
      {/* Breadcrumb */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-silver text-xs uppercase tracking-wider"
      >
        <Link
          href="/collectie"
          className="hover:text-champagne transition-colors duration-300"
        >
          Collectie
        </Link>
        <span className="mx-2">/</span>
        <span className="text-mist">{watch.collection}</span>
        <span className="mx-2">/</span>
        <span className="text-ivory">{watch.name}</span>
      </motion.nav>

      {/* Product grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-8">
        {/* LEFT — Gallery */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          {/* Main image */}
          <div className="aspect-square bg-graphite border border-smoke rounded-[2px] overflow-hidden relative">
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-mist text-sm">Watch Image</span>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-20 h-20 bg-graphite border border-smoke rounded-[2px] cursor-pointer hover:border-champagne transition-colors duration-300 flex items-center justify-center"
              >
                <span className="text-mist text-[10px]">{i + 1}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — Details */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeInUp}
            className="text-[11px] uppercase tracking-[0.2em] text-champagne font-sans font-medium"
          >
            {watch.collection}
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="font-heading text-4xl md:text-5xl text-ivory mt-2"
          >
            {watch.name}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="font-mono text-3xl text-champagne mt-4"
          >
            &euro;{watch.price}
          </motion.p>

          {/* Divider */}
          <motion.div
            variants={fadeInUp}
            className="h-px bg-smoke my-6"
          />

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-silver leading-relaxed"
          >
            {watch.description}
          </motion.p>

          {/* Specs grid */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 grid grid-cols-2 gap-4"
          >
            {(Object.keys(watch.specs) as (keyof WatchSpecs)[]).map((key) => (
              <div
                key={key}
                className="border border-smoke p-4 rounded-[2px]"
              >
                <p className="text-mist text-[10px] uppercase tracking-wider">
                  {specLabels[key]}
                </p>
                <p className="text-ivory text-sm mt-1">{watch.specs[key]}</p>
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div variants={fadeInUp} className="mt-8 space-y-3">
            <button className="bg-champagne text-void w-full py-4 rounded-[2px] uppercase tracking-[0.12em] text-[12px] font-sans font-medium hover:bg-champagne/90 transition-colors duration-300">
              TOEVOEGEN AAN WINKELWAGEN
            </button>
            <Link href="/configurator" className="block">
              <span className="border border-smoke text-ivory w-full py-4 rounded-[2px] uppercase tracking-[0.12em] text-[12px] font-sans font-medium hover:border-champagne hover:text-champagne transition-colors duration-300 flex items-center justify-center">
                PERSONALISEER DIT MODEL
              </span>
            </Link>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-6"
          >
            {trustBadges.map((badge, i) => (
              <span key={badge} className="flex items-center gap-x-4">
                <span className="text-mist text-[10px] uppercase tracking-wider">
                  {badge}
                </span>
                {i < trustBadges.length - 1 && (
                  <span className="text-smoke text-[10px]" aria-hidden="true">
                    &#183;
                  </span>
                )}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
