"use client";

import Footer from "../components/Footer";

import HeroSection from "../components/HeroSection";
import QuoteSection from "../components/QuoteSection";
import ClientsSection from "../components/ClientsSection";
import NumbersSection from "../components/NumbersSection";
import ReachMoreSection from "../components/ReachMoreSection";
import AboutSection from "../components/AboutSection";
import BrandBuildSection from "../components/BrandBuildSection";
import WebServicesSection from "../components/WebServicesSection";
import TechPuzzleSection from "../components/TechPuzzleSection";
import IdentitySection from "../components/IdentitySection";

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

      {/* ─────────────── FOOTER ─────────────── */}
      <Footer />
    </>
  );
}

