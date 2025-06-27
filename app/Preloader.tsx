"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Anton } from "next/font/google";

const anton = Anton({ subsets: ["latin"], weight: "400", display: "swap" });

const FINAL_TEXT = "SARBOSARCAR";
const CHARACTERS = "!@#$%^&*()_+=-{}[]<>?~".split("");

export default function Preloader({ onFinish }: { onFinish: () => void }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      const progress = frame / 25; 
      const output = FINAL_TEXT.split("")
        .map((char, i) => {
          if (i < Math.floor(progress * FINAL_TEXT.length)) return char;
          return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        })
        .join("");

      setDisplayed(output);
      frame++;

      if (frame > 25) {
        clearInterval(interval);
        setDisplayed(FINAL_TEXT);
        setDone(true);
        setTimeout(onFinish, 750);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: done ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className={`text-[10vw] ${anton.className} tracking-widest`}
        initial={{ rotateX: 90 }}
        animate={{ rotateX: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {displayed}
      </motion.h1>
    </motion.div>
  );
}
