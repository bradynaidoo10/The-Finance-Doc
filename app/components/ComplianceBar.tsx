"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FULL_TEXT = `The Blueprint is an authorised representative of a licensed Financial Services Provider (FSP) regulated by the Financial Sector Conduct Authority (FSCA). Registration pending. This website is for informational purposes only and does not constitute financial advice. All recommendations are made following a formal Financial Needs Analysis (FNA) in terms of the Financial Advisory and Intermediary Services Act, 37 of 2002 (FAIS Act). The Blueprint adheres to the Treating Customers Fairly (TCF) framework. For complaints, contact the FAIS Ombud at 0860 324 766 or complaints@faisombud.co.za. Your personal information is processed in accordance with the Protection of Personal Information Act 4 of 2013 (POPIA).`;

export default function ComplianceBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-[rgba(200,168,75,0.07)] border-t border-[rgba(200,168,75,0.2)] py-3 px-4 md:px-8 lg:px-16">
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
            className="md:hidden flex-shrink-0 flex items-center gap-1 text-[11px] text-[#c8a84b] font-medium cursor-pointer whitespace-nowrap mt-0.5"
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
