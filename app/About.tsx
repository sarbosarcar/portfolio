import { motion } from "framer-motion";
import { Anton } from "next/font/google";
import { Fade } from "react-awesome-reveal";
import { VelocityText } from "./VelocityText";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({ subsets: ["latin"] });
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function About() {
  return (
    <Fade>
      <section className={`about ${anton.className} bg-black text-white overflow-hidden px-4 py-12 md:py-16 md:px-8 lg:px-24`}>
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-12">
          
          {/* Social Icons Column */}
          <div className="flex justify-center md:justify-start items-start mt-4 md:mt-0 md:order-1 order-2">
            <div className="flex gap-6 text-3xl">
            <div data-cursor="hover-nav">
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
            </div>
            <div data-cursor="hover-nav">
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
            </div>
          </div>

          {/* Text Column */}
          <div className="text-justify max-w-[60ch] mx-auto md:mx-0 md:order-2 order-1">
            <h1 className={`text-[3.5vw] md:text-[2vw] uppercase ${geistMono.className}`}>
              Based in Kolkata, I build with intention. Rooted in{" "}
              <span className="font-bold text-blue-500 italic">curiosity</span> and driven by{" "}
              <span className="font-bold text-blue-500 italic">precision</span>, my work bridges quiet focus with bold execution. Every project is an intersection of{" "}
              <span className="font-bold text-blue-500 italic">structure</span>,{" "}
              <span className="font-bold text-blue-500 italic">clarity</span>, and{" "}
              <span className="font-bold text-blue-500 italic">momentum</span>.
            </h1>
          </div>
        </div>
      </section>
      {/* <VelocityText /> */}
    </Fade>
  );
}
