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
    // Ref to contact icons link to detect outside clicks
    const contactIconsRef = useRef();
    // Ref to contact icons popup to detect inside clicks
    const contactIconsContentRef = useRef();

    // Toggle mobile menu
    const toggleMobileMenu = (event) => {
        event.stopPropagation();
        setShowMobileMenu(!showMobileMenu);
    };

    // Toggle contact icons
    const toggleContactIcons = () => {
        setShowContactIcons(!showContactIcons);
    };

    // New version of useEffect after refactoring
    useEffect(() => {
        // Function to handle clicks outside of the mobile menu and contact icons
        const handleOutsideClick = (event) => {
            // Close the mobile menu if clicked outside
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setShowMobileMenu(false);
            }

            // Close the contact icons popup if clicked outside
            if (contactIconsRef.current && !contactIconsRef.current.contains(event.target)) {
                setShowContactIcons(false);
            }
        };

        // Function to handle window resize
        const handleResize = () => {
            // Close the mobile menu on window resize
            if (showMobileMenu) {
                setShowMobileMenu(false);
            }
            // Close the contact icons popup on window resize
            if (showContactIcons) {
                setShowContactIcons(false);
            }
        };

        // Function to prevent propagation clicks inside contact icons content
        const handleInsideContactContentClick = (event) => {
            if (contactIconsContentRef.current && contactIconsContentRef.current.contains(event.target)) {
                event.stopPropagation();
            }
        };

        // Save the current value of the contactIconsContentRef
        let contactIconsContentRefCurrent = contactIconsContentRef.current;

        // Add event listeners when mobile menu or contact icons are active
        if (showMobileMenu || showContactIcons) {
            document.addEventListener("click", handleOutsideClick);
            contactIconsContentRefCurrent.addEventListener("click", handleInsideContactContentClick);
            window.addEventListener("resize", handleResize);
        }

        // Clean up event listeners when the component unmounts or dependencies change
        return () => {
            document.removeEventListener("click", handleOutsideClick);
            contactIconsContentRefCurrent.removeEventListener("click", handleInsideContactContentClick);
            window.removeEventListener("resize", handleResize);
        };
    }, [showMobileMenu, showContactIcons]);


    return (
        <header className="header wrapper">
            <div className="header__container">
                <Link to="/" className="header__link">
                    <h1>
                        <img src={logo} className="header__logo" alt="Logo du header" />
                    </h1>
                </Link>
                <nav ref={mobileMenuRef} className={`header__nav ${showMobileMenu ? "header__nav--mobile" : ""}`}>
                    <NavLink to="/" className="header__nav-link header__nav-link--txt">
                        Accueil
                    </NavLink>
                    <NavLink to="/about" className="header__nav-link header__nav-link--txt">
                        Profil
                    </NavLink>
                    <NavLink to="/portfolio" className="header__nav-link header__nav-link--txt">
                        Réalisations
                    </NavLink>
                    <div ref={contactIconsRef} className="header__nav-link header__nav-link--txt" onClick={toggleContactIcons}>
                        Contact
                        <div ref={contactIconsContentRef} className={`header__contact ${showContactIcons ? "show" : ""}`}>
                            {showContactIcons && (
                                <>
                                    <a href="https://github.com/fabiendevfront" target="_blank" rel="noopener noreferrer" className="header__contact-link">
                                        <Icon icon="formkit:github" className="header__contact-icon header__contact-icon--github" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/fabien-ducousso/" target="_blank" rel="noopener noreferrer" className="header__contact-link">
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