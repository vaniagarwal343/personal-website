import React, { useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ isDark, toggleDark }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <nav className={styles.nav}>
        <a href="#hero" className={styles.logo}>VA</a>

        <div className={styles.right}>
          <ul className={styles.navLinks}>
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleDark}
            className={styles.themeToggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <FiSun size={14} /> : <FiMoon size={14} />}
          </button>

          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className={styles.dropdown}>
          <ul className={styles.dropdownLinks}>
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} onClick={() => setMenuOpen(false)}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
