"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "./ui/AnimatedCounter";
import { fadeUp, staggerChildren } from "@/app/lib/motion";

const stats = [
  { value: 700, suffix: "+", label: "Clients & Growing" },
  { value: 10, suffix: " Years", label: "Trusted Service" },
  { value: 2, suffix: "× Award", label: "Industry Recognition" },
  { value: 0, display: "Free", label: "Consultation" },
];

export default function StatsBar() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-14 bg-white border-t-2 border-[#c8a84b] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`flex flex-col items-center text-center ${
                i < stats.length - 1
                  ? "md:border-r md:border-[rgba(200,168,75,0.25)]"
                  : ""
              }`}
            >
              <div className="font-playfair font-bold text-[clamp(2rem,3.5vw,2.8rem)] text-[#0a0f1e] leading-none mb-1">
                {stat.display ? (
                  stat.display
                ) : (
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <div className="text-sm text-[#6b7280] font-medium mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
