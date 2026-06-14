/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow external images from Unsplash for travel package photos
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
