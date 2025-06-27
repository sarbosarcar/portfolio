"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [variant, setVariant] = useState<"default" | "hovered" | "nav" | "hover-proj">("default");
  const [isMobile, setIsMobile] = useState(false);
  const [isSafari, setIsSafari] = useState(false);

useEffect(() => {
  const safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  setIsSafari(safari);
}, []);

  // Device detection (real mobile, not narrow window)
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isTouchDevice =
      /android|iphone|ipad|ipod|mobile|tablet|touch/.test(ua) || "ontouchstart" in window;

    setIsMobile(isTouchDevice);
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const hoveredEls = document.querySelectorAll("[data-cursor='hover']");
    const navEls = document.querySelectorAll("[data-cursor='hover-nav']");
    const projEls = document.querySelectorAll("[data-cursor='hover-proj']");

    const enter = (v: typeof variant) => () => setVariant(v);
    const leave = () => setVariant("default");

    hoveredEls.forEach((el) => {
      el.addEventListener("mouseenter", enter("hovered"));
      el.addEventListener("mouseleave", leave);
    });

    navEls.forEach((el) => {
      el.addEventListener("mouseenter", enter("nav"));
      el.addEventListener("mouseleave", leave);
    });

    projEls.forEach((el) => {
      el.addEventListener("mouseenter", enter("hover-proj"));
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      hoveredEls.forEach((el) => {
        el.removeEventListener("mouseenter", enter("hovered"));
        el.removeEventListener("mouseleave", leave);
      });
      navEls.forEach((el) => {
        el.removeEventListener("mouseenter", enter("nav"));
        el.removeEventListener("mouseleave", leave);
      });
      projEls.forEach((el) => {
        el.removeEventListener("mouseenter", enter("hover-proj"));
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);
  
  if (isSafari) return null;
  if (isSafari) {
    document.body.classList.remove("cursor-none");
  }
  
  if (isMobile) return null;

  const baseStyle = "pointer-events-none fixed z-[9999] transition-all duration-300 ease-out rounded-full";
  const styles: Record<typeof variant, string> = {
    default: "h-5 w-5 bg-white mix-blend-difference",
    hovered: "h-16 w-16 bg-white mix-blend-difference rounded-[20%]",
    nav: "h-8 w-8 bg-white mix-blend-difference rounded-[20%]",
    "hover-proj": "px-4 py-2 backdrop-blur-[4px] bg-white mix-blend-difference text-black flex items-center justify-center font-mono text-[2vw] rounded-[35px]",
  };

  return (
    <div
      className={`${baseStyle} ${styles[variant]}`}
      style={{
        transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
      }}
    >
      {variant === "hover-proj" && <span className="pointer-events-none">VIEW</span>}
    </div>
  );
}
