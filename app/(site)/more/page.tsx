import * as React from 'react';

import SiteFooter from '@components/site/SiteFooter';
import SiteNav from '@components/site/SiteNav';
import { Container, Section, SectionLabel } from '@components/site/SiteShell';
import styles from '@components/site/ProjectsList.module.scss';

export const metadata = {
  title: 'more — vani agarwal',
  description: 'older work — rex, education inequality dashboard, geospatial food access.',
};

const olderWork = [
  {
    name: 'rex',
    tagline: 'experiment notebook for personal LLM workflows',
    href: '#',
  },
  {
    name: 'education inequality dashboard',
    tagline: 'school-district level disparity visualization for washington state',
    href: '#',
  },
  {
    name: 'geospatial food access',
    tagline: 'mapping grocery accessibility across king county census tracts',
    href: '#',
  },
];

export default function MorePage() {
  return (
    <>
      <SiteNav />
      <main>
        <Section>
          <Container>
            <SectionLabel>more — older work</SectionLabel>
            <ul className={styles.list}>
              {olderWork.map((item) => (
                <li key={item.name} className={styles.row}>
                  <span
                    className={styles.rowLink}
                    style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 2fr)', gap: 12 }}
                  >
                    <span className={styles.name}>{item.name}</span>
                    <span className={styles.tagline}>{item.tagline}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p
              style={{
                marginTop: 24,
                fontFamily: 'var(--font-family-mono)',
                fontSize: 12,
                color: 'var(--portfolio-muted)',
              }}
            >
              individual writeups TBD. for context, ping{' '}
              <a
                href="mailto:vagar343@uw.edu"
                style={{ color: 'var(--theme-text)', textDecoration: 'underline' }}
              >
                vagar343@uw.edu
              </a>
              .
            </p>
            <p
              style={{
                marginTop: 32,
                fontFamily: 'var(--font-family-mono)',
                fontSize: 11,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
            >
              <a href="/" style={{ color: 'var(--portfolio-muted)' }}>
                ← back to index
              </a>
            </p>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
