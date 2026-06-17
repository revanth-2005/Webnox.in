"use client";

import Image from "next/image";
import React from "react";

const FONT_SANS = "'Stack Sans Headline', sans-serif";

export default function ReachMoreSection() {
  return (
    <section
      id="reach-more"
      style={{
        background: "#ffffff",
        padding: "90px 40px",
        fontFamily: FONT_SANS,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "60px",
          position: "relative",
          zIndex: 1,
        }}
        className="reach-more-flex-container flex-col lg:flex-row"
      >
        {/* Left Side: Illustration Image */}
        <div
          className="reach-more-left"
          style={{
            flex: "1",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="reach-more-image-container"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "540px",
              aspectRatio: "1.2/1",
            }}
          >
            <Image
              src="/reachmore.png"
              alt="Reach More Customers Dashboard"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Side: Text & Actions */}
        <div
          className="reach-more-right"
          style={{
            flex: "1",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
          }}
        >
          {/* Badge (Matches the About section gradient border badge style) */}
          <div
            className="reach-more-badge-wrap"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "0.88px solid transparent",
              borderRadius: "9999px",
              padding: "6px 18px 6px 14px",
              background: "linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #4BC3FE 0%, #0068F7 40%, #012B8F 70%, #00154A 100%) border-box",
              fontFamily: FONT_SANS,
              fontSize: "13px",
              fontWeight: 500,
              color: "#0f0f0f",
              width: "fit-content",
              marginBottom: "28px",
            }}
          >
            <span style={{ color: "#0068F7", fontSize: "12px", fontWeight: 600 }}>✦</span>
            <span>Scale Your Reach</span>
          </div>

          <h2
            className="reach-more-heading"
            style={{
              fontFamily: FONT_SANS,
              fontSize: "clamp(32px, 3.6vw, 52px)",
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#0a0a0a",
              letterSpacing: "-0.02em",
              margin: "0 0 18px 0",
              whiteSpace: "nowrap",
            }}
          >
            Reach More Customers
          </h2>

          {/* Description (Matches the About section body text style, size, weight, color) */}
          <p
            className="reach-more-desc"
            style={{
              fontFamily: FONT_SANS,
              fontSize: "clamp(13px, 0.88vw, 15px)",
              fontWeight: 400,
              color: "#555",
              lineHeight: 1.75,
              margin: "0 0 32px 0",
              maxWidth: "480px",
            }}
          >
            We Should Give Equal Importance To Promotional Activities To Improve The Sale Of Conversion.
            Our Unique Expertise Provides You With Distinct And Customized Marketing Strategies To
            Enable Your Success. You Can Easily Attract.
          </p>

          {/* Bottom buttons (Matches original white section mockup style) */}
          <div
            className="reach-more-buttons-container"
            style={{
              display: "flex",  
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            {/* SEO Button */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "#ffffff",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                borderRadius: "9999px",
                padding: "12px 28px",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.03)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#0068F7";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 104, 247, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.08)";
                e.currentTarget.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.03)";
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0068F7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 12v10H4V12" />
                <path d="M2 7h20v5H2z" />
                <path d="M12 22V7" />
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
              </svg>
              <span
                style={{
                  fontFamily: FONT_SANS,
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#222222",
                }}
              >
                SEO
              </span>
            </div>

            {/* Google Ads Button */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "#ffffff",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                borderRadius: "9999px",
                padding: "12px 28px",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.03)",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#0068F7";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 104, 247, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.08)";
                e.currentTarget.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.03)";
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0068F7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 12v10H4V12" />
                <path d="M2 7h20v5H2z" />
                <path d="M12 22V7" />
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
              </svg>
              <span
                style={{
                  fontFamily: FONT_SANS,
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#222222",
                }}
              >
                Google Ads
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add responsive styles via dangerouslySetInnerHTML to ensure compatibility */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1023px) {
          .reach-more-flex-container {
            display: flex !important;
            flex-direction: column !important;
          }
          .reach-more-left, .reach-more-right {
            display: contents !important;
          }
          #reach-more {
            padding: 60px 20px !important;
          }
          .reach-more-badge-wrap {
            order: 1 !important;
            margin-bottom: 16px !important;
          }
          .reach-more-heading {
            order: 2 !important;
            white-space: normal !important;
            text-align: center !important;
            margin: 0 auto 16px !important;
          }
          .reach-more-image-container {
            order: 3 !important;
            margin: 20px auto 30px !important;
            width: 100% !important;
            max-width: 420px !important;
          }
          .reach-more-desc {
            order: 4 !important;
            text-align: center !important;
            margin: 0 auto 24px !important;
          }
          .reach-more-buttons-container {
            order: 5 !important;
            justify-content: center !important;
          }
        }
      `}} />
    </section>
  );
}
