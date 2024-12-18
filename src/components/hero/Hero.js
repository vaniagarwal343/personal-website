import React from 'react';
import profileImage from '../../assets/images/profile.jpg';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="hero" className={`${styles.heroContainer} container section`}>
      <div className={styles.heroContent}>
        <h1>Hi, I'm Vani :)</h1>
        <div className={styles.profileImage}>
          <img src={profileImage} alt="Your Name" />
        </div>
        <p>
          I’m a student at the University of Washington, where I’m working on a double degree
          in Mathematics and Informatics. I’m passionate about tackling real-world problems
          through data and tech. I’m currently a Teaching Assistant for Data Structures & Algorithms, and Intermediate Data Programming, at UW CSE,
          helping students get comfortable with complex algorithms and even boosting their performance.
        </p>
        <p>
          When I’m not teaching, I’m diving into research, exploring how crisis content on platforms like
          TikTok affects viewers. I love using data to tell stories, like with my recent projects
          on education inequality and geospatial analysis. My skills range from Python, Java, and SQL to tools
          like React and Tableau, so I enjoy taking on projects that blend creativity with analytics.
        </p>

        <div className={styles.buttonContainer}>
          <a
            href="#projects"
            onClick={() => {}}  // Removed setMenuOpen to avoid warnings
            className={`${styles['button-56']}`}
          >
            My Projects & Experience
          </a>

          <a
            href="https://drive.google.com/uc?export=download&id=1doSPbUdQdEWLze67BHMzQf2lIcmZ0XKv"
            className={`${styles['button-56']}`}
          >
            My Software Development/Data Analytics Resume!
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1yMqFBZWOyZCYk_gGs_ojT0J1IrjUbYnn"
            className={`${styles['button-56']}`}
          >
            My Digital Marketing Resume!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
