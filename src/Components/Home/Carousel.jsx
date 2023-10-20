import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function Carousel() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRDuy3LqjDsC-5aeg4HmIZ_A83hpFP6eKbuV709-YzBurFMH8GhQNlOOXI6opsCJ1LlkM&usqp=CAU"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRDuy3LqjDsC-5aeg4HmIZ_A83hpFP6eKbuV709-YzBurFMH8GhQNlOOXI6opsCJ1LlkM&usqp=CAU"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRDuy3LqjDsC-5aeg4HmIZ_A83hpFP6eKbuV709-YzBurFMH8GhQNlOOXI6opsCJ1LlkM&usqp=CAU"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
