import { HOW_BUILD_DATA } from "../../constants/IntroWhyHow";
import IntroWhyHowSections from "../IntroWhyHowSections/IntroWhyHowSections";
import cls from "./How.module.scss";

const How = () => {
  return (
    <section className={cls.how}>
      <IntroWhyHowSections data={HOW_BUILD_DATA} />
    </section>
  );
};

export default How;
