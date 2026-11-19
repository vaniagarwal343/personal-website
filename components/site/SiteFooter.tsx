import * as React from 'react';

import styles from '@components/site/SiteFooter.module.scss';

export default function SiteFooter() {
  return (
    <footer className={styles.root}>
      <div className={styles.inner}>
        <span>© 2026</span>
        <span aria-hidden="true">·</span>
        <span>built in seattle</span>
      </div>
    </footer>
  );
}
