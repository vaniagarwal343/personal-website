import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Activity from './components/Activity';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';
import toggleDarkMode from './darkMode';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    toggleDarkMode();
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Navbar toggleDarkMode={handleToggleDarkMode} darkMode={darkMode} />
      <Hero />
      <About />
      <Activity />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
