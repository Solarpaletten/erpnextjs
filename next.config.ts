import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  // Отключить генерацию статических страниц
  trailingSlash: false,
  generateEtags: false,
  poweredByHeader: false
};

export default nextConfig;
