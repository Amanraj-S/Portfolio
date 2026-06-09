import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { personalInfo, socialLinks } from "../../utils/data";
import { ChevronDown, Terminal, Code, Database, Server } from "lucide-react";
import GlassCard from "../ui/GlassCard";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-6"
        >
          <div className="inline-block">
            <span className="px-3 py-1 text-xs font-medium tracking-wider text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/20 rounded-full">
              Portfolio
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            <span className="block text-gray-400 text-3xl md:text-4xl font-semibold mb-2">Hello, I'm</span>
            {personalInfo.name}
          </h1>

          <div className="h-12 md:h-16 flex items-center">
            <h2 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              <Typewriter
                words={personalInfo.roles}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h2>
          </div>

          <p className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed font-light">
            Crafting scalable, beautiful, and user-centric digital experiences with a modern engineering mindset.
          </p>

          <div className="flex items-center gap-6 pt-4">
            <a 
              href="#projects" 
              className="px-8 py-3.5 bg-white text-gray-950 font-semibold rounded-xl hover:bg-gray-200 transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              View Projects
            </a>
            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm group"
                >
                  <link.icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3D Developer Workspace */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full hidden md:block perspective-[2000px]"
        >
          {/* Main Floating Terminal */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] max-w-lg z-20"
          >
            <GlassCard tilt={true} className="p-4 bg-[#0a0a0a]/80 backdrop-blur-2xl border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="flex-1 text-center text-xs text-gray-500 font-mono">bash - amanraj@dev:~</div>
              </div>
              <div className="font-mono text-sm space-y-2 text-gray-300">
                <p><span className="text-indigo-400">➜</span> <span className="text-blue-400">~</span> npm run dev</p>
                <p className="text-gray-500">{">"} starting development server...</p>
                <p className="text-green-400">ready in 143ms.</p>
                <p className="text-gray-400 mt-4">
                  <span className="text-indigo-300">Local:</span> http://localhost:5173/ <br />
                  <span className="text-indigo-300">Network:</span> use --host to expose
                </p>
                <motion.div 
                  animate={{ opacity: [1, 0, 1] }} 
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-2 h-4 bg-gray-400 inline-block align-middle mt-2"
                />
              </div>
            </GlassCard>
          </motion.div>

          {/* Floating Code Panel (Top Right) */}
          <motion.div
            animate={{ y: [4, -4, 4] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[10%] right-[-5%] w-64 z-10"
            style={{ transform: "rotateZ(3deg) rotateY(-10deg)" }}
          >
            <GlassCard tilt={false} className="p-4 bg-slate-900/60 backdrop-blur-md border-white/5 opacity-80">
              <div className="flex items-center gap-2 mb-2 text-indigo-300">
                <Code size={16} />
                <span className="text-xs font-mono">App.jsx</span>
              </div>
              <div className="font-mono text-[10px] leading-relaxed text-gray-400">
                <p><span className="text-indigo-300">import</span> React <span className="text-indigo-300">from</span> 'react';</p>
                <p><span className="text-indigo-300">const</span> <span className="text-yellow-200">App</span> = () {'=>'} {'{'}</p>
                <p className="pl-4"><span className="text-indigo-300">return</span> (</p>
                <p className="pl-8 text-cyan-300">{'<Portfolio />'}</p>
                <p className="pl-4">);</p>
                <p>{'};'}</p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Floating Database Panel (Bottom Left) */}
          <motion.div
            animate={{ y: [-3, 3, -3] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[15%] left-[-5%] w-56 z-30"
          >
            <GlassCard tilt={false} className="p-4 bg-gray-900/80 backdrop-blur-xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                  <Database size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">MongoDB</h4>
                  <p className="text-xs text-green-400">Connected</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

           {/* Floating Server Panel (Top Left) */}
           <motion.div
            animate={{ y: [2, -2, 2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-[20%] left-[5%] w-48 z-0 opacity-60 filter blur-[1px]"
          >
            <GlassCard tilt={false} className="p-3 bg-indigo-950/40 backdrop-blur-sm border-white/5">
              <div className="flex items-center gap-3">
                <Server size={18} className="text-indigo-400" />
                <div className="h-2 w-24 bg-indigo-500/20 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-indigo-500" 
                    animate={{ width: ["30%", "70%", "40%"] }} 
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </GlassCard>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs text-gray-500 mb-2 font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
