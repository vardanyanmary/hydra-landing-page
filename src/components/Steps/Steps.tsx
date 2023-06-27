import { STEPS } from "../../constants/steps";
import steps_bg from "../../shared/assets/steps_bg.svg";
import SwiperComponent from "../../shared/ui/Swiper/Swiper";
import { SwiperOptions } from "swiper";
import cls from "./Steps.module.scss";
import StepItem from "../StepItem/StepItem";

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

const Steps = () => {
  return (
    <section className={cls.Steps}>
      <div className={cls.stepsDiv}>
        <img src={steps_bg} alt="bg line" className={cls.line} />
        <SwiperComponent
          data={STEPS}
          component={StepItem}
          breakPoints={breakPoints}
        />
      </div>
    </section>
  );
};

export default Steps;
