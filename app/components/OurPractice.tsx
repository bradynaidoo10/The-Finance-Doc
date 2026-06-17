"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerChildren } from "@/app/lib/motion";
import { openWA } from "@/app/lib/wa";

const features = [
  { icon: "🏆", title: "Award-winning practice", body: "Broker of the Year 2023 & 2025 — recognised by the industry, trusted by patients." },
  { icon: "👥", title: "10,000+ individuals diagnosed", body: "A growing community of families and individuals who trust us with their financial health." },
  { icon: "📅", title: "10 years in practice", body: "A decade of navigating complex financial landscapes and delivering real-world results." },
  { icon: "🩺", title: "Diagnosis before prescription — always", body: "We run a Financial Health Assessment before recommending a single product." },
  { icon: "⚡", title: "2-hour WhatsApp response", body: "Fast, human responses. A real advisor who knows your name and your file." },
  { icon: "🔒", title: "POPIA-compliant. Your records stay private.", body: "Your data is handled with strict legal compliance and never shared without your consent." },
];

const steps = [
  {
    num: "01",
    title: "We diagnose first",
    body: "A Financial Health Assessment before any recommendation. We understand your situation before we suggest a solution.",
  },
  {
    num: "02",
    title: "We prescribe precisely",
    body: "Risk, retirement, investment, medical aid — only what your situation requires. Nothing more, nothing less.",
  },
  {
    num: "03",
    title: "We monitor for life",
    body: "Annual reviews, claims support and policy updates. Your financial health is an ongoing relationship.",
  },
];

export default function OurPractice() {
  const ref = useRef<HTMLElement>(null);
  const bradyRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const bradyInView = useInView(bradyRef, { once: true, margin: "-60px" });
  const quoteInView = useInView(quoteRef, { once: true, margin: "-60px" });

  return (
    <section id="our-practice" ref={ref} className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp}>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1a6fb5]">
              About the Practice
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-playfair font-bold text-[clamp(2rem,4vw,3rem)] text-[#0d1b2a] mt-3 leading-tight"
          >
            A Decade of{" "}
            <span className="italic text-[#c8a84b]">Financial Medicine</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#6b7280] text-lg mt-4 max-w-[560px] mx-auto">
            10 years. 10,000+ patients. Two industry awards. One principle —
            diagnose first, prescribe second, never the other way around.
          </motion.p>
        </motion.div>

        {/* Meet Brady — full-width feature */}
        <div ref={bradyRef} className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={bradyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-2 gap-10 items-center bg-[#f4f7f9] rounded-3xl overflow-hidden border border-[rgba(26,111,181,0.1)]"
          >
            {/* Photo */}
            <div className="relative h-[420px] lg:h-[500px] w-full">
              <Image
                src="/brady.webp"
                alt="Brady Naidoo — The Finance Doc"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Gradient overlay on right edge for desktop blend */}
              <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#f4f7f9] to-transparent hidden lg:block" />
            </div>

            {/* Bio */}
            <div className="px-8 py-10 lg:pl-2 lg:pr-12">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1a6fb5] mb-3 block">
                Meet Your Financial Doctor
              </span>
              <h3 className="font-playfair font-bold text-3xl text-[#0d1b2a] mb-1">
                Brady Naidoo
              </h3>
              <p className="text-[#c8a84b] font-semibold text-sm mb-5 tracking-wide">
                Financial Health Specialist · FSCA Regulated
              </p>

              <div className="space-y-4 text-[#374151] text-sm leading-relaxed mb-7">
                <p>
                  Brady has spent a decade doing one thing — making sure South
                  African families are never financially caught off guard. Based
                  in Pietermaritzburg, KwaZulu-Natal, he has personally
                  diagnosed over 10,000 individuals and structured cover,
                  investments and medical aid for thousands of families across
                  the province.
                </p>
                <p>
                  His approach is simple: <span className="font-semibold text-[#0d1b2a]">diagnose before you prescribe.</span>{" "}
                  Every client gets a formal Financial Health Assessment before
                  a single product is recommended. No cross-selling. No
                  commission-chasing. Just honest advice.
                </p>
                <p>
                  That philosophy has earned The Finance Doc the Medical Aid
                  Broker of the Year award in both 2023 and 2025.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-7">
                <span className="px-3 py-1.5 rounded-full bg-[rgba(26,111,181,0.08)] border border-[rgba(26,111,181,0.2)] text-[#1a6fb5] text-xs font-semibold">
                  🏆 Broker of the Year 2023
                </span>
                <span className="px-3 py-1.5 rounded-full bg-[rgba(26,111,181,0.08)] border border-[rgba(26,111,181,0.2)] text-[#1a6fb5] text-xs font-semibold">
                  🏆 Broker of the Year 2025
                </span>
                <span className="px-3 py-1.5 rounded-full bg-[rgba(200,168,75,0.08)] border border-[rgba(200,168,75,0.25)] text-[#c8a84b] text-xs font-semibold">
                  FSCA Regulated
                </span>
              </div>

              <button
                onClick={() => openWA("default")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a6fb5] text-white font-semibold text-sm hover:bg-[#155d9a] transition-colors cursor-pointer shadow-blue"
              >
                🩺 Book a Session with Brady
              </button>
            </div>
          </motion.div>
        </div>

        {/* Feature grid */}
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="group p-6 rounded-2xl border border-[#e5e7eb] hover:border-[#1a6fb5] transition-all duration-250 hover:shadow-blue"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-[#0d1b2a] text-base mb-1.5">{f.title}</h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote + Process */}
        <div ref={quoteRef} className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={quoteInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#f4f7f9] rounded-2xl p-8 md:p-12 border-l-4 border-[#1a6fb5]"
          >
            <div className="text-[4rem] leading-none text-[#1a6fb5] font-playfair mb-4">&ldquo;</div>
            <blockquote className="font-playfair italic text-xl md:text-2xl text-[#0d1b2a] leading-relaxed mb-6">
              A good doctor doesn&apos;t prescribe before diagnosing. A good
              financial advisor doesn&apos;t either.
            </blockquote>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-10 h-10 rounded-full overflow-hidden relative flex-shrink-0 border-2 border-[#1a6fb5]">
                <Image src="/brady.webp" alt="Brady Naidoo" fill className="object-cover object-top" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#0d1b2a]">Brady Naidoo</div>
                <div className="text-xs text-[#6b7280]">The Finance Doc</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={quoteInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {steps.map((step, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex-shrink-0">
                  <span className="font-playfair font-bold text-3xl text-[#1a6fb5]">
                    {step.num}
                  </span>
                </div>
                <div className="pt-1">
                  <h4 className="font-semibold text-[#0d1b2a] text-base mb-1.5">
                    {step.title}
                  </h4>
                  <p className="text-sm text-[#6b7280] leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
