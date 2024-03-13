"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper mb-[-40px]"
      >
        <SwiperSlide>
          <Image
            src={
              "https://previews.123rf.com/images/czoborraul/czoborraul1904/czoborraul190400022/120487958-multiple-cosmetic-products-on-black-background-high-resolution-image-for-cosmetics-and-fashion.jpg"
            }
            width={1500}
            height={1500}
            alt="image"
            className="homeImage__1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={
              "https://www.igp.com/blog/wp-content/uploads/2017/12/Happy-New-Year-2016-Gifts-Ideas-for-Family-1024x778.jpg"
            }
            width={1000}
            height={1000}
            alt="image"
            className="homeImage__1"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
