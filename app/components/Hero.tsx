"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import WAButton from "./ui/WAButton";
import GoldButton from "./ui/GoldButton";
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

  const scrollToProducts = () => {
    document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center bg-white overflow-hidden pt-20"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0a0f1e 1px, transparent 1px), linear-gradient(90deg, #0a0f1e 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gold glow top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(200,168,75,0.08)_0%,transparent_70%)] pointer-events-none" />

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
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(200,168,75,0.4)] bg-[rgba(200,168,75,0.06)] text-[#c8a84b] text-xs font-semibold tracking-widest uppercase">
                <span>✦</span>
                FSCA Regulated · South Africa
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              className="font-playfair text-[clamp(2.6rem,5.5vw,4.2rem)] font-bold leading-[1.08] text-[#0a0f1e] mb-6"
            >
              Protect Your Family.
              <br />
              Build Your{" "}
              <span className="italic text-[#c8a84b]">Legacy.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={fadeUp}
              className="text-lg text-[#6b7280] leading-relaxed mb-10 max-w-[480px]"
            >
              One unexpected event is the difference between your family
              thriving and your family surviving. The Blueprint makes sure you
              are never unprepared.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 mb-10"
            >
              <WAButton
                size="lg"
                message="Hi The Blueprint! I'd like a free financial consultation."
              >
                💬 WhatsApp Us — It&apos;s Free
              </WAButton>
              <GoldButton
                variant="outline"
                size="lg"
                onClick={scrollToProducts}
              >
                Explore Products →
              </GoldButton>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#6b7280]"
            >
              <span className="flex items-center gap-1.5">
                <span className="text-[#c8a84b]">🏆</span>
                Broker of the Year 2023 &amp; 2025
              </span>
              <span className="w-px h-4 bg-[rgba(200,168,75,0.3)]" />
              <span>700+ Clients</span>
              <span className="w-px h-4 bg-[rgba(200,168,75,0.3)]" />
              <span>10 Years Experience</span>
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
