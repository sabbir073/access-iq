"use client";

import React, { useState } from "react";

const ContactSection = () => {
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
    <section className="relative bg-[#f8f9fb]">
      <div className="container mx-auto relative z-10 py-10 md:py-16">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left - Contact Information */}
          <div className="bg-white rounded-2xl p-7 md:p-9 border border-[#d5f0ea]">
            <h2 className="text-[#0b0f1a] text-xl font-bold mb-8">
              Contact Information
            </h2>

            <div className="space-y-6">
              {/* Email */}
              <div
                className="rounded-xl p-4"
                style={{ background: "#f4faf8" }}
              >
                <div className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-2">
                  Email
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#00d4aa]/10">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        x="2"
                        y="4"
                        width="20"
                        height="16"
                        rx="3"
                        stroke="#00d4aa"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M2 7l10 7 10-7"
                        stroke="#00d4aa"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <span className="text-[#0b0f1a] text-sm">
                    info@getaccessiq.com
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div
                className="rounded-xl p-4"
                style={{ background: "#f4faf8" }}
              >
                <div className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-2">
                  Phone Number
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#00d4aa]/10">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                        stroke="#00d4aa"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <span className="text-[#0b0f1a] text-sm">
                    +1 833-362-5610
                  </span>
                </div>
              </div>

              {/* Address */}
              <div
                className="rounded-xl p-4"
                style={{ background: "#f4faf8" }}
              >
                <div className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-2">
                  Address
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[#00d4aa]/10 shrink-0">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                        stroke="#00d4aa"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="3"
                        stroke="#00d4aa"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <span className="text-[#0b0f1a] text-sm leading-relaxed">
                    7160 Squirebeam Dr, ste 80 # 350,
                    <br />
                    Sterling, VA 20166
                  </span>
                </div>
              </div>

              {/* Service Hours */}
              <div
                className="rounded-xl p-4"
                style={{ background: "#f4faf8" }}
              >
                <div className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-2">
                  Service Hours :
                </div>
                <p className="text-[#0b0f1a] text-sm leading-relaxed">
                  Monday - Friday 9AM - EST
                  <br />
                  Saturday 9AM - 5 PM EST
                </p>
              </div>

              {/* Support 24/7 */}
              <div
                className="rounded-xl p-4"
                style={{ background: "#f4faf8" }}
              >
                <div className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-2">
                  Support 24/7
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our experts are available around the clock by email and live
                  chat.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white rounded-2xl p-7 md:p-9 border border-[#d5f0ea]">
            <h2 className="text-[#0b0f1a] text-xl font-bold mb-6">
              Request Your Consultation
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* First Name */}
              <div>
                <label className="text-gray-500 text-xs font-medium uppercase tracking-wider block mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full bg-[#f4faf8] border border-[#d5f0ea] rounded-xl px-4 py-3 text-[#0b0f1a] text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#00d4aa]/60 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-gray-500 text-xs font-medium uppercase tracking-wider block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full bg-[#f4faf8] border border-[#d5f0ea] rounded-xl px-4 py-3 text-[#0b0f1a] text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#00d4aa]/60 transition-colors"
                />
              </div>

              {/* Business Name */}
              <div>
                <label className="text-gray-500 text-xs font-medium uppercase tracking-wider block mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="What kind of service are you looking for?"
                  className="w-full bg-[#f4faf8] border border-[#d5f0ea] rounded-xl px-4 py-3 text-[#0b0f1a] text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#00d4aa]/60 transition-colors"
                />
              </div>

              {/* Service dropdown */}
              <div>
                <label className="text-gray-500 text-xs font-medium uppercase tracking-wider block mb-2">
                  What kind of service are you looking for?
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-[#f4faf8] border border-[#d5f0ea] rounded-xl px-4 py-3 text-[#0b0f1a] text-sm focus:outline-none focus:border-[#00d4aa]/60 transition-colors appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%236b7280' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                  }}
                >
                  <option value="">
                    What kind of service are you looking for?
                  </option>
                  <option value="audit">Accessibility Audit</option>
                  <option value="remediation">Remediation</option>
                  <option value="monitoring">Continuous Monitoring</option>
                  <option value="consultation">
                    Compliance Consultation
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-gray-500 text-xs font-medium uppercase tracking-wider block mb-2">
                  Anything else you&apos;d like to share?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Anything else you'd like to share?"
                  rows={4}
                  className="w-full bg-[#f4faf8] border border-[#d5f0ea] rounded-xl px-4 py-3 text-[#0b0f1a] text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#00d4aa]/60 transition-colors resize-none"
                />
              </div>

              {/* Submit */}
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="flex items-center gap-2 text-white text-sm font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
                  style={{
                    background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                  }}
                >
                  Submit Inquiry
                </button>
                <p className="text-gray-400 text-xs">
                  Our team will respond within one business day.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
