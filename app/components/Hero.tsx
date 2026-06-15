"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Stethoscope } from "lucide-react";
import { openWA } from "@/app/lib/wa";
import { fadeUp, staggerChildren } from "@/app/lib/motion";

const FloatingShield = dynamic(() => import("./3d/FloatingShield"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const scrollToPrescriptions = () => {
    document.querySelector("#prescriptions")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#0d1b2a 1px, transparent 1px), linear-gradient(90deg, #0d1b2a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Blue glow top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(26,111,181,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — text */}
          <motion.div
            style={{ y }}
            variants={staggerChildren}
            initial="hidden"
            animate="visible"
            className="will-change-transform"
          >
            {/* Eyebrow badge */}
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(26,111,181,0.25)] bg-[rgba(26,111,181,0.05)] text-[#1a6fb5] text-xs font-semibold tracking-widest uppercase">
                <Stethoscope size={12} />
                Financial Health Specialist · FSCA Regulated · South Africa
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              className="font-playfair text-[clamp(2.4rem,5vw,4rem)] font-bold leading-[1.06] text-[#0d1b2a] mb-6"
            >
              Your Finances Have
              <br />
              Symptoms. We Have
              <br />
              the{" "}
              <span className="italic text-[#c8a84b]">Cure.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeUp}
              className="text-lg text-[#6b7280] leading-relaxed mb-10 max-w-[500px]"
            >
              Most South Africans are one hospital bill, one retrenchment, or
              one death away from financial collapse. The Finance Doc diagnoses
              your gaps and prescribes a plan that protects everything
              you&apos;ve built.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button
                onClick={() => openWA("default")}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#1a6fb5] text-white font-semibold text-base hover:bg-[#155d9a] transition-colors duration-200 shadow-blue hover:shadow-blue-lg cursor-pointer"
              >
                <Stethoscope size={18} />
                Book Your Free Check-Up
              </button>
              <button
                onClick={scrollToPrescriptions}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#1a6fb5] text-[#1a6fb5] font-semibold text-base hover:bg-[#1a6fb5] hover:text-white transition-all duration-200 cursor-pointer"
              >
                View Your Prescriptions →
              </button>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#6b7280]"
            >
              <span className="flex items-center gap-1.5">
                <span>🏆</span>
                Broker of the Year 2023 &amp; 2025
              </span>
              <span className="w-px h-4 bg-[rgba(26,111,181,0.2)]" />
              <span>10,000+ Individuals Diagnosed</span>
              <span className="w-px h-4 bg-[rgba(26,111,181,0.2)]" />
              <span>8,356 Treated &amp; Counting</span>
            </motion.div>
          </motion.div>

          {/* Right — 3D */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative h-[420px] lg:h-[560px] w-full"
          >
            <FloatingShield />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
