import { FC } from 'react';
import cls from './TechnologyItem.module.scss'

type TechnologiesItemProps = {
  alt: string;
  icon: string;
};

const TechnologyItem: FC<TechnologiesItemProps> = ({ alt, icon }) => {
  return (
    <div className={cls.wrapper} >
      <img src={icon} alt={alt}/>
    </div>
  );
};

export default TechnologyItem;