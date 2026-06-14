"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerChildren } from "@/app/lib/motion";
import { openWA } from "@/app/lib/wa";

const diagnoses = [
  {
    icon: "🩺",
    title: "No Financial Cover",
    symptom:
      "If you died tomorrow, your family would lose the house, the car, and their lifestyle within 90 days.",
    diagnosis: "Terminal financial exposure.",
    prescription: "Life cover from R150/month.",
    waKey: "lifeCover" as const,
  },
  {
    icon: "🛡️",
    title: "Income Stopped Suddenly",
    symptom:
      "One accident or illness and your salary stops. Most South Africans have less than 30 days of savings.",
    diagnosis: "Critical income vulnerability.",
    prescription: "Disability & income protection cover.",
    waKey: "disability" as const,
  },
  {
    icon: "👴",
    title: "Retirement Shortfall",
    symptom:
      "You're working hard but your retirement savings won't last 5 years into retirement.",
    diagnosis: "Chronic underfunding.",
    prescription: "Retirement Annuity with SARS tax benefits.",
    waKey: "retirement" as const,
  },
  {
    icon: "🏥",
    title: "Medical Aid Gap",
    symptom:
      "One specialist visit, one surgery, one ICU stay — and your savings are gone.",
    diagnosis: "Acute medical exposure.",
    prescription: "A correctly structured medical aid plan.",
    waKey: "medicalAid" as const,
  },
];

export default function Symptoms() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="symptoms"
      ref={ref}
      className="py-24 md:py-32 bg-[#0d1b2a] relative overflow-hidden"
    >
      {/* Blue glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(26,111,181,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1a6fb5]">
              The Diagnosis
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-playfair font-bold text-[clamp(2rem,4vw,3rem)] text-white mt-3 mb-4 leading-tight"
          >
            Do Your Finances Show
            <br />
            <span className="italic text-[#c8a84b]">These Symptoms?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#9ca3af] text-lg max-w-[560px] mx-auto">
            These are the most common financial conditions we treat. Left
            untreated, they become critical.
          </motion.p>
        </motion.div>

        {/* Diagnosis cards */}
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {diagnoses.map((d, i) => (
            <DiagnosisCard key={i} data={d} index={i} />
          ))}
        </motion.div>

        {/* Mid CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="border border-[rgba(26,111,181,0.3)] rounded-2xl p-8 md:p-12 text-center bg-[rgba(26,111,181,0.05)]"
        >
          <h3 className="font-playfair font-semibold text-2xl text-white mb-3">
            Not sure how financially healthy you are?
          </h3>
          <p className="text-[#9ca3af] mb-6 max-w-[460px] mx-auto">
            Send us one WhatsApp. We&apos;ll run a free Financial Health
            Assessment — 5 questions, 10 minutes, complete diagnosis.
          </p>
          <button
            onClick={() => openWA("diagnosis")}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#1a6fb5] text-white font-semibold hover:bg-[#155d9a] transition-colors cursor-pointer shadow-blue"
          >
            💬 Get My Free Diagnosis
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function DiagnosisCard({
  data,
  index,
}: {
  data: (typeof diagnoses)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-xl p-7 overflow-hidden hover:border-[rgba(26,111,181,0.3)] transition-all duration-300"
    >
      {/* Blue left border animated */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.12 + 0.3 }}
        className="absolute left-0 top-0 w-[3px] h-full bg-[#1a6fb5] origin-top"
      />

      <div className="flex items-start gap-4">
        <span className="text-3xl mt-0.5 flex-shrink-0">{data.icon}</span>
        <div className="flex-1">
          <h3 className="font-playfair font-semibold text-xl text-white mb-3">
            {data.title}
          </h3>

          <div className="space-y-2 mb-4">
            <div>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-red-400 mr-2">
                Symptom
              </span>
              <p className="text-[#9ca3af] text-sm leading-relaxed inline">
                {data.symptom}
              </p>
            </div>
            <div>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-[#1a6fb5] mr-2">
                Diagnosis
              </span>
              <span className="text-[#9ca3af] text-sm">{data.diagnosis}</span>
            </div>
            <div>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-[#c8a84b] mr-2">
                Prescription
              </span>
              <span className="text-[#9ca3af] text-sm">{data.prescription}</span>
            </div>
          </div>

          <button
            onClick={() => openWA(data.waKey)}
            className="text-[#1a6fb5] text-sm font-medium hover:text-[#2d8fd4] transition-colors cursor-pointer"
          >
            Treat this symptom →
          </button>
        </div>
      </div>
    </motion.div>
  );
}
