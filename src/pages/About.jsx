import { useFetch } from "../services/useFetch.jsx";
import InterestCard from "../components/InterestCard";

const About = () => {
    const { data, loading, error } = useFetch("/data/interests.json");

    return (
        <>
            {loading ? (
                <span>Chargement des données...</span>
            ) : error && !loading ? (
                <span>Erreur lors du chargement des données</span>
            ) : data ? (
                <section className="about">
                    <div className="about__head">
                        <h2 className="about__title">Profil</h2>
                        <p className="about__description"> Bonjour, je suis Fabien. J'ai toujours eu un goût prononcé pour l'informatique que j'ai apprise en autodidacte.</p>
                    </div>
                    <div className="about__interests">
                        <h3 className="about__interests-title">Mes intérêts</h3>
                        <div className="about__interests-items">
                            {data.map((interest) =>
                                <InterestCard key={interest.id} icon={interest.icon} label={interest.label} />
                            )}
                        </div>
                    </div>
                </section>) : (
                <span>La page rencontre un problème</span>
            )}
        </>
    );
};

export default About;