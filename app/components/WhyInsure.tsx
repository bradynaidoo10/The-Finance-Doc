"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerChildren } from "@/app/lib/motion";
import SectionLabel from "./ui/SectionLabel";
import WAButton from "./ui/WAButton";
import { openWA } from "@/app/lib/wa";

const cards = [
  {
    icon: "⚰️",
    question: "What happens to your family if you die tomorrow?",
    body: "Without life cover, your family inherits your debt and loses your income overnight. A simple policy changes everything.",
  },
  {
    icon: "🚑",
    question: "What if you cannot work for 6 months?",
    body: "Disability is far more common than death. Disability cover replaces your income so your lifestyle doesn't collapse.",
  },
  {
    icon: "👴",
    question: "Will you have enough money to retire?",
    body: "Most South Africans retire broke. A retirement annuity started today — even a small one — compounds into security.",
  },
  {
    icon: "🏦",
    question: "Why not just keep money in a savings account?",
    body: "Savings accounts earn less than inflation. Tax-free savings accounts and structured investments do the heavy lifting instead.",
  },
];

export default function WhyInsure() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="why-insure"
      ref={ref}
      className="py-24 md:py-32 bg-[#0a0f1e] relative overflow-hidden"
    >
      {/* Subtle gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(200,168,75,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>The Real Story</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-playfair font-bold text-[clamp(2rem,4vw,3rem)] text-white mb-4 leading-tight"
          >
            The Questions Most People Are
            <br />
            <span className="italic text-[#c8a84b]">Afraid to Answer</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#9ca3af] text-lg max-w-[560px] mx-auto">
            Insurance is not a nice-to-have. It is the difference between your
            family thriving and your family surviving.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {cards.map((card, i) => (
            <CardItem key={i} card={card} index={i} />
          ))}
        </motion.div>

        {/* Mid CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="border border-[rgba(200,168,75,0.3)] rounded-2xl p-8 md:p-12 text-center bg-[rgba(200,168,75,0.04)]"
        >
          <h3 className="font-playfair font-semibold text-2xl text-white mb-3">
            Not sure where to start?
          </h3>
          <p className="text-[#9ca3af] mb-6 max-w-[420px] mx-auto">
            A 15-minute WhatsApp conversation is all it takes to map out exactly
            what you need.
          </p>
          <WAButton
            size="lg"
            message="Hi The Blueprint! I'm not sure where to start with my financial planning. Can you help?"
          >
            💬 Let&apos;s Talk — It&apos;s Free
          </WAButton>
        </motion.div>
      </div>
    </section>
  );
}

function CardItem({
  card,
  index,
}: {
  card: (typeof cards)[0];
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
      className="group relative bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-xl p-7 overflow-hidden hover:border-[rgba(200,168,75,0.3)] transition-all duration-300"
    >
      {/* Gold left border animated */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.12 + 0.3 }}
        className="absolute left-0 top-0 w-[3px] h-full bg-[#c8a84b] origin-top"
      />

      <div className="flex items-start gap-4">
        <span className="text-3xl mt-0.5 flex-shrink-0">{card.icon}</span>
        <div>
          <h3 className="font-playfair font-semibold text-xl text-white mb-2 leading-snug">
            {card.question}
          </h3>
          <p className="text-[#9ca3af] text-sm leading-relaxed mb-4">
            {card.body}
          </p>
          <button
            onClick={() =>
              openWA(`Hi The Blueprint! I have a question: "${card.question}"`)
            }
            className="text-[#c8a84b] text-sm font-medium hover:text-[#e8c96e] transition-colors cursor-pointer"
          >
            Talk to us about this →
          </button>
        </div>
      </div>
    </motion.div>
  );
}
