import { Github, Linkedin, Instagram, Code2, Monitor, Database, Wrench, Server } from "lucide-react";

// Tech Stack Images (from existing)
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

// Project images (from existing)
import WeatherAppImage from "../assets/Weather.png";
import TodoImage from "../assets/Todo.png";
import snakeImage from "../assets/snake.png";
import acadsphere from "../assets/Acadsphere.png";
import task from "../assets/Task.png";
import twitterExtension from "../assets/Twitter-Extension.jpeg";
import weatherRoute from "../assets/Weather-Route.jpeg";

export const personalInfo = {
  name: "Amanraj S",
  roles: ["Information Technology Student", "Full Stack Developer", "Problem Solver"],
  email: "amanrajsathishkumar05@gmail.com",
  phone: "7904601145",
  about: "I am a passionate Full Stack Developer currently pursuing a B.Tech in IT at Sathyabama Institute of Science and Technology. My focus is on bridging the gap between elegant frontend interfaces and robust backend architectures. I specialize in building responsive applications that deliver exceptional user experiences with a modern engineering mindset.",
};

export const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/amanraj-s-8036812ba/" },
  { name: "GitHub", icon: Github, href: "https://github.com/Amanraj-S" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/amanrajs2312/" },
];

export const education = [
  {
    institution: "Sathyabama Institute of Science and Technology",
    location: "Chennai, Tamil Nadu",
    degree: "B.Tech Information Technology",
    duration: "2023-2027",
    score: "CGPA: 8.26",
  },
  {
    institution: "New Prince Shri Bhavani Senior Secondary School",
    location: "Chennai, Tamil Nadu",
    degree: "12th CBSE (Physics, Chemistry, Maths, Computer Science)",
    duration: "2022-2023",
    score: "Percentage: 70.2%",
  },
  {
    institution: "Britto's Academy Senior Secondary School",
    location: "Chennai, Tamil Nadu",
    degree: "10th CBSE",
    duration: "2020-2021",
    score: "Percentage: 79.8%",
  },
];

export const experience = [
  {
    company: "VeTestVims Software and Consultancy LLP",
    role: "Front End Developer",
    location: "Chennai, Tamil Nadu",
    duration: "December 2024 - February 2025",
    description: "Built a scalable React-based frontend for an Apartment Management System with features like resident dashboards, maintenance request tracking, and admin management, ensuring a clean UI and efficient state handling.",
  },
  {
    company: "CSoft Technologies",
    role: "UI/UX Designer",
    location: "Chennai, Tamil Nadu",
    duration: "December 2024 - January 2025",
    description: "Designed user-friendly website interfaces using Figma to enhance overall user experience. Integrated essential UI components into aesthetically pleasing layouts.",
  },
];

export const skills = [
  {
    category: "Programming Languages",
    icon: Code2,
    items: ["Python", "C", "Javascript", "Dart", "Html"],
  },
  {
    category: "Libraries / Frameworks",
    icon: Monitor,
    items: ["ReactJS", "NodeJs", "ExpressJs", "TailwindCSS", "NextJS", "Bootstrap", "Flutter", "Flask"],
  },
  {
    category: "Tools / Platforms",
    icon: Wrench,
    items: ["Git", "Figma", "Github", "Vercel", "Firebase", "AI Tools"],
  },
  {
    category: "Databases",
    icon: Database,
    items: ["MySQL", "MongoDB"],
  },
];

export const visualSkills = [
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

export const projects = [
  {
    title: "AcadSphere",
    description: "AcadSphere helps students record and track their semester-wise marks and GPA in one place. It provides performance insights through graphs and reports for easy academic analysis.",
    features: ["Semester-wise Tracking", "Performance Graphs", "Automated GPA Calculation"],
    tech: ["JavaScript", "React", "Tailwind CSS", "Express.js", "Node.js"],
    demo: "https://acadsphere.vercel.app/",
    code: "https://github.com/Amanraj-S/Acadsphere",
    img: acadsphere,
    featured: true,
  },
  {
    title: "AI Twitter Fake Account Detector",
    description: "Developed a Chrome extension for real-time detection of fake Twitter/X accounts using Google Gemini API, profile analysis, and rule-based verification techniques.",
    features: ["Real-time Analysis", "Gemini API Integration", "Profile Verification"],
    tech: ["React.js", "Express.js", "Chrome Manifest V3", "Flask API"],
    demo: null,
    code: "https://github.com/Amanraj-S/Fake-Account-Detection",
    img: twitterExtension,
    featured: true,
  },
  {
    title: "Weather-Based Route Optimization",
    description: "Built a real-time weather-based route optimization system using Dijkstra's Algorithm to recommend safer and faster travel routes.",
    features: ["Dijkstra's Algorithm", "Real-time Weather", "Dynamic Routing"],
    tech: ["React js", "Flask", "Google map API", "OpenWeatherAPI"],
    demo: null,
    code: "https://github.com/Amanraj-S/Weather-Route-Optimazation",
    img: weatherRoute,
    featured: true,
  },
  {
    title: "Tasklytic",
    description: "Task analytics & productivity insights with comprehensive task management.",
    features: ["Analytics Dashboard", "Task Tracking", "Productivity Metrics"],
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    demo: "https://task-manager-ten-gamma-53.vercel.app/login",
    code: "https://github.com/Amanraj-S/task-manager",
    img: task,
    featured: false,
  },
  {
    title: "Weather App",
    description: "Real-time weather tracking with beautiful UI.",
    features: ["Live Forecasts", "Location Search", "Interactive UI"],
    tech: ["React", "Tailwind CSS", "OpenWeather API"],
    demo: "https://weather-app-plum-zeta-10.vercel.app/",
    code: "https://github.com/Amanraj-S/Weather-App",
    img: WeatherAppImage,
    featured: false,
  },
  {
    title: "Todo-List App",
    description: "Task management with smooth animations.",
    features: ["State Management", "Local Storage", "Framer Motion"],
    tech: ["React", "Tailwind CSS"],
    demo: "https://todo-app-three-tau-13.vercel.app/",
    code: "https://github.com/Amanraj-S/todo-app",
    img: TodoImage,
    featured: false,
  },
  {
    title: "Snake Game",
    description: "Classic game with modern twist.",
    features: ["Canvas Rendering", "Game Loop", "Score Tracking"],
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://snake-game-delta-murex.vercel.app/",
    code: "https://github.com/Amanraj-S/Snake-game",
    img: snakeImage,
    featured: false,
  },
];

export const certifications = [
  {
    name: "NPTEL - Design Thinking and Innovation - IITs/IISc",
    link: "https://drive.google.com/file/d/1jk56tn576cSdxrOpNKjBspnWiypDPfV-/view?usp=drive_link"
  },
  {
    name: "NPTEL - Internet of Things - IITs/IISc",
    link: "https://drive.google.com/file/d/19Wbd8CzMZuwJiK-tcXZPgwzb5Lk4aX00/view?usp=drive_link"
  },
  {
    name: "NPTEL - Cloud Computing - IITs/IISc",
    link: "https://drive.google.com/file/d/1GuICYLTB5sQ2TxIlW6308AB0acYy4KRw/view?usp=drive_link"
  }
];
