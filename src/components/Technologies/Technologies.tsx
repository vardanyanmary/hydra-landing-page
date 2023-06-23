import cls from "./Technologies.module.scss";
import downArrow from "../../shared/assets/chevron-small-down.svg";
import rondae from "../../shared/assets/pexels-rodnae-productions-8097332 1.svg";
import { HYDRA_TECH } from "../../constants/hydraTechs";

const Technologies = () => {
  return (
    <article className={cls.technologiesArticle}>
      <section className={cls.technologiesSection}>
        <img
          src={rondae}
          alt="rondae backaground"
          className={cls.technologiesImg}
        />
        <div className={cls.technologiesText}>
          <p className={cls.technologiesTitle}>TECHNOLOGIES & HARDWARE</p>
          <p className={cls.technologiesSubtitle}>USED BY HYDRA VR.</p>
        </div>
        <img src={downArrow} alt="down arrow" className={cls.arrowImg} />
      </section>

      <section className={cls.hydraTechsSection}>
        {HYDRA_TECH.map((item, index) => (
            <img key={index} src={item.icon} alt={item.alt} className={cls.hydraTechImgs}/>
        ))}
      </section>
    </article>
  );
};

export default Technologies;
