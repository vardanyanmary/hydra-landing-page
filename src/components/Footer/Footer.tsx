import cls from "./Footer.module.scss";
import { ReactComponent as Frame } from "../../shared/assets/Frame.svg";
import { ReactComponent as Vector } from "../../shared/assets/Vector 21.svg";
import Button from "../../shared/ui/Button/Button";
import {
  FOOTER_ICONS,
  FOOTER_INFO_COLUMN,
  FOOTER_NAVBAR_ITEMS,
} from "../../constants/footer";

const Footer = () => {
  return (
    <footer className={cls.footer}>
      <article className={cls.footerArticle}>
        <Frame className={cls.footerSection} />

        <Vector />

        <section className={cls.footerSection}>
          <nav className={cls.Navbar}>
            {FOOTER_NAVBAR_ITEMS.map((item, index) => (
              <a key={index} href="">
                {item}
              </a>
            ))}
          </nav>
        </section>

        <Vector />

        <section className={cls.footerSection}>
          <nav className={cls.Navbar}>
            {FOOTER_INFO_COLUMN.map((item, index) => (
              <a key={index} href="">
                {item}
              </a>
            ))}
          </nav>
        </section>

        <Vector />

        <section className={cls.footerSection}>
          <p className={cls.footerP}>SOCIALIZE WITH HYDRA</p>
          <div className={cls.footerDiv}>
            {FOOTER_ICONS.map(({ component: IconComponent, key }) => (
              <IconComponent className={cls.icons} key={key} />
            ))}
          </div>
          <Button state="Primary" type="button" className={cls.footerBtn}>
            BUILD YOUR WORLD
          </Button>
        </section>
      </article>

      <div className={cls.lines}></div>

      <p className={cls.footerP}>
        2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED
      </p>
    </footer>
  );
};

export default Footer;
