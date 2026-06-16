"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import QuoteSection from "../components/QuoteSection";
import ClientsSection from "../components/ClientsSection";
import NumbersSection from "../components/NumbersSection";
import ReachMoreSection from "../components/ReachMoreSection";

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
    {/* ─────────────── PAGE 1: HERO ─────────────── */}
    <main className="relative min-h-screen bg-black text-white flex flex-col items-center justify-between overflow-hidden font-sans selection:bg-blue-600/30 selection:text-white">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 12px rgba(29, 155, 255, 0.3); }
          50% { box-shadow: 0 0 24px rgba(29, 155, 255, 0.6); }
        }
        @keyframes orbit-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }
        .nav-link {
          color: rgba(255,255,255,0.78);
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          font-weight: 400;
          letter-spacing: 0.015em;
          text-decoration: none;
          padding: 4px 11px;
          white-space: nowrap;
          transition: color 0.2s ease;
          position: relative;
          display: inline-block;
        }
        .nav-link:hover { color: #ffffff; }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0px;
          left: 50%;
          right: 50%;
          height: 1.5px;
          background: #ffffff;
          transition: left 0.22s ease, right 0.22s ease;
          border-radius: 2px;
        }
        .nav-link:hover::after { left: 11px; right: 11px; }
        .nav-link.active {
          color: #ffffff;
          font-weight: 500;
        }
        .nav-link.active::after {
          left: 11px;
          right: 11px;
        }

        /* ── Section 2 styles ── */
        .s2-built-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 0.88px solid transparent;
          border-radius: 9999px;
          padding: 6px 18px 6px 14px;
          background:
            linear-gradient(#fff, #fff) padding-box,
            linear-gradient(135deg, #4BC3FE 0%, #0068F7 40%, #012B8F 70%, #00154A 100%) border-box;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #0f0f0f;
          width: fit-content;
          margin-bottom: 28px;
        }
        .s2-built-badge .badge-icon {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
        }

        .s2-heading {
          font-family: 'Inter', sans-serif;
          font-size: clamp(32px, 3.6vw, 52px);
          font-weight: 800;
          line-height: 1.05;
          color: #0a0a0a;
          letter-spacing: -0.02em;
          margin: 0 0 12px 0;
        }
        .s2-heading .blue {
          color: #0068F7;
        }
        .s2-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: clamp(15px, 1.15vw, 18px);
          font-weight: 600;
          color: #111;
          margin: 0 0 20px 0;
        }
        .s2-body {
          font-family: 'Inter', sans-serif;
          font-size: clamp(13px, 0.9vw, 15px);
          font-weight: 400;
          color: #444;
          line-height: 1.7;
          max-width: 440px;
          margin: 0;
        }
        .s2-body a {
          color: #0068F7;
          text-decoration: none;
          font-weight: 500;
        }

        /* Circle orbit badges */
        .orbit-badge {
          position: absolute;
          transform: translate(-50%, -50%);
        }
      `}} />
      {/* Background chevrons/W shapes */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none z-0"
        style={{ backgroundImage: "url('/W bg 1.png')", opacity: 0.85, top: '75px' }}
      />

      {/* Header / Navbar */}
      <header
        className="relative w-full z-50 flex justify-center items-center"
        style={{
          background: '#07080e',
          borderBottom: '1px solid rgba(255,255,255,0.10)',
          minHeight: '58px',
        }}
      >
        <div className="flex items-center" style={{ gap: '8px' }}>
          <div className="flex items-center select-none" style={{ paddingRight: '8px' }}>
            <Image
              src="/webnox-logo-official.png"
              alt="Webnox Technologies Pvt Ltd"
              width={120}
              height={46}
              className="object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
              priority
            />
          </div>
          <div style={{
            width: '1px',
            height: '22px',
            background: 'rgba(255,255,255,0.15)',
            marginRight: '4px',
          }} />
          <nav className="flex items-center">
            <Link href="#" className="nav-link active">Home</Link>
            <Link href="#" className="nav-link">Services</Link>
            <Link href="#" className="nav-link">Hire &amp; Outsourcing</Link>
            <Link href="#" className="nav-link">Products</Link>
            <Link href="#" className="nav-link">Packages</Link>
            <Link href="#" className="nav-link">Company</Link>
            <Link href="#" className="nav-link">Careers</Link>
            <Link href="#" className="nav-link">Contact US</Link>
          </nav>
        </div>
      </header>

      {/* Hero Content Area */}
      <section
        className="relative flex-1 flex flex-col items-center justify-center text-center px-6 pt-0 z-10 w-full"
        style={{ transform: 'translateY(-140px)' }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            width: '700px',
            height: '400px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(ellipse at center, rgba(0,102,255,0.18) 0%, rgba(0,102,255,0.06) 50%, transparent 75%)',
            filter: 'blur(20px)',
            zIndex: 0,
          }}
        />
        <div
          className="relative inline-flex rounded-full mb-6 overflow-hidden"
          style={{ padding: '1.5px', zIndex: 1, transform: 'translateY(-10px)' }}
        >
          <div
            className="absolute inset-[-1000%] pointer-events-none"
            style={{
              background: 'conic-gradient(from 0deg, rgba(255, 255, 255, 0.15) 0%, rgba(29, 155, 255, 0.3) 40%, rgba(29, 155, 255, 0.8) 80%, rgba(255, 255, 255, 0.15) 100%)',
              animation: 'spin 6s linear infinite',
            }}
          />
          <div
            className="inline-flex items-center justify-center relative z-10"
            style={{
              height: '24px',
              paddingLeft: '0px',
              paddingRight: '6px',
              gap: '2px',
              borderRadius: '9999px',
              backgroundColor: '#070C18',
              boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.05)',
            }}
          >
            <div className="relative flex items-center justify-center" style={{ width: '24px', height: '24px' }}>
              <Image
                src="/Frame 26080044.png"
                alt="Sparkle Icon"
                width={24}
                height={24}
                className="object-contain relative z-10"
                priority
              />
            </div>
            <span
              style={{
                fontFamily: "'Inter', var(--font-sans), sans-serif",
                fontSize: '10px',
                fontWeight: 250,
                color: '#FFFFFF',
                letterSpacing: '0.02em',
                lineHeight: 1,
                whiteSpace: 'nowrap',
                opacity: 0.95,
              }}
            >
              Website Design &amp; Development Company In Coimbatore
            </span>
          </div>
        </div>

        <h1
          className="text-white text-center"
          style={{
            fontSize: 'clamp(32px, 4vw, 50px)',
            fontWeight: 350,
            letterSpacing: '-0.02em',
            lineHeight: 1.0,
            margin: '0px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          We Build Websites.
        </h1>
        <h1
          className="text-center"
          style={{
            fontSize: 'clamp(32px, 4vw, 50px)',
            fontWeight: 350,
            letterSpacing: '-0.02em',
            lineHeight: 1.0,
            margin: '0px 0px 16px 0px',
            position: 'relative',
            zIndex: 1,
          }}
        >
          That Build{' '}
          <span
            style={{
              backgroundImage: 'linear-gradient(90deg, #007CFF 0%, #4DA6FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Your Business.
          </span>
        </h1>

        <p
          className="text-center"
          style={{
            fontFamily: "var(--font-geist-sans), 'Inter', var(--font-sans), sans-serif",
            color: '#f3f1f1ff',
            fontSize: 'clamp(12.5px, 0.9vw, 14.5px)',
            fontWeight: 200,
            lineHeight: 1.45,
            maxWidth: '780px',
            marginBottom: '32px',
            position: 'relative',
            zIndex: 1,
            letterSpacing: '0.01em',
            opacity: 0.95,
          }}
        >
          Webnox Technologies, Coimbatore, Is Simply The Best Company To Design Websites And Develop
          <br />
          Web Applications That Suits All Businesses. We Focus On Innovation, Speed And Quality.
        </p>

        <div style={{ position: 'relative', zIndex: 1, top: '-8px' }}>
          <button
            className="group relative"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '32px',
              paddingLeft: '18px',
              paddingRight: '18px',
              borderRadius: '9999px',
              background: 'rgba(6,13,26,0.95)',
              border: '1px solid rgba(0,102,255,0.55)',
              boxShadow: '0 0 10px rgba(0,102,255,0.25), 0 0 20px rgba(0,102,255,0.1)',
              color: '#FFFFFF',
              fontSize: '9px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget;
              el.style.boxShadow = '0 0 18px rgba(0,102,255,0.55), 0 0 36px rgba(0,102,255,0.22)';
              el.style.transform = 'scale(1.03)';
              el.style.borderColor = 'rgba(77,163,255,0.8)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget;
              el.style.boxShadow = '0 0 10px rgba(0,102,255,0.25), 0 0 20px rgba(0,102,255,0.1)';
              el.style.transform = 'scale(1)';
              el.style.borderColor = 'rgba(0,102,255,0.55)';
            }}
          >
            BOOK A CALL
          </button>
        </div>
      </section>

      {/* Bottom Interactive Device Showcase */}
      <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 w-full max-w-6xl aspect-[16/7.8] overflow-visible flex items-end justify-center select-none pointer-events-none">
        <div className="absolute z-0" style={{
          width: '130%',
          height: '120%',
          bottom: '-40%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
          <Image src="/showcase-bg-glow.png" alt="" fill className="object-contain object-bottom" priority />
        </div>
        <div className="absolute left-[8%] bottom-[-21%] w-[84%] h-[71.5%] z-10">
          <Image src="/Rock.png" alt="Rock pedestal base" fill className="object-contain object-bottom" priority />
        </div>
        <div className="absolute left-[23.2%] bottom-[-0.4%] w-[44.5%] h-[56.4%] z-20">
          <Image src="/Gadgets.png" alt="Laptop showcasing website" fill className="object-contain" priority />
        </div>
        <div className="absolute left-[31.75%] bottom-[-19%] w-[50.5%] h-[33.5%] z-25">
          <Image src="/Rock up.png" alt="Rock upper layer" fill className="object-contain object-bottom" priority />
        </div>
        <div className="absolute left-[48.7%] bottom-[-7%] w-[17.3%] h-[63%] z-20">
          <Image src="/Mobile1.png" alt="Mobile device showcasing website layout" fill className="object-contain" priority />
        </div>
        <div className="absolute left-[69%] bottom-[6.5%] w-[8.9%] h-[17.8%] z-24">
          <Image src="/Glow Logo.png" alt="Glowing Webnox cube logo" fill className="object-contain" priority />
        </div>
      </div>
    </main>

    {/* ─────────────── PAGE 2: LEADING WEB DESIGN ─────────────── */}
    <section
      id="about"
      style={{
        background: '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 40px',
        fontFamily: "'Inter', sans-serif",
        overflow: 'hidden',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
      }}>

        {/* LEFT: Text Content */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

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
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(32px, 3.6vw, 52px)',
            fontWeight: 800,
            lineHeight: 1.05,
            color: '#0a0a0a',
            letterSpacing: '-0.02em',
            margin: '0 0 14px 0',
          }}>
            Leading <span style={{ color: '#0068F7' }}>Web Design</span>
            <br />Company In Coimbatore
          </h2>

          {/* Subtitle */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(14px, 1.05vw, 17px)',
            fontWeight: 600,
            color: '#111',
            margin: '0 0 18px 0',
            lineHeight: 1.4,
          }}>
            Providing One Stop Best Web Solutions For All Your Business Needs!
          </p>

          {/* Body */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(13px, 0.88vw, 15px)',
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
        <div style={{
          position: 'relative',
          width: '100%',
          paddingBottom: '100%', // square aspect ratio
        }}>
          {/* The full circle image as background */}
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Image
              src="/full-circle.png"
              alt="Certification orbit circles"
              fill
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>
   
   
    <QuoteSection />
    <ClientsSection />
    <NumbersSection />
     <ReachMoreSection />
    </>
  );
}
