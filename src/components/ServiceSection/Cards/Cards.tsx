import CardItem from "./CardItem/CardItem";
import right from "../../../shared/assets/chevron-small-down.svg";
import left from "../../../shared/assets/chevron-small-down.svg";
import SwiperComponent from "../../../shared/ui/Swiper/Swiper";
import { CARDS_INFO } from "../../../constants/cardsInfo";
import { BREAKPOINTS } from "../../../constants/breakpoints";
import ArrowBtn from "../../../shared/ui/ArrowBtn/ArrowBtn";
import cls from './Cards.module.scss'

const Cards = () => {
  return (
    <section className={cls.cards}>
      <SwiperComponent
        data={CARDS_INFO}
        component={CardItem}
        breakPoints={BREAKPOINTS}
        nextSlide={<ArrowBtn img={right} />}
        prevSlide={<ArrowBtn img={left} />}
        nextClassName="nextCard"
        prevClassName="prevCard"
      />
    </section>
  );
};

export default Cards;
