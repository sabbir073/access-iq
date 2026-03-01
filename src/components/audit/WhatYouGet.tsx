import React from "react";
import Image from "next/image";

const deliverables = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Audit Report",
    description:
      "Certified findings with severity impact, and clear remediation guidance.",
    bg: "linear-gradient(135deg, #0e7490, #0891b2)",
    iconBg: "rgba(255,255,255,0.15)",
    textColor: "text-white",
    descColor: "text-white/80",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 3v18h18M7 16l4-4 4 4 6-6"
          stroke="#0088cc"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Repro Steps & Evidence",
    description:
      "Screenshots, code references and exact reproduction steps for every issue.",
    bg: "linear-gradient(135deg, #e6faf5, #e0f7fa)",
    iconBg: "rgba(0,212,170,0.12)",
    textColor: "text-[#0b0f1a]",
    descColor: "text-gray-500",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 6h16M4 10h16M4 14h10M4 18h6"
          stroke="#0088cc"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Executive Summary",
    description:
      "A baseliner early overview of task, scope, and priorities for reader stakeholders.",
    bg: "linear-gradient(135deg, #e6faf5, #e0f7fa)",
    iconBg: "rgba(0,212,170,0.12)",
    textColor: "text-[#0b0f1a]",
    descColor: "text-gray-500",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          stroke="#00d4aa"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Verification Path",
    description:
      "Maass guidance and worktaberno confirm fixes and document progress.",
    bg: "linear-gradient(135deg, #e6faf5, #e0f7fa)",
    iconBg: "rgba(0,212,170,0.12)",
    textColor: "text-[#0b0f1a]",
    descColor: "text-gray-500",
  },
];

const WhatYouGet = () => {
  return (
    <section
      className="relative bg-[#f8f9fb]"
      style={{
        borderRadius: "24px 24px 0 0",
        marginTop: "-24px",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div className="py-16 md:py-24">
        <div className="container mx-auto">
          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            {/* Left side - Header + Checklist + Image */}
            <div>
              {/* Section Header */}
              <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-[#0b0f1a] leading-tight mb-3">
                What You{" "}
                <span className="gradient-text">Get</span>
              </h2>
              <p className="text-gray-500 text-base mb-8 leading-relaxed">
                Detailed finding impact to WCAG criteria
              </p>

              {/* Checklist */}
              <div className="space-y-4 mb-10">
                {[
                  "Certified Experts",
                  "Legal. Reports",
                  "Manual Verification",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="shrink-0"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="#00d4aa"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-gray-600 text-[16px]">{item}</span>
                  </div>
                ))}
              </div>

              {/* Dashboard image */}
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/images/vector-27.png"
                  alt="Accessibility Audit Report"
                  width={700}
                  height={490}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>

            {/* Right side - 4 Deliverable cards (2x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 grid-rows-2">
              {deliverables.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl p-6 flex flex-col"
                  style={{
                    background: item.bg,
                    border: index === 0 ? "none" : "1px solid rgba(0,212,170,0.15)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: item.iconBg }}
                  >
                    {item.icon}
                  </div>
                  <h4 className={`${item.textColor} text-[17px] font-bold mb-2`}>
                    {item.title}
                  </h4>
                  <p className={`${item.descColor} text-[13px] leading-relaxed`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 flex justify-center">
            <button
              className="flex items-center gap-2 text-white text-sm font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
              style={{
                background: "linear-gradient(135deg, #00d4aa, #0088cc)",
              }}
            >
              Book Expert Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
