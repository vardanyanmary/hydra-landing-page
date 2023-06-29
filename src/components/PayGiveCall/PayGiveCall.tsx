import { CONTACT_DATA } from "../../constants/contactData";
import SwiperComponent from "../../shared/ui/Swiper/Swiper";
import { SwiperOptions } from "swiper";
import cls from "./PayGiveCall.module.scss";
import PayGiveCallItem from "./PayGiveCallItem/PayGiveCallItem";
import right from "../../shared/assets/chevron-circle-right.svg";
import left from "../../shared/assets/chevron-circle-right.svg";
import ArrowBtn from "../../shared/ui/ArrowBtn/ArrowBtn";


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
  }
};

const PayGiveCall = () => {
  return (
    <article className={cls.PGC}>
      <SwiperComponent
        data={CONTACT_DATA}
        component={PayGiveCallItem}
        breakPoints={breakPoints}
        nextSlide={<ArrowBtn img={right} />}
        prevSlide={<ArrowBtn img={left} />}
        nextClassName="nextSlide"
        prevClassName="prevSlide"
      />
    </article>
  );
};

export default PayGiveCall;
