import * as React from 'react';

import styles from '@components/work/diagrams/diagrams.module.scss';

export default function ResearchTransparent() {
  return (
    <svg
      className={styles.svg}
      viewBox="0 0 240 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="diagram: two stacked bars labeled with cost and latency values, drawn at unequal lengths"
    >
      <text
        x="20"
        y="50"
        fontFamily="var(--font-family-mono)"
        fontSize="10"
        fill="currentColor"
        opacity="0.55"
      >
        $0.014  ·  4.2s
      </text>
      <rect x="20" y="60" width="160" height="14" className={`${styles.stroke} ${styles.accent}`} />
      <text
        x="20"
        y="110"
        fontFamily="var(--font-family-mono)"
        fontSize="10"
        fill="currentColor"
        opacity="0.55"
      >
        $0.029  ·  6.8s
      </text>
      <rect x="20" y="120" width="200" height="14" className={`${styles.stroke} ${styles.accent}`} />
    </svg>
  );
}
