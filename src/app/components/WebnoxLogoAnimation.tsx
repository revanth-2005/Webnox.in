"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./WebnoxLogoAnimation.module.css";

export default function WebnoxLogoAnimation() {
  const router = useRouter();
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // 4500ms delay before start of fade-out (dissolve) transition
    const fadeTimeout = setTimeout(() => {
      setIsFadingOut(true);
    }, 4500);

    // 4500ms delay + 300ms transition duration = 4800ms before navigating
    const navTimeout = setTimeout(() => {
      router.push("/landing");
    }, 4800);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(navTimeout);
    };
  }, [router]);

  return (
    <div className={`${styles.splashContainer} ${isFadingOut ? styles.fadeOut : ""}`}>
      <div className={styles.logoGroup}>
        {/* Full Official WEBNOX Logo (includes <WEBNOX and TECHNOLOGIES PVT LTD subtitle) */}
        <Image
          src="/webnox-logo.png"
          alt="WEBNOX Technologies Logo"
          width={2649}
          height={888}
          className={styles.logoImage}
          priority
        />
      </div>
    </div>
  );
}
