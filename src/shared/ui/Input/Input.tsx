import { FC, memo, useMemo } from "react";
import cls from "./Input.module.scss";
import { classNames } from "../../lib/classNames/classNames";

export enum InputState {
  DEFAULT = "default",
  LONG = "long",
}

interface InputProps {
  placeholder?: string;
  state?: InputState;
  className?: string;
}

const Input: FC<InputProps> = memo((props) => {
  const { placeholder, className, state = InputState.DEFAULT } = props;

  const mods = useMemo(() => ({}), []);

  const inputClasses = classNames(cls.Input, mods, [
    className,
    cls[state],
  ]);

  return (
    <div className={classNames(cls.InputWrapper, {})}>
      <div className={cls.columns}>
        <input className={inputClasses} placeholder={placeholder} />
      </div>
    </div>
  );
});

export default Input;
