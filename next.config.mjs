/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // This stops Vercel from optimizing images and charging you
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopifyapp.shop",
        pathname: "/**",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });
    return config;
  },
};

export default nextConfig;
