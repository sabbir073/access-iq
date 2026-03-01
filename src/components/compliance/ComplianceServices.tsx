import React from "react";

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          stroke="#00d4aa"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Accessibility Audits",
    description:
      "Certified manual audits that identify real world accessibility barriers and compliance gaps.",
    badge: "Certified Reports",
    dark: false,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Remediation Solutions",
    description:
      "Our accessibility engineers fix issues directly in your code — fast, secure. WCAG compliant.",
    badge: "Manual Verification",
    dark: true,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          stroke="#00d4aa"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Continuous Monitoring",
    description:
      "Automated scans and expert oversight to keep your site compliant — month after month.",
    badge: "Continuous Tracking",
    dark: false,
  },
];

const ComplianceServices = () => {
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
          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-[#0b0f1a] leading-tight">
              Our Compliance Services
            </h2>
            <p className="text-gray-500 text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              We provide, ingover pod and assistive technology compliance
              status.
            </p>
          </div>

          {/* Services Grid - 3 cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className={`rounded-2xl p-7 flex flex-col ${
                  service.dark ? "" : "bg-white border border-gray-200/70"
                }`}
                style={
                  service.dark
                    ? {
                        background:
                          "linear-gradient(135deg, #0e7490, #0891b2)",
                      }
                    : undefined
                }
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: service.dark
                      ? "rgba(255,255,255,0.15)"
                      : "rgba(0,212,170,0.10)",
                  }}
                >
                  {service.icon}
                </div>

                <h3
                  className={`text-lg font-bold mb-3 ${
                    service.dark ? "text-white" : "text-[#0b0f1a]"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-[14px] leading-relaxed mb-6 flex-1 ${
                    service.dark ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  {service.description}
                </p>

                {/* Pill badge button */}
                <div
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full w-fit"
                  style={{
                    background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-white text-[13px] font-semibold">
                    {service.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceServices;
