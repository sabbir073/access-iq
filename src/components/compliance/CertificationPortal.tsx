import React from "react";
import Image from "next/image";

const CertificationPortal = () => {
  return (
    <section className="relative bg-[#f8f9fb] pb-0">
      {/* Divider */}
      <div className="container mx-auto">
        <div className="h-px bg-gray-200" />
      </div>

      <div className="py-16 md:py-24">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-[#0b0f1a] leading-tight">
              Your Certification Portal &amp;{" "}
              <span className="gradient-text">Continuous Monitoring</span>
            </h2>
          </div>

          {/* Feature badges row */}
          <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap mb-14">
            {[
              "Reduce Legal Risk",
              "Meet WCAG 2.1 AA",
              "Stay Compliant Automatically",
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="#00d4aa"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-gray-500 text-sm font-medium">
                  {badge}
                </span>
              </div>
            ))}
          </div>

          {/* Main content grid - image left, cards + button right */}
          <div className="grid lg:grid-cols-[42%_58%] gap-8 lg:gap-10 items-center">
            {/* Left - Dashboard image with border glow */}
            <div className="relative">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  border: "3px solid rgba(0,180,220,0.35)",
                  boxShadow:
                    "0 0 30px rgba(0,180,220,0.12), 0 20px 60px rgba(0,0,0,0.08)",
                }}
              >
                <Image
                  src="/images/image-158.png"
                  alt="Certification Portal Dashboard"
                  width={700}
                  height={490}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right - 2 feature cards side by side + button */}
            <div>
              <div className="grid grid-cols-2 gap-5">
                {/* Audit ID Card */}
                <div className="bg-white rounded-2xl p-6 border border-[#d5f0ea] flex flex-col">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(0,212,170,0.10)" }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        stroke="#00d4aa"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 21l-4-4m2-3a5 5 0 11-10 0 5 5 0 0110 0z"
                        stroke="#00d4aa"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <h3 className="text-[#0b0f1a] text-lg font-bold mb-3">
                    Audit ID
                  </h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed">
                    Instant audit overview with certificate, glance score and
                    issue lists.
                  </p>
                </div>

                {/* Real-Time Monitoring Card */}
                <div className="bg-white rounded-2xl p-6 border border-[#d5f0ea] flex flex-col">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "rgba(0,136,204,0.10)" }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        stroke="#0088cc"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <h3 className="text-[#0b0f1a] text-lg font-bold mb-3">
                    Real-Time Monitoring
                  </h3>
                  <p className="text-gray-500 text-[14px] leading-relaxed">
                    Continuous scanning &amp; alerts when compliance issues found
                    or accessibility levels change.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <button
                  className="flex items-center gap-2 text-white text-sm font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
                  style={{
                    background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                  }}
                >
                  View Projects
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationPortal;
