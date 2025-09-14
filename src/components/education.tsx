import { motion } from 'framer-motion';
import certified from '../img/certified.png';

interface EducationProps {
  darkMode: boolean;
}

const Education = ({ darkMode }: EducationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className={`rounded-2xl p-8 shadow-xl mb-12 relative overflow-hidden ${
        darkMode 
          ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
          : 'bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100'
      }`}
    >
      {/* Header with centered title */}
      <div className="flex flex-col items-center mb-8">
        <h3 className={`text-3xl font-bold text-center mb-2 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>
          Certifications & Internship
        </h3>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-6"></div>
      </div>
      
      {/* Main content with large certification image */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Certification image - large and clear */}
        <div className="flex-shrink-0">
          <motion.div 
            className="bg-gradient-to-br from-indigo-500 to-purple-500 p-6 rounded-2xl shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 700 }}
          >
            <img 
              src={certified} 
              alt="Full Stack JavaScript Developer Certification" 
              className="w-72 h-72 object-contain" 
            />
          </motion.div>
        </div>
        
        {/* Certification details */}
        <div className="flex-grow">
          {/* SBIK and certification title */}
          <div className="mb-6 text-center lg:text-left">
            <div className={`text-2xl font-bold mb-2 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              CERTIFIED
            </div>
            <div className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Full Stack JavaScript Developer
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-8">
            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Certified Full Stack JavaScript Developer with expertise in modern web development 
              technologies including React, Node.js, Express, and MongoDB. Comprehensive training 
              in both frontend and backend development with a focus on building scalable, 
              responsive web applications.
            </p>
          </div>
          
          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full mr-3 shadow-sm"></div>
              <span className={`font-medium ${
                darkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                React & Node.js Specialist
              </span>
            </div>
            
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full mr-3 shadow-sm"></div>
              <span className={`font-medium ${
                darkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                RESTful API Development
              </span>
            </div>
            
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-3 shadow-sm"></div>
              <span className={`font-medium ${
                darkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Frontend Development Internship
              </span>
            </div>
            
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-3 shadow-sm"></div>
              <span className={`font-medium ${
                darkMode ? 'text-gray-200' : 'text-gray-700'
              }`}>
                Backend Integration Experience
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle glow effects - only visible in dark mode */}
      {darkMode && (
        <>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-indigo-500/10 rounded-full blur-xl"></div>
        </>
      )}
    </motion.div>
  );
};

export default Education;