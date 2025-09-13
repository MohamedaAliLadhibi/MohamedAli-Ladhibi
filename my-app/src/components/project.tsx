import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiCss3,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiGit,
  SiGithub,
  SiFirebase,
  SiExpo,
  SiMui
} from 'react-icons/si';
import { FaMobile, FaExternalLinkAlt, FaReact, FaEnvelope } from 'react-icons/fa';

interface ProjectsProps {
  darkMode: boolean;
}

// Technology mapping to icons
const techIcons: { [key: string]: React.ReactElement } = {
  React: <SiReact className="text-blue-400" />,
  'Next.js': <SiNextdotjs className="text-white" />,
  'React Native': <FaMobile className="text-blue-400" />,
  'Node.js': <SiNodedotjs className="text-green-400" />,
  Express: <SiExpress className="text-gray-300" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-400" />,
  HTML: <SiHtml5 className="text-orange-400" />,
  CSS: <SiCss3 className="text-blue-400" />,
  MongoDB: <SiMongodb className="text-green-400" />,
  PostgreSQL: <SiPostgresql className="text-blue-400" />,
  Tailwind: <SiTailwindcss className="text-cyan-400" />,
  Bootstrap: <SiBootstrap className="text-purple-400" />,
  Git: <SiGit className="text-orange-400" />,
  Firebase: <SiFirebase className="text-yellow-400" />,
  Expo: <SiExpo className="text-gray-300" />,
  MaterialUI: <SiMui className="text-blue-400" />,
  Default: <SiGithub className="text-gray-300" />
};

const ScrollReveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

interface Project {
  id: number;
  title: string;
  description: string;
  githubUrl: string;
  demoUrl: string | null;
  technologies: string[];
  status: string;
icon: React.ReactElement;}

interface ProjectItemProps {
  project: Project;
  index: number;
  darkMode: boolean;
}

const ProjectItem = ({ project, index, darkMode }: ProjectItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-xl p-6 mb-6 shadow-md hover:shadow-lg transition-all duration-300 border ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-purple-500/20' 
          : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:shadow-purple-200/50'
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-start">
        {/* Project Icon */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
          <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center shadow-md">
            {project.icon || <SiGithub className="text-white text-xl" />}
          </div>
        </div>
        
        {/* Project Content */}
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
            <h3 className={`text-xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              {project.title}
            </h3>
            
            <div className="flex mt-2 md:mt-0 space-x-2">
              {project.demoUrl && (
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`px-3 py-1 rounded-md transition-colors text-sm flex items-center ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-indigo-700' 
                      : 'bg-gray-100 hover:bg-indigo-100'
                  }`}
                  aria-label="Live Demo"
                >
                  <FaExternalLinkAlt className={`mr-1 ${
                    darkMode ? 'text-indigo-300' : 'text-indigo-600'
                  }`} />
                  <span className={darkMode ? 'text-gray-200' : 'text-gray-700'}>Demo</span>
                </a>
              )}
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`px-3 py-1 rounded-md transition-colors text-sm flex items-center ${
                  darkMode 
                    ? 'bg-gray-700 hover:bg-gray-600' 
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                aria-label="View on GitHub"
              >
                <SiGithub className={`mr-1 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`} />
                <span className={darkMode ? 'text-gray-200' : 'text-gray-700'}>Code</span>
              </a>
            </div>
          </div>
          
          <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <span 
                key={techIndex} 
                className={`px-3 py-1 rounded-full text-xs flex items-center shadow-sm ${
                  darkMode 
                    ? 'bg-indigo-900/30 text-indigo-300' 
                    : 'bg-indigo-100 text-indigo-700'
                }`}
              >
                {techIcons[tech] || techIcons.Default}
                <span className="ml-1">{tech}</span>
              </span>
            ))}
          </div>
          
          {project.status && (
            <div className="mt-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                project.status === 'Completed' 
                  ? darkMode 
                    ? 'bg-green-900/30 text-green-300'
                    : 'bg-green-100 text-green-800'
                  : project.status === 'In Progress'
                  ? darkMode 
                    ? 'bg-blue-900/30 text-blue-300'
                    : 'bg-blue-100 text-blue-800'
                  : darkMode 
                    ? 'bg-purple-900/30 text-purple-300'
                    : 'bg-purple-100 text-purple-800'
              }`}>
                {project.status}
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = ({ darkMode }: ProjectsProps) => {
  // Your actual projects data
  const projectsData: Project[] = [
    {
      id: 1,
      title: "VBC-FTV - TV Programming Website",
      description: "A comprehensive TV programming website with scheduling, content management, and user interaction features. Built with React, Node.js, Express, and MongoDB.",
      githubUrl: "https://github.com/Maydena/VBC-FTV",
      demoUrl: null,
      technologies: ["React", "Node.js", "Express", "MongoDB", "CSS"],
      status: "Completed",
      icon: <FaReact className="text-white text-xl" />
    },
    {
      id: 2,
      title: "volunTirr - Travel & Job Finding App",
      description: "A mobile application that helps travelers find small jobs across the world while exploring new destinations. Developed with React Native and Firebase.",
      githubUrl: "https://github.com/FinalProjectC6/volunTirr",
      demoUrl: null,
      technologies: ["React Native", "Firebase", "JavaScript", "Expo"],
      status: "In Progress",
      icon: <FaMobile className="text-white text-xl" />
    },
    {
      id: 3,
      title: "Ecowebsite - E-commerce Platform",
      description: "A full-featured e-commerce website with product listings, shopping cart, user authentication, and payment processing. Implemented with React and Node.js.",
      githubUrl: "https://github.com/Ecommerce-WebSite-2k24/Ecowebsite",
      demoUrl: null,
      technologies: ["React", "JavaScript", "CSS", "Node.js", "Express"],
      status: "Completed",
      icon: <SiReact className="text-white text-xl" />
    },
    {
      id: 4,
      title: "Daily Dose of Code",
      description: "A collection of daily coding exercises and challenges to keep skills sharp and explore new technologies. Includes solutions in JavaScript and TypeScript.",
      githubUrl: "https://github.com/MohamedaAliLadhibi/daily-dose-of-code",
      demoUrl: null,
      technologies: ["JavaScript", "TypeScript", "HTML", "CSS"],
      status: "Ongoing",
      icon: <SiTypescript className="text-white text-xl" />
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Email CTA Section */}
        <ScrollReveal>
          <div className={`text-center rounded-xl p-8 mb-16 shadow-md border ${
            darkMode 
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700' 
              : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
          }`}>
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
              darkMode 
                ? 'bg-indigo-900/30 text-indigo-400' 
                : 'bg-indigo-100 text-indigo-600'
            }`}>
              <FaEnvelope className="text-xl" />
            </div>
            <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Have a website idea?
            </h2>
            <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Let's bring your vision to life. I'm available for freelance projects and collaborations.
            </p>
            <a 
              href="mailto:ammamedali@gmail.com" 
              className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <FaEnvelope className="mr-2" />
              Email Me
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className={`text-lg text-center mb-12 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Here are some of my recent projects. Each one represents challenges overcome and skills learned.
          </p>
        </ScrollReveal>

        {/* Projects List */}
        <div className="space-y-6">
          {projectsData.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} darkMode={darkMode} />
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-16">
            <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Want to see more of my work?
            </p>
            <a 
              href="https://github.com/MohamedaAliLadhibi" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center px-5 py-2.5 rounded-lg text-white transition-colors duration-300 shadow-md hover:shadow-lg ${
                darkMode 
                  ? 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900' 
                  : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800'
              }`}
            >
              <SiGithub className="mr-2" />
              View My GitHub
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;