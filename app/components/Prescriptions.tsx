"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp, staggerChildren } from "@/app/lib/motion";
import { openWA, WAKey } from "@/app/lib/wa";

type Category = "All" | "Protection" | "Wealth" | "Medical Aid";

const products = [
  {
    icon: "💊",
    name: "Life Cover",
    category: "Protection" as Category,
    tagline: "Daily protection for those who depend on you.",
    detail:
      "If you are no longer here, will your family be able to pay the bond, school fees and living costs? Life cover answers that — permanently.",
    waKey: "lifeCover" as WAKey,
  },
  {
    icon: "🛡️",
    name: "Disability Cover",
    category: "Protection" as Category,
    tagline: "Replace 100% of your income if you cannot work.",
    detail:
      "Disability is 3× more likely than death before retirement age. Disability cover pays a monthly benefit so your lifestyle doesn't collapse when your salary does.",
    waKey: "disability" as WAKey,
  },
  {
    icon: "❤️‍🩹",
    name: "Dread Disease Cover",
    category: "Protection" as Category,
    tagline: "150+ critical conditions. Survive medically and financially.",
    detail:
      "A lump-sum payout on diagnosis of cancer, heart attack, stroke or 150+ other critical conditions. Use it for treatment, recovery, or replacing lost income.",
    waKey: "dreadDisease" as WAKey,
  },
  {
    icon: "🕊️",
    name: "Funeral Cover",
    category: "Protection" as Category,
    tagline: "Payout within 48 hours. No medical exam.",
    detail:
      "Covers your entire family — up to R100,000 per member. Cash in your hands within 24–48 hours so you focus on the family, not the fundraising.",
    waKey: "funeral" as WAKey,
  },
  {
    icon: "💉",
    name: "Retirement Annuity",
    category: "Wealth" as Category,
    tagline: "27.5% tax-deductible. The government funds part of your retirement.",
    detail:
      "Contributions reduce your taxable income. Your investment grows in a regulated, protected environment and converts to a pension at retirement.",
    waKey: "retirement" as WAKey,
  },
  {
    icon: "📊",
    name: "Tax-Free Savings",
    category: "Wealth" as Category,
    tagline: "R36,000/year. Zero tax on growth — ever.",
    detail:
      "Every rand of interest, dividend and capital gain is 100% tax-free for life. The earlier you start, the more compounding works in your favour.",
    waKey: "tfsa" as WAKey,
  },
  {
    icon: "🧬",
    name: "Education Plan",
    category: "Wealth" as Category,
    tagline: "University fees double every 7 years. The antidote is starting now.",
    detail:
      "Combines investment growth with built-in life and disability protection. If you can't contribute, the insurer continues paying on your behalf.",
    waKey: "education" as WAKey,
  },
  {
    icon: "📋",
    name: "Endowment / Sinking Fund",
    category: "Wealth" as Category,
    tagline: "Disciplined savings with a guaranteed payout date.",
    detail:
      "Perfect for school fees, property deposits or any goal with a 5+ year horizon. Preferential tax treatment compared to direct savings accounts.",
    waKey: "endowment" as WAKey,
  },
  {
    icon: "🏥",
    name: "Medical Aid",
    category: "Medical Aid" as Category,
    tagline: "Bonitas & Bestmed — diagnosed, matched and enrolled.",
    detail:
      "We compare plans across your needs and budget, handle enrolment and assist with claims all year. One call — fully covered.",
    waKey: "medicalAid" as WAKey,
  },
];

const filters: Category[] = ["All", "Protection", "Wealth", "Medical Aid"];

export default function Prescriptions() {
  const [active, setActive] = useState<Category>("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section
      id="prescriptions"
      ref={ref}
      className="py-24 md:py-32 bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          variants={staggerChildren}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <motion.div variants={fadeUp}>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1a6fb5]">
              Your Prescription
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-playfair font-bold text-[clamp(2rem,4vw,3rem)] text-[#0d1b2a] mt-3 mb-4 leading-tight"
          >
            Prescribed for Your{" "}
            <span className="italic text-[#c8a84b]">Financial Health</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#6b7280] text-lg max-w-[520px] mx-auto">
            Every product we recommend follows a diagnosis. We never prescribe
            what you don&apos;t need.
          </motion.p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                active === f
                  ? "bg-[#1a6fb5] text-white shadow-blue"
                  : "border border-[rgba(26,111,181,0.3)] text-[#374151] hover:border-[#1a6fb5] hover:text-[#1a6fb5]"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Product grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {filtered.map((product, i) => (
              <PrescriptionCard
                key={product.name}
                product={product}
                index={i}
                expanded={expanded === product.name}
                onToggle={() =>
                  setExpanded(expanded === product.name ? null : product.name)
                }
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Below grid CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <p className="text-[#6b7280] mb-4">
            Not sure which prescriptions you need?
          </p>
          <button
            onClick={() => openWA("fullAssessment")}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#1a6fb5] text-[#1a6fb5] font-semibold hover:bg-[#1a6fb5] hover:text-white transition-all duration-200 cursor-pointer"
          >
            Book a Full Financial Health Assessment →
          </button>
        </motion.div>
      </div>
    </section>
  );
}

function PrescriptionCard({
  product,
  index,
  expanded,
  onToggle,
}: {
  product: (typeof products)[0];
  index: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col bg-white border rounded-2xl overflow-hidden transition-all duration-300
        ${expanded
          ? "border-[#1a6fb5] shadow-blue-lg -translate-y-1"
          : "border-[#e5e7eb] shadow-card hover:-translate-y-1.5 hover:shadow-card-hover hover:border-[rgba(26,111,181,0.4)]"
        }`}
    >
      {/* Blue top border on hover */}
      <div className={`h-0.5 w-full bg-[#1a6fb5] transition-transform duration-300 origin-left ${expanded ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />

      {/* Rx badge top-right */}
      <div className="absolute top-4 right-4 font-playfair italic text-[#c8a84b] text-lg font-bold leading-none select-none">
        Rx
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Category tag */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-[rgba(26,111,181,0.08)] text-[#1a6fb5] border border-[rgba(26,111,181,0.2)]">
            {product.category}
          </span>
        </div>

        <div className="text-4xl mb-3">{product.icon}</div>
        <h3 className="font-playfair font-semibold text-xl text-[#0d1b2a] mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-[#6b7280] mb-4 leading-relaxed">
          {product.tagline}
        </p>

        {/* Expandable detail */}
        <motion.div
          animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
          initial={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="text-sm text-[#374151] leading-relaxed pb-4">
            {product.detail}
          </p>
        </motion.div>

        {/* Toggle */}
        <button
          onClick={onToggle}
          className="flex items-center gap-1.5 text-xs text-[#1a6fb5] font-medium mb-5 cursor-pointer hover:text-[#155d9a] transition-colors"
        >
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          />
          {expanded ? "Show less" : "Learn more"}
        </button>

        <div className="mt-auto">
          <button
            onClick={() => openWA(product.waKey)}
            className="w-full py-3 px-4 rounded-xl bg-[#1a6fb5] text-white text-sm font-semibold hover:bg-[#155d9a] transition-colors duration-200 cursor-pointer shadow-blue hover:shadow-blue-lg"
          >
            Get this prescription →
          </button>
        </div>
      </div>
    </motion.div>
  );
}
