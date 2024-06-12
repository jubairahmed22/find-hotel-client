import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./home.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SearchForm from "../Components/Form/SearchForm";
const HomeHero = () => {
  const data = [
    {
      id: "1",
      img: "https://i.ibb.co/z8vSWpj/swimming-pool-hotel-thailand.jpg",
    },
    {
      id: "2",
      img: "https://i.ibb.co/HNPkQLf/photo-is-must-everyday-work-ai-generated-best-wonderful-photo.jpg",
    },
    {
      id: "3",
      img: "https://i.ibb.co/cDBwSCb/6ed4dde7-b566-46ed-9a9c-712912077158.jpg",
    },
  ];

  return (
    <>
      <div className="containerDiv">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {data.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                style={{ width: "100%", height: "800px", objectFit: "cover" }}
                src={img.img}
                alt=""
              ></img>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="overlay"></div>
        <div className="content">
          <h1 className=" font-marcellus ">Book Your Dream Hotel</h1>
          <p className=" font-jost py-5">Experience luxury and comfort with our top-rated hotels.</p>
          <div className="mt-56">
          <SearchForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
