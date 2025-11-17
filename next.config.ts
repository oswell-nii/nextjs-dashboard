import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  serverExternalPackages: ['sharp', 'bcrypt'], // ✅ updated key
  webpack: (config) => {
    config.externals = {
      ...(config.externals || {}),
      'mock-aws-s3': 'commonjs mock-aws-s3',
      'aws-sdk': 'commonjs aws-sdk',
      'nock': 'commonjs nock',
    };
    return config;
  },
};

export default nextConfig;