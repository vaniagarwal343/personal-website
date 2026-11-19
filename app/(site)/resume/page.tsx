import * as React from 'react';

import SiteFooter from '@components/site/SiteFooter';
import SiteNav from '@components/site/SiteNav';
import { Container, Section } from '@components/site/SiteShell';

import styles from '@components/site/ResumePage.module.scss';

export const metadata = {
  title: 'resume — vani agarwal',
  description: 'vani agarwal — resume.',
};

const RESUME_PATH = '/papers/vani-agarwal-resume.pdf';

export default function ResumePage() {
  return (
    <>
      <SiteNav />
      <main>
        <Section>
          <Container>
            <p className={styles.downloadLine}>
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.downloadLink}
              >
                download pdf <span aria-hidden="true">→</span>
              </a>
            </p>
            <div className={styles.frameWrap}>
              <iframe
                title="vani agarwal resume"
                src={RESUME_PATH}
                className={styles.frame}
                sandbox="allow-same-origin allow-scripts"
              >
                <a
                  href={RESUME_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.fallbackLink}
                >
                  your browser cannot display this PDF — download it here.
                </a>
              </iframe>
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
