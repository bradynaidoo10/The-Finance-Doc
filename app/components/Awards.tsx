"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { slideInLeft, slideInRight, fadeUp } from "@/app/lib/motion";
import SectionLabel from "./ui/SectionLabel";
import { openWA } from "@/app/lib/wa";

const awards = [
  {
    year: "2025",
    title: "Medical Aid Broker of the Year",
    body: "Recognised for delivering consistent, needs-based advice and exceptional client outcomes across the medical aid space.",
    dir: slideInLeft,
  },
  {
    year: "2023",
    title: "Medical Aid Broker of the Year",
    body: "Two years before, the same standard. The same commitment to finding the right plan — not the most profitable one.",
    dir: slideInRight,
  },
];

export default function Awards() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="awards" ref={ref} className="py-24 md:py-32 bg-[#f8f8f6]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <SectionLabel>Recognition</SectionLabel>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="font-playfair font-bold text-[clamp(2rem,4vw,3rem)] text-[#0a0f1e] leading-tight"
          >
            Recognised for doing right
            <br />
            <span className="italic text-[#c8a84b]">by clients, consistently.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {awards.map((award, i) => (
            <motion.div
              key={award.year}
              variants={award.dir}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: i * 0.15 }}
              className="bg-white rounded-2xl p-8 md:p-10 border border-[rgba(200,168,75,0.15)] shadow-card hover:shadow-card-hover hover:border-[rgba(200,168,75,0.35)] transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="text-5xl flex-shrink-0">🏆</div>
                <div>
                  <div className="font-playfair font-bold text-[3.5rem] leading-none text-[#c8a84b] mb-1">
                    {award.year}
                  </div>
                  <div className="w-10 h-0.5 bg-[#c8a84b] mb-3" />
                  <h3 className="font-semibold text-lg text-[#0a0f1e] mb-2">
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
            onClick={() =>
              openWA(
                "Hi The Blueprint! I heard about your award-winning service and I'd like to learn more."
              )
            }
            className="text-[#c8a84b] font-semibold text-sm hover:text-[#b8943b] transition-colors cursor-pointer underline underline-offset-4 decoration-[rgba(200,168,75,0.4)]"
          >
            Experience the award-winning difference →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
