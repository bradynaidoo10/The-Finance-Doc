"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { scaleIn, fadeUp, staggerChildren } from "@/app/lib/motion";
import { openWA } from "@/app/lib/wa";
import { Stethoscope } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-28 md:py-36 bg-[#0d1b2a] relative overflow-hidden"
    >
      {/* Radial blue glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(26,111,181,0.12)_0%,transparent_70%)] pointer-events-none" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #1a6fb5 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-[680px] mx-auto px-4 md:px-8 text-center relative">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Heartbeat stethoscope icon */}
          <motion.div variants={scaleIn} className="flex justify-center mb-8">
            <div
              className="w-20 h-20 rounded-full bg-[#1a6fb5] flex items-center justify-center"
              style={{
                animation: "heartbeat 2.5s ease-in-out infinite",
                boxShadow:
                  "0 0 0 8px rgba(26,111,181,0.12), 0 0 0 16px rgba(26,111,181,0.06), 0 8px 32px rgba(26,111,181,0.4)",
              }}
            >
              <Stethoscope size={36} color="white" />
            </div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-playfair font-bold text-[clamp(2rem,4.5vw,2.8rem)] text-white leading-tight mb-5"
          >
            One Message.
            <br />
            <span className="italic text-[#c8a84b]">
              Your Financial Health Starts Today.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#9ca3af] text-lg leading-relaxed mb-10 max-w-[500px] mx-auto"
          >
            No waiting rooms. No forms. No pressure. Just a straight
            conversation with a specialist who treats your financial future like
            it matters — because it does.
          </motion.p>

          <motion.div variants={fadeUp} className="mb-6">
            <button
              onClick={() => openWA("default")}
              className="inline-flex items-center justify-center gap-3 w-full max-w-sm mx-auto py-5 px-10 rounded-full bg-[#1a6fb5] text-white font-semibold text-lg hover:bg-[#155d9a] transition-colors duration-200 shadow-blue-lg cursor-pointer"
            >
              <Stethoscope size={22} />
              Book Your Free Check-Up
            </button>
          </motion.div>

          <motion.p variants={fadeUp} className="text-[#6b7280] text-sm mb-2">
            Free · No obligation · Response within 2 hours · KwaZulu-Natal, South Africa
          </motion.p>

          <motion.p variants={fadeUp} className="text-[#4b5563] text-xs">
            Authorised representative of a licensed FSP · FSCA regulated · FAIS Act No. 37 of 2002
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
