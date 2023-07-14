/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: 'standalone', // for docker build
}

module.exports = nextConfig
