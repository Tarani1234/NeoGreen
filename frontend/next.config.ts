import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: "build",         
  output: "standalone",
};

export default nextConfig;

