"use client";

import React from "react";
import Image from "next/image";

interface ServiceItem {
  name: string;
  iconSrc: string;
}

const SERVICES: ServiceItem[] = [
  { name: "Business Website", iconSrc: "/landing page/what we offer/Business Website.png" },
  { name: "Portfolio Websites", iconSrc: "/landing page/what we offer/Portfolio websites.png" },
  { name: "Magazine Websites", iconSrc: "/landing page/what we offer/Magazine websites.png" },
  { name: "Landing Pages", iconSrc: "/landing page/what we offer/Landing pages.png" },
  { name: "E-Commerce Websites", iconSrc: "/landing page/what we offer/E-commerce websites.png" },
  { name: "Social Media Websites", iconSrc: "/landing page/what we offer/Social media websites.png" },
  { name: "Blogs", iconSrc: "/landing page/what we offer/Blogs.png" },
  { name: "Directory & Contact Pages", iconSrc: "/landing page/what we offer/Directory & contact pages.png" },
];

const LOGOS = [
  "/landing page/what we offer/img 1.png",
  "/landing page/what we offer/img 2.png",
  "/landing page/what we offer/img 3.png",
  "/landing page/what we offer/img 4.png",
  "/landing page/what we offer/img 5.png",
  "/landing page/what we offer/img 6.png",
  "/landing page/what we offer/img 7.png",
];

export default function OfferSection() {
  return (
    <section
      id="offer"
      style={{
        background: "radial-gradient(circle at left center, rgba(0, 90, 215, 0.22) 0%, transparent 60%), radial-gradient(circle at right center, rgba(72, 237, 255, 0.12) 0%, transparent 70%), #030816",
        padding: "100px 24px 80px 24px",
        fontFamily: "'Outfit', 'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Container holding top split layout */}
      <div
        className="offer-grid"
        style={{
          width: "100%",
          maxWidth: "1240px",
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: "60px",
          alignItems: "center",
          zIndex: 2,
          marginBottom: "80px",
        }}
      >
        {/* LEFT: Composite Mockups Image */}
        <div
          className="offer-left-mockup"
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "1.2/1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src="/landing page/what we offer/Site.png"
              alt="Website Mockups"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* RIGHT: Content and Grid List */}
        <div
          className="offer-right-content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {/* Badge: What We Offer */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              border: "1px solid rgba(72, 237, 255, 0.4)",
              borderRadius: "9999px",
              padding: "6px 18px",
              backgroundColor: "rgba(72, 237, 255, 0.06)",
              color: "#48EDFF",
              fontSize: "12px",
              fontWeight: 600,
              marginBottom: "20px",
              letterSpacing: "0.02em",
              fontFamily: "'Outfit', 'Inter', sans-serif",
            }}
          >
            <span style={{ fontSize: "14px", fontWeight: "bold" }}>+</span> What We Offer
          </div>

          {/* Title with custom Web Design vertical gradient */}
          <h2
            style={{
              fontSize: "clamp(28px, 3vw, 44px)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
              margin: "0 0 20px 0",
              fontFamily: "'Outfit', 'Inter', sans-serif",
            }}
          >
            Our Range Of{" "}
            <span
              style={{
                background: "linear-gradient(180deg, #48EDFF 0%, #005AD7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
              }}
            >
              Web Design
            </span>{" "}
            Services
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "clamp(13.5px, 0.95vw, 15px)",
              fontWeight: 300,
              color: "#A5B4FC",
              lineHeight: 1.7,
              maxWidth: "520px",
              marginBottom: "32px",
              opacity: 0.9,
              letterSpacing: "0.01em",
              fontFamily: "'Outfit', 'Inter', sans-serif",
            }}
          >
            All The Web Designs Delivered By Webnox Technologies, Coimbatore Are Mobile Responsive Websites With Great User Experience.
          </p>

          {/* Services Category List Grid */}
          <div
            className="services-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px 20px",
              width: "100%",
            }}
          >
            {SERVICES.map((srv) => (
              <div
                key={srv.name}
                className="service-card-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "14px 20px",
                  borderRadius: "16px",
                  backgroundColor: "rgba(8, 17, 36, 0.45)",
                  border: "1px solid rgba(255, 255, 255, 0.06)",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
              >
                <div style={{ width: "24px", height: "24px", position: "relative", flexShrink: 0 }}>
                  <Image
                    src={srv.iconSrc}
                    alt={srv.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "clamp(13px, 0.9vw, 14.5px)",
                    fontWeight: 500,
                    fontFamily: "'Outfit', 'Inter', sans-serif",
                    letterSpacing: "0.01em",
                  }}
                >
                  {srv.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM: Horizontal row of partner logos */}
      <div
        className="offer-logos-container"
        style={{
          width: "100%",
          maxWidth: "1240px",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          paddingTop: "48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "24px 16px",
          zIndex: 2,
        }}
      >
        {LOGOS.map((logo, index) => (
          <div
            key={logo}
            className="partner-logo-wrapper"
            style={{
              position: "relative",
              height: "44px",
              width: "12%",
              minWidth: "110px",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              opacity: 0.82,
              cursor: "pointer",
            }}
          >
            <Image
              src={logo}
              alt={`Partner award ${index + 1}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Styled styles tag for responsive styles and hover transitions */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .service-card-item:hover {
          background-color: rgba(72, 237, 255, 0.08) !important;
          border-color: rgba(72, 237, 255, 0.35) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 90, 215, 0.15) !important;
        }
        .partner-logo-wrapper:hover {
          transform: scale(1.08);
          opacity: 1 !important;
        }
        @media (max-width: 1023px) {
          #offer {
            padding: 70px 20px 50px 20px !important;
          }
          .offer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            margin-bottom: 50px !important;
          }
          .offer-left-mockup {
            max-width: 500px;
            margin: 0 auto;
          }
          .offer-right-content {
            align-items: center !important;
            text-align: center !important;
          }
          .offer-right-content h2, .offer-right-content p {
            text-align: center !important;
            margin-left: auto;
            margin-right: auto;
          }
          .offer-logos-container {
            justify-content: center !important;
            gap: 32px 24px !important;
          }
          .partner-logo-wrapper {
            width: 20% !important;
          }
        }
        @media (max-width: 639px) {
          #offer {
            padding: 50px 16px 40px 16px !important;
          }
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .partner-logo-wrapper {
            width: 28% !important;
            min-width: 90px !important;
            height: 36px !important;
          }
        }
      `}} />
    </section>
  );
}
