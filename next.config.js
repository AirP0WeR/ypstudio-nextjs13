/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ['react-bootstrap', 'mongodb', 'mongoose', 'sharp'],
    serverActions: true

  },
  output: 'standalone', // for docker build
}

module.exports = nextConfig
