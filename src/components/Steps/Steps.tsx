import { STEPS } from "../../constants/steps";
import arrow from "../../shared/assets/arrow-small-right.png";
import steps_bg from "../../shared/assets/steps_bg.svg";
import cls from "./Steps.module.scss";

const Steps = () => {
  return (
    <section className={cls.Steps}>
      <div className={cls.stepsDiv}>
        <img src={steps_bg} alt="bg line" className={cls.line} />
        {STEPS.map((data, index) => (
          <div className={cls.stepsDivMap}>
            <span key={index} className={cls.stepsNumber}>
              {data.number}
            </span>
            <p className={cls.stepsP}>
              <img src={arrow} alt="img" className={cls.arrow} />
              {data.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
