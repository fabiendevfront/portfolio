import forest from "../assets/images/forest.png";
import footerLogo from "../assets/footerLogo.png";
import { Link } from "react-router-dom";

const Footer = ({ footerStyle }) => {
    return (
        <div className={footerStyle}>
            <div className="footer__background">
                <img src={forest} alt="Visuel montagne" className="footer__picture" />
            </div>
            <div className="footer__container">
                <div className="footer__nav">
                    <div className="footer__logo">
                        <Link to="/" className="header__link">
                            <img src={footerLogo} className="footer__logo" alt="Logo du footer" />
                        </Link>
                    </div>
                    <nav className="footer__social">
                        <div className="footer__social-item">
                            <a href="https://github.com/fabiendevfront" className="footer__social-link footer__social-link--github"><i className="footer__social-icon fab fa-github"></i></a>
                        </div>
                        <div className="footer__social-item">
                            <a href="https://www.linkedin.com/in/fabien-ducousso/" className="footer__social-link footer__social-link--linkedin"><i className="footer__social-icon fab fa-linkedin-in"></i></a>
                        </div>
                        <div className="footer__social-item">
                            <a href="mailto:f.ducousso@protonmail.com" className="footer__social-link"><i className="footer__social-icon far fa-envelope"></i></a>
                        </div>
                    </nav>
                    <div className="footer__copyright">
                        <p><a href="https://fabiendev.com" className="footer__copyright-link">fabiendev.com</a> ©{new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;