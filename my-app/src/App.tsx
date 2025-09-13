import { useState, useEffect } from 'react';
import Me from './components/me';
import Navbar from './components/nav';
import Tech from './components/tech';
import Contact from './components/contact';
import Project from './components/project';
import Education from './components/education';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <div className={`fixed -z-10 min-h-screen w-full ${darkMode 
        ? '[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]' 
        : 'bg-gradient-to-br from-blue-50 to-indigo-100'
      }`}></div>
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Me darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Tech darkMode={darkMode} />
        <Project darkMode={darkMode}/>
        <Contact darkMode={darkMode}/>
      </main>
    </>
  )
}

export default App;