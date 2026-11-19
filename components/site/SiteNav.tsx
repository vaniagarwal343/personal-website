import * as React from 'react';

import styles from '@components/site/SiteNav.module.scss';
import ThemeToggle from '@components/site/ThemeToggle';

const links = [
  { label: 'work', href: '/#projects' },
  { label: 'about', href: '/#about' },
  { label: 'writing', href: '/#writing' },
  { label: 'resume', href: '/resume' },
  { label: 'contact', href: '/#contact' },
];

export default function SiteNav() {
  return (
    <nav className={styles.root} aria-label="primary">
      <div className={styles.inner}>
        <a href="/" className={styles.brand} aria-label="vani agarwal — home">
          VA
        </a>
        <div className={styles.links}>
          {links.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </div>
        <div className={styles.toggle}>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
