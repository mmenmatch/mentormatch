// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   basePath: "/app",
// };

// export default nextConfig;
// // added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
// import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
// initOpenNextCloudflareForDev();
import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Only init in dev
if (process.env.NODE_ENV === "development") {
  initOpenNextCloudflareForDev();
}

const nextConfig: NextConfig = {
  basePath: "/app",

  // 👇 Add this — tells Next.js where assets are served from
  assetPrefix: "/app",

  async headers() {
    return [
      {
        // Allow Clarity's replay server to fetch your static assets
        source: "/app/_next/static/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;