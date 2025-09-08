/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api-invic-management.org",
      },
      {
        protocol: "https",
        hostname: "89.116.157.116",
        port: "9008",
      },
    ],
  },
};

export default nextConfig;
