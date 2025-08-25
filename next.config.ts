import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://shorturl.at/**')],
  },
};

export default nextConfig;
