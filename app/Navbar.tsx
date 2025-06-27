"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sectionIds = ["about", "resume", "projects", "contact"];

export default function Navbar() {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [activeTab, setActiveTab] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateDeviceType = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);
    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveTab(id);
        },
        { threshold: 0.1, rootMargin: '0px 0px -50% 0px' }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  if (isMobile) {
    return (
      <>
        <div className="fixed top-8 right-8 z-50 cursor-none" data-cursor="hover-nav">
          <button
            onClick={() => setMenuOpen(true)}
            data-cursor="hover-nav"
            className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center cursor-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 8H13.75M5 12H19M10.25 16L19 16" stroke="#464455" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center gap-12"
              data-cursor="hover-nav"
            >
              {sectionIds.map((id) => (
                <button
                  key={id}
                  onClick={() => {
                    const target = document.getElementById(id);
                    target?.scrollIntoView({ behavior: "smooth", block: "start" });
                    setMenuOpen(false);
                  }}
                  className="text-4xl uppercase tracking-widest font-bold cursor-none"
                >
                  {id === "resume" ? "résumé" : id}
                </button>
              ))}
              <button onClick={() => setMenuOpen(false)} className="absolute top-8 right-8 text-2xl cursor-none" data-cursor="hover-nav">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 7L7 18M7 7L18 18" />
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <div className="fixed top-8 left-0 right-0 z-50 mx-4 bg-transparent">
      <ul
        onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
        className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1 cursor-none"
      >
        {sectionIds.map((id) => (
          <Tab
            key={id}
            children={id === "resume" ? "résumé" : id}
            setPosition={setPosition}
            id={id}
            active={activeTab === id}
            setActiveTab={setActiveTab}
          />
        ))}
        <Cursor position={position} />
      </ul>
    </div>
  );
}

const Tab = ({
  children,
  setPosition,
  id,
  active,
  setActiveTab,
}: {
  children: string;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  id: string;
  active: boolean;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={() => {
        const target = document.getElementById(id);
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveTab(id);
        setPosition((pv) => ({ ...pv, opacity: 0 }));
      }}
      className={`relative z-10 block px-3 py-1.5 text-xs uppercase mix-blend-difference md:px-5 md:py-3 md:text-base cursor-none rounded-full ${active ? "bg-white text-black" : "bg-black text-white"}`}
      data-cursor="hover-nav"
    >
      <span dangerouslySetInnerHTML={{ __html: children }} />
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{ ...position }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};
