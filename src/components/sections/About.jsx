import { motion } from "framer-motion";
import { personalInfo, education } from "../../utils/data";
import GlassCard from "../ui/GlassCard";
import Profilepic from "../../assets/Profile_pic.jpeg";
import { GraduationCap, User, Target } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const About = () => {
  return (
    <section id="about" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Photo & Intro */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <GlassCard className="p-6 md:p-8 relative overflow-hidden group">
                {/* Glow effect */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-cyan-500/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="flex flex-col items-center md:items-start md:flex-row gap-6 mb-6">
                  <div className="w-28 h-28 md:w-32 md:h-32 shrink-0 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)] relative z-10 group-hover:shadow-[0_0_50px_rgba(79,70,229,0.15)] transition-shadow duration-700">
                    <img 
                      src={Profilepic} 
                      alt={personalInfo.name} 
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center md:text-left relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-1">{personalInfo.name}</h3>
                    <p className="text-cyan-400 font-medium text-sm mb-3">Based in Chennai, India</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                      <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">Innovator</span>
                      <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">Designer</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-gray-400 leading-relaxed text-sm relative z-10">
                  <p>{personalInfo.about}</p>
                </div>
              </GlassCard>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <GlassCard className="p-6">
                <div className="flex items-center gap-3 mb-4 text-white">
                  <Target className="text-blue-400" size={20} />
                  <h3 className="text-lg font-semibold">Career Objective</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Seeking opportunities in a dynamic organization where I can utilize my technical skills to create innovative and scalable web applications while continuously learning and growing alongside industry leaders.
                </p>
              </GlassCard>
            </motion.div>
          </div>

          {/* Right Column: Education */}
          <div className="lg:col-span-7">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mb-6 flex items-center gap-3 text-white"
            >
              <GraduationCap className="text-indigo-400" size={24} />
              <h3 className="text-2xl font-semibold">Education</h3>
            </motion.div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlassCard className="p-6 md:p-8 hover:border-indigo-500/30 transition-colors duration-300">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-2">
                      <div>
                        <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                        <p className="text-indigo-400 text-sm font-medium mt-1">{edu.institution}</p>
                      </div>
                      <div className="text-left md:text-right shrink-0">
                        <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 mb-1">
                          {edu.duration}
                        </span>
                        <p className="text-sm text-gray-500">{edu.location}</p>
                      </div>
                    </div>
                    <div className="mt-4 inline-block px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm font-medium">
                      {edu.score}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
