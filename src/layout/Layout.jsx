import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * The Layout component
 * @param {React.ReactNode} [props.children]
 * @returns A React component
 */
const Layout = ({ children }) => {
    const location = useLocation();
    return (
        <>
            <Header />
            <main className={location.pathname === "/about" ? "main main--mint" : "main"}>{children}</main>
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;