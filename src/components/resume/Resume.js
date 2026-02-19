import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import styles from './Resume.module.css';

const RESUME_PATH = process.env.PUBLIC_URL + '/vani-agarwal-resume.pdf';

const Resume = () => {
  const ref = useScrollAnimation();

  return (
    <section id="resume" className={`section-container ${styles.resume} fade-in`} ref={ref}>
      <h2 className="section-heading">Resume</h2>
      <div className={styles.links}>
        <a href={RESUME_PATH} download="Vani_Agarwal_Resume.pdf" className={styles.link}>
          &#x2B62; Download PDF
        </a>
        <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer" className={styles.link}>
          &#x2B62; View PDF
        </a>
      </div>
    </section>
  );
};

export default Resume;
