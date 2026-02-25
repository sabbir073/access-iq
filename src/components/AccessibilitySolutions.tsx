import React from "react";
import Image from "next/image";
import LogoMarquee from "./LogoMarquee";

const AccessibilitySolutions = () => {
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
      {/* Company logos - infinite scroll marquee */}
      <div className="pt-10 pb-8">
        <LogoMarquee />
      </div>

      {/* Divider */}
      <div className="container mx-auto">
        <div className="h-px bg-gray-200" />
      </div>

      <div className="py-16 md:py-24">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0b0f1a] leading-tight">
              Accessibility Solutions for
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold leading-tight mt-1">
              <span className="gradient-text">Enterprise Teams</span>
            </h2>
          </div>

          {/* Process Steps Bar - inside a card */}
          <div className="flex justify-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-gray-200 shadow-sm flex-wrap justify-center">
              {[
                { icon: "search", label: "Scan" },
                { icon: "check", label: "Audit" },
                { icon: "check", label: "Fix" },
                { icon: "chart", label: "Monitor" },
                { icon: "check", label: "Certify" },
              ].map((step, i) => (
                <React.Fragment key={step.label}>
                  <div className="flex items-center gap-1.5">
                    {step.icon === "search" ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="#6b7280" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    ) : step.icon === "chart" ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M4 20h16M4 20V4m0 16l4-4 4 2 4-6 4-2" stroke="#0088cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <div className="w-4 h-4 rounded-sm flex items-center justify-center" style={{ background: "#0088cc" }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                          <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                    <span className="text-[#1e293b] text-sm font-medium">{step.label}</span>
                  </div>
                  {i < 4 && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-300">
                      <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </React.Fragment>
              ))}
              <div className="w-px h-5 bg-gray-200 mx-1" />
              <button className="text-[#0088cc] text-sm font-medium px-4 py-1.5 rounded-full border border-[#0088cc]/30 hover:bg-[#0088cc]/5 transition-colors">
                View Process
              </button>
            </div>
          </div>

          {/* ============ ITEM 1: ADA & WCAG Compliance ============ */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
            {/* Left - Text content */}
            <div>
              <h3 className="text-[#0b0f1a] text-2xl md:text-[28px] font-bold mb-5">
                ADA &amp; WCAG Compliance
              </h3>
              <div className="space-y-3 mb-7">
                {[
                  "Verify WCAG 2.1 AA & ADA Standards",
                  "Reduce Legal Exposure & Risk",
                  "Continues Accessibility Monitoring",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0">
                      <path d="M5 13l4 4L19 7" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-gray-600 text-[15px]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 mb-5">
                <button className="flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity" style={{ background: "linear-gradient(135deg, #00d4aa, #0088cc)" }}>
                  Start Free Scan
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              <a href="#" className="flex items-center gap-1.5 text-[#0088cc] text-sm font-medium hover:underline mb-6">
                View Compliance Report
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="#0088cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              {/* Compliance badges image */}
              <Image
                src="/images/image-159.png"
                alt="WCAG 2.1, ADA, SCO Compliance Badges"
                width={340}
                height={48}
                className="h-[40px] w-auto object-contain"
              />
            </div>

            {/* Right - Dashboard image */}
            <div className="relative overflow-visible">
              <Image
                src="/images/image-158.png"
                alt="ADA & WCAG Compliance Dashboard"
                width={600}
                height={420}
                className="w-full h-auto rounded-2xl"
              />
              {/* Floating AI badge - half outside, half inside image, top-right corner */}
              <div
                className="absolute z-10 rounded-2xl px-5 py-4 right-5"
                style={{
                  background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                  top: "-32px",
                }}
              >
                <div className="text-white text-sm font-medium mb-1">AI Aided Audit</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-white text-3xl font-bold leading-tight">800+</span>
                  <span className="text-white/80 text-xs">Issues<br/>Scanned</span>
                </div>
              </div>
            </div>
          </div>

          {/* ============ ITEM 2: Reduce Legal Risk ============ */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
            {/* Left - Image */}
            <div className="order-2 lg:order-1">
              <Image
                src="/images/dashboard-risk.png"
                alt="ADA Risk Level Dashboard"
                width={600}
                height={420}
                className="w-full h-auto rounded-2xl"
              />
            </div>

            {/* Right - Text content */}
            <div className="order-1 lg:order-2 lg:pl-4">
              <h3 className="text-[#0b0f1a] text-2xl md:text-[28px] font-bold mb-5">
                Reduce Legal Risk
              </h3>
              <div className="space-y-3 mb-7">
                {[
                  "Proactive ADA & Section 508 monitoring",
                  "Certified compliance documentation",
                  "Real-time risk assessment dashboard",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0">
                      <path d="M5 13l4 4L19 7" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-gray-600 text-[15px]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 mb-5">
                <button className="flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity" style={{ background: "linear-gradient(135deg, #00d4aa, #0088cc)" }}>
                  Get Risk Report
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <a href="#" className="flex items-center gap-1.5 text-[#0088cc] text-sm font-medium hover:underline">
                View Legal Resources
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="#0088cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ============ ITEM 3: Fast & Reliable Fixes ============ */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left - Text content */}
            <div>
              <h3 className="text-[#0b0f1a] text-2xl md:text-[28px] font-bold mb-5">
                Fast &amp; Reliable Fixes
              </h3>
              <div className="space-y-3 mb-7">
                {[
                  "AI-powered fix recommendations",
                  "One-click code snippets & implementation",
                  "Developer-friendly integration guides",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0">
                      <path d="M5 13l4 4L19 7" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-gray-600 text-[15px]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 mb-5">
                <button className="flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity" style={{ background: "linear-gradient(135deg, #00d4aa, #0088cc)" }}>
                  Try Auto-Fix
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <a href="#" className="flex items-center gap-1.5 text-[#0088cc] text-sm font-medium hover:underline">
                View Documentation
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14m-7-7l7 7-7 7" stroke="#0088cc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Right - Chart image */}
            <div>
              <Image
                src="/images/chart-large.png"
                alt="Accessibility Issues Over Time"
                width={600}
                height={420}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessibilitySolutions;
