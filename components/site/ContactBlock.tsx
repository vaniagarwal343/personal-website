import * as React from 'react';

import styles from '@components/site/ContactBlock.module.scss';
import { Container, Section, SectionLabel } from '@components/site/SiteShell';
import { contact } from '@components/site/data';

export default function ContactBlock() {
  return (
    <Section id="contact">
      <Container>
        <SectionLabel>contact</SectionLabel>
        <ul className={styles.list}>
          {contact.map((item, idx) => (
            <li key={item.label} className={styles.item}>
              <a
                href={item.href}
                className={styles.link}
                {...(item.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {item.label}
              </a>
              {idx < contact.length - 1 ? (
                <span className={styles.sep} aria-hidden="true">
                  ·
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
