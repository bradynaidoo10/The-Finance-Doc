"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedCounter from "./ui/AnimatedCounter";
import { fadeUp, staggerChildren } from "@/app/lib/motion";

const stats = [
  { icon: "♥", value: 700, suffix: "+", label: "Patients Served" },
  { icon: "📋", value: 10, suffix: " Years", label: "In Practice" },
  { icon: "🏆", value: 2, suffix: "×", label: "Industry Recognised" },
  { icon: "💊", display: "Free", label: "First Consultation" },
];

export default function StatsBar() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-14 bg-[#f4f7f9] border-t-2 border-[#1a6fb5] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="text-center mb-8">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1a6fb5]">
              Vital Signs
            </span>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`flex flex-col items-center text-center ${
                  i < stats.length - 1
                    ? "md:border-r md:border-[rgba(26,111,181,0.15)]"
                    : ""
                }`}
              >
                <div className="text-xl mb-2 opacity-70">{stat.icon}</div>
                <div
                  className="font-mono font-bold text-[clamp(2rem,3.5vw,2.8rem)] text-[#0d1b2a] leading-none mb-1"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {stat.display ? (
                    stat.display
                  ) : (
                    <AnimatedCounter target={stat.value ?? 0} suffix={stat.suffix} />
                  )}
                </div>
                <div className="text-sm text-[#6b7280] font-medium mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
