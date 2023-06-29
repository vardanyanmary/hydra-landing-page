import React, { useState } from "react";
import SwiperCore, { Navigation, Pagination, SwiperOptions } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import cls from "./Swiper.module.scss";

SwiperCore.use([Navigation, Pagination]);

interface SwiperProps {
  data: any[];
  component: React.ComponentType<any>;
  prevSlide?: React.ReactNode;
  nextSlide?: React.ReactNode;
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
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  const goNext = () => {
    if (swiper && swiper.slideNext) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper && swiper.slidePrev) {
      swiper.slidePrev();
    }
  };
  return (
    <div className={cls.swiper}>
      <div className={cls.btn}>
        <button className={`${cls.btn} ${cls[prevClassName]}`} onClick={goPrev}>
          {prevSlide}
        </button>
      </div>
      <Swiper
        spaceBetween={20}
        breakpoints={breakPoints}
        onSwiper={(swiper) => setSwiper(swiper)}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {data.map((slide: any , id:number) => (
          <SwiperSlide className={cls[slideClassName]} key={id}>
            <Component {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <button className={`${cls.btn} ${cls[nextClassName]}`} onClick={goNext}>
          {nextSlide}
        </button>
      </div>
    </div>
  );
};

export default SwiperComponent;
