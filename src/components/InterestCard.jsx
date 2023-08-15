import { Icon } from "@iconify/react";
import PropTypes from "prop-types";

/**
* Component for Interest Card
* @component
* @param {string} icon - The icon name from the Iconify library
* @param {string} label - The label for the interest
* @returns {JSX.Element}
*/
const InterestCard = ({ icon, label }) => {
    return (
        <div className="interest-card">
            <Icon icon={icon} color="black" width="70" height="70" />
            <p className="interest-card__label">{label}</p>
        </div>
    );
};

// PropTypes for InterestCard component
InterestCard.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default InterestCard;