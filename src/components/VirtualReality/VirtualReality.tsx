import michelangelo from "../../shared/assets/pexels-michelangelo-buonarroti-8728382 1.jpg";
import Button from "../../shared/ui/Button/Button";
import arrow from "../../shared/assets/arrow-small-right.png";
import vector1 from "../../shared/assets/Vector1.svg";
import vector2 from "../../shared/assets/Vector2.svg";
import vector3 from "../../shared/assets/Vector3.svg";
import vector4 from "../../shared/assets/Vector4.svg";
import cls from "./VirtualReality.module.scss";

const VirtualReality = () => {
  return (
    <section className={cls.section}>
      <div className={cls.div}>
        
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
      </div>

      <div className={cls.div2}>
        <img src={vector1} alt="vector1" className={cls.vector1}/>
        <img src={vector2} alt="vector2" className={cls.vector2}/>
        <img src={vector3} alt="vector3" className={cls.vector3}/>
        <img src={vector4} alt="vector4" className={cls.vector4}/> 
        <img src={michelangelo} alt="img" className={cls.img} />
      </div>
    </section>
  );
};

export default VirtualReality;
