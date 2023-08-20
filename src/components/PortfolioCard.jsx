import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import { getThumbUrl } from "../utils/tools";

/**
 * Component for Portfolio Card
 * @component
 * @param {Object} props - Component props
 * @param {string} props.thumbnail - Thumbnail image source
 * @param {string} props.name - Name of the project
 * @param {Array} props.technologies - Array of technology icons
 * @param {function} props.onClick - Function to handle card click
 * @returns {JSX.Element}
 */
const PortfolioCard = ({ thumbnail, name, technologies, onClick }) => {


    return (
        <div className="portfolio-card" onClick={onClick}>
            <div className="portfolio-card__head">
                <div className="portfolio-card__overlay"></div>
                <img src={getThumbUrl(thumbnail)} alt="Thumbnail du projet" className="portfolio-card__thumbnail" />
                <div className="portfolio-card__caption">
                    <h3 className="portfolio-card__name">{name}</h3>
                    <div className="portfolio-card__icon">
                        {technologies.map((technologie, index) =>
                            <Icon key={index} icon={technologie} color="#ffffff" width="50" height="50" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// PropTypes for PortfolioCard component
PortfolioCard.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default PortfolioCard;