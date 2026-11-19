import * as React from 'react';

import styles from '@components/work/diagrams/diagrams.module.scss';

export default function ResearchBlind() {
  return (
    <svg
      className={styles.svg}
      viewBox="0 0 240 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="diagram: two unlabeled rectangles side by side, neither one named, representing a blind comparison"
    >
      <rect x="20" y="40" width="90" height="120" className={`${styles.stroke} ${styles.accent}`} />
      <rect
        x="130"
        y="40"
        width="90"
        height="120"
        className={`${styles.stroke} ${styles.accent}`}
      />
      <text
        x="65"
        y="105"
        textAnchor="middle"
        fontFamily="var(--font-family-mono)"
        fontSize="22"
        fill="currentColor"
        opacity="0.4"
      >
        ?
      </text>
      <text
        x="175"
        y="105"
        textAnchor="middle"
        fontFamily="var(--font-family-mono)"
        fontSize="22"
        fill="currentColor"
        opacity="0.4"
      >
        ?
      </text>
    </svg>
  );
}
