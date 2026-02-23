import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["http://192.168.1.100"],
};

module.exports = {
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev', "http://192.168.1.100"],
}

export default nextConfig;
