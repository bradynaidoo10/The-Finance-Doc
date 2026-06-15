"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerChildren } from "@/app/lib/motion";
import { openWA } from "@/app/lib/wa";
import { ShieldCheck, Info } from "lucide-react";

const points = [
  {
    icon: "💊",
    title: "Our advice costs you nothing",
    body: "The Finance Doc is compensated by the product providers — not by you. You pay exactly the same premium whether you come through us or go directly. The difference is you get expert diagnosis and ongoing support.",
  },
  {
    icon: "🩺",
    title: "Diagnosis before prescription — always",
    body: "We never recommend a product without first completing a Financial Health Assessment. You will never be sold something you don't need — that's not how we practice.",
  },
  {
    icon: "📋",
    title: "No hidden costs. No fine print surprises.",
    body: "We walk you through exactly what you're getting, what it costs, and why it fits your situation — before you sign anything. Transparency is non-negotiable.",
  },
  {
    icon: "🔒",
    title: "Your information stays private",
    body: "All personal and financial information is handled in strict compliance with POPIA. Your records are never shared without your explicit consent.",
  },
];

export default function AdviceFree() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#0d1b2a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(26,111,181,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1a6fb5]">
              No Hidden Fees
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-playfair font-bold text-[clamp(2rem,4vw,3rem)] text-white mt-3 mb-4 leading-tight"
          >
            Our Advice Is{" "}
            <span className="italic text-[#c8a84b]">Always Free.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#9ca3af] text-lg max-w-[520px] mx-auto leading-relaxed">
            Financial advice shouldn&apos;t be a luxury. We believe every South
            African deserves access to a proper financial diagnosis — at no cost
            to them.
          </motion.p>
        </motion.div>

        {/* Points grid */}
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-5 mb-14"
        >
          {points.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex gap-5 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-xl p-6 hover:border-[rgba(26,111,181,0.3)] transition-all duration-300"
            >
              <span className="text-3xl flex-shrink-0 mt-0.5">{p.icon}</span>
              <div>
                <h3 className="font-semibold text-white text-base mb-1.5">{p.title}</h3>
                <p className="text-[#9ca3af] text-sm leading-relaxed">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-10"
        >
          <button
            onClick={() => openWA("default")}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#1a6fb5] text-white font-semibold hover:bg-[#155d9a] transition-colors cursor-pointer shadow-blue"
          >
            <ShieldCheck size={18} />
            Book My Free Check-Up
          </button>
        </motion.div>

        {/* Legal disclaimer */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="border border-[rgba(255,255,255,0.06)] rounded-xl p-5 flex gap-4 items-start max-w-3xl mx-auto"
        >
          <Info size={16} className="text-[#6b7280] flex-shrink-0 mt-0.5" />
          <p className="text-[11px] text-[#6b7280] leading-relaxed">
            <span className="font-semibold text-[#9ca3af]">Important Disclaimer: </span>
            The content on this website is for general informational purposes only and does not
            constitute financial advice as defined in the Financial Advisory and Intermediary
            Services Act, No. 37 of 2002 (FAIS Act). Nothing on this site should be relied upon
            as a substitute for professional financial advice tailored to your personal
            circumstances. Please consult a licensed financial advisor before making any
            financial decisions. The Finance Doc is an authorised representative of a licensed
            FSP regulated by the FSCA.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
