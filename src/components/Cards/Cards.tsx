import { CARDS_INFO } from "../../constants/cardsInfo";
import SwiperComponent from "../../shared/ui/Swiper/Swiper";
import ArrowBtn from "../../shared/ui/ArrowBtn/ArrowBtn";
import CardItem from "../CardItem/CardItem";
import right from "../../shared/assets/chevron-small-down.svg";
import left from "../../shared/assets/chevron-small-down.svg";
import cls from "./Cards.module.scss";
import { SwiperOptions } from "swiper";

const breakPoints: SwiperOptions["breakpoints"] = {
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

const Cards = () => {
  return (
    <section>
      <SwiperComponent
        data={CARDS_INFO}
        component={CardItem}
        breakPoints={breakPoints}
        nextSlide={<ArrowBtn img={right} />}
        prevSlide={<ArrowBtn img={left} />}
        nextClassName="nextSlide"
        prevClassName="prevSlide"
      />
    </section>
  );
};

export default Cards;
