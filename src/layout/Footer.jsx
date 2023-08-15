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
                    <div className="footer__nav">
                        <div className="footer__logo">
                            <Link to="/" className="header__link">
                                <img src={footerLogo} className="footer__logo" alt="Logo du footer" />
                            </Link>
                        </div>
                        <nav className="footer__social">
                            <div className="footer__social-item">
                                <a href="https://github.com/fabiendevfront" className="footer__social-link"><Icon icon="bi:github" color="white" width="30" height="30" className="footer__social-icon footer__social-icon--github" /></a>
                            </div>
                            <div className="footer__social-item">
                                <a href="https://www.linkedin.com/in/fabien-ducousso/" className="footer__social-link"><Icon icon="bi:linkedin" color="white" width="30" height="30" className="footer__social-icon footer__social-icon--linkedin" /></a>
                            </div>
                            <div className="footer__social-item">
                                <a href="mailto:f.ducousso@protonmail.com" className="footer__social-link"><Icon icon="ri:mail-fill" color="white" width="35" height="35" className="footer__social-icon" /></a>
                            </div>
                        </nav>
                        <div className="footer__copyright">
                            <p><Link to="/" className="footer__copyright-link">fabiendev.com</Link> ©{new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;