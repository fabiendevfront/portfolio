import { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { Icon } from "@iconify/react";

/**
 * Component for Header
 * @component
 * @returns {JSX.Element}
 */
const Header = () => {
    const [showContactIcons, setShowContactIcons] = useState(false);

    // Toggle contact icons display
    const toggleContactIcons = () => {
        setShowContactIcons(!showContactIcons);
    };

    // Close contact icons
    const closeContactPopup = () => {
        setShowContactIcons(false);
    };

    return (
        <header className="header wrapper">
            <div className="header__container">
                <Link to="/" className="header__link">
                    <h1>
                        <img src={logo} className="header__logo" alt="Logo du header" />
                    </h1>
                </Link>
                <nav className="header__nav">
                    <NavLink to="/" className="header__nav-link header__nav-link--txt" onClick={closeContactPopup}>
                        Accueil
                    </NavLink>
                    <NavLink to="/about" className="header__nav-link header__nav-link--txt" onClick={closeContactPopup}>
                        Profil
                    </NavLink>
                    <NavLink to="/portfolio" className="header__nav-link header__nav-link--txt" onClick={closeContactPopup}>
                        Réalisations
                    </NavLink>
                    <div className="header__nav-link header__nav-link--txt" onClick={toggleContactIcons}>
                        Contact
                    </div>
                </nav>
                <div className={`header__contact ${showContactIcons ? "show" : ""}`}>
                    {showContactIcons && (
                        <>
                            <a href="https://github.com/fabiendevfront" className="header__svg header__svg--github">
                                <Icon icon="formkit:github" width="38" height="38" />
                            </a>
                            <a href="https://www.linkedin.com/in/fabien-ducousso/" className="header__svg header__svg--linkedin">
                                <Icon icon="uil:linkedin" width="38" height="38" />
                            </a>
                            <a href="mailto:f.ducousso@protonmail.com" className="header__svg">
                                <Icon icon="ri:mail-fill" width="40" height="40" />
                            </a>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;