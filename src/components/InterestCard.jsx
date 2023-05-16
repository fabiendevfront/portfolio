const InterestCard = ({ icon, label }) => {
    return (
        <div className="interest-card">
            <i className={`interest-card__icon ${icon}`}></i>
            <p className="interest-card__label">{label}</p>
        </div>
    );
};

export default InterestCard;