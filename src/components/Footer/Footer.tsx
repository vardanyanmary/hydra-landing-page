import cls from "./Footer.module.scss";
import { ReactComponent as Frame } from "../../shared/assets/Frame.svg";
import { ReactComponent as Facebook } from "../../shared/assets/facebook.svg";
import { ReactComponent as Pinterest } from "../../shared/assets/pinterest.svg";
import { ReactComponent as Twitter } from "../../shared/assets/twitter.svg";
import { ReactComponent as Linkedin } from "../../shared/assets/linkedin.svg";
import { ReactComponent as Instagram } from "../../shared/assets/instagram.svg";
import { ReactComponent as YouTube } from "../../shared/assets/youtube.svg";
import Button from "../../shared/ui/Button/Button";

const Footer = () => {
  return (
    <footer className={cls.footer}>
      <article className={cls.footerArticle}>
        <Frame className={cls.footerSection} />

        <div className={cls.linesColumns}></div>

        <section className={cls.footerSection}>
          <nav className={cls.Navbar}>
            <a href="">ABOUT</a>
            <a href="">SERVICES</a>
            <a href="">TECHNOLOGIES</a>
            <a href="">HOW TO</a>
            <a href="">JOIN HYDRA</a>
          </nav>
        </section>

        <div className={cls.linesColumns}></div>

        <section className={cls.footerSection}>
          <nav className={cls.Navbar}>
            <a href="">F.A.Q</a>
            <a href="">SITEMAP</a>
            <a href="">CONDITIONS</a>
            <a href="">LICENCES</a>
          </nav>
        </section>

        <div className={cls.linesColumns}></div>

        <section className={cls.footerSection}>
          <p className={cls.footerP}>SOCIALIZE WITH HYDRA</p>
          <div className={cls.footerDiv}>
            <Facebook className={cls.icons} />
            <Twitter className={cls.icons} />
            <Linkedin className={cls.icons} />
            <YouTube className={cls.icons} />
            <Instagram className={cls.icons} />
            <Pinterest className={cls.icons} />
          </div>
          <Button state="Primary" type="button">
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
