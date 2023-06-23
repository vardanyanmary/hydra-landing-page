import { CONTACT_DATA } from "../../constants/contactData";
import cls from "./PayGiveCall.module.scss";

const PayGiveCall = () => {
  return (
    <article className={cls.PGC}>
      
      {CONTACT_DATA.map((data, index) => (
        <section className={cls.payGive} key={index}>
          <img src={data.icon} alt="icon" />
          <div className={cls.Texts}>
            <p className={cls.TextsP1}>{data.title}</p>
            <p className={cls.TextsP2}>{data.description}</p>
          </div>
          {index !== CONTACT_DATA.length - 1 && (
            <div className={cls.lines}></div>
          )}
        </section>
      ))}
    </article>
  );
};

export default PayGiveCall;
