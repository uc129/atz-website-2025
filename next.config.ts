import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'randomuser.me',
        // pathname: '/api/portraits',
        protocol: 'https'
      },
      {
        hostname: 'picsum.photos',
        protocol: 'https'
      }
    ]
  }
};

export default nextConfig;
