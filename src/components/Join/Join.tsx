import Button from "../../shared/ui/Button/Button";
import Input, { InputState } from "../../shared/ui/Input/Input";
import cls from "./Join.module.scss";

const Join = () => {
  return (
    <article className={cls.JoinArticle}>
      <section className={cls.joinSection}>
        <p className={cls.joinTitle}>JOIN HYDRA</p>
        <div className={cls.lines}></div>
        <p className={cls.joinSubtitle}>Let's Build Your VR EXperience</p>
      </section>
      <section className={cls.joinSection}>
        <div className={cls.firstLastName}>
          <Input placeholder="First Name" className={cls.joinInput} />
          <Input placeholder="Last Name" className={cls.joinInput} />
        </div>
        <div className={cls.firstLastName}>
          <Input
            placeholder="Email"
            className={cls.input}
            state={InputState.DEFAULT}
          />
          <Input
            placeholder="Phone Number"
            className={cls.input}
            state={InputState.DEFAULT}
          />
        </div>
        <Input placeholder="Subject" state={InputState.DEFAULT} />
        <Input placeholder="Tell us something" state={InputState.LONG} />
      </section>
      <section className={cls.joinSection}>
        <Button state="Primary" type="button" className={cls.joinBtn}>
          SEND TO HYDRA
        </Button>
      </section>
    </article>
  );
};

export default Join;
