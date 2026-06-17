"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CertificationsOrbit from "./CertificationsOrbit";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const textSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textSection = textSectionRef.current;
    if (!textSection) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textSection.children,
        {
          y: 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textSection,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, textSection);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      style={{
        background: '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 40px',
        fontFamily: "'Stack Sans Headline', sans-serif",
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div className="about-grid" style={{
        maxWidth: '1020px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
      }}>

        {/* LEFT: Text Content */}
        <div className="about-left-content" ref={textSectionRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

          {/* Built To Scale Badge */}
          <div style={{ marginBottom: '32px' }}>
            <Image
              src="/built-to-scale.png"
              alt="Built To Scale"
              width={169}
              height={36}
              className="object-contain"
            />
          </div>

          {/* Main heading */}
          <h2 style={{
            fontFamily: "'Stack Sans Headline', sans-serif",
            fontSize: 'clamp(28px, 3.0vw, 44px)',
            fontWeight: 800,
            lineHeight: 1.05,
            color: '#0a0a0a',
            letterSpacing: '-0.02em',
            margin: '0 0 14px 0',
          }}>
            Leading <span style={{
              background: 'linear-gradient(90deg, #4BC3FE 0%, #0068F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>Web Design</span>
            <br />Company In Coimbatore
          </h2>

          {/* Subtitle */}
          <p style={{
            fontFamily: "'Stack Sans Headline', sans-serif",
            fontSize: 'clamp(13px, 0.9vw, 15px)',
            fontWeight: 600,
            color: '#111',
            margin: '0 0 18px 0',
            lineHeight: 1.4,
          }}>
            Providing One Stop Best Web Solutions For All Your Business Needs!
          </p>

          <p style={{
            fontFamily: "'Stack Sans Headline', sans-serif",
            fontSize: 'clamp(12px, 0.8vw, 13.5px)',
            fontWeight: 400,
            color: '#555',
            lineHeight: 1.75,
            maxWidth: '460px',
            margin: 0,
          }}>
            We Webnox Technologies, A Top-Notch Website Designing Company And Premium Web
            Development Company In Coimbatore, Provide Complete Web Design Services That Are
            Affordable, Best In Quality, And Result Oriented.{' '}
            <a href="#" style={{ color: '#0068F7', fontWeight: 500, textDecoration: 'none' }}>ReadMore...</a>
          </p>
        </div>

        {/* RIGHT: Concentric Circles with Certification Badges */}
        <div className="about-orbit-wrapper">
          <CertificationsOrbit />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .about-orbit-wrapper {
          position: relative;
          width: 85%;
          margin: 0 auto;
        }
        @media (max-width: 1023px) {
          #about {
            padding: 60px 20px !important;
            min-height: auto !important;
          }
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            justify-items: center;
          }
          .about-left-content {
            align-items: center !important;
            text-align: center !important;
          }
          .about-left-content h2 {
            text-align: center !important;
          }
          .about-left-content p {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .about-orbit-wrapper {
            width: 75% !important;
            max-width: 400px;
          }
        }
        @media (max-width: 639px) {
          .about-orbit-wrapper {
            width: 100% !important;
            max-width: 280px !important; /* Make it smaller on mobile! */
          }
          #about {
            padding: 50px 16px !important;
          }
        }
      `}} />
    </section>
  );
}
