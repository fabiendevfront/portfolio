import logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header__link">
                <h1>
                    <img src={logo} className="header__logo" alt="Logo du header" />
                </h1>
            </Link>
            <nav className="header__nav">
                <NavLink to="/" className="header__nav-link">
                    Accueil
                </NavLink>
                <NavLink to="/about" className="header__nav-link">
                    Profil
                </NavLink>
                <NavLink to="/skills" className="header__nav-link">
                    Compétences
                </NavLink>
                <NavLink to="/portfolio" className="header__nav-link">
                    Réalisations
                </NavLink>
                <NavLink to="/contact" className="header__nav-link">
                    Contact
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;