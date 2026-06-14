"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Stethoscope } from "lucide-react";
import { openWA } from "@/app/lib/wa";

const navLinks = [
  { label: "Symptoms", href: "#symptoms" },
  { label: "Prescriptions", href: "#prescriptions" },
  { label: "Our Practice", href: "#our-practice" },
  { label: "Results", href: "#results" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_24px_rgba(13,27,42,0.08)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <Stethoscope size={22} className="text-[#c8a84b]" />
            <span className="font-inter font-semibold text-[#0d1b2a] text-lg tracking-tight">
              THE FINANCE{" "}
              <span className="font-playfair italic text-[#1a6fb5]">Doc</span>
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-[#374151] hover:text-[#1a6fb5] transition-colors duration-150 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => openWA("default")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1a6fb5] text-white text-sm font-semibold hover:bg-[#155d9a] transition-colors duration-200 shadow-blue cursor-pointer"
            >
              <Stethoscope size={15} />
              Free Check-Up
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#0d1b2a] cursor-pointer"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-8 gap-6"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-2xl font-playfair font-semibold text-[#0d1b2a] text-left border-b border-[rgba(26,111,181,0.12)] pb-4 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4">
              <button
                onClick={() => { setOpen(false); openWA("default"); }}
                className="w-full py-4 rounded-full bg-[#1a6fb5] text-white font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                <Stethoscope size={18} />
                Book Your Free Check-Up
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
