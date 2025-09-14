import { motion } from 'framer-motion';
import med2 from '../img/med2.jpg';

interface MeProps {
  darkMode: boolean;
}

const Me = ({ darkMode }: MeProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16">
        {/* Image Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <div className="relative">
            <img 
              src={med2} 
              alt="Mohamed Ali L'Adhibi" 
              className="w-80 h-80 object-cover rounded-full shadow-2xl border-4 transition-all duration-500 hover:scale-105 hover:shadow-purple-500/30" 
              style={{ borderColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }}
            />
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold py-1 px-3 rounded-full shadow-md">
              Available
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center lg:text-left max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Mohamed Ali L'Adhibi
            </span>
          </h1>
          <h2 className={`text-2xl md:text-3xl font-semibold mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Full Stack Developer
          </h2>
          <p className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I'm a passionate Full Stack Developer skilled in React, Next.js, Node.js, and modern web technologies. 
            I specialize in building responsive, scalable applications with clean code and intuitive user experiences. 
            Let's collaborate to bring your digital ideas to life!
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              View My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className={`px-6 py-3 border rounded-lg transition-all duration-300 ${
                darkMode 
                  ? 'border-indigo-500 text-indigo-300 hover:bg-indigo-500 hover:text-white' 
                  : 'border-indigo-400 text-indigo-600 hover:bg-indigo-400 hover:text-white'
              }`}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            darkMode ? 'border-indigo-500' : 'border-indigo-400'
          }`}>
            <div className={`w-1 h-3 rounded-full mt-2 ${
              darkMode ? 'bg-indigo-500' : 'bg-indigo-400'
            }`}></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Me;