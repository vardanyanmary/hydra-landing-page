import How from "./How/How";
import Steps from "./Steps/Steps";
import cls from "./ProcessSection.module.scss";

const ProcessSection = () => {
  return (
    <section className={cls.ProcessSection}>
      <How />
      <Steps />
    </section>
  );
};

export default ProcessSection;
