"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Announcement Bar ─────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50 h-9 flex items-center justify-center bg-void/80 backdrop-blur-sm border-b border-smoke/30">
        <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-champagne">
          2 JAAR GARANTIE en 14 dagen retourbeleid
        </p>
      </div>

      {/* ── Main Navbar ──────────────────────────────── */}
      <motion.header
        className={cn(
          "fixed top-9 left-0 right-0 z-50 h-20 transition-colors duration-300",
          scrolled
            ? "bg-obsidian/90 backdrop-blur-xl border-b border-smoke/20"
            : "bg-transparent"
        )}
      >
        <nav className="h-full max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* ── Left: Mobile hamburger + Desktop nav links ── */}
          <div className="flex items-center gap-10">
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden cursor-pointer text-ivory hover:text-champagne transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Desktop nav links */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="nav-link-underline font-sans text-[11px] tracking-[0.15em] font-medium uppercase text-ivory/80 hover:text-ivory transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Center: Logo ─────────────────────────── */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 cursor-pointer"
          >
            <Image
              src="/vedoir-logo-white.png"
              alt="VEDOIR"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* ── Right: Icons ─────────────────────────── */}
          <div className="flex items-center gap-5">
            <button
              className="cursor-pointer text-ivory/70 hover:text-ivory transition-colors"
              aria-label="Zoeken"
            >
              <Search className="w-[18px] h-[18px]" />
            </button>
            <button
              className="cursor-pointer text-ivory/70 hover:text-ivory transition-colors"
              aria-label="Verlanglijst"
            >
              <Heart className="w-[18px] h-[18px]" />
            </button>
            <button
              className="cursor-pointer text-ivory/70 hover:text-ivory transition-colors"
              aria-label="Winkelwagen"
            >
              <ShoppingBag className="w-[18px] h-[18px]" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile Menu Overlay ──────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-obsidian flex flex-col"
          >
            {/* Close button */}
            <div className="flex justify-end p-6">
              <button
                onClick={() => setMobileOpen(false)}
                className="cursor-pointer text-ivory hover:text-champagne transition-colors"
                aria-label="Sluiten"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile nav links */}
            <motion.nav
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex-1 flex flex-col items-center justify-center gap-8"
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={fadeInUp}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-heading text-3xl sm:text-4xl tracking-[0.08em] text-ivory hover:text-champagne transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile icons row */}
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-8 mt-8 pt-8 border-t border-smoke/30"
              >
                <button
                  className="cursor-pointer text-ivory/70 hover:text-ivory transition-colors"
                  aria-label="Zoeken"
                >
                  <Search className="w-5 h-5" />
                </button>
                <button
                  className="cursor-pointer text-ivory/70 hover:text-ivory transition-colors"
                  aria-label="Verlanglijst"
                >
                  <Heart className="w-5 h-5" />
                </button>
                <button
                  className="cursor-pointer text-ivory/70 hover:text-ivory transition-colors"
                  aria-label="Winkelwagen"
                >
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
