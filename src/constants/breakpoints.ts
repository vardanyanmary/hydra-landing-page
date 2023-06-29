import { SwiperOptions } from "swiper";

export const BREAKPOINTS: SwiperOptions["breakpoints"] = {
    640: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  };

  export const BREAKPOINTS_PAY: SwiperOptions["breakpoints"] = {
    640: {
      slidesPerView: 1,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 3,
    }
  };