import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { socialLinks } from '../../data/social';
import styles from './Contact.module.css';

const Contact = () => {
  const ref = useScrollAnimation();

  return (
    <section id="contact" className={`section-container ${styles.contact} fade-in`} ref={ref}>
      <h2 className={styles.headline}>Let's chat.</h2>
      <div className={styles.links}>
        {socialLinks.map(({ key, label, href }) => (
          <a
            key={key}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            className={styles.link}
          >
            &#x22F9; {label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
