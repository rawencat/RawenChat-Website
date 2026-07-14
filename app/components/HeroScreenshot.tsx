"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function HeroScreenshot() {
  const { t } = useLanguage();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const el = wrapRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;
      const raw = (viewportH * 0.5 - rect.top) / (viewportH * 0.8);
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const rotateX = progress * 26;
  const scale = 1 - progress * 0.06;
  const translateY = progress * -28;
  const opacity = 1 - progress * 0.25;

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto mt-16 w-full max-w-5xl"
      style={{
        perspective: "1600px",
        perspectiveOrigin: "50% 90%",
        paddingBottom: "2.5rem",
      }}
    >
      <div
        className="will-change-transform"
        style={{
          transform: `translate3d(0, ${translateY}px, 0) rotateX(${rotateX}deg) scale(${scale})`,
          transformOrigin: "center bottom",
          opacity,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="relative w-full">
          <Image
            src="/showcase/start.png"
            alt={t.hero.imageAlt}
            width={1280}
            height={800}
            quality={100}
            unoptimized
            priority
            className="relative z-0 h-auto w-full"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
          />

         
        </div>
      </div>

    
    </div>
  );
}
