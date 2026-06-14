"use client";

// TODO: Replace with real client testimonials

import { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/app/lib/motion";
import SectionLabel from "./ui/SectionLabel";

const testimonials = [
  {
    initials: "TM",
    quote:
      "The Blueprint took the time to actually understand my situation before suggesting anything. That's rare in this industry.",
    name: "Thabo M.",
    city: "Durban, KZN",
  },
  {
    initials: "SP",
    quote:
      "We got life cover, disability, and medical aid sorted in one call. The process was smooth, honest, and fast.",
    name: "Sipho P.",
    city: "Johannesburg, GP",
  },
  {
    initials: "NR",
    quote:
      "After winning Broker of the Year, I expected the service to match. It absolutely did. Highly recommend.",
    name: "Nomsa R.",
    city: "Pretoria, GP",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((c) => (c + 1) % testimonials.length),
      4500
    );
    return () => clearInterval(id);
  }, []);

  const t = testimonials[current];

  return (
    <section ref={ref} className="py-24 bg-[#f8f8f6]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <SectionLabel>Client Stories</SectionLabel>
          <h2 className="font-playfair font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#0a0f1e]">
            What our clients say
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl p-8 md:p-12 border border-[rgba(200,168,75,0.15)] shadow-card text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#c8a84b] text-white font-bold font-playfair text-xl flex items-center justify-center mx-auto mb-6">
                {t.initials}
              </div>
              <p className="font-playfair italic text-xl text-[#0a0f1e] leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="font-semibold text-[#0a0f1e] text-sm">{t.name}</div>
              <div className="text-[#6b7280] text-sm">{t.city}</div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === current ? "w-6 bg-[#c8a84b]" : "w-2 bg-[rgba(200,168,75,0.3)]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
