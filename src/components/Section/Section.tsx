import React from "react";
import cls from "./Section.module.scss";
import longArrow from "../../shared/assets/Component 2.svg";
interface SectionProps {
  data: {
    title: string;
    subtitle: string;
    content: string;
  };
}

const Section: React.FC<SectionProps> = ({ data }) => {
  const { title, subtitle, content } = data;
  return (
    <section className={cls.section}>
      <div className={cls.sectionText}>
        <div>
          <p className={cls.sectionTitle}>{title}</p>
          <p className={cls.sectionSubtitle}>{subtitle}</p>
        </div>
        <img src={longArrow} alt="arrow" />
      </div>
      <p className={cls.sectionContent}>{content}</p>
    </section>
  );
};

export default Section;
