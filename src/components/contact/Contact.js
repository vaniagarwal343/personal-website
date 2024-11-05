import React from 'react';
import styles from './Contact.module.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Import icons

const Contact = () => (
  <section id="contact" className={styles.contact}>
    <h2>if you like my projects or maybe just have the same Pinterest board, reach out!</h2>
    <p>let's set up a time to chat! email me at vagar343@uw.edu, or reach out at: </p>

    {/* Social Media Links */}
    <div className={styles.socialLinks}>
      <a href="https://www.linkedin.com/in/vaniagarwal-/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin className={styles.icon} />
      </a>
      <a href="https://github.com/vaniagarwal343" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub className={styles.icon} />
      </a>
      <a href="https://www.instagram.com/vaniagrwall/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram className={styles.icon} />
      </a>
    </div>
  </section>
);

export default Contact;
