"use client";

import React from "react";
import Image from "next/image";

const DigitalAccessibility = () => {
  const industries = [
    { name: "Healthcare", icon: "🏥", desc: "HIPAA compliant" },
    { name: "Finance", icon: "🏦", desc: "SOX ready" },
    { name: "Education", icon: "🎓", desc: "Section 508" },
    { name: "E-Commerce", icon: "🛒", desc: "ADA compliant" },
    { name: "Government", icon: "🏛️", desc: "WCAG 2.1 AA" },
    { name: "Technology", icon: "💻", desc: "Enterprise" },
    { name: "Media", icon: "📱", desc: "Multi-platform" },
    { name: "Non-Profit", icon: "🤝", desc: "Inclusive" },
  ];

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #060e1a 0%, #0a1628 30%, #0c1a2e 50%, #0a1628 70%, #060e1a 100%)",
      }}
    >
      {/* Heavy gradient glow: heading area flowing down to bottom-left */}
      <div
        className="absolute top-0 left-0 w-[900px] h-[900px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 30% 40%, rgba(0,212,170,0.22) 0%, rgba(0,180,216,0.12) 30%, rgba(0,136,204,0.06) 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      {/* Strong teal glow at bottom-left of chart area */}
      <div
        className="absolute top-[40%] left-0 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 60%, rgba(0,212,170,0.25) 0%, rgba(0,180,216,0.15) 25%, rgba(0,136,204,0.06) 50%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />
      {/* Glow at bottom-right corner of image area */}
      <div
        className="absolute top-[35%] right-[30%] w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,136,204,0.18) 0%, rgba(0,212,170,0.08) 40%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="container mx-auto">
        {/* Section Header - Title left, Description right */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-14">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight">
              Digital Accessibility
            </h2>
            <p className="text-2xl md:text-3xl lg:text-[32px] font-bold leading-tight mt-3">
              <span className="gradient-text">Services You Can Trust</span>
            </p>
          </div>
          <p className="text-gray-400 text-base max-w-md leading-relaxed lg:pb-1">
            Track and improve your website&apos;s accessibility with real-time insights and comprehensive audits. We help you stay ahead of ADA &amp; WCAG compliance and eliminate legal risks.
          </p>
        </div>

        {/* Main Content - Chart left, Stats right */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Left - Chart Image with glow border */}
          <div className="relative">
            {/* Animated gradient glow - bottom-left of image */}
            <div
              className="absolute -bottom-20 -left-20 w-[450px] h-[450px] rounded-full pointer-events-none z-0 digital-glow-1"
              style={{
                background: "radial-gradient(circle, rgba(0,212,170,0.4) 0%, rgba(0,180,216,0.22) 35%, transparent 70%)",
                filter: "blur(50px)",
              }}
            />
            {/* Animated gradient glow - bottom-right of image */}
            <div
              className="absolute -bottom-12 -right-12 w-[400px] h-[400px] rounded-full pointer-events-none z-0 digital-glow-2"
              style={{
                background: "radial-gradient(circle, rgba(0,136,204,0.35) 0%, rgba(0,212,170,0.15) 40%, transparent 70%)",
                filter: "blur(45px)",
              }}
            />

            {/* Image with 5px glow border */}
            <div className="relative z-10 h-full p-[5px]"
              style={{
                borderRadius: "16px",
                background: "linear-gradient(135deg, rgba(0,212,170,0.6), rgba(0,136,204,0.4), rgba(0,212,170,0.3))",
                boxShadow: "0 0 20px rgba(0, 212, 170, 0.3), 0 0 40px rgba(0, 136, 204, 0.15)",
              }}
            >
              <Image
                src="/images/image-163.png"
                alt="Accessibility Issues Over Time"
                width={800}
                height={520}
                className="w-full h-full object-cover"
                style={{ borderRadius: "11px" }}
              />
            </div>
          </div>

          {/* Right - Stat Cards */}
          <div className="flex flex-col gap-4">
            {/* Top row - 2 cards */}
            <div className="grid grid-cols-2 gap-4 flex-1">
              <div
                className="flex flex-col justify-center px-6 py-5"
                style={{
                  borderRadius: "16px",
                  background: "linear-gradient(180deg, #111d2e 0%, #0c1622 100%)",
                  border: "1px solid rgba(0, 212, 170, 0.12)",
                }}
              >
                <div className="text-gray-400 text-xs font-medium tracking-wide uppercase mb-3">WCAG Compliance</div>
                <div className="text-4xl font-bold gradient-text">87%</div>
              </div>
              <div
                className="flex flex-col justify-center px-6 py-5"
                style={{
                  borderRadius: "16px",
                  background: "linear-gradient(180deg, #111d2e 0%, #0c1622 100%)",
                  border: "1px solid rgba(0, 212, 170, 0.12)",
                }}
              >
                <div className="text-gray-400 text-xs font-medium tracking-wide uppercase mb-3">Critical Issues Found</div>
                <div className="text-4xl font-bold text-white">12</div>
              </div>
            </div>

            {/* Middle row - 2 cards */}
            <div className="grid grid-cols-2 gap-4 flex-1">
              <div
                className="flex flex-col justify-center px-6 py-5"
                style={{
                  borderRadius: "16px",
                  background: "linear-gradient(180deg, #111d2e 0%, #0c1622 100%)",
                  border: "1px solid rgba(0, 212, 170, 0.12)",
                }}
              >
                <div className="text-gray-400 text-xs font-medium tracking-wide uppercase mb-3">Pages Scanned</div>
                <div className="text-4xl font-bold gradient-text">1,248</div>
              </div>
              <div
                className="flex flex-col justify-center px-6 py-5"
                style={{
                  borderRadius: "16px",
                  background: "linear-gradient(180deg, #111d2e 0%, #0c1622 100%)",
                  border: "1px solid rgba(0, 212, 170, 0.12)",
                }}
              >
                <div className="text-gray-400 text-xs font-medium tracking-wide uppercase mb-3">Avg. Fix Time</div>
                <div className="text-4xl font-bold text-white">
                  2.1 <span className="text-lg font-normal text-gray-400">Days</span>
                </div>
              </div>
            </div>

            {/* Bottom - Average Fix Time + CTA */}
            <div
              className="flex flex-col justify-center px-6 py-5"
              style={{
                borderRadius: "16px",
                background: "linear-gradient(180deg, #111d2e 0%, #0c1622 100%)",
                border: "1px solid rgba(0, 212, 170, 0.12)",
              }}
            >
              <div className="text-gray-400 text-xs font-medium tracking-wide uppercase mb-3">Average Fix Time</div>
              <button
                className="flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 hover:opacity-90 transition-opacity"
                style={{
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                  width: "fit-content",
                }}
              >
                Get Accessibility Report
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Expert Audit Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-28 mb-28">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight">
              Expert audit completed.
            </h2>
            <p className="text-2xl md:text-3xl lg:text-[32px] font-bold leading-tight mt-3 mb-6">
              <span className="gradient-text">Verified. Certified.</span>
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-md">
              Following the expert audit, clients receive a verifiable accessibility and access to a citification portal that supports audits. and compliance tracking.
            </p>

            <button
              className="flex items-center gap-2 text-white font-semibold px-7 py-3.5 hover:opacity-90 transition-opacity text-sm cursor-pointer"
              style={{
                borderRadius: "12px",
                background: "linear-gradient(135deg, #00d4aa, #0088cc)",
              }}
            >
              Certificate portal
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Right - Certificate with glow border */}
          <div className="relative">
            {/* Hard bright glow - bottom-left corner */}
            <div
              className="absolute -bottom-10 -left-10 w-[250px] h-[250px] rounded-full pointer-events-none z-0 digital-glow-1"
              style={{
                background: "radial-gradient(circle, rgba(0,212,170,0.9) 0%, rgba(0,212,170,0.6) 20%, rgba(0,180,216,0.3) 40%, transparent 65%)",
                filter: "blur(25px)",
              }}
            />
            {/* Wider soft glow behind bottom-left */}
            <div
              className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none z-0"
              style={{
                background: "radial-gradient(circle, rgba(0,212,170,0.4) 0%, rgba(0,180,216,0.2) 30%, transparent 60%)",
                filter: "blur(50px)",
              }}
            />
            {/* Hard bright glow - bottom-right corner */}
            <div
              className="absolute -bottom-10 -right-10 w-[250px] h-[250px] rounded-full pointer-events-none z-0 digital-glow-2"
              style={{
                background: "radial-gradient(circle, rgba(0,180,216,0.85) 0%, rgba(0,136,204,0.55) 20%, rgba(0,212,170,0.25) 40%, transparent 65%)",
                filter: "blur(25px)",
              }}
            />
            {/* Wider soft glow behind bottom-right */}
            <div
              className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none z-0"
              style={{
                background: "radial-gradient(circle, rgba(0,136,204,0.35) 0%, rgba(0,212,170,0.15) 30%, transparent 60%)",
                filter: "blur(50px)",
              }}
            />

            {/* Certificate with 5px glow border */}
            <div className="relative z-10 p-[5px]"
              style={{
                borderRadius: "16px",
                background: "linear-gradient(180deg, rgba(0,212,170,0.8) 0%, rgba(0,180,216,0.6) 30%, rgba(0,136,204,0.7) 70%, rgba(0,212,170,0.8) 100%)",
                boxShadow: "0 0 40px rgba(0, 212, 170, 0.5), 0 0 80px rgba(0, 136, 204, 0.3), 0 0 120px rgba(0, 212, 170, 0.2)",
              }}
            >
              <Image
                src="/images/certificate.png"
                alt="Certificate of Accessibility Compliance"
                width={700}
                height={490}
                className="w-full h-auto"
                style={{ borderRadius: "11px" }}
              />
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Trusted by{" "}
            <span className="gradient-text">industry leaders</span>
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mx-auto leading-relaxed">
            Organizations across industries trust AccessIQ to maintain their accessibility compliance
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="rounded-xl p-5 text-center card-hover cursor-default"
              style={{ background: "linear-gradient(180deg, #111927, #0e1621)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="text-2xl mb-2">{industry.icon}</div>
              <div className="text-white text-sm font-medium mb-0.5">{industry.name}</div>
              <div className="text-gray-500 text-[11px]">{industry.desc}</div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-2 mb-14">
          {[0, 1, 2, 3, 4].map((dot) => (
            <div
              key={dot}
              className="rounded-full transition-all"
              style={dot === 0
                ? { width: 24, height: 8, background: "linear-gradient(90deg, #00d4aa, #0088cc)" }
                : { width: 8, height: 8, background: "#4b5563" }
              }
            />
          ))}
        </div>

        {/* Divider */}
        <div className="gradient-line mb-12" />

        {/* Client logos row */}
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {["Google", "Microsoft", "Amazon", "Meta", "Apple"].map((brand) => (
            <span key={brand} className="text-gray-600 text-lg font-semibold tracking-wider hover:text-gray-400 transition-colors cursor-default">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalAccessibility;
