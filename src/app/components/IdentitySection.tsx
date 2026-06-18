"use client";

import React, { useState } from "react";
import Image from "next/image";

type TabType = "who-we-are" | "what-we-do" | "how-we-do" | "where-we-serve";

export default function IdentitySection() {
  const [activeTab, setActiveTab] = useState<TabType>("who-we-are");

  const tabContent: Record<TabType, string> = {
    "who-we-are":
      "Our Strategist & Creative Coimbatore Web Design Team From Webnox Technologies, Filled With Smart And Talented People Having Great Vision. Those People Helps In Creating A Visually Appealing And User-Friendly Website That Promotes Client Business. Our Creative Web Designers And Web Developers In Coimbatore Can Craft A Website Or A Web Application From Scratch.",
    "what-we-do":
      "We specialize in crafting bespoke web designs, robust e-commerce platforms, custom web applications, and result-oriented digital marketing strategies. Our Coimbatore-based development team turns complex challenges into simple, elegant digital products that drive growth.",
    "how-we-do":
      "Through collaborative planning, rapid prototyping, agile development, and rigorous quality testing, we ensure that every solution is optimized for speed, security, and scalability. We keep you aligned at every stage to deliver absolute value.",
    "where-we-serve":
      "From Coimbatore, we extend our premium web services to businesses worldwide, serving startups, SMEs, and large enterprises across India, the Middle East, the US, and Europe. Our localized expertise combined with global quality standards empowers clients everywhere.",
  };

  return (
    <section
      id="identity"
      style={{
        background: "#ffffff",
        padding: "80px 24px",
        fontFamily: "'Outfit', 'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Badge: Our Identity */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          border: "1px solid #0B55F3",
          borderRadius: "9999px",
          padding: "6px 18px",
          backgroundColor: "#ffffff",
          color: "#0B55F3",
          fontSize: "12px",
          fontWeight: 600,
          marginBottom: "24px",
          letterSpacing: "0.02em",
          boxShadow: "0 2px 10px rgba(11, 85, 243, 0.05)",
          fontFamily: "'Outfit', 'Inter', sans-serif",
        }}
      >
        <span style={{ fontSize: "14px", fontWeight: "bold" }}>+</span> Our Identity
      </div>

      {/* Main Heading */}
      <h2
        style={{
          fontSize: "clamp(24px, 3.2vw, 42px)",
          fontWeight: 700,
          color: "#0a192f",
          textAlign: "center",
          maxWidth: "900px",
          lineHeight: 1.25,
          letterSpacing: "-0.01em",
          margin: "0 0 40px 0",
          fontFamily: "'Outfit', 'Inter', sans-serif",
        }}
      >
        Transform Your Digital Presence With
        <br />
        Vision, Expertise &amp; Local Reach
      </h2>

      {/* Tabs Container */}
      <div
        className="tabs-wrapper"
        style={{
          width: "100%",
          maxWidth: "1020px",
          borderBottom: "1.5px solid #E5E7EB",
          marginBottom: "36px",
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          fontFamily: "'Outfit', 'Inter', sans-serif",
        }}
      >
        {(
          [
            { id: "who-we-are", label: "Who We Are" },
            { id: "what-we-do", label: "What We Do" },
            { id: "how-we-do", label: "How We Do" },
            { id: "where-we-serve", label: "Where We Serve" },
          ] as const
        ).map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: "none",
                border: "none",
                padding: "12px 16px",
                fontSize: "clamp(13px, 1.1vw, 15px)",
                fontWeight: isActive ? 600 : 500,
                color: isActive ? "#0B55F3" : "#4B5563",
                cursor: "pointer",
                transition: "all 0.2s ease",
                position: "relative",
                outline: "none",
                flex: 1,
                textAlign: "center",
                fontFamily: "'Outfit', 'Inter', sans-serif",
              }}
            >
              {tab.label}
              {isActive && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "-1.5px",
                    left: "15%",
                    right: "15%",
                    height: "3px",
                    backgroundColor: "#0B55F3",
                    borderTopLeftRadius: "999px",
                    borderTopRightRadius: "999px",
                    zIndex: 2,
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab description text area */}
      <p
        style={{
          fontSize: "clamp(14px, 1.1vw, 16px)",
          fontWeight: 400,
          color: "#1F2937",
          lineHeight: 1.8,
          textAlign: "center",
          maxWidth: "880px",
          marginBottom: "60px",
          opacity: 0.9,
          fontFamily: "'Outfit', 'Inter', sans-serif",
        }}
      >
        {tabContent[activeTab]}
      </p>

      {/* Bottom Cards Side-by-Side */}
      <div
        className="cards-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "28px",
          width: "100%",
          maxWidth: "1020px",
          fontFamily: "'Outfit', 'Inter', sans-serif",
        }}
      >
        {/* Card 1: We Are Your Partner */}
        <div
          className="partner-card"
          style={{
            position: "relative",
            borderRadius: "24px",
            overflow: "hidden",
            border: "1px solid rgba(11, 85, 243, 0.12)",
            backgroundColor: "#f4f8ff",
            padding: "28px 24px",
            minHeight: "240px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Card background absolute image */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            <Image
              src="/landing page/we are your partner bg.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>

          <div style={{ position: "relative", zIndex: 1, maxWidth: "60%" }}>
            {/* Header row with Icon and Title */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
              <Image
                src="/landing page/we are your partner icon.png"
                alt="Partner Icon"
                width={44}
                height={44}
                className="object-contain"
                style={{ flexShrink: 0 }}
              />
              <h3
                style={{
                  fontSize: "clamp(15px, 1.2vw, 18px)",
                  fontWeight: 700,
                  color: "#0B55F3",
                  margin: 0,
                  fontFamily: "'Outfit', 'Inter', sans-serif",
                }}
              >
                <span style={{ borderBottom: "2px solid #0B55F3", paddingBottom: "2px" }}>We</span> Are Your Partner
              </h3>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: "clamp(12px, 0.85vw, 13.5px)",
                fontWeight: 400,
                color: "#1F2937",
                lineHeight: 1.7,
                margin: 0,
                fontFamily: "'Outfit', 'Inter', sans-serif",
              }}
            >
              Our Team Has UI/UX Designers, Web Designers, Web Developers, SEO Experts, Business Consultants, And Digital Marketing Experts. We Perform Our Rapid Web Design Service{" "}
              <a href="#" style={{ color: "#0B55F3", fontWeight: 600, textDecoration: "none" }}>
                readmore...
              </a>
            </p>
          </div>
        </div>

        {/* Card 2: We Help Your Success */}
        <div
          className="success-card"
          style={{
            position: "relative",
            borderRadius: "24px",
            overflow: "hidden",
            border: "1px solid rgba(119, 99, 237, 0.12)",
            backgroundColor: "#f9f8ff",
            padding: "28px 24px",
            minHeight: "240px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Card background absolute image */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            <Image
              src="/landing page/we help your success bg.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>

          <div style={{ position: "relative", zIndex: 1, maxWidth: "60%" }}>
            {/* Header row with Icon and Title */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
              <Image
                src="/landing page/we help your success  icon.png"
                alt="Success Icon"
                width={44}
                height={44}
                className="object-contain"
                style={{ flexShrink: 0 }}
              />
              <h3
                style={{
                  fontSize: "clamp(15px, 1.2vw, 18px)",
                  fontWeight: 700,
                  color: "#7763ED",
                  margin: 0,
                  fontFamily: "'Outfit', 'Inter', sans-serif",
                }}
              >
                <span style={{ borderBottom: "2px solid #7763ED", paddingBottom: "2px" }}>We</span> Help Your Success
              </h3>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: "clamp(12px, 0.85vw, 13.5px)",
                fontWeight: 400,
                color: "#1F2937",
                lineHeight: 1.7,
                margin: 0,
                fontFamily: "'Outfit', 'Inter', sans-serif",
              }}
            >
              As A Premium Web Design Company In Coimbatore, We Excel In All Aspects Of Web Design, Website Development, And Various Open-Source CMS Systems,{" "}
              <a href="#" style={{ color: "#7763ED", fontWeight: 600, textDecoration: "none" }}>
                readmore...
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Responsive Styles block */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 1023px) {
          #identity {
            padding: 70px 20px !important;
          }
          .cards-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .partner-card, .success-card {
            padding: 30px !important;
          }
        }
        @media (max-width: 639px) {
          #identity {
            padding: 50px 16px !important;
          }
          .tabs-wrapper {
            overflow-x: auto;
            white-space: nowrap;
            display: flex;
            justify-content: flex-start !important;
            gap: 8px;
            -webkit-overflow-scrolling: touch;
          }
          .tabs-wrapper::-webkit-scrollbar {
            display: none; /* Hide scrollbar for cleaner look */
          }
          .tabs-wrapper button {
            flex: 0 0 auto !important;
            padding: 10px 14px !important;
          }
          .partner-card, .success-card {
            padding: 24px !important;
            flex-direction: column !important;
            justify-content: flex-start !important;
          }
          .partner-card > div, .success-card > div {
            max-width: 100% !important;
          }
          .partner-card div[style*="position: absolute"], .success-card div[style*="position: absolute"] {
            display: none !important; /* Hide background illustrations on narrow mobile views for cleaner readable layout */
          }
        }
      `}} />
    </section>
  );
}
