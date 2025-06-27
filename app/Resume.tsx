"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import { Geist_Mono } from "next/font/google";
import { Fade } from "react-awesome-reveal";

const geistMono = Geist_Mono({ subsets: ["latin"] });

export default function Resume() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);

      mouseX.set(Math.max(-40, Math.min(40, relX)));
      mouseY.set(Math.max(-20, Math.min(20, relY)));
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    const btn = buttonRef.current;
    btn?.addEventListener("mousemove", handleMouseMove);
    btn?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      btn?.removeEventListener("mousemove", handleMouseMove);
      btn?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Fade
    duration={1000}
    fraction={0.25}
    cascade
    damping={100}
    >
    <section id="resume" className="grid bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 max-w-6xl">
        {/* Text Container */}
        <div className={`bg-black text-white text-justify overflow-hidden px-4 md:py-2 md:px-8 lg:px-24 pt-8 md:py-24 lg:py-32`}>
          <h2 className="text-[12vw] md:text-[7vw] font-bold mb-4 uppercase">Skills - Summed</h2>
          <p className={`${geistMono.className} text-[3.5vw] md:text-[2vw] text-justify uppercase pt-8`}>
            Explore my <span className="font-bold text-blue-500 italic">skills</span> and <span className="font-bold text-blue-500 italic">experiences</span> in this document that condenses all of the details into a collection of bullet points.
          </p>
        </div>
        {/* Button Container */}

      <div className="flex flex-col items-center justify-center cursor-none scale-90 md:scale-100 mt-8 md:mt-0">
          <motion.button
            onClick={() => window.open("/resume.pdf", "_blank")}
            ref={buttonRef}
            style={{ x: springX, y: springY }}
            className="group relative grid h-[220px] w-[220px] place-content-center rounded-full border-2 border-white bg-black text-white transition-all duration-700 ease-out hover:bg-white hover:text-black cursor-none"
            data-cursor="hover"
          >
            <svg
              className="pointer-events-none relative z-10 rotate-45 text-7xl transition-all duration-700 ease-out group-hover:rotate-90 group-hover:text-black"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
            </svg>

            <div className="pointer-events-none absolute inset-0 z-0 scale-0 rounded-full bg-white transition-transform duration-700 ease-out group-hover:scale-100" />

            <svg
              width="200"
              height="200"
              className="pointer-events-none absolute z-10 animate-spin-slow"
              style={{ top: "4%", left: "4%", transform: "translate(-4%, -4%)" }}
            >
              <path
                id="circlePath"
                d="M100,100 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0"
                fill="none"
              />
              <text>
                <textPath
                  href="#circlePath"
                  className={`fill-white text-xl font-light uppercase tracking-widest transition-all duration-700 ease-out group-hover:fill-black ${geistMono.className}`}
                >
                  Download résumé by clicking on this button
                </textPath>
              </text>
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
    </Fade>
  );
}
