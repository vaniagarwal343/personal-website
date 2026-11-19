'use client';

import * as React from 'react';

import styles from '@components/site/ThemeToggle.module.scss';

const STORAGE_KEY = 'vani-theme';

type Theme = 'light' | 'dark';

function applyTheme(theme: Theme) {
  if (typeof document === 'undefined') return;
  const body = document.body;
  body.classList.remove('theme-light', 'theme-dark');
  body.classList.add(`theme-${theme}`);
}

function readStoredTheme(): Theme | null {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === 'light' || v === 'dark' ? v : null;
  } catch {
    return null;
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState<Theme>('light');

  React.useEffect(() => {
    const stored = readStoredTheme();
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial: Theme = stored ?? (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const toggle = React.useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'light' ? 'dark' : 'light';
      applyTheme(next);
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* localStorage unavailable, ignore */
      }
      return next;
    });
  }, []);

  return (
    <button
      type="button"
      className={styles.button}
      onClick={toggle}
      aria-label={theme === 'light' ? 'switch to dark mode' : 'switch to light mode'}
    >
      {theme === 'light' ? 'dark' : 'light'}
    </button>
  );
}
