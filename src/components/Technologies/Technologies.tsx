import cls from "./Technologies.module.scss";
import downArrow from "../../shared/assets/chevron-small-down.svg";
import { HYDRA_TECH } from "../../constants/hydraTechs";
import SwiperComponent from "../../shared/ui/Swiper/Swiper";
import TechnologyItem from "../TechnologyItem/TechnologyItem";
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

const Technologies = () => {
  return (
    <article className={cls.technologiesArticle}>
      <section className={cls.technologiesSection}>
        <div className={cls.technologiesText}>
          <p className={cls.technologiesTitle}>TECHNOLOGIES & HARDWARE</p>
          <p className={cls.technologiesSubtitle}>USED BY HYDRA VR.</p>
          <img src={downArrow} alt="down arrow" className={cls.arrowImg} />
        </div>
      </section>

      <section className={cls.hydraTechsSection}>
        <SwiperComponent
          data={HYDRA_TECH}
          component={TechnologyItem}
          breakPoints={breakPoints}
        />
      </section>
    </article>
  );
};

export default Technologies;
