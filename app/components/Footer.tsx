"use client";

import { Stethoscope, Mail, Phone, MapPin } from "lucide-react";
import { openWA } from "@/app/lib/wa";
import { WA_EMAIL } from "@/app/lib/wa";

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
};

const prescriptions = [
  "Life Cover",
  "Disability Cover",
  "Dread Disease Cover",
  "Funeral Cover",
  "Retirement Annuity",
  "Tax-Free Savings",
  "Education Plan",
];

const medicalAid = [
  "Bonitas Medical Aid",
  "Bestmed Medical Aid",
  "Compare Plans",
  "Late-Joiner Penalties",
];

const practice = [
  "About The Practice",
  "FAIS Disclosure",
  "Privacy Policy (POPIA)",
  "FSCA",
  "FAIS Ombud",
];

export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Col 1 — Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <Stethoscope size={20} className="text-[#c8a84b]" />
            <span className="font-inter font-semibold text-white text-base">
              THE FINANCE{" "}
              <span className="font-playfair italic text-[#1a6fb5]">Doc</span>
            </span>
          </div>
          <p className="text-[#9ca3af] text-sm leading-relaxed mb-4 italic font-playfair">
            &ldquo;Diagnosing your financial future. Prescribing your legacy.&rdquo;
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(200,168,75,0.3)] text-[#c8a84b] text-xs font-semibold mb-6">
            🏆 Broker of the Year 2023 &amp; 2025
          </div>

          <div className="space-y-2.5 mb-6">
            <a
              href={`mailto:${WA_EMAIL}`}
              className="flex items-center gap-2 text-[#9ca3af] text-sm hover:text-[#1a6fb5] transition-colors"
            >
              <Mail size={14} />
              {WA_EMAIL}
            </a>
            <button
              onClick={() => openWA("default")}
              className="flex items-center gap-2 text-[#9ca3af] text-sm hover:text-[#1a6fb5] transition-colors cursor-pointer"
            >
              <Phone size={14} />
              066 531 2978
            </button>
            <div className="flex items-center gap-2 text-[#9ca3af] text-sm">
              <MapPin size={14} />
              Pietermaritzburg, KwaZulu-Natal
            </div>
          </div>

          <p className="text-[#4b5563] text-[11px] leading-relaxed">
            Authorised representative of a licensed FSP. FSCA regulated. All
            advice subject to a formal Financial Health Assessment in terms of
            the FAIS Act No. 37 of 2002.
          </p>
        </div>

        {/* Col 2 — Prescriptions */}
        <div>
          <h4 className="font-semibold text-sm text-white mb-4 tracking-wide">
            Prescriptions
          </h4>
          <ul className="space-y-2.5">
            {prescriptions.map((p) => (
              <li key={p}>
                <button
                  onClick={() => scrollTo("#prescriptions")}
                  className="text-[#9ca3af] text-sm hover:text-[#1a6fb5] transition-colors cursor-pointer text-left"
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
                  onClick={() => openWA("medicalAid")}
                  className="text-[#9ca3af] text-sm hover:text-[#1a6fb5] transition-colors cursor-pointer text-left"
                >
                  {m}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — The Practice */}
        <div>
          <h4 className="font-semibold text-sm text-white mb-4 tracking-wide">
            The Practice
          </h4>
          <ul className="space-y-2.5">
            {practice.map((item) => (
              <li key={item}>
                <span className="text-[#9ca3af] text-sm cursor-default">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-6 border-t border-[rgba(255,255,255,0.06)]">
            <p className="text-[#4b5563] text-[11px] leading-relaxed">
              FAIS Ombud: 0860 324 766
              <br />
              faisombud.co.za
              <br />
              FSCA: 0800 20 37 22
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(255,255,255,0.06)] py-5 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-[#4b5563] text-xs">
          <span>© {new Date().getFullYear()} The Finance Doc. All rights reserved.</span>
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
