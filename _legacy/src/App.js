import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import useDarkMode from './hooks/useDarkMode';
import './styles/global.css';

function App() {
  const { isDark, toggleDark } = useDarkMode();

  return (
    <>
      <Navbar isDark={isDark} toggleDark={toggleDark} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
