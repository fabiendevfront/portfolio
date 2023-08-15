import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";

/**
 * Component for the Layout
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

// PropTypes for the Layout component
Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;