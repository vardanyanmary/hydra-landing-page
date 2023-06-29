import { HOW_BUILD_DATA } from "../../../constants/IntroWhyHow";
import IntroWhyHowSections from "../../../shared/ui/IntroWhyHowSections/IntroWhyHowSections";
import cls from "./How.module.scss";

const How = () => {
  return <IntroWhyHowSections data={HOW_BUILD_DATA} className={cls.how} />;
};

export default How;
