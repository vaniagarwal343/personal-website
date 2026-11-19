import * as React from 'react';

import styles from '@components/work/diagrams/diagrams.module.scss';

export default function TbdVoice() {
  return (
    <svg
      className={styles.svg}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="diagram: a single circle, with a horizontal line crossed by short vertical strokes representing an audio waveform"
    >
      <circle cx="100" cy="100" r="72" className={`${styles.stroke} ${styles.accent}`} />
      <line x1="42" y1="100" x2="158" y2="100" className={styles.stroke} />
      {[60, 70, 80, 90, 100, 110, 120, 130, 140].map((x, i) => {
        const heights = [10, 22, 14, 32, 8, 28, 16, 24, 12];
        const h = heights[i];
        return (
          <line
            key={x}
            x1={x}
            x2={x}
            y1={100 - h}
            y2={100 + h}
            className={styles.stroke}
          />
        );
      })}
    </svg>
  );
}
