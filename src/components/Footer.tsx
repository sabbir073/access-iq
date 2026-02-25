import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer-gradient pt-16 pb-8" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="mx-auto container">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/logo-dark.png"
                alt="AccessIQ"
                width={140}
                height={36}
                className="h-[32px] w-auto object-contain"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Enterprise-grade accessibility compliance platform combining AI-driven scanning with certified human audits.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-3">
              {["Features", "Pricing", "Integrations", "API"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Solutions</h4>
            <ul className="space-y-3">
              {["ADA Compliance", "WCAG 2.1", "Section 508", "EN 301 549"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="gradient-line mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo-dark.png"
                alt="AccessIQ"
                width={100}
                height={26}
                className="h-[22px] w-auto object-contain"
              />
            </Link>
            <span className="text-gray-700 text-xs">|</span>
            <p className="text-gray-600 text-xs">
              © 2024 AccessIQ. All rights reserved.
            </p>
          </div>

          {/* Navigation dots / rating indicators */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              {[0, 1, 2, 3, 4].map((dot) => (
                <div
                  key={dot}
                  className="w-2 h-2 rounded-full"
                  style={{ background: dot < 4 ? "#00d4aa" : "#4b5563" }}
                />
              ))}
            </div>
            <span className="text-gray-700 text-xs">|</span>
            <div className="flex items-center gap-4">
              {[
                { name: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
                { name: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" },
                { name: "GitHub", path: "M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="text-gray-600 hover:text-gray-400 transition-colors"
                  aria-label={social.name}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
