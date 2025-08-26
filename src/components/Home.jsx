import React, { useRef } from 'react';
import htmlLogo from '../assets/html.svg';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/javascript.jpg';
import reactLogo from '../assets/react.png';
import tailwindLogo from '../assets/tailwind.png';
import nodeLogo from '../assets/node.png';
import mongoLogo from '../assets/mongodb.png';
import pythonLogo from '../assets/Python.png';
import mysqlLogo from '../assets/mysql.png';
import Profilepic from '../assets/Profile_pic.JPG';
import instagramIcon from '../assets/instagram.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/Github.jpg';
import WeatherAppImage from '../assets/Weather.png';
import TodoImage from '../assets/Todo.png';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import snakeImage from '../assets/snake.png';
import acadsphere from '../assets/Acadsphere.png';
import task from '../assets/Task.png'

const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8cz5j8k', 'template_x1bkr97', form.current, 'IU7raYDedTlBOdMhs')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.error(error.text);
        alert('Failed to send message.');
      });

    e.target.reset();
  };
  return (
    <div id="home" className="bg-black text-white scroll-mt-24">
      {/* Hero Section */}
      <motion.div
        className="scroll-mt-24 flex justify-center px-6 pt-28 pb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-6 md:p-10 max-w-4xl w-full">
          <img
            src={Profilepic}
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-4 md:mb-0 md:mr-8"
          />
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h1 className="text-3xl font-bold text-black mb-2">Amanraj S</h1>
            <p className="text-xl text-gray-700 mb-4">Full Stack Developer</p>
            <div className="flex space-x-6 mt-2">
              <a href="https://www.instagram.com/amanrajs2312/" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="https://www.linkedin.com/in/amanraj-s-8036812ba/" target="_blank" rel="noopener noreferrer">
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="https://github.com/Amanraj-S" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" className="w-6 h-6 hover:scale-110 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div
        id="about"
        className="scroll-mt-24 flex justify-center px-6 pb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="bg-white text-black rounded-lg shadow-lg p-8 max-w-4xl w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <div className="text-center">
            <p className="text-lg leading-7 text-gray-700">
              I’m a <span className="font-semibold">passionate and detail-oriented Full Stack Developer</span> currently pursuing my
              <span className="font-semibold"> B.Tech in Information Technology</span> at
              <span className="font-semibold"> Sathyabama Institute of Science and Technology</span>.
            </p>
            <p className="mt-4 text-lg leading-7 text-gray-700">
              I specialize in building full-stack web applications and love crafting smooth, user-friendly interfaces. I’m highly
              motivated to turn ideas into real-world digital solutions.
            </p>
            <p className="mt-4 text-lg leading-7 text-gray-700">
              I’m proficient in the <strong>Python programming language</strong> and have hands-on experience with
              <strong> React</strong>, <strong>Tailwind CSS</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div
        id="tech-stack"
        className="scroll-mt-24 flex justify-center px-6 pb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="bg-white text-black rounded-lg shadow-lg p-8 max-w-4xl w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">Tech Stack</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 text-center">
            {[
              { name: 'HTML', icon: htmlLogo },
              { name: 'CSS', icon: cssLogo },
              { name: 'JavaScript', icon: jsLogo },
              { name: 'React', icon: reactLogo },
              { name: 'Tailwind CSS', icon: tailwindLogo },
              { name: 'Node.js', icon: nodeLogo },
              { name: 'MongoDB', icon: mongoLogo },
              { name: 'Python', icon: pythonLogo },
              { name: 'MySQL', icon: mysqlLogo },
              { name: 'GitHub', icon: githubIcon }
            ].map((tech) => (
              <div
                key={tech.name}
                className="p-4 border rounded-lg shadow-md hover:bg-blue-500 hover:scale-105 transition duration-300 flex flex-col items-center"
              >
                <img src={tech.icon} alt={tech.name} className="w-10 h-10 mb-2" />
                <span className="text-sm font-medium text-gray-800">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        id="projects"
        className="scroll-mt-24 flex justify-center px-6 pb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="bg-white text-black rounded-lg shadow-lg p-8 max-w-6xl w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
              <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden flex flex-col">
                <img src={WeatherAppImage} alt="Weather App" className="w-full h-48 object-cover" />
                <div className="p-4 flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-2">Weather App</h3>
                  <div className="flex space-x-4">
                    <a href="https://weather-app-plum-zeta-10.vercel.app/" target="_blank" rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
                      Live Demo
                    </a>
                    <a href="https://github.com/Amanraj-S/Weather-App" target="_blank" rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-200">
                      Code
                    </a>
                  </div>
                </div>
              </div>
               <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden flex flex-col">
                <img src={TodoImage} alt="Weather App" className="w-full h-48 object-cover" />
                <div className="p-4 flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-2">Todo-List App</h3>
                  <div className="flex space-x-4">
                    <a href="https://todo-app-three-tau-13.vercel.app/" target="_blank" rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
                      Live Demo
                    </a>
                    <a href="https://github.com/Amanraj-S/todo-app" target="_blank" rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-200">
                      Code
                    </a>
                  </div>
                </div>
              </div>
               <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden flex flex-col">
                <img src={snakeImage} alt="Weather App" className="w-full h-48 object-cover" />
                <div className="p-4 flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-2">Snake Game (Note: This game only works on Laptops and PC) </h3>
                  <div className="flex space-x-4">
                    <a href="https://snake-game-delta-murex.vercel.app/" target="_blank" rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
                      Live Demo
                    </a>
                    <a href="https://github.com/Amanraj-S/Snake-game" target="_blank" rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-200">
                      Code
                    </a>
                  </div>
                </div>
              </div>
                <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden flex flex-col">
                <img src={acadsphere} alt="Weather App" className="w-full h-48 object-cover" />
                <div className="p-4 flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-2">Todo-List App</h3>
                  <div className="flex space-x-4">
                    <a href="https://acadsphere.vercel.app/" target="_blank" rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
                      Live Demo
                    </a>
                    <a href="https://github.com/Amanraj-S/Acadsphere" target="_blank" rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-200">
                      Code
                    </a>
                  </div>
                </div>
              </div>
                <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden flex flex-col">
                <img src={task} alt="Weather App" className="w-full h-48 object-cover" />
                <div className="p-4 flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-2">Todo-List App</h3>
                  <div className="flex space-x-4">
                    <a href="https://acadsphere.vercel.app/" target="_blank" rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200">
                      Live Demo
                    </a>
                    <a href="https://task-manager-ten-gamma-53.vercel.app/login" target="_blank" rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-200">
                      Code
                    </a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        id="contact"
        className="scroll-mt-24 flex justify-center px-6 pb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="bg-[#1a1a1a] text-white rounded-xl shadow-lg p-8 w-full max-w-2xl backdrop-blur-md">
          <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-[#2a2a2a] placeholder-gray-400 focus:outline-none"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-[#2a2a2a] placeholder-gray-400 focus:outline-none"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded bg-[#2a2a2a] placeholder-gray-400 focus:outline-none resize-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-3 rounded transition duration-200"
            >
              Send Message
            </button>
          </form>

          <div className="flex justify-center space-x-6 mt-10">
            <a href="https://www.instagram.com/amanrajs2312/" target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="Instagram" className="w-12 h-12 bg-black p-2 rounded-full" />
            </a>
            <a href="https://www.linkedin.com/in/amanraj-s-8036812ba/" target="_blank" rel="noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="w-12 h-12 bg-black p-2 rounded-full" />
            </a>
            <a href="https://github.com/Amanraj-S" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="Github" className="w-12 h-12 bg-black p-2 rounded-full" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
