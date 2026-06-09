import { motion } from "framer-motion";
import { experience } from "../../utils/data";
import GlassCard from "../ui/GlassCard";
import { Briefcase } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative z-10 border-t border-white/5 bg-[#020617]">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 mb-4 text-xs font-medium tracking-wider text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/20 rounded-full">
            <Briefcase size={14} />
            <span>Career</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Progress Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 transform md:-translate-x-1/2">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{ height: "100%" }}
            />
          </div>

          <div className="space-y-12">
            {experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex items-center justify-between md:justify-center w-full">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] md:left-1/2 w-3 h-3 bg-[#020617] border-2 border-cyan-500 rounded-full transform md:-translate-x-1/2 z-20 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`w-full md:w-5/12 pl-8 md:pl-0 ${isEven ? 'md:pr-12 md:text-right md:mr-auto' : 'md:pl-12 md:text-left md:ml-auto'}`}
                  >
                    <GlassCard className={`p-6 border-white/5 hover:border-cyan-500/30 transition-colors ${isEven ? 'md:items-end md:text-right' : 'md:items-start'}`}>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                      <h4 className="text-cyan-400 font-medium text-sm mb-3">{exp.company}</h4>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                        <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 font-mono">
                          {exp.duration}
                        </span>
                        <span className="text-xs text-gray-500">{exp.location}</span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed text-left">
                        {exp.description}
                      </p>
                    </GlassCard>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
