"use client";

import React from "react";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Outfit', 'Inter', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/landing page/Bg.webp"
          alt="Background"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          quality={100}
          priority
        />
      </div>

      {/* Main Content Wrapper */}
      <div
        style={{
          position: "relative",
          zIndex: 10, // Elevated zIndex so the form stays above the absolute-positioned horizontal bar below
          width: "100%",
          maxWidth: "1280px",
          display: "flex",
          justifyContent: "center", // Center the form
          alignItems: "center",
          flex: 1,
          padding: "20px",
        }}
      >
        {/* Left Side Text Content (Absolute positioned on desktop so form stays perfectly centered over BG pedestal) */}
        <div
          className="contact-left-text"
          style={{
            position: "absolute",
            left: "40px",
            top: "35%",
            transform: "translateY(-50%)",
            maxWidth: "400px",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "9999px",
              padding: "6px 16px",
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              color: "#ffffff",
              fontSize: "12px",
              fontWeight: 500,
              marginBottom: "24px",
            }}
          >
            <span style={{ color: "#48EDFF" }}>✦</span> Get in Touch
          </div>

          {/* Heading */}
          <h2
            style={{
              fontSize: "clamp(36px, 4vw, 48px)",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            Let's Build Something <br /> That <span style={{ color: "#00ADEF" }}>Stands Out</span>
          </h2>

          {/* Subheading */}
          <p
            style={{
              color: "#A5B4FC",
              fontSize: "15px",
              fontWeight: 300,
              lineHeight: 1.6,
              maxWidth: "320px",
            }}
          >
            Have An Idea Or Need Expert Guidance?<br />
            We Turn Your Vision Into Powerful<br />
            Digital Experiences.
          </p>
        </div>

        {/* Center Form Container */}
        <div
          style={{
            position: "relative",
            zIndex: 10, // Ensure form is above the horizontal bar
            width: "100%",
            maxWidth: "380px", // Shrunk from 440px
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px", // Push down slightly to align with pedestal
          }}
        >
          {/* Top Icon overlapping the form */}
          <div
            style={{
              width: "72px",
              height: "72px",
              position: "absolute",
              top: "-36px",
              zIndex: 10,
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <Image
              src="/landing page/Frame 2147223260.png"
              alt="Contact Icon"
              fill
              className="object-cover" // Cover the whole circle
            />
          </div>

          {/* Form Card */}
          <div
            style={{
              width: "100%",
              background: "linear-gradient(180deg, rgba(14, 30, 56, 0.45) 0%, rgba(8, 16, 30, 0.65) 100%)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)", // For Safari
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderTopColor: "rgba(255, 255, 255, 0.25)", // Stronger top edge highlight for glass effect
              borderRadius: "16px",
              padding: "40px 28px 28px 28px", // Reduced padding
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "28px" }}>
              <h3
                style={{
                  fontSize: "20px", // Slightly smaller
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "8px",
                }}
              >
                Request a Free Quote
              </h3>
              <p style={{ color: "#64748b", fontSize: "12px", fontWeight: 400, maxWidth: "260px", margin: "0 auto" }}>
                Enter your details we will connect you with the right person
              </p>
            </div>

            <form style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {/* Row 1: Name and Email */}
              <div style={{ display: "flex", gap: "12px" }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="contact-input-exact"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="contact-input-exact"
                />
              </div>

              {/* Row 2: Mobile */}
              <input
                type="tel"
                placeholder="Mobile No"
                className="contact-input-exact"
              />

              {/* Row 3: Message */}
              <textarea
                placeholder="Your Message"
                rows={4}
                className="contact-input-exact"
                style={{ resize: "none" }}
              />

              {/* Submit Button */}
              <button
                type="button"
                style={{
                  marginTop: "8px",
                  width: "100%",
                  background: "linear-gradient(90deg, #48EDFF 0%, #005AD7 100%)",
                  border: "none",
                  borderRadius: "8px",
                  padding: "12px", // Slightly reduced button padding
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "transform 0.2s ease",
                  boxShadow: "0 8px 16px rgba(0, 90, 215, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Let Talk..!
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Horizontal Contact Info Line with Glassy Effect (Absolute positioned behind form) */}
      <div
        className="contact-horizontal-bar"
        style={{
          position: "absolute",
          top: "65%", // Adjusted to sit behind the "Let Talk..!" button (tweak this % if needed)
          left: 0,
          right: 0,
          zIndex: 1, // Behind the form container
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffffff",
          fontSize: "14px",
          fontWeight: 500,
          background: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0) 100%)",
          backdropFilter: "blur(4px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Left Side: Phone Numbers */}
        <div className="contact-numbers" style={{ position: "absolute", left: "6%", display: "flex", alignItems: "center", gap: "24px" }}>
          <span style={{ color: "#48EDFF", fontSize: "16px" }}>✦</span>
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span>📞</span> +91 97865 57739
          </span>
          <span style={{ color: "#48EDFF", fontSize: "16px" }}>✦</span>
          <span>+91 63800 72252</span>
          <span style={{ color: "#48EDFF", fontSize: "16px" }}>✦</span>
        </div>

        {/* Right Side: Email */}
        <div className="contact-email" style={{ position: "absolute", right: "12%", display: "flex", alignItems: "center", gap: "24px" }}>
          <span style={{ color: "#48EDFF", fontSize: "16px" }}>✦</span>
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span>✉</span> contact@webnox.in
          </span>
          <span style={{ color: "#48EDFF", fontSize: "16px" }}>✦</span>
        </div>
      </div>

      {/* Trust Badges */}
      <div
        className="contact-trust-badges"
        style={{
          position: "absolute",
          bottom: "30px", // Pinned to the bottom
          zIndex: 2,
          width: "100%",
          maxWidth: "640px", // Increased from 400px to make it bigger
          height: "60px", // Increased from 40px
        }}
      >
        <Image
          src="/landing page/Frame 2147223273.png"
          alt="Trust Badges"
          fill
          className="object-contain"
        />
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .contact-input-exact {
          width: 100%;
          background: rgba(4, 10, 22, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.05);
          borderRadius: 8px;
          padding: 12px 14px; /* Reduced input padding */
          color: #ffffff;
          font-size: 12px; /* Reduced font size */
          outline: none;
          transition: border-color 0.2s ease, background 0.2s ease;
          border-radius: 8px;
        }
        .contact-input-exact::placeholder {
          color: #475569;
        }
        .contact-input-exact:focus {
          border-color: rgba(72, 237, 255, 0.4);
          background: rgba(4, 10, 22, 0.8);
        }
        
        @media (max-width: 1024px) {
          .contact-left-text {
            position: relative !important;
            left: 0 !important;
            top: 0 !important;
            transform: none !important;
            text-align: center;
            margin-bottom: 40px;
          }
          .contact-left-text p {
            margin: 0 auto;
          }
          #contact > div:nth-child(2) {
            flex-direction: column;
            justify-content: center;
            padding-top: 40px;
          }
          .contact-horizontal-bar {
            display: none !important; /* Hide contact info completely on mobile */
          }
          form > div:first-child {
            flex-direction: column;
          }
          .contact-trust-badges {
            position: relative !important;
            bottom: auto !important;
            margin-top: 40px;
            margin-bottom: 20px;
            max-width: 90% !important;
            height: 40px !important;
          }
        }
        `
      }} />
    </section>
  );
}
