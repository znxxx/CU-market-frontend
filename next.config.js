/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { esmExternals: true },
    images: {
        domains: ['cu-black-market-s3.s3-ap-southeast-1.amazonaws.com'],
      },
}

module.exports = nextConfig
