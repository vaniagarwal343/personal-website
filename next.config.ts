const isDev = process.env.NODE_ENV !== 'production';

const cspDirectives = [
  "default-src 'self'",
  `script-src 'self'${isDev ? " 'unsafe-eval' 'unsafe-inline'" : ''}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "frame-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  `connect-src 'self'${isDev ? ' ws: wss:' : ''}`,
  "object-src 'none'",
];

// FRONT PAGE EXCEPTION (open question for Vani): Next's App Router hydrates
// with inline <script> tags, which `script-src 'self'` blocks in production,
// so no client JS runs. The front page needs JS (theme toggle, plate picker,
// timer), so `/` alone also allows inline scripts. The stronger fix is a
// nonce-based CSP via proxy.ts, which makes every page dynamically rendered.
const frontPageCsp = cspDirectives.map((d) => (d.startsWith('script-src') && !d.includes("'unsafe-inline'") ? `${d} 'unsafe-inline'` : d)).join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: cspDirectives.join('; ') },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig = {
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: false,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      // Must come after '/:path*' so it overrides the CSP for '/' only.
      {
        source: '/',
        headers: [{ key: 'Content-Security-Policy', value: frontPageCsp }],
      },
    ];
  },
};

module.exports = nextConfig;
