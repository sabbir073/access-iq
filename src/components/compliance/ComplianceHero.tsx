"use client";

import React from "react";
import Image from "next/image";
import AnimatedGradient from "../AnimatedGradient";
import ScrollReveal from "../ScrollReveal";

const ComplianceHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0e1a]">
      {/* Animated gradient background */}
      <AnimatedGradient />

      {/* Content layer */}
      <div className="relative z-10">
        {/* Hero main content - split layout */}
        <div className="container mx-auto pt-[100px] pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[54%_46%] gap-6 items-center min-h-[540px]">
            {/* Left side - Text content */}
            <ScrollReveal animation="fade-in-up" duration={800}>
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4aa]/20 bg-[#00d4aa]/[0.06] mb-7">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#compBadgeClip)">
                    <path d="M7.9987 14.6673C11.6806 14.6673 14.6654 11.6825 14.6654 8.00065C14.6654 4.31875 11.6806 1.33398 7.9987 1.33398C4.3168 1.33398 1.33203 4.31875 1.33203 8.00065C1.33203 11.6825 4.3168 14.6673 7.9987 14.6673Z" stroke="url(#compBadgeG0)" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.9987 1.33398C6.28685 3.13142 5.33203 5.51848 5.33203 8.00065C5.33203 10.4828 6.28685 12.8699 7.9987 14.6673C9.71054 12.8699 10.6654 10.4828 10.6654 8.00065C10.6654 5.51848 9.71054 3.13142 7.9987 1.33398Z" stroke="url(#compBadgeG1)" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1.33203 8H14.6654" stroke="url(#compBadgeG2)" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <linearGradient id="compBadgeG0" x1="14.6654" y1="8.00065" x2="1.33203" y2="8.00065" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2865C7"/><stop offset="1" stopColor="#24A9AC"/>
                    </linearGradient>
                    <linearGradient id="compBadgeG1" x1="10.6654" y1="8.00065" x2="5.33203" y2="8.00065" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2865C7"/><stop offset="1" stopColor="#24A9AC"/>
                    </linearGradient>
                    <linearGradient id="compBadgeG2" x1="14.6654" y1="8.5" x2="1.33203" y2="8.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2865C7"/><stop offset="1" stopColor="#24A9AC"/>
                    </linearGradient>
                    <clipPath id="compBadgeClip"><rect width="16" height="16" fill="white"/></clipPath>
                  </defs>
                </svg>
                <span className="text-white text-[13px] font-medium">
                  Achieve &amp; Accessibility Compliance?
                </span>
              </div>

              {/* Main heading */}
              <h1 className="text-[34px] md:text-[42px] lg:text-[50px] font-bold leading-[1.15] text-white mb-6 tracking-tight">
                Achieve &amp; Maintain
                <br />
                Accessibility Compliance.
              </h1>

              {/* Description */}
              <p className="text-gray-300 text-[17px] leading-[1.7] mb-8 max-w-[540px]">
                Our experts provide end-to-end solutions to ensure your website
                and digital assets meet WAG 2.1 AA, ADA, Section 508 and EN 301
                549 standards.
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
              <div className="flex items-center gap-6 flex-wrap">
                {["ADA", "WCAG 2.1 AA", "Section 508", "EN 301 549"].map(
                  (badge) => (
                    <div key={badge} className="flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath={`url(#compChkClip-${badge.replace(/\s/g, '')})`}>
                          <path d="M12.661 12.6667H12.6673M12.661 12.6667C12.2459 13.0784 11.4935 12.9758 10.9659 12.9758C10.3183 12.9758 10.0065 13.1025 9.54425 13.5647C9.15072 13.9583 8.62312 14.6667 8.00065 14.6667C7.37818 14.6667 6.85058 13.9583 6.45703 13.5647C5.99484 13.1025 5.68298 12.9758 5.03536 12.9758C4.50777 12.9758 3.75544 13.0784 3.34031 12.6667C2.92186 12.2518 3.02484 11.4963 3.02484 10.9653C3.02484 10.2943 2.87809 9.98577 2.40024 9.50791C1.68941 8.79711 1.334 8.44164 1.33398 8.00004C1.33399 7.55837 1.6894 7.20297 2.40022 6.49215C2.82678 6.06559 3.02484 5.64289 3.02484 5.03475C3.02484 4.50714 2.92231 3.7548 3.33398 3.33967C3.74894 2.92123 4.50438 3.02421 5.03537 3.02421C5.6435 3.02421 6.0662 2.82617 6.49275 2.39962C7.20358 1.68879 7.55898 1.33337 8.00065 1.33337C8.44232 1.33337 8.79772 1.68879 9.50852 2.39962C9.93498 2.82609 10.3577 3.02421 10.9659 3.02421C11.4935 3.02421 12.2459 2.92169 12.6611 3.33337C13.0795 3.74833 12.9764 4.50377 12.9764 5.03475C12.9764 5.70576 13.1233 6.01429 13.6011 6.49215C14.3119 7.20297 14.6673 7.55837 14.6673 8.00004C14.6673 8.44164 14.3119 8.79711 13.6011 9.50791C13.1232 9.98577 12.9764 10.2943 12.9764 10.9653C12.9764 11.4963 13.0794 12.2518 12.661 12.6667Z" stroke={`url(#compChkG0-${badge.replace(/\s/g, '')})`}/>
                          <path d="M6 8.59525C6 8.59525 6.8 9.02978 7.2 9.66665C7.2 9.66665 8.4 7.16665 10 6.33331" stroke={`url(#compChkG1-${badge.replace(/\s/g, '')})`}/>
                        </g>
                        <defs>
                          <linearGradient id={`compChkG0-${badge.replace(/\s/g, '')}`} x1="14.6673" y1="8.00004" x2="1.33398" y2="8.00004" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2865C7"/><stop offset="1" stopColor="#24A9AC"/>
                          </linearGradient>
                          <linearGradient id={`compChkG1-${badge.replace(/\s/g, '')}`} x1="10" y1="7.99998" x2="6" y2="7.99998" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#2865C7"/><stop offset="1" stopColor="#24A9AC"/>
                          </linearGradient>
                          <clipPath id={`compChkClip-${badge.replace(/\s/g, '')}`}><rect width="16" height="16" fill="white"/></clipPath>
                        </defs>
                      </svg>
                      <span className="text-gray-300 text-[13px] font-medium">
                        {badge}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
            </ScrollReveal>

            {/* Right side - Dashboard image */}
            <ScrollReveal animation="fade-in-right" delay={300} duration={800}>
            <div className="relative">
              <Image
                src="/images/Compliance Page MAckBook.png"
                alt="Compliance Dashboard"
                width={1200}
                height={860}
                className="w-full h-auto lg:scale-125 origin-center"
                priority
              />
            </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom spacer for the curved white section overlap */}
        <div className="h-16" />
      </div>
    </section>
  );
};

export default ComplianceHero;
