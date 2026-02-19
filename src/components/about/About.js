import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import styles from './About.module.css';

const About = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className={`section-container ${styles.about} fade-in`} ref={ref}>
      <h2 className="section-heading">About</h2>
      <p className={styles.text}>
        Senior at the University of Washington studying mathematics and informatics. Building{' '}
        <a href="https://research.site" target="_blank" rel="noopener noreferrer" className={styles.link}>
          research.site
        </a>{' '}
        — a platform comparing deep research APIs from OpenAI, Perplexity, Gemini, and Parallel. Previously shipped production code at UPS Supply Chain Solutions and Societal. Teaching data structures &amp; algorithms to 1,400+ students across 9 quarters. Incoming Summer 2026 instructor for CSE 373. Currently working on capstone with Microsoft AI, scoping out monetization for Copilot. 
      </p>
    </section>
  );
};

export default About;
