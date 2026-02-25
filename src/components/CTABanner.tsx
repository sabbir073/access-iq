import React from "react";

const CTABanner = () => {
  return (
    <section className="relative py-20 md:py-28" style={{ background: "linear-gradient(180deg, #0b0f1a 0%, #0d1320 100%)" }}>
      <div className="mx-auto container">
        {/* CTA Card */}
        <div className="relative rounded-2xl overflow-hidden">
          {/* Background gradient */}
          <div className="cta-gradient absolute inset-0" />

          {/* Glow effects */}
          <div className="absolute top-0 w-[300px] h-[300px] rounded-full pointer-events-none" style={{ right: "25%", background: "rgba(0,212,170,0.1)", filter: "blur(100px)" }} />
          <div className="absolute bottom-0 w-[200px] h-[200px] rounded-full pointer-events-none" style={{ left: "33%", background: "rgba(0,136,204,0.1)", filter: "blur(80px)" }} />

          {/* Border glow */}
          <div className="absolute inset-0 rounded-2xl" style={{ border: "1px solid rgba(0,212,170,0.2)" }} />

          {/* Content */}
          <div className="relative px-8 md:px-16 py-14 md:py-16 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Get Your Verified Accessibility
              <br />
              <span className="gradient-text">Report Today</span>
            </h2>
            <p className="text-base max-w-xl mx-auto mb-8" style={{ color: "rgba(209,213,219,0.8)" }}>
              Start your journey to full accessibility compliance with a comprehensive
              audit from our certified experts.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="bg-white text-[#0b0f1a] font-semibold px-8 py-3.5 rounded-lg hover:bg-gray-100 transition-colors text-sm cursor-pointer">
                Start Free Audit
              </button>
              <button className="text-white font-medium px-8 py-3.5 rounded-lg transition-all text-sm cursor-pointer" style={{ border: "1px solid rgba(255,255,255,0.3)" }}>
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
