/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { esmExternals: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cu-black-market-s3.s3-ap-southeast-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

https: module.exports = nextConfig;
