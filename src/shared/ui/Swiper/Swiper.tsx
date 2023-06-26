import React, { useRef, ReactNode } from "react";

import SwiperCore, { Navigation, Pagination, SwiperOptions } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import cls from "./Swiper.module.scss";

SwiperCore.use([Navigation, Pagination]); 

interface SwiperProps {
  data: any;
  component: React.ComponentType<any>;
  prevSlide?: ReactNode;
  nextSlide?: ReactNode;
  breakPoints?: SwiperOptions["breakpoints"];
  slideClassName?: string;
  prevClassName?: string;
  nextClassName?: string;
}

const SwiperComponent: React.FC<SwiperProps> = ({
  data,
  component: Component,
  prevSlide,
  nextSlide,
  breakPoints,
  slideClassName = "",
  prevClassName = "",
  nextClassName = "",
}) => {
  const swiperRef = useRef<any>(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.slideNext) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.slidePrev) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className={cls.swiper}>
      <Swiper
        spaceBetween={20}
        breakpoints={breakPoints}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {data.map((slide: any) => (
          <SwiperSlide className={cls[slideClassName]} key={slide.id}>
            <Component {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div>
        <button
          className={`${cls.btn} ${cls[prevClassName]}`}
          onClick={goPrev}
        >
          {prevSlide}
        </button>
        <button
          className={`${cls.btn} ${cls[nextClassName]}`}
          onClick={goNext}
        >
          {nextSlide}
        </button>
      </div> */}
    </div>
  );
};

export default SwiperComponent;
