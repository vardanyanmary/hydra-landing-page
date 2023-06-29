import steps_bg from "../../shared/assets/steps_bg.svg";
import cls from "./Steps.module.scss";
import StepItem from "./StepItem/StepItem";
import right from "../../shared/assets/chevron-small-down.svg";
import left from "../../shared/assets/chevron-small-down.svg";
import SwiperComponent from "../../../shared/ui/Swiper/Swiper";
import { STEPS } from "../../../constants/steps";
import { BREAKPOINTS } from "../../../constants/breakpoints";
import ArrowBtn from "../../../shared/ui/ArrowBtn/ArrowBtn";

const Steps = () => {
  return (
    <section className={cls.Steps}>
        <img src={steps_bg} alt="bg line" className={cls.line} />
        <SwiperComponent
          data={STEPS}
          component={StepItem}
          breakPoints={BREAKPOINTS}
          nextSlide={<ArrowBtn img={right} />}
          prevSlide={<ArrowBtn img={left} />}
          nextClassName="nextStep"
          prevClassName="prevStep"
        />
    </section>
  );
};

export default Steps;
