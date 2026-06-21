"use client";

import { useEffect, useRef, useState, type ImgHTMLAttributes } from "react";

type Motion = "sway" | "float" | "drift" | "spin";
type RevealFrom = "left" | "right" | "scale";

type AnimDecorProps = ImgHTMLAttributes<HTMLImageElement> & {
  motion?: Motion;
  revealFrom?: RevealFrom;
  delay?: number;
};

export function AnimDecor({
  motion = "sway",
  revealFrom = "scale",
  delay = 0,
  className = "",
  style,
  ...props
}: AnimDecorProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [visible, setVisible] = useState(false);

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
      { threshold: 0.05, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={ref}
      {...props}
      className={`decor animDecor animDecor--reveal-${revealFrom} animDecor--${motion}${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={{
        ...style,
        transitionDelay: `${delay}ms`,
        animationDelay: `${delay + 500}ms, ${delay + 500}ms`,
      }}
    />
  );
}
