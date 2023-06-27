import { CARDS_INFO } from "../../constants/cardsInfo";
import SwiperComponent from "../../shared/ui/Swiper/Swiper";
import CardItem from "../CardItem/CardItem";
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
      />
    </section>
  );
};

export default Cards;
