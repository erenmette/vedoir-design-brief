"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Clock, MapPin, ChevronRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
  };

  return (
    <main>
      {/* ── Hero ──────────────────────────────────────── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="pt-40 pb-20 bg-void text-center"
      >
        <motion.p
          variants={fadeInUp}
          className="text-[11px] uppercase tracking-[0.25em] text-champagne font-sans font-medium"
        >
          CONTACT
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="font-heading text-5xl md:text-6xl text-ivory mt-4"
        >
          Laten we praten
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-silver text-lg mt-4 max-w-xl mx-auto font-sans"
        >
          Vragen over je ontwerp, bestelling of iets anders? We helpen je graag.
        </motion.p>
      </motion.section>

      {/* ── Main content ──────────────────────────────── */}
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            {/* LEFT — Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:col-span-3"
            >
              <form
                onSubmit={handleSubmit}
                className="bg-graphite border border-smoke p-8 md:p-12 rounded-[2px]"
              >
                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="text-silver text-xs uppercase tracking-wider font-sans mb-2 block"
                    >
                      Naam
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Je volledige naam"
                      className="w-full bg-obsidian border border-smoke text-ivory px-4 py-3 rounded-[2px] text-sm focus:border-champagne focus:outline-none transition placeholder:text-mist font-sans"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="text-silver text-xs uppercase tracking-wider font-sans mb-2 block"
                    >
                      E-mailadres
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="naam@voorbeeld.nl"
                      className="w-full bg-obsidian border border-smoke text-ivory px-4 py-3 rounded-[2px] text-sm focus:border-champagne focus:outline-none transition placeholder:text-mist font-sans"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="text-silver text-xs uppercase tracking-wider font-sans mb-2 block"
                    >
                      Onderwerp
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-obsidian border border-smoke text-ivory px-4 py-3 rounded-[2px] text-sm focus:border-champagne focus:outline-none transition font-sans appearance-none"
                    >
                      <option value="" disabled>
                        Selecteer een onderwerp
                      </option>
                      <option value="algemeen">Algemene vraag</option>
                      <option value="bestelling">Bestelling</option>
                      <option value="configurator">Configurator</option>
                      <option value="retour">Retour &amp; Garantie</option>
                      <option value="samenwerking">Samenwerking</option>
                      <option value="anders">Anders</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="text-silver text-xs uppercase tracking-wider font-sans mb-2 block"
                    >
                      Bericht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Schrijf hier je bericht..."
                      className="w-full bg-obsidian border border-smoke text-ivory px-4 py-3 rounded-[2px] text-sm focus:border-champagne focus:outline-none transition placeholder:text-mist font-sans resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-champagne text-void py-4 rounded-[2px] uppercase tracking-[0.12em] text-[12px] font-sans font-medium hover:brightness-110 transition cursor-pointer mt-4"
                  >
                    VERSTUUR BERICHT
                  </button>
                </div>
              </form>
            </motion.div>

            {/* RIGHT — Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-2"
            >
              <div className="space-y-10">
                {/* Email */}
                <motion.div variants={fadeInUp}>
                  <Mail size={20} className="text-champagne" />
                  <p className="text-ivory font-medium mt-3 font-sans">
                    E-mail
                  </p>
                  <p className="text-silver text-sm mt-1 font-sans">
                    info@vedoir.com
                  </p>
                </motion.div>

                {/* Response Time */}
                <motion.div variants={fadeInUp}>
                  <Clock size={20} className="text-champagne" />
                  <p className="text-ivory font-medium mt-3 font-sans">
                    Reactietijd
                  </p>
                  <p className="text-silver text-sm mt-1 font-sans">
                    Binnen 24 uur op werkdagen
                  </p>
                </motion.div>

                {/* Location */}
                <motion.div variants={fadeInUp}>
                  <MapPin size={20} className="text-champagne" />
                  <p className="text-ivory font-medium mt-3 font-sans">
                    Locatie
                  </p>
                  <p className="text-silver text-sm mt-1 font-sans">
                    Roosendaal, Nederland
                  </p>
                </motion.div>

                {/* Social */}
                <motion.div variants={fadeInUp}>
                  <p className="text-ivory font-medium font-sans">Volg ons</p>
                  <div className="flex gap-4 mt-3">
                    <Link
                      href="https://instagram.com/vedoir"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="text-silver hover:text-champagne transition cursor-pointer"
                    >
                      <svg
                        className="w-[18px] h-[18px]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <circle cx="12" cy="12" r="5" />
                        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                      </svg>
                    </Link>
                    <Link
                      href="https://youtube.com/@vedoir"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      className="text-silver hover:text-champagne transition cursor-pointer"
                    >
                      <svg
                        className="w-[18px] h-[18px]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.13C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2a29 29 0 0 0 .46-5.25a29 29 0 0 0-.46-5.43z" />
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>

                {/* FAQ teaser */}
                <motion.div variants={fadeInUp} className="mt-10">
                  <div className="bg-graphite border border-smoke p-6 rounded-[2px]">
                    <p className="font-heading text-xl text-ivory">
                      Veelgestelde vragen
                    </p>
                    <div className="space-y-3 mt-4">
                      <div className="flex items-center justify-between">
                        <p className="text-silver text-sm font-sans">
                          Hoe lang duurt de levering?
                        </p>
                        <ChevronRight size={16} className="text-mist" />
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-silver text-sm font-sans">
                          Kan ik mijn ontwerp aanpassen?
                        </p>
                        <ChevronRight size={16} className="text-mist" />
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-silver text-sm font-sans">
                          Wat is het retourbeleid?
                        </p>
                        <ChevronRight size={16} className="text-mist" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
