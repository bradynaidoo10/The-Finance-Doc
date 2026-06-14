"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp, staggerChildren } from "@/app/lib/motion";
import SectionLabel from "./ui/SectionLabel";
import { openWA } from "@/app/lib/wa";

type Category = "All" | "Risk" | "Investment" | "Medical Aid";

const products = [
  {
    icon: "🛡️",
    name: "Life Cover",
    category: "Risk" as Category,
    tagline: "Replaces your income when your family needs it most.",
    detail:
      "A lump-sum payment to your beneficiaries upon death. Covers bond repayments, debt, education costs, and living expenses — so your family never has to start from zero.",
    waMsg: "I'd like a quote for life cover.",
  },
  {
    icon: "⚡",
    name: "Disability Cover",
    category: "Risk" as Category,
    tagline: "Your income keeps flowing even when you can't work.",
    detail:
      "Pays a monthly benefit or lump sum if you're unable to work due to illness or injury. Disability is 3× more likely than death before retirement age.",
    waMsg: "I'd like a quote for disability cover.",
  },
  {
    icon: "💊",
    name: "Dread Disease",
    category: "Risk" as Category,
    tagline: "A lump sum if you're diagnosed with a critical illness.",
    detail:
      "Covers cancer, heart attack, stroke, and other critical illnesses. The payout is yours to use however you need — treatment, modifications, or income replacement.",
    waMsg: "I'd like to know more about dread disease cover.",
  },
  {
    icon: "🕊️",
    name: "Funeral Cover",
    category: "Risk" as Category,
    tagline: "Dignity in the hardest moments. Fast, simple payouts.",
    detail:
      "Covers your entire family from R5,000 to R100,000 per member. Cash paid out within 24–48 hours — so you never have to fundraise at the worst time.",
    waMsg: "I'd like a quote for funeral cover.",
  },
  {
    icon: "🏦",
    name: "Retirement Annuity",
    category: "Investment" as Category,
    tagline: "Tax-efficient growth for your post-work years.",
    detail:
      "Contributions are tax deductible (up to 27.5% of income). Your investment grows in a regulated environment and converts to a pension at retirement.",
    waMsg: "I'd like to start a retirement annuity.",
  },
  {
    icon: "💎",
    name: "Tax-Free Savings",
    category: "Investment" as Category,
    tagline: "R36,000/year. Zero tax on interest, dividends, or growth.",
    detail:
      "TFSA accounts earn 100% tax-free returns forever. The earlier you start, the more the compound effect works in your favour. Ideal for medium-to-long term goals.",
    waMsg: "I'd like to open a tax-free savings account.",
  },
  {
    icon: "📈",
    name: "Endowment / Sinking Fund",
    category: "Investment" as Category,
    tagline: "Structured savings with a fixed payout date.",
    detail:
      "Perfect for school fees, property deposits, or any goal with a 5+ year horizon. Preferential tax treatment compared to direct savings accounts.",
    waMsg: "I'd like to know about endowments and sinking funds.",
  },
  {
    icon: "🎓",
    name: "Education Plan",
    category: "Investment" as Category,
    tagline: "Lock in your child's future — whatever happens to you.",
    detail:
      "Combines investment growth with built-in life and disability protection. If you can't contribute due to death or disability, the insurer continues the payments.",
    waMsg: "I'd like to set up an education plan for my child.",
  },
  {
    icon: "🏥",
    name: "Medical Aid",
    category: "Medical Aid" as Category,
    tagline: "Access to private healthcare without financial strain.",
    detail:
      "We work with top schemes including Bonitas and Bestmed. We compare plans across your needs and budget — not ours — and assist with claims throughout the year.",
    waMsg: "I'd like help comparing medical aid plans.",
  },
];

const filters: Category[] = ["All", "Risk", "Investment", "Medical Aid"];

export default function Products() {
  const [active, setActive] = useState<Category>("All");
  const [expanded, setExpanded] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section
      id="products"
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
            <SectionLabel>Our Solutions</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-playfair font-bold text-[clamp(2rem,4vw,3rem)] text-[#0a0f1e] mb-4 leading-tight"
          >
            Every Product Your{" "}
            <span className="italic text-[#c8a84b]">Future Needs</span>
          </motion.h2>
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
                  ? "bg-[#c8a84b] text-white shadow-gold"
                  : "border border-[rgba(200,168,75,0.4)] text-[#374151] hover:border-[#c8a84b] hover:text-[#c8a84b]"
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((product, i) => (
              <ProductCard
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
      </div>
    </section>
  );
}

function ProductCard({
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
      className={`group flex flex-col bg-white border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer
        ${expanded
          ? "border-[#c8a84b] shadow-gold-lg -translate-y-1"
          : "border-[#e5e7eb] shadow-card hover:-translate-y-1.5 hover:shadow-card-hover hover:border-[rgba(200,168,75,0.5)]"
        }`}
    >
      {/* Gold top border on hover */}
      <div className={`h-0.5 w-full bg-[#c8a84b] transition-transform duration-300 origin-left ${expanded ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />

      <div className="p-6 flex flex-col flex-1">
        {/* Category tag */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase border border-[rgba(200,168,75,0.4)] text-[#c8a84b]">
            {product.category}
          </span>
        </div>

        <div className="text-4xl mb-3">{product.icon}</div>
        <h3 className="font-playfair font-semibold text-xl text-[#0a0f1e] mb-1">
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
          className="flex items-center gap-1.5 text-xs text-[#c8a84b] font-medium mb-5 cursor-pointer hover:text-[#b8943b] transition-colors"
        >
          <ChevronDown
            size={14}
            className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          />
          {expanded ? "Show less" : "Learn more"}
        </button>

        <div className="mt-auto">
          <button
            onClick={() =>
              openWA(`Hi The Blueprint! ${product.waMsg}`)
            }
            className="w-full py-3 px-4 rounded-xl bg-[#c8a84b] text-white text-sm font-semibold hover:bg-[#b8943b] transition-colors duration-200 cursor-pointer shadow-gold hover:shadow-gold-lg"
          >
            Get a free quote →
          </button>
        </div>
      </div>
    </motion.div>
  );
}
