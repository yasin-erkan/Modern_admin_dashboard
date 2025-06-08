/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '9090',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: true,
  experimental: {
    serverActions: true
  }
}

module.exports = nextConfig 