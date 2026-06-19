"use client";

import dynamic from "next/dynamic";
import HeroSection from "../components/HeroSection";

const AboutSection = dynamic(() => import("../components/AboutSection"), { ssr: false });
const QuoteSection = dynamic(() => import("../components/QuoteSection"), { ssr: false });
const ClientsSection = dynamic(() => import("../components/ClientsSection"), { ssr: false });
const NumbersSection = dynamic(() => import("../components/NumbersSection"), { ssr: false });
const ReachMoreSection = dynamic(() => import("../components/ReachMoreSection"), { ssr: false });
const BrandBuildSection = dynamic(() => import("../components/BrandBuildSection"), { ssr: false });
const WebServicesSection = dynamic(() => import("../components/WebServicesSection"), { ssr: false });
const TechPuzzleSection = dynamic(() => import("../components/TechPuzzleSection"), { ssr: false });
const IdentitySection = dynamic(() => import("../components/IdentitySection"), { ssr: false });
const OfferSection = dynamic(() => import("../components/OfferSection"), { ssr: false });
const ProcessSection = dynamic(() => import("../components/ProcessSection"), { ssr: false });
const ContactSection = dynamic(() => import("../components/ContactSection"), { ssr: false });
const Footer = dynamic(() => import("../components/Footer"), { ssr: false });

export default function LandingPage() {
  return (
    <>
      <HeroSection />

      <AboutSection />
      <QuoteSection />
      <ClientsSection />
      <NumbersSection />
      <ReachMoreSection />
      <BrandBuildSection />
      <WebServicesSection />
      <TechPuzzleSection />
      <IdentitySection />
      <OfferSection />
      <ProcessSection />
      <ContactSection />

      {/* ─────────────── FOOTER ─────────────── */}
      <Footer />
    </>
  );
}


