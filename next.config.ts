import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/where-to-buy",
        destination: "/where-to-buy/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
