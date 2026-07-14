"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type ShowcaseImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
};

export default function ShowcaseImage({
  src,
  alt,
  priority = false,
  className = "",
}: ShowcaseImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * 12;
    const rotateY = (x - 0.5) * 12;
    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(0.97)`,
      boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)",
      boxShadow: "0 0px 0px rgba(0,0,0,0)",
    });
  };

  return (
    <div
      ref={ref}
      className={`relative w-full transition-[transform,box-shadow] duration-200 ease-out will-change-transform ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      <Image
        src={src}
        alt={alt}
        width={1280}
        height={800}
        unoptimized
        priority={priority}
        className="h-auto w-full"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
      />
    </div>
  );
}
