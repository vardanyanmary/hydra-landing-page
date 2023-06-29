import { INPUT_INFO } from "../../constants/inputInfo";
import Button from "../../shared/ui/Button/Button";
import cls from "./OptInSection.module.scss";

const OptInSection = () => {
  return (
    <article className={cls.wrapper}>
      <section className={cls.constactUsContainer}>
        <div className={cls.info}>
          <h2>JOIN HYDRA</h2>
          <div className={cls.line}></div>
          <p>Let’s Build Your VR Experience</p>
        </div>
        <form className={cls.form}>
          {INPUT_INFO.map((info, id) => (
            <input
              key={id}
              className={cls.inputArea}
              placeholder={info.placeholder}
              type="text"
            />
          ))}

          <input placeholder="Subject" className={cls.subject} type="text" />
          <textarea
            placeholder="Tell Us Something..."
            className={cls.textArea}
          ></textarea>
        </form>

        <Button state="Primary" type="button" className={cls.joinBtn}>
          SEND TO HYDRA
        </Button>
      </section>
    </article>
  );
};

export default OptInSection;
