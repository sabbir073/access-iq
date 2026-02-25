import React from "react";

const TrustedBy = () => {
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
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, #0b0f1a 0%, #0d1320 50%, #0b0f1a 100%)" }}>
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "rgba(0,212,170,0.02)", filter: "blur(200px)" }} />

      <div className="mx-auto container">
        {/* Section Header */}
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

export default TrustedBy;
