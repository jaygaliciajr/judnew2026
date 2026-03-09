import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["192.168.1.42", "192.168.1.46", "0.0.0.0"],
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
