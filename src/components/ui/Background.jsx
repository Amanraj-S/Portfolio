import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Background = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Only track mouse if device has hover to save performance
    const mediaQuery = window.matchMedia("(pointer: fine)");
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    if (mediaQuery.matches) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#020617] pointer-events-none" style={{ contain: "strict" }}>
      {/* Base Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          willChange: "transform",
        }}
      />
      
      {/* Aurora Gradient 1 - Deep Slate */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] opacity-30"
        style={{
          background: "radial-gradient(circle at center, rgba(51,65,85,0.8) 0%, rgba(2,6,23,0) 60%)",
          willChange: "transform",
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Aurora Gradient 2 - Soft Indigo */}
      <motion.div
        className="absolute top-[10%] right-[-10%] w-[50vw] h-[50vw] opacity-20"
        style={{
          background: "radial-gradient(circle at center, rgba(79,70,229,0.4) 0%, rgba(2,6,23,0) 60%)",
          willChange: "transform",
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Aurora Gradient 3 - Deep Slate Blue */}
      <motion.div
        className="absolute bottom-[-10%] left-[20%] w-[70vw] h-[70vw] opacity-30"
        style={{
          background: "radial-gradient(circle at center, rgba(30,41,59,0.9) 0%, rgba(2,6,23,0) 60%)",
          willChange: "transform",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Subtle Light Ray Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617] pointer-events-none" />

      {/* Mouse Follow Light - Very Soft */}
      <motion.div
        className="absolute w-[400px] h-[400px] pointer-events-none opacity-10 hidden md:block"
        style={{
          background: "radial-gradient(circle at center, rgba(99,102,241,0.5) 0%, rgba(2,6,23,0) 60%)",
          willChange: "transform",
        }}
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0.1,
        }}
      />
    </div>
  );
};

export default Background;
