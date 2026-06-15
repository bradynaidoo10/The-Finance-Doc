"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp, staggerChildren } from "@/app/lib/motion";
import { openWA } from "@/app/lib/wa";

const faqs = [
  {
    q: "Is The Finance Doc's advice really free?",
    a: "Yes — 100%. We are compensated by the product providers (insurers, investment houses, medical schemes) when we place a policy on your behalf. You pay exactly the same premium whether you use us or go directly to the provider. Our value is in the diagnosis, structuring and ongoing support — at zero cost to you.",
  },
  {
    q: "How much life cover do I actually need?",
    a: "A common rule of thumb is 10–15× your annual income, but the real answer depends on your bond, dependants, debt, lifestyle costs and existing assets. That's exactly what a Financial Health Assessment calculates for you — your personal number, not a generic estimate.",
  },
  {
    q: "I already have cover through my employer. Do I still need my own?",
    a: "Group life and disability cover through an employer stops the day you leave or are retrenched. It's also typically capped at 2–4× your salary — often far less than your family needs. We review your existing cover as part of the assessment and tell you exactly what gap exists.",
  },
  {
    q: "What is a Financial Needs Analysis (FNA)?",
    a: "An FNA is a structured assessment of your complete financial picture — income, expenses, dependants, assets, liabilities and goals. In terms of the FAIS Act, we are legally required to conduct one before making any recommendation. It's the diagnosis before the prescription.",
  },
  {
    q: "What medical aid schemes do you work with?",
    a: "We primarily work with Bonitas and Bestmed — two of South Africa's largest and most trusted open medical schemes. We compare their plans across hospital cover, day-to-day benefits and cost, and match you to the right option for your family and budget.",
  },
  {
    q: "What is the difference between a Retirement Annuity and a savings account?",
    a: "A savings account earns interest that is partially taxable, and the money is easy to access (which is often a problem). A Retirement Annuity is tax-deductible (up to 27.5% of income), grows in a protected environment, and is structured to produce a pension at retirement. For long-term wealth, there is no comparison.",
  },
  {
    q: "Can I afford cover if I'm on a tight budget?",
    a: "In most cases, yes — and the real question is whether you can afford not to. Life cover starts from around R150/month. Funeral cover from R60/month. The financial consequence of having none is almost always far more expensive than the premium. We always work within your actual budget.",
  },
  {
    q: "What happens when I WhatsApp you?",
    a: "Brady responds personally — usually within 2 hours during business hours. We start with a few questions to understand your situation, then schedule a free Financial Health Assessment at a time that suits you. There is no sales pressure and no obligation to take anything.",
  },
  {
    q: "Is my information safe?",
    a: "All personal and financial information shared with us is treated as strictly confidential and processed in accordance with the Protection of Personal Information Act (POPIA). We never share your details with third parties without your explicit consent.",
  },
  {
    q: "I'm young and healthy — do I really need this now?",
    a: "Yes — and now is the cheapest time to get it. Life and disability premiums are based on your age and health at the time of application. Every year you wait costs you more. Many conditions that develop over time can also make you uninsurable later. The best time to start was yesterday. The second best time is today.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" ref={ref} className="py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <motion.div variants={fadeUp}>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1a6fb5]">
              Common Questions
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-playfair font-bold text-[clamp(2rem,4vw,2.8rem)] text-[#0d1b2a] mt-3 mb-4 leading-tight"
          >
            Questions We Hear{" "}
            <span className="italic text-[#c8a84b]">Every Day</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#6b7280] text-lg">
            Honest answers. No jargon.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-3 mb-14"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                open === i
                  ? "border-[#1a6fb5] shadow-blue"
                  : "border-[#e5e7eb] hover:border-[rgba(26,111,181,0.3)]"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
              >
                <span className="font-semibold text-[#0d1b2a] text-sm md:text-base leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-[#1a6fb5] transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="h-px w-full bg-[rgba(26,111,181,0.1)] mb-4" />
                      <p className="text-[#374151] text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center bg-[#f4f7f9] rounded-2xl p-8 border border-[rgba(26,111,181,0.1)]"
        >
          <h3 className="font-playfair font-semibold text-xl text-[#0d1b2a] mb-2">
            Still have questions?
          </h3>
          <p className="text-[#6b7280] text-sm mb-5">
            WhatsApp Brady directly. No call centres. No scripts.
          </p>
          <button
            onClick={() => openWA("default")}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1a6fb5] text-white font-semibold text-sm hover:bg-[#155d9a] transition-colors cursor-pointer shadow-blue"
          >
            💬 Ask a Question — It&apos;s Free
          </button>
        </motion.div>
      </div>
    </section>
  );
}
