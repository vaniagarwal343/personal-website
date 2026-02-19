import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { socialLinks } from '../../data/social';
import styles from './Hero.module.css';

const iconMap = {
  email: <FiMail size={16} />,
  github: <FiGithub size={16} />,
  linkedin: <FiLinkedin size={16} />,
  x: <FaXTwitter size={16} />,
};

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <img
          src={process.env.PUBLIC_URL + '/vani.png'}
          alt="Vani Agarwal"
          className={styles.photo}
        />
        <h1 className={styles.name}>Vani Agarwal</h1>
        <p className={styles.tagline}>
          software engineer building{' '}
          <a
            href="https://research.site"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            research.site
          </a>
          . previously microsoft AI, UPS, and societal. teaching data structures &amp; algorithms at UW.
        </p>
        <div className={styles.socials}>
          {socialLinks.map(({ key, label, href }) => (
            <a
              key={key}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              aria-label={label}
            >
              {iconMap[key]}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
