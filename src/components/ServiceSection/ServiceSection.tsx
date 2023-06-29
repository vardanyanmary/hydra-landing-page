import { WHY_BUILD_DATA } from "../../constants/IntroWhyHow";
import IntroWhyHowSections from "../../shared/ui/IntroWhyHowSections/IntroWhyHowSections";
import Cards from "./Cards/Cards";
import cls from "./ServiceSection.module.scss";

const ServiceSection = () => {
  return (
    <section className={cls.ServiceSection}>
      <IntroWhyHowSections data={WHY_BUILD_DATA} />
      <Cards />
    </section>
  );
};

export default ServiceSection;
