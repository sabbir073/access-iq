"use client";

import React, { useState } from "react";
import AnimatedGradient from "../AnimatedGradient";

const helpCards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          stroke="#00d4aa"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Visit Help Center",
    description: "Find answers in our knowledge base and detailed guides.",
    cta: "Visit Help Center",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          stroke="#0088cc"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Schedule a Demo",
    description:
      "Book a personalized demo with one of our compliance experts.",
    cta: "Book a Demo",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          stroke="#00d4aa"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Live Chat",
    description: "Chat with our support team for immediate assistance.",
    cta: "Start Live Chat",
  },
];

const ContactPageContent = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    businessName: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative overflow-hidden bg-[#0a0e1a]">
      {/* Single animated gradient background for entire page */}
      <AnimatedGradient />

      <div className="relative z-10">
        {/* ====== HERO SECTION ====== */}
        <div className="pt-[100px] pb-10">
          <div className="container mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00d4aa]/20 bg-[#00d4aa]/[0.06] mb-7">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  stroke="#00d4aa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-white text-[13px] font-medium">
                Get in Touch
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[34px] md:text-[42px] lg:text-[50px] font-bold leading-[1.15] text-white mb-6 tracking-tight whitespace-nowrap">
              Talk to an Accessibility Compliance Expert
            </h1>

            {/* Compliance badges */}
            <div className="flex items-center justify-center gap-6">
              {["WCAG 2.1 AA & AA", "ADA"].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"
                      fill="none"
                      stroke="#00d4aa"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M9 12l2 2 4-4"
                      stroke="#00d4aa"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-gray-300 text-[13px] font-medium">
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ====== CONTACT FORM SECTION - Single unified card ====== */}
        <div className="container mx-auto py-10 md:py-16">
          {/* Gradient border wrapper */}
          <div
            className="rounded-2xl p-[2px]"
            style={{
              background:
                "linear-gradient(135deg, #00d4aa, #0088cc, #00d4aa)",
            }}
          >
            {/* Inner card */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, #111d2e 0%, #0c1622 100%)",
              }}
            >
              <div className="grid lg:grid-cols-[42%_58%]">
                {/* Left - Contact Information */}
                <div className="p-7 md:p-9 lg:border-r lg:border-white/8">
                <h2 className="text-white text-xl font-bold mb-8">
                  Contact Information
                </h2>

                <div className="space-y-5">
                  {/* Email */}
                  <div
                    className="rounded-xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-2">
                      Email
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#00d4aa]/10">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <rect x="2" y="4" width="20" height="16" rx="3" stroke="#00d4aa" strokeWidth="1.5" />
                          <path d="M2 7l10 7 10-7" stroke="#00d4aa" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm">
                        info@getaccessiq.com
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div
                    className="rounded-xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-2">
                      Phone Number
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#00d4aa]/10">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#00d4aa" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm">
                        +1 833-362-5610
                      </span>
                    </div>
                  </div>

                  {/* Address */}
                  <div
                    className="rounded-xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-2">
                      Address
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#00d4aa]/10 shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#00d4aa" strokeWidth="1.5" />
                          <circle cx="12" cy="10" r="3" stroke="#00d4aa" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <span className="text-gray-300 text-sm leading-relaxed">
                        7160 Squirebeam Dr, ste 80 # 350,
                        <br />
                        Sterling, VA 20166
                      </span>
                    </div>
                  </div>

                  {/* Service Hours */}
                  <div
                    className="rounded-xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-2">
                      Service Hours :
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Monday - Friday 9AM - EST
                      <br />
                      Saturday 9AM - 5 PM EST
                    </p>
                  </div>

                  {/* Support 24/7 */}
                  <div
                    className="rounded-xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-2">
                      Support 24/7
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Our experts are available around the clock by email
                      and live chat.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right - Contact Form */}
              <div className="p-7 md:p-9 border-t lg:border-t-0 border-white/8">
                <h2 className="text-white text-xl font-bold mb-6">
                  Request Your Consultation
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* First Name */}
                  <div>
                    <label className="text-gray-400 text-xs font-medium uppercase tracking-wider block mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full bg-[#0b1120] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#00d4aa]/40 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-gray-400 text-xs font-medium uppercase tracking-wider block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full bg-[#0b1120] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#00d4aa]/40 transition-colors"
                    />
                  </div>

                  {/* Business Name */}
                  <div>
                    <label className="text-gray-400 text-xs font-medium uppercase tracking-wider block mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full bg-[#0b1120] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#00d4aa]/40 transition-colors"
                    />
                  </div>

                  {/* Service dropdown */}
                  <div>
                    <label className="text-gray-400 text-xs font-medium uppercase tracking-wider block mb-2">
                      What kind of service are you looking for?
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-[#0b1120] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#00d4aa]/40 transition-colors appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%236b7280' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                      }}
                    >
                      <option value="" className="bg-[#0b1120]">
                        What kind of service are you looking for?
                      </option>
                      <option value="audit" className="bg-[#0b1120]">
                        Accessibility Audit
                      </option>
                      <option value="remediation" className="bg-[#0b1120]">
                        Remediation
                      </option>
                      <option value="monitoring" className="bg-[#0b1120]">
                        Continuous Monitoring
                      </option>
                      <option value="consultation" className="bg-[#0b1120]">
                        Compliance Consultation
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-gray-400 text-xs font-medium uppercase tracking-wider block mb-2">
                      Anything else you&apos;d like to share?
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Anything else you'd like to share?"
                      rows={4}
                      className="w-full bg-[#0b1120] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-[#00d4aa]/40 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex items-center justify-end gap-4">
                    <button
                      type="submit"
                      className="flex items-center gap-2 text-white text-sm font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
                      style={{
                        background:
                          "linear-gradient(135deg, #00d4aa, #0088cc)",
                      }}
                    >
                      Submit Inquiry
                    </button>
                  </div>
                  <p className="text-gray-500 text-xs text-right">
                    Our team will respond within one business day.
                  </p>
                </form>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* ====== HELP SECTION ====== */}
        <div className="container mx-auto pb-24 md:pb-32">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-white leading-tight">
              Have Questions? We&apos;re Here to Help!
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {helpCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-6 border border-[#d5f0ea] flex flex-col"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(0,212,170,0.10)" }}
                >
                  {card.icon}
                </div>

                <h3 className="text-[#0b0f1a] text-lg font-bold mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-5 flex-1">
                  {card.description}
                </p>

                {/* CTA */}
                <button
                  className="flex items-center gap-2 text-white text-[13px] font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity w-fit"
                  style={{
                    background:
                      "linear-gradient(135deg, #00d4aa, #0088cc)",
                  }}
                >
                  {card.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageContent;
