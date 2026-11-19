// Root layout for the front page only. It deliberately does not import the
// starter kit's global.scss / portfolio.scss: this page has its own identity.
// The rest of the site keeps its own root layout in app/(site)/layout.tsx.

import * as React from 'react';
import { DM_Mono, Newsreader } from 'next/font/google';

import '@root/components/front/front.global.scss';

import { frontPage } from '@root/content/front-page';

const serif = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  variable: '--font-serif',
  display: 'swap',
});

const mono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://vaniagarwal.dev'),
  title: frontPage.meta.title,
  description: frontPage.meta.description,
  openGraph: { title: frontPage.meta.title, description: frontPage.meta.description, type: 'website', url: '/' },
  twitter: { card: 'summary_large_image', title: frontPage.meta.title, description: frontPage.meta.description },
  // The preview image itself is app/(front)/opengraph-image.jpg (a snapshot of this page).
  icons: { icon: '/favicon-32x32.png', shortcut: '/favicon-16x16.png', apple: '/apple-touch-icon.png' },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0e0e0d' },
  ],
};

export default function FrontLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Blocking on purpose: sets data-theme before first paint. */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="/front/theme-init.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}
