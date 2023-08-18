import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
import { Icon } from "@iconify/react";

/**
 * Component for Header
 * @component
 * @returns {JSX.Element}
 */
const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showContactIcons, setShowContactIcons] = useState(false);

    // Ref to mobile menu to detect outside clicks
    const mobileMenuRef = useRef();

    // Add/remove click event listener to mobile menu
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setShowMobileMenu(false);
            }
        };

        if (showMobileMenu) {
            document.addEventListener("click", handleOutsideClick);
        } else {
            document.removeEventListener("click", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [showMobileMenu]);

    // Close mobile menu on window resize
    useEffect(() => {
        const handleResize = () => {
            if (showMobileMenu) {
                setShowMobileMenu(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [showMobileMenu]);

    // Toggle mobile menu
    const toggleMobileMenu = (event) => {
        event.stopPropagation();
        setShowMobileMenu(!showMobileMenu);
    };

    // Toggle contact icons
    const toggleContactIcons = () => {
        setShowContactIcons(!showContactIcons);
    };

    // Close contact icons for other menu link
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
                <nav ref={mobileMenuRef} className={`header__nav ${showMobileMenu ? "header__nav--mobile" : ""}`}>
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
                        <div className={`header__contact ${showContactIcons ? "show" : ""}`}>
                            {showContactIcons && (
                                <>
                                    <a href="https://github.com/fabiendevfront" className="header__contact-link">
                                        <Icon icon="formkit:github" className="header__contact-icon header__contact-icon--github" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/fabien-ducousso/" className="header__contact-link">
                                        <Icon icon="uil:linkedin" className="header__contact-icon header__contact-icon--linkedin" />
                                    </a>
                                    <a href="mailto:f.ducousso@protonmail.com" className="header__contact-link">
                                        <Icon icon="ri:mail-fill" className="header__contact-icon header__contact-icon--mail" />
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                </nav>
                <div className={`header__mobile-btn ${showMobileMenu ? "open" : ""}`} onClick={toggleMobileMenu}>
                    {showMobileMenu ? (
                        <Icon icon="material-symbols:close" width="30" height="30" />
                    ) : (
                        <Icon icon="material-symbols:menu" width="30" height="30" />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;