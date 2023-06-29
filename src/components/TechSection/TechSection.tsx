import cls from "./TechSection.module.scss";
import downArrow from "../../shared/assets/chevron-small-down.svg";
import { HYDRA_TECH } from "../../constants/hydraTechs";
import SwiperComponent from "../../shared/ui/Swiper/Swiper";
import TechnologyItem from "./TechnologyItem/TechnologyItem";
import right from "../../shared/assets/chevron-small-down.svg";
import left from "../../shared/assets/chevron-small-down.svg";
import ArrowBtn from "../../shared/ui/ArrowBtn/ArrowBtn";
import { BREAKPOINTS } from "../../constants/breakpoints";

const TechSection = () => {
  return (
    <section className={cls.technologiesSection}>
      <div className={cls.technologiesDiv}>
        <div className={cls.technologiesText}>
          <p className={cls.technologiesTitle}>TECHNOLOGIES & HARDWARE</p>
          <p className={cls.technologiesSubtitle}>USED BY HYDRA VR.</p>
          <img src={downArrow} alt="down arrow" className={cls.arrowImg} />
        </div>
      </div>

      <SwiperComponent
        data={HYDRA_TECH}
        component={TechnologyItem}
        breakPoints={BREAKPOINTS}
        nextSlide={<ArrowBtn img={right} />}
        prevSlide={<ArrowBtn img={left} />}
        nextClassName="nextIcon"
        prevClassName="prevIcon"
      />
    </section>
  );
};

export default TechSection;
