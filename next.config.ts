import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['placehold.co', 'static.tossdown.com','cdn.prod.website-files.com'], // Added static.tossdown.com to allowed domains
  },
};

export default nextConfig;
