import cls from "./Technologies.module.scss";
import downArrow from "../../shared/assets/chevron-small-down.svg";
import { HYDRA_TECH } from "../../constants/hydraTechs";

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
        {HYDRA_TECH.map((item, index) => (
          <img
            key={index}
            src={item.icon}
            alt={item.alt}
            className={cls.hydraTechImgs}
          />
        ))}
      </section>
    </article>
  );
};

export default Technologies;
