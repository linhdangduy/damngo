/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/damngo',
  assetPrefix: '/damngo/',
  images: {
    unoptimized: true, // Required for static export
  },
  reactStrictMode: true,
}

export default nextConfig
