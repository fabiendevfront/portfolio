import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Component for Link Button
 * @component
 * @param {Object} props - Component's props
 * @param {string} props.btnLink - The link of the button
 * @param {string} props.btnStyle - The className of the button
 * @param {string} props.label - The label of the button
 * @returns {JSX.Element}
 */
const LinkButton = ({ btnLink, btnStyle, label }) => {
    return (
        <Link to={btnLink} className={btnStyle}>{label}</Link>
    );
};

// PropTypes for LinkButton component
LinkButton.propTypes = {
    btnLink: PropTypes.string.isRequired,
    btnStyle: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default LinkButton;