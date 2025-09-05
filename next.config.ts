import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/terms',
        destination: '/smsterms',
        permanent: true,
      },
    ];
  },
  
  // Environment variables configuration
  env: {
    NEXT_PUBLIC_PRIVYR_WEBHOOK_URL: process.env.NEXT_PUBLIC_PRIVYR_WEBHOOK_URL,
  },
};

export default nextConfig;