import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["sharp", "bcrypt"],
  },
};

export default nextConfig;
