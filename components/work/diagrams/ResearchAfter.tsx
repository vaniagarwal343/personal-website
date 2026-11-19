import * as React from 'react';

import styles from '@components/work/diagrams/diagrams.module.scss';

export default function ResearchAfter() {
  return (
    <svg
      className={styles.svg}
      viewBox="0 0 240 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="diagram: a horizontal arrow flowing from a single circle labeled judgment to a stack of three bars labeled leaderboard"
    >
      <circle cx="40" cy="100" r="22" className={`${styles.stroke} ${styles.accent}`} />
      <text
        x="40"
        y="135"
        textAnchor="middle"
        fontFamily="var(--font-family-mono)"
        fontSize="9"
        fill="currentColor"
        opacity="0.55"
      >
        judgment
      </text>
      <line x1="68" y1="100" x2="148" y2="100" className={styles.stroke} />
      <polyline points="142,94 152,100 142,106" className={styles.stroke} />
      <rect x="160" y="78" width="60" height="8" className={`${styles.stroke} ${styles.muted}`} />
      <rect x="160" y="92" width="48" height="8" className={`${styles.stroke} ${styles.muted}`} />
      <rect x="160" y="106" width="36" height="8" className={`${styles.stroke} ${styles.muted}`} />
      <text
        x="190"
        y="135"
        textAnchor="middle"
        fontFamily="var(--font-family-mono)"
        fontSize="9"
        fill="currentColor"
        opacity="0.55"
      >
        leaderboard
      </text>
    </svg>
  );
}
