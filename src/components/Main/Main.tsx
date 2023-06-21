import cls from "./Main.module.scss";
import michelangelo from "../../shared/assets/pexels-michelangelo-buonarroti-8728382 1.jpg";
import shvets from "../../shared/assets/pexels-shvets-production-7562014 1.svg";
import Button from "../../shared/ui/Button/Button";
import arrow from "../../shared/assets/arrow-small-right.png";
import { contactData } from "../../shared/constants/contactData";
import Section from "../Section/Section";
import {
  sectionsData1,
  sectionsData2,
  sectionsData3,
} from "../../shared/constants/sectionData";

const Main = () => {
  return (
    <main className={cls.main}>
      <article className={cls.article}>
        <section className={cls.sections}>
          <div className={cls.dive}>
            <span className={cls.span}> Dive </span> Into The Depths Of{" "}
            <span className={cls.span}> Virtual Reality </span>
          </div>
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
            {index !== contactData.length - 1 && (
              <div className={cls.lines}></div>
            )}
          </section>
        ))}
      </article>

      <Section data={sectionsData1}/>

      <article className={cls.article}>
        <section className={cls.sections}>
          <img src={shvets} alt="img" className={cls.img1} />
        </section>
        <section className={cls.sections}>
          <div className={cls.dive}>
            <p className={cls.sectionTitle}>ABOUT </p>
            <span className={cls.sectionSubtitle}> HYDRA VR </span>
          </div>
          <p>
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudi n tempor.
          </p>

          <div className={cls.btnArr}>
            <Button state="Primary" type="button">
              LET’S GET IN TOUCH
            </Button>
          </div>
        </section>
      </article>

      <Section data={sectionsData2} />

      

      <Section data={sectionsData3} />
    </main>
  );
};

export default Main;
