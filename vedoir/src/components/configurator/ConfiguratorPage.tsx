"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, RotateCw } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

/* ── Step data ──────────────────────────────────────── */
const steps = [
  { label: "Model" },
  { label: "Kast" },
  { label: "Wijzerplaat" },
  { label: "Band" },
  { label: "Personalisatie" },
  { label: "Extras" },
];

const models = [
  {
    id: "monarch",
    name: "Monarch",
    description: "Klassieke elegantie",
  },
  {
    id: "legacy",
    name: "Legacy",
    description: "Vintage ge\u00EFnspireerd",
  },
  {
    id: "vanguard",
    name: "Vanguard",
    description: "Sportief en modern",
  },
];

const trustItems = [
  "904L Staal",
  "Saffierglas",
  "2 Jaar Garantie",
  "14 Dagen Retour",
];

/* ── Floating animation ─────────────────────────────── */
const floatVariant = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

/* ── Bezel rotation keyframes via inline style ──────── */
const bezelRotate = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear" as const,
    },
  },
};

export default function ConfiguratorPage() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const currentStep = 0; // demo: always step 1

  return (
    <div className="min-h-screen bg-void pt-[116px]">
      {/* ── Header bar ──────────────────────────────── */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-between px-6 py-4 border-b border-smoke"
      >
        {/* Back */}
        <Link
          href="/"
          className="flex items-center gap-2 text-silver hover:text-ivory transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-[13px] font-sans">Terug</span>
        </Link>

        {/* Title */}
        <span className="text-[12px] uppercase tracking-[0.2em] text-champagne font-sans font-medium">
          HET ATELIER
        </span>

        {/* Save */}
        <button
          className="text-silver hover:text-champagne transition-colors cursor-pointer"
          title="Opslaan"
          aria-label="Opslaan"
        >
          <Heart className="w-4 h-4" />
        </button>
      </motion.div>

      {/* ── Main grid ───────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-180px)]">
        {/* ── Left panel: Preview ────────────────────── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center justify-center p-8 lg:p-16 bg-obsidian"
        >
          <motion.div
            variants={floatVariant}
            animate="animate"
            className="aspect-square max-w-lg w-full bg-graphite border border-smoke rounded-[2px] relative overflow-hidden flex items-center justify-center"
          >
            {/* Rotating bezel ring */}
            <motion.div
              variants={bezelRotate}
              animate="animate"
              className="absolute inset-4 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0%, rgba(201,169,110,0.15) 25%, transparent 50%, rgba(201,169,110,0.08) 75%, transparent 100%)",
                border: "1px solid rgba(201,169,110,0.1)",
              }}
            />

            {/* Inner circle */}
            <div className="absolute inset-12 rounded-full border border-smoke/40" />

            {/* Center text */}
            <p className="text-mist text-center text-sm font-sans relative z-10 px-8 leading-relaxed">
              Jouw ontwerp
              <br />
              verschijnt hier
            </p>
          </motion.div>

          {/* 360 hint */}
          <div className="flex items-center gap-2 mt-6 text-mist">
            <RotateCw className="w-3 h-3" />
            <span className="text-xs font-sans">Draai 360&deg;</span>
          </div>
        </motion.div>

        {/* ── Right panel: Configuration steps ────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="bg-graphite p-8 lg:p-12 overflow-y-auto flex flex-col"
        >
          {/* Progress bar */}
          <motion.div variants={fadeInUp} className="mb-10">
            <div className="flex items-center justify-between">
              {steps.map((step, i) => (
                <div key={step.label} className="flex items-center flex-1 last:flex-none">
                  {/* Dot */}
                  <div className="flex flex-col items-center">
                    <div
                      className={cn(
                        "w-2.5 h-2.5 rounded-full transition-colors duration-300",
                        i < currentStep
                          ? "bg-champagne"
                          : i === currentStep
                            ? "bg-champagne"
                            : "bg-smoke"
                      )}
                    />
                    <span
                      className={cn(
                        "text-[9px] uppercase tracking-wider mt-2 font-sans whitespace-nowrap",
                        i <= currentStep ? "text-champagne" : "text-mist"
                      )}
                    >
                      {step.label}
                    </span>
                  </div>

                  {/* Line */}
                  {i < steps.length - 1 && (
                    <div className="flex-1 h-px mx-2 mt-[-14px]">
                      <div
                        className={cn(
                          "h-full transition-colors duration-300",
                          i < currentStep ? "bg-champagne" : "bg-smoke"
                        )}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Step content */}
          <motion.div variants={fadeInUp} className="flex-1">
            <h2 className="font-heading text-3xl text-ivory">Kies je model</h2>
            <p className="text-silver text-sm mt-2 font-sans">
              Selecteer de basis voor jouw meesterwerk.
            </p>

            {/* Model cards */}
            <div className="grid grid-cols-1 gap-4 mt-8">
              {models.map((model) => {
                const isSelected = selectedModel === model.id;
                return (
                  <motion.button
                    key={model.id}
                    variants={fadeInUp}
                    onClick={() => setSelectedModel(model.id)}
                    className={cn(
                      "flex items-center gap-4 p-4 border rounded-[2px] cursor-pointer transition-all duration-300 text-left group",
                      isSelected
                        ? "border-champagne bg-champagne/5 ring-1 ring-champagne/30"
                        : "border-smoke hover:border-champagne"
                    )}
                  >
                    {/* Thumbnail placeholder */}
                    <div className="w-16 h-16 bg-smoke/30 rounded-[2px] flex-shrink-0" />

                    {/* Info */}
                    <div>
                      <span
                        className={cn(
                          "text-sm font-sans font-medium transition-colors duration-300",
                          isSelected
                            ? "text-champagne"
                            : "text-ivory group-hover:text-champagne"
                        )}
                      >
                        {model.name}
                      </span>
                      <p className="text-mist text-xs font-sans mt-0.5">
                        {model.description}
                      </p>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Sticky bottom */}
          <motion.div
            variants={fadeInUp}
            className="sticky bottom-0 bg-graphite pt-4 mt-8"
          >
            <div className="h-px bg-smoke" />
            <div className="flex items-center justify-between py-4">
              {/* Price */}
              <div>
                <span className="text-silver text-sm font-sans block">
                  Totaal
                </span>
                <span className="font-mono text-2xl text-champagne">
                  &euro;599
                </span>
              </div>

              {/* Next step button */}
              <button
                disabled={!selectedModel}
                className={cn(
                  "bg-champagne text-void py-3 px-8 rounded-[2px] uppercase tracking-[0.12em] text-[12px] font-sans font-medium transition-opacity duration-300",
                  !selectedModel && "opacity-50 cursor-not-allowed"
                )}
              >
                VOLGENDE STAP
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Trust bar ───────────────────────────────── */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-4 px-6 border-t border-smoke bg-obsidian"
      >
        <div className="flex items-center justify-center gap-8">
          {trustItems.map((item, i) => (
            <div key={item} className="flex items-center gap-8">
              {i > 0 && (
                <span className="w-1 h-1 rounded-full bg-mist" />
              )}
              <span className="text-mist text-[10px] uppercase tracking-wider font-sans">
                {item}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
