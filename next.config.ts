import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
