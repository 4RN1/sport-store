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
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://res.cloudinary.com/dkwh7oqpf/image/upload/v1765622326/Untitled-1_woqnis.png)",
            }}
          />
        </Link>
      </SwiperSlide>

      {/* Boots */}
      <SwiperSlide>
        <Link to="/category/boots">
          <img
            src="https://res.cloudinary.com/dkwh7oqpf/image/upload/v1765624984/Untitled-2_cao1yk.png"
            className="w-full h-full object-cover"
            alt="Boots"
          />
        </Link>
      </SwiperSlide>

      {/* Equipment */}
      <SwiperSlide>
        <Link to="/category/equipment">
          <img
            src="https://res.cloudinary.com/dkwh7oqpf/image/upload/v1765622326/Untitled-1_woqnis.png"
            className="w-full h-full object-cover"
            alt="Equipment"
          />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
