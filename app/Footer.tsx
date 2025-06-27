"use client";

import Marquee from "./Marquee";
import { motion } from "framer-motion";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({ subsets: ["latin"] });

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white px-4 py-12 md:py-20 w-full text-center relative min-h-[35vh] md:min-h-[75vh] border-t-2 border-white">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className={`text-[20vw] md:text-[18vw] font-bold uppercase leading-none text-white tracking-wide`}>
          <Marquee duration={500} repeatCount={50}>
             &nbsp;CREATE
            <span className="text-blue-500 italic">DESIGN </span>
             IDEATE
            <span className="text-blue-500 italic">CODE </span>
             THINK
            <span className="text-blue-500 italic">BUILD </span>
             TEST
            <span className="text-blue-500 italic">DEPLOY </span>
          </Marquee>
        </h1>

        {/* Social Links - Always Side by Side */}
        <div className="flex justify-center gap-6 text-3xl flex-wrap">
          <motion.a
            href="https://github.com/sarbosarcar"
            className="inline-block text-[2.5vw] px-6 py-3 border-2 border-white rounded-full group relative overflow-hidden cursor-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor="hover-nav"
          >
            <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300 uppercase">
              GitHub
            </span>
            <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/sarbosarcar"
            className="inline-block text-[2.5vw] px-6 py-3 border-2 border-white rounded-full group relative overflow-hidden cursor-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor="hover-nav"
          >
            <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300 uppercase">
              LinkedIn
            </span>
            <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
          </motion.a>
        </div>

        {/* Back to Top */}
        <motion.p
          onClick={scrollToTop}
          className="inline-block text-[2.5vw] px-6 py-3 border-2 border-white rounded-full group relative overflow-hidden cursor-none mt-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          data-cursor="hover-nav"
        >
          <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300 uppercase">
            Back to top
          </span>
          <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
        </motion.p>

        {/* Copyright - Plain Text */}
        <p className={`text-[2.5vw] md:text-[2vw] mt-4 text-neutral-400 tracking-wider uppercase ${geistMono.className}`}>
          &copy; {year} - Sarbo Sarcar. Designed to Disrupt.
        </p>
      </div>
    </footer>
  );
}
