import { motion } from "framer-motion";
import { certifications } from "../../utils/data";
import GlassCard from "../ui/GlassCard";
import { Award, CheckCircle, ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-32 relative z-10 border-t border-white/5 bg-[#020617]/80">
      <div className="max-w-5xl mx-auto px-6">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 mb-4 text-xs font-medium tracking-wider text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 rounded-full">
            <Award size={14} />
            <span>Achievements</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Certifications</h2>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={fadeUp}>
              <GlassCard tilt={true} className="h-full p-8 flex flex-col items-center text-center justify-center border-white/5 hover:border-indigo-500/30 group">
                <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Award size={32} className="text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-white leading-tight mb-4 group-hover:text-indigo-300 transition-colors">
                  {cert.name.split(' - ')[1]} {/* Extracts the core title */}
                </h3>
                <div className="mt-auto flex flex-col items-center gap-4 w-full">
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-500 bg-white/5 px-3 py-1.5 rounded-full">
                    <CheckCircle size={12} className="text-green-500" /> Verified by IITs/IISc
                  </div>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 mt-2 text-sm font-medium text-white bg-indigo-600/20 hover:bg-indigo-600/40 border border-indigo-500/30 rounded-lg transition-all w-full group/btn"
                  >
                    View Certificate
                    <ExternalLink size={14} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Certifications;
