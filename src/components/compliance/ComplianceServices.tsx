"use client";

import React from "react";
import ScrollReveal from "../ScrollReveal";

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M37.0476 36.854C37.1516 35.6372 37.4108 34.676 37.6834 33.7912C37.7298 33.641 37.7786 33.4874 37.8288 33.3304C38.1428 32.3452 38.5 31.2242 38.5 30C38.5 26.9624 36.0376 24.5 33 24.5C29.9624 24.5 27.5 26.9624 27.5 30C27.5 31.2242 27.8572 32.3452 28.1712 33.3304C28.2212 33.4874 28.2702 33.6412 28.3166 33.7912C28.5892 34.676 28.8484 35.6372 28.9524 36.854L24.8516 38.1558C23.3746 38.6248 22.5 40.0516 22.5 41.5086V44C22.5 44.8284 23.1716 45.5 24 45.5H42C42.8284 45.5 43.5 44.8284 43.5 44V41.5086C43.5 40.0516 42.6254 38.6248 41.1484 38.1558L37.0476 36.854ZM30.5 30C30.5 28.6192 31.6192 27.5 33 27.5C34.3808 27.5 35.5 28.6192 35.5 30C35.5 30.725 35.3016 31.3574 34.9844 32.3692C34.9316 32.5374 34.8756 32.7162 34.8166 32.9076C34.5156 33.8844 34.2016 35.0368 34.0674 36.5H31.9326C31.7984 35.0368 31.4844 33.8844 31.1834 32.9076C31.1246 32.7164 31.0686 32.5378 31.0158 32.3696C30.6984 31.3578 30.5 30.725 30.5 30Z" fill="url(#csGrad8a)" fillOpacity="0.8"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M22.1128 2.5C25.7884 2.49998 28.6996 2.49994 30.978 2.80628C33.3228 3.12152 35.2208 3.78576 36.7176 5.28248C38.2142 6.77922 38.8784 8.67712 39.1938 11.022C39.5 13.3004 39.5 16.2117 39.5 19.8872V24.5224C37.9408 22.6742 35.6076 21.5 33 21.5C28.3056 21.5 24.5 25.3056 24.5 30C24.5 31.697 25 34 25.481 34.8086L23.9438 35.2964C21.0464 36.2164 19.5 38.9374 19.5 41.5086V44C19.5 44.5248 19.5898 45.0284 19.7549 45.4966C17.0907 45.485 14.7961 45.4322 13.022 45.1938C10.6771 44.8784 8.77922 44.2142 7.28248 42.7176C5.78576 41.2208 5.12152 39.3228 4.80628 36.978C4.49994 34.6996 4.49998 31.7884 4.5 28.1128V19.8871C4.49998 16.2116 4.49994 13.3004 4.80628 11.022C5.12152 8.67712 5.78576 6.77922 7.28248 5.28248C8.77922 3.78576 10.6771 3.12152 13.022 2.80628C15.3004 2.49994 18.4373 2.49998 22.1128 2.5ZM14 12.5C13.1716 12.5 12.5 13.1716 12.5 14C12.5 14.8284 13.1716 15.5 14 15.5H30C30.8284 15.5 31.5 14.8284 31.5 14C31.5 13.1716 30.8284 12.5 30 12.5H14ZM14 20.5C13.1716 20.5 12.5 21.1716 12.5 22C12.5 22.8284 13.1716 23.5 14 23.5H22C22.8284 23.5 23.5 22.8284 23.5 22C23.5 21.1716 22.8284 20.5 22 20.5H14Z" fill="url(#csGrad8b)" fillOpacity="0.8"/>
        <defs>
          <linearGradient id="csGrad8a" x1="44.8883" y1="35" x2="22.5" y2="35.0077" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3770FD"/><stop offset="0.5" stopColor="#2FB8DC"/><stop offset="1" stopColor="#00E19A"/>
          </linearGradient>
          <linearGradient id="csGrad8b" x1="41.8138" y1="23.9983" x2="4.49997" y2="24.0087" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3770FD"/><stop offset="0.5" stopColor="#2FB8DC"/><stop offset="1" stopColor="#00E19A"/>
          </linearGradient>
        </defs>
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
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12.8494 11.9331C13.1628 12.9923 12.5582 14.105 11.499 14.4183C8.32355 15.3578 7.34231 15.9993 6.85987 16.8302C6.55157 17.3612 6.39811 18.0608 6.57369 19.4454C6.75673 20.8888 7.24841 22.7508 7.97887 25.4924L10.0036 33.0918C10.7341 35.8336 11.234 37.6932 11.793 39.035C12.3293 40.3226 12.8088 40.848 13.3353 41.1502C13.8634 41.4534 14.5651 41.6044 15.9593 41.4218C17.4098 41.232 19.2817 40.732 22.0341 39.9902L22.9795 39.7356C24.0461 39.4482 25.1437 40.0798 25.4309 41.1462C25.7183 42.2128 25.0867 43.3104 24.0203 43.5978L22.9393 43.889C20.3569 44.585 18.2257 45.1592 16.4785 45.388C14.6445 45.628 12.9367 45.5336 11.3438 44.6192C9.74921 43.7038 8.81029 42.277 8.10055 40.5732C7.42537 38.9526 6.85957 36.8286 6.17483 34.2584L4.07733 26.3858C3.39239 23.8152 2.82649 21.6914 2.60547 19.9486C2.37309 18.1161 2.47745 16.4118 3.40067 14.8217C4.77269 12.4587 7.30855 11.4867 10.3642 10.5827C11.4234 10.2693 12.536 10.8739 12.8494 11.9331Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M40.8505 6.56463C39.2541 5.90203 37.1489 5.34119 34.5387 4.64575L32.4187 4.08087C29.8081 3.38531 27.7031 2.82441 25.9877 2.60459C24.2065 2.37637 22.6247 2.48201 21.1641 3.32051C19.7022 4.15973 18.8172 5.47167 18.124 7.12281C17.4572 8.71133 16.8928 10.8057 16.1937 13.4003L14.0902 21.2064C13.3911 23.8008 12.8266 25.8952 12.6054 27.6026C12.3754 29.377 12.4818 30.9558 13.3277 32.4128C14.1729 33.8684 15.4922 34.7474 17.1494 35.4352C18.7457 36.0978 20.8509 36.6586 23.4611 37.354L25.5813 37.919C28.1917 38.6146 30.2967 39.1754 32.0121 39.3952C33.7933 39.6234 35.3753 39.5178 36.8357 38.6792C38.2975 37.84 39.1827 36.5282 39.8757 34.877C40.5427 33.2884 41.1069 31.194 41.8061 28.5994L43.9095 20.7934C44.6087 18.1991 45.1731 16.1046 45.3945 14.3972C45.6243 12.6228 45.5181 11.044 44.6721 9.58705C43.8269 8.13135 42.5075 7.25247 40.8505 6.56463ZM26.1477 12.5822C25.3471 12.3689 24.5253 12.8449 24.3121 13.6454C24.0987 14.4459 24.5747 15.2678 25.3753 15.4811L34.9211 18.0244C35.7217 18.2377 36.5435 17.7617 36.7567 16.9612C36.9701 16.1607 36.4939 15.3388 35.6935 15.1256L26.1477 12.5822ZM24.1015 20.1758C23.3009 19.9625 22.4791 20.4386 22.2659 21.239C22.0525 22.0396 22.5285 22.8614 23.3291 23.0746L28.1019 24.3464C28.9025 24.5596 29.7243 24.0836 29.9375 23.283C30.1509 22.4826 29.6749 21.6608 28.8743 21.4474L24.1015 20.1758Z" fill="white"/>
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
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 15.5C17.797 15.4999 19.3994 15.4999 20.589 15.6598C21.8446 15.8286 22.9782 16.2 23.889 17.1109C24.8 18.0219 25.1714 19.1555 25.3402 20.411C25.5002 21.6006 25.5 23.099 25.5 24.896V26C25.5 26.8284 24.8284 27.5 24 27.5H8C7.17158 27.5 6.5 26.8284 6.5 26V24.896C6.49994 23.099 6.4999 21.6006 6.65982 20.411C6.82864 19.1555 7.19998 18.0219 8.11092 17.1109C9.02186 16.2 10.1555 15.8286 11.411 15.6598C12.6006 15.4999 14.203 15.4999 16 15.5Z" fill="url(#csGrad6a)" fillOpacity="0.8"/>
        <path d="M28.5 26C28.5 22.9624 30.9624 20.5 34 20.5C37.0376 20.5 39.5 22.9624 39.5 26C39.5 29.0376 37.0376 31.5 34 31.5C30.9624 31.5 28.5 29.0376 28.5 26Z" fill="url(#csGrad6b)" fillOpacity="0.8"/>
        <path d="M10.5 8C10.5 4.96244 12.9624 2.5 16 2.5C19.0376 2.5 21.5 4.96244 21.5 8C21.5 11.0376 19.0376 13.5 16 13.5C12.9624 13.5 10.5 11.0376 10.5 8Z" fill="url(#csGrad6c)" fillOpacity="0.8"/>
        <path d="M2.86895 31.2786C3.23629 30.7898 3.82627 30.5 4.45455 30.5H20.091C20.9322 30.5 21.6792 31.0164 21.9452 31.782L25.4088 41.75H31.0454C32.125 41.75 33 42.5894 33 43.625C33 44.6606 32.125 45.5 31.0454 45.5H6.9549L2.60031 32.968C2.40163 32.3962 2.50159 31.7676 2.86895 31.2786Z" fill="url(#csGrad6d)" fillOpacity="0.8"/>
        <path d="M25.9551 35.1876C25.9551 34.152 26.8301 33.3124 27.9095 33.3124H39.6369C42.8753 33.3124 45.5005 35.8308 45.5005 38.9376V39.875C45.5005 42.9816 42.8753 45.5 39.6369 45.5H37.9551C36.8755 45.5 36.0005 44.6606 36.0005 43.625C36.0005 42.5894 36.8755 41.75 37.9551 41.75H39.6369C40.7163 41.75 41.5915 40.9106 41.5915 39.875V38.9376C41.5915 37.902 40.7163 37.0624 39.6369 37.0624H27.9095C26.8301 37.0624 25.9551 36.223 25.9551 35.1876Z" fill="url(#csGrad6e)" fillOpacity="0.8"/>
        <defs>
          <linearGradient id="csGrad6a" x1="26.7561" y1="21.5" x2="6.49999" y2="21.511" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3770FD"/><stop offset="0.5" stopColor="#2FB8DC"/><stop offset="1" stopColor="#00E19A"/>
          </linearGradient>
          <linearGradient id="csGrad6b" x1="40.2272" y1="26" x2="28.5" y2="26.004" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3770FD"/><stop offset="0.5" stopColor="#2FB8DC"/><stop offset="1" stopColor="#00E19A"/>
          </linearGradient>
          <linearGradient id="csGrad6c" x1="22.2272" y1="8" x2="10.5" y2="8.00402" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3770FD"/><stop offset="0.5" stopColor="#2FB8DC"/><stop offset="1" stopColor="#00E19A"/>
          </linearGradient>
          <linearGradient id="csGrad6d" x1="35.0163" y1="38" x2="2.49998" y2="38.0226" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3770FD"/><stop offset="0.5" stopColor="#2FB8DC"/><stop offset="1" stopColor="#00E19A"/>
          </linearGradient>
          <linearGradient id="csGrad6e" x1="46.7926" y1="39.4062" x2="25.9551" y2="39.4176" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3770FD"/><stop offset="0.5" stopColor="#2FB8DC"/><stop offset="1" stopColor="#00E19A"/>
          </linearGradient>
        </defs>
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
          <ScrollReveal animation="fade-in-up">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-[#0b0f1a] leading-tight">
              Our Compliance Services
            </h2>
            <p className="text-gray-500 text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              We provide, ingover pod and assistive technology compliance
              status.
            </p>
          </div>
          </ScrollReveal>

          {/* Services Grid - 3 cards */}
          <ScrollReveal animation="fade-in-up" delay={200} stagger>
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
                          "linear-gradient(150deg, #0a3040 0%, #0b4d50 35%, #0c5f58 65%, #0d6e62 100%)",
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
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ComplianceServices;
