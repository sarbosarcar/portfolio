import { motion } from "framer-motion";
import { Anton } from "next/font/google";
import { Fade } from "react-awesome-reveal";
import About from './About';

const anton = Anton({ subsets: ['latin'], weight: '400', display: 'swap' });

export default function Hero() {
    return (
      <>
        <Fade
        duration={1000}
        cascade
        damping={10}
        >
        <section className=" md:min-h-[80vh] bg-black text-white flex flex-col overflow-hidden w-full pl-4 md:pl-8 lg:pl-24 pt-24 md:pt-36 leading-[1]" id="about">
        <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`text-[15vw] md:text-[12vw] font-bold ${anton.className} text-white`}
      >
        HELLO. I AM
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`text-[15vw] md:text-[12vw] font-bold uppercase italic text-blue-500`}>
        SARBO SARCAR
        </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={`text-[15vw] md:text-[12vw] font-bold ${anton.className}`}
      >
        TECH STUDENT & WEB DEVELOPER
      </motion.h1>  
    </section>
    </Fade>

    <Fade
    duration={1000}
    cascade
    damping={10}
    >
      <About />
    </Fade>
      </>
    );
};