"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "Website Designing",
    desc: "We Design Websites That Are Creative, Mobile Responsive, Lag-Free, Eye-Catching, And SEO Friendly.",
    blueImg: "/landing page/website design blue.png",
    whiteImg: "/landing page/website design white.png",
  },
  {
    title: "Web Development",
    desc: "We Work To Create Highly Optimized Mobile-Responsive Web Applications Across Diverse Industries, Ensuring optimal performance.",
    blueImg: "/landing page/web deve blue.png",
    whiteImg: "/landing page/web deve white.png",
  },
  {
    title: "Static Website",
    desc: "We Create Professional Static Websites For Small Businesses And Start-Ups With High Levels Of Quality And Reliability.",
    blueImg: "/landing page/static web blue.png",
    whiteImg: "/landing page/static web white.png",
  },
  {
    title: "Dynamic Websites",
    desc: "We Offer Business-Focused, Dynamic, And Data-Driven Web Development Services That Are Suitable For Businesses Of All Types.",
    blueImg: "/landing page/dynamic website blue.png",
    whiteImg: "/landing page/dynamic website white.png",
  },
  {
    title: "Ecommerce Development",
    desc: "Utilizing Our Expertise In Shopping Cart Development, Well-Structured E-Commerce Front Stores, And Implementing secure checkout.",
    blueImg: "/landing page/ecom dev blue.png",
    whiteImg: "/landing page/ecom dev white.png",
  },
  {
    title: "Responsive Website",
    desc: "We Are The No.1 Web Design Firm In Coimbatore. Our Specialty Is Designing Mobile-Responsive, fluid layout websites.",
    blueImg: "/landing page/responsive site blue.png",
    whiteImg: "/landing page/responsive site white.png",
  },
];

export default function WebServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(
        headerRef.current?.children || [],
        { y: 30, opacity: 0 },
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

      // Grid entrance
      gsap.fromTo(
        gridRef.current?.children || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{
        background: "#ffffff",
        padding: "90px 40px 100px 40px",
        fontFamily: "'Stack Sans Headline', sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Header Area */}
      <div
        ref={headerRef}
        className="services-header"
        style={{
          maxWidth: "1200px",
          margin: "0 auto 60px auto",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "40px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left", flex: 1 }}>
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
            <span>What We Offer</span>
          </div>

          <h2
            style={{
              fontFamily: "'Stack Sans Headline', sans-serif",
              fontSize: "clamp(30px, 3.4vw, 46px)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#0a0a0a",
              letterSpacing: "-0.02em",
              margin: "0 0 16px 0",
            }}
          >
            Our Exciting &amp; Inspiring Web Design Services
          </h2>

          <p
            style={{
              fontFamily: "'Stack Sans Headline', sans-serif",
              fontSize: "clamp(13px, 0.9vw, 15px)",
              fontWeight: 400,
              color: "#555555",
              lineHeight: 1.6,
              maxWidth: "640px",
              margin: 0,
            }}
          >
            We Create Modern, High-Performing Websites Designed To Attract, Engage, And Convert
            Your Ideal Customers.
          </p>
        </div>

        {/* Get Started Button */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "#0c1735",
            borderRadius: "10px",
            padding: "16px 28px",
            color: "#ffffff",
            fontWeight: 600,
            fontSize: "14px",
            cursor: "pointer",
            flexShrink: 0,
            transition: "transform 0.2s ease, background-color 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.backgroundColor = "#0068F7";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.backgroundColor = "#0c1735";
          }}
        >
          <span>Get Started</span>
          <span style={{
            fontSize: "14px",
            width: "20px",
            height: "20px",
            background: "rgba(255,255,255,0.15)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>→</span>
        </div>
      </div>

      {/* Grid container */}
      <div
        ref={gridRef}
        className="services-grid"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "30px",
        }}
      >
        {services.map((svc, idx) => {
          const isHovered = hoveredIndex === idx;
          return (
            <div
              key={svc.title}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                position: "relative",
                background: "#f3f5f9",
                borderRadius: "20px",
                padding: "40px 32px 36px 32px",
                minHeight: "280px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                cursor: "pointer",
                boxShadow: isHovered
                  ? "0 12px 30px rgba(12, 19, 42, 0.15)"
                  : "inset 0 1px 0 rgba(255,255,255,0.4)",
                transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                overflow: "hidden",
              }}
            >
              {/* Sliding background div */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(225deg, #1D2C68 0%, #0C132A 100%)",
                  transform: isHovered ? "translateY(0)" : "translateY(100%)",
                  transition: "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                  borderRadius: "20px",
                  zIndex: 0,
                  pointerEvents: "none",
                }}
              />

              {/* Header Icon with Hover Toggle */}
              <div style={{ position: "relative", width: "48px", height: "48px", marginBottom: "32px", zIndex: 1 }}>
                <div style={{ position: "absolute", inset: 0, opacity: isHovered ? 0 : 1, transition: "opacity 0.3s ease" }}>
                  <Image src={svc.blueImg} alt={svc.title} fill className="object-contain" />
                </div>
                <div style={{ position: "absolute", inset: 0, opacity: isHovered ? 1 : 0, transition: "opacity 0.3s ease" }}>
                  <Image src={svc.whiteImg} alt={svc.title} fill className="object-contain" />
                </div>
              </div>

              {/* Bottom text */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <h3
                  style={{
                    fontFamily: "'Stack Sans Headline', sans-serif",
                    fontSize: "22px",
                    fontWeight: 700,
                    marginBottom: "12px",
                    color: isHovered ? "#ffffff" : "#051A47",
                    transition: "color 0.3s ease",
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Stack Sans Headline', sans-serif",
                    fontSize: "13px",
                    fontWeight: 400,
                    lineHeight: 1.6,
                    color: isHovered ? "rgba(255, 255, 255, 0.78)" : "#555555",
                    transition: "color 0.3s ease",
                  }}
                >
                  {svc.desc}
                </p>
                <div
                  style={{
                    display: "inline-block",
                    marginTop: "16px",
                    fontSize: "13px",
                    fontWeight: 600,
                    textDecoration: "underline",
                    color: isHovered ? "#ffffff" : "#051A47",
                    transition: "color 0.3s ease",
                  }}
                >
                  read more...
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1023px) {
          #services {
            padding: 60px 20px !important;
          }
          .services-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 20px !important;
            margin-bottom: 40px !important;
          }
          .services-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 639px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .services-grid > div {
            padding: 32px 24px !important;
          }
        }
      `}} />
    </section>
  );
}
