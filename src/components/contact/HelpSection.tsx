import React from "react";

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
    description:
      "Find answers in our knowledge base and detailed guides.",
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
    description:
      "Chat with our support team for immediate assistance.",
    cta: "Start Live Chat",
  },
];

const HelpSection = () => {
  return (
    <section className="relative bg-[#f8f9fb] py-16 md:py-20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-[36px] font-bold text-[#0b0f1a] leading-tight">
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
                  background: "linear-gradient(135deg, #00d4aa, #0088cc)",
                }}
              >
                {card.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
