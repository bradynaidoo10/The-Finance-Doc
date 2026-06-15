"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerChildren } from "@/app/lib/motion";
import { openWA } from "@/app/lib/wa";

const before = [
  "No life cover — family fully exposed",
  "No disability cover — one accident = no income",
  "No retirement savings at age 34",
  "Basic hospital plan, no proper medical aid",
  "R0 in any form of investment",
  "No idea what a Financial Needs Analysis was",
];

const after = [
  "R2.1M life cover — bond & family fully protected",
  "100% income replacement if unable to work",
  "Retirement Annuity contributing R1,200/month (tax-deductible)",
  "Comprehensive medical aid — family of 4 covered",
  "Tax-Free Savings Account open & growing",
  "Annual reviews — financial health monitored for life",
];

export default function CaseStudy() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(26,111,181,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1a6fb5]">
              Patient Case File
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-playfair font-bold text-[clamp(2rem,4vw,3rem)] text-[#0d1b2a] mt-3 mb-4 leading-tight"
          >
            From Financially Exposed
            <br />
            <span className="italic text-[#c8a84b]">to Completely Protected</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#6b7280] text-lg max-w-[560px] mx-auto leading-relaxed">
            A real patient. Details anonymised. This is what one conversation
            with The Finance Doc changed.
          </motion.p>
        </motion.div>

        {/* Patient profile card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-[#f4f7f9] rounded-2xl p-6 md:p-8 border border-[rgba(26,111,181,0.1)] mb-10 flex flex-wrap gap-6 items-center"
        >
          <div className="w-14 h-14 rounded-full bg-[#1a6fb5] flex items-center justify-center text-white font-bold font-playfair text-xl flex-shrink-0">
            TN
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-2 text-sm">
            <div><span className="text-[#6b7280]">Patient:</span> <span className="font-semibold text-[#0d1b2a]">T. Nkosi (anonymised)</span></div>
            <div><span className="text-[#6b7280]">Age at diagnosis:</span> <span className="font-semibold text-[#0d1b2a]">34</span></div>
            <div><span className="text-[#6b7280]">Location:</span> <span className="font-semibold text-[#0d1b2a]">Pietermaritzburg, KZN</span></div>
            <div><span className="text-[#6b7280]">Monthly budget:</span> <span className="font-semibold text-[#0d1b2a]">R2,400/month</span></div>
            <div><span className="text-[#6b7280]">Presenting concern:</span> <span className="font-semibold text-[#0d1b2a]">&ldquo;I don&apos;t think I need insurance yet.&rdquo;</span></div>
          </div>
        </motion.div>

        {/* Before / After grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-red-100 bg-red-50/40 p-7"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold text-sm">✗</div>
              <h3 className="font-playfair font-bold text-lg text-[#0d1b2a]">Before The Finance Doc</h3>
            </div>
            <ul className="space-y-3">
              {before.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#374151]">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-[rgba(26,111,181,0.15)] bg-[rgba(26,111,181,0.03)] p-7"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-full bg-[rgba(26,111,181,0.1)] flex items-center justify-center text-[#1a6fb5] font-bold text-sm">✓</div>
              <h3 className="font-playfair font-bold text-lg text-[#0d1b2a]">6 Months Later</h3>
            </div>
            <ul className="space-y-3">
              {after.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#374151]">
                  <span className="text-[#1a6fb5] mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <p className="font-playfair italic text-xl text-[#0d1b2a] leading-relaxed mb-4">
            &ldquo;I thought I couldn&apos;t afford cover. Turns out I couldn&apos;t afford to be without it. The Finance Doc structured everything within my budget — I walked away with full cover for less than I spend on takeaways each month.&rdquo;
          </p>
          <span className="text-sm text-[#6b7280]">— T. Nkosi, Pietermaritzburg</span>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <button
            onClick={() => openWA("fullAssessment")}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#1a6fb5] text-white font-semibold hover:bg-[#155d9a] transition-colors cursor-pointer shadow-blue"
          >
            🩺 Get My Case File Started
          </button>
        </motion.div>
      </div>
    </section>
  );
}
