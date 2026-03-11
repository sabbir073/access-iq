"use client";

import React, { useState } from "react";
import Image from "next/image";
import AnimatedGradient from "../AnimatedGradient";
import ScrollReveal from "../ScrollReveal";

interface ScanHeroProps {
  onScan: (url: string) => void;
  error?: string;
}

const ScanHero = ({ onScan, error }: ScanHeroProps) => {
  const [url, setUrl] = useState("");
  const [validationError, setValidationError] = useState("");

  const validateAndSubmit = () => {
    const trimmed = url.trim();
    if (!trimmed) {
      setValidationError("Please enter a website URL.");
      return;
    }
    if (!/^https?:\/\//i.test(trimmed)) {
      setValidationError("URL must start with http:// or https://");
      return;
    }
    try {
      new URL(trimmed);
    } catch {
      setValidationError("Please enter a valid URL (e.g. https://example.com)");
      return;
    }
    setValidationError("");
    onScan(trimmed);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") validateAndSubmit();
  };

  const displayError = validationError || error;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0e1a]">
      {/* Animated gradient background */}
      <AnimatedGradient />

      {/* Grid pattern — visible in center, fades at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 40%, transparent 80%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-[88px] pb-20">

        {/* Badge */}
        <ScrollReveal animation="fade-in-up" delay={100}>
          <div className="inline-flex rounded-full p-[1px] mb-7" style={{ background: "linear-gradient(135deg, #00d4aa, #0088cc)" }}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full" style={{ background: "#080c18" }}>
              <Image
                src="/images/Group 1.png"
                alt=""
                width={16}
                height={16}
                className="w-4 h-4 object-contain"
              />
              <span className="text-white text-[13px] font-medium">Trusted Accessibility Experts</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal animation="fade-in-up" delay={200}>
          <h1 className="text-[40px] md:text-[54px] lg:text-[64px] font-bold leading-[1.1] text-white mb-5 tracking-tight">
            Is your website accessible?<br />Find out in real time
          </h1>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal animation="fade-in-up" delay={300}>
          <p className="text-gray-200 text-[15px] md:text-[16px] leading-[1.75] mb-10 max-w-[680px]">
            Every click counts. But not everyone can click. Get your accessibility score instantly and discover how inaccessible design could be costing you users and revenue.
          </p>
        </ScrollReveal>

        {/* Combined input + button */}
        <ScrollReveal animation="fade-in-up" delay={400} className="w-full flex justify-center px-4">
          <div className="w-full max-w-[80%] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[540px] mb-3">
            <div className="relative w-full">
              {/* Glow behind the box */}
              <div
                className="absolute -inset-[6px] rounded-full pointer-events-none z-0"
                style={{
                  background: "linear-gradient(135deg, rgba(0,212,170,0.35), rgba(0,136,204,0.35))",
                  filter: "blur(14px)",
                }}
              />
              {/* Input + button container */}
              <div
                className="relative z-10 flex items-center rounded-full"
                style={{
                  background: "rgba(8, 12, 24, 0.88)",
                  border: displayError ? "1px solid rgba(239,68,68,0.6)" : "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <input
                  type="url"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                    if (validationError) setValidationError("");
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter your website"
                  className="flex-1 min-w-0 px-7 py-4 bg-transparent text-white text-[14px] outline-none placeholder-gray-500"
                />
                <div className="p-2 flex-shrink-0">
                  <button
                    onClick={validateAndSubmit}
                    className="text-white text-[14px] font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap"
                    style={{ background: "linear-gradient(135deg, #00d4aa, #0088cc)" }}
                  >
                    Start Free Scan
                  </button>
                </div>
              </div>
            </div>

            {/* Error message */}
            {displayError && (
              <p className="mt-2 text-red-400 text-[13px] text-center">{displayError}</p>
            )}
          </div>
        </ScrollReveal>

        {/* Sub-link */}
        <ScrollReveal animation="fade-in-up" delay={500}>
          <a
            href="#why-accessibility"
            className="text-gray-200 hover:text-white transition-colors"
          >
            <span className="text-[15px] md:text-[16px]">What&apos;s included in the analysis?</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ScanHero;
