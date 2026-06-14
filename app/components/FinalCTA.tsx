"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { scaleIn, fadeUp, staggerChildren } from "@/app/lib/motion";
import WAButton from "./ui/WAButton";

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-28 md:py-36 bg-[#0a0f1e] relative overflow-hidden"
    >
      {/* Radial gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(200,168,75,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Dotted pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #c8a84b 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-[680px] mx-auto px-4 md:px-8 text-center relative">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* WA icon */}
          <motion.div variants={scaleIn} className="flex justify-center mb-8">
            <div
              className="w-20 h-20 rounded-full bg-[#16a34a] flex items-center justify-center"
              style={{
                boxShadow:
                  "0 0 0 8px rgba(22,163,74,0.12), 0 0 0 16px rgba(22,163,74,0.06), 0 8px 32px rgba(22,163,74,0.4)",
              }}
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-playfair font-bold text-[clamp(2rem,4.5vw,2.8rem)] text-white leading-tight mb-5"
          >
            One Message.
            <br />
            <span className="italic text-[#c8a84b]">Your Entire Future Secured.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#9ca3af] text-lg leading-relaxed mb-10 max-w-[500px] mx-auto"
          >
            No forms. No call centres. No pressure. Just a real conversation
            with an advisor who takes your future personally.
          </motion.p>

          <motion.div variants={fadeUp} className="mb-6">
            <WAButton
              size="lg"
              fullWidth
              message="Hi The Blueprint! I'd like a free financial consultation."
              className="max-w-sm mx-auto"
            >
              💬 Start the Conversation
            </WAButton>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-[#6b7280] text-sm mb-2"
          >
            Free · No obligation · Response within 2 hours
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="text-[#4b5563] text-xs"
          >
            Authorised representative of a licensed FSP · FSCA regulated
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
