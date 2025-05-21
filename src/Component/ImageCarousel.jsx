import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

const ImageCarousel = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "86vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f9f4ef", 
      }}
    >
      <div
        style={{
          width: "100%",
          height: "87vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3} 
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200, 
            modifier: 1.5,
            slideShadows: false, 
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Navigation, Pagination]}
          style={{
            width: "90vw", 
            height: "60vh", 
          }}
        >
          <SwiperSlide>
            <img
              src="23.jpg"
              style={{
                width: "180%",
                height: "120%",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="37.jpg"
              style={{
                width: "180%",
                height: "120%",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="20.jpg"
              style={{
                width: "180%",
                height: "120%",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="9.jpg"
              style={{
                width: "180%",
                height: "120%",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div
        style={{
          width: "100%",
          height: "6vh", 
          backgroundColor: "#6B4423", 
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: "1rem", 
            color: "white", 
             fontWeight: "bold", 
          }}
        >
          © 
        </span>
      </div>
    </div>
  );
};

export default ImageCarousel;
