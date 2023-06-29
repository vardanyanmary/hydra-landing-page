import michelangelo from "../../shared/assets/pexels-michelangelo-buonarroti-8728382 1.jpg";
import Button from "../../../shared/ui/Button/Button";
import arrow from "../../shared/assets/arrow-small-right.png";
import cls from "./VirtualReality.module.scss";
import { IMG_CONFIGS } from "../../../constants/imgConfigs";

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
        {IMG_CONFIGS.map((config, id) => (
          <img
            key={id}
            src={config.src}
            alt={config.alt}
            className={config.className}
          />
        ))}

        <img src={michelangelo} alt="img" className={cls.img} />
      </div>
    </section>
  );
};

export default VirtualReality;
