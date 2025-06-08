/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'modern-admin-dashboard-api.vercel.app'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '9090',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'modern-admin-dashboard-api.vercel.app',
        pathname: '/**',
      }
    ],
  },
  reactStrictMode: true
}

module.exports = nextConfig 