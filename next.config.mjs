/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // 👇 prevent locale prefix for static files
  trailingSlash: false,
}

export default nextConfig
