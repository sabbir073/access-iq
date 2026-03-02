import React from "react";
import Image from "next/image";

const ExpertAudit = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: "linear-gradient(180deg, #0c1420 0%, #0b1120 50%, #0b0f1a 100%)" }}>
      {/* Background glows */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: "rgba(0,212,170,0.03)", filter: "blur(200px)" }} />

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-teal mb-6">
              <span className="text-[#00d4aa] text-xs font-medium tracking-wide">Expert Certification</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
              Expert audit completed
              <br />
              <span className="gradient-text">by certified professionals</span>
            </h2>

            <p className="text-gray-400 text-[15px] leading-relaxed mb-8 max-w-lg">
              Our team of certified accessibility experts manually reviews every aspect of your website,
              going beyond what automated tools can detect to ensure true compliance.
            </p>

            {/* Feature list */}
            <div className="space-y-4 mb-10">
              {[
                "WCAG 2.1 Level AA certified auditors",
                "Manual testing with assistive technologies",
                "Detailed remediation roadmap included",
                "Legal-ready compliance documentation",
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,212,170,0.1)" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="#00d4aa" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <button
              className="text-white font-semibold px-8 py-3.5 rounded-lg hover:opacity-90 transition-opacity text-sm cursor-pointer"
              style={{ background: "linear-gradient(90deg, #00d4aa, #0088cc)" }}
            >
              Learn More
            </button>
          </div>

          {/* Right - Certificate & Person */}
          <div className="relative">
            {/* Certificate Image */}
            <div className="relative">
              <Image
                src="/images/cert-image.png"
                alt="Accessibility Compliance Certificate"
                width={700}
                height={500}
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* Person testimonial card - overlapping bottom-left */}
            <div className="absolute -bottom-6 -left-2 md:left-6 rounded-xl p-4 flex items-center gap-4 max-w-[280px] shadow-xl backdrop-blur-sm" style={{ background: "linear-gradient(135deg, #131d2b, #0f1822)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0" style={{ border: "2px solid rgba(0,212,170,0.2)" }}>
                <Image
                  src="/images/person.png"
                  alt="Expert auditor"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-white text-sm font-semibold">Ronny Feugleicht</div>
                <div className="text-gray-400 text-xs mb-1">Lead Accessibility Auditor</div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertAudit;
