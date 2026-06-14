"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerChildren } from "@/app/lib/motion";
import SectionLabel from "./ui/SectionLabel";

const features = [
  { icon: "🏆", title: "Award-winning service", body: "Broker of the Year 2023 & 2025 — recognised by the industry, trusted by clients." },
  { icon: "👥", title: "700+ clients and growing", body: "A growing community of families and individuals who trust us with their financial future." },
  { icon: "📅", title: "10 years of experience", body: "A decade of navigating complex financial landscapes and delivering real-world results." },
  { icon: "🎯", title: "Needs-based advice only", body: "We recommend only what you need. No cross-selling, no hidden incentives." },
  { icon: "⚡", title: "2-hour WhatsApp response", body: "Fast, human responses. Not a call centre — a real advisor who knows your name and your file." },
  { icon: "🔒", title: "POPIA-compliant privacy", body: "Your data is handled with strict legal compliance and never shared without your consent." },
];

const steps = [
  {
    num: "01",
    title: "We listen first",
    body: "A Financial Needs Analysis before any product recommendation. We understand your life before we suggest a solution.",
  },
  {
    num: "02",
    title: "We cover everything",
    body: "Risk, retirement, investment, medical aid — all under one roof. One advisor who knows the full picture.",
  },
  {
    num: "03",
    title: "We stay accountable",
    body: "Annual reviews, claims support, and policy updates for life. The relationship doesn't end at sign-up.",
  },
];

export default function WhyUs() {
  const ref = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const quoteInView = useInView(quoteRef, { once: true, margin: "-60px" });

  return (
    <section id="why-us" ref={ref} className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Why Choose Us</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-playfair font-bold text-[clamp(2rem,4vw,3rem)] text-[#0a0f1e] leading-tight"
          >
            Built on{" "}
            <span className="italic text-[#c8a84b]">trust. Not transactions.</span>
          </motion.h2>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group p-6 rounded-2xl border border-[#e5e7eb] hover:border-[#c8a84b] transition-all duration-250 hover:shadow-gold"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-[#0a0f1e] text-base mb-1.5">{f.title}</h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote + Process */}
        <div
          ref={quoteRef}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={quoteInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#f8f8f6] rounded-2xl p-8 md:p-12 border-l-4 border-[#c8a84b]"
          >
            <div className="text-[4rem] leading-none text-[#c8a84b] font-playfair mb-4">"</div>
            <blockquote className="font-playfair italic text-xl md:text-2xl text-[#0a0f1e] leading-relaxed mb-6">
              A legacy is not what you leave behind. It is what you build —
              deliberately, one decision at a time.
            </blockquote>
            <div className="text-sm text-[#6b7280] font-medium">— The Blueprint</div>
          </motion.div>

          {/* 3-step process */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={quoteInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {steps.map((step, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex-shrink-0">
                  <span className="font-playfair font-bold text-3xl text-[#c8a84b]">
                    {step.num}
                  </span>
                </div>
                <div className="pt-1">
                  <h4 className="font-semibold text-[#0a0f1e] text-base mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-sm text-[#6b7280] leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
