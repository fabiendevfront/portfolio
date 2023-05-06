import LinkButton from "../components/LinkButton";

const HeroBanner = () => {
    return (
        <section className="hero">
            <p className="hero__intro">Bienvenue ! Je suis Fabien</p>
            <h2 className="hero__title">Développeur front-end</h2>
            <p className="hero__subtitle">
                Je suis passionné par la création d&apos;interfaces utilisateur intuitives et fonctionnelles, avec de bonnes bases en ReactJS.<br />
                De part mon expérience, je suis doté d&apos;une bonne aisance relationnelle qui me permet de former et accompagner les utilisateurs finaux.
            </p>
            <div className="hero__cta">
                <LinkButton btnLink="/portfolio" btnStyle="btn btn--home" label="Mon portfolio" />
                <LinkButton btnLink="/skills" btnStyle="btn btn--home" label="Mes compétences" />
            </div>
        </section>
    );
};

export default HeroBanner;