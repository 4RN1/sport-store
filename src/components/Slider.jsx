import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";

const Slider = () => {
  return (
    <Swiper
      className="bg-black h-[70vh]"
      modules={[Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop
    >
      {/* Jerseys */}
      <SwiperSlide>
        <Link to="/category/jerseys">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dkwh7oqpf/image/upload/v1765622326/Untitled-1_woqnis.png)",
            }}
          />
        </Link>
      </SwiperSlide>

      {/* Boots */}
      <SwiperSlide>
        <Link to="/category/shoes">
          <img
            src="https://www.futbolemotion.com/imagesbanners/xxl/puma_unleashed25_Q1.webp"
            className="w-full h-full object-cover"
            alt="Boots"
          />
        </Link>
      </SwiperSlide>

      {/* Equipment */}
      <SwiperSlide>
        <Link to="/product/110">
          <img
            src="https://static.nike.com/a/images/w_2880,h_1410,c_fill,f_auto/3ce86b0e-21b3-4b13-bbe4-198f221c564f/image.png"
            className="w-full h-full object-cover"
            alt="Equipment"
          />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
