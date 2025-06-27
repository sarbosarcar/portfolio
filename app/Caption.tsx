"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Caption() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const text = textRef.current;
    if (!wrapper || !text) return;

    const getScrollAmount = () => -(text.scrollWidth - window.innerWidth);

    const tween = gsap.to(text, {
      x: getScrollAmount,
      ease: "none",
      duration: 3,
    });

    ScrollTrigger.create({
      trigger: ".racesWrapper",
      start: "top 80%",
      end: () => `+=${text.scrollWidth - window.innerWidth}`,
      pin: true,
      scrub: 1,
      animation: tween,
      invalidateOnRefresh: true,
      markers: true
    });
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="racesWrapper w-[max-content] bg-black text-white overflow-hidden flex items-center text-[7vw]"
    >
      <div ref={textRef} className="races flex whitespace-nowrap space-x-4">
        {(() => {
          const sentence = "Thriving at the intersection of AI, Development, and Innovation";
          // Driven by a commitment to innovation, I specialize in building intelligent systems at the intersection of disciplines—merging full-stack development, AI, and data-driven research. With a focus on impactful solutions, I engineer purposeful digital experiences that transcend convention, deliver measurable value, and advance the frontiers of applied technology.
          const words = sentence.split(" ");

          return words.map((word, index) => (
            <h2 key={index} className="font-bold uppercase">
              {word}
            </h2>
          ));
        })()}
      </div>
    </section>
  );
}
