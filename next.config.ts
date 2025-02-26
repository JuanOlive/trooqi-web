import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['meubucket.s3.amazonaws.com', 'images.unsplash.com'], // Domínios permitidos
  },
};

export default nextConfig;
