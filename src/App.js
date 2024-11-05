import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Activity from './components/activity/Activity';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import './styles/global.css';

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
        <Activity />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
}


export default App;
