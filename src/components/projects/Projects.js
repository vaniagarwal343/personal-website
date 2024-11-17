import React from 'react';
import styles from './Projects.module.css';
import uwcseLogo from '../../assets/images/uwcselogo.png'; // Corrected path
import uwhcdeLogo from '../../assets/images/uwhcdelogo.png'; // Corrected path
import observableLogo from '../../assets/images/observablelogo.png'; // Corrected path
import auliLogo from '../../assets/images/aulilogo.png';

const projects = [
  {
    id: 1,
    title: 'Undergraduate Teaching Assistant',
    description: "I'm currently serving as an undergraduate TA for CSE 373, Data Structures & Algorithms, & CSE 163, Intermediate Data Programming at UW Seattle. I really enjoy it, my favorite part is handing candy out when students engage!!",
    details: [
      "Facilitated sessions for 150+ students, simplifying technical problems and boosting class performance by 20%.",
      "Developed and integrated JUnit test suites to assess algorithm efficiency and correctness for student projects.",
      "Leveraged GitLab CI/CD for automated testing, identifying performance bottlenecks, offering optimization advice."
    ],
    imageUrl: uwcseLogo,
    link: 'https://courses.cs.washington.edu/courses/cse373/24au/staff/' // Add the URL here
  },
  {
    id: 2,
    title: 'Undergraduate Research Assistant',
    description: 'I was an undergrad RA for UW HCDE, where I worked on a research paper examining citizen sense-making and crisis imagery on TikTok. Watching 300+ Tiktok videos was not nearly as fun as it sounds. ',
    details: [
      "Qualitatively coded and analyzed 300+ TikTok videos related to crisis imagery, performing exploratory data analysis.",
      "Conducted trend analysis by applying time-series decomposition techniques to explore patterns in audience engagement over key crisis events.",
      "Paper has been submitted to CSCW"
    ],
    imageUrl: uwhcdeLogo,
    link: '' // Add the URL here
  },
  {
    id: 3,
    title: 'Education Inequality in the US',
    description: 'Javascript, R, Vega-Lite | Used d3.js, p5.js, cloropleth maps on observable to investigate Education Inequality in the US',
    details: [
      "Developed a data visualization project to analyze and highlight education inequities in the United States.",
      "Engineered an interactive notebook on ObservableHQ using JavaScript and Vega-Lite."
    ],
    imageUrl: observableLogo,
    link: 'https://observablehq.com/d/7ac3ad5452b9fb5e' // Add the URL here
  },

  {
    id: 3,
    title: 'Digital Marketing Intern @ Auli Skincare',
    description: 'I really love digital marketing and social media, so I gave it a shot as a digital market intern at Auli Skincare. Safe to say I definitely have a solid skincare routine now, thanks to Auli!',
    details: [
      "Skillfully designed and executed a comprehensive social media content calendar, ensuring consistent and on-brand messaging across platforms",
      "Spearheaded 6+ strategic marketing campaigns that collectively achieved a 25% increase in both follower counts and engagement metrics.", 
      "Monitored key performance indicators for digital marketing campaigns and social media activities."
    ],
    imageUrl: auliLogo,
    link: 'https://instagram.com/auliglow/' // Add the URL here
  },

  {
    id: 4,
    title: 'Geospatial Data Analysis and Visualization Project',
    description: 'Python, GeoPandas, Matplotlib, Pandas, Folium | Worked on a geospatial data analysis project, analyzing food access in WA',
    details: [
      "Developed a comprehensive data analysis pipeline using Python to analyze food access in Washington State.",
      "Merged geospatial and tabular data to create an integrated dataset using GeoPandas, enabling spatial analysis.", 
      "Generated detailed geospatial visualizations including choropleth maps and interactive maps leveraging data from the 2010 U.S. Census and the USDA’s Economic Research Service."
    ],
    imageUrl: uwcseLogo,
    link: '' // Add the URL here
  },

  {
    id: 5,
    title: 'Vaccine Scheduling System',
    description: 'Python, GeoPandas, Matplotlib, Pandas, Folium | I worked on a Vaccine Scheduling System for CSE 414, a database management class',
    details: [
      "Architected and built a Java and SQL based vaccine scheduling tool to allow patients and caregivers to track vaccine stock and appointments.",
      "Integrated a patient appointment booking feature that processed over 500 reservations, ensuring the allocation of available vaccine doses and caregiver schedules in real-time using SQL triggers and Java’s JDBC for database communication."
    ],
    imageUrl: uwcseLogo,
    link: '' // Add the URL here
  }
  
];

const Projects = () => (
  <section id="projects" className={styles.projects}>
    <h2>projects & experience</h2>
    <div className={styles.projectList}>
      {projects.map((project) => (
        <div key={project.id} className={styles.projectCard}>
          <div className={styles.cardInner}>
            {/* Front of the Card */}
            <div className={styles.cardFront}>
              <img
                src={project.imageUrl}
                alt={`${project.title} icon`}
                className={styles.projectImage}
              />
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
            {/* Back of the Card */}
            <div className={styles.cardBack}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              {Array.isArray(project.details) ? (
                <ul className={styles.projectDetailsList}>
                  {project.details.map((detail, index) => (
                    <li key={index} className={styles.projectDetailItem}>
                      {detail}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={styles.projectDetails}>{project.details}</p>
              )}
              {/* Link to Project */}
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  View Project
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;