import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { testimonials } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../swiper.css';

import { Autoplay, Pagination } from 'swiper';

const Slider = () => {
  return (
    <div className="mx-auto max-w-[350px] md:max-w-[500px] lg:max-w-[650px]">
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {testimonials.map((item) => (
          <SwiperSlide
            key={item.id}
            className="py-6 px-4 border border-white rounded-2xl"
          >
            <div className="flex flex-col gap-4 lg:gap-6">
              <div>
                <FaQuoteRight size={20} className="text-[#a4190f]" />
              </div>
              <p>{item.text}</p>
              <p className="italic text-gray-300">{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
