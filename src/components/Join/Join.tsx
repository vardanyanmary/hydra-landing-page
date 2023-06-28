import Button from "../../shared/ui/Button/Button";
import cls from "./Join.module.scss";

const Join = () => {
  return (
    <article className={cls.wrapper}>
      <section className={cls.constactUsContainer}>
        <div className={cls.info}>
          <h2>JOIN HYDRA</h2>
          <div className={cls.line}></div>
          <p>Let’s Build Your VR Experience</p>
        </div>
        <form className={cls.form}>
          <input
            className={cls.inputArea}
            placeholder="First Name"
            type="text"
          />
          <input
            className={cls.inputArea}
            placeholder="Last Name"
            type="text"
          />
          <input className={cls.inputArea} placeholder="Email" type="text" />
          <input
            className={cls.inputArea}
            placeholder="Phone Number"
            type="text"
          />
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

export default Join;
