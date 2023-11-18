import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";

const Categories = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper max-w-7xl mx-auto my-10"
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
        <h3 className="text-2xl pl-24 -mt-12 text-white font-semibold">Salad</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
        <h3 className="text-2xl pl-24 -mt-12 text-white font-semibold">Pizza</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <h3 className="text-2xl pl-24 -mt-12 text-white font-semibold">Soup</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <h3 className="text-2xl pl-24 -mt-12 text-white font-semibold">Desert</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
        <h3 className="text-2xl pl-16 -mt-12 text-white font-semibold">Mixed Salad</h3>
      </SwiperSlide>
    </Swiper>
  );
};

export default Categories;
