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
      {
        protocol: "https",
        hostname: "previews.123rf.com",
        port: "",
        pathname:
          "/images/czoborraul/czoborraul1904/czoborraul190400022/120487958-multiple-cosmetic-products-on-black-background-high-resolution-image-for-cosmetics-and-fashion.jpg",
      },
      {
        protocol: "https",
        hostname: "www.igp.com",
        port: "",
        pathname:
          "/blog/wp-content/uploads/2017/12/Happy-New-Year-2016-Gifts-Ideas-for-Family-1024x778.jpg",
      },
    ],
  },
};

export default nextConfig;
