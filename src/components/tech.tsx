import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress, 
  SiTailwindcss, 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiCss3, 
  SiMongodb, 
  SiPostgresql,
  SiJsonwebtokens,
  SiMaterialdesign,
  SiFigma,
  SiBootstrap
} from 'react-icons/si';
import { FaMobile, FaGitAlt } from 'react-icons/fa';

interface TechProps {
  darkMode: boolean;
}

const Tech = ({ darkMode }: TechProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const technologies = [
    { name: 'ReactJS', icon: <SiReact className="w-full h-full" />, color: 'text-blue-400' },
    { name: 'Next.js', icon: <SiNextdotjs className="w-full h-full" />, color: darkMode ? 'text-white' : 'text-black' },
    { name: 'React Native', icon: <FaMobile className="w-full h-full" />, color: 'text-blue-400' },
    { name: 'Node.js', icon: <SiNodedotjs className="w-full h-full" />, color: 'text-green-400' },
    { name: 'Express', icon: <SiExpress className="w-full h-full" />, color: darkMode ? 'text-gray-300' : 'text-gray-600' },
    { name: 'Material-UI', icon: <SiMaterialdesign className="w-full h-full" />, color: 'text-blue-400' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-full h-full" />, color: 'text-cyan-400' },
    { name: 'Bootstrap', icon: <SiBootstrap className="w-full h-full" />, color: 'text-purple-400' },
    { name: 'JavaScript', icon: <SiJavascript className="w-full h-full" />, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: <SiTypescript className="w-full h-full" />, color: 'text-blue-400' },
    { name: 'HTML5', icon: <SiHtml5 className="w-full h-full" />, color: 'text-orange-400' },
    { name: 'CSS3', icon: <SiCss3 className="w-full h-full" />, color: 'text-blue-400' },
    { name: 'MongoDB', icon: <SiMongodb className="w-full h-full" />, color: 'text-green-400' },
    { name: 'SQL', icon: <SiPostgresql className="w-full h-full" />, color: 'text-blue-400' },
    { name: 'REST APIs', icon: <div className="w-full h-full flex items-center justify-center font-bold text-xs">REST</div>, color: 'text-purple-400' },
    { name: 'Git', icon: <FaGitAlt className="w-full h-full" />, color: 'text-orange-400' },
    { name: 'JWT', icon: <SiJsonwebtokens className="w-full h-full" />, color: 'text-pink-400' },
    { name: 'Figma', icon: <SiFigma className="w-full h-full" />, color: 'text-orange-400' },
  ];

  return (
    <section id="tech" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Tech Stack
          </span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={`text-xl text-center max-w-2xl mx-auto mb-16 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Technologies and tools I use to bring ideas to life
        </motion.p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`flex flex-col items-center p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer border ${
                darkMode 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:shadow-purple-500/20' 
                  : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:shadow-purple-200/50'
              }`}
            >
              <div className={`w-16 h-16 ${tech.color} mb-3 transition-colors duration-300 group-hover:scale-110 flex items-center justify-center`}>
                {tech.icon}
              </div>
              <span className={`text-sm font-medium text-center ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className={`text-lg mb-6 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Always learning and expanding my skill set
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tech;