"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { footerLinks } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const footerColumns = [
  { title: "Winkel", links: footerLinks.winkel },
  { title: "Ontdek", links: footerLinks.ontdek },
  { title: "Klantenservice", links: footerLinks.klantenservice },
  { title: "Juridisch", links: footerLinks.juridisch },
];

const paymentMethods = ["iDEAL", "Visa", "Mastercard", "AmEx", "Apple Pay"];

export default function Footer() {
  return (
    <footer className="bg-void">
      {/* ── Top: Logo + Tagline ──────────────────────── */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="pt-20 pb-12 flex flex-col items-center text-center"
      >
        <Image
          src="/vedoir-logo-white.png"
          alt="VEDOIR"
          width={140}
          height={46}
          className="h-10 w-auto mb-4"
        />
        <p className="font-heading text-lg italic text-silver tracking-wide">
          Een verhaal om je pols
        </p>
      </motion.div>

      {/* ── Links Grid ───────────────────────────────── */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {footerColumns.map((column) => (
            <motion.div key={column.title} variants={fadeInUp}>
              <h4 className="font-sans text-[11px] tracking-[0.15em] font-medium uppercase text-champagne mb-5">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-silver hover:text-ivory transition-colors cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Newsletter ───────────────────────────────── */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-16"
      >
        <div className="max-w-md mx-auto text-center">
          <h4 className="font-heading text-2xl tracking-wide text-ivory mb-2">
            Word deel van de familie
          </h4>
          <p className="text-sm text-silver mb-6">
            Ontvang exclusieve updates, vroege toegang en verhalen uit het atelier.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Je e-mailadres"
              className="flex-1 bg-graphite border border-smoke text-ivory text-sm px-4 py-3 rounded-none placeholder:text-mist focus:outline-none focus:border-champagne transition-colors"
            />
            <button
              type="submit"
              className="bg-champagne text-void font-sans text-[11px] tracking-[0.15em] font-medium uppercase px-6 py-3 rounded-none hover:bg-champagne/90 transition-colors cursor-pointer"
            >
              AANMELDEN
            </button>
          </form>
        </div>
      </motion.div>

      {/* ── Social Links ─────────────────────────────── */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="flex justify-center gap-6 pb-10"
      >
        <a
          href="https://instagram.com/vedoir"
          target="_blank"
          rel="noopener noreferrer"
          className="text-silver hover:text-ivory transition-colors cursor-pointer"
          aria-label="Instagram"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
          </svg>
        </a>
        <a
          href="https://youtube.com/@vedoir"
          target="_blank"
          rel="noopener noreferrer"
          className="text-silver hover:text-ivory transition-colors cursor-pointer"
          aria-label="YouTube"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2a29 29 0 0 0 .46-5.25a29 29 0 0 0-.46-5.43z" />
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
          </svg>
        </a>
        <a
          href="https://tiktok.com/@vedoir"
          target="_blank"
          rel="noopener noreferrer"
          className="text-silver hover:text-ivory transition-colors cursor-pointer"
          aria-label="TikTok"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.05a8.27 8.27 0 0 0 4.76 1.51V7.12a4.83 4.83 0 0 1-1-.43z" />
          </svg>
        </a>
      </motion.div>

      {/* ── Payment Methods ──────────────────────────── */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="flex justify-center flex-wrap gap-3 pb-10 px-6"
      >
        {paymentMethods.map((method) => (
          <span
            key={method}
            className="text-[10px] tracking-[0.1em] uppercase text-mist border border-smoke/60 rounded-[2px] px-3 py-1.5 font-sans font-medium"
          >
            {method}
          </span>
        ))}
      </motion.div>

      {/* ── Divider ──────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="h-px bg-smoke" />
      </div>

      {/* ── Bottom Bar ───────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-mist">
          &copy; 2024 VEDOIR. Alle rechten voorbehouden.
        </p>
        <p className="text-xs text-mist">
          KVK: 12345678
        </p>
      </div>
    </footer>
  );
}
