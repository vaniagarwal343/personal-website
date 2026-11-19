import * as React from 'react';

import styles from '@components/work/diagrams/diagrams.module.scss';

export default function TbdSeparation() {
  return (
    <svg
      className={styles.svg}
      viewBox="0 0 240 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="diagram: two circles standing apart, with no line connecting them"
    >
      <circle cx="68" cy="100" r="50" className={`${styles.stroke} ${styles.accent}`} />
      <circle cx="172" cy="100" r="50" className={`${styles.stroke} ${styles.accent}`} />
      <text
        x="68"
        y="105"
        textAnchor="middle"
        fontFamily="var(--font-family-mono)"
        fontSize="11"
        fill="currentColor"
        opacity="0.55"
      >
        a
      </text>
      <text
        x="172"
        y="105"
        textAnchor="middle"
        fontFamily="var(--font-family-mono)"
        fontSize="11"
        fill="currentColor"
        opacity="0.55"
      >
        b
      </text>
    </svg>
  );
}
