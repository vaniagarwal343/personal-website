import * as React from 'react';

import styles from '@components/work/diagrams/diagrams.module.scss';

export default function ResearchSideBySide() {
  return (
    <svg
      className={styles.svg}
      viewBox="0 0 240 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="diagram: two equal-height rectangles set parallel, with horizontal lines representing text content of equal weight"
    >
      <rect x="20" y="30" width="90" height="140" className={styles.stroke} />
      <rect x="130" y="30" width="90" height="140" className={styles.stroke} />
      {[55, 75, 95, 115, 135].map((y, i) => (
        <React.Fragment key={y}>
          <line
            x1="32"
            x2={i === 4 ? 90 : 98}
            y1={y}
            y2={y}
            className={`${styles.stroke} ${styles.muted}`}
          />
          <line
            x1="142"
            x2={i === 4 ? 200 : 208}
            y1={y}
            y2={y}
            className={`${styles.stroke} ${styles.muted}`}
          />
        </React.Fragment>
      ))}
    </svg>
  );
}
