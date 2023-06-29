import "@fontsource/montserrat/400.css";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import TechSection from "./components/TechSection/TechSection";
import ProcessSection from "./components/ProcessSection/ProcessSection";
import OptInSection from "./components/OptInSection/OptInSection";
import FooterSection from "./components/FooterSection/FooterSection";

const App = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <TechSection />
      <ProcessSection />
      <OptInSection />
      <FooterSection />
    </div>
  );
};

export default App;
