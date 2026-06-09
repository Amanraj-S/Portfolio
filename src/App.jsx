import React from "react";
import { ReactLenis } from "lenis/react";
import Navbar from "./components/Navbar";
import Background from "./components/ui/Background";

// Sections
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";

const App = () => {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true, orientation: 'vertical', gestureOrientation: 'vertical' }}>
      <div className="relative text-slate-200 selection:bg-indigo-500/30 selection:text-white font-sans antialiased overflow-x-hidden">
        
        <Background />
        <Navbar />

        <main className="relative flex flex-col">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </main>

        <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-[#020617] relative z-10">
          <p>© {new Date().getFullYear()} Amanraj S. All rights reserved.</p>
        </footer>
        
      </div>
    </ReactLenis>
  );
};

export default App;
