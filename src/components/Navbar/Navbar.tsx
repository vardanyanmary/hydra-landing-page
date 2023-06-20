import cls from './Navbar.module.scss'

const Navbar = () => {
    return(
        <div className={cls.Navbar}>
            <a href="">ABOUT</a>
            <a href="">SERVICES</a>
            <a href="">TECHNOLOGIES</a>
            <a href="">HOW TO</a>
        </div>
    );
}

export default Navbar