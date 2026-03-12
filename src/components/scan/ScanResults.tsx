"use client";

import React from "react";
import Image from "next/image";
import AnimatedGradient from "../AnimatedGradient";

interface Violation {
  id: string;
  description: string;
  help: string;
  helpUrl: string;
  impact: "critical" | "serious" | "moderate" | "minor" | null;
  nodes: Array<{ html: string; target: string[] }>;
}

interface ScanResultsProps {
  results: {
    url: string;
    scannedAt: string;
    score: number;
    violations: Violation[];
    passes: number;
    incomplete: number;
  };
  onRescan: () => void;
}

// Impact → left border color, icon color, badge style, badge label
const IMPACT_STYLE: Record<string, { borderColor: string; iconColor: string; badgeBg: string; badgeText: string; label: string }> = {
  critical: { borderColor: "#ef4444", iconColor: "#ef4444", badgeBg: "#ef4444",   badgeText: "#fff",     label: "High priority" },
  serious:  { borderColor: "#f97316", iconColor: "#f97316", badgeBg: "#f97316",   badgeText: "#fff",     label: "High priority" },
  moderate: { borderColor: "#eab308", iconColor: "#eab308", badgeBg: "#eab308",   badgeText: "#fff",     label: "Medium priority" },
  minor:    { borderColor: "#3b82f6", iconColor: "#3b82f6", badgeBg: "#3b82f6",   badgeText: "#fff",     label: "Low priority" },
};

const LAWS = [
  {
    showFlag: true,
    borderColor: "#1e3a5f",
    badges: [{ text: "ADA", bg: "#1e3a5f", color: "#fff" }, { text: "Europe", bg: "transparent", color: "#1e3a5f", border: "#1e3a5f" }],
    title: <><span className="font-bold text-[#0b0f1a] text-[16px]">ADA</span>{" "}<span className="font-normal text-gray-500 text-[14px]">Americans with</span>{" "}<span className="font-bold text-[#0b0f1a] text-[16px]">Disabilities Act</span></>,
    desc: "Requires websites and apps of public and many private businesses to be accessible",
    cta: "Talk to an ADA expert",
  },
  {
    showFlag: true,
    borderColor: "#1e3a5f",
    badges: [{ text: "ADA", bg: "#1e3a5f", color: "#fff" }, { text: "Europe", bg: "transparent", color: "#1e3a5f", border: "#1e3a5f" }],
    title: <span className="font-bold text-[#0b0f1a] text-[16px]">Section 508</span>,
    desc: "Mandates that federal government websites and digital content be accessible",
    cta: "Contact a 508 specialist",
  },
  {
    showFlag: true,
    borderColor: "#1e3a5f",
    badges: [{ text: "ADA", bg: "#1e3a5f", color: "#fff" }, { text: "Europe", bg: "transparent", color: "#1e3a5f", border: "#1e3a5f" }],
    title: <><span className="font-bold text-[#0b0f1a] text-[16px]">ACA</span>{" "}<span className="font-normal text-gray-500 text-[14px]">Air Carrier Access</span>{" "}<span className="font-bold text-[#0b0f1a] text-[16px]">Act</span></>,
    desc: "Requires all airline websites, apps, and Kiosks to be accessible to passengers with disabilities",
    cta: "Contact a 508 specialist",
  },
  {
    showFlag: false,
    borderColor: "#1e3a5f",
    badges: [{ text: "State Laws", bg: "#1e3a5f", color: "#fff" }, { text: "Varies by state", bg: "transparent", color: "#ea580c", border: "#ea580c" }],
    title: <span className="font-bold text-[#0b0f1a] text-[16px]">Section 508</span>,
    desc: "Several states have their own digital accessibility requirements (e.g. California, New York, Colorado)",
    cta: "Find your state consultant",
  },
];

function InfoCircleIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="10" cy="10" r="9" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M10 9v5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="10" cy="6.5" r="0.75" fill={color} />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 2h10a1 1 0 011 1v6a1 1 0 01-1 1H5l-3 2V3a1 1 0 011-1z" stroke="white" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function USFlagIcon() {
  // 20×14px US flag with 13 stripes and blue canton with stars
  const stripeH = 14 / 13;
  const stripes = Array.from({ length: 13 }, (_, i) => i);
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" style={{ borderRadius: 2, flexShrink: 0, display: "inline-block" }} aria-label="US flag">
      {/* 13 alternating stripes */}
      {stripes.map((i) => (
        <rect key={i} x="0" y={i * stripeH} width="20" height={stripeH} fill={i % 2 === 0 ? "#B22234" : "#FFFFFF"} />
      ))}
      {/* Blue canton */}
      <rect x="0" y="0" width="8" height={stripeH * 7} fill="#3C3B6E" />
      {/* 9 small white stars (3×3 grid) in the canton */}
      {[0,1,2].map((row) =>
        [0,1,2].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={1.3 + col * 2.7}
            cy={1.2 + row * 2.0}
            r="0.7"
            fill="white"
          />
        ))
      )}
    </svg>
  );
}

type ScoreTier = { arcA: string; arcB: string; iconBg: string; label: string; badge: string; badgeBg: string; desc: string };

function getScoreTier(hasCritical: boolean): ScoreTier {
  if (hasCritical) return {
    arcA: "#f87171", arcB: "#ef4444", iconBg: "rgba(239,68,68,0.15)",
    label: "Non-compliant", badge: "Critical",
    badgeBg: "linear-gradient(135deg, #f87171, #ef4444)",
    desc: "Your website contains significant barriers that exclude many users.",
  };
  return {
    arcA: "#00d4aa", arcB: "#0088cc", iconBg: "rgba(0,212,170,0.15)",
    label: "Great job!", badge: "Excellent",
    badgeBg: "linear-gradient(135deg, #00d4aa, #0088cc)",
    desc: "Your site meets most accessibility standards.",
  };
}

function ScoreDisplay({ hasCritical }: { hasCritical: boolean }) {
  const t = getScoreTier(hasCritical);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Inner card — gradient border for great job, plain dark for non-compliant */}
      <div
        className="w-full rounded-2xl p-[1.5px] mb-5"
        style={{
          background: hasCritical
            ? "transparent"
            : "linear-gradient(135deg, #00d4aa, #0088cc)",
          border: hasCritical ? "1px solid rgba(248,113,113,0.2)" : "none",
        }}
      >
        <div
          className="w-full rounded-2xl flex flex-col items-center py-8 px-6"
          style={{ background: "#0d1628" }}
        >
          {/* Icon image */}
          <Image
            src={hasCritical ? "/images/Frame 2147230107.png" : "/images/Frame 2147230108.png"}
            alt={hasCritical ? "Non-compliant alert" : "Great job"}
            width={100}
            height={100}
            className="w-[100px] h-[100px] object-contain mb-3"
          />

          {/* Label */}
          <p className="text-white text-[20px] font-bold">{t.label}</p>
        </div>
      </div>

      {/* Badge */}
      <span
        className="text-white text-[13px] font-semibold px-6 py-2 rounded-full mb-4"
        style={{ background: t.badgeBg }}
      >
        {t.badge}
      </span>

      {/* Description */}
      <p className="text-gray-400 text-[13px] text-center leading-relaxed max-w-[240px]">{t.desc}</p>
    </div>
  );
}

function TrendDownIcon({ color }: { color: string }) {
  return (
    <div
      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
      style={{ background: `${color}22` }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 5l5 6 3-3 6 7" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 15h3v-3" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function ScanResults({ results, onRescan }: ScanResultsProps) {
  const { url, scannedAt, violations, passes } = results;
  const hasCritical = violations.some((v) => v.impact === "critical");

  const formattedDate = new Date(scannedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  const formattedTime = new Date(scannedAt).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  const visitorsImpacted = Math.round((violations.length * 1200 + 5000) / 100) * 100;

  return (
    <div>
      {/* ── Dark top section ── */}
      <section className="relative overflow-hidden bg-[#0a0e1a] pb-16 pt-[88px]">
        <AnimatedGradient />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`, backgroundSize: "44px 44px", maskImage: "radial-gradient(ellipse 80% 80% at 50% 30%, black 40%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 30%, black 40%, transparent 80%)" }} />

        <div className="relative z-10 container mx-auto px-4">
          {/* Badge + meta */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="inline-flex rounded-full p-[1px] mb-5" style={{ background: "linear-gradient(135deg, #00d4aa, #0088cc)" }}>
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full" style={{ background: "#080c18" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7L5.5 10.5L12 3.5" stroke="#00d4aa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span className="text-white text-[13px] font-medium">Scan Complete</span>
              </div>
            </div>
            <p className="text-gray-300 text-[14px] mb-1">Scanning: <span className="text-white font-medium">{url}</span></p>
            <p className="text-gray-500 text-[13px] inline-flex items-center gap-1.5">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <rect x="1" y="2" width="11" height="10" rx="1.5" stroke="#6b7280" strokeWidth="1.2" fill="none"/>
                <path d="M4 1v2M9 1v2" stroke="#6b7280" strokeWidth="1.2" strokeLinecap="round"/>
                <path d="M1 5h11" stroke="#6b7280" strokeWidth="1.2"/>
              </svg>
              Analyzed on {formattedDate} at {formattedTime}
            </p>
          </div>

          {/* Two-column cards */}
          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto mb-8">

            {/* Left card — unified, color driven by hasCritical */}
            {(() => {
              const t = getScoreTier(hasCritical);
              const cardBg = hasCritical ? "rgba(239,68,68,0.08)" : "rgba(0,212,170,0.08)";
              const cardBorder = hasCritical ? "1px solid rgba(239,68,68,0.3)" : "1px solid rgba(0,212,170,0.3)";
              const btnLabel = hasCritical ? "Solve the issue →" : "I want to be inclusive";

              return (
                <div className="rounded-2xl p-6 border border-white/10" style={{ background: "#0d1120" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <TrendDownIcon color={t.arcA} />
                    <h3 className="text-white text-[15px] font-semibold">The Invisible Costs</h3>
                  </div>
                  <p className="text-gray-400 text-[13px] leading-relaxed mb-4">
                    Accessibility issues are not just about compliance, but also missed opportunities.
                  </p>

                  {/* Stat card */}
                  <div className="rounded-xl p-4 mb-3" style={{ background: cardBg, border: cardBorder }}>
                    <div className="mb-1">
                      <span className="text-[32px] font-bold" style={{ color: t.arcA }}>
                        {visitorsImpacted.toLocaleString()}
                      </span>
                      <span className="text-gray-400 text-[13px] ml-2">users lost/month</span>
                    </div>
                    <p className="text-gray-400 text-[12px] leading-relaxed">
                      With {(passes + violations.length).toLocaleString()} monthly visitors, you could be losing approximately {visitorsImpacted.toLocaleString()} users due to digital barriers.
                    </p>
                  </div>

                  {/* Info card */}
                  <div className="rounded-xl p-4 mb-5" style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)" }}>
                    <p className="text-gray-400 text-[13px] leading-relaxed">
                      Every excluded user means lost revenue, reduced engagement, and weakened brand trust. Barriers directly impact your bottom line.
                    </p>
                  </div>

                  <button
                    onClick={onRescan}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-[13px] font-semibold hover:opacity-90 transition-opacity"
                    style={{ background: "linear-gradient(135deg, #00d4aa, #0088cc)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <rect x="1" y="1" width="12" height="10" rx="1.5" stroke="white" strokeWidth="1.2" fill="none" />
                      <path d="M4 6h6M4 8.5h3" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    {btnLabel}
                  </button>
                </div>
              );
            })()}

            {/* Right card — status */}
            <div className="rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center" style={{ background: "#0d1120" }}>
              <h3 className="text-white text-[15px] font-semibold mb-6">Your Accessibility Score</h3>
              <ScoreDisplay hasCritical={hasCritical} />
            </div>
          </div>

        </div>
      </section>

      {/* ── White lower section ── */}
      <section className="relative bg-white pb-24" style={{ borderRadius: "24px 24px 0 0", marginTop: "-24px", zIndex: 2, position: "relative" }}>
        <div className="container mx-auto px-4 pt-16">

          {/* Key Issues Found */}
          <div className="mb-16">
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#0b0f1a] mb-8">Key Issues Found</h2>

            {violations.length === 0 ? (
              <div className="rounded-2xl p-8 border border-green-100 bg-green-50 text-center">
                <div className="text-4xl mb-3">🎉</div>
                <p className="text-green-700 font-semibold text-lg">No issues found!</p>
                <p className="text-green-600 text-[14px] mt-1">Your site is highly accessible.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {violations.map((v) => {
                  const impact = v.impact || "minor";
                  const s = IMPACT_STYLE[impact] || IMPACT_STYLE.minor;
                  return (
                    <div
                      key={v.id}
                      className="rounded-xl overflow-hidden"
                      style={{ border: "1px solid #e5e7eb", borderLeft: `4px solid ${s.borderColor}` }}
                    >
                      <div className="bg-white px-5 py-4">
                        {/* Title row */}
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <InfoCircleIcon color={s.iconColor} />
                          <span className="text-[#0b0f1a] text-[15px] font-semibold">
                            {v.help || v.id.replace(/-/g, " ")}
                          </span>
                          <span
                            className="text-[12px] font-semibold px-3 py-0.5 rounded-full"
                            style={{ background: s.badgeBg, color: s.badgeText }}
                          >
                            {s.label}
                          </span>
                        </div>
                        {/* Description */}
                        <p className="text-gray-500 text-[13px] leading-relaxed ml-8">
                          {v.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Digital accessibility laws */}
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{
              border: "2px solid transparent",
              background: "linear-gradient(white, white) padding-box, linear-gradient(135deg, #00d4aa, #0088cc) border-box",
            }}
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              {/* Scale icon box */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #00d4aa, #0088cc)" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3v18M3 8l4 8H3l4-8zM17 8l4 8h-8l4-8z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 21h18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h2 className="text-[24px] md:text-[28px] font-bold text-[#0b0f1a] leading-tight">Digital accessibility laws</h2>
                <p className="text-gray-500 text-[14px] mt-1">The main European laws governing digital accessibility:</p>
              </div>
            </div>

            {/* 2×2 law cards grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              {LAWS.map((law, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden"
                  style={{ background: "#eff6ff", border: "1px solid #e5e7eb", borderLeft: `4px solid ${law.borderColor}` }}
                >
                  <div className="p-5">
                  {/* Flag + badges */}
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    {law.showFlag && <USFlagIcon />}
                    {law.badges.map((b, bi) => (
                      <span
                        key={bi}
                        className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                        style={{
                          background: b.bg,
                          color: b.color,
                          border: b.border ? `1.5px solid ${b.border}` : "none",
                        }}
                      >
                        {b.text}
                      </span>
                    ))}
                  </div>
                  {/* Title */}
                  <h3 className="text-[#0b0f1a] text-[16px] mb-2">{law.title}</h3>
                  {/* Desc */}
                  <p className="text-gray-500 text-[13px] leading-relaxed mb-4">{law.desc}</p>
                  {/* CTA button */}
                  <button
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-[13px] font-medium hover:opacity-90 transition-opacity"
                    style={{ background: "#1e3a5f" }}
                  >
                    <ChatIcon />
                    {law.cta}
                  </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Important note */}
            <div
              className="rounded-lg px-5 py-4"
              style={{ borderLeft: "4px solid #3b82f6", background: "#eff6ff" }}
            >
              <p className="text-[13px] text-gray-600 leading-relaxed">
                <span className="font-bold text-[#0b0f1a]">Important:</span> Non-compliance with any of these laws can lead to lawsuits, fines, and damage to your brand.{" "}
                Deadlines and specific requirements vary by law and state.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
