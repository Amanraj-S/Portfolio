import { motion } from "framer-motion";
import { skills } from "../../utils/data";
import GlassCard from "../ui/GlassCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Skills = () => {
  return (
    <section id="tech-stack" className="py-32 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Technical Arsenal</h2>
          <p className="text-gray-400 max-w-2xl text-lg font-light">A comprehensive overview of my technical toolkit, constantly expanding with modern engineering standards.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {skills.map((skillGroup, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/[0.03] border border-white/5 rounded-xl text-indigo-400 group-hover:bg-indigo-500/10 group-hover:text-indigo-300 transition-colors duration-500">
                  <skillGroup.icon size={22} />
                </div>
                <h3 className="text-xl font-semibold text-white tracking-wide">{skillGroup.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="px-4 py-2 bg-white/[0.02] border border-white/5 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/[0.05] hover:border-indigo-500/30 hover:shadow-[0_4px_20px_rgba(79,70,229,0.15)] transition-all duration-300 cursor-default"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
