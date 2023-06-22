import { CARDS_INFO } from "../../constants/cardsInfo";
import Button from "../../shared/ui/Button/Button";

import cls from "./Cards.module.scss";

const Cards = () => {
  return (
    <section className={cls.cardsSection}>

        {CARDS_INFO.map((data,index)=>(
            <div key={index}>
                <img src={data.img} alt={data.imgAlt}/>
                <p>{data.title}</p>
                <div className={cls.lines}></div>
                <p>{data.description}</p>
                <Button state="Primary" type="button">
                    TRY IT NOW
                </Button>
            </div>
        ))}

    </section>
  );
};

export default Cards;
