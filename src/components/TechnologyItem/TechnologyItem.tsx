import cls from './TechnologyItem.module.scss'
import { FC } from 'react';

type TechnologiesItemProps = {
  id: string;
  img: string;
};

const TechnologyItem: FC<TechnologiesItemProps> = ({ id, img }) => {
  return (
    <div className={cls.wrapper} >
      <img src={img} alt="" key={id}/>
    </div>
  );
};

export default TechnologyItem;