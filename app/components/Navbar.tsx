"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import WAButton from "./ui/WAButton";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Why Insure", href: "#why-insure" },
  { label: "Awards", href: "#awards" },
  { label: "About", href: "#why-us" },
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
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_24px_rgba(10,15,30,0.08)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo("#hero")} className="flex items-center gap-2 cursor-pointer">
            <span className="font-playfair font-bold text-[#0a0f1e] text-xl tracking-tight">
              THE <span className="text-[#c8a84b]">·</span> BLUEPRINT
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-[#374151] hover:text-[#0a0f1e] transition-colors duration-150 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <WAButton
              size="sm"
              message="Hi The Blueprint! I'd like a free financial consultation."
            >
              Free Consultation 💬
            </WAButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#0a0f1e] cursor-pointer"
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
                className="text-2xl font-playfair font-semibold text-[#0a0f1e] text-left border-b border-[rgba(200,168,75,0.15)] pb-4 cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4">
              <WAButton
                size="lg"
                fullWidth
                message="Hi The Blueprint! I'd like a free financial consultation."
              >
                Free Consultation 💬
              </WAButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
