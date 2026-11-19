import * as React from 'react';

import styles from '@components/site/WritingList.module.scss';
import { Container, Section, SectionLabel } from '@components/site/SiteShell';
import { writing } from '@components/site/data';

export default function WritingList() {
  return (
    <Section id="writing">
      <Container>
        <SectionLabel>writing</SectionLabel>
        <ul className={styles.list}>
          {writing.map((entry) => (
            <li key={entry.title} className={styles.row}>
              <a
                href={entry.href}
                className={styles.rowLink}
                aria-disabled={entry.todo ? 'true' : undefined}
              >
                <span className={styles.year}>{entry.year}</span>
                <span className={styles.dash}>·</span>
                <span className={styles.title}>{entry.title}</span>
                {entry.todo ? <span className={styles.tag}>coming soon</span> : null}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
