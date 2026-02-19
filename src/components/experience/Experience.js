import React, { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import roles from '../../data/experience';
import styles from './Experience.module.css';

const Experience = () => {
  const ref = useScrollAnimation();
  const [expanded, setExpanded] = useState({});

  const toggle = (i) => {
    setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <section id="experience" className={`section-container ${styles.experience} fade-in`} ref={ref}>
      <h2 className="section-heading">Experience</h2>
      <div className={styles.list}>
        {roles.map((role, i) => {
          const isOpen = expanded[i];
          return (
            <div className={styles.role} key={i}>
              <button className={styles.header} onClick={() => toggle(i)}>
                <span className={styles.left}>
                  <span className={styles.arrow}>{isOpen ? '\u25BE' : '\u25B8'}</span>
                  {role.title} — {role.company}
                </span>
                <span className={styles.date}>{role.date}</span>
              </button>
              {isOpen && (
                <ul className={styles.bullets}>
                  {role.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
