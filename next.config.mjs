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
      {
        protocol: "https",
        hostname: "graphicsfamily.com",
        port: "",
        pathname:
          "/wp-content/uploads/edd/2022/06/Free-E-commerce-Product-Banner-Design-with-Green-Colors-scaled.jpg",
      },
      {
        protocol: "https",
        hostname: "t3.ftcdn.net",
        port: "",
        pathname:
          "/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg",
      },
    ],
  },
};

export default nextConfig;
