import cls from "./Button.module.scss";
// import { classNames } from "../../lib/classNames/classNames";

type ButtonProps = {
  className?: string;
  type: "button" | "submit" | "reset";
  state: "Primary" | "Secondary";
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  className = undefined,
  type = "button",
  state = "Default",
  children,
  onClick,
}) => {
  const buttonClassNames = [cls[`Button--${state}`]];
  return (
    <button
      className={`button ${buttonClassNames.join(" ")} ${className}`}
      type={type}
      onClick={onClick}
    >
      {children && <div>{children}</div>}
    </button>
  );
};
export default Button;
