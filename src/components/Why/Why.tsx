import { WHY_BUILD_DATA } from "../../constants/IntroWhyHow";
import Cards from "../Cards/Cards";
import IntroWhyHowSections from "../IntroWhyHowSections/IntroWhyHowSections";
import cls from "./Why.module.scss";

const Why = () => {
  return (
    <article>
      <IntroWhyHowSections data={WHY_BUILD_DATA} />
      <Cards />
    </article>
  );
};

export default Why;
