import * as React from 'react';

import styles from '@components/work/diagrams/diagrams.module.scss';

export default function TbdFreeform() {
  return (
    <svg
      className={styles.svg}
      viewBox="0 0 240 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="diagram: a single root circle with branching threads of varying lengths radiating outward"
    >
      <circle cx="120" cy="100" r="14" className={`${styles.stroke} ${styles.accent}`} />
      <line x1="120" y1="100" x2="40" y2="50" className={styles.stroke} />
      <line x1="120" y1="100" x2="60" y2="160" className={styles.stroke} />
      <line x1="120" y1="100" x2="200" y2="40" className={styles.stroke} />
      <line x1="120" y1="100" x2="210" y2="120" className={styles.stroke} />
      <line x1="120" y1="100" x2="170" y2="180" className={styles.stroke} />
      <line x1="40" y1="50" x2="20" y2="20" className={styles.stroke} />
      <line x1="60" y1="160" x2="40" y2="190" className={styles.stroke} />
      <line x1="200" y1="40" x2="225" y2="20" className={styles.stroke} />
      <circle cx="40" cy="50" r="3" className={styles.stroke} />
      <circle cx="60" cy="160" r="3" className={styles.stroke} />
      <circle cx="200" cy="40" r="3" className={styles.stroke} />
      <circle cx="210" cy="120" r="3" className={styles.stroke} />
      <circle cx="170" cy="180" r="3" className={styles.stroke} />
    </svg>
  );
}
