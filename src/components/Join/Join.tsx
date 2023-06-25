import Button from "../../shared/ui/Button/Button";
import cls from "./Join.module.scss";

const Join = () => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.constactUsContainer}>
        <div className={cls.info}>
          <h2>JOIN HYDRA</h2>
          <div className={cls.line}></div>
          <p>Let’s Build Your VR Experience</p>
        </div>
        <form className={cls.form}>
          <input className={cls.input} placeholder="First Name" type="text" />
          <input className={cls.input} placeholder="Last Name" type="text" />
          <input className={cls.input} placeholder="Email" type="text" />
          <input className={cls.input} placeholder="Phone Number" type="text" />
          <input placeholder="Subject" className={cls.subject} type="text" />
          <textarea
            placeholder="Tell Us Something..."
            className={cls.textarea}
          ></textarea>
        </form>

        <Button state="Primary" type="button" className={cls.joinBtn}>
          SEND TO HYDRA
        </Button>
      </div>
    </div>
  );
};

export default Join;
