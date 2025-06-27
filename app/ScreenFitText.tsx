import React, { useEffect, useRef } from "react";

export default function ScreenFitText({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const resizeText = () => {
      const container = containerRef.current;
      const text = textRef.current;

      if (!container || !text) return;

      text.style.whiteSpace = "nowrap";
      text.style.visibility = "hidden";

      const containerWidth = container.offsetWidth;
      let min = 1;
      let max = 2500;
      let bestFit = 1;

      while (min <= max) {
        const mid = Math.floor((min + max) / 2);
        text.style.fontSize = mid + "px";

        if (text.offsetWidth <= containerWidth) {
          bestFit = mid;
          min = mid + 1;
        } else {
          max = mid - 1;
        }
      }

      text.style.fontSize = bestFit + "px";
      text.style.visibility = "visible";
    };

    resizeText();
    window.addEventListener("resize", resizeText);
    return () => window.removeEventListener("resize", resizeText);
  }, []);

  return (
    <div
      className="flex h-screen w-full items-center overflow-hidden bg-slate-950"
      ref={containerRef}
    >
      <span
        ref={textRef}
        className="absolute bottom-0 left-0 mx-auto text-center font-bold uppercase text-slate-700"
        style={{ whiteSpace: "nowrap" }}
      >
        {children}
      </span>
    </div>
  );
}
