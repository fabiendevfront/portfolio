import { Icon } from "@iconify/react";
import footerCoverLight from "../assets/images/footerCoverLight.png";
import footerLogo from "../assets/footerLogo.png";
import { Link } from "react-router-dom";

/**
 * Component for Footer
 * @component
 * @returns {JSX.Element}
 */
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__background">
                <img src={footerCoverLight} alt="Visuel montagne" className="footer__picture" />
            </div>
            <div className="footer__container">
                <div className="footer__content wrapper">
                    <div className="footer__logo">
                        <Link to="/" className="header__link">
                            <img src={footerLogo} className="footer__logo" alt="Logo du footer" />
                        </Link>
                    </div>
                    <nav className="footer__social">
                        <a href="https://github.com/fabiendevfront" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                            <Icon icon="bi:github" className="footer__social-icon footer__social-icon--github" />
                        </a>
                        <a href="https://www.linkedin.com/in/fabien-ducousso/" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                            <Icon icon="bi:linkedin" className="footer__social-icon footer__social-icon--linkedin" />
                        </a>
                        <a href="mailto:f.ducousso@protonmail.com" className="footer__social-link">
                            <Icon icon="ri:mail-fill" className="footer__social-icon footer__social-icon--mail" />
                        </a>
                    </nav>
                    <p className="footer__copyright">
                        <Link to="/" className="footer__copyright-link">fabiendev.com</Link> ©{new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;