import Header from "@/components/Header";
import ComplianceHero from "@/components/compliance/ComplianceHero";
import ComplianceServices from "@/components/compliance/ComplianceServices";
import CertificationPortal from "@/components/compliance/CertificationPortal";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Compliance Standards | AccessIQ",
  description:
    "Achieve and maintain WCAG 2.1 AA, ADA, Section 508, and EN 301 549 accessibility compliance with expert audits, remediation, and continuous monitoring.",
};

export default function CompliancePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ComplianceHero />
      <ComplianceServices />
      <CertificationPortal />
      <CTASection />
      <Footer />
    </div>
  );
}
