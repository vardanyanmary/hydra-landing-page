import cls from './Footer.module.scss'
import { ReactComponent as Frame } from "../../shared/assets/Frame.svg";

const Footer = () => {
    return(
        <footer className={cls.footer}>
            <article className={cls.footerArticle}>
                <Frame/>
                <section></section>
                <section></section>
                <section></section>
            </article>
            <div className={cls.lines}></div>
            <p className={cls.footerP}>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED</p>
        </footer>
    );
}

export default Footer