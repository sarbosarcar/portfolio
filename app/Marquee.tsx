"use client";

import { motion } from "framer-motion";

export default function Marquee({
  children,
  duration = 20,
  repeatCount = 50, // simulate a huge repeat like 9500
}: {
  children: React.ReactNode;
  duration?: number;
  repeatCount?: number;
}) {
  const content = Array.from({ length: repeatCount }, (_, i) => (
    <span key={i} className="mx-0 inline-block">
      {children}
    </span>
  ));

  return (
    <div className="overflow-hidden whitespace-nowrap w-full">
      <motion.div
        className="inline-block"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {content}
        {content}
      </motion.div>
    </div>
  );
}
