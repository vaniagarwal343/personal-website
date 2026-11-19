import '@root/global.scss';
import '@root/animations.scss';
import '@root/app/portfolio.scss';

import * as React from 'react';

import Providers from '@components/Providers';

export const metadata = {
  metadataBase: new URL('https://vaniagarwal.dev'),
  title: 'vani agarwal — designer & engineer',
  description:
    'designer & engineer building AI intermediaries. currently shipping research.site and tbd.chat.',
  openGraph: {
    title: 'vani agarwal — designer & engineer',
    description:
      'designer & engineer building AI intermediaries. currently shipping research.site and tbd.chat.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'vani agarwal — designer & engineer',
    description:
      'designer & engineer building AI intermediaries. currently shipping research.site and tbd.chat.',
  },
  icons: {
    icon: '/favicon-32x32.png',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="theme-light">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
