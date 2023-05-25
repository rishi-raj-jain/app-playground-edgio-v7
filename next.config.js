/** @type {import('next').NextConfig} */
const nextConfig = {
  // Recommended for the `pages` directory, default in `app`.
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  output: 'standalone',
};

module.exports = nextConfig;
