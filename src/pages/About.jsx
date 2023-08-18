import { useFetch } from "../services/useFetch.jsx";
import Loader from "../components/Loader.jsx";
import InterestCard from "../components/InterestCard";
import pictureProfil from "../assets/images/pictureProfil.png";
import { Icon } from "@iconify/react";
import { Tooltip } from "react-tooltip";

/**
* Component for About page
* @component
* @returns {JSX.Element}
*/
const About = () => {
    // Fetch skills and interests data using the useFetch hook
    const { data: skillsData, loading: skillsLoading, error: skillsError, loadingComplete: skillsLoadingComplete } = useFetch("/data/skills.json");
    const { data: interestsData, loading: interestsLoading, error: interestsError, loadingComplete: interestsLoadingComplete } = useFetch("/data/interests.json");

    // Calculate overall loading completion status
    const loadingComplete = skillsLoadingComplete && interestsLoadingComplete;

    return (
        <>
            {interestsLoading || skillsLoading ? (
                <Loader />
            ) : (interestsError && !interestsLoading) || (skillsError && !skillsLoading) ? (
                <span>Erreur lors du chargement des données</span>
            ) : (
                <>
                    <section className={`about wrapper wrapper--pages ${loadingComplete ? "loaded" : ""}`}>
                        <h2 className="about__title">Bonjour, je suis Fabien</h2>
                        <div className="about__description">
                            <div className="about__description-content">
                                <p className="about__paragraph">
                                    Ma passion pour la programmation a commencé il y a quelques années lorsque j’ai commencé à développer mes compétences en HTML, CSS et 
                                    JavaScript. Depuis, j’ai suivi deux formations, une en <strong>développement web et web mobile</strong>, puis la seconde pour me spécialiser en <strong>développement 
                                    front-end avec React JS</strong>. Ces formations m’ont permis de maîtriser les technologies clés pour le développement front-end, notamment <strong>HTML, CSS, 
                                    JavaScript, SASS, React, Redux, Node JS et Git</strong>. J’ai acquis des compétences dans <strong>l’utilisation d’API REST, le responsive design, l’accessibilité et le testing</strong>.
                                </p>
                                <p className="about__paragraph">
                                    Au-delà de mes compétences techniques, j’ai également acquis <strong>une solide expérience en gestion de clientèle</strong> grâce à mon expérience précédente 
                                    en tant que responsable du service technique et formateur d’un extranet pour diagnostiqueurs immobiliers au sein d’une agence web. Cette expérience 
                                    m’a permis de développer des <strong>compétences en communication, en formation et en résolution de problèmes</strong>.
                                </p>
                                <p className="about__paragraph">
                                    En dehors du développement web, je suis passionné de randonnée en montagne, pendant lesquelles je contribue à des projets géo-participatifs open source, 
                                    tel qu’OpenStreetMap, en enrichissant et améliorant la carte avec des données locales et je fais également de la photographie.
                                </p>
                            </div>
                            <aside>
                                <div className="about__description-photography">
                                    <img src={pictureProfil} alt="Photographie de profil randonneur" />
                                </div>
                                <div className="about__description-cta">
                                    <p className="about__paragraph">Vous pouvez consulter mon CV ci-dessous :</p>
                                    <a href="/files/CV-Fabien-Ducousso.pdf" className="btn btn--about" download>Télécharger mon CV</a>
                                </div>
                            </aside>
                        </div>
                        <div className="divider"></div>
                        <div className="about__skills">
                            <h3 className="about__title">Mes compétences</h3>
                            <p className="about__paragraph">
                                En tant que développeur front-end, je sais utiliser différents langages et outils, en voici les principaux :
                            </p>
                            <ul className="about__skills-list">
                                {skillsData.map((skill) =>
                                    <li className="about__skills-icon" key={skill.id}>
                                        <a id={`tooltip-${skill.id}`} className="about__skills-anchor">
                                            <Icon icon={skill.icon} color="#000000" width="70" height="70" />
                                        </a>
                                        <Tooltip
                                            anchorSelect={`#tooltip-${skill.id}`}
                                            className="about__skills-tooltip"
                                            classNameArrow="about__skills-arrow"
                                        >
                                            {skill.label}
                                        </Tooltip>
                                    </li>
                                )}
                            </ul>
                        </div>
                        <div className="divider"></div>
                        <div className="about__interests">
                            <h3 className="about__title">Mes intérêts</h3>
                            <div className="about__interests-items">
                                {interestsData.map((interest) =>
                                    <InterestCard key={interest.id} icon={interest.icon} label={interest.label} />
                                )}
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    );
};

export default About;