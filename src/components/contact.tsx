import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaPaperPlane, FaGithub, FaTwitter } from 'react-icons/fa';
import { SiDevdotto } from 'react-icons/si';

interface ContactProps {
  darkMode: boolean;
}

const Contact = ({ darkMode }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would typically send this data to your backend or email service
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className={`rounded-2xl shadow-xl p-8 border ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700' 
                : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 flex items-center ${
                darkMode ? 'text-indigo-400' : 'text-indigo-600'
              }`}>
                <FaEnvelope className="mr-2" />
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className={`flex items-center p-4 rounded-xl transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-gray-700/50 hover:bg-gray-700' 
                    : 'bg-indigo-50/50 hover:bg-indigo-100'
                }`}>
                  <div className={`p-3 rounded-xl shadow-sm mr-4 ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  }`}>
                    <FaEnvelope className={`text-xl ${
                      darkMode ? 'text-indigo-400' : 'text-indigo-600'
                    }`} />
                  </div>
                  <div>
                    <p className={`font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Email</p>
                    <a href="mailto:ammamedali@gmail.com" className={`transition-colors ${
                      darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-500'
                    }`}>
                      ammamedali@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className={`flex items-center p-4 rounded-xl transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-gray-700/50 hover:bg-gray-700' 
                    : 'bg-indigo-50/50 hover:bg-indigo-100'
                }`}>
                  <div className={`p-3 rounded-xl shadow-sm mr-4 ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  }`}>
                    <FaPhone className={`text-xl ${
                      darkMode ? 'text-indigo-400' : 'text-indigo-600'
                    }`} />
                  </div>
                  <div>
                    <p className={`font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Phone</p>
                    <a href="tel:+21625486042" className={`transition-colors ${
                      darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-500'
                    }`}>
                      +216 25486042
                    </a>
                  </div>
                </div>
                
                <div className={`flex items-center p-4 rounded-xl transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-gray-700/50 hover:bg-gray-700' 
                    : 'bg-indigo-50/50 hover:bg-indigo-100'
                }`}>
                  <div className={`p-3 rounded-xl shadow-sm mr-4 ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  }`}>
                    <FaMapMarkerAlt className={`text-xl ${
                      darkMode ? 'text-indigo-400' : 'text-indigo-600'
                    }`} />
                  </div>
                  <div>
                    <p className={`font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>Location</p>
                    <p className={darkMode ? 'text-indigo-400' : 'text-indigo-600'}>
                      Nabel / Takelsa, Tunisia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={`rounded-2xl shadow-xl p-8 border ${
              darkMode 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700' 
                : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                darkMode ? 'text-indigo-400' : 'text-indigo-600'
              }`}>
                Follow Me
              </h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/mohamed-ali-l-adhibi-2b27412a5/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-12 h-12 rounded-lg transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 text-blue-400 hover:bg-blue-400 hover:text-white' 
                      : 'bg-gray-100 text-blue-600 hover:bg-blue-600 hover:text-white'
                  }`}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a 
                  href="https://github.com/MohamedaAliLadhibi" 
                  className={`flex items-center justify-center w-12 h-12 rounded-lg transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-300 hover:text-gray-800' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-600 hover:text-white'
                  }`}
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a 
                  href="https://x.com/7amma62214699" 
                  className={`flex items-center justify-center w-12 h-12 rounded-lg transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 text-blue-400 hover:bg-blue-400 hover:text-white' 
                      : 'bg-gray-100 text-blue-400 hover:bg-blue-400 hover:text-white'
                  }`}
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-xl" />
                </a>
                <a 
                  href="https://dev.to/ladhibimohamedali" 
                  className={`flex items-center justify-center w-12 h-12 rounded-lg transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 text-white hover:bg-white hover:text-black' 
                      : 'bg-gray-100 text-black hover:bg-black hover:text-white'
                  }`}
                  aria-label="Dev.to"
                >
                  <SiDevdotto className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`rounded-2xl shadow-xl p-8 border ${
            darkMode 
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700' 
              : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 flex items-center ${
              darkMode ? 'text-indigo-400' : 'text-indigo-600'
            }`}>
              <FaPaperPlane className="mr-2" />
              Send Me a Message
            </h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-gray-300' 
                      : 'bg-white border-gray-300 text-gray-700'
                  }`}
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-gray-300' 
                      : 'bg-white border-gray-300 text-gray-700'
                  }`}
                  placeholder="Your email address"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-gray-300' 
                      : 'bg-white border-gray-300 text-gray-700'
                  }`}
                  placeholder="How can I help you?"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-4 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
              >
                <FaPaperPlane className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Direct email CTA */}
        <div className="text-center mt-16">
          <p className={`mb-6 text-lg ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Prefer to email directly?
          </p>
          <a 
            href="mailto:ammamedali@gmail.com" 
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <FaEnvelope className="mr-3" />
            Send an Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;