import LinkButton from "../components/LinkButton";

const HeroBanner = () => {
    return (
        <section className="hero">
            <p className="hero__intro">Bienvenue ! Je suis Fabien</p>
            <h2 className="hero__title">Développeur front-end</h2>
            <p className="hero__subtitle">
                Passionné par la création d'interfaces utilisateur intuitives et fonctionnelles, avec de bonnes bases en ReactJS.
            </p>
            <div className="hero__cta">
                <LinkButton btnLink="/about" btnStyle="btn btn--home" label="En savoir plus" />
            </div>
        </section>
    );
};

export default HeroBanner;