"use client";

// TODO: Replace with real client testimonials

import { useRef, useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { fadeUp } from "@/app/lib/motion";

const testimonials = [
  {
    initials: "TM",
    quote:
      "The Finance Doc actually diagnosed our financial situation before recommending anything. That approach is rare — and it made all the difference.",
    name: "Thabo M.",
    city: "Durban, KZN",
  },
  {
    initials: "SP",
    quote:
      "Life cover, disability and medical aid sorted in one session. The process was thorough, honest and fast. Exactly what I needed.",
    name: "Sipho P.",
    city: "Pietermaritzburg, KZN",
  },
  {
    initials: "NR",
    quote:
      "After two Broker of the Year awards I expected quality service. The Finance Doc exceeded that expectation from the first WhatsApp.",
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
    <section ref={ref} className="py-24 bg-[#f4f7f9]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1a6fb5]">
            Patient Stories
          </span>
          <h2 className="font-playfair font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#0d1b2a] mt-3">
            What our patients say
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
              className="bg-white rounded-2xl p-8 md:p-12 border border-[rgba(26,111,181,0.12)] shadow-card text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#1a6fb5] text-white font-bold font-playfair text-xl flex items-center justify-center mx-auto mb-6">
                {t.initials}
              </div>
              <p className="font-playfair italic text-xl text-[#0d1b2a] leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="font-semibold text-[#0d1b2a] text-sm">{t.name}</div>
              <div className="text-[#6b7280] text-sm">{t.city}</div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === current ? "w-6 bg-[#1a6fb5]" : "w-2 bg-[rgba(26,111,181,0.2)]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
