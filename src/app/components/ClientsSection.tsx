"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

// 8 SVG-only brand logos (no text)
const logos = [
  // 1. Atlassian
  {
    name: "Atlassian",
    svg: (
      <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.2 15.1c-.3-.4-.9-.3-1 .2L6.5 26.4c-.2.4.1.8.5.8h8.2c.3 0 .5-.2.6-.4 1.4-3.4.5-8.3-4.6-11.7z" fill="#2684FF"/>
        <path d="M15.7 5.5c-3.9 6-4.3 11.3-2 15.3l4.2 7.8c.2.3.5.5.8.5h8.2c.4 0 .7-.5.5-.8L16.8 5.5c-.2-.4-.8-.4-1.1 0z" fill="url(#atl1)"/>
        <defs>
          <linearGradient id="atl1" x1="26" y1="5" x2="16" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0052CC"/><stop offset="1" stopColor="#2684FF"/>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  // 2. Notion
  {
    name: "Notion",
    svg: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447zm.793 3.08V19.65c0 .7.373 .98 1.074.933l14.524-.84c.7-.046.793-.513.793-1.073V5.398c0-.56-.233-.84-.747-.793l-15.177.887c-.56.047-.467.327-.467.793zm14.337.745c.07.327 0 .654-.327.7l-.56.094v8.11c-.466.28-.933.42-1.306.42-.607 0-.747-.186-1.214-.747l-3.688-5.804v5.617l1.167.257s0 .653-.933.653l-2.568.14c-.07-.14 0-.466.233-.536l.607-.14V9.7L10.59 9.514c-.07-.327.14-.793.7-.84l2.754-.186 3.828 5.85V8.975l-.981-.14c-.07-.42.233-.7.607-.7l2.614-.14z" fill="white" fillOpacity="0.85"/>
      </svg>
    ),
  },
  // 3. Figma
  {
    name: "Figma",
    svg: (
      <svg width="32" height="44" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 28.5a9.5 9.5 0 1 1 9.5-9.5A9.5 9.5 0 0 1 19 28.5z" fill="#1ABCFE"/>
        <path d="M9.5 47.5A9.5 9.5 0 0 1 19 38v9.5a9.5 9.5 0 0 1-9.5 0z" fill="#0ACF83"/>
        <path d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#FF7262"/>
        <path d="M19 0H9.5a9.5 9.5 0 0 0 0 19H19V0z" fill="#F24E1E"/>
        <path d="M19 0h9.5a9.5 9.5 0 0 1 0 19H19V0z" fill="#FF7262"/>
      </svg>
    ),
  },
  // 4. Slack
  {
    name: "Slack",
    svg: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z" fill="#E01E5A"/>
        <path d="M6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
        <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834z" fill="#36C5F0"/>
        <path d="M8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
        <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834z" fill="#2EB67D"/>
        <path d="M17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/>
        <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52z" fill="#ECB22E"/>
        <path d="M15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E"/>
      </svg>
    ),
  },
  // 5. Webflow (W mark)
  {
    name: "Webflow",
    svg: (
      <svg width="52" height="44" viewBox="0 0 52 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38.548 0C33.7 0 29.877 3.01 28.164 7.408c-1.583-4.43-5.048-7.147-9.762-7.147-3.818 0-7.12 1.908-9.216 4.91C8.057 2.127 5.245 0 1.908 0H0l5.992 20.38H.065L6.057 36h10.19l3.167-10.743L22.613 36h10.19L38.87 15.62H32.94L38.548 0zm-10.45 20.38l-2.94 9.99-2.94-9.99h5.88zm-14.627 0l-2.94 9.99-2.94-9.99h5.88z" fill="#4353FF"/>
      </svg>
    ),
  },
  // 6. eToro (ET mark)
  {
    name: "eToro",
    svg: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="24" fill="#6EC53E"/>
        <text x="24" y="30" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="Arial">eT</text>
      </svg>
    ),
  },
  // 7. HubSpot (sprocket icon)
  {
    name: "HubSpot",
    svg: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.175 14.154a3.237 3.237 0 0 0-1.768-2.866V8.936a1.29 1.29 0 0 0 .748-1.165V7.74a1.29 1.29 0 0 0-1.29-1.29h-.032a1.29 1.29 0 0 0-1.29 1.29v.032a1.29 1.29 0 0 0 .748 1.165v2.352a3.237 3.237 0 0 0-1.54.892L12.77 9.7a3.266 3.266 0 0 0 .08-.71 3.28 3.28 0 1 0-3.28 3.28c.425 0 .832-.082 1.206-.23l4.883 2.613a3.28 3.28 0 1 0 6.516-.499zm-3.24 2.195a1.33 1.33 0 1 1 0-2.66 1.33 1.33 0 0 1 0 2.66zM9.57 11.312a1.33 1.33 0 1 1 0-2.66 1.33 1.33 0 0 1 0 2.66z" fill="#FF7A59"/>
      </svg>
    ),
  },
  // 8. Stripe (S mark)
  {
    name: "Stripe",
    svg: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" fill="#6772E5"/>
      </svg>
    ),
  },
];

export default function ClientsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Each set = half of total track width (since logos are duplicated)
    const halfWidth = track.scrollWidth / 2;

    // Animate from x:0 → x:-halfWidth, then repeat seamlessly
    animRef.current = gsap.fromTo(
      track,
      { x: 0 },
      {
        x: -halfWidth,
        duration: 25,
        ease: "none",
        repeat: -1,
      }
    );

    return () => {
      animRef.current?.kill();
    };
  }, []);

  const handleMouseEnter = () => animRef.current?.pause();
  const handleMouseLeave = () => animRef.current?.resume();

  // Duplicate logos for seamless loop
  const track = [...logos, ...logos];

  return (
    <section
      className="relative bg-[#000714] text-white overflow-hidden font-sans"
      style={{ paddingTop: '8rem', paddingBottom: '4rem' }}
    >
      {/* Heading block */}
      <div className="flex flex-col items-center text-center px-6 md:px-10" style={{ marginBottom: '4rem' }}>
        <div className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 bg-[#0068F7]/10 border border-[#0068F7]/30 mb-5">
          <span className="text-xs font-semibold text-[#4DA6FF] tracking-wider">· Our Clients</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-white leading-[1.15] tracking-tight max-w-2xl">
          Trusted By Established
          <br />
          Leaders &amp; Innovative Startups
        </h2>
      </div>

      {/* GSAP Infinite Marquee — scrolls right to left */}
      <div
        className="relative overflow-hidden w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 h-full w-48 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #000714 30%, transparent)" }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 h-full w-48 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #000714 30%, transparent)" }}
        />

        {/* Track — contains 16 items (8 × 2) for seamless loop */}
        <div
          ref={trackRef}
          className="flex items-center"
          style={{ width: "max-content" }}
        >
          {track.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex items-center justify-center shrink-0 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-default"
              style={{ padding: "0 56px" }}
              title={logo.name}
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>

      {/* Glow arc image — centered below logos */}
      <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
        <div className="relative" style={{ width: '800px', height: '260px', maxWidth: '90vw' }}>
          <Image
            src="/fgfg.png"
            alt="Glow Arc"
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
}
