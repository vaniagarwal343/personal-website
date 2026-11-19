import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const config = [
  ...nextVitals,
  ...nextTs,
  {
    ignores: ['.next/**', 'node_modules/**', '_legacy/**', 'design-reference/**', 'next-env.d.ts', 'public/**'],
  },
  {
    // Front page images are absolutely positioned in fixed-size slots (no layout
    // shift) and must swap by theme with plain CSS, so they use <img>.
    files: ['components/front/**'],
    rules: { '@next/next/no-img-element': 'off' },
  },
];

export default config;
