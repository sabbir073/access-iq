"use client";

import React from "react";
import Image from "next/image";
import AnimatedGradient from "../AnimatedGradient";

const AuditHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0e1a]">
      {/* Animated gradient background */}
      <AnimatedGradient />

      {/* Content layer */}
      <div className="relative z-10">
        {/* Hero main content - split layout */}
        <div className="container mx-auto pt-[120px] pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[54%_46%] gap-6 items-center min-h-[540px]">
            {/* Left side - Text content */}
            <div>
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4aa]/20 bg-[#00d4aa]/[0.06] mb-7">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    stroke="#00d4aa"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-white text-[13px] font-medium">
                  Expert-Led Accessibility Audit
                </span>
              </div>

              {/* Main heading */}
              <h1 className="text-[34px] md:text-[42px] lg:text-[50px] font-bold leading-[1.15] text-white mb-6 tracking-tight">
                Expert Accessibility Audit.
                <br />
                Verified. Defensible.
              </h1>

              {/* Description */}
              <p className="text-gray-300 text-[17px] leading-[1.7] mb-8 max-w-[540px]">
                Human-led WCAG 2.1 AA audits with verified reports, legal-ready
                evidence, and a remediation roadmap your engineering team can
                trust.
              </p>

              {/* CTA Buttons */}
              <div className="flex items-center gap-4 mb-8">
                <button className="bg-gradient-to-r from-[#00d4aa] to-[#0088cc] text-white text-[14px] font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-[#00d4aa]/20">
                  Book Expert Audit
                </button>
                <button className="text-white text-[14px] font-medium px-7 py-3.5 rounded-full border border-white/20 hover:border-white/40 hover:bg-white/[0.03] transition-all">
                  View Sample Report
                </button>
              </div>

              {/* Compliance badges */}
              <div className="flex items-center gap-6 flex-wrap mb-6">
                {[
                  "ADA",
                  "WCAG 2.1 AA",
                  "Section 508",
                  "EN 301 549",
                ].map((badge) => (
                  <div key={badge} className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"
                        fill="none"
                        stroke="#00d4aa"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M9 12l2 2 4-4"
                        stroke="#00d4aa"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-gray-300 text-[13px] font-medium">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stats row - checkmark badges */}
              <div className="flex items-center gap-6 flex-wrap">
                {[
                  "Legal-Ready Reports",
                  "Verified Experts",
                  "Manual Verification",
                ].map((label) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md flex items-center justify-center bg-[#0088cc]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-[13px] font-medium">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Dashboard image */}
            <div className="relative">
              <Image
                src="/images/Compliance Page MAckBook.png"
                alt="AccessIQ Audit Dashboard"
                width={1200}
                height={860}
                className="w-full h-auto lg:scale-125 origin-center"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom spacer for the curved white section overlap */}
        <div className="h-16" />
      </div>
    </section>
  );
};

export default AuditHero;
