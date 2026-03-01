import Header from "@/components/Header";
import AuditHero from "@/components/audit/AuditHero";
import WhatYouGet from "@/components/audit/WhatYouGet";
import HowAuditWorks from "@/components/audit/HowAuditWorks";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Accessibility Audit Services | AccessIQ",
  description:
    "Expert-led accessibility audits with WCAG 2.1 AA & ADA compliance. Get certified documentation, remediation roadmaps, and legal-ready reports.",
};

export default function AuditPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AuditHero />
      <WhatYouGet />
      <HowAuditWorks />
      <CTASection />
      <Footer />
    </div>
  );
}
