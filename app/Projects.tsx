"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Geist_Mono } from "next/font/google";

import { BsArrowUpRight } from "react-icons/bs";

const geistMono = Geist_Mono({ subsets: ["latin"] });

const projects = [
  {
    title: "RAGBot",
    description: "RAG-based chatbot leveraging advanced AI techniques to provide context-aware responses by integrating external knowledge sources.",
    image: "/projects/RAGBot.gif",
    link: "https://github.com/sarbosarcar/RAGBot",
  },
  {
    title: "Clipd",
    description: "Minimalist clipboard application that enables users to save text effortlessly, generate customizable links for easy access, and retrieve or update content at any time.",
    image: "/projects/clipd.png",
    link: "https://github.com/sarbosarcar/Clipd",
  },
  {
    title: "SimpliPy",
    description: "Web app recommending Spotify sound tracks based on user preferences.",
    image: "/projects/Simplipy.png",
    link: "https://github.com/sarbosarcar/Simplipy",
  },
  {
    title: "EduPy",
    description: "Web app recommending undergraduate courses in Europe based on user personality traits.",
    image: "/projects/Edupy.png",
    link: "https://github.com/sarbosarcar/EduPy",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white px-4 md:px-12 lg:px-24 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[12vw] md:text-[7vw] font-bold uppercase tracking-tight mb-16">
          Projects
        </h2>

        <div className="flex flex-col gap-24" data-cursor="hover-proj">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col"
              data-cursor="hover-proj"
              onClick={() => window.open(project.link, "_blank")}
            >
              <div className="relative w-[90vw] h-[50vw] max-h-[600px] rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain rounded-xl"
                  unoptimized
                />
                <div className="absolute z-10 inset-0 bg-black/0 group-hover:bg-black/0 transition duration-500" />
              </div>
              <div className="mt-6">
                <h3 className="text-[7vw] md:text-[5vw] font-semibold uppercase">{project.title}
                  <BsArrowUpRight className="up-right inline text-white" />
                </h3>
                <p className={`mt-2 text-[3.5vw] md:text-[2vw] text-gray-300 text-justify uppercase py-8 ${geistMono.className}`}>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
