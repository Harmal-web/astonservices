import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Ensure trailingSlash is false for clean URLs
  trailingSlash: false,
};

export default nextConfig;
