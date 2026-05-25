import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** Directory that contains this config file (repo root), not `process.cwd()` (which may be `src/app`). */
const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const supabaseOrigin = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();

const scriptSrc = [
  "'self'",
  "'unsafe-inline'",
  "'unsafe-eval'",
  "https://embeds.iubenda.com",
  "https://cdn.iubenda.com",
  "https://www.googletagmanager.com",
  "https://www.google-analytics.com",
  "https://va.vercel-scripts.com",
  "https://challenges.cloudflare.com",
].join(" ");

const connectSrc = [
  "'self'",
  "https://embeds.iubenda.com",
  "https://cdn.iubenda.com",
  "https://www.iubenda.com",
  "https://hits-i.iubenda.com",
  "https://cpl.iubenda.com",
  "https://idb.iubenda.com",
  "https://www.google-analytics.com",
  "https://region1.google-analytics.com",
  "https://vitals.vercel-insights.com",
  "https://vitals.vercel-analytics.com",
  "https://challenges.cloudflare.com",
  supabaseOrigin,
]
  .filter(Boolean)
  .join(" ");

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "interest-cohort=()",
      "payment=()",
      "usb=()",
      "magnetometer=()",
      "gyroscope=()",
      "accelerometer=()",
      "browsing-topics=()",
    ].join(", "),
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      `script-src ${scriptSrc}`,
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.iubenda.com",
      "font-src 'self' https://fonts.gstatic.com https://cdn.iubenda.com",
      "img-src 'self' data: blob: https://www.iubenda.com",
      `connect-src ${connectSrc}`,
      "frame-src https://www.iubenda.com https://challenges.cloudflare.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "manifest-src 'self'",
      "worker-src 'self' blob:",
      "upgrade-insecure-requests",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  turbopack: {
    root: projectRoot,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
