import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../utils/data';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled
          ? 'bg-[#020617]/70 backdrop-blur-xl border-white/10 shadow-2xl'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="relative group">
          <motion.div
            className="text-xl font-bold text-white tracking-tight"
            whileHover={{ scale: 1.05 }}
          >
            AMANRAJ S<span className="text-cyan-500"></span>
          </motion.div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center bg-white/[0.03] px-6 py-2 rounded-full border border-white/5">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <a
                href={item.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300"
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Resume Button */}
        <motion.div 
          className="hidden md:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#contact"
            className="px-5 py-2.5 text-sm font-semibold bg-white text-gray-950 rounded-lg hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            Hire Me
          </a>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-lg bg-white/5 border border-white/10"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-[#020617]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl md:hidden overflow-hidden"
          >
            <ul className="flex flex-col py-6 px-6 space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-lg font-medium text-gray-400 hover:text-white transition-colors py-2 border-b border-white/5"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                 <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center px-5 py-3 text-sm font-semibold bg-white text-gray-950 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
