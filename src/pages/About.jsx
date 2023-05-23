import { useFetch } from "../services/useFetch.jsx";
import InterestCard from "../components/InterestCard";
import pictureProfil from "../assets/images/pictureProfil.jpg"

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
                    <h2 className="about__title">Profil</h2>
                    <div className="about__head">
                        <div className="about__description">
                            <p className="about__paragraph about__paragraph--big">Bonjour, je suis Fabien.</p>
                            <p className="about__paragraph">
                                Ma passion pour la programmation a commencé il y a quelques années lorsque j’ai commencé à développer mes compétences en HTML, CSS et 
                                JavaScript. Depuis, j’ai suivi deux formations, une en développement web et web mobile, puis la seconde pour me spécialiser en développement 
                                front-end avec React JS. Ces formations m’ont permis de maîtriser les technologies clés pour le développement front-end, notamment HTML, CSS, 
                                JavaScript, SASS, React, Redux, Node JS et Git. J’ai acquis des compétences dans l’utilisation d’API REST, le responsive design, l’accessibilité et le testing.
                            </p>
                            <p className="about__paragraph">
                                Au-delà de mes compétences techniques, j’ai également acquis une solide expérience en gestion de clientèle grâce à mon expérience précédente 
                                en tant que responsable du service technique et formateur d’un extranet pour diagnostiqueurs immobiliers au sein d’une agence web. Cette expérience 
                                m’a permis de développer des compétences en communication, en formation et en résolution de problèmes.
                            </p>
                            <p className="about__paragraph">
                                En dehors du développement web, je suis passionné de randonnée en montagne, pendant lesquelles je contribue à des projets géo-participatifs open source, 
                                tel qu’OpenStreetMap, en enrichissant et améliorant la carte avec des données locales. 
                            </p>
                            <div className="about__cta">
                                <a href="/files/CV-Fabien-Ducousso.pdf" className="btn btn--about" download>Télécharger mon CV</a>
                            </div>
                        </div>
                        <div className="about__photography">
                            <img src={pictureProfil} alt="Photographie de profil randonneur" />
                        </div>
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