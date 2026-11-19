import * as React from 'react';

import styles from '@components/site/Hero.module.scss';
import { Container, Section } from '@components/site/SiteShell';

export default function Hero() {
  return (
    <Section className={styles.heroSection} id="top">
      <Container>
        <div className={styles.label}>designer &amp; engineer · seattle</div>
        <h1 className={styles.headline}>
          vani agarwal is a designer &amp; engineer building{' '}
          <span className={styles.accent}>AI intermediaries</span> — products that sit between
          people and shape what happens in the space between.
        </h1>
        <p className={styles.lead}>
          currently shipping research.site and tbd.chat. previously microsoft AI, snapp AI, UPS,
          societal. taught DSA at UW.
        </p>
        <div className={styles.actionBar}>
          <a href="#projects" className={styles.action}>
            <span className={styles.arrow}>→</span> view work
          </a>
          <a href="#about" className={styles.action}>
            <span className={styles.arrow}>→</span> read about
          </a>
          <a href="mailto:vagar343@uw.edu" className={styles.action}>
            <span className={styles.arrow}>→</span> email
          </a>
        </div>
      </Container>
    </Section>
  );
}
