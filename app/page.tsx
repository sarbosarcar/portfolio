'use client';

import Hero from './Hero';
import Resume from './Resume';
import Projects from './Projects';
import Preloader from './Preloader';
import CustomCursor from './CustomCursor';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import Contact from './Contact';
import Footer from './Footer';

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
      document.body.classList.remove("cursor-none");
    }
  }, []);

  return (
    <>
    {!loaded && <Preloader onFinish={() => setLoaded(true)} />}
    {loaded && (
    <>
    <CustomCursor />
    <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center overflow-hidden">
      <Navbar />
      <Hero />
      <Resume />
      <Projects />  
      <Contact />
      <Footer />
    </section>
    </>
    )}
    </>
  );
}
