import * as React from 'react';

import styles from '@components/work/shared.module.scss';
import { Container } from '@components/site/SiteShell';

export function CaseStudyHeader(props: {
  eyebrow: string;
  title: string;
  tagline: string;
  description: string;
  meta: string;
}) {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.eyebrow}>{props.eyebrow}</div>
        <h1 className={styles.title}>{props.title}</h1>
        <div className={styles.tagline}>— {props.tagline} —</div>
        <p className={styles.description}>{props.description}</p>
        <div className={styles.meta}>{props.meta}</div>
      </Container>
    </header>
  );
}

export function SplitSection(props: {
  label: string;
  id?: string;
  left: React.ReactNode;
  right?: React.ReactNode;
}) {
  return (
    <section id={props.id} className={styles.split}>
      <Container>
        <div className={styles.splitLabel}>{props.label}</div>
        <div className={styles.splitGrid}>
          <div className={styles.splitLeft}>{props.left}</div>
          <div className={styles.splitRight}>{props.right}</div>
        </div>
      </Container>
    </section>
  );
}

export function FullSection(props: {
  label: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={props.id} className={styles.full}>
      <Container>
        <div className={styles.splitLabel}>{props.label}</div>
        <div className={styles.fullBody}>{props.children}</div>
      </Container>
    </section>
  );
}

export function DecisionBlock(props: {
  number: string;
  title: string;
  body: React.ReactNode;
  visual?: React.ReactNode;
}) {
  return (
    <article className={styles.decision}>
      <div className={styles.decisionLeft}>
        <div className={styles.decisionNumber}>
          {props.number} — {props.title}
        </div>
        <div className={styles.decisionBody}>{props.body}</div>
      </div>
      {props.visual ? <div className={styles.decisionRight}>{props.visual}</div> : null}
    </article>
  );
}

export function ImagePlaceholder(props: { caption: string; tall?: boolean }) {
  return (
    <div
      className={`${styles.placeholder} ${props.tall ? styles.placeholderTall : ''}`}
      role="img"
      aria-label={props.caption}
    >
      <span className={styles.placeholderCaption}>screenshot — {props.caption}</span>
    </div>
  );
}

export function DesignedCultivatedBlock(props: {
  designed: { label: string; body: string };
  cultivated: { label: string; body: string };
  closing?: React.ReactNode;
}) {
  return (
    <div className={styles.dcWrapper}>
      <div className={styles.dcGrid}>
        <div className={styles.dcCol}>
          <div className={styles.dcLabel}>designed</div>
          <div className={styles.dcSubLabel}>{props.designed.label}</div>
          <p className={styles.dcBody}>{props.designed.body}</p>
        </div>
        <div className={styles.dcCol}>
          <div className={styles.dcLabel}>cultivated</div>
          <div className={styles.dcSubLabel}>{props.cultivated.label}</div>
          <p className={styles.dcBody}>{props.cultivated.body}</p>
        </div>
      </div>
      {props.closing ? <div className={styles.dcClosing}>{props.closing}</div> : null}
    </div>
  );
}

export function CaseStudyFooterNav(props: {
  liveLabel?: string;
  liveHref?: string;
  nextLabel: string;
  nextHref: string;
}) {
  return (
    <nav className={styles.footerNav} aria-label="case study navigation">
      <Container>
        <div className={styles.footerNavInner}>
          <a className={styles.footerNavLink} href="/">
            <span aria-hidden="true">←</span> back to index
          </a>
          {props.liveHref ? (
            <a
              className={styles.footerNavLink}
              href={props.liveHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.liveLabel ?? 'live site'} <span aria-hidden="true">↗</span>
            </a>
          ) : null}
          <a className={styles.footerNavLink} href={props.nextHref}>
            next — {props.nextLabel} <span aria-hidden="true">→</span>
          </a>
        </div>
      </Container>
    </nav>
  );
}
