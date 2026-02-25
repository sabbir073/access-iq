"use client";

import React from "react";
import Image from "next/image";
import AnimatedGradient from "./AnimatedGradient";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0e1a]">
      {/* Three.js animated gradient background */}
      <AnimatedGradient />

      {/* Content layer */}
      <div className="relative z-10">
        {/* Compliance badges bar */}
        <div className="pt-[88px] pb-4">
          <div className="container mx-auto">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {[
                "ADA",
                "WCAG 2.1 AA",
                "Section 508",
                "EN 301 549",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill="none" stroke="#00d4aa" strokeWidth="1.5"/>
                    <path d="M9 12l2 2 4-4" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-gray-400 text-[13px] font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero main content - split layout */}
        <div className="container mx-auto pt-8 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[540px]">
            {/* Left side - Text content */}
            <div>
              {/* Trust badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4aa]/20 bg-[#00d4aa]/[0.06] mb-7">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[#00d4aa] text-[13px] font-medium">Trusted Accessibility Experts</span>
              </div>

              {/* Main heading */}
              <h1 className="text-[32px] md:text-[38px] lg:text-[44px] font-bold leading-[1.15] text-white mb-6 tracking-tight">
                Enterprise-Grade Accessibility Compliance.{" "}
                <span className="gradient-text">Beyond Automated Scans.</span>
              </h1>

              {/* Description */}
              <p className="text-gray-400 text-[16px] leading-[1.7] mb-8 max-w-[520px]">
                We help businesses achieve WAG 2.1 AA &amp; ADA compliance through expert-led audits, AI-powered analysis, and verified remediation.
              </p>

              {/* CTA Buttons */}
              <div className="flex items-center gap-4 mb-10">
                <button className="bg-gradient-to-r from-[#00d4aa] to-[#0088cc] text-white text-[14px] font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-[#00d4aa]/20">
                  Run Free Quick Scan
                </button>
                <button className="text-white text-[14px] font-medium px-7 py-3.5 rounded-xl border border-white/20 hover:border-white/40 hover:bg-white/[0.03] transition-all">
                  Book Expert Audit
                </button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-10">
                <div>
                  <div className="text-white text-[36px] font-bold leading-none">99%</div>
                  <div className="text-gray-500 text-[13px] mt-1.5">Client Satisfaction</div>
                </div>
                <div className="w-px h-12" style={{ background: "linear-gradient(180deg, transparent, rgba(0, 212, 170, 0.3), transparent)" }} />
                <div>
                  <div className="text-white text-[36px] font-bold leading-none">120+</div>
                  <div className="text-gray-500 text-[13px] mt-1.5">Companies Trust AccessIQ</div>
                </div>
              </div>
            </div>

            {/* Right side - Dashboard image */}
            <div className="relative">
              {/* Glow behind dashboard */}
              <div className="absolute -inset-8 bg-[#00d4aa]/[0.04] rounded-3xl blur-3xl" />

              <div className="relative">
                {/* Main dashboard image */}
                <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40">
                  <Image
                    src="/images/dashboard.png"
                    alt="AccessIQ Dashboard Overview"
                    width={720}
                    height={480}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom spacer for the curved white section overlap */}
        <div className="h-16" />
      </div>
    </section>
  );
};

export default HeroSection;
