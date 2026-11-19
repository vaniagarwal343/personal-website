import * as React from 'react';

import styles from '@components/site/SiteShell.module.scss';

export function Container(props: { children: React.ReactNode; id?: string; className?: string }) {
  return (
    <div id={props.id} className={`${styles.container} ${props.className ?? ''}`}>
      {props.children}
    </div>
  );
}

export function Section(props: { children: React.ReactNode; id?: string; className?: string }) {
  return (
    <section id={props.id} className={`${styles.section} ${props.className ?? ''}`}>
      {props.children}
    </section>
  );
}

export function SectionLabel(props: { children: React.ReactNode }) {
  return <div className={styles.sectionLabel}>{props.children}</div>;
}

export function MonoNote(props: { children: React.ReactNode; className?: string }) {
  return <div className={`${styles.monoNote} ${props.className ?? ''}`}>{props.children}</div>;
}
