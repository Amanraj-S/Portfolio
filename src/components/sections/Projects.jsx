import { motion } from "framer-motion";
import { projects } from "../../utils/data";
import { ExternalLink, Github, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Projects</h2>
          <p className="text-gray-400 max-w-2xl text-lg font-light">Architecting solutions that solve complex problems, built with performance and user experience in mind.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex h-full"
            >
              <div className="relative w-full flex flex-col bg-[#0f172a] rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.3)] hover:border-indigo-500/50">
                
                {/* Animated Gradient Border (visible on hover) */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Image Container */}
                {project.img && (
                  <div className="w-full h-56 md:h-64 overflow-hidden relative border-b border-white/5 bg-gray-900 shrink-0">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                )}

                {/* Content Container */}
                <div className="p-8 flex flex-col flex-grow relative z-10 bg-[#0f172a]">
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  {project.features && (
                    <div className="mb-6 space-y-2">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                            <CheckCircle2 size={16} className="text-indigo-500 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Tech Stack */}
                  <div className="mt-auto pt-6 border-t border-white/5 mb-8">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, j) => (
                        <span key={j} className="text-xs font-mono px-2.5 py-1 bg-white/[0.03] border border-white/10 rounded-md text-gray-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4">
                    {project.demo && (
                      <a
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold bg-white text-gray-950 py-3 rounded-xl hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                    {project.code && (
                      <a
                        href={project.code} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold bg-white/5 border border-white/10 text-white py-3 rounded-xl hover:bg-white/10 transition-colors"
                      >
                        <Github size={16} /> GitHub
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
