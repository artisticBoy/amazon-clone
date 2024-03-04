/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zeevector.com",
        port: "",
        pathname: "/wp-content/uploads/Amazon-Logo-White@zeevector.png",
      },
    ],
  },
};

export default nextConfig;
