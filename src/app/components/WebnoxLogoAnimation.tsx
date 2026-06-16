"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AnimatedLogo from "./AnimatedLogo";
import styles from "./WebnoxLogoAnimation.module.css";

export default function WebnoxLogoAnimation() {
  const router = useRouter();
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // 3700ms delay before start of fade-out (dissolve) transition of splash container
    const fadeTimeout = setTimeout(() => {
      setIsFadingOut(true);
    }, 3700);

    // 3700ms delay + 300ms transition duration = 4000ms before navigating
    const navTimeout = setTimeout(() => {
      router.push("/landing");
    }, 4000);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(navTimeout);
    };
  }, [router]);

  return (
    <div className={`${styles.splashContainer} ${isFadingOut ? styles.fadeOut : ""}`}>
      <div className={styles.logoGroup}>
        {/* Animated WEBNOX Logo which scales up W icon and fades out text */}
        <AnimatedLogo height="min(18vw, 140px)" delay={800} />
      </div>
    </div>
  );
}

