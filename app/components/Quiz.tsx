"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { fadeUp } from "@/app/lib/motion";
import { openWA } from "@/app/lib/wa";

const questions = [
  {
    q: "If you died tonight, how long could your family maintain their current lifestyle?",
    options: [
      { label: "Less than 1 month", score: 0 },
      { label: "1–3 months", score: 1 },
      { label: "3–6 months", score: 2 },
      { label: "1 year or more", score: 3 },
    ],
  },
  {
    q: "If you couldn't work for 6 months due to illness or injury, what would happen?",
    options: [
      { label: "Financial crisis immediately", score: 0 },
      { label: "Burn through savings fast", score: 1 },
      { label: "Manage, but it would hurt", score: 2 },
      { label: "Fully covered by insurance", score: 3 },
    ],
  },
  {
    q: "Do you have life cover in place right now?",
    options: [
      { label: "No, nothing at all", score: 0 },
      { label: "Not sure what I have", score: 0 },
      { label: "Yes, but I don't know if it's enough", score: 2 },
      { label: "Yes, and I've reviewed it recently", score: 3 },
    ],
  },
  {
    q: "At your current savings rate, how long will your retirement money last?",
    options: [
      { label: "I haven't started saving yet", score: 0 },
      { label: "Less than 5 years into retirement", score: 1 },
      { label: "5–10 years", score: 2 },
      { label: "15+ years — I'm on track", score: 3 },
    ],
  },
  {
    q: "If you were diagnosed with cancer tomorrow, could you afford treatment?",
    options: [
      { label: "No — I'd be wiped out financially", score: 0 },
      { label: "Only if it was short-term", score: 1 },
      { label: "Medical aid covers some of it", score: 2 },
      { label: "Yes — I have dread disease cover", score: 3 },
    ],
  },
  {
    q: "Does your medical aid plan actually match your family's needs?",
    options: [
      { label: "I'm not on medical aid at all", score: 0 },
      { label: "I'm on the cheapest option available", score: 1 },
      { label: "I think so, but never checked", score: 2 },
      { label: "Yes — it was structured for my situation", score: 3 },
    ],
  },
  {
    q: "Do you have a tax-free savings account (TFSA)?",
    options: [
      { label: "What is a TFSA?", score: 0 },
      { label: "No, but I know I should", score: 1 },
      { label: "Yes, but I don't contribute regularly", score: 2 },
      { label: "Yes, maxing out R36,000/year", score: 3 },
    ],
  },
  {
    q: "If you became permanently disabled tomorrow, what covers your income?",
    options: [
      { label: "Nothing — I'd lose everything", score: 0 },
      { label: "UIF for a short while", score: 1 },
      { label: "Some work benefit I think", score: 2 },
      { label: "Disability cover — fully structured", score: 3 },
    ],
  },
  {
    q: "Do you have a plan for your children's education costs?",
    options: [
      { label: "No plan — hoping for the best", score: 0 },
      { label: "Saving informally into a bank account", score: 1 },
      { label: "Some savings, but not structured", score: 2 },
      { label: "Yes — an education plan is in place", score: 3 },
    ],
  },
  {
    q: "Have you ever had a formal Financial Needs Analysis (FNA) done?",
    options: [
      { label: "What is an FNA?", score: 0 },
      { label: "No, never", score: 0 },
      { label: "Years ago — nothing updated since", score: 1 },
      { label: "Yes, within the last 12 months", score: 3 },
    ],
  },
];

type Result = {
  label: string;
  colour: string;
  bg: string;
  border: string;
  icon: string;
  message: string;
  cta: string;
};

function getResult(score: number): Result {
  const max = questions.length * 3;
  const pct = (score / max) * 100;

  if (pct <= 25)
    return {
      label: "Critical — Immediate Attention Required",
      colour: "text-red-500",
      bg: "bg-red-50",
      border: "border-red-200",
      icon: "🚨",
      message:
        "Your financial health is in critical condition. You are significantly exposed across multiple areas — one unexpected event could be catastrophic for your family. This needs urgent attention.",
      cta: "Get Emergency Financial Assessment",
    };
  if (pct <= 50)
    return {
      label: "Poor — High Risk Across Multiple Areas",
      colour: "text-orange-500",
      bg: "bg-orange-50",
      border: "border-orange-200",
      icon: "⚠️",
      message:
        "You have serious gaps in your financial health. You are protected in some areas but dangerously exposed in others. A structured plan is overdue — the longer you wait, the more it costs to fix.",
      cta: "Book My Free Financial Assessment",
    };
  if (pct <= 70)
    return {
      label: "Fair — Gaps That Need Closing",
      colour: "text-yellow-600",
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      icon: "📋",
      message:
        "You've made some good moves but there are meaningful gaps that leave you and your family exposed. A Financial Health Assessment will identify exactly what needs attention — and what's already working.",
      cta: "See What Needs Attention",
    };
  return {
    label: "Good — Fine-Tuning Required",
    colour: "text-[#1a6fb5]",
    bg: "bg-[rgba(26,111,181,0.04)]",
    border: "border-[rgba(26,111,181,0.2)]",
    icon: "✅",
    message:
      "You're in better shape than most South Africans. But \"good\" isn't \"optimised\" — there are likely tax efficiencies, coverage gaps or investment opportunities you're missing. Let's find them.",
    cta: "Optimise My Financial Health",
  };
}

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const result = getResult(totalScore);
  const progress = ((current) / questions.length) * 100;

  const handleSelect = (score: number, idx: number) => {
    setSelected(idx);
    setTimeout(() => {
      const next = [...answers, score];
      setAnswers(next);
      setSelected(null);
      if (current + 1 >= questions.length) {
        setDone(true);
      } else {
        setCurrent((c) => c + 1);
      }
    }, 420);
  };

  const reset = () => {
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
    setDone(false);
  };

  return (
    <section
      id="quiz"
      ref={ref}
      className="py-24 md:py-32 bg-[#f4f7f9] relative"
    >
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1a6fb5]">
            Free Financial Health Assessment
          </span>
          <h2 className="font-playfair font-bold text-[clamp(2rem,4vw,2.8rem)] text-[#0d1b2a] mt-3 mb-4 leading-tight">
            How Financially Healthy{" "}
            <span className="italic text-[#c8a84b]">Are You?</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-[480px] mx-auto">
            10 questions. 3 minutes. An honest picture of where you stand — and
            what to do about it.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-white rounded-2xl border border-[rgba(26,111,181,0.12)] shadow-card overflow-hidden"
        >
          {!done ? (
            <div>
              {/* Progress bar */}
              <div className="h-1.5 bg-[#f4f7f9]">
                <motion.div
                  className="h-full bg-[#1a6fb5]"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              <div className="p-8 md:p-10">
                {/* Counter */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold text-[#6b7280] tracking-widest uppercase">
                    Question {current + 1} of {questions.length}
                  </span>
                  <span className="text-xs text-[#6b7280]">
                    {Math.round(progress)}% complete
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h3 className="font-playfair font-semibold text-xl md:text-2xl text-[#0d1b2a] mb-8 leading-snug">
                      {questions[current].q}
                    </h3>

                    <div className="space-y-3">
                      {questions[current].options.map((opt, i) => (
                        <button
                          key={i}
                          onClick={() => handleSelect(opt.score, i)}
                          disabled={selected !== null}
                          className={`w-full text-left px-5 py-4 rounded-xl border text-sm font-medium transition-all duration-200 cursor-pointer
                            ${selected === i
                              ? "border-[#1a6fb5] bg-[rgba(26,111,181,0.08)] text-[#1a6fb5]"
                              : "border-[#e5e7eb] text-[#374151] hover:border-[#1a6fb5] hover:bg-[rgba(26,111,181,0.04)]"
                            }`}
                        >
                          <span className="inline-flex items-center gap-3">
                            <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                              selected === i ? "border-[#1a6fb5] bg-[#1a6fb5]" : "border-[#d1d5db]"
                            }`}>
                              {selected === i && (
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="white">
                                  <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                </svg>
                              )}
                            </span>
                            {opt.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          ) : (
            /* Results screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 md:p-10"
            >
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">{result.icon}</div>
                <h3 className="font-playfair font-bold text-2xl text-[#0d1b2a] mb-2">
                  Your Financial Health Score
                </h3>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="font-mono font-bold text-5xl text-[#0d1b2a]">
                    {totalScore}
                  </span>
                  <span className="text-[#6b7280] text-lg font-medium">
                    / {questions.length * 3}
                  </span>
                </div>
                {/* Score bar */}
                <div className="w-full h-3 bg-[#f4f7f9] rounded-full mb-4 max-w-sm mx-auto">
                  <motion.div
                    className="h-full rounded-full bg-[#1a6fb5]"
                    initial={{ width: 0 }}
                    animate={{ width: `${(totalScore / (questions.length * 3)) * 100}%` }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wide border ${result.bg} ${result.border} ${result.colour} mb-6`}>
                  {result.label}
                </div>
              </div>

              <div className={`rounded-xl p-5 border mb-8 ${result.bg} ${result.border}`}>
                <p className={`text-sm leading-relaxed font-medium ${result.colour}`}>
                  {result.message}
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => openWA("fullAssessment")}
                  className="w-full py-4 rounded-xl bg-[#1a6fb5] text-white font-semibold hover:bg-[#155d9a] transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  🩺 {result.cta} — It&apos;s Free
                </button>
                <button
                  onClick={reset}
                  className="w-full py-3 rounded-xl border border-[#e5e7eb] text-[#6b7280] text-sm hover:border-[#1a6fb5] hover:text-[#1a6fb5] transition-colors cursor-pointer"
                >
                  Retake the assessment
                </button>
              </div>

              <p className="text-[10px] text-[#9ca3af] text-center mt-5 leading-relaxed">
                This assessment is for informational purposes only and does not
                constitute financial advice. Please consult a licensed financial
                advisor for advice tailored to your circumstances.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
