import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['sharp'],
  },
  webpack: (config) => {
    config.externals = [...(config.externals || []), 'nock'];
    return config;
  },
};
export default nextConfig;
