import { Icon } from "@iconify/react";

const PortfolioCard = ({ thumbnail, name, technologies, onClick }) => {
    return (
        <div className="portfolio-card" onClick={onClick}>
            <div className="portfolio-card__head">
                <div className="portfolio-card__overlay"></div>
                <img src={"/src/assets/images/works/thumbnails/" + thumbnail} alt="Thumbnail du projet" className="portfolio-card__thumbnail" />
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

export default PortfolioCard;