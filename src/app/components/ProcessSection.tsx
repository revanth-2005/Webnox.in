"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PhoneFrameProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  frameColor?: string;
  darkStatus?: boolean;
  id?: string;
}

function PhoneFrame({ children, style, className = "", frameColor = "#0f172a", darkStatus = false, id }: PhoneFrameProps) {
  return (
    <div
      id={id}
      className={`floating-mockup ${className}`}
      style={{
        position: "absolute",
        width: "220px",
        height: "360px",
        borderRadius: "28px",
        border: `4px solid ${frameColor}`,
        boxShadow: "0 20px 50px -12px rgba(0, 0, 0, 0.8), inset 0 0 8px rgba(255, 255, 255, 0.15)",
        backgroundColor: frameColor,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {/* Notch / Dynamic Island */}
      <div
        style={{
          position: "absolute",
          top: "8px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60px",
          height: "12px",
          backgroundColor: "#000000",
          borderRadius: "999px",
          zIndex: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 5px",
        }}
      >
        <div style={{ width: "2px", height: "2px", borderRadius: "50%", backgroundColor: "#1e293b" }} />
        <div style={{ width: "20px", height: "2px", borderRadius: "999px", backgroundColor: "#1e293b" }} />
      </div>

      {/* Status Bar */}
      <div
        style={{
          height: "22px",
          width: "100%",
          backgroundColor: darkStatus ? "#000000" : "transparent",
          display: "flex",
          justifyContent: "between",
          alignItems: "center",
          padding: "0 14px",
          fontSize: "8px",
          fontWeight: 600,
          color: darkStatus ? "#ffffff" : "#334155",
          userSelect: "none",
          zIndex: 20,
        }}
      >
        <span style={{ flex: 1, textAlign: "left" }}>9:41</span>
        <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
          {/* Signal */}
          <svg width="8" height="8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2 22h20V2z" />
          </svg>
          {/* Wifi */}
          <svg width="8" height="8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21l-12-12c4.4-4.4 11.6-4.4 16 0l-4 4z" />
          </svg>
          {/* Battery */}
          <div style={{ width: "12px", height: "7px", border: "1px solid currentColor", borderRadius: "1.5px", padding: "0.5px", display: "flex" }}>
            <div style={{ flex: 1, backgroundColor: "currentColor", borderRadius: "0.5px" }} />
          </div>
        </div>
      </div>

      {/* Frame content */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden", backgroundColor: "#ffffff", pointerEvents: "none" }}>
        {children}
      </div>

      {/* Home Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "4px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "70px",
          height: "2.5px",
          backgroundColor: darkStatus ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.3)",
          borderRadius: "999px",
          zIndex: 30,
        }}
      />
    </div>
  );
}

interface DesktopFrameProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  frameColor?: string;
  address?: string;
  width?: string;
  height?: string;
}

function DesktopFrame({ children, style, className = "", frameColor = "#1e293b", address = "https://www.webnoxdigital.com", width = "540px", height = "340px" }: DesktopFrameProps) {
  return (
    <div
      className={`desktop-mockup ${className}`}
      style={{
        position: "absolute",
        width: width,
        height: height,
        borderRadius: "16px",
        border: `8px solid ${frameColor}`,
        boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.8)",
        backgroundColor: frameColor,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {/* Browser Header Bar */}
      <div
        style={{
          height: "28px",
          width: "100%",
          backgroundColor: "#0f172a",
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
          gap: "8px",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          userSelect: "none",
        }}
      >
        {/* Window Controls (Mac style red/yellow/green dots) */}
        <div style={{ display: "flex", gap: "6px" }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#ef4444" }} />
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#eab308" }} />
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#22c55e" }} />
        </div>

        {/* Address Bar */}
        <div style={{
          flex: 1,
          backgroundColor: "#1e293b",
          borderRadius: "4px",
          height: "18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "9px",
          color: "rgba(255,255,255,0.6)",
          maxWidth: "300px",
          margin: "0 auto",
        }}>
          {address}
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden", backgroundColor: "#ffffff", pointerEvents: "none" }}>
        {children}
      </div>
    </div>
  );
}

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    const container = containerRef.current;
    const cursor = cursorRef.current;
    if (!section || !container || !wrapper) return;

    // 1. GSAP Horizontal Scroll Setup with Timeline for End Animation
    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        const lastEl = document.getElementById("step-10-final");
        if (!lastEl || !container) return window.innerWidth * 3.65;
        
        // GSAP automatically clears inline transforms during `invalidateOnRefresh`, 
        // so getBoundingClientRect gives the accurate un-scrolled positions!
        const containerRect = container.getBoundingClientRect();
        const lastRect = lastEl.getBoundingClientRect();
        
        // We want the scroll to end exactly when the final element is centered on screen.
        const widthToCenter = (lastRect.left - containerRect.left) + (lastRect.width / 2);
        return Math.max(0, widthToCenter - window.innerWidth / 2);
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 0.5,
          start: "top top",
          end: () => `+=${getScrollAmount()}`, // Dynamic scroll distance
          invalidateOnRefresh: true,
        },
      });

      // Horizontal Scroll (spans the entire timeline duration)
      tl.to(container, {
        x: () => -getScrollAmount(), // Dynamic translation distance
        ease: "none",
        duration: 1, // Normalized duration
      }, 0); // Start at time 0

      // Scale Up from Border Radius (Initial Entry)
      tl.to(wrapper, {
        scale: 1,
        borderRadius: "0px",
        ease: "power1.inOut",
        duration: 0.15, // Takes 15% of the scroll
      }, 0); // Start at time 0

      // Scale Down to Border Radius (Exit)
      tl.to(wrapper, {
        scale: 0.95,
        borderRadius: "32px",
        ease: "power1.inOut",
        duration: 0.15, // Takes 15% of the scroll
      }, 0.85); // Starts at 85% of the scroll
    }, section);

    // 2. Custom Cursor Movement
    const onMouseMove = (e: MouseEvent) => {
      if (!cursor) return;
      const rect = section.getBoundingClientRect();
      const x = e.clientX;
      const y = e.clientY;

      gsap.to(cursor, {
        x: x,
        y: y,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const onMouseEnter = () => setHovering(true);
    const onMouseLeave = () => setHovering(false);

    window.addEventListener("mousemove", onMouseMove);
    section.addEventListener("mouseenter", onMouseEnter);
    section.addEventListener("mouseleave", onMouseLeave);

    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("load", handleLoad);
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      ctx.revert();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("load", handleLoad);
      clearTimeout(timer);
      if (section) {
        section.removeEventListener("mouseenter", onMouseEnter);
        section.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "radial-gradient(circle at left center, rgba(0, 90, 215, 0.22) 0%, transparent 60%), radial-gradient(circle at right center, rgba(72, 237, 255, 0.12) 0%, transparent 70%), #030816", // Matches OfferSection
        cursor: hovering ? "none" : "auto",
      }}
    >
      {/* Scaling Wrapper */}
      <div
        ref={wrapperRef}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: "#020813", // Deep dark blue background
          transformOrigin: "center center",
          transform: "scale(0.95)", // Start scaled down
          borderRadius: "32px",     // Start with border radius
        }}
      >
        {/* Noise overlay to match the provided texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.15,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            zIndex: 1,
            pointerEvents: "none",
            mixBlendMode: "overlay",
          }}
        />

        {/* Stars/Dust background glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 30% 30%, rgba(11, 85, 243, 0.12) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(72, 237, 255, 0.08) 0%, transparent 60%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* Custom Cursor */}
        <div
          ref={cursorRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            pointerEvents: "none",
            zIndex: 9999,
            display: hovering ? "flex" : "none",
            alignItems: "center",
            gap: "6px",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Curved blue arrow cursor pointer */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: "drop-shadow(0 2px 6px rgba(0, 173, 239, 0.6))",
            }}
          >
            <path
              d="M4.5 3V19.5L9.75 14.25H18.75L4.5 3Z"
              fill="#00ADEF"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>

          {/* You label */}
          <div
            style={{
              backgroundColor: "#00ADEF",
              color: "#ffffff",
              padding: "4px 8px",
              borderRadius: "6px",
              fontSize: "11px",
              fontWeight: 600,
              fontFamily: "'Outfit', sans-serif",
              boxShadow: "0 4px 12px rgba(0, 173, 239, 0.35)",
              border: "1px solid rgba(255,255,255,0.2)",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            You
          </div>
        </div>

        {/* Horizontal Scrollable Container */}
        <div
          ref={containerRef}
          style={{
            display: "flex",
            height: "100%",
            width: "465vw", // Container width: Part 1 (100vw) + Part 2 (365vw)
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* ==================== PART 1: OUR PROCESS INTRO ==================== */}
          <div
            style={{
              width: "100vw",
              height: "100%",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Centered Title block */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                zIndex: 10,
                transform: "translateY(10px)",
              }}
            >
              <span
                style={{
                  color: "rgba(255, 255, 255, 0.6)",
                  fontSize: "16px",
                  fontWeight: 400,
                  letterSpacing: "0.05em",
                  marginBottom: "8px",
                  fontFamily: "'Outfit', sans-serif",
                }}
              >
                What we do
              </span>
              <div
                style={{
                  position: "relative",
                  width: "280px",
                  height: "100px",
                }}
              >
                <Image
                  src="/landing page/process flow/Frame 2147223159.png"
                  alt="Our Process"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              {/* The white curved arrow pointing to the next section */}
              <div
                style={{
                  position: "relative",
                  width: "65px",
                  height: "45px",
                  marginTop: "-10px",
                  transform: "translateX(25px)",
                }}
              >
                <Image
                  src="/landing page/process flow/Path 6.png"
                  alt="Arrow"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* 1. Gkart Mobile App Mockup - Far-Left */}
            <PhoneFrame
              frameColor="#0d1527"
              style={{
                left: "8%",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <Image
                src="/Mobile.png"
                alt="Gkart Shopping App"
                fill
                className="object-cover"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = "/image/Mobile.png";
                }}
              />
            </PhoneFrame>

            {/* 2. Nursing College Website Mockup - Top-Center (Shifted up and to the left) */}
            <PhoneFrame
              frameColor="#1e293b"
              darkStatus={true}
              style={{
                left: "28%",
                top: "-80px", // Shifting upwards to hide the top 1/4 (270px visible)
                height: "360px",
              }}
            >
              <div style={{ width: "100%", height: "100%", overflow: "hidden", backgroundColor: "#ffffff" }}>
                <iframe
                  src="https://www.ajknursing.edu.in/"
                  title="AJK Nursing College"
                  scrolling="no"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    overflow: "hidden",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </PhoneFrame>

            {/* 3. Kovai Kitchen Website Mockup - Bottom-Center/Right (Sticking up from the bottom) */}
            <PhoneFrame
              frameColor="#B21E29"
              darkStatus={true}
              style={{
                left: "59%", // Moved slightly to the right (from 55%)
                bottom: "-60px", // Moved slightly up (from -90px)
                height: "360px",
              }}
            >
              <div style={{ width: "100%", height: "100%", overflow: "hidden", backgroundColor: "#ffffff" }}>
                <iframe
                  src="https://kovaikitchenhomemade.com/"
                  title="Kovai Kitchen"
                  scrolling="no"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    overflow: "hidden",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </PhoneFrame>

            {/* 4. Learnryce Career Counseling App Mockup - Far-Right */}
            <PhoneFrame
              frameColor="#0d9488"
              style={{
                right: "8%",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <div style={{ width: "100%", height: "100%", overflow: "hidden", backgroundColor: "#ffffff" }}>
                <iframe
                  src="https://learnryce.in/"
                  title="Learnryce"
                  scrolling="no"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    overflow: "hidden",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </PhoneFrame>
          </div>

          {/* ==================== PART 2: ROADMAP STEPS & FINAL SLIDE ==================== */}
          <div
            style={{
              width: "365vw", // Width of the roadmap sequence container to fit all steps + final slide
              height: "100%",
              flexShrink: 0,
              display: "flex",
              position: "relative",
            }}
          >
            {/* Connector Image: before Get To Know (bridges Learnryce to Get To Know) */}
            <div
              style={{
                position: "absolute",
                left: "-13.5vw", // Shifted right (from -18vw)
                top: "35%", // Positioned to align between middle of phone and top of card
                width: "350px", // Made smaller
                height: "160px",
                zIndex: 1,
                pointerEvents: "none",
              }}
            >
              <Image
                src="/landing page/process flow/before Get To Know.png"
                alt="Connector curve"
                fill
                className="object-contain"
              />
            </div>

            {/* Connector Image: before Strategic Consulting (bridges Get To Know to Strategic Consulting) */}
            <div
              style={{
                position: "absolute",
                left: "18vw", // Shifted left (from 40vw)
                top: "46%",
                width: "220px", // Made smaller
                height: "80px",
                zIndex: 1,
                pointerEvents: "none",
              }}
            >
              <Image
                src="/landing page/process flow/before Strategic Consulting.png"
                alt="Connector curve"
                fill
                className="object-contain"
              />
            </div>

            {/* STEP 1: GET TO KNOW (Positioned lower, bottom left/middle of section 2) */}
            <div
              style={{
                position: "absolute",
                left: "-1vw", // Moved further left (from 15vw)
                bottom: "5%", // Moved bottom (from 10%)
                width: "440px",
                height: "290px",
                borderRadius: "20px",
                padding: "24px",
                backgroundImage: "url('/landing page/process flow/Get To Know.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                zIndex: 10,
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              <div>
                {/* Badge */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 500, letterSpacing: "0.05em" }}>Get To Know</span>
                </div>

                {/* Heading */}
                <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff", lineHeight: 1.25, marginBottom: "12px" }}>
                  What a Great Website Design Company Could Do?
                </h3>

                {/* Description Body */}
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.75)", lineHeight: 1.5, margin: 0 }}>
                  A great website turns visitors into potential customers and buyers. Rejoice your customers by providing easy navigation, qualified content information, unique services, and lag-free performance across all devices. The latest technologies ensure speed and compatibility. All of these will make sure the visitor of your website <span style={{ color: "#00ADEF", cursor: "pointer", textDecoration: "underline" }}>read more..</span>
                </p>
              </div>
            </div>

            {/* STEP 2: STRATEGIC CONSULTING (Positioned higher, top middle/right of section 2) */}
            <div
              style={{
                position: "absolute",
                left: "20.5vw", // Moved left (from 72vw)
                top: "8.5%",
                width: "440px",
                height: "290px",
                borderRadius: "20px",
                padding: "24px",
                backgroundImage: "url('/landing page/process flow/Strategic Consulting.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                zIndex: 10,
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              <div>
                {/* Badge */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 500, letterSpacing: "0.05em" }}>Strategic Consulting</span>
                </div>

                {/* Heading */}
                <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff", lineHeight: 1.25, marginBottom: "12px" }}>
                  Consulting that turns ideas into a clear digital roadmap
                </h3>

                {/* Description Body */}
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.75)", lineHeight: 1.5, margin: 0 }}>
                  Our consulting process uncovers what truly matters — your users, your goals, and your growth potential. With this clarity, we build a strong foundation for a high-performing website.
                </p>
              </div>

              {/* Action Button */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    border: "1px solid rgba(255,255,255,0.25)",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    padding: "8px 16px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#ffffff",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                  }}
                  className="hover-button"
                >
                  Start Consulting <span style={{ color: "#00ADEF" }}>→</span>
                </div>
              </div>
            </div>

            {/* Connector Image: before webnoxdigital (bridges Strategic Consulting to Webnox Desktop) */}
            <div
              style={{
                position: "absolute",
                left: "42vw",
                top: "47%", // Moved bottom (from 22%)
                width: "260px",
                height: "120px",
                zIndex: 1,
                pointerEvents: "none",
              }}
            >
              <Image
                src="/landing page/process flow/before webnoxdigital.png"
                alt="Connector curve"
                fill
                className="object-contain"
              />
            </div>

            {/* STEP 3: DESKTOP MOCKUP - RATHZ WEBSITE (Positioned lower) */}
            <DesktopFrame
              frameColor="#0b1329"
              address="https://rathz.com"
              width="740px"
              height="500px"
              style={{
                left: "54vw", // Shifted left (from 70vw)
                bottom: "8%",
              }}
            >
              <div style={{ width: "100%", height: "100%", overflow: "hidden", backgroundColor: "#ffffff" }}>
                <iframe
                  src="https://rathz.com/"
                  title="Rathz Website"
                  scrolling="no"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    overflow: "hidden",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </DesktopFrame>

            {/* Connector Image: before Creative Web Development (bridges Rathz to Creative Web Development) */}
            <div
              style={{
                position: "absolute",
                left: "93vw", // Right after Rathz desktop (54vw + ~740px ≈ 92vw, + breathing space)
                bottom: "44%",
                width: "340px",
                height: "210px",
                zIndex: 1,
                pointerEvents: "none",
              }}
            >
              <Image
                src="/landing page/process flow/before Creative Web Development.png"
                alt="Connector curve"
                fill
                className="object-contain"
              />
            </div>

            {/* STEP 4: CREATIVE WEB DEVELOPMENT (Positioned lower, bottom right — after Rathz) */}
            <div
              style={{
                position: "absolute",
                left: "110vw", // Sits right after the connector (connector at 96vw + ~260px + breathing space)
                bottom: "5%",
                width: "440px",
                height: "290px",
                borderRadius: "20px",
                padding: "24px",
                backgroundImage: "url('/landing page/process flow/Creative Web Development.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                zIndex: 10,
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              <div>
                {/* Badge */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 500, letterSpacing: "0.05em" }}>Creative Web Development</span>
                </div>

                {/* Heading */}
                <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff", lineHeight: 1.25, marginBottom: "12px" }}>
                  Where creativity meets clean code to build powerful websites
                </h3>

                {/* Description Body */}
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.75)", lineHeight: 1.5, margin: 0 }}>
                  We turn ideas into visually striking, user-focused digital experiences. By combining creative UI design with robust development, we create websites that not only look exceptional but <span style={{ color: "#00ADEF", cursor: "pointer", textDecoration: "underline" }}>read more..</span>
                </p>
              </div>

              {/* Action Button */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    border: "1px solid rgba(255,255,255,0.25)",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    padding: "8px 16px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#ffffff",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                  }}
                  className="hover-button"
                >
                  Build Your Website <span style={{ color: "#00ADEF" }}>→</span>
                </div>
              </div>
            </div>

            {/* Connector Image: Line 131 (bridges Creative Web Development to Webnox Digital) */}
            <div
              style={{
                position: "absolute",
                left: "138.5vw", // Between Creative Web Dev (ends ~133vw) and Webnox Desktop (starts 140vw)
                top: "76%",
                width: "120px",
                height: "120px",
                zIndex: 1,
                pointerEvents: "none",
              }}
            >
              <Image
                src="/landing page/process flow/Vector 144 (1).png"
                alt="Connector line"
                fill
                className="object-contain"
              />
            </div>

            {/* STEP 4.5: DESKTOP MOCKUP - WEBNOX DIGITAL (Positioned between Creative Web Dev and Precision Testing) */}
            <DesktopFrame
              frameColor="#0f172a"
              address="https://www.webnoxdigital.com"
              width="740px"
              height="500px"
              style={{
                left: "140vw", // Right after Creative Web Dev card (110vw + ~440px ≈ 133vw, + breathing space)
                top: "10%",
              }}
            >
              <div style={{ width: "100%", height: "100%", overflow: "hidden", backgroundColor: "#ffffff" }}>
                <iframe
                  src="https://www.webnoxdigital.com/"
                  title="Webnox Digital"
                  scrolling="no"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    overflow: "hidden",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </DesktopFrame>

            {/* Connector Image: before Precision Testing (bridges Webnox Desktop to Precision Testing) */}
            <div
              style={{
                position: "absolute",
                left: "188vw", // Right after Webnox Desktop (140vw + ~740px ≈ 180vw)
                top: "16.5%",
                width: "114px",
                height: "80px",
                zIndex: 1,
                pointerEvents: "none",
              }}
            >
              <Image
                src="/landing page/process flow/before Precision Testing.png"
                alt="Connector curve"
                fill
                className="object-contain"
              />
            </div>

            {/* STEP 5: PRECISION TESTING (Positioned higher, top right of section 3) */}
            <div
              style={{
                position: "absolute",
                left: "195vw", // After connector (185vw + 140px ≈ 192vw)
                top: "8%",
                width: "440px",
                height: "290px",
                borderRadius: "20px",
                padding: "24px",
                backgroundImage: "url('/landing page/process flow/Precision Testing.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                zIndex: 10,
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              <div>
                {/* Badge */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 500, letterSpacing: "0.05em" }}>Precision Testing</span>
                </div>

                {/* Heading */}
                <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff", lineHeight: 1.25, marginBottom: "12px" }}>
                  Perfecting performance before going live
                </h3>

                {/* Description Body */}
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.75)", lineHeight: 1.5, margin: 0 }}>
                  We analyze, test, and optimize every interaction to eliminate friction and ensure a smooth user experience. Because even the smallest detail can make the biggest difference.
                </p>
              </div>

              {/* Action Button */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    border: "1px solid rgba(255,255,255,0.25)",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    padding: "8px 16px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#ffffff",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                  }}
                  className="hover-button"
                >
                  Ensure Perfection <span style={{ color: "#00ADEF" }}>→</span>
                </div>
              </div>
            </div>

            {/* Connector Image: before webnoxdigital (bridges Precision Testing to Linktia Desktop) */}
            <div
              style={{
                position: "absolute",
                left: "212vw", // Right after Precision Testing card
                top: "47%",
                width: "380px",
                height: "150px",
                zIndex: 1,
                pointerEvents: "none",
              }}
            >
              <Image
                src="/landing page/process flow/before webnoxdigital.png"
                alt="Connector curve"
                fill
                className="object-contain"
              />
            </div>

            {/* STEP 6: DESKTOP MOCKUP - LINKTIA */}
            <DesktopFrame
              frameColor="#0b1329"
              address="https://sandfoxsoft.com/"
              width="740px"
              height="500px"
              style={{
                left: "228vw", // After the connector
                bottom: "8%",
              }}
            >
              <div style={{ width: "100%", height: "100%", overflow: "hidden", backgroundColor: "#ffffff" }}>
                <iframe
                  src="https://sandfoxsoft.com/"
                  title="sandfoxsoft"
                  scrolling="no"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    overflow: "hidden",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </DesktopFrame>

            {/* STEP 7: Connector Image - before High-Impact Launch */}
            <div
              style={{
                position: "absolute",
                left: "271vw", // After the DesktopFrame
                top: "50%",
                width: "300px",
                height: "130px",
                zIndex: 1,
                pointerEvents: "none",
              }}
            >
              <Image
                src="/landing page/process flow/before High-Impact Launch.png"
                alt="Connector curve"
                fill
                className="object-contain"
              />
            </div>

            {/* STEP 8: HIGH-IMPACT LAUNCH */}
            <div
              style={{
                position: "absolute",
                left: "284vw", // After the connector
                bottom: "50%",
                width: "440px",
                height: "290px",
                borderRadius: "20px",
                padding: "24px",
                backgroundImage: "url('/landing page/process flow/High-Impact Launch.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                zIndex: 10,
                fontFamily: "'Outfit', sans-serif",
              }}
            >
              <div>
                {/* Badge */}
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: 500, letterSpacing: "0.05em" }}>High-Impact Launch</span>
                </div>

                {/* Heading */}
                <h3 style={{ fontSize: "20px", fontWeight: 800, color: "#ffffff", lineHeight: 1.25, marginBottom: "12px" }}>
                  Launching your website with confidence and clarity
                </h3>

                {/* Description Body */}
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.75)", lineHeight: 1.5, margin: 0 }}>
                  Once everything is perfected, we take your website live with a smooth and secure deployment process. We ensure your platform is fully optimized, ready to perform, and built to scale from day one.
                </p>
              </div>

              {/* Action Button */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    border: "1px solid rgba(255,255,255,0.25)",
                    backgroundColor: "rgba(255,255,255,0.06)",
                    padding: "8px 16px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#ffffff",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                  }}
                  className="hover-button"
                >
                  Go Live <span style={{ color: "#00ADEF" }}>→</span>
                </div>
              </div>
            </div>

            {/* Connector Image: Line 131 (1) (bridges High-Impact Launch to final Phone Mockup) */}
            <div
              style={{
                position: "absolute",
                left: "312.5vw", // Right after High-Impact Launch card (284vw + 440px ≈ 306vw)
                top: "38%",
                width: "100px",
                height: "100px",
                zIndex: 1,
                pointerEvents: "none",
              }}
            >
              <Image
                src="/landing page/process flow/Line 131 (1).png"
                alt="Connector line"
                fill
                className="object-contain"
              />
            </div>

            {/* STEP 9: PHONE MOCKUP - KOVAI KITCHEN */}
            <PhoneFrame
              frameColor="#B21E29"
              darkStatus={true}
              style={{
                left: "319vw", // After the connector line
                top: "50%",
                transform: "translateY(-50%)",
                width: "340px", // Compact width
                height: "75vh", // Leaves space at top and bottom
              }}
            >
              <div style={{ width: "100%", height: "100%", overflow: "hidden", backgroundColor: "#ffffff" }}>
                <iframe
                  src="https://kovaikitchenhomemade.com/"
                  title="Kovai Kitchen"
                  scrolling="no"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    overflow: "hidden",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </PhoneFrame>

            {/* Connector Image: Line 131 (2) (bridges Phone Mockup to Final Slide) */}
            <div
              style={{
                position: "absolute",
                left: "341vw", // Right after the phone mockup
                top: "50%",
                width: "180px",
                height: "100px",
                zIndex: 1,
                pointerEvents: "none",
              }}
            >
              <Image
                src="/landing page/process flow/Line 131 (1).png"
                alt="Connector line"
                fill
                className="object-contain"
              />
            </div>

            {/* STEP 10: FINAL CTA SLIDE (Wanna Work With Us?) in Phone Size */}
            <PhoneFrame
              id="step-10-final"
              frameColor="#1e293b"
              darkStatus={true}
              style={{
                left: "350vw", // Adjusted for better centering
                top: "50%",
                transform: "translateY(-50%)",
                width: "320px",
                height: "660px",
                zIndex: 10,
              }}
            >
              <div style={{ position: "absolute", inset: 0 }}>
                <Image
                  src="/landing page/process flow/1 Home with Prototypejtehe 1.png"
                  alt="Wanna work with us"
                  fill
                  className="object-cover"
                />
              </div>
            </PhoneFrame>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .floating-mockup {
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .floating-mockup:hover {
          transform: scale(1.05) translateY(-8px);
          box-shadow: 0 30px 60px rgba(0, 173, 239, 0.3) !important;
          border-color: rgba(72, 237, 255, 0.4) !important;
        }
        .desktop-mockup {
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .desktop-mockup:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(0, 173, 239, 0.3) !important;
          border-color: rgba(72, 237, 255, 0.4) !important;
        }
      `}} />
    </section>
  );
}

