import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const PortfolioCard = ({ id, thumbnail, name, categories }) => {
    console.log(categories);
    return (
        <div className="portfolio-card">
            <Link to={"/work/" + id} className="portfolio-card__link">
                <div className="portfolio-card__head">
                    <div className="portfolio-card__overlay"></div>
                    <img src={"/src/assets/images/works/thumbnails/" + thumbnail} alt="Thumbnail du projet" className="portfolio-card__thumbnail" />
                    <div className="portfolio-card__caption">
                        <h3 className="portfolio-card__name">{name}</h3>
                        <div className="portfolio-card__icon">
                            {categories.map((categorie, index) =>
                                <Icon key={index} icon={categorie} color="#ffffff" width="50" height="50" />
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default PortfolioCard;