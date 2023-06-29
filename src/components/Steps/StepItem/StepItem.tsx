import cls from "./StepItem.module.scss";
import arrow from "../../../shared/assets/arrow-small-right.png";
import { FC } from "react";

type StepItemProps = {
  id: number;
  number: number;
  text: string;
};

const StepItem: FC<StepItemProps> = ({ id, number, text }) => {
  return (
    <div className={cls.stepsDivMap}>
      <div key={id} className={cls.stepsNumber}>
        {number}
      </div>
      <p className={cls.stepsP}>
        <img src={arrow} alt="img" className={cls.arrow} />
        {text}
      </p>
    </div>
  );
};

export default StepItem;
