import cls from './AboutSection.module.scss'
import Introduction from './Introduction/Introduction';

const AboutSection = () => {
    return (
      <section className={cls.AboutSection}>
        <Introduction/>
      </section>
    );
  };
  
  export default AboutSection;
  