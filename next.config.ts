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
  }
};

export default nextConfig;