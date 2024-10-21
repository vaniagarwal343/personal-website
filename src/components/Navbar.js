import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <header className="navbar">
      <nav>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#activity">Activity</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      {/* Toggle switch */}
      <button onClick={toggleDarkMode} className="toggle-switch">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
};

export default Navbar;
