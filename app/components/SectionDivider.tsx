"use client";

import { useEffect, useRef, useState } from "react";

const sectionDividers = [
  { src: "/images/decor/divider-6.png", width: 1207, height: 161, rotate: -1.4 },
  { src: "/images/decor/divider-1.png", width: 1210, height: 56, rotate: 2.2 },
  { src: "/images/decor/divider-2.png", width: 1205, height: 56, rotate: -2.6 },
  { src: "/images/decor/divider-3.png", width: 1116, height: 41, rotate: 1.7 },
  { src: "/images/decor/divider-4.png", width: 1211, height: 85, rotate: -0.9 },
  { src: "/images/decor/divider-5.png", width: 1239, height: 93, rotate: 2.8 },
] as const;

export function SectionDivider({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const divider = sectionDividers[index];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -4% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`sectionDivider${index === 0 ? " sectionDivider--lights" : ""}${visible ? " is-visible" : ""}`}
      aria-hidden="true"
    >
      <img
        src={divider.src}
        width={divider.width}
        height={divider.height}
        alt=""
        style={{ transform: `rotate(${divider.rotate}deg)` }}
      />
    </div>
  );
}
