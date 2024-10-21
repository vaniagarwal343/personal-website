import React from 'react';
import profileImage from '../assets/profile.jpg';
import '../styles/Hero.css';

const Hero = () => (
  <section id="hero" className="hero-container">
    <div className="hero-content">
      <h1>Hi, I'm <span>Your Name</span></h1>
      <p>A passionate software developer, blending tech with creativity.</p>
      <div className="hero-buttons">
        <a href="#projects" className="cta">View Projects</a>
        <a href="/assets/Vani_Agarwal_Resume_UW.pdf" className="cta" download>Download Resume</a>
      </div>
    </div>
    <div className="profile-image">
      <img src={profileImage} alt="Your Name" />
    </div>
  </section>
);

export default Hero;
