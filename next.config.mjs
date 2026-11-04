import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pin the project root so a stray package-lock.json in a parent folder
  // doesn't trigger Next's "inferred your workspace root" warning.
  outputFileTracingRoot: __dirname,

  // ── Compiler optimisations ────────────────────────────────────────
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // ── Experimental ─────────────────────────────────────────────────
  experimental: {
    optimizeCss: true,
  },

  // ── Image optimisation ────────────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },

  // ── SEO, Cache & AI Crawler headers ──────────────────────────────
  async headers() {
    return [
      {
        // Long-lived cache for videos
        source: "/videos/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Long-lived cache for images/photos
        source: "/photo/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },

      {
        source: "/llms.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=86400" },
          { key: "X-Robots-Tag", value: "all" },
        ],
      },
      {
        source: "/llms-full.txt",
        headers: [
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=86400" },
          { key: "X-Robots-Tag", value: "all" },
        ],
      },
      {
        source: "/sitemap.xml",
        headers: [
          { key: "X-Robots-Tag", value: "all" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
      {
        source: "/((?!api|_next|admin).*)",
        headers: [
          { key: "X-Robots-Tag", value: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
        ],
      },
    ];
  },
};

export default nextConfig;
