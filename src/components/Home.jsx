import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  ExternalLink,
  Code2,
  Sparkles,
  CheckCircle2,
  XCircle
} from "lucide-react";
import emailjs from "@emailjs/browser";

// Tech Stack Images
import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.png";
import jsLogo from "../assets/javascript.jpg";
import reactLogo from "../assets/react.png";
import tailwindLogo from "../assets/tailwind.png";
import nodeLogo from "../assets/node.png";
import mongoLogo from "../assets/mongodb.png";
import pythonLogo from "../assets/Python.png";
import mysqlLogo from "../assets/mysql.png";
import githubIcon from "../assets/Github.jpg";
import Profilepic from "../assets/profile_pic.jpg";

// Project images
import WeatherAppImage from "../assets/Weather.png";
import TodoImage from "../assets/Todo.png";
import snakeImage from "../assets/snake.png";
import acadsphere from "../assets/Acadsphere.png";
import task from "../assets/Task.png";

// --- STATIC DATA EXTRACTED FOR PERFORMANCE ---
// Moving these outside the component prevents them from being redefined on every render.
const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/amanraj-s-8036812ba/", color: "hover:text-blue-500 hover:border-blue-500" },
  { name: "GitHub", icon: Github, href: "https://github.com/Amanraj-S", color: "hover:text-gray-300 hover:border-gray-300" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/amanrajs2312/", color: "hover:text-pink-500 hover:border-pink-500" },
];

const techItems = [
  { name: "HTML", img: htmlLogo },
  { name: "CSS", img: cssLogo },
  { name: "JavaScript", img: jsLogo },
  { name: "React", img: reactLogo },
  { name: "Tailwind CSS", img: tailwindLogo },
  { name: "Node.js", img: nodeLogo },
  { name: "MongoDB", img: mongoLogo },
  { name: "Python", img: pythonLogo },
  { name: "MySQL", img: mysqlLogo },
  { name: "GitHub", img: githubIcon },
];

const projects = [
  { title: "Weather App", description: "Real-time weather tracking with beautiful UI", demo: "https://weather-app-plum-zeta-10.vercel.app/", code: "https://github.com/Amanraj-S/Weather-App", img: WeatherAppImage },
  { title: "Todo-List App", description: "Task management with smooth animations", demo: "https://todo-app-three-tau-13.vercel.app/", code: "https://github.com/Amanraj-S/todo-app", img: TodoImage },
  { title: "Snake Game", description: "Classic game with modern twist", demo: "https://snake-game-delta-murex.vercel.app/", code: "https://github.com/Amanraj-S/Snake-game", img: snakeImage },
  { title: "Acadsphere", description: "Student academic progress tracker", demo: "https://acadsphere.vercel.app/", code: "https://github.com/Amanraj-S/Acadsphere", img: acadsphere },
  { title: "Tasklytic", description: "Task analytics & productivity insights", demo: "https://task-manager-ten-gamma-53.vercel.app/login", code: "https://github.com/Amanraj-S/task-manager", img: task },
];

// --- ANIMATION VARIANTS ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const Home = () => {
  const containerRef = useRef(null);
  const form = useRef(null);

  // Form State
  const [sending, setSending] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });

  // Scroll Animation Hooks
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Ideally, move these to a .env file (e.g., import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  const EMAILJS_PUBLIC_KEY = "tmmJYdzfdiUn-jQ7p";
  const EMAILJS_SERVICE = "service_8cz5j8k";
  const EMAILJS_TEMPLATE = "template_n1omigy";

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY) {
      try {
        emailjs.init(EMAILJS_PUBLIC_KEY);
      } catch (err) {
        console.warn("EmailJS init error:", err);
      }
    }
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!form.current) return;

    setSending(true);
    setFormStatus({ type: "", message: "" });

    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        form.current
      );
      if (result && (result.status === 200 || result.status === 202 || result.text)) {
        setFormStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
        form.current.reset();
      } else {
        throw new Error("Unexpected response status.");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setFormStatus({ type: "error", message: "Failed to send message. Please try again later." });
    } finally {
      setSending(false);
      // Clear message after 5 seconds
      setTimeout(() => setFormStatus({ type: "", message: "" }), 5000);
    }
  };

  return (
    <main ref={containerRef} className="relative text-white overflow-hidden selection:bg-cyan-500/30 font-sans">
      
      {/* GLOBAL BACKGROUND - Refined for a more premium look */}
      <div className="fixed inset-0 -z-20 bg-[#020617]" />
      
      {/* PARALLAX GLOWS - Subtler gradients */}
      <motion.div
        className="fixed inset-0 -z-10"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ background: "radial-gradient(circle at 15% 30%, rgba(34, 211, 238, 0.08), transparent 50%)" }}
      />
      <motion.div
        className="fixed inset-0 -z-10"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ background: "radial-gradient(circle at 85% 60%, rgba(59, 130, 246, 0.08), transparent 50%)" }}
      />

      {/* ================= HERO SECTION ================= */}
      <motion.section 
        className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 text-center px-4"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="w-36 h-36 md:w-44 md:h-44 rounded-full border border-gray-700 p-1 mb-8 bg-[#0b1220]/50 backdrop-blur-md"
        >
          <img
            src={Profilepic}
            alt="Amanraj S - Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4"
        >
          Amanraj S
        </motion.h1>

        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl md:text-2xl font-medium bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Full Stack Developer
        </motion.h2>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-base md:text-lg text-gray-400 mt-6 max-w-lg leading-relaxed"
        >
          Crafting scalable, beautiful, and user-centric digital experiences with modern web technologies.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 mt-10"
        >
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className={`p-3 bg-[#0f172a] border border-gray-800 rounded-lg text-gray-400 transition-all duration-300 ${link.color}`}
            >
              <link.icon size={22} />
            </a>
          ))}
        </motion.div>
      </motion.section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-24 relative z-10 border-t border-gray-800/50 bg-[#020617]/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-10 text-white flex items-center justify-center gap-3"
          >
            <Sparkles className="text-cyan-400" size={28} />
            About Me
          </motion.h2>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-gray-300 space-y-6 text-lg leading-relaxed bg-[#0f172a]/50 p-8 md:p-12 rounded-2xl border border-gray-800/50"
          >
            <p>
              I am a passionate Full Stack Developer currently pursuing a{" "}
              <span className="text-white font-semibold">B.Tech in IT</span> at{" "}
              <span className="text-white font-semibold">Sathyabama Institute of Science and Technology</span>.
            </p>
            <p>
              My focus is on bridging the gap between elegant frontend interfaces and robust backend architectures. I specialize in building responsive applications that deliver exceptional user experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= TECH STACK ================= */}
      <section id="tech-stack" className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-14 text-center text-white flex items-center justify-center gap-3"
          >
            <Code2 className="text-cyan-400" size={32} />
            Technologies
          </motion.h2>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
          >
            {techItems.map((tech, i) => (
              <motion.div
                key={i} variants={fadeInUp}
                className="flex flex-col items-center justify-center p-6 rounded-xl bg-[#0f172a] border border-gray-800/60 hover:border-cyan-500/30 transition-colors group"
              >
                <img
                  src={tech.img} alt={tech.name}
                  className="w-12 h-12 object-contain mb-4 grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-24 relative z-10 border-t border-gray-800/50 bg-[#020617]/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-14 text-center text-white"
          >
            Featured Work
          </motion.h2>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, i) => (
              <motion.div
                key={i} variants={fadeInUp}
                className="flex flex-col bg-[#0f172a] rounded-2xl border border-gray-800/60 overflow-hidden group hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="h-48 relative overflow-hidden bg-gray-900">
                  {project.img ? (
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-gray-600"><Code2 size={40}/></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-80" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-6 flex-grow">{project.description}</p>

                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="flex-1 text-sm py-2.5 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-white rounded-lg font-medium inline-flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a
                      href={project.code} target="_blank" rel="noopener noreferrer"
                      className="flex-1 text-sm py-2.5 border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg font-medium inline-flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      <Github size={16} /> Source
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-24 relative z-10">
        <div className="max-w-xl mx-auto px-6">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-10 text-center text-white flex items-center justify-center gap-3"
          >
            <Mail className="text-cyan-400" size={32} />
            Get In Touch
          </motion.h2>

          <motion.form
            ref={form} onSubmit={sendEmail}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="bg-[#0f172a] p-8 md:p-10 rounded-2xl border border-gray-800/60 shadow-xl space-y-5"
          >
            {/* Custom Form Alert UI */}
            {formStatus.message && (
              <div className={`p-4 rounded-lg flex items-center gap-3 text-sm ${formStatus.type === 'success' ? 'bg-green-500/10 border border-green-500/20 text-green-400' : 'bg-red-500/10 border border-red-500/20 text-red-400'}`}>
                {formStatus.type === 'success' ? <CheckCircle2 size={18}/> : <XCircle size={18}/>}
                {formStatus.message}
              </div>
            )}

            <div>
              <label htmlFor="user_name" className="sr-only">Name</label>
              <input
                id="user_name" type="text" name="user_name" placeholder="Name" required
                className="w-full p-3.5 bg-[#020617] border border-gray-800 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none text-gray-200 placeholder-gray-500 text-sm"
              />
            </div>

            <div>
              <label htmlFor="user_email" className="sr-only">Email</label>
              <input
                id="user_email" type="email" name="user_email" placeholder="Email Address" required
                className="w-full p-3.5 bg-[#020617] border border-gray-800 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none text-gray-200 placeholder-gray-500 text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message" name="message" rows="5" placeholder="How can I help you?" required
                className="w-full p-3.5 bg-[#020617] border border-gray-800 rounded-lg resize-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all outline-none text-gray-200 placeholder-gray-500 text-sm"
              />
            </div>

            <button
              type="submit" disabled={sending}
              className={`w-full py-3.5 rounded-lg font-medium text-sm transition-all duration-300 flex justify-center items-center gap-2
                ${sending ? "bg-gray-800 text-gray-500 cursor-not-allowed" : "bg-cyan-500 hover:bg-cyan-400 text-gray-900"}`}
            >
              {sending ? "Sending Message..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-800/50 bg-[#020617]">
        <p>© {new Date().getFullYear()} Amanraj S. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Home;