import { WHY_BUILD_DATA } from "../../constants/IntroWhyHow";
import Cards from "../Cards/Cards";
import IntroWhyHowSections from "../IntroWhyHowSections/IntroWhyHowSections";
import cls from "./Why.module.scss";

const Why = () => {
  return (
    <section className={cls.why}>
      <IntroWhyHowSections data={WHY_BUILD_DATA} />
      <Cards />
    </section>
  );
};

export default Why;
