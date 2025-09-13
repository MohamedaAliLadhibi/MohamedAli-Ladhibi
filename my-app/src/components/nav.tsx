import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const Navbar = ({ darkMode, setDarkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome className="mr-2" /> },
    { id: 'Education', label: 'Certificate', icon: <FaUser className="mr-2" /> },
    { id: 'tech', label: 'Skills', icon: <FaCode className="mr-2" /> },
    { id: 'projects', label: 'Projects', icon: <FaCode className="mr-2" /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope className="mr-2" /> },
  ];

  const socialItems = [
    { id: 'github', icon: <BsGithub />, color: 'hover:text-purple-300', href: 'https://github.com/MohamedaAliLadhibi' },
    { id: 'linkedin', icon: <BsLinkedin />, color: 'hover:text-purple-300', href: 'https://www.linkedin.com/in/mohamed-ali-l-adhibi-2b27412a5/' },
    { id: 'twitter', icon: <BsTwitter />, color: 'hover:text-purple-300', href: 'https://x.com/7amma62214699' },
    { id: 'instagram', icon: <BsInstagram/>, color: 'hover:text-purple-300', href: 'https://www.instagram.com/mohamed_ali_ladhibi/' },
  ];

  return (
    <>
      <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled 
        ? `py-2 ${darkMode ? 'bg-black/80' : 'bg-white/90'} backdrop-blur-sm` 
        : 'py-4 bg-transparent'
      }`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home" 
            className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent transition-all duration-300 hover:from-indigo-300 hover:to-purple-300"
          >
            Mohamed Ali
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center ${
                  darkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Social Icons - Desktop */}
            <div className="hidden md:flex items-center space-x-3">
              {socialItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition-colors duration-300 ${item.color} ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                  aria-label={item.id}
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors duration-300 ${
                darkMode 
                  ? 'bg-white/10 text-gray-300 hover:bg-white/20' 
                  : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                darkMode 
                  ? 'bg-white/10 text-gray-300 hover:bg-white/20' 
                  : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-16 inset-x-0 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        } ${darkMode ? 'bg-gradient-to-b from-black to-gray-900' : 'bg-white'}`}>
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center ${
                    darkMode 
                      ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
              
              <div className={`pt-4 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                <div className="flex justify-center space-x-6">
                  {socialItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full transition-colors duration-300 ${item.color} ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                      aria-label={item.id}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay when mobile menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;