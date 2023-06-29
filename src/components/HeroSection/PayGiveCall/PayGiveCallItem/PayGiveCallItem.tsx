import { CONTACT_DATA } from "../../../../constants/contactData";
import { FC } from "react";
import cls from "./PayGiveCallItem.module.scss";

type PayGiveCallItemProps = {
  id: number;
  icon: string;
  imgAlt: string;
  title: string;
  description: string;
};

const PayGiveCallItem: FC<PayGiveCallItemProps> = ({
  description,
  id,
  icon,
  title,
}) => {
  return (
    <section className={cls.payGive} key={id}>
      <img src={icon} alt="icon" />
      <div className={cls.Texts}>
        <p className={cls.TextsP1}>{title}</p>
        <p className={cls.TextsP2}>{description}</p>
      </div>
      {id !== CONTACT_DATA.length - 1 && <div className={cls.lines}></div>}
    </section>
  );
};

export default PayGiveCallItem;
