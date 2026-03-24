import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "10.0.0.176",
    "192.168.1.100",
    "localhost",
  ],
};

export default nextConfig;
