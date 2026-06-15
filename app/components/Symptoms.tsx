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
      "Your family's entire financial future rests on one thing — you showing up to work tomorrow. If you don't, there is no plan B. No income. No bond payment. No school fees. Within 90 days, everything you've spent years building disappears.",
    diagnosis: "Terminal financial exposure.",
    prescription: "Life cover from R150/month.",
    waKey: "lifeCover" as const,
    severity: "critical",
  },
  {
    icon: "🛡️",
    title: "Your Income Is One Accident Away From Zero",
    symptom:
      "Most South Africans are 30 days from financial collapse if they stop working. Disability is 3 times more likely than death before retirement — yet almost no one is covered. One fall. One diagnosis. One car accident. Your salary stops. Your bills don't.",
    diagnosis: "Critical income vulnerability.",
    prescription: "Disability & income protection cover.",
    waKey: "disability" as const,
    severity: "critical",
  },
  {
    icon: "👴",
    title: "You Will Outlive Your Savings",
    symptom:
      "The average South African retires with enough money to last 4 years — but will live for 20. That means 16 years of depending on children, the state, or nothing at all. Every year you delay costs you compounding growth you can never recover.",
    diagnosis: "Chronic underfunding.",
    prescription: "Retirement Annuity with SARS tax benefits.",
    waKey: "retirement" as const,
    severity: "serious",
  },
  {
    icon: "🏥",
    title: "One Hospital Bill From Bankruptcy",
    symptom:
      "A single night in ICU costs R25,000–R80,000. A cancer diagnosis averages R500,000 in treatment. Without the right medical aid, a health crisis becomes a financial one — and most people don't find out their cover is wrong until it's too late to fix it.",
    diagnosis: "Acute medical exposure.",
    prescription: "A correctly structured medical aid plan.",
    waKey: "medicalAid" as const,
    severity: "serious",
  },
];

const severityColour: Record<string, string> = {
  critical: "text-red-400",
  serious: "text-orange-400",
};

export default function Symptoms() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="symptoms"
      ref={ref}
      className="py-24 md:py-32 bg-[#0d1b2a] relative overflow-hidden"
    >
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
            Most South Africans Are
            <br />
            <span className="italic text-[#c8a84b]">Financially Ill and Don&apos;t Know It.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#9ca3af] text-lg max-w-[580px] mx-auto leading-relaxed">
            These are the four most common financial conditions we diagnose.
            None of them show symptoms until it&apos;s too late — and every one
            of them is treatable today.
          </motion.p>
        </motion.div>

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
          <p className="text-[#9ca3af] mb-6 max-w-[480px] mx-auto leading-relaxed">
            Take our free 10-question Financial Health Assessment below — or
            send us one WhatsApp and we&apos;ll do it with you in 15 minutes.
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
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-xl p-7 overflow-hidden hover:border-[rgba(26,111,181,0.3)] transition-all duration-300"
    >
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.12 + 0.3 }}
        className="absolute left-0 top-0 w-[3px] h-full bg-[#1a6fb5] origin-top"
      />

      <div className="flex items-start gap-4">
        <span className="text-3xl mt-0.5 flex-shrink-0">{data.icon}</span>
        <div className="flex-1">
          <h3 className="font-playfair font-semibold text-xl text-white mb-3 leading-snug">
            {data.title}
          </h3>

          <div className="space-y-3 mb-5">
            <div>
              <span className={`text-[10px] font-bold tracking-widest uppercase mr-2 ${severityColour[data.severity]}`}>
                ⚠ Symptom
              </span>
              <p className="text-[#9ca3af] text-sm leading-relaxed mt-1">
                {data.symptom}
              </p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-1 pt-1 border-t border-[rgba(255,255,255,0.05)]">
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#1a6fb5] mr-1">
                  Diagnosis:
                </span>
                <span className="text-[#9ca3af] text-xs">{data.diagnosis}</span>
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#c8a84b] mr-1">
                  Prescription:
                </span>
                <span className="text-[#9ca3af] text-xs">{data.prescription}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => openWA(data.waKey)}
            className="text-[#1a6fb5] text-sm font-semibold hover:text-[#2d8fd4] transition-colors cursor-pointer"
          >
            Treat this symptom →
          </button>
        </div>
      </div>
    </motion.div>
  );
}
