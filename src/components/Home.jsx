import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  ExternalLink,
  Code2,
  Sparkles,
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

const Home = () => {
  const containerRef = useRef(null);
  const form = useRef(null);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sending, setSending] = useState(false);

  // --- SCROLL ANIMATION HOOKS ---
  const { scrollY } = useScroll();
  
  // Parallax: Hero text moves slower than scroll (0px scroll -> 0px y, 500px scroll -> 200px y)
  const heroY = useTransform(scrollY, [0, 500], [0, 200]);
  // Opacity: Hero fades out as you scroll down
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Spring physics for mouse glow (makes it smoother)
  const springX = useSpring(mousePosition.x, { stiffness: 100, damping: 30 });
  const springY = useSpring(mousePosition.y, { stiffness: 100, damping: 30 });

  const EMAILJS_PUBLIC_KEY = "tmmJYdzfdiUn-jQ7p";
  const EMAILJS_SERVICE = "service_8cz5j8k";
  const EMAILJS_TEMPLATE = "template_n1omigy";

  useEffect(() => {
    const handleMouseMove = (e) =>
      setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        form.current
      );
      if (result && (result.status === 200 || result.status === 202 || result.text)) {
        alert("Message sent successfully!");
        form.current.reset();
      } else {
        alert("Message submission returned unexpected result. Check console.");
        console.log("EmailJS result:", result);
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      if (error && error.status === 404) {
        alert("EmailJS: Account not found (404). Check Service ID / Template ID / Public Key.");
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } finally {
      setSending(false);
    }
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/amanrajs2312/", color: "hover:text-pink-500" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/amanraj-s-8036812ba/", color: "hover:text-blue-500" },
    { icon: Github, href: "https://github.com/Amanraj-S", color: "hover:text-gray-300" },
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
    { title: "Weather App", description: "Real-time weather tracking with beautiful UI", demo: "https://weather-app-plum-zeta-10.vercel.app/", code: "https://github.com/Amanraj-S/Weather-App", img: WeatherAppImage, gradient: "from-blue-500 to-cyan-500" },
    { title: "Todo-List App", description: "Task management with smooth animations", demo: "https://todo-app-three-tau-13.vercel.app/", code: "https://github.com/Amanraj-S/todo-app", img: TodoImage, gradient: "from-purple-500 to-pink-500" },
    { title: "Snake Game", description: "Classic game with modern twist", demo: "https://snake-game-delta-murex.vercel.app/", code: "https://github.com/Amanraj-S/Snake-game", img: snakeImage, gradient: "from-green-500 to-emerald-500" },
    { title: "Acadsphere", description: "Student academic progress tracker", demo: "https://acadsphere.vercel.app/", code: "https://github.com/Amanraj-S/Acadsphere", img: acadsphere, gradient: "from-orange-500 to-red-500" },
    { title: "Tasklytic", description: "Task analytics & productivity insights", demo: "https://task-manager-ten-gamma-53.vercel.app/login", code: "https://github.com/Amanraj-S/task-manager", img: task, gradient: "from-indigo-500 to-purple-500" },
  ];

  // --- ANIMATION VARIANTS ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const scaleOnHover = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" } }
  };

  return (
    <div ref={containerRef} className="relative text-white overflow-hidden selection:bg-cyan-500/30">
      
      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-black via-[#020817] to-[#001f2e]" />

      {/* PARALLAX GLOW 1 */}
      <motion.div
        className="fixed inset-0 -z-10"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(circle at 20% 30%, rgba(0,255,255,0.15), transparent 70%)",
        }}
      />

      {/* PARALLAX GLOW 2 */}
      <motion.div
        className="fixed inset-0 -z-10"
        animate={{ y: [15, -15, 15] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(circle at 80% 60%, rgba(0,150,255,0.12), transparent 70%)",
        }}
      />

      {/* PARTICLES - Slightly slower for elegance */}
      {[...Array(80)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 300}%`,
          }}
          animate={{ opacity: [0.1, 0.8, 0.1] }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
        />
      ))}

      {/* ================= HERO SECTION (With Parallax) ================= */}
      <motion.section 
        className="relative min-h-screen flex flex-col items-center justify-center pt-32 text-center"
        style={{ y: heroY, opacity: heroOpacity }} // Apply Parallax Effect
      >
       <motion.div
  initial={{ scale: 0, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1, type: "spring", stiffness: 100 }}
  className="w-40 h-40 rounded-full border-4 border-cyan-400 flex items-center justify-center mb-8 relative z-10 bg-[#0b1220]/30 backdrop-blur-sm overflow-hidden"
>
  <img
    src={Profilepic}
    alt="Profile"
    className="w-full h-full object-cover rounded-full"
  />
</motion.div>

        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
        >
          Amanraj S
        </motion.h1>

        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-2xl text-gray-300 mt-4"
        >
          Full Stack Developer
        </motion.p>

        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-lg text-gray-400 mt-6 max-w-xl"
        >
          Crafting beautiful digital experiences with modern technologies.
        </motion.p>

        {/* Social Icons with staggered entrance */}
        <div className="flex gap-6 mt-10">
          {socialLinks.map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
              className={`p-4 bg-[#0b1220] border border-gray-700 rounded-full hover:bg-cyan-500/10 ${s.color}`}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <s.icon size={24} />
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-32 relative z-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            <Sparkles className="inline text-cyan-400 mr-2" />
            About Me
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-[#0b1220]/60 p-10 rounded-3xl border border-gray-800 shadow-xl backdrop-blur-md"
          >
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer pursuing{" "}
              <span className="text-cyan-400 font-semibold">B.Tech in IT</span>{" "}
              at{" "}
              <span className="text-blue-400 font-semibold">
                Sathyabama Institute of Science and Technology
              </span>.
            </p>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I specialize in building full-stack applications with clean,
              modern UI/UX interfaces.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Skilled in{" "}
              <span className="text-cyan-400 font-semibold">Python</span>,{" "}
              <span className="text-blue-400 font-semibold">React</span>,{" "}
              <span className="text-green-400 font-semibold">Node.js</span>,{" "}
              <span className="text-green-500 font-semibold">MongoDB</span>, and{" "}
              <span className="text-cyan-300 font-semibold">Tailwind CSS</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= TECH STACK (Staggered Grid) ================= */}
      <section id="tech-stack" className="py-32 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            <Code2 className="inline mr-3 text-cyan-400" />
            Tech Stack
          </motion.h2>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10"
          >
            {techItems.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-6 rounded-2xl bg-[#0d1627] border border-gray-800 shadow-xl flex flex-col items-center group"
                whileHover={{ 
                  scale: 1.1, 
                  borderColor: "rgba(34, 211, 238, 0.4)",
                  backgroundColor: "rgba(13, 22, 39, 0.9)" 
                }}
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 object-contain mb-4 rounded-lg group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300"
                />
                <p className="text-lg font-semibold">{t.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-5xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {projects.map((p, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10 }} // Lift card on hover
                className="bg-[#0d1627]/80 rounded-2xl border border-gray-800 shadow-xl overflow-hidden group hover:border-cyan-500/30 transition-colors duration-300"
              >
                <div 
                  className={`h-48 flex items-center justify-center overflow-hidden relative ${p.img ? "bg-gradient-to-br" : "bg-gray-800"}`}
                >
                    {/* Image Zoom Effect on Hover */}
                    {p.img ? (
                        <div 
                           className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                           style={{ backgroundImage: `url(${p.img})` }} 
                        />
                    ) : (
                        <Code2 size={48} className="relative z-10" />
                    )}
                    {/* Overlay for better text readability if needed */}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                </div>

                <div className="p-6 text-left relative z-10 bg-[#0d1627]">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{p.title}</h3>
                  <p className="text-gray-400 mb-4 h-12 overflow-hidden">{p.description}</p>

                  <div className="flex gap-3 mt-auto">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md text-black font-semibold inline-flex items-center justify-center gap-2 hover:brightness-110 transition-all"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>

                    <a
                      href={p.code}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 px-3 py-2 border border-gray-800 rounded-md text-white inline-flex items-center justify-center gap-2 hover:bg-gray-800 transition-all"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-32 relative z-10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-5xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            <Mail className="inline mr-3 text-cyan-400" />
            Get In Touch
          </motion.h2>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0b1220]/80 p-10 rounded-3xl border border-gray-800 shadow-2xl space-y-6 backdrop-blur-md"
          >
            <div className="space-y-2 text-left">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full p-4 bg-[#0d1627] border border-gray-700 rounded-xl focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all duration-300 placeholder-gray-500"
                />
            </div>

            <div className="space-y-2 text-left">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full p-4 bg-[#0d1627] border border-gray-700 rounded-xl focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all duration-300 placeholder-gray-500"
                />
            </div>

            <div className="space-y-2 text-left">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  className="w-full p-4 bg-[#0d1627] border border-gray-700 rounded-xl resize-none focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all duration-300 placeholder-gray-500"
                />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={sending}
              className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg ${sending ? "bg-gray-600" : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-cyan-500/25"} transition-all duration-300`}
            >
              {sending ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>

          <div className="flex justify-center gap-6 mt-10">
            {socialLinks.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 bg-[#0b1220] border border-gray-700 rounded-full hover:bg-cyan-500/10 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <s.icon size={26} />
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;