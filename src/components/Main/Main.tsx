import cls from "./Main.module.scss";
import VirtualReality from "../VirtualReality/VirtualReality";
import Introduction from "../Introduction/Introduction";
import Why from "../Why/Why";
import PayGiveCall from "../PayGiveCall/PayGiveCall";
import Technologies from "../Technologies/Technologies";
import How from "../How/How";

const Main = () => {
  return (
    <main className={cls.main}>
      <VirtualReality />
      <PayGiveCall />
      <Introduction />
      <Why />
      <Technologies/>
      <How/>
    </main>
  );
};

export default Main;
