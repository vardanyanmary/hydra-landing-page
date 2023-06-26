import React from "react";
import cls from "./IntroWhyHowSections.module.scss";
import longArrow from "../../shared/assets/Component 2.svg";

interface SectionProps {
  data: {
    title: string;
    subtitle: string;
    content: string;
  };
}

const IntroWhyHowSections: React.FC<SectionProps> = ({data: { title, subtitle, content }}) => {
  return (
    <section className={cls.introWhyHowSections}>
      <div className={cls.divText}>
        <div>
          <p className={cls.pTitle}>{title}</p>
          <p className={cls.pSubtitle}>{subtitle}</p>
        </div>
        <img src={longArrow} alt="arrow" className={cls.arrow}/>
      </div>
      <p className={cls.pContent}>{content}</p>
    </section>
  );
};

export default IntroWhyHowSections;
