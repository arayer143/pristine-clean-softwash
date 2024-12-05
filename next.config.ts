import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  reactStrictMode: true,
  // Ensure that Next.js doesn't cache old builds
  generateBuildId: async () => {
    return `build-${Date.now()}`
  },
  // Custom webpack config to disable caching in development
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;


