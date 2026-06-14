"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FULL_TEXT = `The Finance Doc is an authorised representative of a licensed Financial Services Provider regulated by the FSCA in terms of the FAIS Act No. 37 of 2002. All content is for general information purposes only and does not constitute financial advice. Medical aid products are regulated under the Medical Schemes Act No. 131 of 1998. Personal information is processed in accordance with the Protection of Personal Information Act 4 of 2013 (POPIA). FAIS Ombud: 0860 324 766 · faisombud.co.za · FSCA: 0800 20 37 22 · fsca.co.za`;

export default function ComplianceBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-[rgba(26,111,181,0.05)] border-t border-[rgba(26,111,181,0.15)] py-3 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start gap-3">
          <div
            className={`text-[11px] text-[#374151] leading-relaxed flex-1 transition-all duration-300 ${
              expanded ? "" : "line-clamp-1 md:line-clamp-none"
            }`}
          >
            {FULL_TEXT}
          </div>
          <button
            onClick={() => setExpanded((v) => !v)}
            className="md:hidden flex-shrink-0 flex items-center gap-1 text-[11px] text-[#1a6fb5] font-medium cursor-pointer whitespace-nowrap mt-0.5"
          >
            {expanded ? "Show less" : "Show more"}
            <ChevronDown
              size={12}
              className={`transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
