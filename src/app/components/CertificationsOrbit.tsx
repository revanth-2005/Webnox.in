"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface BadgeConfig {
  src: string;
  alt: string;
  radius: number; // radius in percentage of outer container (0 to 50)
  angle: number;  // angle in degrees (0 is top/right etc)
  size: number;   // size in pixels
}

const BADGES: BadgeConfig[] = [
  { src: "/cert-aws.png", alt: "AWS Certified", radius: 15, angle: 45, size: 46 },
  { src: "/cert-iso.png", alt: "ISO 9001:2015", radius: 15, angle: 220, size: 46 },
  { src: "/cert-shopify.png", alt: "Shopify Partner", radius: 27, angle: 300, size: 50 },
  { src: "/cert-dmi.png", alt: "Digital Marketing Institute Certified", radius: 27, angle: 125, size: 50 },
  { src: "/cert-google-ads.png", alt: "Google Ads Certified", radius: 39, angle: 335, size: 56 },
  { src: "/cert-google-partner.png", alt: "Google Partner", radius: 39, angle: 155, size: 56 },
  { src: "/cert-meta-business.png", alt: "Meta Business Partner", radius: 50, angle: 40, size: 66 },
  { src: "/cert-meta-certified.png", alt: "Meta Certified", radius: 50, angle: 105, size: 66 },
];

export default function CertificationsOrbit() {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<(HTMLDivElement | null)[]>([]);
  const centerLogoRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Helper to calculate target x and y positions in pixels based on container width
    const getPositions = () => {
      const rect = container.getBoundingClientRect();
      const size = rect.width; // container is square (aspect-ratio: 1)
      return BADGES.map((badge) => {
        const angleRad = (badge.angle * Math.PI) / 180;
        // Radius is in percentage (0 to 50) of the full width (size)
        // Since center is 50%, offset from center in pixels is:
        const x = (badge.radius / 100) * size * Math.cos(angleRad);
        const y = (badge.radius / 100) * size * Math.sin(angleRad);
        return { x, y };
      });
    };

    const positions = getPositions();

    // Context for easy GSAP cleanup
    const ctx = gsap.context(() => {
      // 1. Center Logo Entrance
      gsap.fromTo(
        centerLogoRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // 2. Concentric Rings Fade In & Scale Up slightly
      gsap.fromTo(
        ringsRef.current?.children || [],
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // 3. Badges Entrance (Blooming out from center W logo)
      BADGES.forEach((badge, idx) => {
        const badgeEl = badgesRef.current[idx];
        if (!badgeEl) return;

        const pos = positions[idx];

        gsap.fromTo(
          badgeEl,
          {
            x: -pos.x,
            y: -pos.y,
            scale: 0,
            opacity: 0,
          },
          {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1.6,
            delay: 0.2 + idx * 0.08,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            onComplete: () => {
              // 4. Subtle, persistent floating effect after entrance
              gsap.to(badgeEl, {
                y: "+=6",
                x: "+=3",
                duration: 2.5 + Math.random() * 1.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: Math.random() * 2,
              });
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "1/1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* 1. Concentric rings */}
      <div
        ref={ringsRef}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        {/* Ring 1 (Inner) */}
        <div
          style={{
            position: "absolute",
            inset: "35%",
            border: "1px solid rgba(77, 195, 254, 0.5)",
            borderRadius: "50%",
          }}
        />
        {/* Ring 2 */}
        <div
          style={{
            position: "absolute",
            inset: "23%",
            border: "1px solid rgba(77, 195, 254, 0.5)",
            borderRadius: "50%",
          }}
        />
        {/* Ring 3 */}
        <div
          style={{
            position: "absolute",
            inset: "11%",
            border: "1px solid rgba(77, 195, 254, 0.5)",
            borderRadius: "50%",
          }}
        />
        {/* Ring 4 (Outer) */}
        <div
          style={{
            position: "absolute",
            inset: "0%",
            border: "1px solid rgba(77, 195, 254, 0.5)",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* 2. Glow effect behind center logo */}
      <div
        style={{
          position: "absolute",
          width: "25%",
          height: "25%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0, 104, 247, 0.15) 0%, rgba(0, 104, 247, 0) 70%)",
          filter: "blur(12px)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* 3. Center Webnox Logo */}
      <div
        ref={centerLogoRef}
        style={{
          position: "relative",
          width: "13%",
          height: "13%",
          zIndex: 10,
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0, 104, 247, 0.15)",
          background: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.15) rotate(5deg)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1) rotate(0deg)";
        }}
      >
        <Image
          src="/webnox-center-logo.png"
          alt="Webnox Center Logo"
          fill
          className="object-contain p-2"
          priority
        />
      </div>

      {/* 4. Certification Badges */}
      {BADGES.map((badge, idx) => {
        const angleRad = (badge.angle * Math.PI) / 180;
        const xOffset = badge.radius * Math.cos(angleRad);
        const yOffset = badge.radius * Math.sin(angleRad);

        return (
          <div
            key={badge.src}
            ref={(el) => {
              badgesRef.current[idx] = el;
            }}
            style={{
              position: "absolute",
              left: `calc(50% + ${xOffset}%)`,
              top: `calc(50% + ${yOffset}%)`,
              width: `${badge.size}px`,
              height: `${badge.size}px`,
              transform: "translate(-50%, -50%)",
              zIndex: 20,
              cursor: "pointer",
              borderRadius: "50%",
              background: "#ffffff",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
              border: "1px solid rgba(0, 0, 0, 0.04)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "6px",
              transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, border-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translate(-50%, -50%) scale(1.15)";
              e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 104, 247, 0.15)";
              e.currentTarget.style.borderColor = "rgba(0, 104, 247, 0.2)";
              e.currentTarget.style.zIndex = "30";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translate(-50%, -50%) scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.05)";
              e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.04)";
              e.currentTarget.style.zIndex = "20";
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                src={badge.src}
                alt={badge.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
