import React from "react";
import Image from "next/image";

const steps = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Intake",
    description:
      "We review your templates, key and assistive technology targets",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    ),
    title: "Manual Expert Testing",
    description:
      "Certified accessibility engines conduct in-depth WCAG 2.1AA testing.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Executive Summary",
    description:
      "Get a leadership ready overview of risks, priority, and remediation",
  },
];

const HowAuditWorks = () => {
  return (
    <section className="relative bg-[#f8f9fb] pb-0">
      {/* Divider */}
      <div className="container mx-auto">
        <div className="h-px bg-gray-200" />
      </div>

      <div className="py-16 md:py-24">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-[#0b0f1a] leading-tight">
              How Our Accessibility{" "}
              <span className="gradient-text">Audit Works</span>
            </h2>
            <p className="text-gray-500 text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              We prioritize the end-user pod and assistive technology targets.
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 mt-14">
            {/* Left - Steps as cards */}
            <div className="space-y-5">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex gap-5"
                >
                  {/* Step icon circle */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                    }}
                  >
                    {step.icon}
                  </div>

                  {/* Step content */}
                  <div className="flex-1">
                    <h3 className="text-[#0b0f1a] text-lg font-bold mb-1">
                      Step {index + 1}: {step.title}
                    </h3>
                    <p className="text-gray-500 text-[14px] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right - Trust card (white/light) */}
            <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm h-fit">
              <h3 className="text-[#0b0f1a] text-xl md:text-2xl font-bold mb-6 leading-tight">
                Trusted by leading legal and compliance teams
              </h3>

              {/* Feature list */}
              <div className="space-y-4 mb-8">
                {[
                  "WCAG 2.1 AA aligned",
                  "Human verified & legally — defensible",
                  "Engineering ready Output",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
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
                    <span className="text-gray-500 text-[15px]">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Company logos */}
              <div className="border-t border-gray-100 pt-6">
                <div className="flex items-center gap-5">
                  {[
                    { src: "/images/logos/cisco.svg", alt: "Cisco", h: "h-[22px]" },
                    { src: "/images/logos/hpe.svg", alt: "Hewlett Packard Enterprise", h: "h-[26px]" },
                    { src: "/images/logos/jpmorgan.svg", alt: "J.P.Morgan", h: "h-[20px]" },
                    { src: "/images/logos/salesforce.svg", alt: "Salesforce", h: "h-[22px]" },
                  ].map((logo) => (
                    <Image
                      key={logo.alt}
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={30}
                      className={`${logo.h} w-auto object-contain opacity-60 hover:opacity-100 transition-opacity`}
                    />
                  ))}
                </div>
              </div>
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

export default HowAuditWorks;
