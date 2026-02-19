import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import projects from '../../data/projects';
import styles from './Projects.module.css';

const Projects = () => {
  const ref = useScrollAnimation();

  return (
    <section id="projects" className={`section-container ${styles.projects} fade-in`} ref={ref}>
      <h2 className="section-heading">Projects</h2>
      <div className={styles.list}>
        {projects.map((project, i) => (
          <div className={styles.row} key={i}>
            <span className={styles.marker}>&#x22F9;</span>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.title}
              >
                {project.title}
              </a>
            ) : (
              <span className={styles.titlePlain}>{project.title}</span>
            )}
            <span className={styles.sep}> — </span>
            <span className={styles.desc}>{project.description}</span>
            <span className={styles.sep}> — </span>
            <span className={styles.stack}>{project.stack}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
