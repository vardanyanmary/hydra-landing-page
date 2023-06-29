import cls from "./Main.module.scss";
import VirtualReality from "../VirtualReality/VirtualReality";
import Introduction from "../Introduction/Introduction";
import Why from "../Why/Why";
import PayGiveCall from "../PayGiveCall/PayGiveCall";
import Technologies from "../Technologies/Technologies";
import How from "../How/How";
import Steps from "../Steps/Steps";
import Join from "../Join/Join";
import "@fontsource/montserrat/400.css";

const Main = () => {
  return (
    <main className={cls.main}>
      <VirtualReality />
      <PayGiveCall />
      <Introduction />
      <Why />
      <Technologies />
      <How />
      <Steps />
      <Join />
    </main>
  );
};

export default Main;
