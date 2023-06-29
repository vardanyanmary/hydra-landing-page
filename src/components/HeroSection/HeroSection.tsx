import Header from "./Header/Header";
import VirtualReality from "./VirtualReality/VirtualReality";
import PayGiveCall from "./PayGiveCall/PayGiveCall";
import cls from './HeroSection.module.scss'

const HeroSection = () => {
  return (
    <section className={cls.HeroSection}>
      <Header />
      <VirtualReality />
      <PayGiveCall/>
    </section>
  );
};

export default HeroSection;
