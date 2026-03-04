import React from "react";
import Image from "next/image";

const PricingCTA = () => {
  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #020408 0%, #040810 30%, #050a12 50%, #040810 70%, #020408 100%)",
      }}
    >
      <div className="container mx-auto">
        <div className="relative">
          {/* The card */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(0,212,170,0.15)" }}
          >
            {/* Gradient background */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #0a8a7a 0%, #0c7a8a 20%, #1565a0 50%, #2855a0 70%, #4060b0 100%)",
              }}
            />

            {/* Subtle overlay glows */}
            <div
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 0% 50%, rgba(0,212,170,0.3) 0%, transparent 50%)",
              }}
            />
            <div
              className="absolute top-0 right-0 w-full h-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 100% 0%, rgba(80,120,200,0.3) 0%, transparent 50%)",
              }}
            />

            {/* Bottom center white glow */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[75%] pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.6) 8%, rgba(255,255,255,0.35) 18%, rgba(255,255,255,0.15) 32%, rgba(255,255,255,0.05) 48%, transparent 65%)",
                filter: "blur(8px)",
              }}
            />
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[45%] pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 100%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 20%, rgba(255,255,255,0.1) 45%, transparent 65%)",
                filter: "blur(5px)",
              }}
            />

            {/* Favicon icon - top right corner, rotated */}
            <div
              className="absolute -top-6 -right-12 md:-top-4 md:-right-10 pointer-events-none"
              style={{ opacity: 0.08, transform: "rotate(-30deg)" }}
            >
              <Image
                src="/images/favicon-icon.png"
                alt=""
                width={200}
                height={200}
                className="w-[160px] h-[160px] md:w-[200px] md:h-[200px]"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 px-8 md:px-16 py-14 md:py-16 text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/[0.08] mb-6">
                <span className="text-white text-[13px] font-medium">
                  Final CTA
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl lg:text-[42px] font-bold text-white mb-4 leading-tight">
                Get Started with Verified
                <br />
                Accessibility Today
              </h2>
              <p className="text-white/85 text-base max-w-xl mx-auto mb-8">
                Run a free scan, request a manual audit, or talk to an expert —
                fast, reliable, and US-compliant.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <button
                  className="inline-flex items-center gap-2 text-[#0b1a2a] font-semibold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors text-sm cursor-pointer"
                  style={{ background: "white" }}
                >
                  Run Free Scan
                </button>
                <button className="inline-flex items-center gap-2 text-white font-semibold px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity text-sm cursor-pointer border border-white/30 bg-white/[0.08]">
                  Request Manual Audit
                </button>
              </div>
            </div>
          </div>

          {/* Shadow glow below CTA */}
          <div
            className="absolute bottom-0 left-0 w-full h-[50px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(0,212,170,0.8) 0%, rgba(0,180,216,0.5) 10%, rgba(0,136,204,0.25) 25%, rgba(0,180,216,0.1) 45%, rgba(0,136,204,0.03) 65%, transparent 85%)",
              filter: "blur(8px)",
              transform: "translateY(100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
