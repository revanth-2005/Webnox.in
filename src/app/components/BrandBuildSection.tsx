"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BrandBuildSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        headerRef.current?.children || [],
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      // Cards entrance
      gsap.fromTo(
        cardsRef.current?.children || [],
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Target graphic slide up from bottom
      const rightTarget = cardsRef.current?.querySelector(".card-target-graphic");
      if (rightTarget) {
        gsap.fromTo(
          rightTarget,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.5,
            delay: 0.6,
            ease: "back.out(1.1)",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="brand-build"
      style={{
        background: "#ffffff",
        padding: "0px 40px 100px 40px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* 1. Header Area */}
      <div
        ref={headerRef}
        style={{
          maxWidth: "800px",
          margin: "0 auto 60px auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            border: "0.88px solid transparent",
            borderRadius: "9999px",
            padding: "6px 18px 6px 14px",
            background: "linear-gradient(#fff, #fff) padding-box, linear-gradient(135deg, #4BC3FE 0%, #0068F7 40%, #012B8F 70%, #00154A 100%) border-box",
            fontFamily: "'Stack Sans Headline', sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            color: "#0f0f0f",
            width: "fit-content",
            marginBottom: "24px",
          }}
        >
          <span style={{ color: "#0068F7", fontSize: "12px", fontWeight: 600 }}>✦</span>
          <span>Built For Impact</span>
        </div>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Stack Sans Headline', sans-serif",
            fontSize: "clamp(32px, 3.6vw, 48px)",
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#0a0a0a",
            letterSpacing: "-0.02em",
            margin: "0 0 20px 0",
          }}
        >
          We Don't Just Build Websites,
          <br />
          We Build Brands
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Stack Sans Headline', sans-serif",
            fontSize: "clamp(13px, 0.9vw, 15px)",
            fontWeight: 400,
            color: "#555555",
            lineHeight: 1.6,
            maxWidth: "680px",
            margin: 0,
          }}
        >
          We Create High-Performing Websites That Go Beyond Design — Helping Your Brand Stand
          Out, Connect With The Right Audience, And Drive Real Growth.
        </p>
      </div>

      {/* 2. Grid Container for Cards */}
      <div
        ref={cardsRef}
        className="grid-container"
        style={{
          maxWidth: "980px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
        }}
      >
        {/* Left Card (Dark Navy Theme) */}
        <div
          className="brand-build-card brand-build-card-left"
          style={{
            position: "relative",
            background: "linear-gradient(225deg, #1D2C68 0%, #0C132A 100%)",
            borderRadius: "28px",
            padding: "48px",
            height: "480px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(2, 8, 22, 0.08)",
          }}
        >
          {/* Glass Decor in Top Right */}
          <div
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "130px",
              height: "130px",
              pointerEvents: "none",
              opacity: 0.85,
            }}
          >
            <Image
              src="/landing page/webnox glass low fade.png"
              alt="Webnox Glass Graphic"
              fill
              className="object-contain"
            />
          </div>

          {/* Top content */}
          <div>
            {/* Icon Container */}
            <div
              style={{
                width: "56px",
                height: "56px",
                position: "relative",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "32px",
              }}
            >
              <Image
                src="/landing page/Frame 2147223067 (1).png"
                alt="Diamond Icon"
                width={30}
                height={30}
                className="object-contain"
              />
            </div>

            {/* Card Heading */}
            <h3
              style={{
                fontFamily: "'Stack Sans Headline', sans-serif",
                fontSize: "clamp(24px, 2.4vw, 32px)",
                fontWeight: 700,
                lineHeight: 1.25,
                marginBottom: "24px",
              }}
            >
              <span style={{
                background: "linear-gradient(90deg, #FEFEFF 0%, #BCD6F9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block"
              }}>We Don't Just</span>
              <br />
              <span style={{
                background: "linear-gradient(90deg, #FEFEFF 0%, #BCD6F9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block"
              }}>Build Websites,</span>
              <br />
              <span style={{
                background: "linear-gradient(90deg, #FEFEFF 0%, #BCD6F9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block"
              }}>We Build Brands</span>
            </h3>

            {/* Divider */}
            <div
              style={{
                width: "100%",
                height: "1px",
                background: "linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%)",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: "0",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#ffffff",
                  fontSize: "10px",
                }}
              >
                ✦
              </span>
            </div>
          </div>

          {/* Bottom Button */}
          <div
            className="brand-build-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "#0068F7",
              borderRadius: "9999px",
              padding: "14px 28px",
              color: "#ffffff",
              fontWeight: 600,
              fontSize: "13px",
              letterSpacing: "0.02em",
              cursor: "pointer",
              width: "fit-content",
              transition: "transform 0.2s ease, background-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.backgroundColor = "#2563eb";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.backgroundColor = "#0068F7";
            }}
          >
            {/* Rocket Icon */}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" />
              <path d="M12 2C6.5 2 2 6.5 2 12c0 2.25 1 4.5 2.5 6l11.5-11.5c-1.5-1.5-3.75-2.5-6-2.5z" />
              <path d="M6 18c1.5 1.5 3.75 2.5 6 2.5 5.5 0 10-4.5 10-10 0-2.25-1-4.5-2.5-6L8 16c0 0 0 0 0 0z" />
              <path d="M12 12l9 9" />
              <path d="M16 8l5 5" />
            </svg>
            <span>LET'S BUILD YOUR DREAM WEBSITE</span>
            <span style={{ fontSize: "14px" }}>→</span>
          </div>
        </div>

        {/* Right Card (Vibrant Royal Blue Theme) */}
        <div
          className="brand-build-card brand-build-card-right"
          style={{
            position: "relative",
            background: "linear-gradient(135deg, #1d5bf5 0%, #153ca3 50%, #061233 100%)",
            borderRadius: "28px",
            padding: "48px",
            height: "480px",
            display: "flex",
            flexDirection: "column",
            overflow: "visible",
            boxShadow: "0 10px 30px rgba(26, 86, 219, 0.08)",
          }}
        >
          {/* Target Decoration at Bottom Right */}
          <div
            className="card-target-graphic"
            style={{
              position: "absolute",
              bottom: "-15px",
              right: "-15px",
              width: "180px",
              height: "180px",
              pointerEvents: "none",
            }}
          >
            <Image
              src="/landing page/arroe.png"
              alt="Arrow Graphic"
              fill
              className="object-contain"
            />
          </div>

          {/* Top content */}
          <div>
            {/* Star Icon Container */}
            <div
              style={{
                width: "56px",
                height: "56px",
                position: "relative",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "32px",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>

            {/* Card Heading */}
            <h3
              style={{
                fontFamily: "'Stack Sans Headline', sans-serif",
                fontSize: "clamp(24px, 2.4vw, 32px)",
                fontWeight: 700,
                lineHeight: 1.25,
                marginBottom: "24px",
              }}
            >
              <span style={{
                background: "linear-gradient(90deg, #FEFEFF 0%, #BCD6F9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block"
              }}>Don't Blend In,</span>
              <br />
              <span style={{
                background: "linear-gradient(90deg, #FEFEFF 0%, #BCD6F9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block"
              }}>Stand Out</span>
            </h3>

            {/* Divider */}
            <div
              style={{
                width: "100%",
                height: "1px",
                background: "linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%)",
                position: "relative",
                marginBottom: "24px",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: "0",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#ffffff",
                  fontSize: "10px",
                }}
              >
                ✦
              </span>
            </div>

            {/* Body text */}
            <p
              className="brand-build-desc"
              style={{
                fontFamily: "'Stack Sans Headline', sans-serif",
                fontSize: "clamp(12px, 0.8vw, 13.5px)",
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.82)",
                lineHeight: 1.6,
                maxWidth: "390px",
                margin: 0,
                zIndex: 5,
              }}
            >
              We Webnox Technologies, A Top-Notch Website Designing Company And Premium Web Development
              Company In Coimbatore, Provide Complete{" "}
              <a
                href="#"
                style={{
                  color: "#ffffff",
                  fontWeight: 600,
                  textDecoration: "underline",
                }}
              >
                Readmore...
              </a>
            </p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .brand-build-card {
          padding: 48px;
          height: 480px;
        }
        .brand-build-btn {
          font-size: 13px;
        }
        .brand-build-desc {
          max-width: 390px;
        }
        .card-target-graphic {
          width: 140px !important;
          height: 140px !important;
        }
        @media (max-width: 1023px) {
          #brand-build {
            padding: 0px 20px 80px 20px !important;
          }
          .grid-container {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .brand-build-card {
            padding: 32px !important;
            height: auto !important;
            min-height: 400px;
          }
          .brand-build-desc {
            max-width: 65% !important;
          }
        }
        @media (max-width: 639px) {
          .brand-build-card {
            padding: 24px !important;
            min-height: 340px;
          }
          .brand-build-btn {
            font-size: 10px !important;
            padding: 10px 16px !important;
            width: 100% !important;
            justify-content: center !important;
          }
          .card-target-graphic {
            width: 110px !important;
            height: 110px !important;
            bottom: -8px !important;
            right: -8px !important;
          }
          .brand-build-desc {
            max-width: 60% !important;
          }
        }
      `}} />
    </section>
  );
}
