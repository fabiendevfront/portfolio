import { useState } from "react";
import { useFetch } from "../services/useFetch.jsx";
import PortfolioCard from "../components/PortfolioCard.jsx";
import Loader from "../components/Loader.jsx";
import Animation from "../components/Animation.jsx";
import { slideUp } from "../utils/animationVariants.js";
import Modal from "../components/Modal.jsx";


const Portfolio = () => {
    const { data, loading, error, loadingComplete } = useFetch("/data/works.json", true);
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
    const [displayModal, setDisplayModal] = useState(false);

    const toggleModal = (project, index) => {
        setDisplayModal(!displayModal);
        setSelectedProject(project);
        setSelectedProjectIndex(index);
    };

    const previousProject = () => {
        const previousIndex = (selectedProjectIndex - 1 + data.length) % data.length;
        setSelectedProject(data[previousIndex]);
        setSelectedProjectIndex(previousIndex);
    };

    const nextProject = () => {
        const nextIndex = (selectedProjectIndex + 1) % data.length;
        setSelectedProject(data[nextIndex]);
        setSelectedProjectIndex(nextIndex);
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : error && !loading ? (
                <span>Erreur lors du chargement des données</span>
            ) : data ? (
                <section className={`portfolio wrapper wrapper--pages ${loadingComplete ? "loaded" : ""}`}>
                    <div className="portfolio__head">
                        <h2 className="portfolio__title">Mes réalisations</h2>
                        <p className="portfolio__subtitle">Vous retrouverez ci-dessous mes réalisations, cliquez dessus pour plus de détails.</p>
                    </div>
                    <Animation className="portfolio__works" variants={slideUp}>
                        {data.map((work, index) =>
                            <div className="portfolio__works-item" key={work.id}>
                                <PortfolioCard id={work.id} thumbnail={work.thumbnail} name={work.name} technologies={work.technologies} onClick={() => toggleModal(work, index)} />
                            </div>
                        )}
                    </Animation>
                    { displayModal && (
                        <Modal
                            hideModal={toggleModal}
                            previousProject={previousProject}
                            nextProject={nextProject}
                            project={selectedProject}
                        />
                    ) }
                </section>) : (
                <span>La page rencontre un problème</span>
            )}
        </>
    );
};

export default Portfolio;