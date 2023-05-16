import InterestCard from "../components/InterestCard";

const About = () => {
    return (
        <section className="about">
            <div className="about__head">
                <h2 className="about__title">Profil</h2>
                <p className="about__description"> Bonjour, je suis Fabien. J'ai toujours eu un goût prononcé pour l'informatique que j'ai apprise en autodidacte.</p>
            </div>
            <div className="about__interests">
                <h3 className="about__interests-title">Mes intérêts</h3>
                <div className="about__interests-items">
                    <InterestCard icon="fas fa-mountain" label="Randonnée en montagne" />
                    <InterestCard icon="fas fa-camera-retro" label="Photographie de nature" />
                    <InterestCard icon="fas fa-map-marked-alt" label="Projets géo-participatifs" />
                </div>
            </div>
        </section>
    );
};

export default About;