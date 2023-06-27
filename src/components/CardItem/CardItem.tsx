import { FC } from "react";
import Button from "../../shared/ui/Button/Button";
import cls from "./CardItem.module.scss";

type CardItemProps = {
  id: string;
  img: string;
  imgAlt: string;
  title: string;
  description: string;
};

const CardItem: FC<CardItemProps> = ({
  img,
  id,
  imgAlt,
  description,
  title,
}) => {
  return (
    <div key={id} className={cls.cardsDiv}>
      <img src={img} alt={imgAlt} className={cls.img} />
      <p className={cls.cardsTitle}>{title}</p>
      <div className={cls.lines}></div>
      <p className={cls.cardsDescription}>{description}</p>
      <Button state="Primary" type="button" className={cls.btnTry}>
        TRY IT NOW
      </Button>
    </div>
  );
};

export default CardItem;
