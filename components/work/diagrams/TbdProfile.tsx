import * as React from 'react';

import styles from '@components/work/diagrams/diagrams.module.scss';

export default function TbdProfile() {
  return (
    <svg
      className={styles.svg}
      viewBox="0 0 240 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="diagram: a small inner circle inside a rectangular frame representing a public profile page"
    >
      <rect x="40" y="36" width="160" height="128" className={styles.stroke} />
      <line x1="40" y1="64" x2="200" y2="64" className={styles.stroke} />
      <circle cx="120" cy="110" r="22" className={`${styles.stroke} ${styles.accent}`} />
      <text
        x="50"
        y="56"
        fontFamily="var(--font-family-mono)"
        fontSize="9"
        fill="currentColor"
        opacity="0.55"
      >
        /p/[nickname]
      </text>
      <line x1="80" y1="148" x2="160" y2="148" className={styles.stroke} />
    </svg>
  );
}
