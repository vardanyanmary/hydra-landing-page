import { INTRODUCTION_DATA } from "../../constants/IntroWhyHow";
import IntroWhyHowSections from "../IntroWhyHowSections/IntroWhyHowSections";
import shvets from "../../shared/assets/pexels-shvets-production-7562014 1.svg";
import introduction_bg_line_1 from "../../shared/assets/introduction_bg_line_1.svg";
import introduction_bg_line_2 from "../../shared/assets/introduction_bg_line_2.svg";
import cls from "./Introduction.module.scss";
import Button from "../../shared/ui/Button/Button";

const Introduction = () => {
  return (
    <article className={cls.article}>
      <IntroWhyHowSections data={INTRODUCTION_DATA} />

      <section className={cls.section}>
        <img src={introduction_bg_line_1} alt="" className={cls.bgLine1}/>
        <img src={introduction_bg_line_2} alt="" className={cls.bgLine2}/>

        <div className={cls.div}>
          <img src={shvets} alt="img" className={cls.img1} />
        </div>
        <div className={cls.introductionText}>
          <div className={cls.dive}>
            <p className={cls.sectionTitle}>ABOUT </p>
            <span className={cls.sectionSubtitle}> HYDRA VR </span>
          </div>
          <p>
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>

          <div className={cls.btnArr}>
            <Button state="Primary" type="button">
              LET’S GET IN TOUCH
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Introduction;
