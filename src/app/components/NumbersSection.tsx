"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const FONT_SANS = "var(--font-geist-sans), 'Inter', var(--font-sans), sans-serif";


/* ─── Stat data ─────────────────────────────────────────────── */
const topStats = [
  {
    number: "1450+",
    label: "Websites Designed",
    desc: "High-Performing, Responsive Websites Crafted For Growth And Impact.",
    imgSrc: "/1grid.png",
    colSpan: 1,
  },
  {
    number: "1200+",
    label: "Clients",
    desc: "Trusted By Startups, Brands, And Enterprises Worldwide.",
    imgSrc: "/2grid.png",
    colSpan: 1,
  },
  {
    number: "70+",
    label: "Experts",
    desc: "Skilled Professionals Dedicated To Your Success.",
    imgSrc: "/3grid.png",
    colSpan: 1,
  },
  {
    number: "40+",
    label: "Countries Covered",
    desc: "Serving Clients The Globe With Pride.",
    imgSrc: "/4grid.png",
    colSpan: 1,
  },
];

const bottomStats = [
  {
    number: "15+",
    label: "Awards & Recognition",
    desc: "Recognised For Innovation, Quality, And Outstanding Performance.",
    imgSrc: "/5grid.png",
    colSpan: 1,
  },
  {
    number: "15+",
    label: "Years Of Experience",
    desc: "Years Of Delivering Excellence And Building Lasting Partnerships.",
    imgSrc: "/6grid.png",
    colSpan: 1,
  },
  {
    number: "20+",
    label: "Own Products",
    desc: "Powerful Digital Products Built To Solve Real-World Problems.",
    imgSrc: "/7grid.png",
    colSpan: 1,
  },
];

/* ─── Animated counter hook ─────────────────────────────────── */
function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

/* ─── Card Config Helper ────────────────────────────────────── */
function getCardConfig(number: string, label: string, tall: boolean) {
  if (tall) {
    return {
      textWidth: "100%",
      imageStyle: {
        position: "absolute" as const,
        right: "-40px",
        bottom: "-40px",
        width: "330px",
        height: "330px",
      }
    };
  }

  if (label.includes("Awards")) {
    return {
      textWidth: "60%",
      imageStyle: {
        position: "absolute" as const,
        right: "-15px",
        bottom: "-20px",
        width: "185px",
        height: "185px",
      }
    };
  }

  if (label.includes("Years")) {
    return {
      textWidth: "60%",
      imageStyle: {
        position: "absolute" as const,
        right: "-10px",
        bottom: "-15px",
        width: "145px",
        height: "145px",
      }
    };
  }

  switch (number) {
    case "1200+": // Clients
      return {
        textWidth: "55%",
        imageStyle: {
          position: "absolute" as const,
          right: "-15px",
          bottom: "-20px",
          width: "165px",
          height: "165px",
        }
      };
    case "70+": // Experts
      return {
        textWidth: "60%",
        imageStyle: {
          position: "absolute" as const,
          right: "-15px",
          bottom: "-10px",
          width: "160px",
          height: "160px",
        }
      };
    case "40+": // Countries Covered
      return {
        textWidth: "55%",
        imageStyle: {
          position: "absolute" as const,
          right: "-35px",
          bottom: "-30px",
          width: "210px",
          height: "210px",
        }
      };
    case "20+": // Own Products
      return {
        textWidth: "60%",
        imageStyle: {
          position: "absolute" as const,
          right: "-15px",
          bottom: "-20px",
          width: "155px",
          height: "155px",
        }
      };
    default:
      return {
        textWidth: "60%",
        imageStyle: {
          position: "absolute" as const,
          right: "-10px",
          bottom: "-10px",
          width: "140px",
          height: "140px",
        }
      };
  }
}

/* ─── Individual stat card ──────────────────────────────────── */
function StatCard({
  number,
  label,
  desc,
  imgSrc,
  tall = false,
  animStart,
}: {
  number: string;
  label: string;
  desc: string;
  imgSrc: string;
  tall?: boolean;
  animStart: boolean;
}) {
  const numericMatch = number.match(/^(\d+)(\+?)$/);
  const numericVal = numericMatch ? parseInt(numericMatch[1]) : 0;
  const suffix = numericMatch ? numericMatch[2] : "";
  const animated = useCountUp(numericVal, 1600, animStart);
  const config = getCardConfig(number, label, tall);

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #17426E 0%, #051A47 100%)",
        border: "1px solid rgba(77,166,255,0.12)",
        borderRadius: "16px",
        padding: "24px 22px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: "10px",
        backdropFilter: "blur(12px)",
        boxShadow: "0 4px 32px rgba(0,60,180,0.06), inset 0 1px 0 rgba(255,255,255,0.02)",
        position: "relative",
        overflow: "hidden",
        height: "100%",
        minHeight: tall ? "340px" : "185px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 8px 48px rgba(0,104,247,0.18), inset 0 1px 0 rgba(255,255,255,0.05)";
        el.style.borderColor = "rgba(77,166,255,0.28)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "0 4px 32px rgba(0,60,180,0.06), inset 0 1px 0 rgba(255,255,255,0.02)";
        el.style.borderColor = "rgba(77,166,255,0.12)";
      }}
    >
      {/* Subtle corner glow */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "80px",
        height: "80px",
        background: "radial-gradient(circle at top left, rgba(0,104,247,0.12) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Text Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: config.textWidth, display: "flex", flexDirection: "column", gap: "6px" }}>
        <div>
          <div style={{
            fontFamily: FONT_SANS,
            fontSize: tall ? "clamp(38px, 4vw, 58px)" : "clamp(28px, 2.6vw, 40px)",
            fontWeight: 500,
            color: "#ffffff",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}>
            {animated}{suffix}
          </div>
          <div style={{
            fontFamily: FONT_SANS,
            fontSize: "22px",
            fontWeight: 300,
            color: "#ffffff",
            marginTop: "6px",
            letterSpacing: "0.01em",
            whiteSpace: "nowrap",
          }}>
            {label}
          </div>
        </div>

        {/* Divider line with star */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          marginTop: "2px",
          marginBottom: "2px",
          width: "100%",
        }}>
          <span style={{ color: "#ffffff", fontSize: "9px", opacity: 0.7, lineHeight: 1 }}>✦</span>
          <div style={{
            height: "1px",
            width: "80px",
            background: "linear-gradient(90deg, rgba(255,255,255,0.4) 0%, transparent 100%)",
          }} />
        </div>

        {/* Description */}
        <p style={{
          fontFamily: FONT_SANS,
          fontSize: "12px",
          fontWeight: 300,
          color: "#B0C4DE",
          lineHeight: 1.55,
          margin: 0,
        }}>
          {desc}
        </p>
      </div>

      {/* Absolutely Positioned Illustration Image */}
      <div style={config.imageStyle}>
        <Image
          src={imgSrc}
          alt={label}
          fill
          className="object-contain"
          style={{ filter: "drop-shadow(0 4px 16px rgba(0,104,247,0.35))" }}
        />
      </div>
    </div>
  );
}

/* ─── Main Section ───────────────────────────────────────────── */
export default function NumbersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animStart, setAnimStart] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimStart(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="numbers"
      style={{
        background: "#000714",
        padding: "80px 40px 90px",
        fontFamily: FONT_SANS,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background radial glows */}
      <div style={{
        position: "absolute", top: "10%", left: "15%",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(0,104,247,0.10) 0%, transparent 70%)",
        filter: "blur(40px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "10%",
        width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(0,104,247,0.08) 0%, transparent 70%)",
        filter: "blur(50px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Badge */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "22px",
        }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "rgba(0, 104, 247, 0.1)",
            border: "1.2px solid rgba(0, 104, 247, 0.35)",
            borderRadius: "9999px",
            padding: "6px 18px",
            fontFamily: FONT_SANS,
            boxShadow: "0 0 15px rgba(0, 104, 247, 0.1)",
          }}>
            <span style={{ color: "#4DA6FF", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em" }}>
              ✦ Driven By Results.
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 style={{
          fontFamily: FONT_SANS,
          textAlign: "center",
          fontSize: "clamp(34px, 4.2vw, 48px)",
          fontWeight: 300,
          color: "#ffffff",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          margin: "0 auto 48px",
          maxWidth: "800px",
        }}>
          Our Numbers Speak About<br />
          Our Proven Success, Trusted Expertise
        </h2>

        {/* ── BENTO LAYOUT: tall card left + 2-row right grid ── */}
        <div style={{
          display: "flex",
          gap: "16px",
          marginBottom: "16px",
        }}>
          {/* Col 1 — 1450+ Websites — full height tall card */}
          <div style={{ width: "21%", flexShrink: 0 }}>
            <StatCard {...topStats[0]} tall animStart={animStart} />
          </div>

          {/* Right section — 2 stacked rows */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "16px" }}>

            {/* Row 1: small | small | BIG — 1fr 1fr 1.5fr */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1.5fr",
              gap: "16px",
              flex: 1,
            }}>
              <StatCard {...topStats[1]} animStart={animStart} />
              <StatCard {...topStats[2]} animStart={animStart} />
              <StatCard {...topStats[3]} animStart={animStart} />
            </div>

            {/* Row 2: BIG | small | small — 1.5fr 1fr 1fr */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1.5fr 1fr 1fr",
              gap: "16px",
              flex: 1,
            }}>
              <StatCard {...bottomStats[0]} animStart={animStart} />
              <StatCard {...bottomStats[1]} animStart={animStart} />
              <StatCard {...bottomStats[2]} animStart={animStart} />
            </div>

          </div>
        </div>

        {/* ── WIDE BOTTOM CARD: 100% Customisable Designs ── */}
        <div
          style={{
            background: "linear-gradient(135deg, #17426E 0%, #051A47 100%)",
            border: "1px solid rgba(77,166,255,0.12)",
            borderRadius: "20px",
            padding: "32px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            backdropFilter: "blur(12px)",
            boxShadow: "0 4px 32px rgba(0,60,180,0.06), inset 0 1px 0 rgba(255,255,255,0.02)",
            position: "relative",
            overflow: "hidden",
            transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
            cursor: "default",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.transform = "translateY(-4px)";
            el.style.boxShadow = "0 8px 48px rgba(0,104,247,0.18), inset 0 1px 0 rgba(255,255,255,0.05)";
            el.style.borderColor = "rgba(77,166,255,0.28)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.transform = "translateY(0)";
            el.style.boxShadow = "0 4px 32px rgba(0,60,180,0.06), inset 0 1px 0 rgba(255,255,255,0.02)";
            el.style.borderColor = "rgba(77,166,255,0.12)";
          }}
        >
          {/* Large blue glow left */}
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0,
            width: "320px",
            background: "radial-gradient(ellipse at left center, rgba(0,104,247,0.14) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          {/* LEFT: Big percentage text */}
          <div style={{ flexShrink: 0 }}>
            <div style={{
              fontFamily: FONT_SANS,
              fontSize: "clamp(52px, 5.5vw, 80px)",
              fontWeight: 500,
              color: "#ffffff",
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}>
              100%
            </div>
            <div style={{
              fontFamily: FONT_SANS,
              fontSize: "22px",
              fontWeight: 300,
              color: "#ffffff",
              marginTop: "8px",
              letterSpacing: "0.01em",
              whiteSpace: "nowrap",
            }}>
              Customisable Designs
            </div>
            {/* Divider line with star */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              marginTop: "8px",
              marginBottom: "2px",
              width: "100%",
            }}>
              <span style={{ color: "#ffffff", fontSize: "9px", opacity: 0.7, lineHeight: 1 }}>✦</span>
              <div style={{
                height: "1px",
                width: "80px",
                background: "linear-gradient(90deg, rgba(255,255,255,0.4) 0%, transparent 100%)",
              }} />
            </div>
          </div>

          {/* CENTER: 8grid.png design tool image */}
          <div style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <div style={{ position: "relative", width: "440px", height: "200px" }}>
              <Image
                src="/8grid.png"
                alt="Customisable Design Tool"
                fill
                className="object-contain"
                style={{ filter: "drop-shadow(0 8px 24px rgba(0,104,247,0.4))" }}
              />
            </div>
          </div>

          {/* RIGHT: Tagline text */}
          <div style={{ flexShrink: 0, maxWidth: "340px", textAlign: "right" }}>
            <div style={{
              fontFamily: FONT_SANS,
              fontSize: "clamp(16px, 1.8vw, 26px)",
              fontWeight: 300,
              color: "#ffffff",
              lineHeight: 1.35,
            }}>
              Fully{" "}
              <span style={{
                fontFamily: "'Caveat', cursive",
                fontSize: "clamp(24px, 2.6vw, 36px)",
                background: "linear-gradient(90deg, #4DA6FF, #0068F7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 700,
                display: "inline-block",
                verticalAlign: "middle",
                marginTop: "-4px",
              }}>
                Customised designs
              </span>
              <br />
              Tailored To Match Your
              <br />
              Brand &amp; Perfectly.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
