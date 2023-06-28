import React, { FC } from "react";
import cls from './ArrowBtn.module.scss'

type ArrowBtnProps = {
    img:string
}

const ArrowBtn:FC<ArrowBtnProps> = ({ img }) => {
  return (
    <button className={cls.arrowBtn}>
      <img src={img} alt="arrow" />
    </button>
  );
};

export default ArrowBtn;