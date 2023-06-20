import { Icon } from "@iconify/react";

const InterestCard = ({ icon, label }) => {
    return (
        <div className="interest-card">
            <Icon icon={icon} color="black" width="70" height="70" />
            <p className="interest-card__label">{label}</p>
        </div>
    );
};

export default InterestCard;