import michelangelo from "../../shared/assets/pexels-michelangelo-buonarroti-8728382 1.jpg";
import Button from "../../shared/ui/Button/Button";
import arrow from "../../shared/assets/arrow-small-right.png";
// import vector1 from "../../shared/assets/Vector 1.svg";
// import vector2 from "../../shared/assets/Vector 2.svg";
// import vector3 from "../../shared/assets/Vector 3.svg";
// import vector4 from "../../shared/assets/Vector 4.svg";
import cls from "./VirtualReality.module.scss";

const VirtualReality = () => {
  return (
    <article className={cls.article}>
      <section className={cls.sections}>
        
        <div className={cls.dive}>
          <p className={cls.virtualReality}>
            <span className={cls.span}> Dive </span> Into The Depths
          </p>
          <p className={cls.virtualReality}>
            Of <span className={cls.span}> Virtual Reality </span>
          </p>
        </div>

        <p className={cls.VRp}>
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

      <section className={cls.sections2}>
        {/* <img src={vector1} alt="vector1" className={cls.vectors}/>
        <img src={vector2} alt="vector2" className={cls.vectors}/>
        <img src={vector3} alt="vector3" className={cls.vectors1}/>
        <img src={vector4} alt="vector4" className={cls.vectors}/>  */}
        <img src={michelangelo} alt="img" className={cls.img} />
      </section>
    </article>
  );
};

export default VirtualReality;
