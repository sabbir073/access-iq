"use client";

import React from "react";
import AnimatedGradient from "../AnimatedGradient";

const ContactHero = () => {
  return (
    <div className="relative overflow-hidden bg-[#0a0e1a]">
      {/* Animated gradient background - covers entire contact page */}
      <AnimatedGradient />

      <div className="relative z-10">
        <div className="pt-[100px] pb-10">
          <div className="container mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4aa]/20 bg-[#00d4aa]/[0.06] mb-7">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  stroke="#00d4aa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-white text-[13px] font-medium">
                Get in Touch
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[34px] md:text-[42px] lg:text-[50px] font-bold leading-[1.15] text-white mb-6 tracking-tight max-w-3xl mx-auto">
              Talk to an Accessibility Compliance Expert
            </h1>

            {/* Compliance badges */}
            <div className="flex items-center justify-center gap-6">
              {["WCAG 2.1 AA & AA", "ADA"].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
