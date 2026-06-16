"use client";

import { useEffect, useState } from "react";
import styles from "./AnimatedLogo.module.css";

interface AnimatedLogoProps {
  height?: number | string; // Height of the logo image (pixels or responsive unit)
  delay?: number;           // Delay before start of animation in ms
  className?: string;
}

export default function AnimatedLogo({
  height = 120,
  delay = 800,
  className = "",
}: AnimatedLogoProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  // Pass height as a CSS custom property so everything scales proportionally
  const customStyles = {
    "--logo-h": typeof height === "number" ? `${height}px` : height,
  } as React.CSSProperties;

  const animationClass = isAnimating ? styles.animate : "";

  return (
    <div
      className={`${styles.logoWrapper} ${animationClass} ${className}`}
      style={customStyles}
    >
      {/* Left Column containing W icon and its subtitle segment */}
      <div className={styles.leftCol}>
        <div className={styles.wIconGroup} aria-hidden="true">
          <div className={styles.wIconBox}>
            <img
              src="/webnox-logo.png"
              alt="Webnox W Icon"
              className={styles.logoImg}
              draggable="false"
            />
          </div>
          <div className={styles.wDot} />
        </div>
        <div className={styles.wSubtitleBox} aria-hidden="true">
          <img
            src="/webnox-logo.png"
            alt="Webnox W Subtitle"
            className={styles.logoImg}
            draggable="false"
          />
        </div>
      </div>

      {/* Right Column containing WEBNOX text and its subtitle segment */}
      <div className={styles.textBox} aria-hidden="true">
        <img
          src="/webnox-logo.png"
          alt="Webnox Text and Subtitle"
          className={styles.logoImg}
          draggable="false"
        />
      </div>
      <span className="sr-only">Webnox Technologies Pvt Ltd</span>
    </div>
  );
}
