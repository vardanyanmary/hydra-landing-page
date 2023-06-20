import cls from "./Main.module.scss";
import michelangelo from "../../shared/assets/pexels-michelangelo-buonarroti-8728382 1.jpg";
import rectangle from "../../shared/assets/Rectangle 4.svg";
import Button from "../../shared/ui/Button/Button";
import arrow from "../../shared/assets/arrow-small-right.png";
import location from "../../shared/assets/Combined-Shape.svg";
import shape from "../../shared/assets/shape.svg";
import shape1 from "../../shared/assets/shape1.svg";

const Main = () => {
  return (
    <main className={cls.Main}>
      <article className={cls.article}>
        <section className={cls.sections}>
          <div>
            <p className={cls.dive}>
              <span className={cls.span}> Dive </span> Into The Depths Of{" "}
              <span className={cls.span}> Virtual Reality </span>
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
              earum doloremque quas vero tenetur id veritatis nostrum ratione
              cum reprehenderit, error magnam cumque, ea dolorum vel, eveniet
              quaerat voluptate? Quae?
            </p>
          </div>
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
        <section className={cls.payGive}>
          <img src={location} alt="locate" />
          <div className={cls.Texts}>
            <p className={cls.TextsP1}>Pay Us a Visit</p>
            <p className={cls.TextsP2}>
              Union St, Seattle,WA 98101 , United States
            </p>
          </div>
        </section>
        <section className={cls.payGive}>
          <img src={shape} alt="locate" />
          <div className={cls.Texts}>
            <p className={cls.TextsP1}>Give Us a Call</p>
            <p className={cls.TextsP2}>
              (110) 1111 - 1010
            </p>
          </div>
        </section>
        <section className={cls.payGive}>
          <img src={shape1} alt="locate" />
          <div className={cls.Texts}>
            <p className={cls.TextsP1}>Send Us a Message</p>
            <p className={cls.TextsP2}>
              Contact@HydraVTech.com
            </p>
          </div>
        </section>
      </article>
    </main>
  );
};

export default Main;
