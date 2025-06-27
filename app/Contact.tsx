"use client";

import { motion } from "framer-motion";
import { Anton } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({ subsets: ["latin"] });
const anton = Anton({ subsets: ["latin"], weight: "400", display: "swap" });

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white min-h-[75vh] md:min-h-screen flex flex-col items-center justify-center px-6 md:px-12"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeatType: "reverse",
        }}
        className={`text-[12vw] leading-[1] uppercase text-center ${anton.className} select-none`}

      >
        Let's<span className="font-bold text-blue-500 italic">build</span> what others won't.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className={`mt-8 text-center max-w-[75%] text-gray-300 text-[2.5vw] md:text-[2vw] uppercase ${geistMono.className}`}
      >
        Ping me for ideas, builds, collaborations, or further queries.
      </motion.p>

      <motion.a
        href="mailto:sarbosarcar@gmail.com"
        className="mt-10 inline-block text-[2.5vw] px-6 py-3 border-2 border-white rounded-full group relative overflow-hidden cursor-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-cursor="hover-nav"
      >
        <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300 uppercase">
          Contact Now
        </span>
        <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
      </motion.a>
    </section>
  );
}
