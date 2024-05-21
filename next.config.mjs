/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com','cdn.dribbble.com'],
},
    remotePatterns: [
        {
          protocol: "https",
          hostname: "images.pexels.com",
        },
        {
          protocol: "https",
          hostname: "static.wixstatic.com",
        },
        {
          protocol: "https",
          hostname: "people.pic1.co",
        },
        {
          protocol: "https",
          hostname: "app-uploads-cdn.fera.ai",
        },
    ],
};

export default nextConfig;
