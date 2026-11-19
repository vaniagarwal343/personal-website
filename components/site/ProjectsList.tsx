import * as React from 'react';

import styles from '@components/site/ProjectsList.module.scss';
import { Container, MonoNote, Section, SectionLabel } from '@components/site/SiteShell';
import { projects } from '@components/site/data';

export default function ProjectsList() {
  return (
    <Section id="projects">
      <Container>
        <SectionLabel>projects</SectionLabel>
        <ul className={styles.list}>
          {projects.map((project) => {
            const isExternal = !!project.external;
            return (
              <li key={project.slug} className={styles.row}>
                <a
                  href={project.href}
                  className={styles.rowLink}
                  {...(isExternal
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  <span className={styles.number}>{project.number}</span>
                  <span className={styles.dash}>—</span>
                  <span className={styles.name}>{project.name}</span>
                  <span className={styles.tagline}>{project.tagline}</span>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
        <MonoNote className={styles.morelink}>
          also see <a href="/more">/more</a> for older work — rex, education inequality dashboard,
          geospatial food access.
        </MonoNote>
      </Container>
    </Section>
  );
}
