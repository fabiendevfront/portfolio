import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";

/**
 * The Layout component
 * @param {React.ReactNode} [props.children]
 * @returns A React component
 */
const Layout = ({ children }) => {

    return (
        <>
            <Header />
            <main className="main">{children}</main>
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;