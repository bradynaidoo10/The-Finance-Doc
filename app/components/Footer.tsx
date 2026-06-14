"use client";

import { openWA } from "@/app/lib/wa";

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

const products = [
  "Life Cover",
  "Disability Cover",
  "Dread Disease",
  "Funeral Cover",
  "Retirement Annuity",
  "Tax-Free Savings",
  "Endowment / Sinking Fund",
  "Education Plan",
];

const medicalAid = [
  "Bonitas Medical Aid",
  "Bestmed Medical Aid",
  "Compare Medical Plans",
  "Gap Cover",
];

const legal = [
  "FAIS Disclosure",
  "Privacy Policy (POPIA)",
  "FSCA Website",
  "FAIS Ombud",
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1e] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Col 1 — Brand */}
        <div>
          <div className="font-playfair font-bold text-xl text-white mb-2">
            THE <span className="text-[#c8a84b]">·</span> BLUEPRINT
          </div>
          <p className="text-[#9ca3af] text-sm leading-relaxed mb-5">
            Award-winning financial advisory. Tailoring cover, investments and
            medical aid to South African families since 2014.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(200,168,75,0.3)] text-[#c8a84b] text-xs font-semibold mb-6">
            🏆 Broker of the Year 2023 &amp; 2025
          </div>
          <p className="text-[#4b5563] text-[11px] leading-relaxed">
            Authorised representative of a licensed FSP. FSCA regulated. All
            advice subject to a formal FNA in terms of the FAIS Act.
          </p>
        </div>

        {/* Col 2 — Products */}
        <div>
          <h4 className="font-semibold text-sm text-white mb-4 tracking-wide">
            Products
          </h4>
          <ul className="space-y-2.5">
            {products.map((p) => (
              <li key={p}>
                <button
                  onClick={() => scrollTo("#products")}
                  className="text-[#9ca3af] text-sm hover:text-[#c8a84b] transition-colors cursor-pointer text-left"
                >
                  {p}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Medical Aid */}
        <div>
          <h4 className="font-semibold text-sm text-white mb-4 tracking-wide">
            Medical Aid
          </h4>
          <ul className="space-y-2.5">
            {medicalAid.map((m) => (
              <li key={m}>
                <button
                  onClick={() =>
                    openWA(`Hi The Blueprint! I'd like help with: ${m}.`)
                  }
                  className="text-[#9ca3af] text-sm hover:text-[#c8a84b] transition-colors cursor-pointer text-left"
                >
                  {m}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Legal */}
        <div>
          <h4 className="font-semibold text-sm text-white mb-4 tracking-wide">
            Legal &amp; Compliance
          </h4>
          <ul className="space-y-2.5">
            {legal.map((l) => (
              <li key={l}>
                <span className="text-[#9ca3af] text-sm cursor-default">
                  {l}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-[rgba(255,255,255,0.06)]">
            <p className="text-[#4b5563] text-[11px] leading-relaxed">
              FAIS Ombud: 0860 324 766
              <br />
              complaints@faisombud.co.za
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(255,255,255,0.06)] py-5 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-[#4b5563] text-xs">
          <span>© {new Date().getFullYear()} The Blueprint. All rights reserved.</span>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span>FSCA Regulated</span>
            <span className="w-px h-3 bg-[#374151]" />
            <span>FAIS Compliant</span>
            <span className="w-px h-3 bg-[#374151]" />
            <span>POPIA Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
