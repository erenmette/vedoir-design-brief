"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import CollectionFilter, {
  type CollectionFilterValue,
} from "./CollectionFilter";

interface Watch {
  id: string;
  slug: string;
  name: string;
  collection: string;
  price: number;
  description: string;
  image: string;
}

interface CollectionGridProps {
  watches: Watch[];
}

export default function CollectionGrid({ watches }: CollectionGridProps) {
  const [activeFilter, setActiveFilter] =
    useState<CollectionFilterValue>("Alles");

  const filteredWatches =
    activeFilter === "Alles"
      ? watches
      : watches.filter((w) => w.collection === activeFilter);

  return (
    <>
      <CollectionFilter
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 section-spacing"
      >
        <AnimatePresence mode="popLayout">
          {filteredWatches.map((watch) => (
            <motion.div
              key={watch.id}
              layout
              variants={fadeInUp}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/collectie/${watch.slug}`} className="block">
                <div className="bg-graphite border border-smoke rounded-[2px] overflow-hidden group cursor-pointer hover:border-champagne/20 transition-all duration-500">
                  {/* Image area */}
                  <div className="aspect-[3/4] bg-smoke/20 relative overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                      <span className="text-mist text-sm">Watch Image</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-champagne font-sans">
                      {watch.collection}
                    </p>
                    <h3 className="font-heading text-2xl text-ivory mt-1 group-hover:text-champagne transition-colors duration-300">
                      {watch.name}
                    </h3>
                    <p className="font-mono text-lg text-champagne mt-2">
                      &euro;{watch.price}
                    </p>
                    <p className="text-mist text-xs mt-3 group-hover:text-silver transition-colors duration-300">
                      Bekijk details
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
