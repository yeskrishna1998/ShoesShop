import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function BeforeAfterSlider() {

  const images = [
    "/images/BA-1.png",
    "/images/BA-2.png",
    "/images/BA-3.png",
    "/images/BA-6.png",
    "/images/BA-7.png",
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 2500 }}
      loop={true}
      spaceBetween={0}
      slidesPerView={1}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt="shoe repair"
            className="w-full h-[190px] object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}