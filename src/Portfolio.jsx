// Portfolio.jsx
import React, { useState } from 'react';

import mediease from './assets/mediease.png';
import megaBlog from './assets/mega-blog.png';
import Eldery from './assets/elderly.png';
import ProfilePic from './assets/profile.jpg';
import { useEffect } from 'react';


const Portfolio = () => {
  // Sample data - replace with your own information
  const [personalInfo] = useState({
    name: "Varun Jethani",
    title: "Front-End Developer",
    bio: "I'm a passionate developer specializing in creating modern, responsive web applications using React and other cutting-edge technologies.",
    email: "varunjethani2444@gmail.com",
    github: "https://github.com/Varun-Jethani",
    linkedin: "https://linkedin.com/in/varun-jethani-477434247",
  });

  const [skills] = useState([
    { name: "React", proficiency: 80 },
    { name: "JavaScript", proficiency: 80 },
    { name: "HTML & CSS", proficiency: 75 },
    { name: "Node.js", proficiency: 75 },
    { name: "MongoDB", proficiency: 70 },
    { name: "Git", proficiency: 80 },
    { name: "Python", proficiency: 90 },
    { name: "Django", proficiency: 70 },
    
  ]);

  const [projects] = useState([
    {
      id: 1,
      title: "Medi-Ease",
      description: "A web application that helps users book appointments with doctors.",
      technologies: ["Django", "HTMLCSS","Python", "PostgreSQL","IBM Watson","Vonage"],
      image: mediease,
      link: "https://medi-ease.vercel.app/",
      github: "https://github.com/Varun-Jethani/MediEase",
    },
    {
      id: 2,
      title: "Mega Blog",
      description: "A web application that allows users to create and publish blog posts.",
      technologies: ["React", "Redux", "Appwrite", "Tailwind CSS", "Vercel", "React Router"],
      image: megaBlog,
      link: "https://m-blog-five.vercel.app/", 
      github: "https://github.com/Varun-Jethani/M-Blog",
    },
    {
      id: 3,
      title: "Elderly Health Management System",
      description: "IOT based System that tracks vitals and shows them live in a Dashboard",
      technologies: ["React", "IOT", "NodeJS", "MongoDB","Express","AWS","DynamoDB"],
      image: Eldery,
      link: "https://health-tracker-one-orcin.vercel.app/",
      github: "https://github.com/Varun-Jethani/HealthTracker-frontend",
    },
  ]);

  const [experience] = useState([
    {
      id: 1,
      role: "Coordinator",
      company: "Developer Club, Karnavati University",
      period: "October 2024 - Present",
      description: "Conceptualized plans to reach and engage students in school life and special programs."
    },
    {
      id: 2,
      role: " Data Science Intern",
      company: " UniConverge Technologies",
      period: "April 2024 - June 2024",
      description: "Created data visualization graphics, translating complex data sets into comprehensive visual representations"
    },
  ]);

  // SkillBar component
  const SkillBar = ({ skill, proficiency }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill}</span>
        <span>{proficiency}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div 
          className="h-full bg-blue-600 rounded-full" 
          style={{ width: `${proficiency}%` }}
        ></div>
      </div>
    </div>
  );

  // ProjectCard component
  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a href={project.link} className="text-blue-600 hover:underline">View Project</a>
          <a href={project.github} className="text-gray-600 hover:underline">GitHub</a>
        </div>
      </div>
    </div>
  );

  // ExperienceItem component
  const ExperienceItem = ({ item }) => (
    <div className="mb-8">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-bold">{item.role}</h3>
          <p className="text-gray-600">{item.company}</p>
        </div>
        <span className="text-sm bg-gray-100 max-w-1/3 sm:max-w-xl px-3 py-1 rounded-full">{item.period}</span>
      </div>
      <p className="text-gray-700">{item.description}</p>
    </div>
  );

  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [NavMenu, setNavMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= lastScrollY+0.75 ) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Navigation */}
        <nav className={`bg-white shadow-sm w-full z-10 top-0 fixed transition-transform duration-300 ${isNavVisible || lastScrollY === 0 ? 'translate-y-0 ' : '-translate-y-full'}`}>
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-blue-600">{personalInfo.name}</a>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#skills" className="hover:text-blue-600">Skills</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#experience" className="hover:text-blue-600">Experience</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
          <button className="md:hidden" onClick={() => setNavMenu(!NavMenu)}>
            {!NavMenu ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
          {NavMenu && (
            <div className="absolute top-16 w-full right-0 bg-white shadow-lg rounded-lg p-4 md:hidden">
              <a href="#about" onClick={() => setNavMenu(!NavMenu)} className="block px-4 py-2 hover:text-blue-600">About</a>
              <a href="#skills" onClick={() => setNavMenu(!NavMenu)} className="block px-4 py-2 hover:text-blue-600">Skills</a>
              <a href="#projects" onClick={() => setNavMenu(!NavMenu)} className="block px-4 py-2 hover:text-blue-600">Projects</a>
              <a href="#experience" onClick={() => setNavMenu(!NavMenu)} className="block px-4 py-2 hover:text-blue-600">Experience</a>
              <a href="#contact" onClick={() => setNavMenu(!NavMenu)} className="block px-4 py-2 hover:text-blue-600">Contact</a>
            </div>
          )}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
      <header className="bg-blue-600 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm {personalInfo.name}</h1>
          <p className="text-xl md:text-2xl mb-8">{personalInfo.title}</p>
          <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
            Get in Touch
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img src={ProfilePic} alt="Profile" className="w-48 h-48 rounded-full object-cover" />
            <div>
              <p className="text-lg text-gray-700 mb-4">{personalInfo.bio}</p>
              <div className="flex gap-4">
                <a href={personalInfo.github} className="text-blue-600 hover:underline">GitHub</a>
                <a href={personalInfo.linkedin} className="text-blue-600 hover:underline">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <SkillBar key={index} skill={skill.name} proficiency={skill.proficiency} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
          <div className="divide-y divide-gray-200">
            {experience.map(item => (
              <ExperienceItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <input type="text" id="subject" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea id="message" rows="4" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
            <div className="mt-8 pt-8 border-t">
              <p className="text-lg text-center">
                Or email me directly at: <a href={`mailto:${personalInfo.email}`} className="text-blue-600">{personalInfo.email}</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href={personalInfo.github} className="hover:text-blue-400">GitHub</a>
            <a href={personalInfo.linkedin} className="hover:text-blue-400">LinkedIn</a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-400">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;