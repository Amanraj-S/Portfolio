import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md text-white border-b border-gray-800">
      <h3 className="text-xl font-semibold">Amanraj S</h3>
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      <ul className={`flex-col md:flex-row md:flex gap-6 list-none absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent transition-all duration-300 ease-in-out ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
        <li><a href="#home" className="block px-4 py-2 md:p-0 hover:text-blue-400">Home</a></li>
        <li><a href="#about" className="block px-4 py-2 md:p-0 hover:text-blue-400">About</a></li>
        <li><a href="#tech-stack" className="block px-4 py-2 md:p-0 hover:text-blue-400">Tech Stack</a></li>
        <li><a href="#projects" className="block px-4 py-2 md:p-0 hover:text-blue-400">Projects</a></li>
        <li><a href="#contact" className="block px-4 py-2 md:p-0 hover:text-blue-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;