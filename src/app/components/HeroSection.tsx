"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AnimatedLogo from "./AnimatedLogo";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        if (isMobileMenuOpen) {
          setShowHeader(true);
        } else if (currentScrollY < 10) {
          setShowHeader(true);
        } else if (currentScrollY > lastScrollY) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY, isMobileMenuOpen]);

  if (!mounted) return null;

  return (
    <main className="relative min-h-screen bg-black text-white flex flex-col items-center justify-between overflow-hidden font-sans selection:bg-blue-600/30 selection:text-white pt-[58px]">
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

      :root {
        --slide-dist: 200px;
      }
      @media (min-width: 768px) {
        :root {
          --slide-dist: 300px;
        }
      }
      @media (min-width: 1024px) {
        :root {
          --slide-dist: 400px;
        }
      }

      /* ── Staggered Entrance Animations ── */
      @keyframes slide-up {
        from {
          transform: translateY(var(--slide-dist));
        }
        to {
          transform: translateY(0);
        }
      }

      @keyframes slide-up-text {
        from {
          transform: translateY(var(--slide-dist));
        }
        to {
          transform: translateY(0);
        }
      }

      @keyframes float-logo {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-8px);
        }
      }

      /* Button glow sliding restricted animation */
      @keyframes glow-slide-restricted {
        0% {
          transform: translate(calc(-50% - 38px), -50%) scale(0.92);
          opacity: 0.6;
        }
        50% {
          opacity: 0.95;
          transform: translate(-50%, -50%) scale(1.08);
        }
        100% {
          transform: translate(calc(-50% + 38px), -50%) scale(0.92);
          opacity: 0.6;
        }
      }

      .btn-glow-back {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 92px;
        height: 92px;
        z-index: 1;
        pointer-events: none;
        transform: translate(-50%, -50%);
        animation: glow-slide-restricted 4s ease-in-out infinite alternate;
        overflow: visible;
      }

      /* Text Animations (slower and subtle) */
      .animate-text-badge {
        animation: slide-up-text 2.0s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
      }
      .animate-text-h1-1 {
        animation: slide-up-text 2.0s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
      }
      .animate-text-h1-2 {
        animation: slide-up-text 2.0s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;
      }
      .animate-text-p {
        animation: slide-up-text 2.0s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both;
      }
      .animate-text-btn {
        display: inline-flex;
        justify-content: center;
        position: relative;
        animation: slide-up-text 2.0s cubic-bezier(0.16, 1, 0.3, 1) 0.9s both;
      }

      /* Showcase Animations (majestic and slow) */
      .animate-bg-chevrons {
        opacity: 0.85;
        animation: slide-up 3.0s cubic-bezier(0.16, 1, 0.3, 1) 1.1s both;
      }

      .animate-showcase-glow {
        animation: slide-up 3.0s cubic-bezier(0.16, 1, 0.3, 1) 1.3s both;
      }

      .animate-rock-base {
        animation: slide-up 2.6s cubic-bezier(0.16, 1, 0.3, 1) 1.5s both;
      }

      .animate-laptop {
        animation: slide-up 2.6s cubic-bezier(0.16, 1, 0.3, 1) 1.7s both;
      }

      .animate-rock-up {
        animation: slide-up 2.6s cubic-bezier(0.16, 1, 0.3, 1) 1.9s both;
      }

      .animate-mobile {
        animation: slide-up 2.6s cubic-bezier(0.16, 1, 0.3, 1) 2.1s both;
      }

      .animate-glow-logo {
        animation: 
          slide-up 2.6s cubic-bezier(0.16, 1, 0.3, 1) 2.3s both,
          float-logo 4s ease-in-out 4.9s infinite;
      }

      /* Responsive Background Chevrons */
      @media (max-width: 767px) {
        .animate-bg-chevrons {
          background-size: 100% auto !important;
          background-position: center 25% !important;
        }
      }

      /* Responsive Hero Content Area translateY positioning (reduces spacing to bottom rock) */
      .hero-content-area {
        transform: translateY(-30px);
        transition: transform 0.3s ease;
      }
      @media (min-width: 768px) {
        .hero-content-area {
          transform: translateY(-100px);
        }
      }
      @media (min-width: 1024px) {
        .hero-content-area {
          transform: translateY(-145px);
        }
      }


    `}} />
      {/* Background chevrons/W shapes */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none z-0 animate-bg-chevrons"
        style={{ backgroundImage: "url('/W bg 1.webp')", top: '75px' }}
      />

      {/* Header / Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 flex justify-between md:justify-center items-center px-8 md:px-0 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'
          }`}
        style={{
          background: '#07080e',
          borderBottom: '1px solid rgba(255,255,255,0.10)',
          minHeight: '58px',
        }}
      >
        <div className="flex items-center justify-between md:justify-start w-full md:w-auto" style={{ gap: '8px' }}>
          <div className="flex items-center select-none" style={{ paddingRight: '8px' }}>
            <AnimatedLogo height={36} delay={800} />
          </div>
          <div className="hidden md:block" style={{
            width: '1px',
            height: '22px',
            background: 'rgba(255,255,255,0.15)',
            marginRight: '4px',
          }} />
          <nav className="hidden md:flex items-center">
            <Link href="#" className="nav-link active">Home</Link>
            <Link href="#" className="nav-link">Services</Link>
            <Link href="#" className="nav-link">Hire &amp; Outsourcing</Link>
            <Link href="#" className="nav-link">Products</Link>
            <Link href="#" className="nav-link">Packages</Link>
            <Link href="#" className="nav-link">Company</Link>
            <Link href="#" className="nav-link">Careers</Link>
            <Link href="#" className="nav-link">Contact US</Link>
          </nav>

          {/* Animated Hamburger Icon for Mobile Navigation */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col justify-between w-6 h-4 cursor-pointer z-50 relative bg-transparent border-none outline-none p-0"
            aria-label="Toggle navigation menu"
          >
            <span className="h-[2px] w-full bg-white rounded transition-transform duration-300" style={{ transform: isMobileMenuOpen ? 'rotate(45deg) translateY(5.5px)' : 'none' }} />
            <span className="h-[2px] w-full bg-white rounded transition-opacity duration-300" style={{ opacity: isMobileMenuOpen ? 0 : 1 }} />
            <span className="h-[2px] w-full bg-white rounded transition-transform duration-300" style={{ transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-5.5px)' : 'none' }} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-[#07080e]/98 backdrop-blur-md md:hidden flex flex-col items-center justify-center transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
        <nav className="flex flex-col items-center gap-4">
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="nav-link" style={{ fontSize: '18px', padding: '8px 20px' }}>Home</Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="nav-link" style={{ fontSize: '18px', padding: '8px 20px' }}>Services</Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="nav-link" style={{ fontSize: '18px', padding: '8px 20px' }}>Hire &amp; Outsourcing</Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="nav-link" style={{ fontSize: '18px', padding: '8px 20px' }}>Products</Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="nav-link" style={{ fontSize: '18px', padding: '8px 20px' }}>Packages</Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="nav-link" style={{ fontSize: '18px', padding: '8px 20px' }}>Company</Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="nav-link" style={{ fontSize: '18px', padding: '8px 20px' }}>Careers</Link>
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="nav-link" style={{ fontSize: '18px', padding: '8px 20px' }}>Contact US</Link>
        </nav>
      </div>

      {/* Hero Content Area */}
      <section
        className="hero-content-area relative flex-1 flex flex-col items-center justify-center text-center px-6 pt-0 z-10 w-full"
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
        <div className="animate-text-badge relative inline-flex mb-6 overflow-visible">
          <div
            className="relative inline-flex rounded-full overflow-hidden"
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
        </div>

        <h1
          className="text-white text-center animate-text-h1-1"
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
          className="text-center animate-text-h1-2"
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
          className="text-center animate-text-p"
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

        <div className="animate-text-btn" style={{ position: 'relative', zIndex: 1, top: '-8px' }}>
          <div className="btn-glow-back" style={{ width: '92px', height: '92px' }}>
            <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
              <g opacity="0.2" filter="url(#filter0_f_739_6153)">
                <path d="M43.3105 15.4337L44.1014 37.9208L68.0827 10.5801L45.313 38.9372L81.2637 33.403L45.5877 40.4944L76.686 59.3562L44.7968 41.8638L49.1004 57.2761L43.3105 42.4046L30.1295 76.296L41.8242 41.8638L9.93506 59.3562L41.0333 40.4944L24.7348 37.9208L41.308 38.9372L18.5383 10.5801L42.5196 37.9208L43.3105 15.4337Z" fill="#96F2FF" />
              </g>
              <g opacity="0.6" filter="url(#filter1_f_739_6153)">
                <circle cx="45.9505" cy="45.9503" r="17.8113" fill="#83D4FD" />
              </g>
              <circle cx="52.0394" cy="68.917" r="0.803032" fill="#83D4FD" />
              <circle cx="63.3675" cy="66.3606" r="0.803032" fill="#83D4FD" />
              <g opacity="0.4" filter="url(#filter2_f_739_6153)">
                <circle cx="46.5789" cy="57.3533" r="0.803032" fill="#83D4FD" />
              </g>
              <g filter="url(#filter3_f_739_6153)">
                <circle cx="51.6927" cy="43.6102" r="0.803032" fill="#83D4FD" />
              </g>
              <g filter="url(#filter4_f_739_6153)">
                <circle cx="42.5634" cy="42.4169" r="0.321213" fill="#83D4FD" />
              </g>
              <g filter="url(#filter5_f_739_6153)">
                <circle cx="36.1396" cy="34.7079" r="0.321213" fill="#83D4FD" />
              </g>
              <g opacity="0.7" filter="url(#filter6_f_739_6153)">
                <circle cx="51.8788" cy="31.4958" r="0.321213" fill="#83D4FD" />
              </g>
              <g filter="url(#filter7_f_739_6153)">
                <circle cx="39.6728" cy="53.6593" r="0.321213" fill="#83D4FD" />
              </g>
              <g filter="url(#filter8_f_739_6153)">
                <circle cx="41.9213" cy="63.9382" r="0.321213" fill="#83D4FD" />
              </g>
              <g filter="url(#filter9_f_739_6153)">
                <circle cx="44.1694" cy="74.217" r="0.321213" fill="#83D4FD" />
              </g>
              <g opacity="0.7" filter="url(#filter10_f_739_6153)">
                <circle cx="57.9819" cy="60.0837" r="0.321213" fill="#83D4FD" />
              </g>
              <g filter="url(#filter11_f_739_6153)">
                <circle cx="29.394" cy="58.1564" r="0.321213" fill="#83D4FD" />
              </g>
              <g opacity="0.4" filter="url(#filter12_f_739_6153)">
                <circle cx="30.0361" cy="30.8532" r="0.321213" fill="#83D4FD" />
              </g>
              <g opacity="0.4" filter="url(#filter13_f_739_6153)">
                <circle cx="58.9452" cy="37.5988" r="0.321213" fill="#83D4FD" />
              </g>
              <g filter="url(#filter14_f_739_6153)">
                <circle cx="23.2909" cy="20.5744" r="0.321213" fill="#83D4FD" />
              </g>
              <g opacity="0.4" filter="url(#filter15_f_739_6153)">
                <circle cx="20.0785" cy="56.2292" r="0.321213" fill="#83D4FD" />
              </g>
              <g opacity="0.7" filter="url(#filter16_f_739_6153)">
                <circle cx="37.103" cy="69.0776" r="0.321213" fill="#83D4FD" />
              </g>
              <g filter="url(#filter17_f_739_6153)">
                <circle cx="71.7939" cy="45.9504" r="0.321213" fill="#83D4FD" />
              </g>
              <g opacity="0.7" filter="url(#filter18_f_739_6153)">
                <circle cx="35.9788" cy="49.6443" r="0.803032" fill="#83D4FD" />
              </g>
              <circle cx="58.4637" cy="25.5533" r="0.803032" fill="#83D4FD" />
              <circle opacity="0.4" cx="35.9788" cy="18.1653" r="0.803032" fill="#83D4FD" />
              <g filter="url(#filter19_f_739_6153)">
                <circle cx="64.888" cy="44.5047" r="0.803032" fill="#83D4FD" />
              </g>
              <circle cx="23.7728" cy="45.4686" r="0.803032" fill="#83D4FD" />
              <defs>
                <filter id="filter0_f_739_6153" x="5.49164" y="6.13666" width="80.2155" height="74.6027" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="2.22171" result="effect1_foregroundBlur_739_6153" />
                </filter>
                <filter id="filter1_f_739_6153" x="0.000240326" y="-3.8147e-06" width="91.9004" height="91.9006" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="14.0695" result="effect1_foregroundBlur_739_6153" />
                </filter>
                <filter id="filter2_f_739_6153" x="45.024" y="55.7984" width="3.10977" height="3.10977" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.375953" result="effect1_foregroundBlur_739_6153" />
                </filter>
                <filter id="filter3_f_739_6153" x="50.1377" y="42.0552" width="3.10977" height="3.10977" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.375953" result="effect1_foregroundBlur_739_6153" />
                </filter>
                <filter id="filter4_f_739_6153" x="41.4903" y="41.3438" width="2.14639" height="2.14614" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.375953" result="effect1_foregroundBlur_739_6153" />
                </filter>
                <filter id="filter5_f_739_6153" x="35.0665" y="33.6348" width="2.14639" height="2.14614" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.375953" result="effect1_foregroundBlur_739_6153" />
                </filter>
                <filter id="filter6_f_739_6153" x="50.8057" y="30.4227" width="2.14639" height="2.14614" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.375953" result="effect1_foregroundBlur_739_6153" />
                </filter>
                <filter id="filter7_f_739_6153" x="38.5997" y="52.5862" width="2.14639" height="2.14614" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.375953" result="effect1_foregroundBlur_739_6153" />
                </filter>
                <filter id="filter8_f_739_6153" x="40.8482" y="62.865" width="2.14639" height="2.14614" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.375953" result="effect1_foregroundBlur_739_6153" />
                </filter>
                <filter id="filter9_f_739_6153" x="43.0962" y="73.1438" width="2.14639" height="2.14614" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.375953" result="effect1_foregroundBlur_739_6153" />
                </filter>
                <filter id="filter10_f_739_6153" x="56.9087" y="59.0105" width="2.14639" height="2.14614" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.375953" result="effect1_foregroundBlur_739_6153" />
                </filter>
                <filter id="filter11_f_739_6153" x="28.3208" y="57.0833" width="2.14639" height="2.14614" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.375953" result="effect1_foregroundBlur_739_6153" />
                </filter>
                <filter id="filter12_f_739_6153" x="28.9629" y="29.7801" width="2.14639" height="2.14614" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.375953" result="effect1_foregroundBlur_739_6153" />
                </filter>
                <filter id="filter13_f_739_6153" x="57.8721" y="36.5257" width="2.14639" height="2.14614" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.375953" result="effect1_foregroundBlur_739_6153" />
                </filter>
                <filter id="filter14_f_739_6153" x="22.2178" y="19.5013" width="2.14639" height="2.14614" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.375953" result="effect1_foregroundBlur_739_6153" />
                </filter>
                <filter id="filter15_f_739_6153" x="19.0054" y="55.1561" width="2.14639" height="2.14614" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.375953" result="effect1_foregroundBlur_739_6153" />
                </filter>
                <filter id="filter16_f_739_6153" x="36.0298" y="68.0044" width="2.14639" height="2.14614" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.375953" result="effect1_foregroundBlur_739_6153" />
                </filter>
                <filter id="filter17_f_739_6153" x="70.7208" y="44.8772" width="2.14639" height="2.14614" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.375953" result="effect1_foregroundBlur_739_6153" />
                </filter>
                <filter id="filter18_f_739_6153" x="34.4239" y="48.0894" width="3.10977" height="3.10977" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.375953" result="effect1_foregroundBlur_739_6153" />
                </filter>
                <filter id="filter19_f_739_6153" x="63.3331" y="42.9498" width="3.10977" height="3.10977" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="0.375953" result="effect1_foregroundBlur_739_6153" />
                </filter>
              </defs>
            </svg>
          </div>
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
              zIndex: 2,
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
        <div className="animate-showcase-glow absolute inset-0 z-0">
          <div className="absolute" style={{
            width: '130%',
            height: '120%',
            bottom: '-40%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}>
            <Image src="/showcase-bg-glow.webp" alt="" fill className="object-contain object-bottom" priority />
          </div>
        </div>
        <div className="absolute left-[8%] bottom-[-21%] w-[84%] h-[71.5%] z-10 animate-rock-base">
          <Image src="/Rock.webp" alt="Rock pedestal base" fill className="object-contain object-bottom" priority />
        </div>
        <div className="absolute left-[23.2%] bottom-[-0.4%] w-[44.5%] h-[56.4%] z-20 animate-laptop">
          <Image src="/Gadgets.png" alt="Laptop showcasing website" fill className="object-contain" priority />
        </div>
        <div className="absolute left-[31.75%] bottom-[-19%] w-[50.5%] h-[33.5%] z-25 animate-rock-up">
          <Image src="/Rock up.webp" alt="Rock upper layer" fill className="object-contain object-bottom" priority />
        </div>
        <div className="absolute left-[48.7%] bottom-[-7%] w-[17.3%] h-[63%] z-20 animate-mobile">
          <Image src="/Mobile1.webp" alt="Mobile device showcasing website layout" fill className="object-contain" priority />
        </div>
        <div className="absolute left-[69%] bottom-[6.5%] w-[8.9%] h-[17.8%] z-24 animate-glow-logo">
          <Image src="/Glow Logo.png" alt="Glowing Webnox cube logo" fill className="object-contain" priority />
        </div>
      </div>
    </main>
  );
}
