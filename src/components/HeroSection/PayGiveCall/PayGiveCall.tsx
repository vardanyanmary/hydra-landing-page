import PayGiveCallItem from "./PayGiveCallItem/PayGiveCallItem";
import right from "../../../shared/assets/chevron-circle-right.svg";
import left from "../../../shared/assets/chevron-circle-right.svg";
import SwiperComponent from "../../../shared/ui/Swiper/Swiper";
import { CONTACT_DATA } from "../../../constants/contactData";
import { BREAKPOINTS_PAY } from "../../../constants/breakpoints";
import ArrowBtn from "../../../shared/ui/ArrowBtn/ArrowBtn";
import cls from "./PayGiveCall.module.scss";


const PayGiveCall = () => {
  return (
    <section className={cls.PGC}>
      <SwiperComponent
        data={CONTACT_DATA}
        component={PayGiveCallItem}
        breakPoints={BREAKPOINTS_PAY}
        nextSlide={<ArrowBtn img={right} />}
        prevSlide={<ArrowBtn img={left} />}
        nextClassName="nextSlide"
        prevClassName="prevSlide"
      />
    </section>
  );
};

export default PayGiveCall;
