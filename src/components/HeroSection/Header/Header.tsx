import { ReactComponent as Frame } from "../../shared/assets/Frame.svg";
import { ReactComponent as Group } from "../../shared/assets/Group.svg";
import burgerMenu from "../../shared/assets/Hamburger-Button.svg";
import Navbar from "./Navbar/Navbar";
import Button from "../../../shared/ui/Button/Button";
import cls from "./Header.module.scss";

const Header = () => {
  return (
    <header className={cls.Header}>
      <section className={cls.headerSection}>
        <Frame />
        <Group />
      </section>
      <section className={`${cls.headerSection} ${cls.navBar}`}>
        <Navbar />
      </section>
      <section className={cls.headerSection}>
        <img src={burgerMenu} alt="menu" className={cls.burgerMenu} />
        <div className={cls.buttons}>
          <Button state="Secondary" type="button">
            CONTACT US
          </Button>
          <Button state="Primary" type="button">
            JOIN HYDRA
          </Button>
        </div>
      </section>
    </header>
  );
};

export default Header;
