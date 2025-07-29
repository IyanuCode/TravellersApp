/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/TravellersApp', // ✅ matches your repo name
  assetPrefix: '/TravellersApp/', // ✅ same here
};

export default nextConfig;
