import { CARDS_INFO } from "../../constants/cardsInfo";
import Button from "../../shared/ui/Button/Button";

import cls from "./Cards.module.scss";

const Cards = () => {
  return (
    <section className={cls.cardsSection}>
      {CARDS_INFO.map((data, index) => (
        <div key={index} className={cls.cardsDiv}>
          <img src={data.img} alt={data.imgAlt} className={cls.img} />
          <p className={cls.cardsTitle}>{data.title}</p>
          <div className={cls.lines}></div>
          <p className={cls.cardsDescription}>{data.description}</p>
          <Button state="Primary" type="button" className={cls.btnTry}>
            TRY IT NOW
          </Button>
        </div>
      ))}
    </section>
  );
};

export default Cards;
