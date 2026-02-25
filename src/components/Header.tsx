"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out"
      style={{
        padding: scrolled ? "8px 0" : "12px 0",
      }}
    >
      {/* Full-width backdrop that fades in on scroll */}
      <div
        className="absolute inset-0 transition-all duration-500 ease-out"
        style={{
          background: scrolled
            ? "rgba(10, 14, 26, 0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255, 255, 255, 0.06)"
            : "1px solid transparent",
        }}
      />

      <div className="container mx-auto relative">
        {/* Floating card nav */}
        <div
          className="flex items-center justify-between px-5 transition-all duration-500 ease-out relative"
          style={{
            height: scrolled ? "52px" : "56px",
            borderRadius: scrolled ? "12px" : "16px",
            background: scrolled
              ? "rgba(8, 12, 22, 0.9)"
              : "#0b1120",
            border: "none",
            boxShadow: scrolled
              ? "0 2px 20px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.05)"
              : "0 4px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 212, 170, 0.06), inset 0 0 0 1px rgba(0, 212, 170, 0.15)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-dark.png"
              alt="AccessIQ"
              width={140}
              height={36}
              className="h-[32px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation - center */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link href="/" className="text-white text-[13px] font-medium hover:text-[#00d4aa] transition-colors">Home</Link>
            <Link href="/audit" className="text-gray-400 text-[13px] font-medium hover:text-[#00d4aa] transition-colors">Audit</Link>
            <Link href="/compliance" className="text-gray-400 text-[13px] font-medium hover:text-[#00d4aa] transition-colors">Compliance</Link>
            <Link href="/prices" className="text-gray-400 text-[13px] font-medium hover:text-[#00d4aa] transition-colors">Prices</Link>
            <Link href="/contact" className="text-gray-400 text-[13px] font-medium hover:text-[#00d4aa] transition-colors">Contact</Link>
          </nav>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Sign in - gradient border button */}
            <div
              className="rounded-lg p-[1px] transition-opacity hover:opacity-80"
              style={{
                background: "linear-gradient(135deg, #00d4aa, #0088cc)",
              }}
            >
              <button
                className="text-gray-200 text-[13px] font-medium px-5 py-[7px] rounded-[7px] hover:text-white transition-colors"
                style={{ background: "#0b1120" }}
              >
                Sign in
              </button>
            </div>
            <button
              className="text-white text-[13px] font-semibold px-5 py-2 rounded-lg transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #00d4aa 0%, #0088cc 100%)",
              }}
            >
              View Live Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mx-6 mt-2 rounded-xl px-5 py-4 backdrop-blur-xl relative" style={{ background: "rgba(13, 17, 30, 0.95)", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-white text-sm font-medium">Home</Link>
            <Link href="/audit" className="text-gray-400 text-sm font-medium">Audit</Link>
            <Link href="/compliance" className="text-gray-400 text-sm font-medium">Compliance</Link>
            <Link href="/prices" className="text-gray-400 text-sm font-medium">Prices</Link>
            <Link href="/contact" className="text-gray-400 text-sm font-medium">Contact</Link>
            <div className="flex gap-3 pt-3 border-t border-white/10">
              <div className="rounded-lg p-[1px]" style={{ background: "linear-gradient(135deg, #00d4aa, #0088cc)" }}>
                <button className="text-gray-200 text-sm font-medium px-5 py-2 rounded-[7px]" style={{ background: "#0b1120" }}>Sign in</button>
              </div>
              <button className="text-white text-sm font-semibold px-5 py-2.5 rounded-lg" style={{ background: "linear-gradient(135deg, #00d4aa, #0088cc)" }}>View Live Demo</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
