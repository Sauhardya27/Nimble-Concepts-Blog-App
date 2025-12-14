const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    middlewarePrefetch: "strict",  
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './'),
    };
    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: 'https',
        hostname: "images.pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;