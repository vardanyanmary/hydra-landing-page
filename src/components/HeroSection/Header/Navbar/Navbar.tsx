import { NAVBAR_ITEMS } from "../../../../constants/navBar";
import cls from "./Navbar.module.scss";

const Navbar = () => {
  const navLinks = NAVBAR_ITEMS.map((item, id) => (
    <a key={id} href="">
      {item}
    </a>
  ));

  return <nav className={cls.Navbar}>{navLinks}</nav>;
};

export default Navbar;
