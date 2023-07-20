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
    const [displayModal, setDisplayModal] = useState(false);

    const toggleModal = (project) => {
        setDisplayModal(!displayModal);
        setSelectedProject(project);
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
                        {data.map((work) =>
                            <div className="portfolio__works-item" key={work.id}>
                                <PortfolioCard id={work.id} thumbnail={work.thumbnail} name={work.name} categories={work.categories} onClick={() => toggleModal(work)} />
                            </div>
                        )}
                    </Animation>
                    { displayModal && (
                        <Modal
                            hideModal={toggleModal}
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