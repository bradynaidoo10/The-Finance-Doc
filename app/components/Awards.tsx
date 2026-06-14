"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { slideInLeft, slideInRight, fadeUp } from "@/app/lib/motion";
import { openWA } from "@/app/lib/wa";

const awards = [
  {
    year: "2025",
    title: "Medical Aid Broker of the Year",
    body: "Recognised for outstanding client outcomes, enrolment volume and retention across Bonitas and Bestmed.",
    dir: slideInLeft,
  },
  {
    year: "2023",
    title: "Medical Aid Broker of the Year",
    body: "Awarded for excellence in medical aid advisory across KwaZulu-Natal.",
    dir: slideInRight,
  },
];

export default function Awards() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="results" ref={ref} className="py-24 md:py-32 bg-[#f4f7f9]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1a6fb5]">
            Clinical Results
          </span>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="font-playfair font-bold text-[clamp(2rem,4vw,3rem)] text-[#0d1b2a] mt-3 leading-tight"
          >
            A Practice Built on
            <br />
            <span className="italic text-[#c8a84b]">Proven Outcomes</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-[#6b7280] text-lg mt-4 max-w-[480px] mx-auto"
          >
            Industry recognition earned through one discipline — putting the
            patient first, always.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {awards.map((award, i) => (
            <motion.div
              key={award.year}
              variants={award.dir}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: i * 0.15 }}
              className="relative bg-white rounded-2xl p-8 md:p-10 border border-[rgba(26,111,181,0.12)] shadow-card hover:shadow-card-hover hover:border-[rgba(26,111,181,0.3)] transition-all duration-300 overflow-hidden"
            >
              {/* Faint stethoscope watermark */}
              <div className="absolute -bottom-4 -right-4 text-[8rem] opacity-[0.04] select-none pointer-events-none">
                🩺
              </div>

              {/* Blue left accent */}
              <div className="absolute left-0 top-0 w-[3px] h-full bg-[#1a6fb5] rounded-l-2xl" />

              <div className="flex items-start gap-6">
                <div className="text-5xl flex-shrink-0">🏆</div>
                <div>
                  <div className="font-playfair font-bold text-[3.5rem] leading-none text-[#c8a84b] mb-1">
                    {award.year}
                  </div>
                  <div className="w-10 h-0.5 bg-[#1a6fb5] mb-3" />
                  <h3 className="font-semibold text-lg text-[#0d1b2a] mb-2">
                    {award.title}
                  </h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">
                    {award.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <button
            onClick={() => openWA("default")}
            className="text-[#1a6fb5] font-semibold text-sm hover:text-[#155d9a] transition-colors cursor-pointer underline underline-offset-4 decoration-[rgba(26,111,181,0.4)]"
          >
            Experience the award-winning practice →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
