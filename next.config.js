/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true, // Required for static export
  },
  reactStrictMode: true,
  trailingSlash: true,
}

export default nextConfig
