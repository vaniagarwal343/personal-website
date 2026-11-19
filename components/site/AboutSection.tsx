import * as React from 'react';

import styles from '@components/site/AboutSection.module.scss';
import { Container, Section, SectionLabel } from '@components/site/SiteShell';
import { currently, previously } from '@components/site/data';

export default function AboutSection() {
  return (
    <Section id="about">
      <Container>
        <SectionLabel>about</SectionLabel>
        <div className={styles.grid}>
          <div className={styles.body}>
            <p className={styles.paragraph}>
              i study how AI systems mediate human values. most products built today encode the
              designer&rsquo;s intentions into a stable interface — buttons, flows, forms. AI
              products don&rsquo;t work that way. when an agent is doing the talking, the designer
              can&rsquo;t fully control what happens. you can only design the conditions under
              which something good (honesty, autonomy, reflection, trust) is likely to emerge.
            </p>
            <p className={styles.paragraph}>
              my work extends value sensitive design — a framework from UW&rsquo;s information
              school — for this new design problem. i call the structural decisions you can make{' '}
              <em>designed values</em>, and the human outcomes that emerge through interaction{' '}
              <em>cultivated values</em>. tbd.chat&rsquo;s privacy architecture is designed; the
              honesty it produces is cultivated. research.site&rsquo;s blind comparison structure
              is designed; the user autonomy it produces is cultivated. the case studies below
              walk through how that distinction shaped real decisions.
            </p>
            <p className={styles.paragraph}>
              informatics + math at the university of washington, class of 2026. recently:
              copilot monetization at microsoft AI, and the LLM-judge evaluation infrastructure
              running in production at snapp AI. previously: backend at UPS, OCR pipelines at
              societal. taught CSE 373 (data structures &amp; algorithms) at UW for 9 quarters,
              supporting 1,400+ students.
            </p>
          </div>
          <aside className={styles.sidebar}>
            <div className={styles.sidebarBlock}>
              <div className={styles.sidebarLabel}>currently</div>
              <ul className={styles.sidebarList}>
                {currently.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.sidebarBlock}>
              <div className={styles.sidebarLabel}>previously</div>
              <ul className={styles.sidebarList}>
                {previously.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
