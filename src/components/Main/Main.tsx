import cls from "./Main.module.scss";
import michelangelo from "../../shared/assets/pexels-michelangelo-buonarroti-8728382 1.jpg";
import rectangle from "../../shared/assets/Rectangle 4.svg";
import Button from "../../shared/ui/Button/Button";
import arrow from "../../shared/assets/arrow-small-right.png";
import { contactData } from "../../shared/constants/contactData";
import Section from "../Section/Section";
import { sectionsData1, sectionsData2 } from "../../shared/constants/sectionData";

const Main = () => {
  return (
    <main className={cls.main}>
      <article className={cls.article}>
        <section className={cls.sections}>
          <p className={cls.dive}>
            <span className={cls.span}> Dive </span> Into The Depths Of{" "}
            <span className={cls.span}> Virtual Reality </span>
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut earum
            doloremque quas vero tenetur id veritatis nostrum ratione cum
            reprehenderit, error magnam cumque, ea dolorum vel, eveniet quaerat
            voluptate? Quae?
          </p>

          <div className={cls.btnArr}>
            <Button state="Primary" type="button">
              BUILD YOUR WORLD
            </Button>
            <img src={arrow} alt="img" className={cls.arrow} />
          </div>

        </section>

        <section className={cls.sections}>
          {/* <img src={rectangle} alt='rect' className={cls.rect}/>  */}
          <img src={michelangelo} alt="img" className={cls.img} />
        </section>
      </article>

      <article className={cls.PGC}>
        {contactData.map((data, index) => (
          <section className={cls.payGive} key={index}>
            <img src={data.icon} alt="locate" />
            <div className={cls.Texts}>
              <p className={cls.TextsP1}>{data.title}</p>
              <p className={cls.TextsP2}>{data.description}</p>
            </div>
            {index !== contactData.length-1 && <div className={cls.lines}></div>}
          </section>
        ))}
      </article>

      <Section data={sectionsData1}/>
      
      <Section data={sectionsData2}/>
    </main>
  );
};

export default Main;
