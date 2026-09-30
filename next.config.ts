import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Hostinger's CDN rate-limits /_next/image responses (uncached), which left images broken;
    // serve files from public/ as-is so the CDN caches them.
    unoptimized: true,
  },
  async redirects() {
    return [
      // One canonical host: send www to the bare domain
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.thegreenbranch.nl" }],
        destination: "https://thegreenbranch.nl/:path*",
        permanent: true,
      },
      // Renamed routes
      { source: "/secure-credits", destination: "/buy-removals", permanent: true },
      { source: "/os-tgb", destination: "/greenbranch-os", permanent: true },
      { source: "/terrahub", destination: "/greenbranch-os", permanent: true },
      // Folded pages
      { source: "/what-we-do", destination: "/", permanent: true },
      { source: "/develop", destination: "/develop/arr", permanent: true },
      // Legacy live-site paths (SEO continuity for when this replaces thegreenbranch.nl)
      { source: "/invest-in-nature", destination: "/invest", permanent: true },
      { source: "/develop-a-project", destination: "/develop/arr", permanent: true },
      { source: "/technology", destination: "/greenbranch-os", permanent: true },
    ];
  },
};

export default nextConfig;
